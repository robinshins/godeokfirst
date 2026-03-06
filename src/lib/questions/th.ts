import { LanguageQuestionTree } from './types';
export const QUESTION_TREE_TH: LanguageQuestionTree = {
  // ขั้นตอนที่ 1: ระบุอาการเบื้องต้น
  initial: {
    question: "คุณมีอาการหรือความไม่สบายอะไรบ้าง?",
    options: [
      { id: "pain", text: "มีอาการปวด" },
      { id: "aesthetic", text: "ต้องการปรับปรุงความสวยงาม" },
      { id: "missing_tooth", text: "ฟันหลุด" },
      { id: "gum_issue", text: "มีปัญหาเหงือก" },
      { id: "checkup", text: "ตรวจสุขภาพและป้องกันเป็นประจำ" }
    ]
  },

  // คำถามเกี่ยวกับฟันผุ/รักษารากฟัน (คำถามแรก)
  cavity_nerve: {
    question: "สถานการณ์ที่ไม่สบายตอนนี้คืออะไร?",
    options: [
      { id: "cavity_pain", text: "ปวดฟัน" },
      { id: "cavity_sensitive", text: "ฟันเสียวซ่า" },
      { id: "cavity_broken", text: "ฟันแตก" },
      { id: "cavity_eating", text: "ไม่สบายเวลารับประทานอาหาร" },
      { id: "cavity_dark", text: "ฟันดูดำ" },
      { id: "cavity_brushing", text: "ไม่สบายเวลาแปรงฟัน" }
    ],
    next: {
      cavity_pain: {
        question: "ไม่สบายที่ฟันซี่เดียวหรือบริเวณกว้าง?",
        options: [
          { id: "specific_tooth", text: "ไม่สบายที่ฟันซี่เดียว" },
          { id: "wide_area", text: "ไม่สบายบริเวณกว้าง ซ้าย/ขวา บน/ล่าง" }
        ]
      },
      cavity_sensitive: {
        question: "ไม่สบายที่ฟันซี่เดียวหรือบริเวณกว้าง?",
        options: [
          { id: "specific_tooth", text: "ไม่สบายที่ฟันซี่เดียว" },
          { id: "wide_area", text: "ไม่สบายบริเวณกว้าง ซ้าย/ขวา บน/ล่าง" }
        ]
      },
      cavity_broken: {
        question: "ฟันที่แตกเจ็บหรือไม่?",
        options: [
          { id: "broken_painful", text: "ใช่ แตกและเจ็บ" },
          { id: "broken_not_painful", text: "แตกแต่ไม่เจ็บ" }
        ]
      },
      cavity_eating: {
        question: "ไม่สบายที่ฟันซี่เดียวหรือบริเวณกว้าง?",
        options: [
          { id: "specific_tooth", text: "ไม่สบายที่ฟันซี่เดียว" },
          { id: "wide_area", text: "ไม่สบายบริเวณกว้าง ซ้าย/ขวา บน/ล่าง" }
        ]
      },
      cavity_dark: {
        question: "ฟันที่ดูดำอยู่ที่ไหน?",
        options: [
          { id: "dark_front", text: "บริเวณฟันหน้า" },
          { id: "dark_back", text: "บริเวณฟันกราม" },
          { id: "dark_multiple", text: "ดูดำหลายที่" }
        ]
      },
      cavity_brushing: {
        question: "ไม่สบายที่ฟันซี่เดียวหรือบริเวณกว้าง?",
        options: [
          { id: "specific_tooth", text: "ไม่สบายที่ฟันซี่เดียว" },
          { id: "wide_area", text: "ไม่สบายบริเวณกว้าง ซ้าย/ขวา บน/ล่าง" }
        ]
      }
    }
  },

  // คำถามเกี่ยวกับอาการปวด (ทั่วไป)
  pain: {
    question: "คุณรู้สึกปวดในสถานการณ์ใด?",
    options: [
      { id: "pain_cold_hot", text: "เมื่อสัมผัสของเย็นหรือร้อน" },
      { id: "pain_chewing", text: "เมื่อเคี้ยวอาหาร" },
      { id: "pain_always", text: "ปวดตลอดแม้อยู่เฉยๆ" },
      { id: "pain_wisdom", text: "ปวดบริเวณฟันคุด" }
    ],
    next: {
      pain_cold_hot: {
        question: "อาการปวดเป็นนานเท่าไหร่?",
        options: [
          { id: "pain_short", text: "เสียวแป๊บเดียวแล้วหายไป" },
          { id: "pain_long", text: "เมื่อเสียวแล้วจะเป็นนาน" },
          { id: "pain_getting_worse", text: "แย่ลงเรื่อยๆ" }
        ]
      },
      pain_chewing: {
        question: "บริเวณไหนที่ปวด?",
        options: [
          { id: "pain_front", text: "บริเวณฟันหน้า" },
          { id: "pain_back", text: "บริเวณฟันกราม" },
          { id: "pain_multiple", text: "ปวดหลายที่" }
        ]
      },
      pain_always: {
        question: "มีอาการบวมหรือหนองหรือไม่?",
        options: [
          { id: "pain_swelling_yes", text: "ใช่ มีอาการบวมหรือหนอง" },
          { id: "pain_swelling_no", text: "ไม่ มีแค่อาการปวด" }
        ]
      },
      pain_wisdom: {
        question: "อาการปวดฟันคุดเริ่มเมื่อไหร่?",
        options: [
          { id: "wisdom_recent", text: "ในช่วงไม่กี่วันที่ผ่านมา" },
          { id: "wisdom_recurring", text: "เป็นซ้ำบ่อย" },
          { id: "wisdom_swelling", text: "เหงือกบวมมาก" }
        ]
      }
    }
  },

  // คำถามเกี่ยวกับฟันคุด (สำหรับปรึกษา)
  wisdom_tooth: {
    question: "สถานะปัจจุบันของฟันคุดเป็นอย่างไร?",
    options: [
      { id: "wisdom_pain", text: "ปวดบริเวณฟันคุด" },
      { id: "wisdom_checkup", text: "ไม่เจ็บ แต่ต้องการตรวจ" }
    ],
    next: {
      // เมื่อเลือก "เจ็บ" → ถามตำแหน่ง
      wisdom_pain: {
        question: "ฟันซี่ไหนที่ปวดตอนนี้?",
        options: [
          { id: "wisdom_upper", text: "ฟันคุดบน" },
          { id: "wisdom_lower", text: "ฟันคุดล่าง" }
        ],
        next: {
          // หลังเลือกฟันคุดบน → เริ่มไม่สบายเมื่อไหร่
          wisdom_upper: {
            question: "ความไม่สบายจากฟันคุดเริ่มเมื่อไหร่?",
            options: [
              { id: "wisdom_first_time", text: "ครั้งแรก" },
              { id: "wisdom_recurring", text: "เคยมีประสบการณ์คล้ายกันมาก่อน หายไปแล้วกลับมาอีก" }
            ],
            next: {
              wisdom_first_time: {
                question: "อะไรที่คุณกังวลมากที่สุดเกี่ยวกับการรักษาฟันคุด?",
                options: [
                  { id: "worry_possible", text: "ถอนฟันได้หรือไม่" },
                  { id: "worry_fear", text: "กลัวการถอนฟัน" },
                  { id: "worry_daily", text: "ความไม่สบายในชีวิตประจำวันหลังถอนฟัน" }
                ],
                next: {
                  worry_possible: {
                    question: "คุณเคยผ่าตัดหัวใจหลอดเลือดหรือมีโรคประจำตัวหรือไม่?",
                    options: [
                      { id: "disease_medication", text: "ฉันทานยาทุกวัน (กรุณานำซองยามาด้วย)" },
                      { id: "disease_heart", text: "เคยผ่าตัดหัวใจหรือหลอดเลือดมาก่อน" },
                      { id: "disease_bp_diabetes", text: "ความดันโลหิตสูง/เบาหวาน" },
                      { id: "disease_osteoporosis", text: "โรคกระดูกพรุน" },
                      { id: "disease_other", text: "โรคประจำตัวอื่นๆ" },
                      { id: "disease_none", text: "ไม่มี" }
                    ]
                  },
                  worry_fear: {
                    question: "คุณเคยผ่าตัดหัวใจหลอดเลือดหรือมีโรคประจำตัวหรือไม่?",
                    options: [
                      { id: "disease_medication", text: "ฉันทานยาทุกวัน (กรุณานำซองยามาด้วย)" },
                      { id: "disease_heart", text: "เคยผ่าตัดหัวใจหรือหลอดเลือดมาก่อน" },
                      { id: "disease_bp_diabetes", text: "ความดันโลหิตสูง/เบาหวาน" },
                      { id: "disease_osteoporosis", text: "โรคกระดูกพรุน" },
                      { id: "disease_other", text: "โรคประจำตัวอื่นๆ" },
                      { id: "disease_none", text: "ไม่มี" }
                    ]
                  },
                  worry_daily: {
                    question: "คุณเคยผ่าตัดหัวใจหลอดเลือดหรือมีโรคประจำตัวหรือไม่?",
                    options: [
                      { id: "disease_medication", text: "ฉันทานยาทุกวัน (กรุณานำซองยามาด้วย)" },
                      { id: "disease_heart", text: "เคยผ่าตัดหัวใจหรือหลอดเลือดมาก่อน" },
                      { id: "disease_bp_diabetes", text: "ความดันโลหิตสูง/เบาหวาน" },
                      { id: "disease_osteoporosis", text: "โรคกระดูกพรุน" },
                      { id: "disease_other", text: "โรคประจำตัวอื่นๆ" },
                      { id: "disease_none", text: "ไม่มี" }
                    ]
                  }
                }
              },
              wisdom_recurring: {
                question: "อะไรที่คุณกังวลมากที่สุดเกี่ยวกับการรักษาฟันคุด?",
                options: [
                  { id: "worry_possible", text: "ถอนฟันได้หรือไม่" },
                  { id: "worry_fear", text: "กลัวการถอนฟัน" },
                  { id: "worry_daily", text: "ความไม่สบายในชีวิตประจำวันหลังถอนฟัน" }
                ],
                next: {
                  worry_possible: {
                    question: "คุณเคยผ่าตัดหัวใจหลอดเลือดหรือมีโรคประจำตัวหรือไม่?",
                    options: [
                      { id: "disease_medication", text: "ฉันทานยาทุกวัน (กรุณานำซองยามาด้วย)" },
                      { id: "disease_heart", text: "เคยผ่าตัดหัวใจหรือหลอดเลือดมาก่อน" },
                      { id: "disease_bp_diabetes", text: "ความดันโลหิตสูง/เบาหวาน" },
                      { id: "disease_osteoporosis", text: "โรคกระดูกพรุน" },
                      { id: "disease_other", text: "โรคประจำตัวอื่นๆ" },
                      { id: "disease_none", text: "ไม่มี" }
                    ]
                  },
                  worry_fear: {
                    question: "คุณเคยผ่าตัดหัวใจหลอดเลือดหรือมีโรคประจำตัวหรือไม่?",
                    options: [
                      { id: "disease_medication", text: "ฉันทานยาทุกวัน (กรุณานำซองยามาด้วย)" },
                      { id: "disease_heart", text: "เคยผ่าตัดหัวใจหรือหลอดเลือดมาก่อน" },
                      { id: "disease_bp_diabetes", text: "ความดันโลหิตสูง/เบาหวาน" },
                      { id: "disease_osteoporosis", text: "โรคกระดูกพรุน" },
                      { id: "disease_other", text: "โรคประจำตัวอื่นๆ" },
                      { id: "disease_none", text: "ไม่มี" }
                    ]
                  },
                  worry_daily: {
                    question: "คุณเคยผ่าตัดหัวใจหลอดเลือดหรือมีโรคประจำตัวหรือไม่?",
                    options: [
                      { id: "disease_medication", text: "ฉันทานยาทุกวัน (กรุณานำซองยามาด้วย)" },
                      { id: "disease_heart", text: "เคยผ่าตัดหัวใจหรือหลอดเลือดมาก่อน" },
                      { id: "disease_bp_diabetes", text: "ความดันโลหิตสูง/เบาหวาน" },
                      { id: "disease_osteoporosis", text: "โรคกระดูกพรุน" },
                      { id: "disease_other", text: "โรคประจำตัวอื่นๆ" },
                      { id: "disease_none", text: "ไม่มี" }
                    ]
                  }
                }
              }
            }
          },
          // หลังเลือกฟันคุดล่าง → เริ่มไม่สบายเมื่อไหร่
          wisdom_lower: {
            question: "ความไม่สบายจากฟันคุดเริ่มเมื่อไหร่?",
            options: [
              { id: "wisdom_first_time", text: "ครั้งแรก" },
              { id: "wisdom_recurring", text: "เคยมีประสบการณ์คล้ายกันมาก่อน หายไปแล้วกลับมาอีก" }
            ],
            next: {
              wisdom_first_time: {
                question: "อะไรที่คุณกังวลมากที่สุดเกี่ยวกับการรักษาฟันคุด?",
                options: [
                  { id: "worry_possible", text: "ถอนฟันได้หรือไม่" },
                  { id: "worry_fear", text: "กลัวการถอนฟัน" },
                  { id: "worry_daily", text: "ความไม่สบายในชีวิตประจำวันหลังถอนฟัน" }
                ],
                next: {
                  worry_possible: {
                    question: "คุณเคยผ่าตัดหัวใจหลอดเลือดหรือมีโรคประจำตัวหรือไม่?",
                    options: [
                      { id: "disease_medication", text: "ฉันทานยาทุกวัน (กรุณานำซองยามาด้วย)" },
                      { id: "disease_heart", text: "เคยผ่าตัดหัวใจหรือหลอดเลือดมาก่อน" },
                      { id: "disease_bp_diabetes", text: "ความดันโลหิตสูง/เบาหวาน" },
                      { id: "disease_osteoporosis", text: "โรคกระดูกพรุน" },
                      { id: "disease_other", text: "โรคประจำตัวอื่นๆ" },
                      { id: "disease_none", text: "ไม่มี" }
                    ]
                  },
                  worry_fear: {
                    question: "คุณเคยผ่าตัดหัวใจหลอดเลือดหรือมีโรคประจำตัวหรือไม่?",
                    options: [
                      { id: "disease_medication", text: "ฉันทานยาทุกวัน (กรุณานำซองยามาด้วย)" },
                      { id: "disease_heart", text: "เคยผ่าตัดหัวใจหรือหลอดเลือดมาก่อน" },
                      { id: "disease_bp_diabetes", text: "ความดันโลหิตสูง/เบาหวาน" },
                      { id: "disease_osteoporosis", text: "โรคกระดูกพรุน" },
                      { id: "disease_other", text: "โรคประจำตัวอื่นๆ" },
                      { id: "disease_none", text: "ไม่มี" }
                    ]
                  },
                  worry_daily: {
                    question: "คุณเคยผ่าตัดหัวใจหลอดเลือดหรือมีโรคประจำตัวหรือไม่?",
                    options: [
                      { id: "disease_medication", text: "ฉันทานยาทุกวัน (กรุณานำซองยามาด้วย)" },
                      { id: "disease_heart", text: "เคยผ่าตัดหัวใจหรือหลอดเลือดมาก่อน" },
                      { id: "disease_bp_diabetes", text: "ความดันโลหิตสูง/เบาหวาน" },
                      { id: "disease_osteoporosis", text: "โรคกระดูกพรุน" },
                      { id: "disease_other", text: "โรคประจำตัวอื่นๆ" },
                      { id: "disease_none", text: "ไม่มี" }
                    ]
                  }
                }
              },
              wisdom_recurring: {
                question: "อะไรที่คุณกังวลมากที่สุดเกี่ยวกับการรักษาฟันคุด?",
                options: [
                  { id: "worry_possible", text: "ถอนฟันได้หรือไม่" },
                  { id: "worry_fear", text: "กลัวการถอนฟัน" },
                  { id: "worry_daily", text: "ความไม่สบายในชีวิตประจำวันหลังถอนฟัน" }
                ],
                next: {
                  worry_possible: {
                    question: "คุณเคยผ่าตัดหัวใจหลอดเลือดหรือมีโรคประจำตัวหรือไม่?",
                    options: [
                      { id: "disease_medication", text: "ฉันทานยาทุกวัน (กรุณานำซองยามาด้วย)" },
                      { id: "disease_heart", text: "เคยผ่าตัดหัวใจหรือหลอดเลือดมาก่อน" },
                      { id: "disease_bp_diabetes", text: "ความดันโลหิตสูง/เบาหวาน" },
                      { id: "disease_osteoporosis", text: "โรคกระดูกพรุน" },
                      { id: "disease_other", text: "โรคประจำตัวอื่นๆ" },
                      { id: "disease_none", text: "ไม่มี" }
                    ]
                  },
                  worry_fear: {
                    question: "คุณเคยผ่าตัดหัวใจหลอดเลือดหรือมีโรคประจำตัวหรือไม่?",
                    options: [
                      { id: "disease_medication", text: "ฉันทานยาทุกวัน (กรุณานำซองยามาด้วย)" },
                      { id: "disease_heart", text: "เคยผ่าตัดหัวใจหรือหลอดเลือดมาก่อน" },
                      { id: "disease_bp_diabetes", text: "ความดันโลหิตสูง/เบาหวาน" },
                      { id: "disease_osteoporosis", text: "โรคกระดูกพรุน" },
                      { id: "disease_other", text: "โรคประจำตัวอื่นๆ" },
                      { id: "disease_none", text: "ไม่มี" }
                    ]
                  },
                  worry_daily: {
                    question: "คุณเคยผ่าตัดหัวใจหลอดเลือดหรือมีโรคประจำตัวหรือไม่?",
                    options: [
                      { id: "disease_medication", text: "ฉันทานยาทุกวัน (กรุณานำซองยามาด้วย)" },
                      { id: "disease_heart", text: "เคยผ่าตัดหัวใจหรือหลอดเลือดมาก่อน" },
                      { id: "disease_bp_diabetes", text: "ความดันโลหิตสูง/เบาหวาน" },
                      { id: "disease_osteoporosis", text: "โรคกระดูกพรุน" },
                      { id: "disease_other", text: "โรคประจำตัวอื่นๆ" },
                      { id: "disease_none", text: "ไม่มี" }
                    ]
                  }
                }
              }
            }
          }
        }
      },
      // เมื่อเลือกไม่เจ็บแต่ต้องการตรวจ → ถามเหตุผลที่ลังเล → คำแนะนำสุดท้าย
      wisdom_checkup: {
        question: "อะไรที่คุณกังวลมากที่สุดหากรักษาฟันคุด?",
        options: [
          { id: "checkup_worry_possible", text: "ถอนฟันได้หรือไม่" },
          { id: "checkup_worry_fear", text: "กลัวการถอนฟัน" },
          { id: "checkup_worry_daily", text: "ความไม่สบายในชีวิตประจำวันหลังถอนฟัน" }
        ],
        next: {
          checkup_worry_possible: {
            question: "คุณเคยผ่าตัดหัวใจหลอดเลือดหรือมีโรคประจำตัวหรือไม่?",
            options: [
              { id: "disease_medication", text: "ฉันทานยาทุกวัน (กรุณานำซองยามาด้วย)" },
              { id: "disease_heart", text: "เคยผ่าตัดหัวใจหรือหลอดเลือดมาก่อน" },
              { id: "disease_bp_diabetes", text: "ความดันโลหิตสูง/เบาหวาน" },
              { id: "disease_osteoporosis", text: "โรคกระดูกพรุน" },
              { id: "disease_other", text: "โรคประจำตัวอื่นๆ" },
              { id: "disease_none", text: "ไม่มี" }
            ],
            next: {
              disease_medication: {
                question: "มีอะไรที่คุณอยากตรวจเพิ่มเติมหรือไม่?",
                options: [
                  { id: "extra_cavity", text: "ตรวจฟันผุ" },
                  { id: "extra_gum", text: "ตรวจเหงือก" },
                  { id: "extra_scaling", text: "ขูดหินปูน" },
                  { id: "extra_none", text: "ไม่ ต้องการตรวจแค่ฟันคุด" }
                ]
              },
              disease_heart: {
                question: "มีอะไรที่คุณอยากตรวจเพิ่มเติมหรือไม่?",
                options: [
                  { id: "extra_cavity", text: "ตรวจฟันผุ" },
                  { id: "extra_gum", text: "ตรวจเหงือก" },
                  { id: "extra_scaling", text: "ขูดหินปูน" },
                  { id: "extra_none", text: "ไม่ ต้องการตรวจแค่ฟันคุด" }
                ]
              },
              disease_bp_diabetes: {
                question: "มีอะไรที่คุณอยากตรวจเพิ่มเติมหรือไม่?",
                options: [
                  { id: "extra_cavity", text: "ตรวจฟันผุ" },
                  { id: "extra_gum", text: "ตรวจเหงือก" },
                  { id: "extra_scaling", text: "ขูดหินปูน" },
                  { id: "extra_none", text: "ไม่ ต้องการตรวจแค่ฟันคุด" }
                ]
              },
              disease_osteoporosis: {
                question: "มีอะไรที่คุณอยากตรวจเพิ่มเติมหรือไม่?",
                options: [
                  { id: "extra_cavity", text: "ตรวจฟันผุ" },
                  { id: "extra_gum", text: "ตรวจเหงือก" },
                  { id: "extra_scaling", text: "ขูดหินปูน" },
                  { id: "extra_none", text: "ไม่ ต้องการตรวจแค่ฟันคุด" }
                ]
              },
              disease_other: {
                question: "มีอะไรที่คุณอยากตรวจเพิ่มเติมหรือไม่?",
                options: [
                  { id: "extra_cavity", text: "ตรวจฟันผุ" },
                  { id: "extra_gum", text: "ตรวจเหงือก" },
                  { id: "extra_scaling", text: "ขูดหินปูน" },
                  { id: "extra_none", text: "ไม่ ต้องการตรวจแค่ฟันคุด" }
                ]
              },
              disease_none: {
                question: "มีอะไรที่คุณอยากตรวจเพิ่มเติมหรือไม่?",
                options: [
                  { id: "extra_cavity", text: "ตรวจฟันผุ" },
                  { id: "extra_gum", text: "ตรวจเหงือก" },
                  { id: "extra_scaling", text: "ขูดหินปูน" },
                  { id: "extra_none", text: "ไม่ ต้องการตรวจแค่ฟันคุด" }
                ]
              }
            }
          },
          checkup_worry_fear: {
            question: "คุณเคยผ่าตัดหัวใจหลอดเลือดหรือมีโรคประจำตัวหรือไม่?",
            options: [
              { id: "disease_medication", text: "ฉันทานยาทุกวัน (กรุณานำซองยามาด้วย)" },
              { id: "disease_heart", text: "เคยผ่าตัดหัวใจหรือหลอดเลือดมาก่อน" },
              { id: "disease_bp_diabetes", text: "ความดันโลหิตสูง/เบาหวาน" },
              { id: "disease_osteoporosis", text: "โรคกระดูกพรุน" },
              { id: "disease_other", text: "โรคประจำตัวอื่นๆ" },
              { id: "disease_none", text: "ไม่มี" }
            ],
            next: {
              disease_medication: {
                question: "มีอะไรที่คุณอยากตรวจเพิ่มเติมหรือไม่?",
                options: [
                  { id: "extra_cavity", text: "ตรวจฟันผุ" },
                  { id: "extra_gum", text: "ตรวจเหงือก" },
                  { id: "extra_scaling", text: "ขูดหินปูน" },
                  { id: "extra_none", text: "ไม่ ต้องการตรวจแค่ฟันคุด" }
                ]
              },
              disease_heart: {
                question: "มีอะไรที่คุณอยากตรวจเพิ่มเติมหรือไม่?",
                options: [
                  { id: "extra_cavity", text: "ตรวจฟันผุ" },
                  { id: "extra_gum", text: "ตรวจเหงือก" },
                  { id: "extra_scaling", text: "ขูดหินปูน" },
                  { id: "extra_none", text: "ไม่ ต้องการตรวจแค่ฟันคุด" }
                ]
              },
              disease_bp_diabetes: {
                question: "มีอะไรที่คุณอยากตรวจเพิ่มเติมหรือไม่?",
                options: [
                  { id: "extra_cavity", text: "ตรวจฟันผุ" },
                  { id: "extra_gum", text: "ตรวจเหงือก" },
                  { id: "extra_scaling", text: "ขูดหินปูน" },
                  { id: "extra_none", text: "ไม่ ต้องการตรวจแค่ฟันคุด" }
                ]
              },
              disease_osteoporosis: {
                question: "มีอะไรที่คุณอยากตรวจเพิ่มเติมหรือไม่?",
                options: [
                  { id: "extra_cavity", text: "ตรวจฟันผุ" },
                  { id: "extra_gum", text: "ตรวจเหงือก" },
                  { id: "extra_scaling", text: "ขูดหินปูน" },
                  { id: "extra_none", text: "ไม่ ต้องการตรวจแค่ฟันคุด" }
                ]
              },
              disease_other: {
                question: "มีอะไรที่คุณอยากตรวจเพิ่มเติมหรือไม่?",
                options: [
                  { id: "extra_cavity", text: "ตรวจฟันผุ" },
                  { id: "extra_gum", text: "ตรวจเหงือก" },
                  { id: "extra_scaling", text: "ขูดหินปูน" },
                  { id: "extra_none", text: "ไม่ ต้องการตรวจแค่ฟันคุด" }
                ]
              },
              disease_none: {
                question: "มีอะไรที่คุณอยากตรวจเพิ่มเติมหรือไม่?",
                options: [
                  { id: "extra_cavity", text: "ตรวจฟันผุ" },
                  { id: "extra_gum", text: "ตรวจเหงือก" },
                  { id: "extra_scaling", text: "ขูดหินปูน" },
                  { id: "extra_none", text: "ไม่ ต้องการตรวจแค่ฟันคุด" }
                ]
              }
            }
          },
          checkup_worry_daily: {
            question: "คุณเคยผ่าตัดหัวใจหลอดเลือดหรือมีโรคประจำตัวหรือไม่?",
            options: [
              { id: "disease_medication", text: "ฉันทานยาทุกวัน (กรุณานำซองยามาด้วย)" },
              { id: "disease_heart", text: "เคยผ่าตัดหัวใจหรือหลอดเลือดมาก่อน" },
              { id: "disease_bp_diabetes", text: "ความดันโลหิตสูง/เบาหวาน" },
              { id: "disease_osteoporosis", text: "โรคกระดูกพรุน" },
              { id: "disease_other", text: "โรคประจำตัวอื่นๆ" },
              { id: "disease_none", text: "ไม่มี" }
            ],
            next: {
              disease_medication: {
                question: "มีอะไรที่คุณอยากตรวจเพิ่มเติมหรือไม่?",
                options: [
                  { id: "extra_cavity", text: "ตรวจฟันผุ" },
                  { id: "extra_gum", text: "ตรวจเหงือก" },
                  { id: "extra_scaling", text: "ขูดหินปูน" },
                  { id: "extra_none", text: "ไม่ ต้องการตรวจแค่ฟันคุด" }
                ]
              },
              disease_heart: {
                question: "มีอะไรที่คุณอยากตรวจเพิ่มเติมหรือไม่?",
                options: [
                  { id: "extra_cavity", text: "ตรวจฟันผุ" },
                  { id: "extra_gum", text: "ตรวจเหงือก" },
                  { id: "extra_scaling", text: "ขูดหินปูน" },
                  { id: "extra_none", text: "ไม่ ต้องการตรวจแค่ฟันคุด" }
                ]
              },
              disease_bp_diabetes: {
                question: "มีอะไรที่คุณอยากตรวจเพิ่มเติมหรือไม่?",
                options: [
                  { id: "extra_cavity", text: "ตรวจฟันผุ" },
                  { id: "extra_gum", text: "ตรวจเหงือก" },
                  { id: "extra_scaling", text: "ขูดหินปูน" },
                  { id: "extra_none", text: "ไม่ ต้องการตรวจแค่ฟันคุด" }
                ]
              },
              disease_osteoporosis: {
                question: "มีอะไรที่คุณอยากตรวจเพิ่มเติมหรือไม่?",
                options: [
                  { id: "extra_cavity", text: "ตรวจฟันผุ" },
                  { id: "extra_gum", text: "ตรวจเหงือก" },
                  { id: "extra_scaling", text: "ขูดหินปูน" },
                  { id: "extra_none", text: "ไม่ ต้องการตรวจแค่ฟันคุด" }
                ]
              },
              disease_other: {
                question: "มีอะไรที่คุณอยากตรวจเพิ่มเติมหรือไม่?",
                options: [
                  { id: "extra_cavity", text: "ตรวจฟันผุ" },
                  { id: "extra_gum", text: "ตรวจเหงือก" },
                  { id: "extra_scaling", text: "ขูดหินปูน" },
                  { id: "extra_none", text: "ไม่ ต้องการตรวจแค่ฟันคุด" }
                ]
              },
              disease_none: {
                question: "มีอะไรที่คุณอยากตรวจเพิ่มเติมหรือไม่?",
                options: [
                  { id: "extra_cavity", text: "ตรวจฟันผุ" },
                  { id: "extra_gum", text: "ตรวจเหงือก" },
                  { id: "extra_scaling", text: "ขูดหินปูน" },
                  { id: "extra_none", text: "ไม่ ต้องการตรวจแค่ฟันคุด" }
                ]
              }
            }
          }
        }
      }
    }
  },

  // คำถามเกี่ยวกับความสวยงาม
  aesthetic: {
    question: "คุณต้องการปรับปรุงอะไร?",
    options: [
      { id: "aesthetic_color", text: "ฟันเหลืองหรือเปลี่ยนสี" },
      { id: "aesthetic_shape", text: "รูปร่างหรือขนาดของฟัน" },
      { id: "aesthetic_gap", text: "ช่องว่างระหว่างฟัน" },
      { id: "aesthetic_alignment", text: "ฟันเรียงไม่เท่ากัน" }
    ],
    next: {
      aesthetic_color: {
        question: "ระดับและสาเหตุของการเปลี่ยนสีคืออะไร?",
        options: [
          { id: "color_coffee", text: "คราบจากกาแฟ/บุหรี่" },
          { id: "color_aging", text: "สีเปลี่ยนทั้งปากเนื่องจากอายุ" },
          { id: "color_single", text: "มีแค่ฟันบางซี่ที่คล้ำ" }
        ]
      },
      aesthetic_shape: {
        question: "คุณมีปัญหาอะไร?",
        options: [
          { id: "shape_small", text: "ฟันเล็ก" },
          { id: "shape_chipped", text: "ฟันบิ่นหรือสึก" },
          { id: "shape_uneven", text: "ความยาวฟันไม่สม่ำเสมอ" }
        ]
      },
      aesthetic_gap: {
        question: "ช่องว่างอยู่ที่ไหน?",
        options: [
          { id: "gap_front", text: "ระหว่างฟันหน้า" },
          { id: "gap_multiple", text: "มีช่องว่างหลายที่" }
        ]
      },
      aesthetic_alignment: {
        question: "ระดับความรุนแรงของปัญหาการเรียงฟันเป็นอย่างไร?",
        options: [
          { id: "alignment_mild", text: "เบี้ยวเล็กน้อย" },
          { id: "alignment_moderate", text: "ฟันซ้อนปานกลาง" },
          { id: "alignment_severe", text: "เบี้ยวมาก" }
        ]
      }
    }
  },

  // คำถามเกี่ยวกับฟันหาย (สำหรับปรึกษารากฟันเทียม) - Q1: สถานะปัจจุบัน
  missing_tooth: {
    question: "สถานะฟันปัจจุบันของคุณเป็นอย่างไร?",
    options: [
      { id: "missing_upper_all", text: "ฟันบนทั้งหมดหายไปหรือต้องถอน" },
      { id: "missing_lower_all", text: "ฟันล่างทั้งหมดหายไปหรือต้องถอน" },
      { id: "missing_all", text: "ฟันเกือบทั้งหมดหายไปหรือต้องถอน" },
      { id: "missing_partial", text: "ฟันหายหลายซี่ (ไม่เกิน 10 ซี่) หรือต้องถอน" },
      { id: "implant_revision", text: "ต้องการผ่าตัดรากฟันเทียมซ้ำ" }
    ],
    next: {
      // Q2: มีฟันปลอมหรือไม่ (เหมือนกันทุกตัวเลือก)
      missing_upper_all: {
        question: "คุณใส่ฟันปลอมอยู่หรือไม่?",
        options: [
          { id: "denture_yes", text: "ใช่" },
          { id: "denture_no", text: "ไม่" }
        ],
        next: {
          // Q3: ตรวจสอบโรคประจำตัว
          denture_yes: {
            question: "คุณมีโรคประจำตัวหรือไม่?",
            options: [
              { id: "disease_diabetes", text: "เบาหวาน" },
              { id: "disease_hypertension", text: "ความดันโลหิตสูง" },
              { id: "disease_osteoporosis", text: "โรคกระดูกพรุน" },
              { id: "disease_heart", text: "โรคหัวใจ" },
              { id: "disease_none", text: "ไม่มี" }
            ],
            next: {
              // Q4: สิ่งสำคัญในการรักษา (บทบาท Q5)
              disease_diabetes: {
                question: "อะไรคือสิ่งสำคัญที่สุดสำหรับคุณในการรักษา?",
                options: [
                  { id: "priority_cost", text: "ค่าใช้จ่าย" },
                  { id: "priority_pain", text: "ความเจ็บปวด" },
                  { id: "priority_eating", text: "รับประทานอาหารได้สบาย" },
                  { id: "priority_recovery", text: "การฟื้นตัวเร็วและกลับสู่ชีวิตปกติหลังผ่าตัด" }
                ],
                next: {
                  // Q5: เหตุผลที่ลังเล (บทบาท Q6)
                  priority_cost: {
                    question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?",
                    options: [
                      { id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" },
                      { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" },
                      { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" },
                      { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }
                    ]
                  },
                  priority_pain: {
                    question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?",
                    options: [
                      { id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" },
                      { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" },
                      { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" },
                      { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }
                    ]
                  },
                  priority_eating: {
                    question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?",
                    options: [
                      { id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" },
                      { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" },
                      { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" },
                      { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }
                    ]
                  },
                  priority_recovery: {
                    question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?",
                    options: [
                      { id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" },
                      { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" },
                      { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" },
                      { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }
                    ]
                  }
                }
              },
              disease_hypertension: {
                question: "อะไรคือสิ่งสำคัญที่สุดสำหรับคุณในการรักษา?",
                options: [
                  { id: "priority_cost", text: "ค่าใช้จ่าย" },
                  { id: "priority_pain", text: "ความเจ็บปวด" },
                  { id: "priority_eating", text: "รับประทานอาหารได้สบาย" },
                  { id: "priority_recovery", text: "การฟื้นตัวเร็วและกลับสู่ชีวิตปกติหลังผ่าตัด" }
                ],
                next: {
                  priority_cost: {
                    question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?",
                    options: [
                      { id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" },
                      { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" },
                      { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" },
                      { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }
                    ]
                  },
                  priority_pain: {
                    question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?",
                    options: [
                      { id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" },
                      { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" },
                      { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" },
                      { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }
                    ]
                  },
                  priority_eating: {
                    question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?",
                    options: [
                      { id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" },
                      { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" },
                      { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" },
                      { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }
                    ]
                  },
                  priority_recovery: {
                    question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?",
                    options: [
                      { id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" },
                      { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" },
                      { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" },
                      { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }
                    ]
                  }
                }
              },
              disease_osteoporosis: {
                question: "อะไรคือสิ่งสำคัญที่สุดสำหรับคุณในการรักษา?",
                options: [
                  { id: "priority_cost", text: "ค่าใช้จ่าย" },
                  { id: "priority_pain", text: "ความเจ็บปวด" },
                  { id: "priority_eating", text: "รับประทานอาหารได้สบาย" },
                  { id: "priority_recovery", text: "การฟื้นตัวเร็วและกลับสู่ชีวิตปกติหลังผ่าตัด" }
                ],
                next: {
                  priority_cost: {
                    question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?",
                    options: [
                      { id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" },
                      { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" },
                      { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" },
                      { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }
                    ]
                  },
                  priority_pain: {
                    question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?",
                    options: [
                      { id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" },
                      { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" },
                      { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" },
                      { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }
                    ]
                  },
                  priority_eating: {
                    question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?",
                    options: [
                      { id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" },
                      { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" },
                      { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" },
                      { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }
                    ]
                  },
                  priority_recovery: {
                    question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?",
                    options: [
                      { id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" },
                      { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" },
                      { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" },
                      { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }
                    ]
                  }
                }
              },
              disease_heart: {
                question: "อะไรคือสิ่งสำคัญที่สุดสำหรับคุณในการรักษา?",
                options: [
                  { id: "priority_cost", text: "ค่าใช้จ่าย" },
                  { id: "priority_pain", text: "ความเจ็บปวด" },
                  { id: "priority_eating", text: "รับประทานอาหารได้สบาย" },
                  { id: "priority_recovery", text: "การฟื้นตัวเร็วและกลับสู่ชีวิตปกติหลังผ่าตัด" }
                ],
                next: {
                  priority_cost: {
                    question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?",
                    options: [
                      { id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" },
                      { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" },
                      { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" },
                      { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }
                    ]
                  },
                  priority_pain: {
                    question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?",
                    options: [
                      { id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" },
                      { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" },
                      { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" },
                      { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }
                    ]
                  },
                  priority_eating: {
                    question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?",
                    options: [
                      { id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" },
                      { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" },
                      { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" },
                      { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }
                    ]
                  },
                  priority_recovery: {
                    question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?",
                    options: [
                      { id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" },
                      { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" },
                      { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" },
                      { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }
                    ]
                  }
                }
              },
              disease_none: {
                question: "อะไรคือสิ่งสำคัญที่สุดสำหรับคุณในการรักษา?",
                options: [
                  { id: "priority_cost", text: "ค่าใช้จ่าย" },
                  { id: "priority_pain", text: "ความเจ็บปวด" },
                  { id: "priority_eating", text: "รับประทานอาหารได้สบาย" },
                  { id: "priority_recovery", text: "การฟื้นตัวเร็วและกลับสู่ชีวิตปกติหลังผ่าตัด" }
                ],
                next: {
                  priority_cost: {
                    question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?",
                    options: [
                      { id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" },
                      { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" },
                      { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" },
                      { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }
                    ]
                  },
                  priority_pain: {
                    question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?",
                    options: [
                      { id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" },
                      { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" },
                      { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" },
                      { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }
                    ]
                  },
                  priority_eating: {
                    question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?",
                    options: [
                      { id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" },
                      { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" },
                      { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" },
                      { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }
                    ]
                  },
                  priority_recovery: {
                    question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?",
                    options: [
                      { id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" },
                      { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" },
                      { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" },
                      { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }
                    ]
                  }
                }
              }
            }
          },
          denture_no: {
            question: "คุณมีโรคประจำตัวหรือไม่?",
            options: [
              { id: "disease_diabetes", text: "เบาหวาน" },
              { id: "disease_hypertension", text: "ความดันโลหิตสูง" },
              { id: "disease_osteoporosis", text: "โรคกระดูกพรุน" },
              { id: "disease_heart", text: "โรคหัวใจ" },
              { id: "disease_none", text: "ไม่มี" }
            ],
            next: {
              disease_diabetes: {
                question: "อะไรคือสิ่งสำคัญที่สุดสำหรับคุณในการรักษา?",
                options: [
                  { id: "priority_cost", text: "ค่าใช้จ่าย" },
                  { id: "priority_pain", text: "ความเจ็บปวด" },
                  { id: "priority_eating", text: "รับประทานอาหารได้สบาย" },
                  { id: "priority_recovery", text: "การฟื้นตัวเร็วและกลับสู่ชีวิตปกติหลังผ่าตัด" }
                ],
                next: {
                  priority_cost: {
                    question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?",
                    options: [
                      { id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" },
                      { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" },
                      { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" },
                      { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }
                    ]
                  },
                  priority_pain: {
                    question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?",
                    options: [
                      { id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" },
                      { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" },
                      { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" },
                      { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }
                    ]
                  },
                  priority_eating: {
                    question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?",
                    options: [
                      { id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" },
                      { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" },
                      { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" },
                      { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }
                    ]
                  },
                  priority_recovery: {
                    question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?",
                    options: [
                      { id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" },
                      { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" },
                      { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" },
                      { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }
                    ]
                  }
                }
              },
              disease_hypertension: {
                question: "อะไรคือสิ่งสำคัญที่สุดสำหรับคุณในการรักษา?",
                options: [
                  { id: "priority_cost", text: "ค่าใช้จ่าย" },
                  { id: "priority_pain", text: "ความเจ็บปวด" },
                  { id: "priority_eating", text: "รับประทานอาหารได้สบาย" },
                  { id: "priority_recovery", text: "การฟื้นตัวเร็วและกลับสู่ชีวิตปกติหลังผ่าตัด" }
                ],
                next: {
                  priority_cost: {
                    question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?",
                    options: [
                      { id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" },
                      { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" },
                      { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" },
                      { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }
                    ]
                  },
                  priority_pain: {
                    question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?",
                    options: [
                      { id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" },
                      { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" },
                      { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" },
                      { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }
                    ]
                  },
                  priority_eating: {
                    question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?",
                    options: [
                      { id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" },
                      { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" },
                      { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" },
                      { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }
                    ]
                  },
                  priority_recovery: {
                    question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?",
                    options: [
                      { id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" },
                      { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" },
                      { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" },
                      { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }
                    ]
                  }
                }
              },
              disease_osteoporosis: {
                question: "อะไรคือสิ่งสำคัญที่สุดสำหรับคุณในการรักษา?",
                options: [
                  { id: "priority_cost", text: "ค่าใช้จ่าย" },
                  { id: "priority_pain", text: "ความเจ็บปวด" },
                  { id: "priority_eating", text: "รับประทานอาหารได้สบาย" },
                  { id: "priority_recovery", text: "การฟื้นตัวเร็วและกลับสู่ชีวิตปกติหลังผ่าตัด" }
                ],
                next: {
                  priority_cost: {
                    question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?",
                    options: [
                      { id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" },
                      { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" },
                      { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" },
                      { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }
                    ]
                  },
                  priority_pain: {
                    question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?",
                    options: [
                      { id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" },
                      { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" },
                      { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" },
                      { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }
                    ]
                  },
                  priority_eating: {
                    question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?",
                    options: [
                      { id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" },
                      { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" },
                      { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" },
                      { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }
                    ]
                  },
                  priority_recovery: {
                    question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?",
                    options: [
                      { id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" },
                      { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" },
                      { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" },
                      { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }
                    ]
                  }
                }
              },
              disease_heart: {
                question: "อะไรคือสิ่งสำคัญที่สุดสำหรับคุณในการรักษา?",
                options: [
                  { id: "priority_cost", text: "ค่าใช้จ่าย" },
                  { id: "priority_pain", text: "ความเจ็บปวด" },
                  { id: "priority_eating", text: "รับประทานอาหารได้สบาย" },
                  { id: "priority_recovery", text: "การฟื้นตัวเร็วและกลับสู่ชีวิตปกติหลังผ่าตัด" }
                ],
                next: {
                  priority_cost: {
                    question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?",
                    options: [
                      { id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" },
                      { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" },
                      { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" },
                      { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }
                    ]
                  },
                  priority_pain: {
                    question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?",
                    options: [
                      { id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" },
                      { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" },
                      { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" },
                      { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }
                    ]
                  },
                  priority_eating: {
                    question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?",
                    options: [
                      { id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" },
                      { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" },
                      { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" },
                      { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }
                    ]
                  },
                  priority_recovery: {
                    question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?",
                    options: [
                      { id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" },
                      { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" },
                      { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" },
                      { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }
                    ]
                  }
                }
              },
              disease_none: {
                question: "อะไรคือสิ่งสำคัญที่สุดสำหรับคุณในการรักษา?",
                options: [
                  { id: "priority_cost", text: "ค่าใช้จ่าย" },
                  { id: "priority_pain", text: "ความเจ็บปวด" },
                  { id: "priority_eating", text: "รับประทานอาหารได้สบาย" },
                  { id: "priority_recovery", text: "การฟื้นตัวเร็วและกลับสู่ชีวิตปกติหลังผ่าตัด" }
                ],
                next: {
                  priority_cost: {
                    question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?",
                    options: [
                      { id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" },
                      { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" },
                      { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" },
                      { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }
                    ]
                  },
                  priority_pain: {
                    question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?",
                    options: [
                      { id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" },
                      { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" },
                      { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" },
                      { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }
                    ]
                  },
                  priority_eating: {
                    question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?",
                    options: [
                      { id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" },
                      { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" },
                      { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" },
                      { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }
                    ]
                  },
                  priority_recovery: {
                    question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?",
                    options: [
                      { id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" },
                      { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" },
                      { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" },
                      { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }
                    ]
                  }
                }
              }
            }
          }
        }
      },
      // ใช้กระบวนการเดียวกันกับตัวเลือกอื่น (โครงสร้างเดียวกับ missing_upper_all)
      missing_all: {
        question: "คุณใส่ฟันปลอมอยู่หรือไม่?",
        options: [
          { id: "denture_yes", text: "ใช่" },
          { id: "denture_no", text: "ไม่" }
        ],
        next: {
          denture_yes: {
            question: "คุณมีโรคประจำตัวหรือไม่?",
            options: [
              { id: "disease_diabetes", text: "เบาหวาน" },
              { id: "disease_hypertension", text: "ความดันโลหิตสูง" },
              { id: "disease_osteoporosis", text: "โรคกระดูกพรุน" },
              { id: "disease_heart", text: "โรคหัวใจ" },
              { id: "disease_none", text: "ไม่มี" }
            ],
            next: {
              disease_diabetes: { question: "อะไรคือสิ่งสำคัญที่สุดสำหรับคุณในการรักษา?", options: [{ id: "priority_cost", text: "ค่าใช้จ่าย" }, { id: "priority_pain", text: "ความเจ็บปวด" }, { id: "priority_eating", text: "รับประทานอาหารได้สบาย" }, { id: "priority_recovery", text: "การฟื้นตัวเร็วและกลับสู่ชีวิตปกติหลังผ่าตัด" }], next: { priority_cost: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_pain: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_eating: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_recovery: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] } } },
              disease_hypertension: { question: "อะไรคือสิ่งสำคัญที่สุดสำหรับคุณในการรักษา?", options: [{ id: "priority_cost", text: "ค่าใช้จ่าย" }, { id: "priority_pain", text: "ความเจ็บปวด" }, { id: "priority_eating", text: "รับประทานอาหารได้สบาย" }, { id: "priority_recovery", text: "การฟื้นตัวเร็วและกลับสู่ชีวิตปกติหลังผ่าตัด" }], next: { priority_cost: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_pain: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_eating: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_recovery: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] } } },
              disease_osteoporosis: { question: "อะไรคือสิ่งสำคัญที่สุดสำหรับคุณในการรักษา?", options: [{ id: "priority_cost", text: "ค่าใช้จ่าย" }, { id: "priority_pain", text: "ความเจ็บปวด" }, { id: "priority_eating", text: "รับประทานอาหารได้สบาย" }, { id: "priority_recovery", text: "การฟื้นตัวเร็วและกลับสู่ชีวิตปกติหลังผ่าตัด" }], next: { priority_cost: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_pain: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_eating: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_recovery: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] } } },
              disease_heart: { question: "อะไรคือสิ่งสำคัญที่สุดสำหรับคุณในการรักษา?", options: [{ id: "priority_cost", text: "ค่าใช้จ่าย" }, { id: "priority_pain", text: "ความเจ็บปวด" }, { id: "priority_eating", text: "รับประทานอาหารได้สบาย" }, { id: "priority_recovery", text: "การฟื้นตัวเร็วและกลับสู่ชีวิตปกติหลังผ่าตัด" }], next: { priority_cost: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_pain: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_eating: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_recovery: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] } } },
              disease_none: { question: "อะไรคือสิ่งสำคัญที่สุดสำหรับคุณในการรักษา?", options: [{ id: "priority_cost", text: "ค่าใช้จ่าย" }, { id: "priority_pain", text: "ความเจ็บปวด" }, { id: "priority_eating", text: "รับประทานอาหารได้สบาย" }, { id: "priority_recovery", text: "การฟื้นตัวเร็วและกลับสู่ชีวิตปกติหลังผ่าตัด" }], next: { priority_cost: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_pain: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_eating: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_recovery: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] } } }
            }
          },
          denture_no: {
            question: "คุณมีโรคประจำตัวหรือไม่?",
            options: [
              { id: "disease_diabetes", text: "เบาหวาน" },
              { id: "disease_hypertension", text: "ความดันโลหิตสูง" },
              { id: "disease_osteoporosis", text: "โรคกระดูกพรุน" },
              { id: "disease_heart", text: "โรคหัวใจ" },
              { id: "disease_none", text: "ไม่มี" }
            ],
            next: {
              disease_diabetes: { question: "อะไรคือสิ่งสำคัญที่สุดสำหรับคุณในการรักษา?", options: [{ id: "priority_cost", text: "ค่าใช้จ่าย" }, { id: "priority_pain", text: "ความเจ็บปวด" }, { id: "priority_eating", text: "รับประทานอาหารได้สบาย" }, { id: "priority_recovery", text: "การฟื้นตัวเร็วและกลับสู่ชีวิตปกติหลังผ่าตัด" }], next: { priority_cost: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_pain: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_eating: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_recovery: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] } } },
              disease_hypertension: { question: "อะไรคือสิ่งสำคัญที่สุดสำหรับคุณในการรักษา?", options: [{ id: "priority_cost", text: "ค่าใช้จ่าย" }, { id: "priority_pain", text: "ความเจ็บปวด" }, { id: "priority_eating", text: "รับประทานอาหารได้สบาย" }, { id: "priority_recovery", text: "การฟื้นตัวเร็วและกลับสู่ชีวิตปกติหลังผ่าตัด" }], next: { priority_cost: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_pain: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_eating: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_recovery: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] } } },
              disease_osteoporosis: { question: "อะไรคือสิ่งสำคัญที่สุดสำหรับคุณในการรักษา?", options: [{ id: "priority_cost", text: "ค่าใช้จ่าย" }, { id: "priority_pain", text: "ความเจ็บปวด" }, { id: "priority_eating", text: "รับประทานอาหารได้สบาย" }, { id: "priority_recovery", text: "การฟื้นตัวเร็วและกลับสู่ชีวิตปกติหลังผ่าตัด" }], next: { priority_cost: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_pain: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_eating: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_recovery: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] } } },
              disease_heart: { question: "อะไรคือสิ่งสำคัญที่สุดสำหรับคุณในการรักษา?", options: [{ id: "priority_cost", text: "ค่าใช้จ่าย" }, { id: "priority_pain", text: "ความเจ็บปวด" }, { id: "priority_eating", text: "รับประทานอาหารได้สบาย" }, { id: "priority_recovery", text: "การฟื้นตัวเร็วและกลับสู่ชีวิตปกติหลังผ่าตัด" }], next: { priority_cost: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_pain: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_eating: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_recovery: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] } } },
              disease_none: { question: "อะไรคือสิ่งสำคัญที่สุดสำหรับคุณในการรักษา?", options: [{ id: "priority_cost", text: "ค่าใช้จ่าย" }, { id: "priority_pain", text: "ความเจ็บปวด" }, { id: "priority_eating", text: "รับประทานอาหารได้สบาย" }, { id: "priority_recovery", text: "การฟื้นตัวเร็วและกลับสู่ชีวิตปกติหลังผ่าตัด" }], next: { priority_cost: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_pain: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_eating: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_recovery: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] } } }
            }
          }
        }
      },
      missing_lower_all: {
        question: "คุณใส่ฟันปลอมอยู่หรือไม่?",
        options: [
          { id: "denture_yes", text: "ใช่" },
          { id: "denture_no", text: "ไม่" }
        ],
        next: {
          denture_yes: {
            question: "คุณมีโรคประจำตัวหรือไม่?",
            options: [
              { id: "disease_diabetes", text: "เบาหวาน" },
              { id: "disease_hypertension", text: "ความดันโลหิตสูง" },
              { id: "disease_osteoporosis", text: "โรคกระดูกพรุน" },
              { id: "disease_heart", text: "โรคหัวใจ" },
              { id: "disease_none", text: "ไม่มี" }
            ],
            next: {
              disease_diabetes: { question: "อะไรคือสิ่งสำคัญที่สุดสำหรับคุณในการรักษา?", options: [{ id: "priority_cost", text: "ค่าใช้จ่าย" }, { id: "priority_pain", text: "ความเจ็บปวด" }, { id: "priority_eating", text: "รับประทานอาหารได้สบาย" }, { id: "priority_recovery", text: "การฟื้นตัวเร็วและกลับสู่ชีวิตปกติหลังผ่าตัด" }], next: { priority_cost: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_pain: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_eating: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_recovery: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] } } },
              disease_hypertension: { question: "อะไรคือสิ่งสำคัญที่สุดสำหรับคุณในการรักษา?", options: [{ id: "priority_cost", text: "ค่าใช้จ่าย" }, { id: "priority_pain", text: "ความเจ็บปวด" }, { id: "priority_eating", text: "รับประทานอาหารได้สบาย" }, { id: "priority_recovery", text: "การฟื้นตัวเร็วและกลับสู่ชีวิตปกติหลังผ่าตัด" }], next: { priority_cost: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_pain: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_eating: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_recovery: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] } } },
              disease_osteoporosis: { question: "อะไรคือสิ่งสำคัญที่สุดสำหรับคุณในการรักษา?", options: [{ id: "priority_cost", text: "ค่าใช้จ่าย" }, { id: "priority_pain", text: "ความเจ็บปวด" }, { id: "priority_eating", text: "รับประทานอาหารได้สบาย" }, { id: "priority_recovery", text: "การฟื้นตัวเร็วและกลับสู่ชีวิตปกติหลังผ่าตัด" }], next: { priority_cost: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_pain: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_eating: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_recovery: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] } } },
              disease_heart: { question: "อะไรคือสิ่งสำคัญที่สุดสำหรับคุณในการรักษา?", options: [{ id: "priority_cost", text: "ค่าใช้จ่าย" }, { id: "priority_pain", text: "ความเจ็บปวด" }, { id: "priority_eating", text: "รับประทานอาหารได้สบาย" }, { id: "priority_recovery", text: "การฟื้นตัวเร็วและกลับสู่ชีวิตปกติหลังผ่าตัด" }], next: { priority_cost: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_pain: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_eating: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_recovery: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] } } },
              disease_none: { question: "อะไรคือสิ่งสำคัญที่สุดสำหรับคุณในการรักษา?", options: [{ id: "priority_cost", text: "ค่าใช้จ่าย" }, { id: "priority_pain", text: "ความเจ็บปวด" }, { id: "priority_eating", text: "รับประทานอาหารได้สบาย" }, { id: "priority_recovery", text: "การฟื้นตัวเร็วและกลับสู่ชีวิตปกติหลังผ่าตัด" }], next: { priority_cost: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_pain: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_eating: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_recovery: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] } } }
            }
          },
          denture_no: {
            question: "คุณมีโรคประจำตัวหรือไม่?",
            options: [
              { id: "disease_diabetes", text: "เบาหวาน" },
              { id: "disease_hypertension", text: "ความดันโลหิตสูง" },
              { id: "disease_osteoporosis", text: "โรคกระดูกพรุน" },
              { id: "disease_heart", text: "โรคหัวใจ" },
              { id: "disease_none", text: "ไม่มี" }
            ],
            next: {
              disease_diabetes: { question: "อะไรคือสิ่งสำคัญที่สุดสำหรับคุณในการรักษา?", options: [{ id: "priority_cost", text: "ค่าใช้จ่าย" }, { id: "priority_pain", text: "ความเจ็บปวด" }, { id: "priority_eating", text: "รับประทานอาหารได้สบาย" }, { id: "priority_recovery", text: "การฟื้นตัวเร็วและกลับสู่ชีวิตปกติหลังผ่าตัด" }], next: { priority_cost: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_pain: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_eating: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_recovery: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] } } },
              disease_hypertension: { question: "อะไรคือสิ่งสำคัญที่สุดสำหรับคุณในการรักษา?", options: [{ id: "priority_cost", text: "ค่าใช้จ่าย" }, { id: "priority_pain", text: "ความเจ็บปวด" }, { id: "priority_eating", text: "รับประทานอาหารได้สบาย" }, { id: "priority_recovery", text: "การฟื้นตัวเร็วและกลับสู่ชีวิตปกติหลังผ่าตัด" }], next: { priority_cost: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_pain: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_eating: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_recovery: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] } } },
              disease_osteoporosis: { question: "อะไรคือสิ่งสำคัญที่สุดสำหรับคุณในการรักษา?", options: [{ id: "priority_cost", text: "ค่าใช้จ่าย" }, { id: "priority_pain", text: "ความเจ็บปวด" }, { id: "priority_eating", text: "รับประทานอาหารได้สบาย" }, { id: "priority_recovery", text: "การฟื้นตัวเร็วและกลับสู่ชีวิตปกติหลังผ่าตัด" }], next: { priority_cost: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_pain: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_eating: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_recovery: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] } } },
              disease_heart: { question: "อะไรคือสิ่งสำคัญที่สุดสำหรับคุณในการรักษา?", options: [{ id: "priority_cost", text: "ค่าใช้จ่าย" }, { id: "priority_pain", text: "ความเจ็บปวด" }, { id: "priority_eating", text: "รับประทานอาหารได้สบาย" }, { id: "priority_recovery", text: "การฟื้นตัวเร็วและกลับสู่ชีวิตปกติหลังผ่าตัด" }], next: { priority_cost: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_pain: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_eating: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_recovery: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] } } },
              disease_none: { question: "อะไรคือสิ่งสำคัญที่สุดสำหรับคุณในการรักษา?", options: [{ id: "priority_cost", text: "ค่าใช้จ่าย" }, { id: "priority_pain", text: "ความเจ็บปวด" }, { id: "priority_eating", text: "รับประทานอาหารได้สบาย" }, { id: "priority_recovery", text: "การฟื้นตัวเร็วและกลับสู่ชีวิตปกติหลังผ่าตัด" }], next: { priority_cost: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_pain: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_eating: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_recovery: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] } } }
            }
          }
        }
      },
      missing_partial: {
        question: "ฟันบริเวณไหนหายไปหรือต้องถอน?",
        options: [
          { id: "location_front", text: "บริเวณฟันหน้า" },
          { id: "location_back", text: "บริเวณฟันกราม" },
          { id: "location_both", text: "ทั้งฟันหน้าและฟันกราม" }
        ],
        next: {
          location_front: {
            question: "คุณมีโรคประจำตัวหรือไม่?",
            options: [
              { id: "disease_diabetes", text: "เบาหวาน" },
              { id: "disease_hypertension", text: "ความดันโลหิตสูง" },
              { id: "disease_osteoporosis", text: "โรคกระดูกพรุน" },
              { id: "disease_heart", text: "โรคหัวใจ" },
              { id: "disease_none", text: "ไม่มี" }
            ],
            next: {
              disease_diabetes: { question: "อะไรคือสิ่งสำคัญที่สุดสำหรับคุณในการรักษา?", options: [{ id: "priority_cost", text: "ค่าใช้จ่าย" }, { id: "priority_pain", text: "ความเจ็บปวด" }, { id: "priority_eating", text: "รับประทานอาหารได้สบาย" }, { id: "priority_recovery", text: "การฟื้นตัวเร็วและกลับสู่ชีวิตปกติหลังผ่าตัด" }], next: { priority_cost: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_pain: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_eating: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_recovery: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] } } },
              disease_hypertension: { question: "อะไรคือสิ่งสำคัญที่สุดสำหรับคุณในการรักษา?", options: [{ id: "priority_cost", text: "ค่าใช้จ่าย" }, { id: "priority_pain", text: "ความเจ็บปวด" }, { id: "priority_eating", text: "รับประทานอาหารได้สบาย" }, { id: "priority_recovery", text: "การฟื้นตัวเร็วและกลับสู่ชีวิตปกติหลังผ่าตัด" }], next: { priority_cost: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_pain: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_eating: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_recovery: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] } } },
              disease_osteoporosis: { question: "อะไรคือสิ่งสำคัญที่สุดสำหรับคุณในการรักษา?", options: [{ id: "priority_cost", text: "ค่าใช้จ่าย" }, { id: "priority_pain", text: "ความเจ็บปวด" }, { id: "priority_eating", text: "รับประทานอาหารได้สบาย" }, { id: "priority_recovery", text: "การฟื้นตัวเร็วและกลับสู่ชีวิตปกติหลังผ่าตัด" }], next: { priority_cost: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_pain: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_eating: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_recovery: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] } } },
              disease_heart: { question: "อะไรคือสิ่งสำคัญที่สุดสำหรับคุณในการรักษา?", options: [{ id: "priority_cost", text: "ค่าใช้จ่าย" }, { id: "priority_pain", text: "ความเจ็บปวด" }, { id: "priority_eating", text: "รับประทานอาหารได้สบาย" }, { id: "priority_recovery", text: "การฟื้นตัวเร็วและกลับสู่ชีวิตปกติหลังผ่าตัด" }], next: { priority_cost: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_pain: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_eating: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_recovery: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] } } },
              disease_none: { question: "อะไรคือสิ่งสำคัญที่สุดสำหรับคุณในการรักษา?", options: [{ id: "priority_cost", text: "ค่าใช้จ่าย" }, { id: "priority_pain", text: "ความเจ็บปวด" }, { id: "priority_eating", text: "รับประทานอาหารได้สบาย" }, { id: "priority_recovery", text: "การฟื้นตัวเร็วและกลับสู่ชีวิตปกติหลังผ่าตัด" }], next: { priority_cost: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_pain: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_eating: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_recovery: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] } } }
            }
          },
          location_back: {
            question: "คุณมีโรคประจำตัวหรือไม่?",
            options: [
              { id: "disease_diabetes", text: "เบาหวาน" },
              { id: "disease_hypertension", text: "ความดันโลหิตสูง" },
              { id: "disease_osteoporosis", text: "โรคกระดูกพรุน" },
              { id: "disease_heart", text: "โรคหัวใจ" },
              { id: "disease_none", text: "ไม่มี" }
            ],
            next: {
              disease_diabetes: { question: "อะไรคือสิ่งสำคัญที่สุดสำหรับคุณในการรักษา?", options: [{ id: "priority_cost", text: "ค่าใช้จ่าย" }, { id: "priority_pain", text: "ความเจ็บปวด" }, { id: "priority_eating", text: "รับประทานอาหารได้สบาย" }, { id: "priority_recovery", text: "การฟื้นตัวเร็วและกลับสู่ชีวิตปกติหลังผ่าตัด" }], next: { priority_cost: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_pain: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_eating: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_recovery: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] } } },
              disease_hypertension: { question: "อะไรคือสิ่งสำคัญที่สุดสำหรับคุณในการรักษา?", options: [{ id: "priority_cost", text: "ค่าใช้จ่าย" }, { id: "priority_pain", text: "ความเจ็บปวด" }, { id: "priority_eating", text: "รับประทานอาหารได้สบาย" }, { id: "priority_recovery", text: "การฟื้นตัวเร็วและกลับสู่ชีวิตปกติหลังผ่าตัด" }], next: { priority_cost: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_pain: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_eating: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_recovery: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] } } },
              disease_osteoporosis: { question: "อะไรคือสิ่งสำคัญที่สุดสำหรับคุณในการรักษา?", options: [{ id: "priority_cost", text: "ค่าใช้จ่าย" }, { id: "priority_pain", text: "ความเจ็บปวด" }, { id: "priority_eating", text: "รับประทานอาหารได้สบาย" }, { id: "priority_recovery", text: "การฟื้นตัวเร็วและกลับสู่ชีวิตปกติหลังผ่าตัด" }], next: { priority_cost: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_pain: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_eating: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_recovery: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] } } },
              disease_heart: { question: "อะไรคือสิ่งสำคัญที่สุดสำหรับคุณในการรักษา?", options: [{ id: "priority_cost", text: "ค่าใช้จ่าย" }, { id: "priority_pain", text: "ความเจ็บปวด" }, { id: "priority_eating", text: "รับประทานอาหารได้สบาย" }, { id: "priority_recovery", text: "การฟื้นตัวเร็วและกลับสู่ชีวิตปกติหลังผ่าตัด" }], next: { priority_cost: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_pain: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_eating: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_recovery: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] } } },
              disease_none: { question: "อะไรคือสิ่งสำคัญที่สุดสำหรับคุณในการรักษา?", options: [{ id: "priority_cost", text: "ค่าใช้จ่าย" }, { id: "priority_pain", text: "ความเจ็บปวด" }, { id: "priority_eating", text: "รับประทานอาหารได้สบาย" }, { id: "priority_recovery", text: "การฟื้นตัวเร็วและกลับสู่ชีวิตปกติหลังผ่าตัด" }], next: { priority_cost: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_pain: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_eating: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_recovery: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] } } }
            }
          },
          location_both: {
            question: "คุณมีโรคประจำตัวหรือไม่?",
            options: [
              { id: "disease_diabetes", text: "เบาหวาน" },
              { id: "disease_hypertension", text: "ความดันโลหิตสูง" },
              { id: "disease_osteoporosis", text: "โรคกระดูกพรุน" },
              { id: "disease_heart", text: "โรคหัวใจ" },
              { id: "disease_none", text: "ไม่มี" }
            ],
            next: {
              disease_diabetes: { question: "อะไรคือสิ่งสำคัญที่สุดสำหรับคุณในการรักษา?", options: [{ id: "priority_cost", text: "ค่าใช้จ่าย" }, { id: "priority_pain", text: "ความเจ็บปวด" }, { id: "priority_eating", text: "รับประทานอาหารได้สบาย" }, { id: "priority_recovery", text: "การฟื้นตัวเร็วและกลับสู่ชีวิตปกติหลังผ่าตัด" }], next: { priority_cost: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_pain: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_eating: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_recovery: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] } } },
              disease_hypertension: { question: "อะไรคือสิ่งสำคัญที่สุดสำหรับคุณในการรักษา?", options: [{ id: "priority_cost", text: "ค่าใช้จ่าย" }, { id: "priority_pain", text: "ความเจ็บปวด" }, { id: "priority_eating", text: "รับประทานอาหารได้สบาย" }, { id: "priority_recovery", text: "การฟื้นตัวเร็วและกลับสู่ชีวิตปกติหลังผ่าตัด" }], next: { priority_cost: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_pain: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_eating: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_recovery: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] } } },
              disease_osteoporosis: { question: "อะไรคือสิ่งสำคัญที่สุดสำหรับคุณในการรักษา?", options: [{ id: "priority_cost", text: "ค่าใช้จ่าย" }, { id: "priority_pain", text: "ความเจ็บปวด" }, { id: "priority_eating", text: "รับประทานอาหารได้สบาย" }, { id: "priority_recovery", text: "การฟื้นตัวเร็วและกลับสู่ชีวิตปกติหลังผ่าตัด" }], next: { priority_cost: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_pain: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_eating: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_recovery: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] } } },
              disease_heart: { question: "อะไรคือสิ่งสำคัญที่สุดสำหรับคุณในการรักษา?", options: [{ id: "priority_cost", text: "ค่าใช้จ่าย" }, { id: "priority_pain", text: "ความเจ็บปวด" }, { id: "priority_eating", text: "รับประทานอาหารได้สบาย" }, { id: "priority_recovery", text: "การฟื้นตัวเร็วและกลับสู่ชีวิตปกติหลังผ่าตัด" }], next: { priority_cost: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_pain: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_eating: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_recovery: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] } } },
              disease_none: { question: "อะไรคือสิ่งสำคัญที่สุดสำหรับคุณในการรักษา?", options: [{ id: "priority_cost", text: "ค่าใช้จ่าย" }, { id: "priority_pain", text: "ความเจ็บปวด" }, { id: "priority_eating", text: "รับประทานอาหารได้สบาย" }, { id: "priority_recovery", text: "การฟื้นตัวเร็วและกลับสู่ชีวิตปกติหลังผ่าตัด" }], next: { priority_cost: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_pain: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_eating: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_recovery: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] } } }
            }
          }
        }
      },
      implant_revision: {
        question: "คุณใส่ฟันปลอมอยู่หรือไม่?",
        options: [
          { id: "denture_yes", text: "ใช่" },
          { id: "denture_no", text: "ไม่" }
        ],
        next: {
          denture_yes: {
            question: "คุณมีโรคประจำตัวหรือไม่?",
            options: [
              { id: "disease_diabetes", text: "เบาหวาน" },
              { id: "disease_hypertension", text: "ความดันโลหิตสูง" },
              { id: "disease_osteoporosis", text: "โรคกระดูกพรุน" },
              { id: "disease_heart", text: "โรคหัวใจ" },
              { id: "disease_none", text: "ไม่มี" }
            ],
            next: {
              disease_diabetes: { question: "อะไรคือสิ่งสำคัญที่สุดสำหรับคุณในการรักษา?", options: [{ id: "priority_cost", text: "ค่าใช้จ่าย" }, { id: "priority_pain", text: "ความเจ็บปวด" }, { id: "priority_eating", text: "รับประทานอาหารได้สบาย" }, { id: "priority_recovery", text: "การฟื้นตัวเร็วและกลับสู่ชีวิตปกติหลังผ่าตัด" }], next: { priority_cost: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_pain: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_eating: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_recovery: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] } } },
              disease_hypertension: { question: "อะไรคือสิ่งสำคัญที่สุดสำหรับคุณในการรักษา?", options: [{ id: "priority_cost", text: "ค่าใช้จ่าย" }, { id: "priority_pain", text: "ความเจ็บปวด" }, { id: "priority_eating", text: "รับประทานอาหารได้สบาย" }, { id: "priority_recovery", text: "การฟื้นตัวเร็วและกลับสู่ชีวิตปกติหลังผ่าตัด" }], next: { priority_cost: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_pain: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_eating: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_recovery: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] } } },
              disease_osteoporosis: { question: "อะไรคือสิ่งสำคัญที่สุดสำหรับคุณในการรักษา?", options: [{ id: "priority_cost", text: "ค่าใช้จ่าย" }, { id: "priority_pain", text: "ความเจ็บปวด" }, { id: "priority_eating", text: "รับประทานอาหารได้สบาย" }, { id: "priority_recovery", text: "การฟื้นตัวเร็วและกลับสู่ชีวิตปกติหลังผ่าตัด" }], next: { priority_cost: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_pain: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_eating: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_recovery: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] } } },
              disease_heart: { question: "อะไรคือสิ่งสำคัญที่สุดสำหรับคุณในการรักษา?", options: [{ id: "priority_cost", text: "ค่าใช้จ่าย" }, { id: "priority_pain", text: "ความเจ็บปวด" }, { id: "priority_eating", text: "รับประทานอาหารได้สบาย" }, { id: "priority_recovery", text: "การฟื้นตัวเร็วและกลับสู่ชีวิตปกติหลังผ่าตัด" }], next: { priority_cost: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_pain: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_eating: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_recovery: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] } } },
              disease_none: { question: "อะไรคือสิ่งสำคัญที่สุดสำหรับคุณในการรักษา?", options: [{ id: "priority_cost", text: "ค่าใช้จ่าย" }, { id: "priority_pain", text: "ความเจ็บปวด" }, { id: "priority_eating", text: "รับประทานอาหารได้สบาย" }, { id: "priority_recovery", text: "การฟื้นตัวเร็วและกลับสู่ชีวิตปกติหลังผ่าตัด" }], next: { priority_cost: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_pain: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_eating: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_recovery: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] } } }
            }
          },
          denture_no: {
            question: "คุณมีโรคประจำตัวหรือไม่?",
            options: [
              { id: "disease_diabetes", text: "เบาหวาน" },
              { id: "disease_hypertension", text: "ความดันโลหิตสูง" },
              { id: "disease_osteoporosis", text: "โรคกระดูกพรุน" },
              { id: "disease_heart", text: "โรคหัวใจ" },
              { id: "disease_none", text: "ไม่มี" }
            ],
            next: {
              disease_diabetes: { question: "อะไรคือสิ่งสำคัญที่สุดสำหรับคุณในการรักษา?", options: [{ id: "priority_cost", text: "ค่าใช้จ่าย" }, { id: "priority_pain", text: "ความเจ็บปวด" }, { id: "priority_eating", text: "รับประทานอาหารได้สบาย" }, { id: "priority_recovery", text: "การฟื้นตัวเร็วและกลับสู่ชีวิตปกติหลังผ่าตัด" }], next: { priority_cost: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_pain: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_eating: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_recovery: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] } } },
              disease_hypertension: { question: "อะไรคือสิ่งสำคัญที่สุดสำหรับคุณในการรักษา?", options: [{ id: "priority_cost", text: "ค่าใช้จ่าย" }, { id: "priority_pain", text: "ความเจ็บปวด" }, { id: "priority_eating", text: "รับประทานอาหารได้สบาย" }, { id: "priority_recovery", text: "การฟื้นตัวเร็วและกลับสู่ชีวิตปกติหลังผ่าตัด" }], next: { priority_cost: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_pain: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_eating: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_recovery: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] } } },
              disease_osteoporosis: { question: "อะไรคือสิ่งสำคัญที่สุดสำหรับคุณในการรักษา?", options: [{ id: "priority_cost", text: "ค่าใช้จ่าย" }, { id: "priority_pain", text: "ความเจ็บปวด" }, { id: "priority_eating", text: "รับประทานอาหารได้สบาย" }, { id: "priority_recovery", text: "การฟื้นตัวเร็วและกลับสู่ชีวิตปกติหลังผ่าตัด" }], next: { priority_cost: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_pain: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_eating: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_recovery: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] } } },
              disease_heart: { question: "อะไรคือสิ่งสำคัญที่สุดสำหรับคุณในการรักษา?", options: [{ id: "priority_cost", text: "ค่าใช้จ่าย" }, { id: "priority_pain", text: "ความเจ็บปวด" }, { id: "priority_eating", text: "รับประทานอาหารได้สบาย" }, { id: "priority_recovery", text: "การฟื้นตัวเร็วและกลับสู่ชีวิตปกติหลังผ่าตัด" }], next: { priority_cost: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_pain: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_eating: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_recovery: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] } } },
              disease_none: { question: "อะไรคือสิ่งสำคัญที่สุดสำหรับคุณในการรักษา?", options: [{ id: "priority_cost", text: "ค่าใช้จ่าย" }, { id: "priority_pain", text: "ความเจ็บปวด" }, { id: "priority_eating", text: "รับประทานอาหารได้สบาย" }, { id: "priority_recovery", text: "การฟื้นตัวเร็วและกลับสู่ชีวิตปกติหลังผ่าตัด" }], next: { priority_cost: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_pain: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_eating: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] }, priority_recovery: { question: "มีเหตุผลที่คุณลังเลในการรักษาหรือไม่?", options: [{ id: "hesitation_cost", text: "เพราะค่าใช้จ่าย" }, { id: "hesitation_fear", text: "เพราะความเจ็บปวด/กลัวทันตแพทย์" }, { id: "hesitation_clinic", text: "เพราะยากที่จะเลือกคลินิกที่เหมาะสม" }, { id: "hesitation_none", text: "ไม่มีเหตุผลพิเศษ" }] } } }
            }
          }
        }
      }
    }
  },

  // คำถามเกี่ยวกับเหงือก
  gum_issue: {
    question: "คุณมีอาการอะไร?",
    options: [
      { id: "gum_bleeding", text: "เหงือกมีเลือดออก" },
      { id: "gum_swelling", text: "เหงือกบวม" },
      { id: "gum_recession", text: "เหงือกร่น" },
      { id: "gum_wobbly", text: "ฟันโยก" }
    ],
    next: {
      gum_bleeding: {
        question: "เลือดออกเมื่อไหร่?",
        options: [
          { id: "bleeding_brushing", text: "เฉพาะตอนแปรงฟัน" },
          { id: "bleeding_often", text: "เลือดออกบ่อย" },
          { id: "bleeding_always", text: "เลือดออกแม้อยู่เฉยๆ" }
        ]
      },
      gum_swelling: {
        question: "มีอาการปวดร่วมกับบวมหรือไม่?",
        options: [
          { id: "swelling_pain_yes", text: "ใช่ เจ็บ" },
          { id: "swelling_pain_no", text: "ไม่ มีแค่บวม" }
        ]
      },
      gum_recession: {
        question: "ฟันเสียวหรือไวหรือไม่?",
        options: [
          { id: "recession_sensitive_yes", text: "ใช่ เสียว" },
          { id: "recession_sensitive_no", text: "ไม่" }
        ]
      },
      gum_wobbly: {
        question: "ฟันโยกแค่ไหน?",
        options: [
          { id: "wobbly_slight", text: "โยกเล็กน้อย" },
          { id: "wobbly_severe", text: "โยกมาก" }
        ]
      }
    }
  },

  // เกี่ยวกับการตรวจสุขภาพประจำ
  checkup: {
    question: "มีอะไรที่คุณกังวลเป็นพิเศษหรือไม่?",
    options: [
      { id: "checkup_prevention", text: "ป้องกันฟันผุ/โรคเหงือก" },
      { id: "checkup_cleaning", text: "ต้องการขูดหินปูน" },
      { id: "checkup_concern", text: "กังวลเรื่องฟันซี่ใดซี่หนึ่ง" },
      { id: "checkup_general", text: "ตรวจสุขภาพทั่วไปเท่านั้น" }
    ]
  }
};
