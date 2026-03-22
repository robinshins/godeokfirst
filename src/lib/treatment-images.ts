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
      beforeImage: '/images/cases/wisdom-tooth/answer1-upper/food-impaction-overeruption/before.jpg',
      afterImage: '/images/cases/wisdom-tooth/answer1-upper/food-impaction-overeruption/after.jpg',
      title: '위 사랑니 발치',
      description: '음식물 끼임, 씹을 때 불편함, 정출로 인한 위 사랑니 발치. 간단한 시술로 빠른 회복',
      translations: {
        en: { title: 'Upper wisdom tooth extraction', description: 'Upper wisdom tooth extraction due to food impaction, chewing discomfort, and overeruption. Quick recovery with simple procedure' },
        jp: { title: '上の親知らず抜歯', description: '食べ物の詰まり、噛む不快感、挺出による上の親知らず抜歯。簡単な施術で早い回復' },
        cn: { title: '上颌智齿拔除', description: '因食物嵌塞、咀嚼不适、过长拔除上颌智齿。简单手术快速恢复' }
      }
    },
    {
      beforeImage: '/images/cases/wisdom-tooth/answer2-lower/high-difficulty/horizontal-impaction/before.jpg',
      afterImage: '/images/cases/wisdom-tooth/answer2-lower/high-difficulty/horizontal-impaction/after.jpg',
      title: '아래 사랑니 고난이도 발치',
      description: '수평매복 아래 사랑니 고난이도 발치. 대학병원급 숙련된 전문의 시술로 안전하게 제거',
      translations: {
        en: { title: 'Lower wisdom tooth high-difficulty extraction', description: 'High-difficulty extraction of horizontally impacted lower wisdom tooth. Safely removed by university hospital-level specialist' },
        jp: { title: '下の親知らず高難度抜歯', description: '水平埋伏の下の親知らず高難度抜歯。大学病院レベルの熟練専門医で安全に除去' },
        cn: { title: '下颌智齿高难度拔除', description: '水平阻生下颌智齿高难度拔除。大学医院级专家安全操作' }
      }
    }
  ],

  // 사랑니 케이스 - 위 사랑니 (답안1)
  wisdom_tooth_upper: [
    {
      beforeImage: '/images/cases/wisdom-tooth/answer1-upper/food-impaction-overeruption/before.jpg',
      afterImage: '/images/cases/wisdom-tooth/answer1-upper/food-impaction-overeruption/after.jpg',
      title: '위 사랑니 발치 - 음식물끼임/정출',
      description: '음식물 끼임, 씹을 때 불편함, 정출로 인한 위 사랑니 발치. 간단한 시술로 빠른 회복',
      translations: {
        en: { title: 'Upper wisdom tooth - Food impaction/Overeruption', description: 'Upper wisdom tooth extraction due to food impaction, chewing discomfort, and overeruption. Quick recovery' },
        jp: { title: '上の親知らず - 食べ物詰まり/挺出', description: '食べ物の詰まり、噛む不快感、挺出による上の親知らず抜歯。早い回復' },
        cn: { title: '上颌智齿 - 食物嵌塞/过长', description: '因食物嵌塞、咀嚼不适、过长拔除上颌智齿。快速恢复' }
      }
    }
  ],

  // 사랑니 케이스 - 아래 사랑니 (답안2)
  wisdom_tooth_lower: [
    {
      beforeImage: '/images/cases/wisdom-tooth/answer2-lower/high-difficulty/horizontal-impaction/before.jpg',
      afterImage: '/images/cases/wisdom-tooth/answer2-lower/high-difficulty/horizontal-impaction/after.jpg',
      title: '아래 사랑니 고난이도 발치 - 수평매복',
      description: '수평매복 아래 사랑니 고난이도 발치. 대학병원급 숙련된 전문의 시술로 안전하게 제거',
      translations: {
        en: { title: 'Lower wisdom tooth - Horizontal impaction', description: 'High-difficulty extraction of horizontally impacted lower wisdom tooth. Safely removed by university hospital-level specialist' },
        jp: { title: '下の親知らず - 水平埋伏', description: '水平埋伏の下の親知らず高難度抜歯。大学病院レベルの熟練専門医で安全に除去' },
        cn: { title: '下颌智齿 - 水平阻生', description: '水平阻生下颌智齿高难度拔除。大学医院级专家安全操作' }
      }
    },
    {
      beforeImage: '/images/cases/wisdom-tooth/answer2-lower/high-difficulty/nerve-adjacent/before.jpg',
      afterImage: '/images/cases/wisdom-tooth/answer2-lower/high-difficulty/nerve-adjacent/after.jpg',
      title: '아래 사랑니 고난이도 발치 - 신경관 근접',
      description: '신경관에 근접한 고난이도 아래 사랑니. 숙련된 전문의가 신경 손상 없이 안전하게 발치',
      translations: {
        en: { title: 'Lower wisdom tooth - Near nerve canal', description: 'High-difficulty lower wisdom tooth near nerve canal. Safely extracted without nerve damage by experienced specialist' },
        jp: { title: '下の親知らず - 神経管近接', description: '神経管に近接した高難度下の親知らず。熟練専門医が神経損傷なく安全に抜歯' },
        cn: { title: '下颌智齿 - 靠近神经管', description: '靠近神经管的高难度下颌智齿。资深专家无神经损伤安全拔除' }
      }
    },
    {
      beforeImage: '/images/cases/wisdom-tooth/answer2-lower/adjacent-tooth-damage/before-2.jpg',
      afterImage: '/images/cases/wisdom-tooth/answer2-lower/adjacent-tooth-damage/after-2.jpg',
      title: '사랑니 방치로 인접치까지 충치',
      description: '사랑니를 오래 방치하여 양쪽 인접 어금니(7번)까지 심한 충치 발생. 사랑니 발치 후 손상된 인접치는 크라운으로 치료 완료',
      translations: {
        en: { title: 'Adjacent tooth decay from neglected wisdom tooth', description: 'Long-neglected wisdom teeth caused severe decay in adjacent molars (#7) on both sides. After wisdom tooth extraction, damaged adjacent teeth restored with crowns' },
        jp: { title: '親知らず放置で隣接歯まで虫歯', description: '親知らずを長期間放置し両側の隣接大臼歯(7番)まで重度の虫歯が発生。親知らず抜歯後、損傷した隣接歯はクラウンで治療完了' },
        cn: { title: '智齿拖延导致邻牙龋齿', description: '长期拖延智齿导致两侧邻近磨牙(7号)严重龋齿。智齿拔除后，受损邻牙用牙冠修复完成' }
      }
    },
    {
      beforeImage: '/images/cases/wisdom-tooth/answer2-lower/neglected-severe-cavity/before.jpg',
      afterImage: '/images/cases/wisdom-tooth/answer2-lower/neglected-severe-cavity/after.jpg',
      title: '아래 사랑니 - 방치로 심한 충치',
      description: '발치 시기를 놓쳐 심한 충치가 발생한 아래 사랑니. 조기 발치의 중요성을 보여주는 케이스',
      translations: {
        en: { title: 'Lower wisdom tooth - Severe decay from neglect', description: 'Lower wisdom tooth with severe decay from delayed extraction. Case showing importance of early extraction' },
        jp: { title: '下の親知らず - 放置による深刻な虫歯', description: '抜歯時期を逃し深刻な虫歯が発生した下の親知らず。早期抜歯の重要性を示すケース' },
        cn: { title: '下颌智齿 - 拖延导致严重龋齿', description: '因延迟拔除导致严重龋齿的下颌智齿。展示早期拔除重要性的案例' }
      }
    }
  ],

  // 사랑니 케이스 - 검진/예방 (답안3)
  wisdom_tooth_checkup: [
    {
      beforeImage: '/images/cases/wisdom-tooth/answer3-checkup/buried-in-bone/checkup.jpg',
      afterImage: '/images/cases/wisdom-tooth/answer3-checkup/buried-in-bone/checkup.jpg',
      title: '뼈 안에 묻힌 사랑니 - 정기검진',
      description: '뼈 안에 완전히 묻혀있어 현재 증상은 없지만 정기 검진으로 관리. 고난이도 사랑니 경험 풍부한 대표원장님이 직접 진단',
      translations: {
        en: { title: 'Buried wisdom tooth - Regular checkup', description: 'Completely buried in bone with no current symptoms, managed with regular checkups. Diagnosed by chief director experienced in difficult wisdom teeth' },
        jp: { title: '骨内埋伏親知らず - 定期検診', description: '骨内に完全に埋まり現在症状なし、定期検診で管理。高難度親知らず経験豊富な院長が直接診断' },
        cn: { title: '骨内埋伏智齿 - 定期检查', description: '完全埋于骨内暂无症状，定期检查管理。经验丰富的院长亲自诊断高难度智齿' }
      }
    },
    {
      beforeImage: '/images/cases/wisdom-tooth/answer3-checkup/preventive-extraction/before.jpg',
      afterImage: '/images/cases/wisdom-tooth/answer3-checkup/preventive-extraction/after.jpg',
      title: '예방적 사랑니 발치 - 양치 불량',
      description: '현재 아프지 않지만 양치가 어려워 인접치 보호를 위해 예방적 발치. 자연치아 보존주의 고덕퍼스트치과',
      translations: {
        en: { title: 'Preventive wisdom tooth extraction - Poor hygiene', description: 'Preventive extraction to protect adjacent teeth due to difficulty brushing. Natural tooth preservation philosophy' },
        jp: { title: '予防的親知らず抜歯 - 清掃不良', description: '現在痛くないが歯磨きが難しく隣接歯保護のため予防的抜歯。自然歯保存主義' },
        cn: { title: '预防性智齿拔除 - 清洁困难', description: '目前不痛但因难以清洁，预防性拔除保护邻牙。自然牙保存理念' }
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
