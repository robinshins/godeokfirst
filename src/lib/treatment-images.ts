// 치료별 실제 케이스 이미지 매핑
// 이미지 경로: /public/임상사진/, /public/cases/ (고덕퍼스트 실제 사례만)
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
      beforeImage: '/임상사진/충치/충치_before.jpg',
      afterImage: '/임상사진/충치/충치_after.jpg',
      title: '충치 치료',
      description: '어금니 충치 제거 후 수복',
      translations: {
        en: { title: 'Cavity treatment', description: 'Molar cavity removal and restoration' },
        jp: { title: '虫歯治療', description: '奥歯の虫歯除去後修復' },
        cn: { title: '龋齿治疗', description: '磨牙龋齿去除后修复' }
      }
    },
    {
      beforeImage: '/임상사진/충치-1/충치_before.jpg',
      afterImage: '/임상사진/충치-1/충치_after.jpg',
      title: '다수 충치 치료',
      description: '다수 충치 제거 후 수복 완료',
      translations: {
        en: { title: 'Multiple cavity treatment', description: 'Multiple cavities removed and restoration completed' },
        jp: { title: '多数虫歯治療', description: '多数の虫歯除去後修復完了' },
        cn: { title: '多颗龋齿治疗', description: '多颗龋齿去除后修复完成' }
      }
    },
    {
      beforeImage: '/임상사진/크랙/크랙_실사_before.jpg',
      afterImage: '/임상사진/크랙/크랙_실사_after.jpg',
      title: '크랙 치료',
      description: '치아 균열 후 크라운 수복',
      translations: {
        en: { title: 'Crack treatment', description: 'Tooth crack and crown restoration' },
        jp: { title: 'クラック治療', description: '歯のひび割れ後クラウン修復' },
        cn: { title: '裂纹治疗', description: '牙齿裂纹后牙冠修复' }
      }
    },
    {
      beforeImage: '/임상사진/앞니보철-2/앞니보철_실제사진_before.jpg',
      afterImage: '/임상사진/앞니보철-2/앞니보철_실제사진_after.jpg',
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
      beforeImage: '/임상사진/앞니보철-1/앞니심미보철크라운_before.jpg',
      afterImage: '/임상사진/앞니보철-1/앞니심미보철크라운_after.jpg',
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
      beforeImage: '/임상사진/충치/충치_before.jpg',
      afterImage: '/임상사진/충치/충치_after.jpg',
      title: '충치 치료',
      description: '어금니 충치 제거 후 수복',
      translations: {
        en: { title: 'Cavity treatment', description: 'Molar cavity removal and restoration' },
        jp: { title: '虫歯治療', description: '奥歯の虫歯除去後修復' },
        cn: { title: '龋齿治疗', description: '磨牙龋齿去除后修复' }
      }
    },
    {
      beforeImage: '/임상사진/충치-1/충치_before.jpg',
      afterImage: '/임상사진/충치-1/충치_after.jpg',
      title: '다수 충치 치료',
      description: '다수 충치 제거 후 수복 완료',
      translations: {
        en: { title: 'Multiple cavity treatment', description: 'Multiple cavities removed and restoration completed' },
        jp: { title: '多数虫歯治療', description: '多数の虫歯除去後修復完了' },
        cn: { title: '多颗龋齿治疗', description: '多颗龋齿去除后修复完成' }
      }
    },
    {
      beforeImage: '/임상사진/크랙/크랙_실사_before.jpg',
      afterImage: '/임상사진/크랙/크랙_실사_after.jpg',
      title: '크랙 치료',
      description: '치아 균열 후 크라운 수복',
      translations: {
        en: { title: 'Crack treatment', description: 'Tooth crack and crown restoration' },
        jp: { title: 'クラック治療', description: '歯のひび割れ後クラウン修復' },
        cn: { title: '裂纹治疗', description: '牙齿裂纹后牙冠修复' }
      }
    },
    {
      beforeImage: '/임상사진/앞니보철-2/앞니보철_실제사진_before.jpg',
      afterImage: '/임상사진/앞니보철-2/앞니보철_실제사진_after.jpg',
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
      beforeImage: '/임상사진/앞니보철-1/앞니심미보철크라운_before.jpg',
      afterImage: '/임상사진/앞니보철-1/앞니심미보철크라운_after.jpg',
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
      beforeImage: '/임상사진/충치/충치_before.jpg',
      afterImage: '/임상사진/충치/충치_after.jpg',
      title: '충치 치료',
      description: '어금니 충치 제거 후 수복',
      translations: {
        en: { title: 'Cavity treatment', description: 'Molar cavity removal and restoration' },
        jp: { title: '虫歯治療', description: '奥歯の虫歯除去後修復' },
        cn: { title: '龋齿治疗', description: '磨牙龋齿去除后修复' }
      }
    },
    {
      beforeImage: '/임상사진/충치-1/충치_before.jpg',
      afterImage: '/임상사진/충치-1/충치_after.jpg',
      title: '다수 충치 치료',
      description: '다수 충치 제거 후 수복 완료',
      translations: {
        en: { title: 'Multiple cavity treatment', description: 'Multiple cavities removed and restoration completed' },
        jp: { title: '多数虫歯治療', description: '多数の虫歯除去後修復完了' },
        cn: { title: '多颗龋齿治疗', description: '多颗龋齿去除后修复完成' }
      }
    },
    {
      beforeImage: '/임상사진/크랙/크랙_실사_before.jpg',
      afterImage: '/임상사진/크랙/크랙_실사_after.jpg',
      title: '크랙 치료',
      description: '치아 균열 후 크라운 수복',
      translations: {
        en: { title: 'Crack treatment', description: 'Tooth crack and crown restoration' },
        jp: { title: 'クラック治療', description: '歯のひび割れ後クラウン修復' },
        cn: { title: '裂纹治疗', description: '牙齿裂纹后牙冠修复' }
      }
    },
    {
      beforeImage: '/임상사진/앞니보철-2/앞니보철_실제사진_before.jpg',
      afterImage: '/임상사진/앞니보철-2/앞니보철_실제사진_after.jpg',
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
      beforeImage: '/임상사진/앞니보철-1/앞니심미보철크라운_before.jpg',
      afterImage: '/임상사진/앞니보철-1/앞니심미보철크라운_after.jpg',
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
      beforeImage: '/임상사진/충치/충치_before.jpg',
      afterImage: '/임상사진/충치/충치_after.jpg',
      title: '충치 치료',
      description: '어금니 충치 제거 후 수복',
      translations: {
        en: { title: 'Cavity treatment', description: 'Molar cavity removal and restoration' },
        jp: { title: '虫歯治療', description: '奥歯の虫歯除去後修復' },
        cn: { title: '龋齿治疗', description: '磨牙龋齿去除后修复' }
      }
    },
    {
      beforeImage: '/임상사진/충치-1/충치_before.jpg',
      afterImage: '/임상사진/충치-1/충치_after.jpg',
      title: '다수 충치 치료',
      description: '다수 충치 제거 후 수복 완료',
      translations: {
        en: { title: 'Multiple cavity treatment', description: 'Multiple cavities removed and restoration completed' },
        jp: { title: '多数虫歯治療', description: '多数の虫歯除去後修復完了' },
        cn: { title: '多颗龋齿治疗', description: '多颗龋齿去除后修复完成' }
      }
    },
    {
      beforeImage: '/임상사진/크랙/크랙_실사_before.jpg',
      afterImage: '/임상사진/크랙/크랙_실사_after.jpg',
      title: '크랙 치료',
      description: '치아 균열 후 크라운 수복',
      translations: {
        en: { title: 'Crack treatment', description: 'Tooth crack and crown restoration' },
        jp: { title: 'クラック治療', description: '歯のひび割れ後クラウン修復' },
        cn: { title: '裂纹治疗', description: '牙齿裂纹后牙冠修复' }
      }
    },
    {
      beforeImage: '/임상사진/앞니보철-2/앞니보철_실제사진_before.jpg',
      afterImage: '/임상사진/앞니보철-2/앞니보철_실제사진_after.jpg',
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
      beforeImage: '/임상사진/앞니보철-1/앞니심미보철크라운_before.jpg',
      afterImage: '/임상사진/앞니보철-1/앞니심미보철크라운_after.jpg',
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
      beforeImage: '/임상사진/충치/충치_before.jpg',
      afterImage: '/임상사진/충치/충치_after.jpg',
      title: '충치 치료',
      description: '어금니 충치 제거 후 수복',
      translations: {
        en: { title: 'Cavity treatment', description: 'Molar cavity removal and restoration' },
        jp: { title: '虫歯治療', description: '奥歯の虫歯除去後修復' },
        cn: { title: '龋齿治疗', description: '磨牙龋齿去除后修复' }
      }
    },
    {
      beforeImage: '/임상사진/충치-1/충치_before.jpg',
      afterImage: '/임상사진/충치-1/충치_after.jpg',
      title: '다수 충치 치료',
      description: '다수 충치 제거 후 수복 완료',
      translations: {
        en: { title: 'Multiple cavity treatment', description: 'Multiple cavities removed and restoration completed' },
        jp: { title: '多数虫歯治療', description: '多数の虫歯除去後修復完了' },
        cn: { title: '多颗龋齿治疗', description: '多颗龋齿去除后修复完成' }
      }
    },
    {
      beforeImage: '/임상사진/크랙/크랙_실사_before.jpg',
      afterImage: '/임상사진/크랙/크랙_실사_after.jpg',
      title: '크랙 치료',
      description: '치아 균열 후 크라운 수복',
      translations: {
        en: { title: 'Crack treatment', description: 'Tooth crack and crown restoration' },
        jp: { title: 'クラック治療', description: '歯のひび割れ後クラウン修復' },
        cn: { title: '裂纹治疗', description: '牙齿裂纹后牙冠修复' }
      }
    },
    {
      beforeImage: '/임상사진/앞니보철-2/앞니보철_실제사진_before.jpg',
      afterImage: '/임상사진/앞니보철-2/앞니보철_실제사진_after.jpg',
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
      beforeImage: '/임상사진/앞니보철-1/앞니심미보철크라운_before.jpg',
      afterImage: '/임상사진/앞니보철-1/앞니심미보철크라운_after.jpg',
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
      beforeImage: '/임상사진/충치/충치_before.jpg',
      afterImage: '/임상사진/충치/충치_after.jpg',
      title: '충치 치료',
      description: '어금니 충치 제거 후 수복',
      translations: {
        en: { title: 'Cavity treatment', description: 'Molar cavity removal and restoration' },
        jp: { title: '虫歯治療', description: '奥歯の虫歯除去後修復' },
        cn: { title: '龋齿治疗', description: '磨牙龋齿去除后修复' }
      }
    },
    {
      beforeImage: '/임상사진/충치-1/충치_before.jpg',
      afterImage: '/임상사진/충치-1/충치_after.jpg',
      title: '다수 충치 치료',
      description: '다수 충치 제거 후 수복 완료',
      translations: {
        en: { title: 'Multiple cavity treatment', description: 'Multiple cavities removed and restoration completed' },
        jp: { title: '多数虫歯治療', description: '多数の虫歯除去後修復完了' },
        cn: { title: '多颗龋齿治疗', description: '多颗龋齿去除后修复完成' }
      }
    },
    {
      beforeImage: '/임상사진/크랙/크랙_실사_before.jpg',
      afterImage: '/임상사진/크랙/크랙_실사_after.jpg',
      title: '크랙 치료',
      description: '치아 균열 후 크라운 수복',
      translations: {
        en: { title: 'Crack treatment', description: 'Tooth crack and crown restoration' },
        jp: { title: 'クラック治療', description: '歯のひび割れ後クラウン修復' },
        cn: { title: '裂纹治疗', description: '牙齿裂纹后牙冠修复' }
      }
    },
    {
      beforeImage: '/임상사진/앞니보철-2/앞니보철_실제사진_before.jpg',
      afterImage: '/임상사진/앞니보철-2/앞니보철_실제사진_after.jpg',
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
  ],

  // 일반 임플란트 케이스 - 실제 임상사진
  implant: [
    {
      beforeImage: '/임상사진/임플란트-1/어금니임플란트_엑스레이_before.jpg',
      afterImage: '/임상사진/임플란트-1/어금니임플란트_엑스레이_after.jpg',
      title: '어금니 임플란트 (엑스레이)',
      description: '어금니 다수 임플란트 식립 전후 엑스레이 비교',
      translations: {
        en: { title: 'Molar implant (X-ray)', description: 'Before and after X-ray comparison of multiple molar implant placement' },
        jp: { title: '奥歯インプラント（レントゲン）', description: '奥歯多数インプラント埋入前後のレントゲン比較' },
        cn: { title: '磨牙种植体（X光）', description: '磨牙多颗种植体植入前后X光对比' }
      }
    },
    {
      beforeImage: '/임상사진/임플란트-1/어금니임플란트_실제사진_before.jpg',
      afterImage: '/임상사진/임플란트-1/어금니임플란트_실제사진_after.jpg',
      title: '어금니 임플란트 (실제사진)',
      description: '어금니 임플란트 보철 장착 전후 비교',
      translations: {
        en: { title: 'Molar implant (clinical photo)', description: 'Before and after molar implant prosthetic placement' },
        jp: { title: '奥歯インプラント（実際写真）', description: '奥歯インプラント補綴装着前後の比較' },
        cn: { title: '磨牙种植体（实拍照片）', description: '磨牙种植体修复体安装前后对比' }
      }
    },
    {
      beforeImage: '/임상사진/임플란트-2/임플란트_실사_before.jpg',
      afterImage: '/임상사진/임플란트-2/20251028_110155.jpg',
      title: '임플란트 수술전후 사진',
      description: '임플란트 치료 전후 실제 사진 비교',
      translations: {
        en: { title: 'Implant clinical photo', description: 'Before and after real photo comparison of implant treatment' },
        jp: { title: 'インプラント実写前後', description: 'インプラント治療前後の実際写真比較' },
        cn: { title: '种植牙实拍前后', description: '种植牙治疗前后实拍对比' }
      }
    }
  ],

  // 디지털 임플란트 - 실제 임상사진
  digital_implant: [
    {
      beforeImage: '/임상사진/임플란트-1/어금니임플란트_엑스레이_before.jpg',
      afterImage: '/임상사진/임플란트-1/어금니임플란트_엑스레이_after.jpg',
      title: '어금니 임플란트 (엑스레이)',
      description: '어금니 다수 임플란트 식립 전후 엑스레이 비교',
      translations: {
        en: { title: 'Molar implant (X-ray)', description: 'Before and after X-ray comparison of multiple molar implant placement' },
        jp: { title: '奥歯インプラント（レントゲン）', description: '奥歯多数インプラント埋入前後のレントゲン比較' },
        cn: { title: '磨牙种植体（X光）', description: '磨牙多颗种植体植入前后X光对比' }
      }
    },
    {
      beforeImage: '/임상사진/임플란트-1/어금니임플란트_실제사진_before.jpg',
      afterImage: '/임상사진/임플란트-1/어금니임플란트_실제사진_after.jpg',
      title: '어금니 임플란트 (실제사진)',
      description: '어금니 임플란트 보철 장착 전후 비교',
      translations: {
        en: { title: 'Molar implant (clinical photo)', description: 'Before and after molar implant prosthetic placement' },
        jp: { title: '奥歯インプラント（実際写真）', description: '奥歯インプラント補綴装着前後の比較' },
        cn: { title: '磨牙种植体（实拍照片）', description: '磨牙种植体修复体安装前后对比' }
      }
    },
    {
      beforeImage: '/임상사진/임플란트-2/임플란트_실사_before.jpg',
      afterImage: '/임상사진/임플란트-2/20251028_110155.jpg',
      title: '임플란트 수술전후 사진',
      description: '임플란트 치료 전후 실제 사진 비교',
      translations: {
        en: { title: 'Implant clinical photo', description: 'Before and after real photo comparison of implant treatment' },
        jp: { title: 'インプラント実写前後', description: 'インプラント治療前後の実際写真比較' },
        cn: { title: '种植牙实拍前后', description: '种植牙治疗前后实拍对比' }
      }
    }
  ],

  // 디지털전체임플란트(All on X) - 윗니/아랫니 한쪽 전체 - 실제 임상사진
  implant_upper_lower_one_side: [
    {
      beforeImage: '/임상사진/전체임플란트-1/전체임플란트_엑스레이_before.jpg',
      afterImage: '/임상사진/전체임플란트-1/전체임플란트_엑스레이_after.jpg',
      title: '전체 임플란트 (엑스레이)',
      description: '전악 임플란트 식립 전후 엑스레이 비교',
      translations: {
        en: { title: 'Full mouth implant (X-ray)', description: 'Before and after X-ray comparison of full mouth implant placement' },
        jp: { title: '全顎インプラント（レントゲン）', description: '全顎インプラント埋入前後のレントゲン比較' },
        cn: { title: '全口种植（X光）', description: '全口种植体植入前后X光对比' }
      }
    },
    {
      beforeImage: '/임상사진/전체임플란트-1/전체임플란트_실제사진_before.jpg',
      afterImage: '/임상사진/전체임플란트-1/전체임플란트_실제사진_after.jpg',
      title: '전체 임플란트 (실제사진)',
      description: '전악 임플란트 보철 장착 전후 비교',
      translations: {
        en: { title: 'Full mouth implant (clinical photo)', description: 'Before and after full mouth implant prosthetic placement' },
        jp: { title: '全顎インプラント（実際写真）', description: '全顎インプラント補綴装着前後の比較' },
        cn: { title: '全口种植（实拍照片）', description: '全口种植修复体安装前后对比' }
      }
    },
    {
      beforeImage: '/임상사진/임플란트-2/임플란트_실사_before.jpg',
      afterImage: '/임상사진/임플란트-2/20251028_110155.jpg',
      title: '임플란트 수술전후 사진',
      description: '임플란트 치료 전후 실제 사진 비교',
      translations: {
        en: { title: 'Implant clinical photo', description: 'Before and after real photo comparison of implant treatment' },
        jp: { title: 'インプラント実写前後', description: 'インプラント治療前後の実際写真比較' },
        cn: { title: '种植牙实拍前后', description: '种植牙治疗前后实拍对比' }
      }
    }
  ],

  // 디지털전체임플란트(All on X) - 모든 치아 - 실제 임상사진
  implant_all_teeth: [
    {
      beforeImage: '/임상사진/전체임플란트-1/전체임플란트_엑스레이_before.jpg',
      afterImage: '/임상사진/전체임플란트-1/전체임플란트_엑스레이_after.jpg',
      title: '전체 임플란트 (엑스레이)',
      description: '전악 임플란트 식립 전후 엑스레이 비교',
      translations: {
        en: { title: 'Full mouth implant (X-ray)', description: 'Before and after X-ray comparison of full mouth implant placement' },
        jp: { title: '全顎インプラント（レントゲン）', description: '全顎インプラント埋入前後のレントゲン比較' },
        cn: { title: '全口种植（X光）', description: '全口种植体植入前后X光对比' }
      }
    },
    {
      beforeImage: '/임상사진/전체임플란트-1/전체임플란트_실제사진_before.jpg',
      afterImage: '/임상사진/전체임플란트-1/전체임플란트_실제사진_after.jpg',
      title: '전체 임플란트 (실제사진)',
      description: '전악 임플란트 보철 장착 전후 비교',
      translations: {
        en: { title: 'Full mouth implant (clinical photo)', description: 'Before and after full mouth implant prosthetic placement' },
        jp: { title: '全顎インプラント（実際写真）', description: '全顎インプラント補綴装着前後の比較' },
        cn: { title: '全口种植（实拍照片）', description: '全口种植修复体安装前后对比' }
      }
    },
    {
      beforeImage: '/임상사진/임플란트-2/임플란트_실사_before.jpg',
      afterImage: '/임상사진/임플란트-2/20251028_110155.jpg',
      title: '임플란트 수술전후 사진',
      description: '임플란트 치료 전후 실제 사진 비교',
      translations: {
        en: { title: 'Implant clinical photo', description: 'Before and after real photo comparison of implant treatment' },
        jp: { title: 'インプラント実写前後', description: 'インプラント治療前後の実際写真比較' },
        cn: { title: '种植牙实拍前后', description: '种植牙治疗前后实拍对比' }
      }
    }
  ],

  // 앞니 다수 임플란트 - 실제 임상사진
  implant_front_multiple: [
    {
      beforeImage: '/임상사진/임플란트-1/어금니임플란트_엑스레이_before.jpg',
      afterImage: '/임상사진/임플란트-1/어금니임플란트_엑스레이_after.jpg',
      title: '어금니 임플란트 (엑스레이)',
      description: '어금니 다수 임플란트 식립 전후 엑스레이 비교',
      translations: {
        en: { title: 'Molar implant (X-ray)', description: 'Before and after X-ray comparison of multiple molar implant placement' },
        jp: { title: '奥歯インプラント（レントゲン）', description: '奥歯多数インプラント埋入前後のレントゲン比較' },
        cn: { title: '磨牙种植体（X光）', description: '磨牙多颗种植体植入前后X光对比' }
      }
    },
    {
      beforeImage: '/임상사진/임플란트-1/어금니임플란트_실제사진_before.jpg',
      afterImage: '/임상사진/임플란트-1/어금니임플란트_실제사진_after.jpg',
      title: '어금니 임플란트 (실제사진)',
      description: '어금니 임플란트 보철 장착 전후 비교',
      translations: {
        en: { title: 'Molar implant (clinical photo)', description: 'Before and after molar implant prosthetic placement' },
        jp: { title: '奥歯インプラント（実際写真）', description: '奥歯インプラント補綴装着前後の比較' },
        cn: { title: '磨牙种植体（实拍照片）', description: '磨牙种植体修复体安装前后对比' }
      }
    },
    {
      beforeImage: '/임상사진/임플란트-2/임플란트_실사_before.jpg',
      afterImage: '/임상사진/임플란트-2/20251028_110155.jpg',
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
      beforeImage: '/임상사진/임플란트-1/어금니임플란트_엑스레이_before.jpg',
      afterImage: '/임상사진/임플란트-1/어금니임플란트_엑스레이_after.jpg',
      title: '어금니 임플란트 (엑스레이)',
      description: '어금니 다수 임플란트 식립 전후 엑스레이 비교',
      translations: {
        en: { title: 'Molar implant (X-ray)', description: 'Before and after X-ray comparison of multiple molar implant placement' },
        jp: { title: '奥歯インプラント（レントゲン）', description: '奥歯多数インプラント埋入前後のレントゲン比較' },
        cn: { title: '磨牙种植体（X光）', description: '磨牙多颗种植体植入前后X光对比' }
      }
    },
    {
      beforeImage: '/임상사진/임플란트-1/어금니임플란트_실제사진_before.jpg',
      afterImage: '/임상사진/임플란트-1/어금니임플란트_실제사진_after.jpg',
      title: '어금니 임플란트 (실제사진)',
      description: '어금니 임플란트 보철 장착 전후 비교',
      translations: {
        en: { title: 'Molar implant (clinical photo)', description: 'Before and after molar implant prosthetic placement' },
        jp: { title: '奥歯インプラント（実際写真）', description: '奥歯インプラント補綴装着前後の比較' },
        cn: { title: '磨牙种植体（实拍照片）', description: '磨牙种植体修复体安装前后对比' }
      }
    },
    {
      beforeImage: '/임상사진/임플란트-2/임플란트_실사_before.jpg',
      afterImage: '/임상사진/임플란트-2/20251028_110155.jpg',
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
      beforeImage: '/임상사진/임플란트-1/어금니임플란트_엑스레이_before.jpg',
      afterImage: '/임상사진/임플란트-1/어금니임플란트_엑스레이_after.jpg',
      title: '어금니 임플란트 (엑스레이)',
      description: '어금니 다수 임플란트 식립 전후 엑스레이 비교',
      translations: {
        en: { title: 'Molar implant (X-ray)', description: 'Before and after X-ray comparison of multiple molar implant placement' },
        jp: { title: '奥歯インプラント（レントゲン）', description: '奥歯多数インプラント埋入前後のレントゲン比較' },
        cn: { title: '磨牙种植体（X光）', description: '磨牙多颗种植体植入前后X光对比' }
      }
    },
    {
      beforeImage: '/임상사진/임플란트-1/어금니임플란트_실제사진_before.jpg',
      afterImage: '/임상사진/임플란트-1/어금니임플란트_실제사진_after.jpg',
      title: '어금니 임플란트 (실제사진)',
      description: '어금니 임플란트 보철 장착 전후 비교',
      translations: {
        en: { title: 'Molar implant (clinical photo)', description: 'Before and after molar implant prosthetic placement' },
        jp: { title: '奥歯インプラント（実際写真）', description: '奥歯インプラント補綴装着前後の比較' },
        cn: { title: '磨牙种植体（实拍照片）', description: '磨牙种植体修复体安装前后对比' }
      }
    },
    {
      beforeImage: '/임상사진/임플란트-2/임플란트_실사_before.jpg',
      afterImage: '/임상사진/임플란트-2/20251028_110155.jpg',
      title: '임플란트 (실제사진)',
      description: '임플란트 식립 및 보철 전후 비교',
      translations: {
        en: { title: 'Implant (clinical photo)', description: 'Before and after implant placement and prosthetic' },
        jp: { title: 'インプラント（実際写真）', description: 'インプラント埋入および補綴前後の比較' },
        cn: { title: '种植体（实拍照片）', description: '种植体植入及修复前后对比' }
      }
    },
    {
      beforeImage: '/임상사진/앞니 재보철/앞니재보철_실사_before.jpg',
      afterImage: '/임상사진/앞니 재보철/앞니재보철_실사_after.jpg',
      title: '앞니 재보철 (실제사진)',
      description: '기존 앞니 보철물 재치료 전후 실제 사진 비교',
      translations: {
        en: { title: 'Front tooth re-prosthesis (clinical photo)', description: 'Before and after re-treatment of existing front tooth prosthesis' },
        jp: { title: '前歯再補綴（実際写真）', description: '既存の前歯補綴物の再治療前後の実際写真比較' },
        cn: { title: '前牙再修复（实拍照片）', description: '现有前牙修复体再治疗前后实拍对比' }
      }
    }
  ],

  // 전체 임플란트 케이스 (All on X) - 실제 임상사진
  all_on_x: [
    {
      beforeImage: '/임상사진/전체임플란트-1/전체임플란트_엑스레이_before.jpg',
      afterImage: '/임상사진/전체임플란트-1/전체임플란트_엑스레이_after.jpg',
      title: '전체 임플란트 (엑스레이)',
      description: '전악 임플란트 식립 전후 엑스레이 비교',
      translations: {
        en: { title: 'Full mouth implant (X-ray)', description: 'Before and after X-ray comparison of full mouth implant placement' },
        jp: { title: '全顎インプラント（レントゲン）', description: '全顎インプラント埋入前後のレントゲン比較' },
        cn: { title: '全口种植（X光）', description: '全口种植体植入前后X光对比' }
      }
    },
    {
      beforeImage: '/임상사진/전체임플란트-1/전체임플란트_실제사진_before.jpg',
      afterImage: '/임상사진/전체임플란트-1/전체임플란트_실제사진_after.jpg',
      title: '전체 임플란트 (실제사진)',
      description: '전악 임플란트 보철 장착 전후 비교',
      translations: {
        en: { title: 'Full mouth implant (clinical photo)', description: 'Before and after full mouth implant prosthetic placement' },
        jp: { title: '全顎インプラント（実際写真）', description: '全顎インプラント補綴装着前後の比較' },
        cn: { title: '全口种植（实拍照片）', description: '全口种植修复体安装前后对比' }
      }
    },
    {
      beforeImage: '/임상사진/임플란트-2/임플란트_실사_before.jpg',
      afterImage: '/임상사진/임플란트-2/20251028_110155.jpg',
      title: '임플란트 수술전후 사진',
      description: '임플란트 치료 전후 실제 사진 비교',
      translations: {
        en: { title: 'Implant clinical photo', description: 'Before and after real photo comparison of implant treatment' },
        jp: { title: 'インプラント実写前後', description: 'インプラント治療前後の実際写真比較' },
        cn: { title: '种植牙实拍前后', description: '种植牙治疗前后实拍对比' }
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
  ],

  // 미백 케이스 (2개)
  whitening: [
  ],

  // 라미네이트 케이스 (2개)
  laminate: [
  ],

  // 심미 상담 전용 - 미백 케이스 (8개)
  cosmetic_whitening: [
  ],

  // 심미 상담 전용 - 라미네이트 무료진단 케이스 (3단계)
  laminate_free_diagnosis: [
  ],

  // 심미 상담 전용 - 파샬(부분) 라미네이트
  laminate_partial: [
  ],

  // 심미 상담 전용 - 무삭제 라미네이트
  laminate_noprep: [
  ],

  // 심미 상담 전용 - 최소삭제 라미네이트
  laminate_minimalprep: [
  ],

  // 크라운/브릿지 - 답안1(신경치료 후 보철) 이미지 사용
  crown_bridge: [
  ],

  // 레진 치료 - 라미네이트 케이스 사용
  resin: [
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
