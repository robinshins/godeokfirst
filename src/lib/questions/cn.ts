import { LanguageQuestionTree } from './types';
export const QUESTION_TREE_CN: LanguageQuestionTree = {
  // 第一步：初步症状评估
  initial: {
    question: "您有什么症状或不适？",
    options: [
      { id: "pain", text: "我有疼痛" },
      { id: "aesthetic", text: "我想改善美观" },
      { id: "missing_tooth", text: "我缺牙了" },
      { id: "gum_issue", text: "我有牙龈问题" },
      { id: "checkup", text: "定期检查和预防" }
    ]
  },

  // 蛀牙/根管治疗相关问题（第一个问题）
  cavity_nerve: {
    question: "您目前的情况是什么？",
    options: [
      { id: "cavity_pain", text: "牙齿疼痛" },
      { id: "cavity_sensitive", text: "牙齿敏感" },
      { id: "cavity_broken", text: "牙齿破损" },
      { id: "cavity_eating", text: "吃东西时不舒服" },
      { id: "cavity_dark", text: "牙齿看起来发黑" },
      { id: "cavity_brushing", text: "刷牙时不舒服" }
    ],
    next: {
      cavity_pain: {
        question: "是某一颗牙齿不舒服，还是较大范围不舒服？",
        options: [
          { id: "specific_tooth", text: "某一颗牙齿不舒服" },
          { id: "wide_area", text: "左/右、上/下较大范围不舒服" }
        ]
      },
      cavity_sensitive: {
        question: "是某一颗牙齿不舒服，还是较大范围不舒服？",
        options: [
          { id: "specific_tooth", text: "某一颗牙齿不舒服" },
          { id: "wide_area", text: "左/右、上/下较大范围不舒服" }
        ]
      },
      cavity_broken: {
        question: "破损的牙齿疼吗？",
        options: [
          { id: "broken_painful", text: "是的，破损且疼痛" },
          { id: "broken_not_painful", text: "破损但不疼" }
        ]
      },
      cavity_eating: {
        question: "是某一颗牙齿不舒服，还是较大范围不舒服？",
        options: [
          { id: "specific_tooth", text: "某一颗牙齿不舒服" },
          { id: "wide_area", text: "左/右、上/下较大范围不舒服" }
        ]
      },
      cavity_dark: {
        question: "发黑的牙齿在哪里？",
        options: [
          { id: "dark_front", text: "前牙区域" },
          { id: "dark_back", text: "后牙区域" },
          { id: "dark_multiple", text: "多处发黑" }
        ]
      },
      cavity_brushing: {
        question: "是某一颗牙齿不舒服，还是较大范围不舒服？",
        options: [
          { id: "specific_tooth", text: "某一颗牙齿不舒服" },
          { id: "wide_area", text: "左/右、上/下较大范围不舒服" }
        ]
      }
    }
  },

  // 疼痛相关问题（一般）
  pain: {
    question: "您在什么情况下感到疼痛？",
    options: [
      { id: "pain_cold_hot", text: "吃冷热食物时" },
      { id: "pain_chewing", text: "咀嚼食物时" },
      { id: "pain_always", text: "即使静止也持续疼痛" },
      { id: "pain_wisdom", text: "智齿区域疼痛" }
    ],
    next: {
      pain_cold_hot: {
        question: "疼痛持续多久？",
        options: [
          { id: "pain_short", text: "短暂敏感后消失" },
          { id: "pain_long", text: "一旦开始会持续很长时间" },
          { id: "pain_getting_worse", text: "越来越严重" }
        ]
      },
      pain_chewing: {
        question: "哪个部位疼痛？",
        options: [
          { id: "pain_front", text: "前牙区域" },
          { id: "pain_back", text: "后牙区域" },
          { id: "pain_multiple", text: "多处疼痛" }
        ]
      },
      pain_always: {
        question: "有肿胀或脓液吗？",
        options: [
          { id: "pain_swelling_yes", text: "是的，有肿胀或脓液" },
          { id: "pain_swelling_no", text: "没有，只是疼痛" }
        ]
      },
      pain_wisdom: {
        question: "智齿疼痛是什么时候开始的？",
        options: [
          { id: "wisdom_recent", text: "最近几天内" },
          { id: "wisdom_recurring", text: "反复发作" },
          { id: "wisdom_swelling", text: "牙龈肿得很厉害" }
        ]
      }
    }
  },

  // 智齿相关问题（智齿咨询）
  wisdom_tooth: {
    question: "您的智齿目前是什么状态？",
    options: [
      { id: "wisdom_pain", text: "智齿区域疼痛" },
      { id: "wisdom_checkup", text: "不疼，但想检查一下" }
    ],
    next: {
      // 选择疼痛时 → 位置问题
      wisdom_pain: {
        question: "目前疼痛的是哪颗牙齿？",
        options: [
          { id: "wisdom_upper", text: "上颌智齿" },
          { id: "wisdom_lower", text: "下颌智齿" }
        ],
        next: {
          // 选择上颌智齿后 → 不适开始时间
          wisdom_upper: {
            question: "智齿的不适感是什么时候开始的？",
            options: [
              { id: "wisdom_first_time", text: "这是第一次" },
              { id: "wisdom_recurring", text: "以前有过类似的经历，好了之后这次又发生了" }
            ],
            next: {
              wisdom_first_time: {
                question: "关于智齿治疗，您最担心什么？",
                options: [
                  { id: "worry_possible", text: "是否可以拔牙" },
                  { id: "worry_fear", text: "对拔牙手术的恐惧" },
                  { id: "worry_daily", text: "拔牙后日常生活的不便" }
                ],
                next: {
                  worry_possible: {
                    question: "您曾做过心血管手术或有全身性疾病吗？",
                    options: [
                      { id: "disease_medication", text: "我每天服药（请携带药袋）" },
                      { id: "disease_heart", text: "我曾做过心脏或血管手术" },
                      { id: "disease_bp_diabetes", text: "高血压/糖尿病" },
                      { id: "disease_osteoporosis", text: "骨质疏松症" },
                      { id: "disease_other", text: "其他全身性疾病" },
                      { id: "disease_none", text: "没有" }
                    ]
                  },
                  worry_fear: {
                    question: "您曾做过心血管手术或有全身性疾病吗？",
                    options: [
                      { id: "disease_medication", text: "我每天服药（请携带药袋）" },
                      { id: "disease_heart", text: "我曾做过心脏或血管手术" },
                      { id: "disease_bp_diabetes", text: "高血压/糖尿病" },
                      { id: "disease_osteoporosis", text: "骨质疏松症" },
                      { id: "disease_other", text: "其他全身性疾病" },
                      { id: "disease_none", text: "没有" }
                    ]
                  },
                  worry_daily: {
                    question: "您曾做过心血管手术或有全身性疾病吗？",
                    options: [
                      { id: "disease_medication", text: "我每天服药（请携带药袋）" },
                      { id: "disease_heart", text: "我曾做过心脏或血管手术" },
                      { id: "disease_bp_diabetes", text: "高血压/糖尿病" },
                      { id: "disease_osteoporosis", text: "骨质疏松症" },
                      { id: "disease_other", text: "其他全身性疾病" },
                      { id: "disease_none", text: "没有" }
                    ]
                  }
                }
              },
              wisdom_recurring: {
                question: "关于智齿治疗，您最担心什么？",
                options: [
                  { id: "worry_possible", text: "是否可以拔牙" },
                  { id: "worry_fear", text: "对拔牙手术的恐惧" },
                  { id: "worry_daily", text: "拔牙后日常生活的不便" }
                ],
                next: {
                  worry_possible: {
                    question: "您曾做过心血管手术或有全身性疾病吗？",
                    options: [
                      { id: "disease_medication", text: "我每天服药（请携带药袋）" },
                      { id: "disease_heart", text: "我曾做过心脏或血管手术" },
                      { id: "disease_bp_diabetes", text: "高血压/糖尿病" },
                      { id: "disease_osteoporosis", text: "骨质疏松症" },
                      { id: "disease_other", text: "其他全身性疾病" },
                      { id: "disease_none", text: "没有" }
                    ]
                  },
                  worry_fear: {
                    question: "您曾做过心血管手术或有全身性疾病吗？",
                    options: [
                      { id: "disease_medication", text: "我每天服药（请携带药袋）" },
                      { id: "disease_heart", text: "我曾做过心脏或血管手术" },
                      { id: "disease_bp_diabetes", text: "高血压/糖尿病" },
                      { id: "disease_osteoporosis", text: "骨质疏松症" },
                      { id: "disease_other", text: "其他全身性疾病" },
                      { id: "disease_none", text: "没有" }
                    ]
                  },
                  worry_daily: {
                    question: "您曾做过心血管手术或有全身性疾病吗？",
                    options: [
                      { id: "disease_medication", text: "我每天服药（请携带药袋）" },
                      { id: "disease_heart", text: "我曾做过心脏或血管手术" },
                      { id: "disease_bp_diabetes", text: "高血压/糖尿病" },
                      { id: "disease_osteoporosis", text: "骨质疏松症" },
                      { id: "disease_other", text: "其他全身性疾病" },
                      { id: "disease_none", text: "没有" }
                    ]
                  }
                }
              }
            }
          },
          // 选择下颌智齿后 → 不适开始时间
          wisdom_lower: {
            question: "智齿的不适感是什么时候开始的？",
            options: [
              { id: "wisdom_first_time", text: "这是第一次" },
              { id: "wisdom_recurring", text: "以前有过类似的经历，好了之后这次又发生了" }
            ],
            next: {
              wisdom_first_time: {
                question: "关于智齿治疗，您最担心什么？",
                options: [
                  { id: "worry_possible", text: "是否可以拔牙" },
                  { id: "worry_fear", text: "对拔牙手术的恐惧" },
                  { id: "worry_daily", text: "拔牙后日常生活的不便" }
                ],
                next: {
                  worry_possible: {
                    question: "您曾做过心血管手术或有全身性疾病吗？",
                    options: [
                      { id: "disease_medication", text: "我每天服药（请携带药袋）" },
                      { id: "disease_heart", text: "我曾做过心脏或血管手术" },
                      { id: "disease_bp_diabetes", text: "高血压/糖尿病" },
                      { id: "disease_osteoporosis", text: "骨质疏松症" },
                      { id: "disease_other", text: "其他全身性疾病" },
                      { id: "disease_none", text: "没有" }
                    ]
                  },
                  worry_fear: {
                    question: "您曾做过心血管手术或有全身性疾病吗？",
                    options: [
                      { id: "disease_medication", text: "我每天服药（请携带药袋）" },
                      { id: "disease_heart", text: "我曾做过心脏或血管手术" },
                      { id: "disease_bp_diabetes", text: "高血压/糖尿病" },
                      { id: "disease_osteoporosis", text: "骨质疏松症" },
                      { id: "disease_other", text: "其他全身性疾病" },
                      { id: "disease_none", text: "没有" }
                    ]
                  },
                  worry_daily: {
                    question: "您曾做过心血管手术或有全身性疾病吗？",
                    options: [
                      { id: "disease_medication", text: "我每天服药（请携带药袋）" },
                      { id: "disease_heart", text: "我曾做过心脏或血管手术" },
                      { id: "disease_bp_diabetes", text: "高血压/糖尿病" },
                      { id: "disease_osteoporosis", text: "骨质疏松症" },
                      { id: "disease_other", text: "其他全身性疾病" },
                      { id: "disease_none", text: "没有" }
                    ]
                  }
                }
              },
              wisdom_recurring: {
                question: "关于智齿治疗，您最担心什么？",
                options: [
                  { id: "worry_possible", text: "是否可以拔牙" },
                  { id: "worry_fear", text: "对拔牙手术的恐惧" },
                  { id: "worry_daily", text: "拔牙后日常生活的不便" }
                ],
                next: {
                  worry_possible: {
                    question: "您曾做过心血管手术或有全身性疾病吗？",
                    options: [
                      { id: "disease_medication", text: "我每天服药（请携带药袋）" },
                      { id: "disease_heart", text: "我曾做过心脏或血管手术" },
                      { id: "disease_bp_diabetes", text: "高血压/糖尿病" },
                      { id: "disease_osteoporosis", text: "骨质疏松症" },
                      { id: "disease_other", text: "其他全身性疾病" },
                      { id: "disease_none", text: "没有" }
                    ]
                  },
                  worry_fear: {
                    question: "您曾做过心血管手术或有全身性疾病吗？",
                    options: [
                      { id: "disease_medication", text: "我每天服药（请携带药袋）" },
                      { id: "disease_heart", text: "我曾做过心脏或血管手术" },
                      { id: "disease_bp_diabetes", text: "高血压/糖尿病" },
                      { id: "disease_osteoporosis", text: "骨质疏松症" },
                      { id: "disease_other", text: "其他全身性疾病" },
                      { id: "disease_none", text: "没有" }
                    ]
                  },
                  worry_daily: {
                    question: "您曾做过心血管手术或有全身性疾病吗？",
                    options: [
                      { id: "disease_medication", text: "我每天服药（请携带药袋）" },
                      { id: "disease_heart", text: "我曾做过心脏或血管手术" },
                      { id: "disease_bp_diabetes", text: "高血压/糖尿病" },
                      { id: "disease_osteoporosis", text: "骨质疏松症" },
                      { id: "disease_other", text: "其他全身性疾病" },
                      { id: "disease_none", text: "没有" }
                    ]
                  }
                }
              }
            }
          }
        }
      },
      // 选择"不痛但想检查"时 → 犹豫原因问题 → 最终推荐
      wisdom_checkup: {
        question: "如果要接受智齿治疗，您最担心的是什么？",
        options: [
          { id: "checkup_worry_possible", text: "是否可以拔牙" },
          { id: "checkup_worry_fear", text: "对拔牙治疗的恐惧" },
          { id: "checkup_worry_daily", text: "拔牙后日常生活的不便" }
        ],
        next: {
          checkup_worry_possible: {
            question: "您曾做过心血管手术或有全身性疾病吗？",
            options: [
              { id: "disease_medication", text: "我每天服药（请携带药袋）" },
              { id: "disease_heart", text: "我曾做过心脏或血管手术" },
              { id: "disease_bp_diabetes", text: "高血压/糖尿病" },
              { id: "disease_osteoporosis", text: "骨质疏松症" },
              { id: "disease_other", text: "其他全身性疾病" },
              { id: "disease_none", text: "没有" }
            ],
            next: {
              disease_medication: {
                question: "检查时还有其他想一起检查的项目吗？",
                options: [
                  { id: "extra_cavity", text: "龋齿检查" },
                  { id: "extra_gum", text: "牙龈检查" },
                  { id: "extra_scaling", text: "洗牙" },
                  { id: "extra_none", text: "没有，只想检查智齿" }
                ]
              },
              disease_heart: {
                question: "检查时还有其他想一起检查的项目吗？",
                options: [
                  { id: "extra_cavity", text: "龋齿检查" },
                  { id: "extra_gum", text: "牙龈检查" },
                  { id: "extra_scaling", text: "洗牙" },
                  { id: "extra_none", text: "没有，只想检查智齿" }
                ]
              },
              disease_bp_diabetes: {
                question: "检查时还有其他想一起检查的项目吗？",
                options: [
                  { id: "extra_cavity", text: "龋齿检查" },
                  { id: "extra_gum", text: "牙龈检查" },
                  { id: "extra_scaling", text: "洗牙" },
                  { id: "extra_none", text: "没有，只想检查智齿" }
                ]
              },
              disease_osteoporosis: {
                question: "检查时还有其他想一起检查的项目吗？",
                options: [
                  { id: "extra_cavity", text: "龋齿检查" },
                  { id: "extra_gum", text: "牙龈检查" },
                  { id: "extra_scaling", text: "洗牙" },
                  { id: "extra_none", text: "没有，只想检查智齿" }
                ]
              },
              disease_other: {
                question: "检查时还有其他想一起检查的项目吗？",
                options: [
                  { id: "extra_cavity", text: "龋齿检查" },
                  { id: "extra_gum", text: "牙龈检查" },
                  { id: "extra_scaling", text: "洗牙" },
                  { id: "extra_none", text: "没有，只想检查智齿" }
                ]
              },
              disease_none: {
                question: "检查时还有其他想一起检查的项目吗？",
                options: [
                  { id: "extra_cavity", text: "龋齿检查" },
                  { id: "extra_gum", text: "牙龈检查" },
                  { id: "extra_scaling", text: "洗牙" },
                  { id: "extra_none", text: "没有，只想检查智齿" }
                ]
              }
            }
          },
          checkup_worry_fear: {
            question: "您曾做过心血管手术或有全身性疾病吗？",
            options: [
              { id: "disease_medication", text: "我每天服药（请携带药袋）" },
              { id: "disease_heart", text: "我曾做过心脏或血管手术" },
              { id: "disease_bp_diabetes", text: "高血压/糖尿病" },
              { id: "disease_osteoporosis", text: "骨质疏松症" },
              { id: "disease_other", text: "其他全身性疾病" },
              { id: "disease_none", text: "没有" }
            ],
            next: {
              disease_medication: {
                question: "检查时还有其他想一起检查的项目吗？",
                options: [
                  { id: "extra_cavity", text: "龋齿检查" },
                  { id: "extra_gum", text: "牙龈检查" },
                  { id: "extra_scaling", text: "洗牙" },
                  { id: "extra_none", text: "没有，只想检查智齿" }
                ]
              },
              disease_heart: {
                question: "检查时还有其他想一起检查的项目吗？",
                options: [
                  { id: "extra_cavity", text: "龋齿检查" },
                  { id: "extra_gum", text: "牙龈检查" },
                  { id: "extra_scaling", text: "洗牙" },
                  { id: "extra_none", text: "没有，只想检查智齿" }
                ]
              },
              disease_bp_diabetes: {
                question: "检查时还有其他想一起检查的项目吗？",
                options: [
                  { id: "extra_cavity", text: "龋齿检查" },
                  { id: "extra_gum", text: "牙龈检查" },
                  { id: "extra_scaling", text: "洗牙" },
                  { id: "extra_none", text: "没有，只想检查智齿" }
                ]
              },
              disease_osteoporosis: {
                question: "检查时还有其他想一起检查的项目吗？",
                options: [
                  { id: "extra_cavity", text: "龋齿检查" },
                  { id: "extra_gum", text: "牙龈检查" },
                  { id: "extra_scaling", text: "洗牙" },
                  { id: "extra_none", text: "没有，只想检查智齿" }
                ]
              },
              disease_other: {
                question: "检查时还有其他想一起检查的项目吗？",
                options: [
                  { id: "extra_cavity", text: "龋齿检查" },
                  { id: "extra_gum", text: "牙龈检查" },
                  { id: "extra_scaling", text: "洗牙" },
                  { id: "extra_none", text: "没有，只想检查智齿" }
                ]
              },
              disease_none: {
                question: "检查时还有其他想一起检查的项目吗？",
                options: [
                  { id: "extra_cavity", text: "龋齿检查" },
                  { id: "extra_gum", text: "牙龈检查" },
                  { id: "extra_scaling", text: "洗牙" },
                  { id: "extra_none", text: "没有，只想检查智齿" }
                ]
              }
            }
          },
          checkup_worry_daily: {
            question: "您曾做过心血管手术或有全身性疾病吗？",
            options: [
              { id: "disease_medication", text: "我每天服药（请携带药袋）" },
              { id: "disease_heart", text: "我曾做过心脏或血管手术" },
              { id: "disease_bp_diabetes", text: "高血压/糖尿病" },
              { id: "disease_osteoporosis", text: "骨质疏松症" },
              { id: "disease_other", text: "其他全身性疾病" },
              { id: "disease_none", text: "没有" }
            ],
            next: {
              disease_medication: {
                question: "检查时还有其他想一起检查的项目吗？",
                options: [
                  { id: "extra_cavity", text: "龋齿检查" },
                  { id: "extra_gum", text: "牙龈检查" },
                  { id: "extra_scaling", text: "洗牙" },
                  { id: "extra_none", text: "没有，只想检查智齿" }
                ]
              },
              disease_heart: {
                question: "检查时还有其他想一起检查的项目吗？",
                options: [
                  { id: "extra_cavity", text: "龋齿检查" },
                  { id: "extra_gum", text: "牙龈检查" },
                  { id: "extra_scaling", text: "洗牙" },
                  { id: "extra_none", text: "没有，只想检查智齿" }
                ]
              },
              disease_bp_diabetes: {
                question: "检查时还有其他想一起检查的项目吗？",
                options: [
                  { id: "extra_cavity", text: "龋齿检查" },
                  { id: "extra_gum", text: "牙龈检查" },
                  { id: "extra_scaling", text: "洗牙" },
                  { id: "extra_none", text: "没有，只想检查智齿" }
                ]
              },
              disease_osteoporosis: {
                question: "检查时还有其他想一起检查的项目吗？",
                options: [
                  { id: "extra_cavity", text: "龋齿检查" },
                  { id: "extra_gum", text: "牙龈检查" },
                  { id: "extra_scaling", text: "洗牙" },
                  { id: "extra_none", text: "没有，只想检查智齿" }
                ]
              },
              disease_other: {
                question: "检查时还有其他想一起检查的项目吗？",
                options: [
                  { id: "extra_cavity", text: "龋齿检查" },
                  { id: "extra_gum", text: "牙龈检查" },
                  { id: "extra_scaling", text: "洗牙" },
                  { id: "extra_none", text: "没有，只想检查智齿" }
                ]
              },
              disease_none: {
                question: "检查时还有其他想一起检查的项目吗？",
                options: [
                  { id: "extra_cavity", text: "龋齿检查" },
                  { id: "extra_gum", text: "牙龈检查" },
                  { id: "extra_scaling", text: "洗牙" },
                  { id: "extra_none", text: "没有，只想检查智齿" }
                ]
              }
            }
          }
        }
      }
    }
  },

  // 美观相关问题
  aesthetic: {
    question: "您想改善哪方面？",
    options: [
      { id: "aesthetic_color", text: "牙齿发黄或变色" },
      { id: "aesthetic_shape", text: "牙齿的形状或大小" },
      { id: "aesthetic_gap", text: "牙齿之间的缝隙" },
      { id: "aesthetic_alignment", text: "牙齿排列不整齐" }
    ],
    next: {
      aesthetic_color: {
        question: "变色程度和原因是什么？",
        options: [
          { id: "color_coffee", text: "咖啡/香烟造成的着色" },
          { id: "color_aging", text: "因老化导致的整体变色" },
          { id: "color_single", text: "只有特定牙齿颜色变深" }
        ]
      },
      aesthetic_shape: {
        question: "您有什么问题？",
        options: [
          { id: "shape_small", text: "牙齿太小" },
          { id: "shape_chipped", text: "牙齿破损或磨损" },
          { id: "shape_uneven", text: "牙齿长度不均匀" }
        ]
      },
      aesthetic_gap: {
        question: "缝隙在哪个位置？",
        options: [
          { id: "gap_front", text: "门牙之间" },
          { id: "gap_multiple", text: "多处有缝隙" }
        ]
      },
      aesthetic_alignment: {
        question: "排列问题的程度如何？",
        options: [
          { id: "alignment_mild", text: "轻微歪斜" },
          { id: "alignment_moderate", text: "中度错位" },
          { id: "alignment_severe", text: "严重歪斜" }
        ]
      }
    }
  },

  // 牙齿缺失相关问题（种植牙咨询用）- Q1：目前状态
  missing_tooth: {
    question: "您目前的牙齿状态如何？",
    options: [
      { id: "missing_upper_all", text: "上牙全部缺失或需要拔除" },
      { id: "missing_lower_all", text: "下牙全部缺失或需要拔除" },
      { id: "missing_all", text: "几乎所有牙齿缺失或需要拔除" },
      { id: "missing_partial", text: "10颗以内的部分多颗牙齿缺失或需要拔除" },
      { id: "implant_revision", text: "需要种植牙翻修手术" }
    ],
    next: {
      // Q2：是否佩戴假牙（所有选项通用）
      missing_upper_all: {
        question: "您目前佩戴假牙吗？",
        options: [
          { id: "denture_yes", text: "是" },
          { id: "denture_no", text: "否" }
        ],
        next: {
          // Q3：确认全身性疾病
          denture_yes: {
            question: "您目前有全身性疾病吗？",
            options: [
              { id: "disease_diabetes", text: "糖尿病" },
              { id: "disease_hypertension", text: "高血压" },
              { id: "disease_osteoporosis", text: "骨质疏松症" },
              { id: "disease_heart", text: "心脏疾病" },
              { id: "disease_none", text: "没有" }
            ],
            next: {
              // Q4: 治疗中重要的部分（Q5的作用）
              disease_diabetes: {
                question: "您认为治疗中最重要的是什么？",
                options: [
                  { id: "priority_cost", text: "费用" },
                  { id: "priority_pain", text: "疼痛" },
                  { id: "priority_eating", text: "舒适的用餐" },
                  { id: "priority_recovery", text: "手术后快速恢复和日常生活回归" }
                ],
                next: {
                  // Q5: 犹豫的原因（Q6的作用）
                  priority_cost: {
                    question: "到目前为止您犹豫治疗的原因是什么？",
                    options: [
                      { id: "hesitation_cost", text: "因为费用" },
                      { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" },
                      { id: "hesitation_clinic", text: "因为难以选择合适的牙科" },
                      { id: "hesitation_none", text: "没有特别的原因" }
                    ]
                  },
                  priority_pain: {
                    question: "到目前为止您犹豫治疗的原因是什么？",
                    options: [
                      { id: "hesitation_cost", text: "因为费用" },
                      { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" },
                      { id: "hesitation_clinic", text: "因为难以选择合适的牙科" },
                      { id: "hesitation_none", text: "没有特别的原因" }
                    ]
                  },
                  priority_eating: {
                    question: "到目前为止您犹豫治疗的原因是什么？",
                    options: [
                      { id: "hesitation_cost", text: "因为费用" },
                      { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" },
                      { id: "hesitation_clinic", text: "因为难以选择合适的牙科" },
                      { id: "hesitation_none", text: "没有特别的原因" }
                    ]
                  },
                  priority_recovery: {
                    question: "到目前为止您犹豫治疗的原因是什么？",
                    options: [
                      { id: "hesitation_cost", text: "因为费用" },
                      { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" },
                      { id: "hesitation_clinic", text: "因为难以选择合适的牙科" },
                      { id: "hesitation_none", text: "没有特别的原因" }
                    ]
                  }
                }
              },
              disease_hypertension: {
                question: "您认为治疗中最重要的是什么？",
                options: [
                  { id: "priority_cost", text: "费用" },
                  { id: "priority_pain", text: "疼痛" },
                  { id: "priority_eating", text: "舒适的用餐" },
                  { id: "priority_recovery", text: "手术后快速恢复和日常生活回归" }
                ],
                next: {
                  priority_cost: {
                    question: "到目前为止您犹豫治疗的原因是什么？",
                    options: [
                      { id: "hesitation_cost", text: "因为费用" },
                      { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" },
                      { id: "hesitation_clinic", text: "因为难以选择合适的牙科" },
                      { id: "hesitation_none", text: "没有特别的原因" }
                    ]
                  },
                  priority_pain: {
                    question: "到目前为止您犹豫治疗的原因是什么？",
                    options: [
                      { id: "hesitation_cost", text: "因为费用" },
                      { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" },
                      { id: "hesitation_clinic", text: "因为难以选择合适的牙科" },
                      { id: "hesitation_none", text: "没有特别的原因" }
                    ]
                  },
                  priority_eating: {
                    question: "到目前为止您犹豫治疗的原因是什么？",
                    options: [
                      { id: "hesitation_cost", text: "因为费用" },
                      { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" },
                      { id: "hesitation_clinic", text: "因为难以选择合适的牙科" },
                      { id: "hesitation_none", text: "没有特别的原因" }
                    ]
                  },
                  priority_recovery: {
                    question: "到目前为止您犹豫治疗的原因是什么？",
                    options: [
                      { id: "hesitation_cost", text: "因为费用" },
                      { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" },
                      { id: "hesitation_clinic", text: "因为难以选择合适的牙科" },
                      { id: "hesitation_none", text: "没有特别的原因" }
                    ]
                  }
                }
              },
              disease_osteoporosis: {
                question: "您认为治疗中最重要的是什么？",
                options: [
                  { id: "priority_cost", text: "费用" },
                  { id: "priority_pain", text: "疼痛" },
                  { id: "priority_eating", text: "舒适的用餐" },
                  { id: "priority_recovery", text: "手术后快速恢复和日常生活回归" }
                ],
                next: {
                  priority_cost: {
                    question: "到目前为止您犹豫治疗的原因是什么？",
                    options: [
                      { id: "hesitation_cost", text: "因为费用" },
                      { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" },
                      { id: "hesitation_clinic", text: "因为难以选择合适的牙科" },
                      { id: "hesitation_none", text: "没有特别的原因" }
                    ]
                  },
                  priority_pain: {
                    question: "到目前为止您犹豫治疗的原因是什么？",
                    options: [
                      { id: "hesitation_cost", text: "因为费用" },
                      { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" },
                      { id: "hesitation_clinic", text: "因为难以选择合适的牙科" },
                      { id: "hesitation_none", text: "没有特别的原因" }
                    ]
                  },
                  priority_eating: {
                    question: "到目前为止您犹豫治疗的原因是什么？",
                    options: [
                      { id: "hesitation_cost", text: "因为费用" },
                      { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" },
                      { id: "hesitation_clinic", text: "因为难以选择合适的牙科" },
                      { id: "hesitation_none", text: "没有特别的原因" }
                    ]
                  },
                  priority_recovery: {
                    question: "到目前为止您犹豫治疗的原因是什么？",
                    options: [
                      { id: "hesitation_cost", text: "因为费用" },
                      { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" },
                      { id: "hesitation_clinic", text: "因为难以选择合适的牙科" },
                      { id: "hesitation_none", text: "没有特别的原因" }
                    ]
                  }
                }
              },
              disease_heart: {
                question: "您认为治疗中最重要的是什么？",
                options: [
                  { id: "priority_cost", text: "费用" },
                  { id: "priority_pain", text: "疼痛" },
                  { id: "priority_eating", text: "舒适的用餐" },
                  { id: "priority_recovery", text: "手术后快速恢复和日常生活回归" }
                ],
                next: {
                  priority_cost: {
                    question: "到目前为止您犹豫治疗的原因是什么？",
                    options: [
                      { id: "hesitation_cost", text: "因为费用" },
                      { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" },
                      { id: "hesitation_clinic", text: "因为难以选择合适的牙科" },
                      { id: "hesitation_none", text: "没有特别的原因" }
                    ]
                  },
                  priority_pain: {
                    question: "到目前为止您犹豫治疗的原因是什么？",
                    options: [
                      { id: "hesitation_cost", text: "因为费用" },
                      { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" },
                      { id: "hesitation_clinic", text: "因为难以选择合适的牙科" },
                      { id: "hesitation_none", text: "没有特别的原因" }
                    ]
                  },
                  priority_eating: {
                    question: "到目前为止您犹豫治疗的原因是什么？",
                    options: [
                      { id: "hesitation_cost", text: "因为费用" },
                      { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" },
                      { id: "hesitation_clinic", text: "因为难以选择合适的牙科" },
                      { id: "hesitation_none", text: "没有特别的原因" }
                    ]
                  },
                  priority_recovery: {
                    question: "到目前为止您犹豫治疗的原因是什么？",
                    options: [
                      { id: "hesitation_cost", text: "因为费用" },
                      { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" },
                      { id: "hesitation_clinic", text: "因为难以选择合适的牙科" },
                      { id: "hesitation_none", text: "没有特别的原因" }
                    ]
                  }
                }
              },
              disease_none: {
                question: "您认为治疗中最重要的是什么？",
                options: [
                  { id: "priority_cost", text: "费用" },
                  { id: "priority_pain", text: "疼痛" },
                  { id: "priority_eating", text: "舒适的用餐" },
                  { id: "priority_recovery", text: "手术后快速恢复和日常生活回归" }
                ],
                next: {
                  priority_cost: {
                    question: "到目前为止您犹豫治疗的原因是什么？",
                    options: [
                      { id: "hesitation_cost", text: "因为费用" },
                      { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" },
                      { id: "hesitation_clinic", text: "因为难以选择合适的牙科" },
                      { id: "hesitation_none", text: "没有特别的原因" }
                    ]
                  },
                  priority_pain: {
                    question: "到目前为止您犹豫治疗的原因是什么？",
                    options: [
                      { id: "hesitation_cost", text: "因为费用" },
                      { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" },
                      { id: "hesitation_clinic", text: "因为难以选择合适的牙科" },
                      { id: "hesitation_none", text: "没有特别的原因" }
                    ]
                  },
                  priority_eating: {
                    question: "到目前为止您犹豫治疗的原因是什么？",
                    options: [
                      { id: "hesitation_cost", text: "因为费用" },
                      { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" },
                      { id: "hesitation_clinic", text: "因为难以选择合适的牙科" },
                      { id: "hesitation_none", text: "没有特别的原因" }
                    ]
                  },
                  priority_recovery: {
                    question: "到目前为止您犹豫治疗的原因是什么？",
                    options: [
                      { id: "hesitation_cost", text: "因为费用" },
                      { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" },
                      { id: "hesitation_clinic", text: "因为难以选择合适的牙科" },
                      { id: "hesitation_none", text: "没有特别的原因" }
                    ]
                  }
                }
              }
            }
          },
          denture_no: {
            question: "您目前有全身性疾病吗？",
            options: [
              { id: "disease_diabetes", text: "糖尿病" },
              { id: "disease_hypertension", text: "高血压" },
              { id: "disease_osteoporosis", text: "骨质疏松症" },
              { id: "disease_heart", text: "心脏疾病" },
              { id: "disease_none", text: "没有" }
            ],
            next: {
              disease_diabetes: {
                question: "您认为治疗中最重要的是什么？",
                options: [
                  { id: "priority_cost", text: "费用" },
                  { id: "priority_pain", text: "疼痛" },
                  { id: "priority_eating", text: "舒适的用餐" },
                  { id: "priority_recovery", text: "手术后快速恢复和日常生活回归" }
                ],
                next: {
                  priority_cost: {
                    question: "到目前为止您犹豫治疗的原因是什么？",
                    options: [
                      { id: "hesitation_cost", text: "因为费用" },
                      { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" },
                      { id: "hesitation_clinic", text: "因为难以选择合适的牙科" },
                      { id: "hesitation_none", text: "没有特别的原因" }
                    ]
                  },
                  priority_pain: {
                    question: "到目前为止您犹豫治疗的原因是什么？",
                    options: [
                      { id: "hesitation_cost", text: "因为费用" },
                      { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" },
                      { id: "hesitation_clinic", text: "因为难以选择合适的牙科" },
                      { id: "hesitation_none", text: "没有特别的原因" }
                    ]
                  },
                  priority_eating: {
                    question: "到目前为止您犹豫治疗的原因是什么？",
                    options: [
                      { id: "hesitation_cost", text: "因为费用" },
                      { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" },
                      { id: "hesitation_clinic", text: "因为难以选择合适的牙科" },
                      { id: "hesitation_none", text: "没有特别的原因" }
                    ]
                  },
                  priority_recovery: {
                    question: "到目前为止您犹豫治疗的原因是什么？",
                    options: [
                      { id: "hesitation_cost", text: "因为费用" },
                      { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" },
                      { id: "hesitation_clinic", text: "因为难以选择合适的牙科" },
                      { id: "hesitation_none", text: "没有特别的原因" }
                    ]
                  }
                }
              },
              disease_hypertension: {
                question: "您认为治疗中最重要的是什么？",
                options: [
                  { id: "priority_cost", text: "费用" },
                  { id: "priority_pain", text: "疼痛" },
                  { id: "priority_eating", text: "舒适的用餐" },
                  { id: "priority_recovery", text: "手术后快速恢复和日常生活回归" }
                ],
                next: {
                  priority_cost: {
                    question: "到目前为止您犹豫治疗的原因是什么？",
                    options: [
                      { id: "hesitation_cost", text: "因为费用" },
                      { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" },
                      { id: "hesitation_clinic", text: "因为难以选择合适的牙科" },
                      { id: "hesitation_none", text: "没有特别的原因" }
                    ]
                  },
                  priority_pain: {
                    question: "到目前为止您犹豫治疗的原因是什么？",
                    options: [
                      { id: "hesitation_cost", text: "因为费用" },
                      { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" },
                      { id: "hesitation_clinic", text: "因为难以选择合适的牙科" },
                      { id: "hesitation_none", text: "没有特别的原因" }
                    ]
                  },
                  priority_eating: {
                    question: "到目前为止您犹豫治疗的原因是什么？",
                    options: [
                      { id: "hesitation_cost", text: "因为费用" },
                      { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" },
                      { id: "hesitation_clinic", text: "因为难以选择合适的牙科" },
                      { id: "hesitation_none", text: "没有特别的原因" }
                    ]
                  },
                  priority_recovery: {
                    question: "到目前为止您犹豫治疗的原因是什么？",
                    options: [
                      { id: "hesitation_cost", text: "因为费用" },
                      { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" },
                      { id: "hesitation_clinic", text: "因为难以选择合适的牙科" },
                      { id: "hesitation_none", text: "没有特别的原因" }
                    ]
                  }
                }
              },
              disease_osteoporosis: {
                question: "您认为治疗中最重要的是什么？",
                options: [
                  { id: "priority_cost", text: "费用" },
                  { id: "priority_pain", text: "疼痛" },
                  { id: "priority_eating", text: "舒适的用餐" },
                  { id: "priority_recovery", text: "手术后快速恢复和日常生活回归" }
                ],
                next: {
                  priority_cost: {
                    question: "到目前为止您犹豫治疗的原因是什么？",
                    options: [
                      { id: "hesitation_cost", text: "因为费用" },
                      { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" },
                      { id: "hesitation_clinic", text: "因为难以选择合适的牙科" },
                      { id: "hesitation_none", text: "没有特别的原因" }
                    ]
                  },
                  priority_pain: {
                    question: "到目前为止您犹豫治疗的原因是什么？",
                    options: [
                      { id: "hesitation_cost", text: "因为费用" },
                      { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" },
                      { id: "hesitation_clinic", text: "因为难以选择合适的牙科" },
                      { id: "hesitation_none", text: "没有特别的原因" }
                    ]
                  },
                  priority_eating: {
                    question: "到目前为止您犹豫治疗的原因是什么？",
                    options: [
                      { id: "hesitation_cost", text: "因为费用" },
                      { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" },
                      { id: "hesitation_clinic", text: "因为难以选择合适的牙科" },
                      { id: "hesitation_none", text: "没有特别的原因" }
                    ]
                  },
                  priority_recovery: {
                    question: "到目前为止您犹豫治疗的原因是什么？",
                    options: [
                      { id: "hesitation_cost", text: "因为费用" },
                      { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" },
                      { id: "hesitation_clinic", text: "因为难以选择合适的牙科" },
                      { id: "hesitation_none", text: "没有特别的原因" }
                    ]
                  }
                }
              },
              disease_heart: {
                question: "您认为治疗中最重要的是什么？",
                options: [
                  { id: "priority_cost", text: "费用" },
                  { id: "priority_pain", text: "疼痛" },
                  { id: "priority_eating", text: "舒适的用餐" },
                  { id: "priority_recovery", text: "手术后快速恢复和日常生活回归" }
                ],
                next: {
                  priority_cost: {
                    question: "到目前为止您犹豫治疗的原因是什么？",
                    options: [
                      { id: "hesitation_cost", text: "因为费用" },
                      { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" },
                      { id: "hesitation_clinic", text: "因为难以选择合适的牙科" },
                      { id: "hesitation_none", text: "没有特别的原因" }
                    ]
                  },
                  priority_pain: {
                    question: "到目前为止您犹豫治疗的原因是什么？",
                    options: [
                      { id: "hesitation_cost", text: "因为费用" },
                      { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" },
                      { id: "hesitation_clinic", text: "因为难以选择合适的牙科" },
                      { id: "hesitation_none", text: "没有特别的原因" }
                    ]
                  },
                  priority_eating: {
                    question: "到目前为止您犹豫治疗的原因是什么？",
                    options: [
                      { id: "hesitation_cost", text: "因为费用" },
                      { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" },
                      { id: "hesitation_clinic", text: "因为难以选择合适的牙科" },
                      { id: "hesitation_none", text: "没有特别的原因" }
                    ]
                  },
                  priority_recovery: {
                    question: "到目前为止您犹豫治疗的原因是什么？",
                    options: [
                      { id: "hesitation_cost", text: "因为费用" },
                      { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" },
                      { id: "hesitation_clinic", text: "因为难以选择合适的牙科" },
                      { id: "hesitation_none", text: "没有特别的原因" }
                    ]
                  }
                }
              },
              disease_none: {
                question: "您认为治疗中最重要的是什么？",
                options: [
                  { id: "priority_cost", text: "费用" },
                  { id: "priority_pain", text: "疼痛" },
                  { id: "priority_eating", text: "舒适的用餐" },
                  { id: "priority_recovery", text: "手术后快速恢复和日常生活回归" }
                ],
                next: {
                  priority_cost: {
                    question: "到目前为止您犹豫治疗的原因是什么？",
                    options: [
                      { id: "hesitation_cost", text: "因为费用" },
                      { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" },
                      { id: "hesitation_clinic", text: "因为难以选择合适的牙科" },
                      { id: "hesitation_none", text: "没有特别的原因" }
                    ]
                  },
                  priority_pain: {
                    question: "到目前为止您犹豫治疗的原因是什么？",
                    options: [
                      { id: "hesitation_cost", text: "因为费用" },
                      { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" },
                      { id: "hesitation_clinic", text: "因为难以选择合适的牙科" },
                      { id: "hesitation_none", text: "没有特别的原因" }
                    ]
                  },
                  priority_eating: {
                    question: "到目前为止您犹豫治疗的原因是什么？",
                    options: [
                      { id: "hesitation_cost", text: "因为费用" },
                      { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" },
                      { id: "hesitation_clinic", text: "因为难以选择合适的牙科" },
                      { id: "hesitation_none", text: "没有特别的原因" }
                    ]
                  },
                  priority_recovery: {
                    question: "到目前为止您犹豫治疗的原因是什么？",
                    options: [
                      { id: "hesitation_cost", text: "因为费用" },
                      { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" },
                      { id: "hesitation_clinic", text: "因为难以选择合适的牙科" },
                      { id: "hesitation_none", text: "没有特别的原因" }
                    ]
                  }
                }
              }
            }
          }
        }
      },
      // 其他选项也适用相同的流程（与missing_upper_all相同的结构）
      missing_all: {
        question: "您目前佩戴假牙吗？",
        options: [
          { id: "denture_yes", text: "是" },
          { id: "denture_no", text: "否" }
        ],
        next: {
          denture_yes: {
            question: "您目前有全身性疾病吗？",
            options: [
              { id: "disease_diabetes", text: "糖尿病" },
              { id: "disease_hypertension", text: "高血压" },
              { id: "disease_osteoporosis", text: "骨质疏松症" },
              { id: "disease_heart", text: "心脏疾病" },
              { id: "disease_none", text: "没有" }
            ],
            next: {
              disease_diabetes: { question: "您认为治疗中最重要的是什么？", options: [{ id: "priority_cost", text: "费用" }, { id: "priority_pain", text: "疼痛" }, { id: "priority_eating", text: "舒适的用餐" }, { id: "priority_recovery", text: "手术后快速恢复和日常生活回归" }], next: { priority_cost: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_pain: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_eating: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_recovery: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] } } },
              disease_hypertension: { question: "您认为治疗中最重要的是什么？", options: [{ id: "priority_cost", text: "费用" }, { id: "priority_pain", text: "疼痛" }, { id: "priority_eating", text: "舒适的用餐" }, { id: "priority_recovery", text: "手术后快速恢复和日常生活回归" }], next: { priority_cost: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_pain: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_eating: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_recovery: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] } } },
              disease_osteoporosis: { question: "您认为治疗中最重要的是什么？", options: [{ id: "priority_cost", text: "费用" }, { id: "priority_pain", text: "疼痛" }, { id: "priority_eating", text: "舒适的用餐" }, { id: "priority_recovery", text: "手术后快速恢复和日常生活回归" }], next: { priority_cost: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_pain: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_eating: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_recovery: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] } } },
              disease_heart: { question: "您认为治疗中最重要的是什么？", options: [{ id: "priority_cost", text: "费用" }, { id: "priority_pain", text: "疼痛" }, { id: "priority_eating", text: "舒适的用餐" }, { id: "priority_recovery", text: "手术后快速恢复和日常生活回归" }], next: { priority_cost: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_pain: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_eating: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_recovery: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] } } },
              disease_none: { question: "您认为治疗中最重要的是什么？", options: [{ id: "priority_cost", text: "费用" }, { id: "priority_pain", text: "疼痛" }, { id: "priority_eating", text: "舒适的用餐" }, { id: "priority_recovery", text: "手术后快速恢复和日常生活回归" }], next: { priority_cost: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_pain: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_eating: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_recovery: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] } } }
            }
          },
          denture_no: {
            question: "您目前有全身性疾病吗？",
            options: [
              { id: "disease_diabetes", text: "糖尿病" },
              { id: "disease_hypertension", text: "高血压" },
              { id: "disease_osteoporosis", text: "骨质疏松症" },
              { id: "disease_heart", text: "心脏疾病" },
              { id: "disease_none", text: "没有" }
            ],
            next: {
              disease_diabetes: { question: "您认为治疗中最重要的是什么？", options: [{ id: "priority_cost", text: "费用" }, { id: "priority_pain", text: "疼痛" }, { id: "priority_eating", text: "舒适的用餐" }, { id: "priority_recovery", text: "手术后快速恢复和日常生活回归" }], next: { priority_cost: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_pain: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_eating: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_recovery: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] } } },
              disease_hypertension: { question: "您认为治疗中最重要的是什么？", options: [{ id: "priority_cost", text: "费用" }, { id: "priority_pain", text: "疼痛" }, { id: "priority_eating", text: "舒适的用餐" }, { id: "priority_recovery", text: "手术后快速恢复和日常生活回归" }], next: { priority_cost: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_pain: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_eating: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_recovery: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] } } },
              disease_osteoporosis: { question: "您认为治疗中最重要的是什么？", options: [{ id: "priority_cost", text: "费用" }, { id: "priority_pain", text: "疼痛" }, { id: "priority_eating", text: "舒适的用餐" }, { id: "priority_recovery", text: "手术后快速恢复和日常生活回归" }], next: { priority_cost: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_pain: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_eating: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_recovery: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] } } },
              disease_heart: { question: "您认为治疗中最重要的是什么？", options: [{ id: "priority_cost", text: "费用" }, { id: "priority_pain", text: "疼痛" }, { id: "priority_eating", text: "舒适的用餐" }, { id: "priority_recovery", text: "手术后快速恢复和日常生活回归" }], next: { priority_cost: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_pain: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_eating: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_recovery: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] } } },
              disease_none: { question: "您认为治疗中最重要的是什么？", options: [{ id: "priority_cost", text: "费用" }, { id: "priority_pain", text: "疼痛" }, { id: "priority_eating", text: "舒适的用餐" }, { id: "priority_recovery", text: "手术后快速恢复和日常生活回归" }], next: { priority_cost: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_pain: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_eating: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_recovery: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] } } }
            }
          }
        }
      },
      missing_lower_all: {
        question: "您目前佩戴假牙吗？",
        options: [
          { id: "denture_yes", text: "是" },
          { id: "denture_no", text: "否" }
        ],
        next: {
          denture_yes: {
            question: "您目前有全身性疾病吗？",
            options: [
              { id: "disease_diabetes", text: "糖尿病" },
              { id: "disease_hypertension", text: "高血压" },
              { id: "disease_osteoporosis", text: "骨质疏松症" },
              { id: "disease_heart", text: "心脏疾病" },
              { id: "disease_none", text: "没有" }
            ],
            next: {
              disease_diabetes: { question: "您认为治疗中最重要的是什么？", options: [{ id: "priority_cost", text: "费用" }, { id: "priority_pain", text: "疼痛" }, { id: "priority_eating", text: "舒适的用餐" }, { id: "priority_recovery", text: "手术后快速恢复和日常生活回归" }], next: { priority_cost: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_pain: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_eating: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_recovery: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] } } },
              disease_hypertension: { question: "您认为治疗中最重要的是什么？", options: [{ id: "priority_cost", text: "费用" }, { id: "priority_pain", text: "疼痛" }, { id: "priority_eating", text: "舒适的用餐" }, { id: "priority_recovery", text: "手术后快速恢复和日常生活回归" }], next: { priority_cost: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_pain: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_eating: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_recovery: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] } } },
              disease_osteoporosis: { question: "您认为治疗中最重要的是什么？", options: [{ id: "priority_cost", text: "费用" }, { id: "priority_pain", text: "疼痛" }, { id: "priority_eating", text: "舒适的用餐" }, { id: "priority_recovery", text: "手术后快速恢复和日常生活回归" }], next: { priority_cost: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_pain: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_eating: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_recovery: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] } } },
              disease_heart: { question: "您认为治疗中最重要的是什么？", options: [{ id: "priority_cost", text: "费用" }, { id: "priority_pain", text: "疼痛" }, { id: "priority_eating", text: "舒适的用餐" }, { id: "priority_recovery", text: "手术后快速恢复和日常生活回归" }], next: { priority_cost: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_pain: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_eating: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_recovery: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] } } },
              disease_none: { question: "您认为治疗中最重要的是什么？", options: [{ id: "priority_cost", text: "费用" }, { id: "priority_pain", text: "疼痛" }, { id: "priority_eating", text: "舒适的用餐" }, { id: "priority_recovery", text: "手术后快速恢复和日常生活回归" }], next: { priority_cost: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_pain: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_eating: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_recovery: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] } } }
            }
          },
          denture_no: {
            question: "您目前有全身性疾病吗？",
            options: [
              { id: "disease_diabetes", text: "糖尿病" },
              { id: "disease_hypertension", text: "高血压" },
              { id: "disease_osteoporosis", text: "骨质疏松症" },
              { id: "disease_heart", text: "心脏疾病" },
              { id: "disease_none", text: "没有" }
            ],
            next: {
              disease_diabetes: { question: "您认为治疗中最重要的是什么？", options: [{ id: "priority_cost", text: "费用" }, { id: "priority_pain", text: "疼痛" }, { id: "priority_eating", text: "舒适的用餐" }, { id: "priority_recovery", text: "手术后快速恢复和日常生活回归" }], next: { priority_cost: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_pain: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_eating: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_recovery: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] } } },
              disease_hypertension: { question: "您认为治疗中最重要的是什么？", options: [{ id: "priority_cost", text: "费用" }, { id: "priority_pain", text: "疼痛" }, { id: "priority_eating", text: "舒适的用餐" }, { id: "priority_recovery", text: "手术后快速恢复和日常生活回归" }], next: { priority_cost: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_pain: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_eating: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_recovery: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] } } },
              disease_osteoporosis: { question: "您认为治疗中最重要的是什么？", options: [{ id: "priority_cost", text: "费用" }, { id: "priority_pain", text: "疼痛" }, { id: "priority_eating", text: "舒适的用餐" }, { id: "priority_recovery", text: "手术后快速恢复和日常生活回归" }], next: { priority_cost: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_pain: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_eating: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_recovery: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] } } },
              disease_heart: { question: "您认为治疗中最重要的是什么？", options: [{ id: "priority_cost", text: "费用" }, { id: "priority_pain", text: "疼痛" }, { id: "priority_eating", text: "舒适的用餐" }, { id: "priority_recovery", text: "手术后快速恢复和日常生活回归" }], next: { priority_cost: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_pain: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_eating: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_recovery: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] } } },
              disease_none: { question: "您认为治疗中最重要的是什么？", options: [{ id: "priority_cost", text: "费用" }, { id: "priority_pain", text: "疼痛" }, { id: "priority_eating", text: "舒适的用餐" }, { id: "priority_recovery", text: "手术后快速恢复和日常生活回归" }], next: { priority_cost: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_pain: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_eating: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_recovery: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] } } }
            }
          }
        }
      },
      missing_partial: {
        question: "哪个部位的牙齿缺失或计划拔牙？",
        options: [
          { id: "location_front", text: "前牙" },
          { id: "location_back", text: "后牙" },
          { id: "location_both", text: "前牙和后牙都有" }
        ],
        next: {
          location_front: {
            question: "您目前有全身性疾病吗？",
            options: [
              { id: "disease_diabetes", text: "糖尿病" },
              { id: "disease_hypertension", text: "高血压" },
              { id: "disease_osteoporosis", text: "骨质疏松症" },
              { id: "disease_heart", text: "心脏疾病" },
              { id: "disease_none", text: "没有" }
            ],
            next: {
              disease_diabetes: { question: "您认为治疗中最重要的是什么？", options: [{ id: "priority_cost", text: "费用" }, { id: "priority_pain", text: "疼痛" }, { id: "priority_eating", text: "舒适的用餐" }, { id: "priority_recovery", text: "手术后快速恢复和日常生活回归" }], next: { priority_cost: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_pain: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_eating: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_recovery: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] } } },
              disease_hypertension: { question: "您认为治疗中最重要的是什么？", options: [{ id: "priority_cost", text: "费用" }, { id: "priority_pain", text: "疼痛" }, { id: "priority_eating", text: "舒适的用餐" }, { id: "priority_recovery", text: "手术后快速恢复和日常生活回归" }], next: { priority_cost: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_pain: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_eating: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_recovery: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] } } },
              disease_osteoporosis: { question: "您认为治疗中最重要的是什么？", options: [{ id: "priority_cost", text: "费用" }, { id: "priority_pain", text: "疼痛" }, { id: "priority_eating", text: "舒适的用餐" }, { id: "priority_recovery", text: "手术后快速恢复和日常生活回归" }], next: { priority_cost: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_pain: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_eating: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_recovery: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] } } },
              disease_heart: { question: "您认为治疗中最重要的是什么？", options: [{ id: "priority_cost", text: "费用" }, { id: "priority_pain", text: "疼痛" }, { id: "priority_eating", text: "舒适的用餐" }, { id: "priority_recovery", text: "手术后快速恢复和日常生活回归" }], next: { priority_cost: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_pain: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_eating: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_recovery: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] } } },
              disease_none: { question: "您认为治疗中最重要的是什么？", options: [{ id: "priority_cost", text: "费用" }, { id: "priority_pain", text: "疼痛" }, { id: "priority_eating", text: "舒适的用餐" }, { id: "priority_recovery", text: "手术后快速恢复和日常生活回归" }], next: { priority_cost: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_pain: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_eating: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_recovery: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] } } }
            }
          },
          location_back: {
            question: "您目前有全身性疾病吗？",
            options: [
              { id: "disease_diabetes", text: "糖尿病" },
              { id: "disease_hypertension", text: "高血压" },
              { id: "disease_osteoporosis", text: "骨质疏松症" },
              { id: "disease_heart", text: "心脏疾病" },
              { id: "disease_none", text: "没有" }
            ],
            next: {
              disease_diabetes: { question: "您认为治疗中最重要的是什么？", options: [{ id: "priority_cost", text: "费用" }, { id: "priority_pain", text: "疼痛" }, { id: "priority_eating", text: "舒适的用餐" }, { id: "priority_recovery", text: "手术后快速恢复和日常生活回归" }], next: { priority_cost: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_pain: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_eating: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_recovery: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] } } },
              disease_hypertension: { question: "您认为治疗中最重要的是什么？", options: [{ id: "priority_cost", text: "费用" }, { id: "priority_pain", text: "疼痛" }, { id: "priority_eating", text: "舒适的用餐" }, { id: "priority_recovery", text: "手术后快速恢复和日常生活回归" }], next: { priority_cost: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_pain: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_eating: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_recovery: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] } } },
              disease_osteoporosis: { question: "您认为治疗中最重要的是什么？", options: [{ id: "priority_cost", text: "费用" }, { id: "priority_pain", text: "疼痛" }, { id: "priority_eating", text: "舒适的用餐" }, { id: "priority_recovery", text: "手术后快速恢复和日常生活回归" }], next: { priority_cost: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_pain: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_eating: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_recovery: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] } } },
              disease_heart: { question: "您认为治疗中最重要的是什么？", options: [{ id: "priority_cost", text: "费用" }, { id: "priority_pain", text: "疼痛" }, { id: "priority_eating", text: "舒适的用餐" }, { id: "priority_recovery", text: "手术后快速恢复和日常生活回归" }], next: { priority_cost: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_pain: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_eating: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_recovery: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] } } },
              disease_none: { question: "您认为治疗中最重要的是什么？", options: [{ id: "priority_cost", text: "费用" }, { id: "priority_pain", text: "疼痛" }, { id: "priority_eating", text: "舒适的用餐" }, { id: "priority_recovery", text: "手术后快速恢复和日常生活回归" }], next: { priority_cost: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_pain: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_eating: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_recovery: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] } } }
            }
          },
          location_both: {
            question: "您目前有全身性疾病吗？",
            options: [
              { id: "disease_diabetes", text: "糖尿病" },
              { id: "disease_hypertension", text: "高血压" },
              { id: "disease_osteoporosis", text: "骨质疏松症" },
              { id: "disease_heart", text: "心脏疾病" },
              { id: "disease_none", text: "没有" }
            ],
            next: {
              disease_diabetes: { question: "您认为治疗中最重要的是什么？", options: [{ id: "priority_cost", text: "费用" }, { id: "priority_pain", text: "疼痛" }, { id: "priority_eating", text: "舒适的用餐" }, { id: "priority_recovery", text: "手术后快速恢复和日常生活回归" }], next: { priority_cost: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_pain: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_eating: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_recovery: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] } } },
              disease_hypertension: { question: "您认为治疗中最重要的是什么？", options: [{ id: "priority_cost", text: "费用" }, { id: "priority_pain", text: "疼痛" }, { id: "priority_eating", text: "舒适的用餐" }, { id: "priority_recovery", text: "手术后快速恢复和日常生活回归" }], next: { priority_cost: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_pain: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_eating: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_recovery: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] } } },
              disease_osteoporosis: { question: "您认为治疗中最重要的是什么？", options: [{ id: "priority_cost", text: "费用" }, { id: "priority_pain", text: "疼痛" }, { id: "priority_eating", text: "舒适的用餐" }, { id: "priority_recovery", text: "手术后快速恢复和日常生活回归" }], next: { priority_cost: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_pain: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_eating: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_recovery: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] } } },
              disease_heart: { question: "您认为治疗中最重要的是什么？", options: [{ id: "priority_cost", text: "费用" }, { id: "priority_pain", text: "疼痛" }, { id: "priority_eating", text: "舒适的用餐" }, { id: "priority_recovery", text: "手术后快速恢复和日常生活回归" }], next: { priority_cost: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_pain: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_eating: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_recovery: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] } } },
              disease_none: { question: "您认为治疗中最重要的是什么？", options: [{ id: "priority_cost", text: "费用" }, { id: "priority_pain", text: "疼痛" }, { id: "priority_eating", text: "舒适的用餐" }, { id: "priority_recovery", text: "手术后快速恢复和日常生活回归" }], next: { priority_cost: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_pain: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_eating: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_recovery: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] } } }
            }
          }
        }
      },
      implant_revision: {
        question: "您目前佩戴假牙吗？",
        options: [
          { id: "denture_yes", text: "是" },
          { id: "denture_no", text: "否" }
        ],
        next: {
          denture_yes: {
            question: "您目前有全身性疾病吗？",
            options: [
              { id: "disease_diabetes", text: "糖尿病" },
              { id: "disease_hypertension", text: "高血压" },
              { id: "disease_osteoporosis", text: "骨质疏松症" },
              { id: "disease_heart", text: "心脏疾病" },
              { id: "disease_none", text: "没有" }
            ],
            next: {
              disease_diabetes: { question: "您认为治疗中最重要的是什么？", options: [{ id: "priority_cost", text: "费用" }, { id: "priority_pain", text: "疼痛" }, { id: "priority_eating", text: "舒适的用餐" }, { id: "priority_recovery", text: "手术后快速恢复和日常生活回归" }], next: { priority_cost: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_pain: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_eating: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_recovery: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] } } },
              disease_hypertension: { question: "您认为治疗中最重要的是什么？", options: [{ id: "priority_cost", text: "费用" }, { id: "priority_pain", text: "疼痛" }, { id: "priority_eating", text: "舒适的用餐" }, { id: "priority_recovery", text: "手术后快速恢复和日常生活回归" }], next: { priority_cost: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_pain: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_eating: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_recovery: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] } } },
              disease_osteoporosis: { question: "您认为治疗中最重要的是什么？", options: [{ id: "priority_cost", text: "费用" }, { id: "priority_pain", text: "疼痛" }, { id: "priority_eating", text: "舒适的用餐" }, { id: "priority_recovery", text: "手术后快速恢复和日常生活回归" }], next: { priority_cost: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_pain: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_eating: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_recovery: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] } } },
              disease_heart: { question: "您认为治疗中最重要的是什么？", options: [{ id: "priority_cost", text: "费用" }, { id: "priority_pain", text: "疼痛" }, { id: "priority_eating", text: "舒适的用餐" }, { id: "priority_recovery", text: "手术后快速恢复和日常生活回归" }], next: { priority_cost: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_pain: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_eating: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_recovery: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] } } },
              disease_none: { question: "您认为治疗中最重要的是什么？", options: [{ id: "priority_cost", text: "费用" }, { id: "priority_pain", text: "疼痛" }, { id: "priority_eating", text: "舒适的用餐" }, { id: "priority_recovery", text: "手术后快速恢复和日常生活回归" }], next: { priority_cost: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_pain: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_eating: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_recovery: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] } } }
            }
          },
          denture_no: {
            question: "您目前有全身性疾病吗？",
            options: [
              { id: "disease_diabetes", text: "糖尿病" },
              { id: "disease_hypertension", text: "高血压" },
              { id: "disease_osteoporosis", text: "骨质疏松症" },
              { id: "disease_heart", text: "心脏疾病" },
              { id: "disease_none", text: "没有" }
            ],
            next: {
              disease_diabetes: { question: "您认为治疗中最重要的是什么？", options: [{ id: "priority_cost", text: "费用" }, { id: "priority_pain", text: "疼痛" }, { id: "priority_eating", text: "舒适的用餐" }, { id: "priority_recovery", text: "手术后快速恢复和日常生活回归" }], next: { priority_cost: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_pain: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_eating: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_recovery: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] } } },
              disease_hypertension: { question: "您认为治疗中最重要的是什么？", options: [{ id: "priority_cost", text: "费用" }, { id: "priority_pain", text: "疼痛" }, { id: "priority_eating", text: "舒适的用餐" }, { id: "priority_recovery", text: "手术后快速恢复和日常生活回归" }], next: { priority_cost: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_pain: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_eating: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_recovery: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] } } },
              disease_osteoporosis: { question: "您认为治疗中最重要的是什么？", options: [{ id: "priority_cost", text: "费用" }, { id: "priority_pain", text: "疼痛" }, { id: "priority_eating", text: "舒适的用餐" }, { id: "priority_recovery", text: "手术后快速恢复和日常生活回归" }], next: { priority_cost: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_pain: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_eating: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_recovery: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] } } },
              disease_heart: { question: "您认为治疗中最重要的是什么？", options: [{ id: "priority_cost", text: "费用" }, { id: "priority_pain", text: "疼痛" }, { id: "priority_eating", text: "舒适的用餐" }, { id: "priority_recovery", text: "手术后快速恢复和日常生活回归" }], next: { priority_cost: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_pain: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_eating: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_recovery: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] } } },
              disease_none: { question: "您认为治疗中最重要的是什么？", options: [{ id: "priority_cost", text: "费用" }, { id: "priority_pain", text: "疼痛" }, { id: "priority_eating", text: "舒适的用餐" }, { id: "priority_recovery", text: "手术后快速恢复和日常生活回归" }], next: { priority_cost: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_pain: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_eating: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] }, priority_recovery: { question: "到目前为止您犹豫治疗的原因是什么？", options: [{ id: "hesitation_cost", text: "因为费用" }, { id: "hesitation_fear", text: "因为疼痛/牙科恐惧症" }, { id: "hesitation_clinic", text: "因为难以选择合适的牙科" }, { id: "hesitation_none", text: "没有特别的原因" }] } } }
            }
          }
        }
      }
    }
  },

  // 牙龈相关问题
  gum_issue: {
    question: "您有什么症状？",
    options: [
      { id: "gum_bleeding", text: "牙龈出血" },
      { id: "gum_swelling", text: "牙龈肿胀" },
      { id: "gum_recession", text: "牙龈萎缩" },
      { id: "gum_wobbly", text: "牙齿松动" }
    ],
    next: {
      gum_bleeding: {
        question: "什么时候会出血？",
        options: [
          { id: "bleeding_brushing", text: "只在刷牙时" },
          { id: "bleeding_often", text: "经常出血" },
          { id: "bleeding_always", text: "不动也会出血" }
        ]
      },
      gum_swelling: {
        question: "肿胀的同时也有疼痛吗？",
        options: [
          { id: "swelling_pain_yes", text: "是的，很疼" },
          { id: "swelling_pain_no", text: "不，只是肿胀" }
        ]
      },
      gum_recession: {
        question: "牙齿敏感吗？",
        options: [
          { id: "recession_sensitive_yes", text: "是的，很敏感" },
          { id: "recession_sensitive_no", text: "不" }
        ]
      },
      gum_wobbly: {
        question: "松动程度如何？",
        options: [
          { id: "wobbly_slight", text: "轻微松动" },
          { id: "wobbly_severe", text: "严重松动" }
        ]
      }
    }
  },

  // 定期检查相关
  checkup: {
    question: "有特别担心的部分吗？",
    options: [
      { id: "checkup_prevention", text: "预防蛀牙/牙龈疾病" },
      { id: "checkup_cleaning", text: "想做洁牙" },
      { id: "checkup_concern", text: "担心特定的牙齿" },
      { id: "checkup_general", text: "只做全面检查" }
    ]
  }
};
