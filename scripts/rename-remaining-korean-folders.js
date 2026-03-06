#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');

// Korean folder to English mapping
const folderMappings = {
  // images/cases 하위
  'images/cases/사랑니': 'images/cases/wisdom-tooth-old',
  'images/cases/신경치료': 'images/cases/nerve-treatment-old',
  'images/cases/임플란트': 'images/cases/implant-old',
  'images/cases/임플란트_new': 'images/cases/implant-new-korean',
  'images/cases/전체임플란트': 'images/cases/full-implant-old',

  // images 직하위
  'images/사랑니케이스': 'images/wisdom-tooth-cases',
  'images/잇몸치료케이스': 'images/gum-treatment-cases',
  'images/충치치료신경치료보존치료케이스': 'images/cavity-nerve-treatment-cases',
};

console.log('=== Renaming Remaining Korean Folders ===\n');

let foldersRenamed = 0;
let foldersMissing = 0;
let errors = [];

for (const [koreanPath, englishPath] of Object.entries(folderMappings)) {
  const oldFullPath = path.join(publicDir, koreanPath);
  const newFullPath = path.join(publicDir, englishPath);

  if (!fs.existsSync(oldFullPath)) {
    console.log(`SKIP (not found): ${koreanPath}`);
    foldersMissing++;
    continue;
  }

  // Check if target already exists
  if (fs.existsSync(newFullPath)) {
    console.log(`SKIP (target exists): ${englishPath}`);
    continue;
  }

  try {
    fs.renameSync(oldFullPath, newFullPath);
    console.log(`RENAMED: ${koreanPath} -> ${englishPath}`);
    foldersRenamed++;
  } catch (err) {
    console.log(`ERROR: ${koreanPath} - ${err.message}`);
    errors.push({ path: koreanPath, error: err.message });
  }
}

// Clean up empty parent directories
console.log('\n=== Cleaning Up Empty Directories ===\n');

function removeEmptyDirs(dir) {
  if (!fs.existsSync(dir)) return 0;

  let removed = 0;
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.isDirectory()) {
      const fullPath = path.join(dir, entry.name);
      removed += removeEmptyDirs(fullPath);
    }
  }

  // Re-check if directory is now empty
  const remaining = fs.readdirSync(dir);
  if (remaining.length === 0 && dir !== publicDir) {
    fs.rmdirSync(dir);
    console.log(`REMOVED EMPTY: ${dir.replace(publicDir, '')}`);
    removed++;
  }

  return removed;
}

const dirsRemoved = removeEmptyDirs(path.join(publicDir, 'images'));

console.log('\n=== Summary ===');
console.log(`Folders renamed: ${foldersRenamed}`);
console.log(`Folders not found: ${foldersMissing}`);
console.log(`Empty directories removed: ${dirsRemoved}`);
console.log(`Errors: ${errors.length}`);

if (errors.length > 0) {
  console.log('\nErrors:');
  for (const { path: p, error } of errors) {
    console.log(`  ${p}: ${error}`);
  }
}

// List remaining Korean paths
console.log('\n=== Checking for Remaining Korean Paths ===\n');

function findKoreanPaths(dir, results = []) {
  if (!fs.existsSync(dir)) return results;

  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const relativePath = fullPath.replace(publicDir, '');

    // Check if name contains Korean characters
    if (/[가-힣]/.test(entry.name)) {
      results.push(relativePath);
    }

    if (entry.isDirectory()) {
      findKoreanPaths(fullPath, results);
    }
  }

  return results;
}

const remainingKorean = findKoreanPaths(path.join(publicDir, 'images'));
if (remainingKorean.length > 0) {
  console.log('Remaining Korean paths:');
  remainingKorean.forEach(p => console.log(`  ${p}`));
} else {
  console.log('✅ No Korean paths remaining!');
}
