#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');

// Korean to English mappings for common dental terms
const koreanToEnglish = {
  // Treatment types
  '신경치료': 'nerve-treatment',
  '충치치료': 'cavity-treatment',
  '임플란트': 'implant',
  '전체임플란트': 'full-implant',
  '사랑니': 'wisdom-tooth',
  '잇몸치료': 'gum-treatment',
  '보존치료': 'preservation-treatment',
  '크라운': 'crown',
  '브릿지': 'bridge',
  '보철': 'prosthetic',
  '라미네이트': 'laminate',
  '미백': 'whitening',
  '스케일링': 'scaling',
  '발치': 'extraction',
  '재신경치료': 're-nerve-treatment',
  '치근단절제술': 'apicoectomy',
  '재식술': 'replantation',
  '치아재식술': 'tooth-replantation',

  // Anatomy
  '치아': 'tooth',
  '치근': 'root',
  '치근단': 'apex',
  '치수': 'pulp',
  '치주': 'periodontal',
  '잇몸': 'gum',
  '어금니': 'molar',
  '앞니': 'front-tooth',
  '윗니': 'upper-teeth',
  '아랫니': 'lower-teeth',
  '상악': 'upper-jaw',
  '하악': 'lower-jaw',
  '뼈': 'bone',

  // Conditions
  '충치': 'cavity',
  '병소': 'lesion',
  '염증': 'inflammation',
  '파절': 'fracture',
  '균열': 'crack',
  '통증': 'pain',
  '부종': 'swelling',
  '무치악': 'edentulous',
  '틀니': 'denture',

  // Case descriptions
  '케이스': 'case',
  '전': 'before',
  '후': 'after',
  '직후': 'right-after',
  '치료': 'treatment',
  '수술': 'surgery',
  '상실': 'loss',
  '발치해야': 'need-extraction',

  // Age/Gender
  '남성': 'male',
  '여성': 'female',
  '세': 'years-old',

  // Status
  '살린': 'saved',
  '차오르는': 'healing',
  '심한': 'severe',
  '추가': 'additional',
  '근관': 'canal',
  '찾음': 'found',

  // Image types
  '엑스레이': 'xray',
  '구강사진': 'oral-photo',
  '얼굴사진': 'face-photo',
  '임시치아': 'temporary-tooth',

  // Misc
  '답안': 'case',
  '위사랑니': 'upper-wisdom-tooth',
  '아래사랑니': 'lower-wisdom-tooth',
  '음식물끼임': 'food-impaction',
  '인접치': 'adjacent-tooth',
  '방치': 'neglected',
  '놓쳐서': 'missed',
  '촬영': 'imaging',
  '큐레이': 'qray',
  '모든': 'all',
  '다수': 'multiple',
  '한쪽': 'one-side',
  '전체': 'full',
  '또는': 'or',
  '거의': 'almost',
  '고난위도': 'high-difficulty',
  '재수술': 'revision',
  '음주': 'drinking',
  '흡연': 'smoking',
  '불량': 'poor',
  '공포증': 'phobia',
  '이식': 'graft',
  '동반': 'with',
  '구조이상': 'structural-abnormality',
  '제거': 'removal',
  '재직시절': 'work-period',
  '양산부산대학교병원': 'yangsan-pusan-univ-hospital',
  '양산부산대병원재직때': 'yangsan-pusan-univ-hospital',
  '만곡': 'curved',

  // Folder structure
  '로 살린케이스': '-saved-cases',
  '로 치아를 살린케이스': '-tooth-saved-cases',
  '뼈가 차오르는케이스': 'bone-healing-cases',
  '을 방치되어 충치가 심한경우': '-neglected-severe-cavity',
  '시기를 놓쳐서 심한충치': 'missed-timing-severe-cavity',
};

// Function to convert Korean text to English
function koreanToEnglishText(text) {
  let result = text;

  // Sort by length (longest first) to avoid partial replacements
  const sortedKeys = Object.keys(koreanToEnglish).sort((a, b) => b.length - a.length);

  for (const korean of sortedKeys) {
    const english = koreanToEnglish[korean];
    result = result.replace(new RegExp(korean, 'g'), english);
  }

  // Clean up the result
  result = result
    .replace(/[가-힣]+/g, '') // Remove any remaining Korean
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/_+/g, '-') // Replace underscores with hyphens
    .replace(/-+/g, '-') // Remove multiple hyphens
    .replace(/^-+|-+$/g, '') // Remove leading/trailing hyphens
    .replace(/\(-/g, '(') // Clean up parentheses
    .replace(/-\)/g, ')') // Clean up parentheses
    .replace(/\(\)/g, '') // Remove empty parentheses
    .replace(/#+/g, '-') // Replace # with hyphen
    .toLowerCase();

  return result || 'unnamed';
}

// Collect all paths that need renaming (files and directories with Korean names)
function collectKoreanPaths(dir, results = []) {
  if (!fs.existsSync(dir)) return results;

  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    // Check if name contains Korean characters
    if (/[가-힣]/.test(entry.name)) {
      results.push({
        oldPath: fullPath,
        oldName: entry.name,
        isDirectory: entry.isDirectory(),
        depth: fullPath.split(path.sep).length
      });
    }

    if (entry.isDirectory()) {
      collectKoreanPaths(fullPath, results);
    }
  }

  return results;
}

console.log('=== Converting All Korean Paths to English ===\n');

// Collect all Korean paths
const koreanPaths = collectKoreanPaths(path.join(publicDir, 'images'));

// Sort by depth (deepest first) so we rename children before parents
koreanPaths.sort((a, b) => b.depth - a.depth);

console.log(`Found ${koreanPaths.length} Korean paths to convert\n`);

let renamed = 0;
let skipped = 0;
const errors = [];

for (const item of koreanPaths) {
  const parentDir = path.dirname(item.oldPath);
  const ext = path.extname(item.oldName);
  const baseName = path.basename(item.oldName, ext);

  // Convert the name
  let newBaseName = koreanToEnglishText(baseName);
  const newName = newBaseName + ext;
  const newPath = path.join(parentDir, newName);

  // Check if source still exists (might have been moved with parent)
  if (!fs.existsSync(item.oldPath)) {
    skipped++;
    continue;
  }

  // If target already exists, add a number suffix
  let finalPath = newPath;
  let counter = 1;
  while (fs.existsSync(finalPath) && finalPath !== item.oldPath) {
    const suffixedName = `${newBaseName}-${counter}${ext}`;
    finalPath = path.join(parentDir, suffixedName);
    counter++;
  }

  if (finalPath === item.oldPath) {
    skipped++;
    continue;
  }

  try {
    fs.renameSync(item.oldPath, finalPath);
    const relOld = item.oldPath.replace(publicDir, '');
    const relNew = finalPath.replace(publicDir, '');
    console.log(`${item.isDirectory ? 'DIR ' : 'FILE'}: ${relOld}`);
    console.log(`  -> ${relNew}\n`);
    renamed++;
  } catch (err) {
    errors.push({ path: item.oldPath, error: err.message });
  }
}

console.log('\n=== Summary ===');
console.log(`Renamed: ${renamed}`);
console.log(`Skipped: ${skipped}`);
console.log(`Errors: ${errors.length}`);

if (errors.length > 0) {
  console.log('\nErrors:');
  for (const { path: p, error } of errors) {
    console.log(`  ${p}: ${error}`);
  }
}

// Final check for remaining Korean paths
console.log('\n=== Final Check ===\n');
const remaining = collectKoreanPaths(path.join(publicDir, 'images'));
if (remaining.length > 0) {
  console.log(`Still ${remaining.length} Korean paths remaining:`);
  remaining.forEach(item => {
    console.log(`  ${item.oldPath.replace(publicDir, '')}`);
  });
} else {
  console.log('✅ All Korean paths have been converted to English!');
}
