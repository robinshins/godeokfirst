#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const projectRoot = path.join(__dirname, '..');
const publicDir = path.join(projectRoot, 'public');
const srcDir = path.join(projectRoot, 'src');
const mappingFile = path.join(__dirname, 'path-mapping.txt');

// Read mapping file
const mappingContent = fs.readFileSync(mappingFile, 'utf-8');
const mappings = [];

for (const line of mappingContent.split('\n')) {
  if (line.startsWith('#') || !line.trim()) continue;
  const [oldPath, newPath] = line.split('|');
  if (oldPath && newPath) {
    mappings.push({ oldPath: oldPath.trim(), newPath: newPath.trim() });
  }
}

console.log(`Loaded ${mappings.length} path mappings\n`);

// Sort mappings by path depth (deepest first) for proper directory creation
mappings.sort((a, b) => {
  const depthA = a.newPath.split('/').length;
  const depthB = b.newPath.split('/').length;
  return depthB - depthA;
});

// Step 1: Create new directory structure and copy files
console.log('=== Step 1: Renaming files ===\n');

let filesRenamed = 0;
let filesMissing = 0;
const errors = [];

for (const mapping of mappings) {
  const oldFullPath = path.join(publicDir, mapping.oldPath);
  const newFullPath = path.join(publicDir, mapping.newPath);

  // Check if source file exists
  if (!fs.existsSync(oldFullPath)) {
    console.log(`MISSING: ${mapping.oldPath}`);
    filesMissing++;
    continue;
  }

  // Create target directory if needed
  const newDir = path.dirname(newFullPath);
  if (!fs.existsSync(newDir)) {
    fs.mkdirSync(newDir, { recursive: true });
  }

  // Move file
  try {
    fs.renameSync(oldFullPath, newFullPath);
    console.log(`RENAMED: ${mapping.oldPath} -> ${mapping.newPath}`);
    filesRenamed++;
  } catch (err) {
    console.log(`ERROR: ${mapping.oldPath} - ${err.message}`);
    errors.push({ mapping, error: err.message });
  }
}

console.log(`\nFiles renamed: ${filesRenamed}`);
console.log(`Files missing: ${filesMissing}`);
console.log(`Errors: ${errors.length}`);

// Step 2: Update code references
console.log('\n=== Step 2: Updating code references ===\n');

function updateCodeReferences(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let filesUpdated = 0;

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      if (entry.name !== 'node_modules' && entry.name !== '.next' && entry.name !== '.git') {
        filesUpdated += updateCodeReferences(fullPath);
      }
    } else if (/\.(ts|tsx|js|jsx|json|md)$/.test(entry.name)) {
      let content = fs.readFileSync(fullPath, 'utf-8');
      let updated = false;

      for (const mapping of mappings) {
        // Escape special regex characters in old path
        const escapedOldPath = mapping.oldPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(escapedOldPath, 'g');

        if (regex.test(content)) {
          content = content.replace(regex, mapping.newPath);
          updated = true;
        }
      }

      if (updated) {
        fs.writeFileSync(fullPath, content, 'utf-8');
        console.log(`UPDATED: ${fullPath.replace(projectRoot, '')}`);
        filesUpdated++;
      }
    }
  }

  return filesUpdated;
}

const srcUpdated = updateCodeReferences(srcDir);
console.log(`\nCode files updated: ${srcUpdated}`);

// Step 3: Clean up empty directories
console.log('\n=== Step 3: Cleaning up empty directories ===\n');

function removeEmptyDirs(dir) {
  if (!fs.existsSync(dir)) return;

  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let removed = 0;

  for (const entry of entries) {
    if (entry.isDirectory()) {
      const fullPath = path.join(dir, entry.name);
      removed += removeEmptyDirs(fullPath);
    }
  }

  // Re-read to check if directory is now empty
  const remaining = fs.readdirSync(dir);
  if (remaining.length === 0 && dir !== publicDir) {
    fs.rmdirSync(dir);
    console.log(`REMOVED EMPTY DIR: ${dir.replace(publicDir, '')}`);
    removed++;
  }

  return removed;
}

const dirsRemoved = removeEmptyDirs(publicDir);
console.log(`\nEmpty directories removed: ${dirsRemoved}`);

// Summary
console.log('\n=== Summary ===');
console.log(`Files renamed: ${filesRenamed}`);
console.log(`Files missing: ${filesMissing}`);
console.log(`Code files updated: ${srcUpdated}`);
console.log(`Empty directories removed: ${dirsRemoved}`);
console.log(`Errors: ${errors.length}`);

if (errors.length > 0) {
  console.log('\nErrors:');
  for (const { mapping, error } of errors) {
    console.log(`  ${mapping.oldPath}: ${error}`);
  }
}
