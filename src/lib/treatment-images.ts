// 치료별 실제 케이스 이미지 매핑
// 이미지 경로: /public/images/cases/
export interface CaseImage {
  beforeImage: string;
  afterImage: string;
  title: string;
  description: string;
  translations?: {
    en: {
      title: string;
      description: string;
    };
    jp: {
      title: string;
      description: string;
    };
    cn: {
      title: string;
      description: string;
    };
  };
}

export const TREATMENT_CASE_IMAGES = {
  // ============================================================
  // 충치/신경/보철치료 - 답안별 케이스 분류
  // ============================================================

  // 답안1) 치아가 아파요 - 심한충치/치수염으로 신경치료
  cavity_nerve_answer1: [
    {
      beforeImage: '/임상사진/충치/김효연_충치_before.jpg',
      afterImage: '/임상사진/충치/김효연_충치_after.jpg',
      title: '충치 치료',
      description: '어금니 충치 제거 후 수복',
      translations: {
        en: { title: 'Cavity treatment', description: 'Molar cavity removal and restoration' },
        jp: { title: '虫歯治療', description: '奥歯の虫歯除去後修復' },
        cn: { title: '龋齿治疗', description: '磨牙龋齿去除后修复' }
      }
    },
    {
      beforeImage: '/임상사진/충치-1/방준영_충치_before.jpg',
      afterImage: '/임상사진/충치-1/방준영_충치_after.jpg',
      title: '다수 충치 치료',
      description: '다수 충치 제거 후 수복 완료',
      translations: {
        en: { title: 'Multiple cavity treatment', description: 'Multiple cavities removed and restoration completed' },
        jp: { title: '多数虫歯治療', description: '多数の虫歯除去後修復完了' },
        cn: { title: '多颗龋齿治疗', description: '多颗龋齿去除后修复完成' }
      }
    },
    {
      beforeImage: '/임상사진/크랙/김고운_크랙_실사_before.jpg',
      afterImage: '/임상사진/크랙/김고운_크랙_실사_after.jpg',
      title: '크랙 치료',
      description: '치아 균열 후 크라운 수복',
      translations: {
        en: { title: 'Crack treatment', description: 'Tooth crack and crown restoration' },
        jp: { title: 'クラック治療', description: '歯のひび割れ後クラウン修復' },
        cn: { title: '裂纹治疗', description: '牙齿裂纹后牙冠修复' }
      }
    },
    {
      beforeImage: '/임상사진/정재윤_앞니보철/정재윤_앞니보철_실제사진_before.jpg',
      afterImage: '/임상사진/정재윤_앞니보철/정재윤_앞니보철_실제사진_after.jpg',
      title: '앞니 보철 치료',
      description: '앞니 보철 수복 전후 비교',
      translations: {
        en: { title: 'Front tooth prosthetic treatment', description: 'Before and after front tooth prosthetic restoration' },
        jp: { title: '前歯補綴治療', description: '前歯補綴修復の前後比較' },
        cn: { title: '前牙修复治疗', description: '前牙修复前后对比' }
      }
    },
    {
      beforeImage: '/임상사진/앞니 재보철/앞니재보철_실사_before.jpg',
      afterImage: '/임상사진/앞니 재보철/앞니재보철_실사_after.jpg',
      title: '앞니 재보철',
      description: '기존 앞니 보철물 재치료 전후 비교',
      translations: {
        en: { title: 'Front tooth re-prosthetic', description: 'Before and after retreatment of existing front tooth prosthetic' },
        jp: { title: '前歯再補綴', description: '既存前歯補綴物の再治療前後比較' },
        cn: { title: '前牙再修复', description: '原有前牙修复体再治疗前后对比' }
      }
    },
    {
      beforeImage: '/임상사진/정민아B_앞니 보철/정민아B_앞니심미보철크라운_before.jpg',
      afterImage: '/임상사진/정민아B_앞니 보철/정민아B_앞니심미보철크라운_after.jpg',
      title: '앞니 심미보철 크라운',
      description: '앞니 심미보철 크라운 전후 비교',
      translations: {
        en: { title: 'Front tooth aesthetic crown', description: 'Before and after front tooth aesthetic crown restoration' },
        jp: { title: '前歯審美クラウン', description: '前歯審美クラウン修復の前後比較' },
        cn: { title: '前牙美学冠', description: '前牙美学冠修复前后对比' }
      }
    }
  ],

  // 답안2) 치아가 시려요/검게보여요 - 충치(보철)치료
  cavity_nerve_answer2: [
    {
      beforeImage: '/임상사진/충치/김효연_충치_before.jpg',
      afterImage: '/임상사진/충치/김효연_충치_after.jpg',
      title: '충치 치료',
      description: '어금니 충치 제거 후 수복',
      translations: {
        en: { title: 'Cavity treatment', description: 'Molar cavity removal and restoration' },
        jp: { title: '虫歯治療', description: '奥歯の虫歯除去後修復' },
        cn: { title: '龋齿治疗', description: '磨牙龋齿去除后修复' }
      }
    },
    {
      beforeImage: '/임상사진/충치-1/방준영_충치_before.jpg',
      afterImage: '/임상사진/충치-1/방준영_충치_after.jpg',
      title: '다수 충치 치료',
      description: '다수 충치 제거 후 수복 완료',
      translations: {
        en: { title: 'Multiple cavity treatment', description: 'Multiple cavities removed and restoration completed' },
        jp: { title: '多数虫歯治療', description: '多数の虫歯除去後修復完了' },
        cn: { title: '多颗龋齿治疗', description: '多颗龋齿去除后修复完成' }
      }
    },
    {
      beforeImage: '/임상사진/크랙/김고운_크랙_실사_before.jpg',
      afterImage: '/임상사진/크랙/김고운_크랙_실사_after.jpg',
      title: '크랙 치료',
      description: '치아 균열 후 크라운 수복',
      translations: {
        en: { title: 'Crack treatment', description: 'Tooth crack and crown restoration' },
        jp: { title: 'クラック治療', description: '歯のひび割れ後クラウン修復' },
        cn: { title: '裂纹治疗', description: '牙齿裂纹后牙冠修复' }
      }
    },
    {
      beforeImage: '/임상사진/정재윤_앞니보철/정재윤_앞니보철_실제사진_before.jpg',
      afterImage: '/임상사진/정재윤_앞니보철/정재윤_앞니보철_실제사진_after.jpg',
      title: '앞니 보철 치료',
      description: '앞니 보철 수복 전후 비교',
      translations: {
        en: { title: 'Front tooth prosthetic treatment', description: 'Before and after front tooth prosthetic restoration' },
        jp: { title: '前歯補綴治療', description: '前歯補綴修復の前後比較' },
        cn: { title: '前牙修复治疗', description: '前牙修复前后对比' }
      }
    },
    {
      beforeImage: '/임상사진/앞니 재보철/앞니재보철_실사_before.jpg',
      afterImage: '/임상사진/앞니 재보철/앞니재보철_실사_after.jpg',
      title: '앞니 재보철',
      description: '기존 앞니 보철물 재치료 전후 비교',
      translations: {
        en: { title: 'Front tooth re-prosthetic', description: 'Before and after retreatment of existing front tooth prosthetic' },
        jp: { title: '前歯再補綴', description: '既存前歯補綴物の再治療前後比較' },
        cn: { title: '前牙再修复', description: '原有前牙修复体再治疗前后对比' }
      }
    },
    {
      beforeImage: '/임상사진/정민아B_앞니 보철/정민아B_앞니심미보철크라운_before.jpg',
      afterImage: '/임상사진/정민아B_앞니 보철/정민아B_앞니심미보철크라운_after.jpg',
      title: '앞니 심미보철 크라운',
      description: '앞니 심미보철 크라운 전후 비교',
      translations: {
        en: { title: 'Front tooth aesthetic crown', description: 'Before and after front tooth aesthetic crown restoration' },
        jp: { title: '前歯審美クラウン', description: '前歯審美クラウン修復の前後比較' },
        cn: { title: '前牙美学冠', description: '前牙美学冠修复前后对比' }
      }
    }
  ],

  // 답안3) 치아가 깨졌어요 - 보철치료 및 신경치료
  cavity_nerve_answer3: [
    {
      beforeImage: '/임상사진/충치/김효연_충치_before.jpg',
      afterImage: '/임상사진/충치/김효연_충치_after.jpg',
      title: '충치 치료',
      description: '어금니 충치 제거 후 수복',
      translations: {
        en: { title: 'Cavity treatment', description: 'Molar cavity removal and restoration' },
        jp: { title: '虫歯治療', description: '奥歯の虫歯除去後修復' },
        cn: { title: '龋齿治疗', description: '磨牙龋齿去除后修复' }
      }
    },
    {
      beforeImage: '/임상사진/충치-1/방준영_충치_before.jpg',
      afterImage: '/임상사진/충치-1/방준영_충치_after.jpg',
      title: '다수 충치 치료',
      description: '다수 충치 제거 후 수복 완료',
      translations: {
        en: { title: 'Multiple cavity treatment', description: 'Multiple cavities removed and restoration completed' },
        jp: { title: '多数虫歯治療', description: '多数の虫歯除去後修復完了' },
        cn: { title: '多颗龋齿治疗', description: '多颗龋齿去除后修复完成' }
      }
    },
    {
      beforeImage: '/임상사진/크랙/김고운_크랙_실사_before.jpg',
      afterImage: '/임상사진/크랙/김고운_크랙_실사_after.jpg',
      title: '크랙 치료',
      description: '치아 균열 후 크라운 수복',
      translations: {
        en: { title: 'Crack treatment', description: 'Tooth crack and crown restoration' },
        jp: { title: 'クラック治療', description: '歯のひび割れ後クラウン修復' },
        cn: { title: '裂纹治疗', description: '牙齿裂纹后牙冠修复' }
      }
    },
    {
      beforeImage: '/임상사진/정재윤_앞니보철/정재윤_앞니보철_실제사진_before.jpg',
      afterImage: '/임상사진/정재윤_앞니보철/정재윤_앞니보철_실제사진_after.jpg',
      title: '앞니 보철 치료',
      description: '앞니 보철 수복 전후 비교',
      translations: {
        en: { title: 'Front tooth prosthetic treatment', description: 'Before and after front tooth prosthetic restoration' },
        jp: { title: '前歯補綴治療', description: '前歯補綴修復の前後比較' },
        cn: { title: '前牙修复治疗', description: '前牙修复前后对比' }
      }
    },
    {
      beforeImage: '/임상사진/앞니 재보철/앞니재보철_실사_before.jpg',
      afterImage: '/임상사진/앞니 재보철/앞니재보철_실사_after.jpg',
      title: '앞니 재보철',
      description: '기존 앞니 보철물 재치료 전후 비교',
      translations: {
        en: { title: 'Front tooth re-prosthetic', description: 'Before and after retreatment of existing front tooth prosthetic' },
        jp: { title: '前歯再補綴', description: '既存前歯補綴物の再治療前後比較' },
        cn: { title: '前牙再修复', description: '原有前牙修复体再治疗前后对比' }
      }
    },
    {
      beforeImage: '/임상사진/정민아B_앞니 보철/정민아B_앞니심미보철크라운_before.jpg',
      afterImage: '/임상사진/정민아B_앞니 보철/정민아B_앞니심미보철크라운_after.jpg',
      title: '앞니 심미보철 크라운',
      description: '앞니 심미보철 크라운 전후 비교',
      translations: {
        en: { title: 'Front tooth aesthetic crown', description: 'Before and after front tooth aesthetic crown restoration' },
        jp: { title: '前歯審美クラウン', description: '前歯審美クラウン修復の前後比較' },
        cn: { title: '前牙美学冠', description: '前牙美学冠修复前后对比' }
      }
    }
  ],

  // 답안3) 치아가 깨졌어요 - 발치가 필요한 경우
  cavity_nerve_answer3_extraction: [
    {
      beforeImage: '/임상사진/충치/김효연_충치_before.jpg',
      afterImage: '/임상사진/충치/김효연_충치_after.jpg',
      title: '충치 치료',
      description: '어금니 충치 제거 후 수복',
      translations: {
        en: { title: 'Cavity treatment', description: 'Molar cavity removal and restoration' },
        jp: { title: '虫歯治療', description: '奥歯の虫歯除去後修復' },
        cn: { title: '龋齿治疗', description: '磨牙龋齿去除后修复' }
      }
    },
    {
      beforeImage: '/임상사진/충치-1/방준영_충치_before.jpg',
      afterImage: '/임상사진/충치-1/방준영_충치_after.jpg',
      title: '다수 충치 치료',
      description: '다수 충치 제거 후 수복 완료',
      translations: {
        en: { title: 'Multiple cavity treatment', description: 'Multiple cavities removed and restoration completed' },
        jp: { title: '多数虫歯治療', description: '多数の虫歯除去後修復完了' },
        cn: { title: '多颗龋齿治疗', description: '多颗龋齿去除后修复完成' }
      }
    },
    {
      beforeImage: '/임상사진/크랙/김고운_크랙_실사_before.jpg',
      afterImage: '/임상사진/크랙/김고운_크랙_실사_after.jpg',
      title: '크랙 치료',
      description: '치아 균열 후 크라운 수복',
      translations: {
        en: { title: 'Crack treatment', description: 'Tooth crack and crown restoration' },
        jp: { title: 'クラック治療', description: '歯のひび割れ後クラウン修復' },
        cn: { title: '裂纹治疗', description: '牙齿裂纹后牙冠修复' }
      }
    },
    {
      beforeImage: '/임상사진/정재윤_앞니보철/정재윤_앞니보철_실제사진_before.jpg',
      afterImage: '/임상사진/정재윤_앞니보철/정재윤_앞니보철_실제사진_after.jpg',
      title: '앞니 보철 치료',
      description: '앞니 보철 수복 전후 비교',
      translations: {
        en: { title: 'Front tooth prosthetic treatment', description: 'Before and after front tooth prosthetic restoration' },
        jp: { title: '前歯補綴治療', description: '前歯補綴修復の前後比較' },
        cn: { title: '前牙修复治疗', description: '前牙修复前后对比' }
      }
    },
    {
      beforeImage: '/임상사진/앞니 재보철/앞니재보철_실사_before.jpg',
      afterImage: '/임상사진/앞니 재보철/앞니재보철_실사_after.jpg',
      title: '앞니 재보철',
      description: '기존 앞니 보철물 재치료 전후 비교',
      translations: {
        en: { title: 'Front tooth re-prosthetic', description: 'Before and after retreatment of existing front tooth prosthetic' },
        jp: { title: '前歯再補綴', description: '既存前歯補綴物の再治療前後比較' },
        cn: { title: '前牙再修复', description: '原有前牙修复体再治疗前后对比' }
      }
    },
    {
      beforeImage: '/임상사진/정민아B_앞니 보철/정민아B_앞니심미보철크라운_before.jpg',
      afterImage: '/임상사진/정민아B_앞니 보철/정민아B_앞니심미보철크라운_after.jpg',
      title: '앞니 심미보철 크라운',
      description: '앞니 심미보철 크라운 전후 비교',
      translations: {
        en: { title: 'Front tooth aesthetic crown', description: 'Before and after front tooth aesthetic crown restoration' },
        jp: { title: '前歯審美クラウン', description: '前歯審美クラウン修復の前後比較' },
        cn: { title: '前牙美学冠', description: '前牙美学冠修复前后对比' }
      }
    }
  ],

  // 답안4) 불편해요 - 치아문제 또는 잇몸문제 진단 필요
  cavity_nerve_answer4: [
    {
      beforeImage: '/임상사진/충치/김효연_충치_before.jpg',
      afterImage: '/임상사진/충치/김효연_충치_after.jpg',
      title: '충치 치료',
      description: '어금니 충치 제거 후 수복',
      translations: {
        en: { title: 'Cavity treatment', description: 'Molar cavity removal and restoration' },
        jp: { title: '虫歯治療', description: '奥歯の虫歯除去後修復' },
        cn: { title: '龋齿治疗', description: '磨牙龋齿去除后修复' }
      }
    },
    {
      beforeImage: '/임상사진/충치-1/방준영_충치_before.jpg',
      afterImage: '/임상사진/충치-1/방준영_충치_after.jpg',
      title: '다수 충치 치료',
      description: '다수 충치 제거 후 수복 완료',
      translations: {
        en: { title: 'Multiple cavity treatment', description: 'Multiple cavities removed and restoration completed' },
        jp: { title: '多数虫歯治療', description: '多数の虫歯除去後修復完了' },
        cn: { title: '多颗龋齿治疗', description: '多颗龋齿去除后修复完成' }
      }
    },
    {
      beforeImage: '/임상사진/크랙/김고운_크랙_실사_before.jpg',
      afterImage: '/임상사진/크랙/김고운_크랙_실사_after.jpg',
      title: '크랙 치료',
      description: '치아 균열 후 크라운 수복',
      translations: {
        en: { title: 'Crack treatment', description: 'Tooth crack and crown restoration' },
        jp: { title: 'クラック治療', description: '歯のひび割れ後クラウン修復' },
        cn: { title: '裂纹治疗', description: '牙齿裂纹后牙冠修复' }
      }
    },
    {
      beforeImage: '/임상사진/정재윤_앞니보철/정재윤_앞니보철_실제사진_before.jpg',
      afterImage: '/임상사진/정재윤_앞니보철/정재윤_앞니보철_실제사진_after.jpg',
      title: '앞니 보철 치료',
      description: '앞니 보철 수복 전후 비교',
      translations: {
        en: { title: 'Front tooth prosthetic treatment', description: 'Before and after front tooth prosthetic restoration' },
        jp: { title: '前歯補綴治療', description: '前歯補綴修復の前後比較' },
        cn: { title: '前牙修复治疗', description: '前牙修复前后对比' }
      }
    },
    {
      beforeImage: '/임상사진/앞니 재보철/앞니재보철_실사_before.jpg',
      afterImage: '/임상사진/앞니 재보철/앞니재보철_실사_after.jpg',
      title: '앞니 재보철',
      description: '기존 앞니 보철물 재치료 전후 비교',
      translations: {
        en: { title: 'Front tooth re-prosthetic', description: 'Before and after retreatment of existing front tooth prosthetic' },
        jp: { title: '前歯再補綴', description: '既存前歯補綴物の再治療前後比較' },
        cn: { title: '前牙再修复', description: '原有前牙修复体再治疗前后对比' }
      }
    },
    {
      beforeImage: '/임상사진/정민아B_앞니 보철/정민아B_앞니심미보철크라운_before.jpg',
      afterImage: '/임상사진/정민아B_앞니 보철/정민아B_앞니심미보철크라운_after.jpg',
      title: '앞니 심미보철 크라운',
      description: '앞니 심미보철 크라운 전후 비교',
      translations: {
        en: { title: 'Front tooth aesthetic crown', description: 'Before and after front tooth aesthetic crown restoration' },
        jp: { title: '前歯審美クラウン', description: '前歯審美クラウン修復の前後比較' },
        cn: { title: '前牙美学冠', description: '前牙美学冠修复前后对比' }
      }
    }
  ],

  // 기존 nerve_treatment 호환용 (fallback)
  nerve_treatment: [
    {
      beforeImage: '/임상사진/충치/김효연_충치_before.jpg',
      afterImage: '/임상사진/충치/김효연_충치_after.jpg',
      title: '충치 치료',
      description: '어금니 충치 제거 후 수복',
      translations: {
        en: { title: 'Cavity treatment', description: 'Molar cavity removal and restoration' },
        jp: { title: '虫歯治療', description: '奥歯の虫歯除去後修復' },
        cn: { title: '龋齿治疗', description: '磨牙龋齿去除后修复' }
      }
    },
    {
      beforeImage: '/임상사진/충치-1/방준영_충치_before.jpg',
      afterImage: '/임상사진/충치-1/방준영_충치_after.jpg',
      title: '다수 충치 치료',
      description: '다수 충치 제거 후 수복 완료',
      translations: {
        en: { title: 'Multiple cavity treatment', description: 'Multiple cavities removed and restoration completed' },
        jp: { title: '多数虫歯治療', description: '多数の虫歯除去後修復完了' },
        cn: { title: '多颗龋齿治疗', description: '多颗龋齿去除后修复完成' }
      }
    },
    {
      beforeImage: '/임상사진/크랙/김고운_크랙_실사_before.jpg',
      afterImage: '/임상사진/크랙/김고운_크랙_실사_after.jpg',
      title: '크랙 치료',
      description: '치아 균열 후 크라운 수복',
      translations: {
        en: { title: 'Crack treatment', description: 'Tooth crack and crown restoration' },
        jp: { title: 'クラック治療', description: '歯のひび割れ後クラウン修復' },
        cn: { title: '裂纹治疗', description: '牙齿裂纹后牙冠修复' }
      }
    },
    {
      beforeImage: '/임상사진/정재윤_앞니보철/정재윤_앞니보철_실제사진_before.jpg',
      afterImage: '/임상사진/정재윤_앞니보철/정재윤_앞니보철_실제사진_after.jpg',
      title: '앞니 보철 치료',
      description: '앞니 보철 수복 전후 비교',
      translations: {
        en: { title: 'Front tooth prosthetic treatment', description: 'Before and after front tooth prosthetic restoration' },
        jp: { title: '前歯補綴治療', description: '前歯補綴修復の前後比較' },
        cn: { title: '前牙修复治疗', description: '前牙修复前后对比' }
      }
    },
    {
      beforeImage: '/임상사진/앞니 재보철/앞니재보철_실사_before.jpg',
      afterImage: '/임상사진/앞니 재보철/앞니재보철_실사_after.jpg',
      title: '앞니 재보철',
      description: '기존 앞니 보철물 재치료 전후 비교',
      translations: {
        en: { title: 'Front tooth re-prosthetic', description: 'Before and after retreatment of existing front tooth prosthetic' },
        jp: { title: '前歯再補綴', description: '既存前歯補綴物の再治療前後比較' },
        cn: { title: '前牙再修复', description: '原有前牙修复体再治疗前后对比' }
      }
    }
  ],

  // 잇몸치료 케이스 (3개)
  gum_care: [
    {
      beforeImage: '/images/cases/잇몸치료/중증치주염_잇몸치료전_구강사진_before.jpg',
      afterImage: '/images/cases/잇몸치료/중증치주염_잇몸치료후_구강사진_after.jpg',
      title: '중증 치주염 잇몸치료',
      description: '전체적으로 치석이 심하게 쌓여있고 잇몸 염증이 심한 상태. 적극적인 잇몸치료로 염증을 잡고 건강한 잇몸 회복',
      translations: {
        en: {
          title: 'Severe periodontitis treatment',
          description: 'Heavy tartar buildup with severe gum inflammation. Aggressive periodontal treatment controlled inflammation and restored healthy gums'
        },
        jp: {
          title: '重度歯周炎の治療',
          description: '全体的に歯石が激しく蓄積し歯茎の炎症がひどい状態。積極的な歯茎治療で炎症を抑え健康な歯茎を回復'
        },
        cn: {
          title: '重度牙周炎治疗',
          description: '整体牙结石严重堆积，牙龈炎症严重。通过积极的牙周治疗控制炎症，恢复健康牙龈'
        }
      }
    },
    {
      beforeImage: '/images/cases/잇몸치료/30대 남성으로 아랫니치아사이가치석으로 채워진상태_before만.jpg',
      afterImage: '/images/cases/잇몸치료/중증치주염_잇몸치료후_구강사진_after.jpg',
      title: '30대 남성 치석 제거',
      description: '아랫니 치아 사이가 치석으로 꽉 차있는 상태. 스케일링과 잇몸치료로 치석 제거 및 잇몸 건강 회복',
      translations: {
        en: {
          title: 'Tartar removal - Male 30s',
          description: 'Lower teeth completely filled with tartar between teeth. Scaling and gum treatment to remove tartar and restore gum health'
        },
        jp: {
          title: '30代男性の歯石除去',
          description: '下の歯の間が歯石で埋まった状態。スケーリングと歯茎治療で歯石除去と歯茎の健康回復'
        },
        cn: {
          title: '30岁男性牙结石去除',
          description: '下牙牙缝完全被牙结石填满。通过洁牙和牙龈治疗去除牙结石并恢复牙龈健康'
        }
      }
    },
    {
      beforeImage: '/images/cases/잇몸치료/40대여성 아랫니치아주변으로 노란치석으로 잇몸부음_정현진_before만.jpg',
      afterImage: '/images/cases/잇몸치료/중증치주염_잇몸치료후_구강사진_after.jpg',
      title: '40대 여성 잇몸 부음 치료',
      description: '아랫니 주변 노란 치석으로 잇몸이 부어오른 상태. 치석 제거 후 잇몸 염증 완화 및 건강 회복',
      translations: {
        en: {
          title: 'Swollen gums treatment - Female 40s',
          description: 'Swollen gums with yellow tartar around lower teeth. Tartar removal followed by gum inflammation relief and health restoration'
        },
        jp: {
          title: '40代女性の歯茎腫れ治療',
          description: '下の歯周辺の黄色い歯石で歯茎が腫れた状態。歯石除去後、歯茎の炎症緩和と健康回復'
        },
        cn: {
          title: '40岁女性牙龈肿胀治疗',
          description: '下牙周围黄色牙结石导致牙龈肿胀。去除牙结石后缓解牙龈炎症并恢复健康'
        }
      }
    }
  ],

  // 일반 임플란트 케이스 (2개) - 실제 임상사진
  implant: [
    {
      beforeImage: '/임상사진/지종환_임플란트/지종환_어금니임플란트_엑스레이_before.jpg',
      afterImage: '/임상사진/지종환_임플란트/지종환_어금니임플란트_엑스레이_after.jpg',
      title: '어금니 임플란트 (엑스레이)',
      description: '어금니 다수 임플란트 식립 전후 엑스레이 비교',
      translations: {
        en: { title: 'Molar implant (X-ray)', description: 'Before and after X-ray comparison of multiple molar implant placement' },
        jp: { title: '奥歯インプラント（レントゲン）', description: '奥歯多数インプラント埋入前後のレントゲン比較' },
        cn: { title: '磨牙种植体（X光）', description: '磨牙多颗种植体植入前后X光对比' }
      }
    },
    {
      beforeImage: '/임상사진/지종환_임플란트/지종환_어금니임플란트_실제사진_before.jpg',
      afterImage: '/임상사진/지종환_임플란트/지종환_어금니임플란트_실제사진_after.jpg',
      title: '어금니 임플란트 (실제사진)',
      description: '어금니 임플란트 보철 장착 전후 비교',
      translations: {
        en: { title: 'Molar implant (clinical photo)', description: 'Before and after molar implant prosthetic placement' },
        jp: { title: '奥歯インプラント（実際写真）', description: '奥歯インプラント補綴装着前後の比較' },
        cn: { title: '磨牙种植体（实拍照片）', description: '磨牙种植体修复体安装前后对比' }
      }
    }
  ],

  // 디지털 임플란트 - 실제 임상사진
  digital_implant: [
    {
      beforeImage: '/임상사진/지종환_임플란트/지종환_어금니임플란트_엑스레이_before.jpg',
      afterImage: '/임상사진/지종환_임플란트/지종환_어금니임플란트_엑스레이_after.jpg',
      title: '어금니 임플란트 (엑스레이)',
      description: '어금니 다수 임플란트 식립 전후 엑스레이 비교',
      translations: {
        en: { title: 'Molar implant (X-ray)', description: 'Before and after X-ray comparison of multiple molar implant placement' },
        jp: { title: '奥歯インプラント（レントゲン）', description: '奥歯多数インプラント埋入前後のレントゲン比較' },
        cn: { title: '磨牙种植体（X光）', description: '磨牙多颗种植体植入前后X光对比' }
      }
    },
    {
      beforeImage: '/임상사진/지종환_임플란트/지종환_어금니임플란트_실제사진_before.jpg',
      afterImage: '/임상사진/지종환_임플란트/지종환_어금니임플란트_실제사진_after.jpg',
      title: '어금니 임플란트 (실제사진)',
      description: '어금니 임플란트 보철 장착 전후 비교',
      translations: {
        en: { title: 'Molar implant (clinical photo)', description: 'Before and after molar implant prosthetic placement' },
        jp: { title: '奥歯インプラント（実際写真）', description: '奥歯インプラント補綴装着前後の比較' },
        cn: { title: '磨牙种植体（实拍照片）', description: '磨牙种植体修复体安装前后对比' }
      }
    }
  ],

  // 디지털전체임플란트(All on X) - 윗니/아랫니 한쪽 전체 - 실제 임상사진
  implant_upper_lower_one_side: [
    {
      beforeImage: '/임상사진/박균조_전악임플란트/박균조_전체임플란트_엑스레이_before.jpg',
      afterImage: '/임상사진/박균조_전악임플란트/박균조_전체임플란트_엑스레이_after.jpg',
      title: '전체 임플란트 (엑스레이)',
      description: '전악 임플란트 식립 전후 엑스레이 비교',
      translations: {
        en: { title: 'Full mouth implant (X-ray)', description: 'Before and after X-ray comparison of full mouth implant placement' },
        jp: { title: '全顎インプラント（レントゲン）', description: '全顎インプラント埋入前後のレントゲン比較' },
        cn: { title: '全口种植（X光）', description: '全口种植体植入前后X光对比' }
      }
    },
    {
      beforeImage: '/임상사진/박균조_전악임플란트/박균조_전체임플란트_실제사진_before.jpg',
      afterImage: '/임상사진/박균조_전악임플란트/박균조_전체임플란트_실제사진_after.jpg',
      title: '전체 임플란트 (실제사진)',
      description: '전악 임플란트 보철 장착 전후 비교',
      translations: {
        en: { title: 'Full mouth implant (clinical photo)', description: 'Before and after full mouth implant prosthetic placement' },
        jp: { title: '全顎インプラント（実際写真）', description: '全顎インプラント補綴装着前後の比較' },
        cn: { title: '全口种植（实拍照片）', description: '全口种植修复体安装前后对比' }
      }
    }
  ],

  // 디지털전체임플란트(All on X) - 모든 치아 - 실제 임상사진
  implant_all_teeth: [
    {
      beforeImage: '/임상사진/박균조_전악임플란트/박균조_전체임플란트_엑스레이_before.jpg',
      afterImage: '/임상사진/박균조_전악임플란트/박균조_전체임플란트_엑스레이_after.jpg',
      title: '전체 임플란트 (엑스레이)',
      description: '전악 임플란트 식립 전후 엑스레이 비교',
      translations: {
        en: { title: 'Full mouth implant (X-ray)', description: 'Before and after X-ray comparison of full mouth implant placement' },
        jp: { title: '全顎インプラント（レントゲン）', description: '全顎インプラント埋入前後のレントゲン比較' },
        cn: { title: '全口种植（X光）', description: '全口种植体植入前后X光对比' }
      }
    },
    {
      beforeImage: '/임상사진/박균조_전악임플란트/박균조_전체임플란트_실제사진_before.jpg',
      afterImage: '/임상사진/박균조_전악임플란트/박균조_전체임플란트_실제사진_after.jpg',
      title: '전체 임플란트 (실제사진)',
      description: '전악 임플란트 보철 장착 전후 비교',
      translations: {
        en: { title: 'Full mouth implant (clinical photo)', description: 'Before and after full mouth implant prosthetic placement' },
        jp: { title: '全顎インプラント（実際写真）', description: '全顎インプラント補綴装着前後の比較' },
        cn: { title: '全口种植（实拍照片）', description: '全口种植修复体安装前后对比' }
      }
    }
  ],

  // 앞니 다수 임플란트 - 실제 임상사진
  implant_front_multiple: [
    {
      beforeImage: '/임상사진/지종환_임플란트/지종환_어금니임플란트_엑스레이_before.jpg',
      afterImage: '/임상사진/지종환_임플란트/지종환_어금니임플란트_엑스레이_after.jpg',
      title: '어금니 임플란트 (엑스레이)',
      description: '어금니 다수 임플란트 식립 전후 엑스레이 비교',
      translations: {
        en: { title: 'Molar implant (X-ray)', description: 'Before and after X-ray comparison of multiple molar implant placement' },
        jp: { title: '奥歯インプラント（レントゲン）', description: '奥歯多数インプラント埋入前後のレントゲン比較' },
        cn: { title: '磨牙种植体（X光）', description: '磨牙多颗种植体植入前后X光对比' }
      }
    },
    {
      beforeImage: '/임상사진/지종환_임플란트/지종환_어금니임플란트_실제사진_before.jpg',
      afterImage: '/임상사진/지종환_임플란트/지종환_어금니임플란트_실제사진_after.jpg',
      title: '어금니 임플란트 (실제사진)',
      description: '어금니 임플란트 보철 장착 전후 비교',
      translations: {
        en: { title: 'Molar implant (clinical photo)', description: 'Before and after molar implant prosthetic placement' },
        jp: { title: '奥歯インプラント（実際写真）', description: '奥歯インプラント補綴装着前後の比較' },
        cn: { title: '磨牙种植体（实拍照片）', description: '磨牙种植体修复体安装前后对比' }
      }
    },
    {
      beforeImage: '/임상사진/이영주_임플란트/이영주_임플란트_실사_before.jpg',
      afterImage: '/임상사진/이영주_임플란트/이영주_임플란트_실사_after.jpg',
      title: '임플란트 (실제사진)',
      description: '임플란트 식립 및 보철 전후 비교',
      translations: {
        en: { title: 'Implant (clinical photo)', description: 'Before and after implant placement and prosthetic' },
        jp: { title: 'インプラント（実際写真）', description: 'インプラント埋入および補綴前後の比較' },
        cn: { title: '种植体（实拍照片）', description: '种植体植入及修复前后对比' }
      }
    }
  ],

  // 어금니 다수 임플란트 - 실제 임상사진
  implant_back_multiple: [
    {
      beforeImage: '/임상사진/지종환_임플란트/지종환_어금니임플란트_엑스레이_before.jpg',
      afterImage: '/임상사진/지종환_임플란트/지종환_어금니임플란트_엑스레이_after.jpg',
      title: '어금니 임플란트 (엑스레이)',
      description: '어금니 다수 임플란트 식립 전후 엑스레이 비교',
      translations: {
        en: { title: 'Molar implant (X-ray)', description: 'Before and after X-ray comparison of multiple molar implant placement' },
        jp: { title: '奥歯インプラント（レントゲン）', description: '奥歯多数インプラント埋入前後のレントゲン比較' },
        cn: { title: '磨牙种植体（X光）', description: '磨牙多颗种植体植入前后X光对比' }
      }
    },
    {
      beforeImage: '/임상사진/지종환_임플란트/지종환_어금니임플란트_실제사진_before.jpg',
      afterImage: '/임상사진/지종환_임플란트/지종환_어금니임플란트_실제사진_after.jpg',
      title: '어금니 임플란트 (실제사진)',
      description: '어금니 임플란트 보철 장착 전후 비교',
      translations: {
        en: { title: 'Molar implant (clinical photo)', description: 'Before and after molar implant prosthetic placement' },
        jp: { title: '奥歯インプラント（実際写真）', description: '奥歯インプラント補綴装着前後の比較' },
        cn: { title: '磨牙种植体（实拍照片）', description: '磨牙种植体修复体安装前后对比' }
      }
    },
    {
      beforeImage: '/임상사진/이영주_임플란트/이영주_임플란트_실사_before.jpg',
      afterImage: '/임상사진/이영주_임플란트/이영주_임플란트_실사_after.jpg',
      title: '임플란트 (실제사진)',
      description: '임플란트 식립 및 보철 전후 비교',
      translations: {
        en: { title: 'Implant (clinical photo)', description: 'Before and after implant placement and prosthetic' },
        jp: { title: 'インプラント（実際写真）', description: 'インプラント埋入および補綴前後の比較' },
        cn: { title: '种植体（实拍照片）', description: '种植体植入及修复前后对比' }
      }
    }
  ],

  // 임플란트 재수술 - 실제 임상사진
  implant_revision: [
    {
      beforeImage: '/임상사진/지종환_임플란트/지종환_어금니임플란트_엑스레이_before.jpg',
      afterImage: '/임상사진/지종환_임플란트/지종환_어금니임플란트_엑스레이_after.jpg',
      title: '어금니 임플란트 (엑스레이)',
      description: '어금니 다수 임플란트 식립 전후 엑스레이 비교',
      translations: {
        en: { title: 'Molar implant (X-ray)', description: 'Before and after X-ray comparison of multiple molar implant placement' },
        jp: { title: '奥歯インプラント（レントゲン）', description: '奥歯多数インプラント埋入前後のレントゲン比較' },
        cn: { title: '磨牙种植体（X光）', description: '磨牙多颗种植体植入前后X光对比' }
      }
    },
    {
      beforeImage: '/임상사진/지종환_임플란트/지종환_어금니임플란트_실제사진_before.jpg',
      afterImage: '/임상사진/지종환_임플란트/지종환_어금니임플란트_실제사진_after.jpg',
      title: '어금니 임플란트 (실제사진)',
      description: '어금니 임플란트 보철 장착 전후 비교',
      translations: {
        en: { title: 'Molar implant (clinical photo)', description: 'Before and after molar implant prosthetic placement' },
        jp: { title: '奥歯インプラント（実際写真）', description: '奥歯インプラント補綴装着前後の比較' },
        cn: { title: '磨牙种植体（实拍照片）', description: '磨牙种植体修复体安装前后对比' }
      }
    },
    {
      beforeImage: '/임상사진/이영주_임플란트/이영주_임플란트_실사_before.jpg',
      afterImage: '/임상사진/이영주_임플란트/이영주_임플란트_실사_after.jpg',
      title: '임플란트 (실제사진)',
      description: '임플란트 식립 및 보철 전후 비교',
      translations: {
        en: { title: 'Implant (clinical photo)', description: 'Before and after implant placement and prosthetic' },
        jp: { title: 'インプラント（実際写真）', description: 'インプラント埋入および補綴前後の比較' },
        cn: { title: '种植体（实拍照片）', description: '种植体植入及修复前后对比' }
      }
    }
  ],

  // 전체 임플란트 케이스 (All on X) - 실제 임상사진
  all_on_x: [
    {
      beforeImage: '/임상사진/박균조_전악임플란트/박균조_전체임플란트_엑스레이_before.jpg',
      afterImage: '/임상사진/박균조_전악임플란트/박균조_전체임플란트_엑스레이_after.jpg',
      title: '전체 임플란트 (엑스레이)',
      description: '전악 임플란트 식립 전후 엑스레이 비교',
      translations: {
        en: { title: 'Full mouth implant (X-ray)', description: 'Before and after X-ray comparison of full mouth implant placement' },
        jp: { title: '全顎インプラント（レントゲン）', description: '全顎インプラント埋入前後のレントゲン比較' },
        cn: { title: '全口种植（X光）', description: '全口种植体植入前后X光对比' }
      }
    },
    {
      beforeImage: '/임상사진/박균조_전악임플란트/박균조_전체임플란트_실제사진_before.jpg',
      afterImage: '/임상사진/박균조_전악임플란트/박균조_전체임플란트_실제사진_after.jpg',
      title: '전체 임플란트 (실제사진)',
      description: '전악 임플란트 보철 장착 전후 비교',
      translations: {
        en: { title: 'Full mouth implant (clinical photo)', description: 'Before and after full mouth implant prosthetic placement' },
        jp: { title: '全顎インプラント（実際写真）', description: '全顎インプラント補綴装着前後の比較' },
        cn: { title: '全口种植（实拍照片）', description: '全口种植修复体安装前后对比' }
      }
    }
  ],

  // 사랑니 케이스 - 기본 (위+아래 혼합)
  wisdom_tooth: [
    {
      beforeImage: '/임상사진/사랑니/왼쪽아래사랑니_before.jpeg',
      afterImage: '/임상사진/사랑니/왼쪽아래사랑니_after.jpeg',
      title: '왼쪽 아래 사랑니 발치',
      description: '매복된 왼쪽 아래 사랑니를 안전하게 발치 완료',
      translations: {
        en: { title: 'Left lower wisdom tooth extraction', description: 'Safe extraction of impacted left lower wisdom tooth' },
        jp: { title: '左下親知らず抜歯', description: '埋伏した左下の親知らずを安全に抜歯完了' },
        cn: { title: '左下智齿拔除', description: '安全拔除阻生左下智齿' }
      }
    },
    {
      beforeImage: '/임상사진/사랑니/우측아래사랑니_before.jpeg',
      afterImage: '/임상사진/사랑니/우측아래사랑니_after.jpeg',
      title: '우측 아래 사랑니 발치',
      description: '우측 아래 사랑니 발치 후 잇몸 깔끔하게 회복',
      translations: {
        en: { title: 'Right lower wisdom tooth extraction', description: 'Clean gum recovery after right lower wisdom tooth extraction' },
        jp: { title: '右下親知らず抜歯', description: '右下の親知らず抜歯後、歯茎がきれいに回復' },
        cn: { title: '右下智齿拔除', description: '右下智齿拔除后牙龈恢复良好' }
      }
    }
  ],

  // 사랑니 케이스 - 위 사랑니 (답안1)
  wisdom_tooth_upper: [
    {
      beforeImage: '/임상사진/사랑니/왼쪽아래사랑니_before.jpeg',
      afterImage: '/임상사진/사랑니/왼쪽아래사랑니_after.jpeg',
      title: '사랑니 발치',
      description: '매복된 사랑니를 안전하게 발치 완료. 통합치의학과 전문의가 직접 시술',
      translations: {
        en: { title: 'Wisdom tooth extraction', description: 'Safe extraction of impacted wisdom tooth by specialist' },
        jp: { title: '親知らず抜歯', description: '埋伏した親知らずを専門医が安全に抜歯完了' },
        cn: { title: '智齿拔除', description: '专家安全拔除阻生智齿' }
      }
    }
  ],

  // 사랑니 케이스 - 아래 사랑니 (답안2)
  wisdom_tooth_lower: [
    {
      beforeImage: '/임상사진/사랑니/왼쪽아래사랑니_before.jpeg',
      afterImage: '/임상사진/사랑니/왼쪽아래사랑니_after.jpeg',
      title: '왼쪽 아래 사랑니 발치',
      description: '매복된 왼쪽 아래 사랑니를 안전하게 발치 완료',
      translations: {
        en: { title: 'Left lower wisdom tooth extraction', description: 'Safe extraction of impacted left lower wisdom tooth' },
        jp: { title: '左下親知らず抜歯', description: '埋伏した左下の親知らずを安全に抜歯完了' },
        cn: { title: '左下智齿拔除', description: '安全拔除阻生左下智齿' }
      }
    },
    {
      beforeImage: '/임상사진/사랑니/우측아래사랑니_before.jpeg',
      afterImage: '/임상사진/사랑니/우측아래사랑니_after.jpeg',
      title: '우측 아래 사랑니 발치',
      description: '우측 아래 사랑니 발치 후 잇몸 깔끔하게 회복',
      translations: {
        en: { title: 'Right lower wisdom tooth extraction', description: 'Clean gum recovery after right lower wisdom tooth extraction' },
        jp: { title: '右下親知らず抜歯', description: '右下の親知らず抜歯後、歯茎がきれいに回復' },
        cn: { title: '右下智齿拔除', description: '右下智齿拔除后牙龈恢复良好' }
      }
    },
    {
      beforeImage: '/임상사진/사랑니/임플란트식립하면서사랑니발치_before.jpeg',
      afterImage: '/임상사진/사랑니/임플란트하면서발치_after.jpeg',
      title: '임플란트 식립 + 사랑니 동시 발치',
      description: '임플란트 식립과 사랑니 발치를 동시에 진행하여 내원 횟수 최소화',
      translations: {
        en: { title: 'Implant placement + wisdom tooth extraction', description: 'Simultaneous implant placement and wisdom tooth extraction to minimize visits' },
        jp: { title: 'インプラント埋入＋親知らず同時抜歯', description: 'インプラント埋入と親知らず抜歯を同時に行い来院回数を最小化' },
        cn: { title: '种植体植入+智齿同时拔除', description: '同时进行种植体植入和智齿拔除，最大限度减少就诊次数' }
      }
    }
  ],

  // 사랑니 케이스 - 검진/예방 (답안3)
  wisdom_tooth_checkup: [
    {
      beforeImage: '/임상사진/사랑니/우측아래사랑니_before.jpeg',
      afterImage: '/임상사진/사랑니/우측아래사랑니_after.jpeg',
      title: '사랑니 검진 후 발치',
      description: '정기 검진에서 발견된 사랑니를 적절한 시기에 안전하게 발치. 통합치의학과 전문의가 직접 진단',
      translations: {
        en: { title: 'Wisdom tooth extraction after checkup', description: 'Wisdom tooth discovered during regular checkup, safely extracted at optimal timing by specialist' },
        jp: { title: '検診後の親知らず抜歯', description: '定期検診で発見された親知らずを適切な時期に安全に抜歯。専門医が直接診断' },
        cn: { title: '检查后智齿拔除', description: '定期检查中发现的智齿在最佳时机安全拔除。专家亲自诊断' }
      }
    }
  ],

  // 미백 케이스 (2개)
  whitening: [
    {
      beforeImage: '/images/cases/cosmetic/discolored-tooth-before.jpg',
      afterImage: '/images/cases/cosmetic/discolored-tooth-after.jpg',
      title: '변색 치아 미백',
      description: '전체적으로 누런 변색이 심한 상태. 전문가 미백 시술로 2-3단계 밝아져 환하고 깨끗한 미소 완성',
      translations: {
        en: {
          title: 'Discolored teeth whitening',
          description: 'Overall severe yellowing discoloration. Professional whitening treatment brightened 2-3 shades, achieving a bright and clean smile'
        },
        jp: {
          title: '変色歯のホワイトニング',
          description: '全体的に黄色い変色が著しい状態。専門家のホワイトニング施術で2-3段階明るくなり、明るくきれいな笑顔を完成'
        },
        cn: {
          title: '变色牙齿美白',
          description: '整体严重的黄色变色状态。专业美白治疗亮白2-3个色阶，完成明亮洁净的笑容'
        }
      }
    },
    {
      beforeImage: '/images/cases/cosmetic/aging-discoloration-before.jpg',
      afterImage: '/images/cases/cosmetic/aging-discoloration-after.jpg',
      title: '노화로 인한 변색 미백',
      description: '나이가 들면서 자연스럽게 누렇게 변한 치아. 미백 시술로 젊어 보이는 밝은 톤의 치아색으로 개선',
      translations: {
        en: {
          title: 'Age-related discoloration whitening',
          description: 'Naturally yellowed teeth with age. Whitening treatment improved to a youthful bright tone'
        },
        jp: {
          title: '加齢による変色のホワイトニング',
          description: '加齢とともに自然に黄色くなった歯。ホワイトニング施術で若々しく見える明るいトーンの歯の色に改善'
        },
        cn: {
          title: '老化导致变色美白',
          description: '随着年龄增长自然变黄的牙齿。美白治疗改善为显得年轻的明亮色调'
        }
      }
    }
  ],

  // 라미네이트 케이스 (2개)
  laminate: [
    {
      beforeImage: '/images/cases/cosmetic/front-tooth-laminate-before.jpg',
      afterImage: '/images/cases/cosmetic/front-tooth-laminate-after.jpg',
      title: '앞니 변색 라미네이트',
      description: '앞니가 누렇고 모양이 불규칙한 상태. 라미네이트로 자연스럽고 균일한 앞니 완성',
      translations: {
        en: {
          title: 'Front teeth discoloration laminate',
          description: 'Yellowed front teeth with irregular shape. Natural and uniform front teeth completed with laminates'
        },
        jp: {
          title: '前歯変色のラミネート',
          description: '前歯が黄色く形が不規則な状態。ラミネートで自然で均一な前歯を完成'
        },
        cn: {
          title: '门牙变色贴面',
          description: '门牙发黄且形状不规则。用贴面完成自然均匀的门牙'
        }
      }
    },
    {
      beforeImage: '/images/cases/cosmetic/front-gap-laminate-before.jpg',
      afterImage: '/images/cases/cosmetic/front-gap-laminate-after.jpg',
      title: '앞니 틈새 라미네이트',
      description: '앞니 사이 틈(정중이개)과 변색이 있는 상태. 라미네이트로 틈 없이 균일하고 밝은 스마일라인 완성',
      translations: {
        en: {
          title: 'Front teeth gap laminate',
          description: 'Gap between front teeth (diastema) with discoloration. Uniform and bright smile line completed with laminates without gaps'
        },
        jp: {
          title: '前歯隙間のラミネート',
          description: '前歯の隙間（正中離開）と変色がある状態。ラミネートで隙間なく均一で明るいスマイルラインを完成'
        },
        cn: {
          title: '门牙缝隙贴面',
          description: '门牙之间有缝隙（正中牙缝）且变色。用贴面完成无缝隙均匀明亮的微笑曲线'
        }
      }
    }
  ],

  // 심미 상담 전용 - 미백 케이스 (8개)
  cosmetic_whitening: [
    {
      beforeImage: '/images/cases/cosmetic/답안2) 전문가미백/답안2_김건우 전문가미백 before.jpg',
      afterImage: '/images/cases/cosmetic/답안2) 전문가미백/답안2_김건우 전문가미백 after.jpg',
      title: '전문가 미백 케이스 1',
      description: '오스템 뷰티스미백으로 밝고 깨끗한 치아 완성'
    },
    {
      beforeImage: '/images/cases/cosmetic/답안2) 전문가미백/답안2_구본경 전문가미백 before.jpg',
      afterImage: '/images/cases/cosmetic/답안2) 전문가미백/답안2_구본경 전문가미백 after.jpg',
      title: '전문가 미백 케이스 2',
      description: '전문가 미백으로 자연스러운 밝기 회복'
    },
    {
      beforeImage: '/images/cases/cosmetic/답안2) 전문가미백/답안2_ 배인혜 전문가미백_before.jpg',
      afterImage: '/images/cases/cosmetic/답안2) 전문가미백/답안2_ 배인혜 전문가미백_after.jpg',
      title: '전문가 미백 케이스 3',
      description: '치아 손상 없이 2-3단계 밝아진 케이스'
    },
    {
      beforeImage: '/images/cases/cosmetic/답안2) 전문가미백/답안2_황신영 전문가미백 before.jpg',
      afterImage: '/images/cases/cosmetic/답안2) 전문가미백/답안2_황신영 전문가미백 after.jpg',
      title: '전문가 미백 케이스 4',
      description: '잇몸 보호와 함께 안전한 미백 완성'
    },
    {
      beforeImage: '/images/cases/cosmetic/답안2) 전문가미백/답안2_심규탁_전문가미백 before.jpg',
      afterImage: '/images/cases/cosmetic/답안2) 전문가미백/답안2_심규탁_전문가미백 after.jpg',
      title: '전문가 미백 케이스 5',
      description: '환하고 깨끗한 미소 완성'
    },
    {
      beforeImage: '/images/cases/cosmetic/답안2) 전문가미백/답안2_이소정_전문가미백_before.jpg',
      afterImage: '/images/cases/cosmetic/답안2) 전문가미백/답안2_이소정_전문가미백_after.jpg',
      title: '전문가 미백 케이스 6',
      description: '전문가 미백으로 밝은 스마일라인'
    },
    {
      beforeImage: '/images/cases/cosmetic/답안2) 전문가미백/답안2_박소희_전문가미백_before.jpg',
      afterImage: '/images/cases/cosmetic/답안2) 전문가미백/답안2_박소희_전문가미백_after.jpg',
      title: '전문가 미백 케이스 7',
      description: '누런 치아를 밝게 개선'
    },
    {
      beforeImage: '/images/cases/cosmetic/답안2) 전문가미백/답안2_이진영_전문가미백 before.jpg',
      afterImage: '/images/cases/cosmetic/답안2) 전문가미백/답안2_이진영_전문가미백 after.jpg',
      title: '전문가 미백 케이스 8',
      description: '자연스럽고 밝은 치아색 완성'
    }
  ],

  // 심미 상담 전용 - 라미네이트 무료진단 케이스 (3단계)
  laminate_free_diagnosis: [
    {
      beforeImage: '/images/cases/cosmetic/답안1) 라미네이트/답안1) 라미네이트 가상무료진단/답안1) 윗니 최소삭제 라미네이트_전형석_before.jpg',
      intermediateImage: '/images/cases/cosmetic/답안1) 라미네이트/답안1) 라미네이트 가상무료진단/답안1) 윗니 최소삭제 라미네이트_전형석_가상무료진단.jpg',
      intermediateLabel: '가상 무료진단',
      afterImage: '/images/cases/cosmetic/답안1) 라미네이트/답안1) 라미네이트 가상무료진단/담안1) 윗니 최소삭제 라미네이트_전형석_after.jpg',
      title: '라미네이트 무료진단 케이스',
      description: '무료 진단으로 미리 결과를 확인하고 치료 진행'
    }
  ],

  // 심미 상담 전용 - 파샬(부분) 라미네이트
  laminate_partial: [
    {
      beforeImage: '/images/cases/cosmetic/답안1) 라미네이트/답안1) 치아사이공간_ 부분라미네이트_조경미/케이스1_아래앞니치간사이공간_부분라미_장지혜/답안1_아래앞니치간사이공간_파샬라미_장지혜_before.jpg',
      afterImage: '/images/cases/cosmetic/답안1) 라미네이트/답안1) 치아사이공간_ 부분라미네이트_조경미/케이스1_아래앞니치간사이공간_부분라미_장지혜/답안1_아래앞니치간사이공간_파샬라미_장지혜_after.jpg',
      title: '치아사이 파샬라미네이트',
      description: '치아 사이 공간을 부분 라미네이트로 자연스럽게 개선'
    }
  ],

  // 심미 상담 전용 - 무삭제 라미네이트
  laminate_noprep: [
    {
      beforeImage: '/images/cases/cosmetic/답안1) 라미네이트/답안1) 윗니 무삭제라미네이트/케이스1/답안1) 윗니 무삭제라미네이트_변혁_ before.jpg',
      afterImage: '/images/cases/cosmetic/답안1) 라미네이트/답안1) 윗니 무삭제라미네이트/케이스1/답안1) 윗니 무삭제라미네이트_변혁_after.jpg',
      title: '윗니 무삭제라미네이트',
      description: '치아 삭제 없이 자연스러운 스마일라인 완성'
    }
  ],

  // 심미 상담 전용 - 최소삭제 라미네이트
  laminate_minimalprep: [
    {
      beforeImage: '/images/cases/cosmetic/답안1) 라미네이트/답안1) 윗니 최소삭제라미네이트/케이스1 김병석/답안1) 윗니 최소삭제라미네이트_김병석_before.jpg',
      afterImage: '/images/cases/cosmetic/답안1) 라미네이트/답안1) 윗니 최소삭제라미네이트/케이스1 김병석/답안1) 윗니 최소삭제라미네이트_김병석_after.jpg',
      title: '윗니 최소삭제라미네이트',
      description: '최소한의 삭제로 치아 보존하며 심미 개선'
    }
  ],

  // 크라운/브릿지 - 답안1(신경치료 후 보철) 이미지 사용
  crown_bridge: [
    {
      beforeImage: '/images/cases/cavity-nerve-prosthetic/답안1) 치아가 아파요_심한충치_치수염으로인한 신경치료/답안1) 치아가 아파요_심한충치로 신경치료 및 보철치료완료_ 허재욱/답안1) 치아가 아파요_심한충치로 신경치료 및 보철치료완료_ 허재욱 before(1).jpg',
      afterImage: '/images/cases/cavity-nerve-prosthetic/답안1) 치아가 아파요_심한충치_치수염으로인한 신경치료/답안1) 치아가 아파요_심한충치로 신경치료 및 보철치료완료_ 허재욱/답안1) 치아가 아파요_심한충치로 신경치료 및 보철치료완료_ 허재욱 after(1).jpg',
      title: '충치 치료 후 크라운 마무리',
      description: '충치로 인해 신경치료 후, 크라운을 씌워 오래 사용할 수 있도록 마무리',
      translations: {
        en: {
          title: 'Crown finishing after cavity treatment',
          description: 'After root canal for cavity, crowned for long-term durability'
        },
        jp: {
          title: '虫歯治療後クラウンで仕上げ',
          description: '虫歯による根管治療後、長期間使用できるようクラウンで仕上げ'
        },
        cn: {
          title: '龋齿治疗后牙冠收尾',
          description: '龋齿根管治疗后，戴上牙冠以便长期使用'
        }
      }
    },
    {
      beforeImage: '/images/cases/cavity-nerve-prosthetic/답안1) 치아가 아파요_심한충치_치수염으로인한 신경치료/답안1) 치아가 아파요_뿌리염증으로 재신경치료 및 보철치료완료_문경태/답안1) 치아가 아파요_뿌리염증으로 재신경치료 및 보철치료완료_문경태 before.jpg',
      afterImage: '/images/cases/cavity-nerve-prosthetic/답안1) 치아가 아파요_심한충치_치수염으로인한 신경치료/답안1) 치아가 아파요_뿌리염증으로 재신경치료 및 보철치료완료_문경태/답안1) 치아가 아파요_뿌리염증으로 재신경치료 및 보철치료완료_문경태 after.jpg',
      title: '신경치료 후 크라운 보철',
      description: '심한 충치로 신경치료를 진행한 어금니. 신경치료 후에는 치아가 약해지므로 크라운을 씌워 보호하고 저작 기능을 회복함',
      translations: {
        en: {
          title: 'Crown after root canal',
          description: 'Molar with severe cavity requiring root canal. After treatment, crown placed to protect weakened tooth and restore chewing function'
        },
        jp: {
          title: '根管治療後のクラウン',
          description: '重度の虫歯で根管治療を行った大臼歯。治療後は歯が弱くなるためクラウンで保護し咀嚼機能を回復'
        },
        cn: {
          title: '根管治疗后牙冠',
          description: '因严重龋齿进行根管治疗的磨牙。治疗后牙齿变弱，需戴牙冠保护并恢复咀嚼功能'
        }
      }
    }
  ],

  // 레진 치료 - 라미네이트 케이스 사용
  resin: [
    {
      beforeImage: '/images/cases/cosmetic/front-tooth-laminate-before.jpg',
      afterImage: '/images/cases/cosmetic/front-tooth-laminate-after.jpg',
      title: '앞니 레진 치료',
      description: '당일 치료로 자연스러운 앞니 완성',
      translations: {
        en: {
          title: 'Front teeth resin treatment',
          description: 'Natural-looking front teeth completed with same-day treatment'
        },
        jp: {
          title: '前歯のレジン治療',
          description: '当日治療で自然な前歯に'
        },
        cn: {
          title: '前牙树脂治疗',
          description: '当天治疗完成自然前牙'
        }
      }
    }
  ]
};

// 치료 추천 타입에 따른 케이스 이미지 선택 함수
export function getCaseImagesForTreatment(
  treatmentType: string,
  count: number = 2,
  language: string = 'ko'
): CaseImage[] {
  const cases = TREATMENT_CASE_IMAGES[treatmentType as keyof typeof TREATMENT_CASE_IMAGES] as CaseImage[] | undefined;

  if (!cases || cases.length === 0) {
    return [];
  }

  // 최대 count개까지만 선택
  const selectedCases = cases.slice(0, Math.min(count, cases.length));

  // 언어가 한국어가 아니고 번역이 있는 경우 번역 적용
  if (language !== 'ko') {
    return selectedCases.map(caseImg => {
      const translation = caseImg.translations?.[language as 'en' | 'jp' | 'cn'];
      if (translation) {
        return {
          ...caseImg,
          title: translation.title,
          description: translation.description
        } as CaseImage;
      }
      return caseImg;
    });
  }

  return selectedCases;
}

// 여러 치료 추천에 대한 케이스 이미지 조합
export function getCaseImagesForMultipleTreatments(
  treatments: string[],
  maxPerTreatment: number = 2,
  language: string = 'ko'
): CaseImage[] {
  const allCases: CaseImage[] = [];
  const seenImages = new Set<string>();

  for (const treatment of treatments) {
    const cases = getCaseImagesForTreatment(treatment, maxPerTreatment, language);

    // 중복 제거: 이미 추가된 이미지는 제외
    for (const caseImg of cases) {
      const imageKey = `${caseImg.beforeImage}|${caseImg.afterImage}`;
      if (!seenImages.has(imageKey)) {
        seenImages.add(imageKey);
        allCases.push(caseImg);
      }
    }
  }

  return allCases;
}
