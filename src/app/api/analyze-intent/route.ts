import { NextRequest, NextResponse } from 'next/server';
import { openai } from '@/lib/openai';

const INTENT_ANALYSIS_PROMPT = `
당신은 고덕퍼스트치과의 치과 전문 상담 분석 AI입니다. 사용자 메시지를 분석하여 가장 적합한 치료를 추천하세요.

## 치료별 적응증 (상호 배타적 그룹)

### 그룹 A: 자연치아 보존 치료 (충치/신경/보철)
- **신경치료**: 심한 충치, 치통, 치수염, 찬물/뜨거운물 통증, 자연치아 살리기
- **크라운/브릿지**: 신경치료 후, 큰 충치, 치아 파절, 보철 치료
- **레진**: 작은 충치, 치아 깨짐, 심미 개선

### 그룹 B: 임플란트 (치아 상실/발치 후)
- **디지털 임플란트**: 치아 상실, 발치 후 공간, 틀니 불편감
- **전체 임플란트(All-on-4/6)**: 다수 치아 상실, 전악 무치악, 심한 치주염

### 그룹 C: 기타 치료
- **사랑니 발치**: 매복 사랑니, 사랑니 통증, 염증
- **라미네이트**: 앞니 심미, 치아 틈새, 변색
- **치아미백**: 변색, 누런 치아, 착색
- **턱관절 치료**: 턱 통증, 개구장애, 이갈이, 이악물기
- **실란트**: 어린이 충치 예방, 홈메우기
- **투명교정**: 치열 교정, 덧니, 돌출, 틈새
- **잇몸치료**: 잇몸 출혈, 잇몸 부음, 치주염

⚠️ **중요 규칙**:
- 충치/신경치료/보철 상담 → 그룹 A 치료만 추천 (임플란트 추천 금지)
- 임플란트 상담 → 그룹 B 치료만 추천
- 그룹 A와 그룹 B는 절대 섞지 마세요!

분석 기준:
1. **카테고리 (categories)**: 해당되는 카테고리 (1-2개만)
   - "implant": 임플란트 관련
   - "tooth_loss": 치아 상실
   - "endodontics": 신경/충치 치료
   - "root_canal": 신경치료
   - "prosthetics": 보철
   - "crown": 크라운
   - "extraction": 발치
   - "wisdom_tooth": 사랑니
   - "cosmetic": 심미치료
   - "aesthetic": 미용
   - "whitening": 미백
   - "tmj": 턱관절
   - "jaw": 턱 문제
   - "prevention": 예방
   - "child": 소아
   - "orthodontics": 교정
   - "alignment": 치열
   - "periodontics": 잇몸
   - "general": 일반 상담

2. **추천 치료 (recommendedTreatments)**: 증상에 가장 적합한 치료 1-2개
   - "digital_implant": 디지털 내비게이션 임플란트
   - "all_on_x": 전체 임플란트(All-on-4/6)
   - "nerve_treatment": 미세현미경 신경치료
   - "crown_bridge": 크라운/브릿지
   - "wisdom_tooth": 사랑니 발치
   - "laminate": 라미네이트
   - "resin": 레진
   - "whitening": 치아미백
   - "tmj": 턱관절 치료
   - "sealant": 실란트
   - "clear_aligner": 투명교정

3. **urgency**: "high", "medium", "low"
4. **stage**: "initial", "interested", "ready_to_book"

응답 형식:
{
  "categories": ["category1"],
  "recommendedTreatments": ["treatment1", "treatment2"],
  "urgency": "medium",
  "stage": "initial"
}
`;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { message, max_tokens } = body as {
      message: string;
      max_tokens?: number;
    };

    if (!message) {
      return NextResponse.json(
        { error: '분석할 메시지가 제공되지 않았습니다.' },
        { status: 400 }
      );
    }

    // GPT-5.2 사용 (Responses API)
    // JSON format 사용 시 input 메시지에 'json' 단어 포함 필요
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const result = await (openai as any).responses.create({
      model: 'gpt-5.2',
      instructions: INTENT_ANALYSIS_PROMPT,
      input: `다음 메시지를 분석해주세요: "${message}" (Please respond in JSON format)`,
      reasoning: {
        effort: 'none'
      },
      max_output_tokens: typeof max_tokens === 'number' ? max_tokens : 300,
      text: {
        format: {
          type: 'json_object'
        }
      }
    });

    const analysisResult = result.output?.[0]?.content?.[0]?.text;

    if (!analysisResult) {
      return NextResponse.json(
        { error: '의도 분석을 생성할 수 없습니다.' },
        { status: 500 }
      );
    }

    // JSON 파싱 시도
    try {
      const parsedResult = JSON.parse(analysisResult);
      // recommendedTreatments가 없으면 기본값 추가
      if (!parsedResult.recommendedTreatments) {
        parsedResult.recommendedTreatments = [];
      }
      return NextResponse.json(parsedResult);
    } catch (parseError) {
      // JSON 파싱 실패 시 기본값 반환
      console.error('Intent analysis JSON parse error:', parseError);
      return NextResponse.json({
        categories: ['general'],
        recommendedTreatments: [],
        urgency: 'medium',
        stage: 'initial'
      });
    }

  } catch (error) {
    console.error('Intent Analysis API Error:', error);
    
    // 에러 발생 시 기본 분석 결과 반환
    return NextResponse.json({
      categories: ['general'],
      recommendedTreatments: [],
      urgency: 'medium',
      stage: 'initial'
    });
  }
}