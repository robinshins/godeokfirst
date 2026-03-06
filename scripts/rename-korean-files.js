#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Korean to English mapping for file/folder names
const koreanToEnglish = {
  // Icons
  '부산남구1등': 'busan-namgu-no1',
  '와인': 'wine',
  '커피': 'coffee',
  '흡연': 'smoking',
  'Arrow - Right': 'arrow-right',

  // Folders
  '세미나': 'seminar',
  '미백전후': 'whitening-before-after',
  '라미네이트전후': 'laminate-before-after',
  '디지털임플란트전후': 'digital-implant-before-after',
  '사랑니케이스': 'wisdom-tooth-cases',
  '잇몸치료케이스': 'gum-treatment-cases',
  '충치치료신경치료보존치료케이스': 'cavity-nerve-preservation-cases',
  '사랑니': 'wisdom-tooth',
  '심미치료': 'cosmetic-treatment',
  '임플란트_new': 'implant-new',
  '임플란트': 'implant',
  '잇몸치료': 'gum-treatment',
  '전체임플란트': 'full-implant',
  '신경치료': 'nerve-treatment',
  '신경치료로 살린케이스': 'nerve-treatment-saved-cases',
  '재신경치료케이스': 're-nerve-treatment-cases',
  '재식술케이스': 'replantation-cases',
  '치근단절제술': 'apicoectomy',
  '답안1) 위사랑니발치': 'case1-upper-wisdom-extraction',
  '답안2) 아래사랑니발치': 'case2-lower-wisdom-extraction',
  '답안2) 고난위도 사랑니발치': 'case2-difficult-extraction',
  '답안2) 사랑니를 방치되어 충치가 심한경우': 'case2-neglected-severe-cavity',
  '답안3) 아프지는 않는데, 검진받고싶어요': 'case3-checkup-no-pain',
  '임플란트_모든치아': 'implant-all-teeth',
  '임플란트_앞니_다수': 'implant-front-teeth-multiple',
  '임플란트_어금니_다수': 'implant-molar-multiple',
  '임플란트_윗니_아랫니_한쪽': 'implant-upper-lower-one-side',
  '임플란트_재수술': 'implant-revision',
  '잇몸치료로 치아를 살린케이스 뼈가 차오르는케이스': 'gum-saved-bone-recovery',
  '정기적인 관리 덕분에 50대에도 모든치아가 건강해요': 'regular-care-healthy-50s',
  '단순': 'simple',
  '매복': 'impacted',
  '부분': 'partial',
  '수평': 'horizontal',
  '치근만곡': 'curved-root',
  '남성 70세': 'male-70',
  '남성2 60세': 'male2-60',
  '여성_윗니_틀니_70대': 'female-upper-denture-70s',
  '여성2_윗니_40대': 'female2-upper-40s',
  '여성3_아랫니_50대': 'female3-lower-50s',
  '김미애_60세 여성': 'case-female-60',
  '문대성 60세 남성': 'case-male-60',
  '방순호 50세 여성': 'case-female-50a',
  '석희영 50세 여성': 'case-female-50b',
  '신정자 80세 여성': 'case-female-80',
  '박금성_상악앞니_여성': 'case-female-upper-front',
  '최선필_상악앞니_남성': 'case-male-upper-front',
  '문준호_음주_흡연': 'case-drinking-smoking',
  '박영상_잇몸이안좋아요': 'case-bad-gums',
  '이성건_남성_어금니재수술_고난위도': 'case-male-molar-revision-difficult',
  '충치/신경/보철치료통합': 'cavity-nerve-prosthetic-integrated',

  // Images
  '건물외관': 'building-exterior',
  '경성대학교': 'kyungsung-univ',
  '공식지정병원': 'official-designated-hospital',
  '동국씨엠': 'dongguk-cm',
  '동명대학교': 'dongmyung-univ',
  '메가젠vip1': 'megagen-vip1',
  '메가젠vip2': 'megagen-vip2',
  '메가젠임플란트인증패': 'megagen-implant-certificate',
  '미백비포애프터': 'whitening-before-after-main',
  '미백전': 'whitening-before',
  '미백후': 'whitening-after',
  '미세현미경': 'microscope',
  '미세현미경_신경관확보': 'microscope-nerve-canal',
  '미세현미경_치아뿌리염증원인발견': 'microscope-root-inflammation',
  '미세현미경_크랙발견': 'microscope-crack-found',
  '미세현미경진료사진': 'microscope-treatment-photo',
  '박테리아테라피': 'bacteria-therapy',
  '배인혜원장': 'dr-bae-inhye',
  '부경대학교': 'pukyong-univ',
  '부산대병원': 'busan-univ-hospital',
  '부산세미나': 'busan-seminar',
  '뷰티스라이트기기': 'beautis-light-device',
  '뷰티스미백제': 'beautis-whitening-agent',
  '비급여항목': 'non-covered-items',
  '사랑니': 'wisdom-tooth',
  '세미나진행사진1': 'seminar-photo1',
  '세미나진행사진2': 'seminar-photo2',
  '세미나진행사진3': 'seminar-photo3',
  '세척실1': 'sterilization-room1',
  '세척실2': 'sterilization-room2',
  '심미치과펠로우': 'cosmetic-dentistry-fellow',
  '오스템1': 'osstem1',
  '오스템2': 'osstem2',
  '워터픽': 'waterpik',
  '원내기공소1': 'in-house-lab1',
  '원내기공소2': 'in-house-lab2',
  '유익균': 'beneficial-bacteria',
  '의료진소개': 'medical-staff-intro',
  '인테리어_개인치료실': 'interior-private-room',
  '인테리어_대기실': 'interior-waiting-room',
  '인테리어_로비': 'interior-lobby',
  '인테리어_멸균실': 'interior-sterilization',
  '인테리어_상담실': 'interior-consultation',
  '인테리어_치료실': 'interior-treatment-room',
  '임플란트보증제': 'implant-warranty',
  '임플란트스플린트': 'implant-splint',
  '임플란트아이콘': 'implant-icon',
  '임플란트전후사진1': 'implant-before-after1',
  '임플란트전후사진2': 'implant-before-after2',
  '임플란트전후사진3': 'implant-before-after3',
  '임플란트전후사진4': 'implant-before-after4',
  '임플란트전후사진5': 'implant-before-after5',
  '임플란트전후사진6': 'implant-before-after6',
  '전체임플란트전후1': 'full-implant-before-after1',
  '전체임플란트전후2': 'full-implant-before-after2',
  '전체임플란트전후3': 'full-implant-before-after3',
  '전체임플란트전후4(엑스레이사진)': 'full-implant-before-after4-xray',
  '전체임플란트전후5': 'full-implant-before-after5',
  '주차장': 'parking',
  '지도스크린샷': 'map-screenshot',
  '지정협력병원': 'designated-partner-hospital',
  '지하주차장': 'underground-parking',
  '최다식립병원': 'most-implant-hospital',
  '큐레이': 'qray',
  '큐레이사진': 'qray-photo',
  '큐레이사진2': 'qray-photo2',
  '페리오클린2': 'perioclean2',
  '평생안심 임플란트 보증제': 'lifetime-implant-warranty',
  '하이니스자문': 'hyness-advisor',
  '하이니스자문위원': 'hyness-advisory-board',
  '동판6개': 'bronze-plaques-6',
  '김동석원장': 'dr-kim-dongseok',
  '모니터링장비': 'monitoring-equipment',
  '무통': 'painless',
  '무통2': 'painless2',
  '의식하진정요법_치과전문소생술': 'sedation-dental-cpr',
  '의식하진정요법자격증_해외': 'sedation-certificate-overseas',
  '의식하진정요법': 'sedation-therapy',
  'og이미지': 'og-image',
  '디지털원내기공소': 'digital-in-house-lab',
  '디지털임플란트절개안함': 'digital-implant-no-incision',
  '기존임플란트와차이점_절개안함': 'implant-difference-no-incision',
  '모바일_디지털임플란트': 'mobile-digital-implant',
  '모바일임플란트장점': 'mobile-implant-benefits',
  '3d디지털임플란트': '3d-digital-implant',
  'heri방식_시멘트방식과차이점': 'heri-vs-cement-method',
  'h2o2반응': 'h2o2-reaction',
  '크라운사진': 'crown-photo',
  '각종인증패': 'various-certifications',

  // Seminar folder images
  '디지털보철강의': 'digital-prosthetics-lecture',
  '메가젠디지털스캔세미나': 'megagen-digital-scan-seminar',
  '오스템디지털가이드수술강의': 'osstem-digital-guide-surgery-lecture',

  // X-ray images
  '엑스레이_임플란트전1': 'xray-implant-before1',
  '엑스레이_임플란트전2': 'xray-implant-before2',
  '엑스레이_임플란트전3': 'xray-implant-before3',
  '엑스레이_임플란트전4': 'xray-implant-before4',
  '엑스레이_임플란트후1': 'xray-implant-after1',
  '엑스레이_임플란트후2': 'xray-implant-after2',
  '엑스레이_임플란트후3': 'xray-implant-after3',
  '엑스레이_임플란트후4': 'xray-implant-after4',
  '엑스레이_전체임플란트전1': 'xray-full-implant-before1',
  '엑스레이_전체임플란트전2': 'xray-full-implant-before2',
  '엑스레이_전체임플란트전3': 'xray-full-implant-before3',
  '엑스레이_전체임플란트전4': 'xray-full-implant-before4',
  '엑스레이_전체임플란트후1': 'xray-full-implant-after1',
  '엑스레이_전체임플란트후2': 'xray-full-implant-after2',
  '엑스레이_전체임플란트후3': 'xray-full-implant-after3',
  '엑스레이_전체임플란트후4': 'xray-full-implant-after4',

  // Digital implant before/after folder
  '전체임플란트_얼굴사진_전1': 'full-implant-face-before1',
  '전체임플란트_얼굴사진_전2': 'full-implant-face-before2',
  '전체임플란트_얼굴사진_전3': 'full-implant-face-before3',
  '전체임플란트_얼굴사진_전4': 'full-implant-face-before4',
  '전체임플란트_얼굴사진_전5': 'full-implant-face-before5',
  '전체임플란트_얼굴사진_후1': 'full-implant-face-after1',
  '전체임플란트_얼굴사진_후2': 'full-implant-face-after2',
  '전체임플란트_얼굴사진_후3': 'full-implant-face-after3',
  '전체임플란트_얼굴사진_후4': 'full-implant-face-after4',
  '전체임플란트_얼굴사진_후5': 'full-implant-face-after5',
  '전체임플란트_치아사진_전1': 'full-implant-teeth-before1',
  '전체임플란트_치아사진_전2': 'full-implant-teeth-before2',
  '전체임플란트_치아사진_전3': 'full-implant-teeth-before3',
  '전체임플란트_치아사진_전4': 'full-implant-teeth-before4',
  '전체임플란트_치아사진_전5': 'full-implant-teeth-before5',
  '전체임플란트_치아사진_전6': 'full-implant-teeth-before6',
  '전체임플란트_치아사진_후1': 'full-implant-teeth-after1',
  '전체임플란트_치아사진_후2': 'full-implant-teeth-after2',
  '전체임플란트_치아사진_후3': 'full-implant-teeth-after3',
  '전체임플란트_치아사진_후4': 'full-implant-teeth-after4',
  '전체임플란트_치아사진_후5': 'full-implant-teeth-after5',
  '전체임플란트_치아사진_후6': 'full-implant-teeth-after6',

  // Whitening before/after
  '술전': 'pre-treatment',
  '술전2': 'pre-treatment2',
  '술후': 'post-treatment',
  '술후2': 'post-treatment2',

  // Wisdom tooth cases
  '초진파노': 'initial-pano',
  '발치후 파노': 'post-extraction-pano',

  // Gum treatment cases
  '1. 작은어금니도 발치해야하는상황': '1-small-molar-extraction-needed',
  '2. 큰어금니만발치하고  작은어금니는 염증잇몸치료만 2달': '2-large-molar-extraction-small-treatment',
  '3. 뼈이식을 동반한 살리는 잇몸치료': '3-bone-graft-gum-treatment',
  '4.  작은어금니 생존완료': '4-small-molar-saved',
  '관리받고있는상태': 'under-management',
  '처음내원당시 ': 'first-visit',

  // Videos
  '메디스치과': 'medis-dental',
  '3d프린터': '3d-printer',
  '디지털라미네이트 3d 영상': 'digital-laminate-3d',
  '라미네이트 끼우는 영상': 'laminate-fitting',
  '라미네이트 후 웃는 영상': 'laminate-smile',
  '라미네이트 후 웃는 영상2': 'laminate-smile2',
  '밀링머신': 'milling-machine',

  // Interview videos
  '김순희님 (12월 학술)_ 얼굴동의미동의_목소리만': 'interview-patient1-voice-only',
  '민선옥님 (12월 학술)_초상권얼굴동의': 'interview-patient2-face-consent',
  '박은옥님_구강사진동의_얼굴블러링처리동의': 'interview-patient3-blurred',

  // Popup images
  '10월진료일정': 'october-schedule',
  '가상임플란트팝업': 'virtual-implant-popup',
  '전체임플란트팝업': 'full-implant-popup',
};

// Function to convert Korean path to English
function convertToEnglish(koreanPath) {
  let result = koreanPath;

  // Sort keys by length (longest first) to avoid partial replacements
  const sortedKeys = Object.keys(koreanToEnglish).sort((a, b) => b.length - a.length);

  for (const korean of sortedKeys) {
    const english = koreanToEnglish[korean];
    result = result.split(korean).join(english);
  }

  // Replace remaining Korean characters with romanization or remove
  // For complex names with dates, just replace spaces with hyphens
  result = result.replace(/ /g, '-');
  result = result.replace(/\(/g, '-');
  result = result.replace(/\)/g, '');
  result = result.replace(/,/g, '');
  result = result.replace(/\[/g, '');
  result = result.replace(/\]/g, '');
  result = result.replace(/--+/g, '-');
  result = result.replace(/-\./g, '.');
  result = result.replace(/^-/, '');

  return result;
}

// Collect all Korean files and folders
function collectKoreanPaths(dir, basePath = '') {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const paths = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const relativePath = path.join(basePath, entry.name);

    // Check if name contains Korean characters or spaces
    if (/[가-힣]/.test(entry.name) || / /.test(entry.name)) {
      paths.push({
        oldPath: fullPath,
        oldRelative: relativePath,
        isDirectory: entry.isDirectory(),
        name: entry.name
      });
    }

    if (entry.isDirectory()) {
      paths.push(...collectKoreanPaths(fullPath, relativePath));
    }
  }

  return paths;
}

// Main execution
const publicDir = path.join(__dirname, '..', 'public');
const srcDir = path.join(__dirname, '..', 'src');

console.log('Collecting Korean file paths...\n');

const koreanPaths = collectKoreanPaths(publicDir);

// Sort by depth (deepest first) for renaming
koreanPaths.sort((a, b) => {
  const depthA = a.oldRelative.split(path.sep).length;
  const depthB = b.oldRelative.split(path.sep).length;
  return depthB - depthA;
});

// Generate mapping
const pathMapping = [];

for (const item of koreanPaths) {
  const newRelative = convertToEnglish(item.oldRelative);
  const newPath = path.join(publicDir, newRelative);

  // Check if still contains Korean
  if (/[가-힣]/.test(newRelative)) {
    console.log(`WARNING: Still contains Korean: ${item.oldRelative} -> ${newRelative}`);
  }

  pathMapping.push({
    oldRelative: '/' + item.oldRelative.replace(/\\/g, '/'),
    newRelative: '/' + newRelative.replace(/\\/g, '/'),
    oldPath: item.oldPath,
    newPath: newPath,
    isDirectory: item.isDirectory
  });
}

// Output the mapping for review
console.log('\n=== FILE MAPPING ===\n');
for (const mapping of pathMapping) {
  if (!mapping.isDirectory) {
    console.log(`${mapping.oldRelative}`);
    console.log(`  -> ${mapping.newRelative}\n`);
  }
}

// Save mapping to JSON for the actual rename script
const mappingFile = path.join(__dirname, 'korean-to-english-mapping.json');
fs.writeFileSync(mappingFile, JSON.stringify(pathMapping, null, 2));
console.log(`\nMapping saved to: ${mappingFile}`);

// Count
console.log(`\nTotal Korean paths found: ${koreanPaths.length}`);
console.log(`Files: ${koreanPaths.filter(p => !p.isDirectory).length}`);
console.log(`Directories: ${koreanPaths.filter(p => p.isDirectory).length}`);
