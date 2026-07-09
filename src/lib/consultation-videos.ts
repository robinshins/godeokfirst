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

/** 일반 임플란트 + 전체 임플란트(All-on-X) 모두 동일한 영상 세트를 노출한다. */
const IMPLANT_TREATMENT_IDS = ['implant', 'digital_implant', 'all_on_x'];

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

interface ImplantVideoParams {
  /** 최종적으로 확정된 추천 치료 목록 */
  treatments: string[];
  /** 상담 플로우 상 어느 지점에서 추천됐는지 (어드민 추적용) */
  stage: VideoRecommendation['stage'];
  /** 치료 목록이 어떤 경로로 정해졌는지 (어드민 추적용) */
  treatmentSource: VideoRecommendation['treatmentSource'];
  consultationTopic?: string | null;
}

/**
 * 임플란트 상담이면 Q&A 영상 + 환자 케이스 영상을 순서대로 반환한다.
 * 임플란트 상담이 아니면 null.
 */
export function getImplantVideos(params: ImplantVideoParams): {
  iframes: string[];
  recommendation: VideoRecommendation;
} | null {
  const { treatments, stage, treatmentSource, consultationTopic } = params;

  const matchedTreatments = treatments.filter(t => IMPLANT_TREATMENT_IDS.includes(t));
  if (matchedTreatments.length === 0) return null;

  const videos = [IMPLANT_QNA_VIDEO, IMPLANT_PATIENT_CASE_VIDEO];

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
