import type { RecommendedVideo, VideoRecommendation } from './types';

/**
 * 상담 종합 추천 단계에서 노출하는 영상 카탈로그.
 * iframe 문자열 포맷은 ChatInterface / admin 의 src 파싱 정규식과 맞춰야 한다.
 */
export const IMPLANT_QNA_VIDEO: RecommendedVideo = {
  id: 'XKH4Rw4OMvY',
  kind: 'qna',
  title: '임플란트 Q&A｜환자들이 가장 많이 묻는 질문에 대해서 전부 알려드릴게요',
};

export const IMPLANT_PATIENT_CASE_VIDEO: RecommendedVideo = {
  id: 'R-l2KLEv_ks',
  kind: 'patient_case',
  title: '실제 임플란트 치료 과정 공개｜환자 사례로 보는 치료 계획부터 수술까지',
};

export const GUM_WHITENING_CASE_VIDEO: RecommendedVideo = {
  id: 'OqtEFr6_bSA',
  kind: 'patient_case',
  title: '검게 변한 잇몸, 치료가 가능할까요? | 실제 환자 케이스 공개',
};

/** 일반 임플란트 + 전체 임플란트(All-on-X) 모두 동일한 영상 세트를 노출한다. */
const IMPLANT_TREATMENT_IDS = ['implant', 'digital_implant', 'all_on_x'];

/** 미백/잇몸치료 상담에는 검게 변한 잇몸 환자 케이스 영상을 노출한다. */
const GUM_WHITENING_TREATMENT_IDS = ['whitening', 'gum_care'];

export function toVideoIframe(video: RecommendedVideo): string {
  return `<iframe src="https://www.youtube.com/embed/${video.id}" allowfullscreen></iframe>`;
}

/** route.ts 의 3단계 우선순위(상담토픽 → AI 응답 추출 → intent 분석)를 라벨로 환산 */
export function resolveTreatmentSource(
  topicBasedTreatments: string[],
  extractedTreatments: string[]
): VideoRecommendation['treatmentSource'] {
  if (topicBasedTreatments.length > 0) return 'consultation_topic';
  if (extractedTreatments.length > 0) return 'ai_response';
  return 'intent_analysis';
}

interface ConsultationVideoParams {
  /** 최종적으로 확정된 추천 치료 목록 */
  treatments: string[];
  /** 상담 플로우 상 어느 지점에서 추천됐는지 (어드민 추적용) */
  stage: VideoRecommendation['stage'];
  /** 치료 목록이 어떤 경로로 정해졌는지 (어드민 추적용) */
  treatmentSource: VideoRecommendation['treatmentSource'];
  consultationTopic?: string | null;
}

/**
 * 추천 치료 목록에 맞는 상담 영상 세트를 반환한다.
 * - 임플란트 상담: Q&A 영상 + 환자 케이스 영상
 * - 미백/잇몸치료 상담: 검게 변한 잇몸 환자 케이스 영상
 * 매칭되는 치료가 없으면 null.
 */
export function getConsultationVideos(params: ConsultationVideoParams): {
  iframes: string[];
  recommendation: VideoRecommendation;
} | null {
  const { treatments, stage, treatmentSource, consultationTopic } = params;

  let matchedTreatments = treatments.filter(t => IMPLANT_TREATMENT_IDS.includes(t));
  let videos: RecommendedVideo[] = [IMPLANT_QNA_VIDEO, IMPLANT_PATIENT_CASE_VIDEO];

  if (matchedTreatments.length === 0) {
    matchedTreatments = treatments.filter(t => GUM_WHITENING_TREATMENT_IDS.includes(t));
    videos = [GUM_WHITENING_CASE_VIDEO];
  }

  if (matchedTreatments.length === 0) return null;

  return {
    iframes: videos.map(toVideoIframe),
    recommendation: {
      stage,
      treatmentSource,
      matchedTreatments,
      allTreatments: treatments,
      consultationTopic: consultationTopic || null,
      videos,
    },
  };
}
