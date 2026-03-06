import { IntentAnalysis } from './types';

// 클라이언트 사이드에서 의도 분석 API 호출
export async function analyzeUserIntent(message: string): Promise<IntentAnalysis> {
  try {
    const response = await fetch('/api/analyze-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });

    if (!response.ok) {
      throw new Error('의도 분석 API 호출 실패');
    }

    const analysis = await response.json();
    return analysis as IntentAnalysis;
  } catch (error) {
    console.error('Intent analysis error:', error);
    
    // 에러 발생 시 기본값 반환
    return {
      categories: ['general'],
      recommendedTreatments: [],
      urgency: 'medium',
      stage: 'initial'
    };
  }
}

// 서버 사이드에서 의도 분석 (API 라우트 내에서 사용)
export async function analyzeIntentServerSide(message: string): Promise<IntentAnalysis> {
  // 간단한 키워드 기반 분석 (fallback)
  const analysis: IntentAnalysis = {
    categories: [],
    recommendedTreatments: [],
    urgency: 'medium',
    stage: 'initial'
  };

  const lowerMessage = message.toLowerCase();

  // 카테고리 분석 - 치과 관련
  
  // 임플란트 관련
  if (lowerMessage.includes('임플란트') || lowerMessage.includes('이빠진') || lowerMessage.includes('빠진') || lowerMessage.includes('빠지') || lowerMessage.includes('치아가 없') || lowerMessage.includes('빠진 치아') || lowerMessage.includes('상실') || lowerMessage.includes('없') || lowerMessage.includes('전체')) {
    analysis.categories.push('implant');
    analysis.categories.push('tooth_loss');
    
    // 전체 임플란트 관련
    if (lowerMessage.includes('전체') || lowerMessage.includes('모두') || lowerMessage.includes('다 빠') || lowerMessage.includes('전부')) {
      analysis.recommendedTreatments.push('all_on_x');
    }
  }

  // 충치/신경치료 관련
  if (lowerMessage.includes('충치') || lowerMessage.includes('썩은') || lowerMessage.includes('신경치료') || lowerMessage.includes('이가 아파') || lowerMessage.includes('아프') || lowerMessage.includes('아픔') || lowerMessage.includes('치통') || lowerMessage.includes('통증')) {
    analysis.categories.push('endodontics');
    if (lowerMessage.includes('신경')) {
      analysis.categories.push('root_canal');
    }
  }

  // 보철 관련
  if (lowerMessage.includes('크라운') || lowerMessage.includes('브릿지') || lowerMessage.includes('씌우') || lowerMessage.includes('덮어씌')) {
    analysis.categories.push('prosthetics');
    analysis.categories.push('crown');
  }

  // 사랑니/발치 관련
  if (lowerMessage.includes('사랑니') || lowerMessage.includes('발치') || lowerMessage.includes('뽑아')) {
    analysis.categories.push('extraction');
    if (lowerMessage.includes('사랑니')) {
      analysis.categories.push('wisdom_tooth');
    }
  }

  // 심미 치료 관련
  if (lowerMessage.includes('라미네이트') || lowerMessage.includes('앞니') || lowerMessage.includes('틈새') || lowerMessage.includes('벌어진') || lowerMessage.includes('심미')) {
    analysis.categories.push('cosmetic');
    analysis.categories.push('aesthetic');
  }

  // 치아미백 관련
  if (lowerMessage.includes('미백') || lowerMessage.includes('하얀') || lowerMessage.includes('변색') || lowerMessage.includes('누런') || lowerMessage.includes('착색')) {
    analysis.categories.push('whitening');
    analysis.categories.push('cosmetic');
  }

  // 턱관절 관련
  if (lowerMessage.includes('턱') || lowerMessage.includes('턱관절') || lowerMessage.includes('이갈이') || lowerMessage.includes('이악물') || lowerMessage.includes('개구장애')) {
    analysis.categories.push('tmj');
    analysis.categories.push('jaw');
  }

  // 예방/소아 치료 관련
  if (lowerMessage.includes('예방') || lowerMessage.includes('실란트') || lowerMessage.includes('홈메우기') || lowerMessage.includes('아이') || lowerMessage.includes('어린이') || lowerMessage.includes('소아')) {
    analysis.categories.push('prevention');
    analysis.categories.push('child');
  }

  // 잇몸 관련
  if (lowerMessage.includes('잇몸') || lowerMessage.includes('치주') || lowerMessage.includes('스케일링') || lowerMessage.includes('피가나')) {
    analysis.categories.push('periodontics');
  }

  // 교정 관련
  if (lowerMessage.includes('교정') || lowerMessage.includes('인비절라인') || lowerMessage.includes('투명교정') || lowerMessage.includes('치열') || lowerMessage.includes('덧니') || lowerMessage.includes('돌출')) {
    analysis.categories.push('orthodontics');
    if (lowerMessage.includes('투명') || lowerMessage.includes('인비절라인')) {
      analysis.categories.push('alignment');
    }
  }

  // 카테고리가 없으면 일반 상담
  if (analysis.categories.length === 0) {
    analysis.categories.push('general');
  }

  // 긴급도 분석
  if (lowerMessage.includes('빨리') || lowerMessage.includes('급하') || lowerMessage.includes('일정') || lowerMessage.includes('즉시') || lowerMessage.includes('바로')) {
    analysis.urgency = 'high';
  } else if (lowerMessage.includes('천천히') || lowerMessage.includes('알아보') || lowerMessage.includes('정보')) {
    analysis.urgency = 'low';
  }

  // 상담 단계 분석
  if (lowerMessage.includes('관심') || lowerMessage.includes('받고싶') || lowerMessage.includes('해보고싶') || lowerMessage.includes('궁금')) {
    analysis.stage = 'interested';
  } else if (lowerMessage.includes('예약') || lowerMessage.includes('언제') || lowerMessage.includes('일정') || lowerMessage.includes('방문')) {
    analysis.stage = 'ready_to_book';
  }

  return analysis;
}

// 의도 분석 결과 기반 추천 치료 결정
export function getRecommendedTreatments(analysis: IntentAnalysis): string[] {
  const { categories } = analysis;
  const recommendations: string[] = [];

  // 카테고리별 추천 치료
  if (categories.includes('implant') || categories.includes('tooth_loss')) {
    recommendations.push('digital_implant');
    if (categories.includes('tooth_loss') && !categories.includes('single')) {
      recommendations.push('all_on_x');
    }
  }

  if (categories.includes('endodontics') || categories.includes('root_canal')) {
    recommendations.push('nerve_treatment');
    recommendations.push('crown_bridge');
  }

  if (categories.includes('prosthetics') || categories.includes('crown')) {
    recommendations.push('crown_bridge');
  }

  if (categories.includes('extraction') || categories.includes('wisdom_tooth')) {
    recommendations.push('wisdom_tooth');
  }

  if (categories.includes('cosmetic') || categories.includes('aesthetic')) {
    recommendations.push('laminate');
    recommendations.push('resin');
  }

  if (categories.includes('whitening')) {
    recommendations.push('whitening');
  }

  if (categories.includes('tmj') || categories.includes('jaw')) {
    recommendations.push('tmj');
  }

  if (categories.includes('prevention') || categories.includes('child')) {
    recommendations.push('sealant');
  }

  if (categories.includes('orthodontics') || categories.includes('alignment')) {
    recommendations.push('clear_aligner');
  }

  // 일반 상담이거나 추천이 없으면 주요 치료 안내
  if (recommendations.length === 0 || categories.includes('general')) {
    return ['digital_implant', 'nerve_treatment', 'laminate', 'wisdom_tooth'];
  }

  return recommendations;
}

// 분석 결과를 로그로 출력 (개발/디버깅용)
export function logIntentAnalysis(message: string, analysis: IntentAnalysis) {
  if (process.env.NODE_ENV === 'development') {
    console.log('=== Intent Analysis ===');
    console.log('Message:', message);
    console.log('Analysis:', analysis);
    console.log('Recommended treatments:', getRecommendedTreatments(analysis));
    console.log('=======================');
  }
}