import { LanguageQuestionTree } from './types';
export const QUESTION_TREE_JP: LanguageQuestionTree = {
  // 第1段階：初期症状の把握
  initial: {
    question: "どのような症状や不快感がありますか？",
    options: [
      { id: "pain", text: "痛みがあります" },
      { id: "aesthetic", text: "審美的に改善したいです" },
      { id: "missing_tooth", text: "歯が抜けました" },
      { id: "gum_issue", text: "歯茎に問題があります" },
      { id: "checkup", text: "定期検診および予防" }
    ]
  },

  // 虫歯/神経治療関連の質問（最初の質問）
  cavity_nerve: {
    question: "現在、お困りの症状は何ですか？",
    options: [
      { id: "cavity_pain", text: "歯が痛いです" },
      { id: "cavity_sensitive", text: "歯がしみます" },
      { id: "cavity_broken", text: "歯が欠けました" },
      { id: "cavity_eating", text: "食事の時に不便です" },
      { id: "cavity_dark", text: "歯が黒ずんで見えます" },
      { id: "cavity_brushing", text: "歯磨きの時に不便です" }
    ],
    next: {
      cavity_pain: {
        question: "特定の歯一本が気になりますか、それとも広範囲が気になりますか？",
        options: [
          { id: "specific_tooth", text: "特定の歯一本が気になります" },
          { id: "wide_area", text: "左/右、上/下の広範囲が気になります" }
        ]
      },
      cavity_sensitive: {
        question: "特定の歯一本が気になりますか、それとも広範囲が気になりますか？",
        options: [
          { id: "specific_tooth", text: "特定の歯一本が気になります" },
          { id: "wide_area", text: "左/右、上/下の広範囲が気になります" }
        ]
      },
      cavity_broken: {
        question: "欠けた歯は痛みますか？",
        options: [
          { id: "broken_painful", text: "はい、欠けていて痛いです" },
          { id: "broken_not_painful", text: "欠けていますが、痛みはありません" }
        ]
      },
      cavity_eating: {
        question: "特定の歯一本が気になりますか、それとも広範囲が気になりますか？",
        options: [
          { id: "specific_tooth", text: "特定の歯一本が気になります" },
          { id: "wide_area", text: "左/右、上/下の広範囲が気になります" }
        ]
      },
      cavity_dark: {
        question: "黒ずんで見える歯はどこにありますか？",
        options: [
          { id: "dark_front", text: "前歯の部分" },
          { id: "dark_back", text: "奥歯の部分" },
          { id: "dark_multiple", text: "数カ所が黒ずんで見えます" }
        ]
      },
      cavity_brushing: {
        question: "特定の歯一本が気になりますか、それとも広範囲が気になりますか？",
        options: [
          { id: "specific_tooth", text: "特定の歯一本が気になります" },
          { id: "wide_area", text: "左/右、上/下の広範囲が気になります" }
        ]
      }
    }
  },

  // 痛み関連の質問（一般）
  pain: {
    question: "どのような時に痛みを感じますか？",
    options: [
      { id: "pain_cold_hot", text: "冷たいものや熱いものでしみる時" },
      { id: "pain_chewing", text: "食べ物を噛む時" },
      { id: "pain_always", text: "何もしなくてもずっと痛いです" },
      { id: "pain_wisdom", text: "親知らずのあたりが痛いです" }
    ],
    next: {
      pain_cold_hot: {
        question: "痛みはどのくらい続きますか？",
        options: [
          { id: "pain_short", text: "一瞬しみて、すぐに消えます" },
          { id: "pain_long", text: "一度しむと長く続きます" },
          { id: "pain_getting_worse", text: "だんだんひどくなっています" }
        ]
      },
      pain_chewing: {
        question: "どの部位が痛みますか？",
        options: [
          { id: "pain_front", text: "前歯の部分" },
          { id: "pain_back", text: "奥歯の部分" },
          { id: "pain_multiple", text: "数カ所が痛みます" }
        ]
      },
      pain_always: {
        question: "腫れや膿はありますか？",
        options: [
          { id: "pain_swelling_yes", text: "はい、腫れや膿があります" },
          { id: "pain_swelling_no", text: "いいえ、痛みだけあります" }
        ]
      },
      pain_wisdom: {
        question: "親知らずの痛みはいつから始まりましたか？",
        options: [
          { id: "wisdom_recent", text: "ここ数日の間" },
          { id: "wisdom_recurring", text: "頻繁に繰り返します" },
          { id: "wisdom_swelling", text: "歯茎がひどく腫れました" }
        ]
      }
    }
  },

  // 親知らず関連の質問（親知らず相談用）
  wisdom_tooth: {
    question: "現在、親知らずはどのような状態ですか？",
    options: [
      { id: "wisdom_pain", text: "親知らずのあたりが痛いです" },
      { id: "wisdom_checkup", text: "痛みはありませんが、チェックを受けたいです" }
    ],
    next: {
      // 痛い選択時 → 位置の質問
      wisdom_pain: {
        question: "現在、痛む歯はどれですか？",
        options: [
          { id: "wisdom_upper", text: "上の親知らず" },
          { id: "wisdom_lower", text: "下の親知らず" }
        ],
        next: {
          // 上の親知らず選択後 → いつから不快
          wisdom_upper: {
            question: "親知らずの違和感はいつから始まりましたか？",
            options: [
              { id: "wisdom_first_time", text: "初めてです" },
              { id: "wisdom_recurring", text: "以前にも同じようなことがあり、一度収まりましたが、また始まりました" }
            ],
            next: {
              wisdom_first_time: {
                question: "親知らずの痛みの治療で、最も不安なことは何ですか？",
                options: [
                  { id: "worry_possible", text: "抜歯が可能かどうか" },
                  { id: "worry_fear", text: "抜歯治療に対する恐怖" },
                  { id: "worry_daily", text: "抜歯後の日常生活の不便さ" }
                ],
                next: {
                  worry_possible: {
                    question: "以前、心血管系の手術を受けたり、持病（全身疾患）はありますか？",
                    options: [
                      { id: "disease_medication", text: "毎日服用している薬があります（お薬手帳などを持참してください）" },
                      { id: "disease_heart", text: "以前、心臓や血管系の手術を受けたことがあります" },
                      { id: "disease_bp_diabetes", text: "高血圧・糖尿病" },
                      { id: "disease_osteoporosis", text: "骨粗鬆症" },
                      { id: "disease_other", text: "その他の全身疾患" },
                      { id: "disease_none", text: "ありません" }
                    ]
                  },
                  worry_fear: {
                    question: "以前、心血管系の手術を受けたり、持病（全身疾患）はありますか？",
                    options: [
                      { id: "disease_medication", text: "毎日服用している薬があります（お薬手帳などを持参してください）" },
                      { id: "disease_heart", text: "以前、心臓や血管系の手術を受けたことがあります" },
                      { id: "disease_bp_diabetes", text: "高血圧・糖尿病" },
                      { id: "disease_osteoporosis", text: "骨粗鬆症" },
                      { id: "disease_other", text: "その他の全身疾患" },
                      { id: "disease_none", text: "ありません" }
                    ]
                  },
                  worry_daily: {
                    question: "以前、心血管系の手術を受けたり、持病（全身疾患）はありますか？",
                    options: [
                      { id: "disease_medication", text: "毎日服用している薬があります（お薬手帳などを持参してください）" },
                      { id: "disease_heart", text: "以前、心臓や血管系の手術を受けたことがあります" },
                      { id: "disease_bp_diabetes", text: "高血圧・糖尿病" },
                      { id: "disease_osteoporosis", text: "骨粗鬆症" },
                      { id: "disease_other", text: "その他の全身疾患" },
                      { id: "disease_none", text: "ありません" }
                    ]
                  }
                }
              },
              wisdom_recurring: {
                question: "親知らずの痛みの治療で、最も不安なことは何ですか？",
                options: [
                  { id: "worry_possible", text: "抜歯が可能かどうか" },
                  { id: "worry_fear", text: "抜歯治療に対する恐怖" },
                  { id: "worry_daily", text: "抜歯後の日常生活の不便さ" }
                ],
                next: {
                  worry_possible: {
                    question: "以前、心血管系の手術を受けたり、持病（全身疾患）はありますか？",
                    options: [
                      { id: "disease_medication", text: "毎日服用している薬があります（お薬手帳などを持参してください）" },
                      { id: "disease_heart", text: "以前、心臓や血管系の手術を受けたことがあります" },
                      { id: "disease_bp_diabetes", text: "高血圧・糖尿病" },
                      { id: "disease_osteoporosis", text: "骨粗鬆症" },
                      { id: "disease_other", text: "その他の全身疾患" },
                      { id: "disease_none", text: "ありません" }
                    ]
                  },
                  worry_fear: {
                    question: "以前、心血管系の手術を受けたり、持病（全身疾患）はありますか？",
                    options: [
                      { id: "disease_medication", text: "毎日服用している薬があります（お薬手帳などを持参してください）" },
                      { id: "disease_heart", text: "以前、心臓や血管系の手術を受けたことがあります" },
                      { id: "disease_bp_diabetes", text: "高血圧・糖尿病" },
                      { id: "disease_osteoporosis", text: "骨粗鬆症" },
                      { id: "disease_other", text: "その他の全身疾患" },
                      { id: "disease_none", text: "ありません" }
                    ]
                  },
                  worry_daily: {
                    question: "以前、心血管系の手術を受けたり、持病（全身疾患）はありますか？",
                    options: [
                      { id: "disease_medication", text: "毎日服用している薬があります（お薬手帳などを持参してください）" },
                      { id: "disease_heart", text: "以前、心臓や血管系の手術を受けたことがあります" },
                      { id: "disease_bp_diabetes", text: "高血圧・糖尿病" },
                      { id: "disease_osteoporosis", text: "骨粗鬆症" },
                      { id: "disease_other", text: "その他の全身疾患" },
                      { id: "disease_none", text: "ありません" }
                    ]
                  }
                }
              }
            }
          },
          // 下の親知らず選択後 → いつから不快
          wisdom_lower: {
            question: "親知らずの違和感はいつから始まりましたか？",
            options: [
              { id: "wisdom_first_time", text: "初めてです" },
              { id: "wisdom_recurring", text: "以前にも同じようなことがあり、一度収まりましたが、また始まりました" }
            ],
            next: {
              wisdom_first_time: {
                question: "親知らずの痛みの治療で、最も不安なことは何ですか？",
                options: [
                  { id: "worry_possible", text: "抜歯が可能かどうか" },
                  { id: "worry_fear", text: "抜歯治療に対する恐怖" },
                  { id: "worry_daily", text: "抜歯後の日常生活の不便さ" }
                ],
                next: {
                  worry_possible: {
                    question: "以前、心血管系の手術を受けたり、持病（全身疾患）はありますか？",
                    options: [
                      { id: "disease_medication", text: "毎日服用している薬があります（お薬手帳などを持参してください）" },
                      { id: "disease_heart", text: "以前、心臓や血管系の手術を受けたことがあります" },
                      { id: "disease_bp_diabetes", text: "高血圧・糖尿病" },
                      { id: "disease_osteoporosis", text: "骨粗鬆症" },
                      { id: "disease_other", text: "その他の全身疾患" },
                      { id: "disease_none", text: "ありません" }
                    ]
                  },
                  worry_fear: {
                    question: "以前、心血管系の手術を受けたり、持病（全身疾患）はありますか？",
                    options: [
                      { id: "disease_medication", text: "毎日服用している薬があります（お薬手帳などを持参してください）" },
                      { id: "disease_heart", text: "以前、心臓や血管系の手術を受けたことがあります" },
                      { id: "disease_bp_diabetes", text: "高血圧・糖尿病" },
                      { id: "disease_osteoporosis", text: "骨粗鬆症" },
                      { id: "disease_other", text: "その他の全身疾患" },
                      { id: "disease_none", text: "ありません" }
                    ]
                  },
                  worry_daily: {
                    question: "以前、心血管系の手術を受けたり、持病（全身疾患）はありますか？",
                    options: [
                      { id: "disease_medication", text: "毎日服用している薬があります（お薬手帳などを持参してください）" },
                      { id: "disease_heart", text: "以前、心臓や血管系の手術を受けたことがあります" },
                      { id: "disease_bp_diabetes", text: "高血圧・糖尿病" },
                      { id: "disease_osteoporosis", text: "骨粗鬆症" },
                      { id: "disease_other", text: "その他の全身疾患" },
                      { id: "disease_none", text: "ありません" }
                    ]
                  }
                }
              },
              wisdom_recurring: {
                question: "親知らずの痛みの治療で、最も不安なことは何ですか？",
                options: [
                  { id: "worry_possible", text: "抜歯が可能かどうか" },
                  { id: "worry_fear", text: "抜歯治療に対する恐怖" },
                  { id: "worry_daily", text: "抜歯後の日常生活の不便さ" }
                ],
                next: {
                  worry_possible: {
                    question: "以前、心血管系の手術を受けたり、持病（全身疾患）はありますか？",
                    options: [
                      { id: "disease_medication", text: "毎日服用している薬があります（お薬手帳などを持参してください）" },
                      { id: "disease_heart", text: "以前、心臓や血管系の手術を受けたことがあります" },
                      { id: "disease_bp_diabetes", text: "高血圧・糖尿病" },
                      { id: "disease_osteoporosis", text: "骨粗鬆症" },
                      { id: "disease_other", text: "その他の全身疾患" },
                      { id: "disease_none", text: "ありません" }
                    ]
                  },
                  worry_fear: {
                    question: "以前、心血管系の手術を受けたり、持病（全身疾患）はありますか？",
                    options: [
                      { id: "disease_medication", text: "毎日服用している薬があります（お薬手帳などを持参してください）" },
                      { id: "disease_heart", text: "以前、心臓や血管系の手術を受けたことがあります" },
                      { id: "disease_bp_diabetes", text: "高血圧・糖尿病" },
                      { id: "disease_osteoporosis", text: "骨粗鬆症" },
                      { id: "disease_other", text: "その他の全身疾患" },
                      { id: "disease_none", text: "ありません" }
                    ]
                  },
                  worry_daily: {
                    question: "以前、心血管系の手術を受けたり、持病（全身疾患）はありますか？",
                    options: [
                      { id: "disease_medication", text: "毎日服用している薬があります（お薬手帳などを持参してください）" },
                      { id: "disease_heart", text: "以前、心臓や血管系の手術を受けたことがあります" },
                      { id: "disease_bp_diabetes", text: "高血圧・糖尿病" },
                      { id: "disease_osteoporosis", text: "骨粗鬆症" },
                      { id: "disease_other", text: "その他の全身疾患" },
                      { id: "disease_none", text: "ありません" }
                    ]
                  }
                }
              }
            }
          }
        }
      },
      // 痛くないが検査を受けたい選択時 → ためらう理由の質問 → 最終推奨
      wisdom_checkup: {
        question: "親知らずの治療を受けるにあたって、最も不安なことは何ですか？",
        options: [
          { id: "checkup_worry_possible", text: "抜歯が可能かどうか" },
          { id: "checkup_worry_fear", text: "抜歯治療に対する恐怖" },
          { id: "checkup_worry_daily", text: "抜歯後の日常生活の不便さ" }
        ],
        next: {
          checkup_worry_possible: {
            question: "以前、心血管系の手術を受けたり、持病（全身疾患）はありますか？",
            options: [
              { id: "disease_medication", text: "毎日服用している薬があります（お薬手帳などを持参してください）" },
              { id: "disease_heart", text: "以前、心臓や血管系の手術を受けたことがあります" },
              { id: "disease_bp_diabetes", text: "高血圧・糖尿病" },
              { id: "disease_osteoporosis", text: "骨粗鬆症" },
              { id: "disease_other", text: "その他の全身疾患" },
              { id: "disease_none", text: "ありません" }
            ],
            next: {
              disease_medication: {
                question: "チェックを受けながら、一緒に検査したい項目はありますか？",
                options: [
                  { id: "extra_cavity", text: "虫歯の検査" },
                  { id: "extra_gum", text: "歯茎の検査" },
                  { id: "extra_scaling", text: "スケーリング（歯石除去）" },
                  { id: "extra_none", text: "ありません、親知らずだけチェックしたいです" }
                ]
              },
              disease_heart: {
                question: "チェックを受けながら、一緒に検査したい項目はありますか？",
                options: [
                  { id: "extra_cavity", text: "虫歯の検査" },
                  { id: "extra_gum", text: "歯茎の検査" },
                  { id: "extra_scaling", text: "スケーリング（歯石除去）" },
                  { id: "extra_none", text: "ありません、親知らずだけチェックしたいです" }
                ]
              },
              disease_bp_diabetes: {
                question: "チェックを受けながら、一緒に検査したい項目はありますか？",
                options: [
                  { id: "extra_cavity", text: "虫歯の検査" },
                  { id: "extra_gum", text: "歯茎の検査" },
                  { id: "extra_scaling", text: "スケーリング（歯石除去）" },
                  { id: "extra_none", text: "ありません、親知らずだけチェックしたいです" }
                ]
              },
              disease_osteoporosis: {
                question: "チェックを受けながら、一緒に検査したい項目はありますか？",
                options: [
                  { id: "extra_cavity", text: "虫歯の検査" },
                  { id: "extra_gum", text: "歯茎の検査" },
                  { id: "extra_scaling", text: "スケーリング（歯石除去）" },
                  { id: "extra_none", text: "ありません、親知らずだけチェックしたいです" }
                ]
              },
              disease_other: {
                question: "チェックを受けながら、一緒に検査したい項目はありますか？",
                options: [
                  { id: "extra_cavity", text: "虫歯の検査" },
                  { id: "extra_gum", text: "歯茎の検査" },
                  { id: "extra_scaling", text: "スケーリング（歯石除去）" },
                  { id: "extra_none", text: "ありません、親知らずだけチェックしたいです" }
                ]
              },
              disease_none: {
                question: "チェックを受けながら、一緒に検査したい項目はありますか？",
                options: [
                  { id: "extra_cavity", text: "虫歯の検査" },
                  { id: "extra_gum", text: "歯茎の検査" },
                  { id: "extra_scaling", text: "スケーリング（歯石除去）" },
                  { id: "extra_none", text: "ありません、親知らずだけチェックしたいです" }
                ]
              }
            }
          },
          checkup_worry_fear: {
            question: "以前、心血管系の手術を受けたり、持病（全身疾患）はありますか？",
            options: [
              { id: "disease_medication", text: "毎日服用している薬があります（お薬手帳などを持参してください）" },
              { id: "disease_heart", text: "以前、心臓や血管系の手術を受けたことがあります" },
              { id: "disease_bp_diabetes", text: "高血圧・糖尿病" },
              { id: "disease_osteoporosis", text: "骨粗鬆症" },
              { id: "disease_other", text: "その他の全身疾患" },
              { id: "disease_none", text: "ありません" }
            ],
            next: {
              disease_medication: {
                question: "チェックを受けながら、一緒に検査したい項目はありますか？",
                options: [
                  { id: "extra_cavity", text: "虫歯の検査" },
                  { id: "extra_gum", text: "歯茎の検査" },
                  { id: "extra_scaling", text: "スケーリング（歯石除去）" },
                  { id: "extra_none", text: "ありません、親知らずだけチェックしたいです" }
                ]
              },
              disease_heart: {
                question: "チェックを受けながら、一緒に検査したい項目はありますか？",
                options: [
                  { id: "extra_cavity", text: "虫歯の検査" },
                  { id: "extra_gum", text: "歯茎の検査" },
                  { id: "extra_scaling", text: "スケーリング（歯石除去）" },
                  { id: "extra_none", text: "ありません、親知らずだけチェックしたいです" }
                ]
              },
              disease_bp_diabetes: {
                question: "チェックを受けながら、一緒に検査したい項目はありますか？",
                options: [
                  { id: "extra_cavity", text: "虫歯の検査" },
                  { id: "extra_gum", text: "歯茎の検査" },
                  { id: "extra_scaling", text: "スケーリング（歯石除去）" },
                  { id: "extra_none", text: "ありません、親知らずだけチェックしたいです" }
                ]
              },
              disease_osteoporosis: {
                question: "チェックを受けながら、一緒に検査したい項目はありますか？",
                options: [
                  { id: "extra_cavity", text: "虫歯の検査" },
                  { id: "extra_gum", text: "歯茎の検査" },
                  { id: "extra_scaling", text: "スケーリング（歯石除去）" },
                  { id: "extra_none", text: "ありません、親知らずだけチェックしたいです" }
                ]
              },
              disease_other: {
                question: "チェックを受けながら、一緒に検査したい項目はありますか？",
                options: [
                  { id: "extra_cavity", text: "虫歯の検査" },
                  { id: "extra_gum", text: "歯茎の検査" },
                  { id: "extra_scaling", text: "スケーリング（歯石除去）" },
                  { id: "extra_none", text: "ありません、親知らずだけチェックしたいです" }
                ]
              },
              disease_none: {
                question: "チェックを受けながら、一緒に検査したい項目はありますか？",
                options: [
                  { id: "extra_cavity", text: "虫歯の検査" },
                  { id: "extra_gum", text: "歯茎の検査" },
                  { id: "extra_scaling", text: "スケーリング（歯石除去）" },
                  { id: "extra_none", text: "ありません、親知らずだけチェックしたいです" }
                ]
              }
            }
          },
          checkup_worry_daily: {
            question: "以前、心血管系の手術を受けたり、持病（全身疾患）はありますか？",
            options: [
              { id: "disease_medication", text: "毎日服用している薬があります（お薬手帳などを持参してください）" },
              { id: "disease_heart", text: "以前、心臓や血管系の手術を受けたことがあります" },
              { id: "disease_bp_diabetes", text: "高血圧・糖尿病" },
              { id: "disease_osteoporosis", text: "骨粗鬆症" },
              { id: "disease_other", text: "その他の全身疾患" },
              { id: "disease_none", text: "ありません" }
            ],
            next: {
              disease_medication: {
                question: "チェックを受けながら、一緒に検査したい項目はありますか？",
                options: [
                  { id: "extra_cavity", text: "虫歯の検査" },
                  { id: "extra_gum", text: "歯茎の検査" },
                  { id: "extra_scaling", text: "スケーリング（歯石除去）" },
                  { id: "extra_none", text: "ありません、親知らずだけチェックしたいです" }
                ]
              },
              disease_heart: {
                question: "チェックを受けながら、一緒に検査したい項目はありますか？",
                options: [
                  { id: "extra_cavity", text: "虫歯の検査" },
                  { id: "extra_gum", text: "歯茎の検査" },
                  { id: "extra_scaling", text: "スケーリング（歯石除去）" },
                  { id: "extra_none", text: "ありません、親知らずだけチェックしたいです" }
                ]
              },
              disease_bp_diabetes: {
                question: "チェックを受けながら、一緒に検査したい項目はありますか？",
                options: [
                  { id: "extra_cavity", text: "虫歯の検査" },
                  { id: "extra_gum", text: "歯茎の検査" },
                  { id: "extra_scaling", text: "スケーリング（歯石除去）" },
                  { id: "extra_none", text: "ありません、親知らずだけチェックしたいです" }
                ]
              },
              disease_osteoporosis: {
                question: "チェックを受けながら、一緒に検査したい項目はありますか？",
                options: [
                  { id: "extra_cavity", text: "虫歯の検査" },
                  { id: "extra_gum", text: "歯茎の検査" },
                  { id: "extra_scaling", text: "スケーリング（歯石除去）" },
                  { id: "extra_none", text: "ありません、親知らずだけチェックしたいです" }
                ]
              },
              disease_other: {
                question: "チェックを受けながら、一緒に検査したい項目はありますか？",
                options: [
                  { id: "extra_cavity", text: "虫歯の検査" },
                  { id: "extra_gum", text: "歯茎の検査" },
                  { id: "extra_scaling", text: "スケーリング（歯石除去）" },
                  { id: "extra_none", text: "ありません、親知らずだけチェックしたいです" }
                ]
              },
              disease_none: {
                question: "チェックを受けながら、一緒に検査したい項目はありますか？",
                options: [
                  { id: "extra_cavity", text: "虫歯の検査" },
                  { id: "extra_gum", text: "歯茎の検査" },
                  { id: "extra_scaling", text: "スケーリング（歯石除去）" },
                  { id: "extra_none", text: "ありません、親知らずだけチェックしたいです" }
                ]
              }
            }
          }
        }
      }
    }
  },

  // 審美関連の質問
  aesthetic: {
    question: "どのような部分を改善したいですか？",
    options: [
      { id: "aesthetic_color", text: "歯の色が黄色い、または変色しています" },
      { id: "aesthetic_shape", text: "歯の形や大きさ" },
      { id: "aesthetic_gap", text: "歯の隙間" },
      { id: "aesthetic_alignment", text: "歯並びが整っていません" }
    ],
    next: {
      aesthetic_color: {
        question: "変色の程度と原因はいかがですか？",
        options: [
          { id: "color_coffee", text: "コーヒー・タバコによる着色" },
          { id: "color_aging", text: "加齢による全体的な変色" },
          { id: "color_single", text: "特定の歯だけ色が暗いです" }
        ]
      },
      aesthetic_shape: {
        question: "どのようなお悩みがありますか？",
        options: [
          { id: "shape_small", text: "歯が小さいです" },
          { id: "shape_chipped", text: "歯が欠けたり、摩耗したりしています" },
          { id: "shape_uneven", text: "歯の長さが不揃いです" }
        ]
      },
      aesthetic_gap: {
        question: "隙間がある場所はどこですか？",
        options: [
          { id: "gap_front", text: "前歯の間" },
          { id: "gap_multiple", text: "数カ所に隙間があります" }
        ]
      },
      aesthetic_alignment: {
        question: "歯並びの問題の程度はいかがですか？",
        options: [
          { id: "alignment_mild", text: "少しガタついている程度" },
          { id: "alignment_moderate", text: "中程度の八重歯" },
          { id: "alignment_severe", text: "かなりガタついています" }
        ]
      }
    }
  },

  // 歯の喪失関連の質問（インプラント相談用） - Q1: 現在の状態
  missing_tooth: {
    question: "現在の歯の状態はいかがですか？",
    options: [
      { id: "missing_upper_all", text: "上の歯が全部ない、または抜歯予定です" },
      { id: "missing_lower_all", text: "下の歯が全部ない、または抜歯予定です" },
      { id: "missing_all", text: "ほぼすべての歯がない、または抜歯予定です" },
      { id: "missing_partial", text: "10本以内の部分的な欠損、または抜歯予定です" },
      { id: "implant_revision", text: "インプラントの再手術が必要です" }
    ],
    next: {
      // Q2: 入れ歯の有無（すべてのオプション共通）
      missing_upper_all: {
        question: "現在、入れ歯を使用していますか？",
        options: [
          { id: "denture_yes", text: "はい" },
          { id: "denture_no", text: "いいえ" }
        ],
        next: {
          // Q3: 全身疾患の確認
          denture_yes: {
            question: "現在、持病（全身疾患）はありますか？",
            options: [
              { id: "disease_diabetes", text: "糖尿病" },
              { id: "disease_hypertension", text: "高血圧" },
              { id: "disease_osteoporosis", text: "骨粗鬆症" },
              { id: "disease_heart", text: "心臓疾患" },
              { id: "disease_none", text: "ありません" }
            ],
            next: {
              // Q4: 治療で重要な部分（Q5の役割）
              disease_diabetes: {
                question: "治療において最も重視することは何ですか？",
                options: [
                  { id: "priority_cost", text: "費用" },
                  { id: "priority_pain", text: "痛み" },
                  { id: "priority_eating", text: "快適な食事" },
                  { id: "priority_recovery", text: "術後の早い回復と日常生活への復帰" }
                ],
                next: {
                  // Q5: ためらう理由（Q6の役割）
                  priority_cost: {
                    question: "これまで治療をためらっていた理由はありますか？",
                    options: [
                      { id: "hesitation_cost", text: "費用の面で" },
                      { id: "hesitation_fear", text: "痛み・歯科恐怖症のため" },
                      { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" },
                      { id: "hesitation_none", text: "特に理由はありません" }
                    ]
                  },
                  priority_pain: {
                    question: "これまで治療をためらっていた理由はありますか？",
                    options: [
                      { id: "hesitation_cost", text: "費用の面で" },
                      { id: "hesitation_fear", text: "痛み・歯科恐怖症のため" },
                      { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" },
                      { id: "hesitation_none", text: "特に理由はありません" }
                    ]
                  },
                  priority_eating: {
                    question: "これまで治療をためらっていた理由はありますか？",
                    options: [
                      { id: "hesitation_cost", text: "費用の面で" },
                      { id: "hesitation_fear", text: "痛み・歯科恐怖症のため" },
                      { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" },
                      { id: "hesitation_none", text: "特に理由はありません" }
                    ]
                  },
                  priority_recovery: {
                    question: "これまで治療をためらっていた理由はありますか？",
                    options: [
                      { id: "hesitation_cost", text: "費用の面で" },
                      { id: "hesitation_fear", text: "痛み・歯科恐怖症のため" },
                      { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" },
                      { id: "hesitation_none", text: "特に理由はありません" }
                    ]
                  }
                }
              },
              disease_hypertension: {
                question: "治療において最も重視することは何ですか？",
                options: [
                  { id: "priority_cost", text: "費用" },
                  { id: "priority_pain", text: "痛み" },
                  { id: "priority_eating", text: "快適な食事" },
                  { id: "priority_recovery", text: "術後の早い回復と日常生活への復帰" }
                ],
                next: {
                  priority_cost: {
                    question: "これまで治療をためらっていた理由はありますか？",
                    options: [
                      { id: "hesitation_cost", text: "費用の面で" },
                      { id: "hesitation_fear", text: "痛み・歯科恐怖症のため" },
                      { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" },
                      { id: "hesitation_none", text: "特に理由はありません" }
                    ]
                  },
                  priority_pain: {
                    question: "これまで治療をためらっていた理由はありますか？",
                    options: [
                      { id: "hesitation_cost", text: "費用の面で" },
                      { id: "hesitation_fear", text: "痛み・歯科恐怖症のため" },
                      { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" },
                      { id: "hesitation_none", text: "特に理由はありません" }
                    ]
                  },
                  priority_eating: {
                    question: "これまで治療をためらっていた理由はありますか？",
                    options: [
                      { id: "hesitation_cost", text: "費用の面で" },
                      { id: "hesitation_fear", text: "痛み・歯科恐怖症のため" },
                      { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" },
                      { id: "hesitation_none", text: "特に理由はありません" }
                    ]
                  },
                  priority_recovery: {
                    question: "これまで治療をためらっていた理由はありますか？",
                    options: [
                      { id: "hesitation_cost", text: "費用の面で" },
                      { id: "hesitation_fear", text: "痛み・歯科恐怖症のため" },
                      { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" },
                      { id: "hesitation_none", text: "特に理由はありません" }
                    ]
                  }
                }
              },
              disease_osteoporosis: {
                question: "治療において最も重視することは何ですか？",
                options: [
                  { id: "priority_cost", text: "費用" },
                  { id: "priority_pain", text: "痛み" },
                  { id: "priority_eating", text: "快適な食事" },
                  { id: "priority_recovery", text: "術後の早い回復と日常生活への復帰" }
                ],
                next: {
                  priority_cost: {
                    question: "これまで治療をためらっていた理由はありますか？",
                    options: [
                      { id: "hesitation_cost", text: "費用の面で" },
                      { id: "hesitation_fear", text: "痛み・歯科恐怖症のため" },
                      { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" },
                      { id: "hesitation_none", text: "特に理由はありません" }
                    ]
                  },
                  priority_pain: {
                    question: "これまで治療をためらっていた理由はありますか？",
                    options: [
                      { id: "hesitation_cost", text: "費用の面で" },
                      { id: "hesitation_fear", text: "痛み・歯科恐怖症のため" },
                      { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" },
                      { id: "hesitation_none", text: "特別な理由はありません" }
                    ]
                  },
                  priority_eating: {
                    question: "これまで治療をためらっていた理由はありますか？",
                    options: [
                      { id: "hesitation_cost", text: "費用の面で" },
                      { id: "hesitation_fear", text: "痛み・歯科恐怖症のため" },
                      { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" },
                      { id: "hesitation_none", text: "特に理由はありません" }
                    ]
                  },
                  priority_recovery: {
                    question: "これまで治療をためらっていた理由はありますか？",
                    options: [
                      { id: "hesitation_cost", text: "費用の面で" },
                      { id: "hesitation_fear", text: "痛み・歯科恐怖症のため" },
                      { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" },
                      { id: "hesitation_none", text: "特に理由はありません" }
                    ]
                  }
                }
              },
              disease_heart: {
                question: "治療において最も重視することは何ですか？",
                options: [
                  { id: "priority_cost", text: "費用" },
                  { id: "priority_pain", text: "痛み" },
                  { id: "priority_eating", text: "快適な食事" },
                  { id: "priority_recovery", text: "術後の早い回復と日常生活への復帰" }
                ],
                next: {
                  priority_cost: {
                    question: "これまで治療をためらっていた理由はありますか？",
                    options: [
                      { id: "hesitation_cost", text: "費用の面で" },
                      { id: "hesitation_fear", text: "痛み・歯科恐怖症のため" },
                      { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" },
                      { id: "hesitation_none", text: "特に理由はありません" }
                    ]
                  },
                  priority_pain: {
                    question: "これまで治療をためらっていた理由はありますか？",
                    options: [
                      { id: "hesitation_cost", text: "費用の面で" },
                      { id: "hesitation_fear", text: "痛み・歯科恐怖症のため" },
                      { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" },
                      { id: "hesitation_none", text: "特に理由はありません" }
                    ]
                  },
                  priority_eating: {
                    question: "これまで治療をためらっていた理由はありますか？",
                    options: [
                      { id: "hesitation_cost", text: "費用の面で" },
                      { id: "hesitation_fear", text: "痛み・歯科恐怖症のため" },
                      { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" },
                      { id: "hesitation_none", text: "特に理由はありません" }
                    ]
                  },
                  priority_recovery: {
                    question: "これまで治療をためらっていた理由はありますか？",
                    options: [
                      { id: "hesitation_cost", text: "費用の面で" },
                      { id: "hesitation_fear", text: "痛み・歯科恐怖症のため" },
                      { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" },
                      { id: "hesitation_none", text: "特に理由はありません" }
                    ]
                  }
                }
              },
              disease_none: {
                question: "治療において最も重視することは何ですか？",
                options: [
                  { id: "priority_cost", text: "費用" },
                  { id: "priority_pain", text: "痛み" },
                  { id: "priority_eating", text: "快適な食事" },
                  { id: "priority_recovery", text: "術後の早い回復と日常生活への復帰" }
                ],
                next: {
                  priority_cost: {
                    question: "これまで治療をためらっていた理由はありますか？",
                    options: [
                      { id: "hesitation_cost", text: "費用の面で" },
                      { id: "hesitation_fear", text: "痛み・歯科恐怖症のため" },
                      { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" },
                      { id: "hesitation_none", text: "特に理由はありません" }
                    ]
                  },
                  priority_pain: {
                    question: "これまで治療をためらっていた理由はありますか？",
                    options: [
                      { id: "hesitation_cost", text: "費用のために" },
                      { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" },
                      { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" },
                      { id: "hesitation_none", text: "特別な理由はありません" }
                    ]
                  },
                  priority_eating: {
                    question: "これまで治療をためらっていた理由はありますか？",
                    options: [
                      { id: "hesitation_cost", text: "費用のために" },
                      { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" },
                      { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" },
                      { id: "hesitation_none", text: "特別な理由はありません" }
                    ]
                  },
                  priority_recovery: {
                    question: "これまで治療をためらっていた理由はありますか？",
                    options: [
                      { id: "hesitation_cost", text: "費用のために" },
                      { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" },
                      { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" },
                      { id: "hesitation_none", text: "特別な理由はありません" }
                    ]
                  }
                }
              }
            }
          },
          denture_no: {
            question: "現在患っている全身疾患はありますか？",
            options: [
              { id: "disease_diabetes", text: "糖尿病" },
              { id: "disease_hypertension", text: "高血圧" },
              { id: "disease_osteoporosis", text: "骨粗鬆症" },
              { id: "disease_heart", text: "心疾患" },
              { id: "disease_none", text: "ありません" }
            ],
            next: {
              disease_diabetes: {
                question: "治療で最も重要だとお考えの部分は何ですか？",
                options: [
                  { id: "priority_cost", text: "費用" },
                  { id: "priority_pain", text: "痛み" },
                  { id: "priority_eating", text: "快適な食事" },
                  { id: "priority_recovery", text: "手術後の早い回復と日常生活への復帰" }
                ],
                next: {
                  priority_cost: {
                    question: "これまで治療をためらっていた理由はありますか？",
                    options: [
                      { id: "hesitation_cost", text: "費用のために" },
                      { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" },
                      { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" },
                      { id: "hesitation_none", text: "特別な理由はありません" }
                    ]
                  },
                  priority_pain: {
                    question: "これまで治療をためらっていた理由はありますか？",
                    options: [
                      { id: "hesitation_cost", text: "費用のために" },
                      { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" },
                      { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" },
                      { id: "hesitation_none", text: "特別な理由はありません" }
                    ]
                  },
                  priority_eating: {
                    question: "これまで治療をためらっていた理由はありますか？",
                    options: [
                      { id: "hesitation_cost", text: "費用のために" },
                      { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" },
                      { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" },
                      { id: "hesitation_none", text: "特別な理由はありません" }
                    ]
                  },
                  priority_recovery: {
                    question: "これまで治療をためらっていた理由はありますか？",
                    options: [
                      { id: "hesitation_cost", text: "費用のために" },
                      { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" },
                      { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" },
                      { id: "hesitation_none", text: "特別な理由はありません" }
                    ]
                  }
                }
              },
              disease_hypertension: {
                question: "治療で最も重要だとお考えの部分は何ですか？",
                options: [
                  { id: "priority_cost", text: "費用" },
                  { id: "priority_pain", text: "痛み" },
                  { id: "priority_eating", text: "快適な食事" },
                  { id: "priority_recovery", text: "手術後の早い回復と日常生活への復帰" }
                ],
                next: {
                  priority_cost: {
                    question: "これまで治療をためらっていた理由はありますか？",
                    options: [
                      { id: "hesitation_cost", text: "費用のために" },
                      { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" },
                      { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" },
                      { id: "hesitation_none", text: "特別な理由はありません" }
                    ]
                  },
                  priority_pain: {
                    question: "これまで治療をためらっていた理由はありますか？",
                    options: [
                      { id: "hesitation_cost", text: "費用のために" },
                      { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" },
                      { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" },
                      { id: "hesitation_none", text: "特別な理由はありません" }
                    ]
                  },
                  priority_eating: {
                    question: "これまで治療をためらっていた理由はありますか？",
                    options: [
                      { id: "hesitation_cost", text: "費用のために" },
                      { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" },
                      { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" },
                      { id: "hesitation_none", text: "特別な理由はありません" }
                    ]
                  },
                  priority_recovery: {
                    question: "これまで治療をためらっていた理由はありますか？",
                    options: [
                      { id: "hesitation_cost", text: "費用のために" },
                      { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" },
                      { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" },
                      { id: "hesitation_none", text: "特別な理由はありません" }
                    ]
                  }
                }
              },
              disease_osteoporosis: {
                question: "治療で最も重要だとお考えの部分は何ですか？",
                options: [
                  { id: "priority_cost", text: "費用" },
                  { id: "priority_pain", text: "痛み" },
                  { id: "priority_eating", text: "快適な食事" },
                  { id: "priority_recovery", text: "手術後の早い回復と日常生活への復帰" }
                ],
                next: {
                  priority_cost: {
                    question: "これまで治療をためらっていた理由はありますか？",
                    options: [
                      { id: "hesitation_cost", text: "費用のために" },
                      { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" },
                      { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" },
                      { id: "hesitation_none", text: "特別な理由はありません" }
                    ]
                  },
                  priority_pain: {
                    question: "これまで治療をためらっていた理由はありますか？",
                    options: [
                      { id: "hesitation_cost", text: "費用のために" },
                      { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" },
                      { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" },
                      { id: "hesitation_none", text: "特別な理由はありません" }
                    ]
                  },
                  priority_eating: {
                    question: "これまで治療をためらっていた理由はありますか？",
                    options: [
                      { id: "hesitation_cost", text: "費用のために" },
                      { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" },
                      { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" },
                      { id: "hesitation_none", text: "特別な理由はありません" }
                    ]
                  },
                  priority_recovery: {
                    question: "これまで治療をためらっていた理由はありますか？",
                    options: [
                      { id: "hesitation_cost", text: "費用のために" },
                      { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" },
                      { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" },
                      { id: "hesitation_none", text: "特別な理由はありません" }
                    ]
                  }
                }
              },
              disease_heart: {
                question: "治療で最も重要だとお考えの部分は何ですか？",
                options: [
                  { id: "priority_cost", text: "費用" },
                  { id: "priority_pain", text: "痛み" },
                  { id: "priority_eating", text: "快適な食事" },
                  { id: "priority_recovery", text: "手術後の早い回復と日常生活への復帰" }
                ],
                next: {
                  priority_cost: {
                    question: "これまで治療をためらっていた理由はありますか？",
                    options: [
                      { id: "hesitation_cost", text: "費用のために" },
                      { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" },
                      { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" },
                      { id: "hesitation_none", text: "特別な理由はありません" }
                    ]
                  },
                  priority_pain: {
                    question: "これまで治療をためらっていた理由はありますか？",
                    options: [
                      { id: "hesitation_cost", text: "費用のために" },
                      { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" },
                      { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" },
                      { id: "hesitation_none", text: "特別な理由はありません" }
                    ]
                  },
                  priority_eating: {
                    question: "これまで治療をためらっていた理由はありますか？",
                    options: [
                      { id: "hesitation_cost", text: "費用のために" },
                      { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" },
                      { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" },
                      { id: "hesitation_none", text: "特別な理由はありません" }
                    ]
                  },
                  priority_recovery: {
                    question: "これまで治療をためらっていた理由はありますか？",
                    options: [
                      { id: "hesitation_cost", text: "費用のために" },
                      { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" },
                      { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" },
                      { id: "hesitation_none", text: "特別な理由はありません" }
                    ]
                  }
                }
              },
              disease_none: {
                question: "治療で最も重要だとお考えの部分は何ですか？",
                options: [
                  { id: "priority_cost", text: "費用" },
                  { id: "priority_pain", text: "痛み" },
                  { id: "priority_eating", text: "快適な食事" },
                  { id: "priority_recovery", text: "手術後の早い回復と日常生活への復帰" }
                ],
                next: {
                  priority_cost: {
                    question: "これまで治療をためらっていた理由はありますか？",
                    options: [
                      { id: "hesitation_cost", text: "費用のために" },
                      { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" },
                      { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" },
                      { id: "hesitation_none", text: "特別な理由はありません" }
                    ]
                  },
                  priority_pain: {
                    question: "これまで治療をためらっていた理由はありますか？",
                    options: [
                      { id: "hesitation_cost", text: "費用のために" },
                      { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" },
                      { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" },
                      { id: "hesitation_none", text: "特別な理由はありません" }
                    ]
                  },
                  priority_eating: {
                    question: "これまで治療をためらっていた理由はありますか？",
                    options: [
                      { id: "hesitation_cost", text: "費用のために" },
                      { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" },
                      { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" },
                      { id: "hesitation_none", text: "特別な理由はありません" }
                    ]
                  },
                  priority_recovery: {
                    question: "これまで治療をためらっていた理由はありますか？",
                    options: [
                      { id: "hesitation_cost", text: "費用のために" },
                      { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" },
                      { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" },
                      { id: "hesitation_none", text: "特別な理由はありません" }
                    ]
                  }
                }
              }
            }
          }
        }
      },
      // 他のオプションも同様のフロー適用 (missing_upper_allと同じ構造)
      missing_all: {
        question: "現在、入れ歯を着用していますか？",
        options: [
          { id: "denture_yes", text: "はい" },
          { id: "denture_no", text: "いいえ" }
        ],
        next: {
          denture_yes: {
            question: "現在患っている全身疾患はありますか？",
            options: [
              { id: "disease_diabetes", text: "糖尿病" },
              { id: "disease_hypertension", text: "高血圧" },
              { id: "disease_osteoporosis", text: "骨粗鬆症" },
              { id: "disease_heart", text: "心疾患" },
              { id: "disease_none", text: "ありません" }
            ],
            next: {
              disease_diabetes: { question: "治療で最も重要だとお考えの部分は何ですか？", options: [{ id: "priority_cost", text: "費用" }, { id: "priority_pain", text: "痛み" }, { id: "priority_eating", text: "快適な食事" }, { id: "priority_recovery", text: "手術後の早い回復と日常生活への復帰" }], next: { priority_cost: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_pain: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_eating: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_recovery: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] } } },
              disease_hypertension: { question: "治療で最も重要だとお考えの部分は何ですか？", options: [{ id: "priority_cost", text: "費用" }, { id: "priority_pain", text: "痛み" }, { id: "priority_eating", text: "快適な食事" }, { id: "priority_recovery", text: "手術後の早い回復と日常生活への復帰" }], next: { priority_cost: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_pain: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_eating: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_recovery: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] } } },
              disease_osteoporosis: { question: "治療で最も重要だとお考えの部分は何ですか？", options: [{ id: "priority_cost", text: "費用" }, { id: "priority_pain", text: "痛み" }, { id: "priority_eating", text: "快適な食事" }, { id: "priority_recovery", text: "手術後の早い回復と日常生活への復帰" }], next: { priority_cost: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_pain: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_eating: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_recovery: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] } } },
              disease_heart: { question: "治療で最も重要だとお考えの部分は何ですか？", options: [{ id: "priority_cost", text: "費用" }, { id: "priority_pain", text: "痛み" }, { id: "priority_eating", text: "快適な食事" }, { id: "priority_recovery", text: "手術後の早い回復と日常生活への復帰" }], next: { priority_cost: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_pain: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_eating: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_recovery: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] } } },
              disease_none: { question: "治療で最も重要だとお考えの部分は何ですか？", options: [{ id: "priority_cost", text: "費用" }, { id: "priority_pain", text: "痛み" }, { id: "priority_eating", text: "快適な食事" }, { id: "priority_recovery", text: "手術後の早い回復と日常生活への復帰" }], next: { priority_cost: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_pain: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_eating: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_recovery: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] } } }
            }
          },
          denture_no: {
            question: "現在患っている全身疾患はありますか？",
            options: [
              { id: "disease_diabetes", text: "糖尿病" },
              { id: "disease_hypertension", text: "高血圧" },
              { id: "disease_osteoporosis", text: "骨粗鬆症" },
              { id: "disease_heart", text: "心疾患" },
              { id: "disease_none", text: "ありません" }
            ],
            next: {
              disease_diabetes: { question: "治療で最も重要だとお考えの部分は何ですか？", options: [{ id: "priority_cost", text: "費用" }, { id: "priority_pain", text: "痛み" }, { id: "priority_eating", text: "快適な食事" }, { id: "priority_recovery", text: "手術後の早い回復と日常生活への復帰" }], next: { priority_cost: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_pain: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_eating: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_recovery: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] } } },
              disease_hypertension: { question: "治療で最も重要だとお考えの部分は何ですか？", options: [{ id: "priority_cost", text: "費用" }, { id: "priority_pain", text: "痛み" }, { id: "priority_eating", text: "快適な食事" }, { id: "priority_recovery", text: "手術後の早い回復と日常生活への復帰" }], next: { priority_cost: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_pain: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_eating: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_recovery: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] } } },
              disease_osteoporosis: { question: "治療で最も重要だとお考えの部分は何ですか？", options: [{ id: "priority_cost", text: "費用" }, { id: "priority_pain", text: "痛み" }, { id: "priority_eating", text: "快適な食事" }, { id: "priority_recovery", text: "手術後の早い回復と日常生活への復帰" }], next: { priority_cost: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_pain: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_eating: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_recovery: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] } } },
              disease_heart: { question: "治療で最も重要だとお考えの部分は何ですか？", options: [{ id: "priority_cost", text: "費用" }, { id: "priority_pain", text: "痛み" }, { id: "priority_eating", text: "快適な食事" }, { id: "priority_recovery", text: "手術後の早い回復と日常生活への復帰" }], next: { priority_cost: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_pain: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_eating: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_recovery: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] } } },
              disease_none: { question: "治療で最も重要だとお考えの部分は何ですか？", options: [{ id: "priority_cost", text: "費用" }, { id: "priority_pain", text: "痛み" }, { id: "priority_eating", text: "快適な食事" }, { id: "priority_recovery", text: "手術後の早い回復と日常生活への復帰" }], next: { priority_cost: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_pain: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_eating: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_recovery: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] } } }
            }
          }
        }
      },
      missing_lower_all: {
        question: "現在、入れ歯を着用していますか？",
        options: [
          { id: "denture_yes", text: "はい" },
          { id: "denture_no", text: "いいえ" }
        ],
        next: {
          denture_yes: {
            question: "現在患っている全身疾患はありますか？",
            options: [
              { id: "disease_diabetes", text: "糖尿病" },
              { id: "disease_hypertension", text: "高血圧" },
              { id: "disease_osteoporosis", text: "骨粗鬆症" },
              { id: "disease_heart", text: "心疾患" },
              { id: "disease_none", text: "ありません" }
            ],
            next: {
              disease_diabetes: { question: "治療で最も重要だとお考えの部分は何ですか？", options: [{ id: "priority_cost", text: "費用" }, { id: "priority_pain", text: "痛み" }, { id: "priority_eating", text: "快適な食事" }, { id: "priority_recovery", text: "手術後の早い回復と日常生活への復帰" }], next: { priority_cost: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_pain: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_eating: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_recovery: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] } } },
              disease_hypertension: { question: "治療で最も重要だとお考えの部分は何ですか？", options: [{ id: "priority_cost", text: "費用" }, { id: "priority_pain", text: "痛み" }, { id: "priority_eating", text: "快適な食事" }, { id: "priority_recovery", text: "手術後の早い回復と日常生活への復帰" }], next: { priority_cost: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_pain: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_eating: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_recovery: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] } } },
              disease_osteoporosis: { question: "治療で最も重要だとお考えの部分は何ですか？", options: [{ id: "priority_cost", text: "費用" }, { id: "priority_pain", text: "痛み" }, { id: "priority_eating", text: "快適な食事" }, { id: "priority_recovery", text: "手術後の早い回復と日常生活への復帰" }], next: { priority_cost: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_pain: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_eating: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_recovery: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] } } },
              disease_heart: { question: "治療で最も重要だとお考えの部分は何ですか？", options: [{ id: "priority_cost", text: "費用" }, { id: "priority_pain", text: "痛み" }, { id: "priority_eating", text: "快適な食事" }, { id: "priority_recovery", text: "手術後の早い回復と日常生活への復帰" }], next: { priority_cost: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_pain: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_eating: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_recovery: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] } } },
              disease_none: { question: "治療で最も重要だとお考えの部分は何ですか？", options: [{ id: "priority_cost", text: "費用" }, { id: "priority_pain", text: "痛み" }, { id: "priority_eating", text: "快適な食事" }, { id: "priority_recovery", text: "手術後の早い回復と日常生活への復帰" }], next: { priority_cost: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_pain: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_eating: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_recovery: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] } } }
            }
          },
          denture_no: {
            question: "現在患っている全身疾患はありますか？",
            options: [
              { id: "disease_diabetes", text: "糖尿病" },
              { id: "disease_hypertension", text: "高血圧" },
              { id: "disease_osteoporosis", text: "骨粗鬆症" },
              { id: "disease_heart", text: "心疾患" },
              { id: "disease_none", text: "ありません" }
            ],
            next: {
              disease_diabetes: { question: "治療で最も重要だとお考えの部分は何ですか？", options: [{ id: "priority_cost", text: "費用" }, { id: "priority_pain", text: "痛み" }, { id: "priority_eating", text: "快適な食事" }, { id: "priority_recovery", text: "手術後の早い回復と日常生活への復帰" }], next: { priority_cost: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_pain: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_eating: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_recovery: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] } } },
              disease_hypertension: { question: "治療で最も重要だとお考えの部分は何ですか？", options: [{ id: "priority_cost", text: "費用" }, { id: "priority_pain", text: "痛み" }, { id: "priority_eating", text: "快適な食事" }, { id: "priority_recovery", text: "手術後の早い回復と日常生活への復帰" }], next: { priority_cost: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_pain: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_eating: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_recovery: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] } } },
              disease_osteoporosis: { question: "治療で最も重要だとお考えの部分は何ですか？", options: [{ id: "priority_cost", text: "費用" }, { id: "priority_pain", text: "痛み" }, { id: "priority_eating", text: "快適な食事" }, { id: "priority_recovery", text: "手術後の早い回復と日常生活への復帰" }], next: { priority_cost: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_pain: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_eating: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_recovery: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] } } },
              disease_heart: { question: "治療で最も重要だとお考えの部分は何ですか？", options: [{ id: "priority_cost", text: "費用" }, { id: "priority_pain", text: "痛み" }, { id: "priority_eating", text: "快適な食事" }, { id: "priority_recovery", text: "手術後の早い回復と日常生活への復帰" }], next: { priority_cost: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_pain: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_eating: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_recovery: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] } } },
              disease_none: { question: "治療で最も重要だとお考えの部分は何ですか？", options: [{ id: "priority_cost", text: "費用" }, { id: "priority_pain", text: "痛み" }, { id: "priority_eating", text: "快適な食事" }, { id: "priority_recovery", text: "手術後の早い回復と日常生活への復帰" }], next: { priority_cost: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_pain: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_eating: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_recovery: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] } } }
            }
          }
        }
      },
      missing_partial: {
        question: "どの部位の歯がなかったり、抜歯予定ですか？",
        options: [
          { id: "location_front", text: "前歯の方" },
          { id: "location_back", text: "奥歯の方" },
          { id: "location_both", text: "前歯と奥歯の両方" }
        ],
        next: {
          location_front: {
            question: "現在患っている全身疾患はありますか？",
            options: [
              { id: "disease_diabetes", text: "糖尿病" },
              { id: "disease_hypertension", text: "高血圧" },
              { id: "disease_osteoporosis", text: "骨粗鬆症" },
              { id: "disease_heart", text: "心疾患" },
              { id: "disease_none", text: "ありません" }
            ],
            next: {
              disease_diabetes: { question: "治療で最も重要だとお考えの部分は何ですか？", options: [{ id: "priority_cost", text: "費用" }, { id: "priority_pain", text: "痛み" }, { id: "priority_eating", text: "快適な食事" }, { id: "priority_recovery", text: "手術後の早い回復と日常生活への復帰" }], next: { priority_cost: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_pain: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_eating: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_recovery: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] } } },
              disease_hypertension: { question: "治療で最も重要だとお考えの部分は何ですか？", options: [{ id: "priority_cost", text: "費用" }, { id: "priority_pain", text: "痛み" }, { id: "priority_eating", text: "快適な食事" }, { id: "priority_recovery", text: "手術後の早い回復と日常生活への復帰" }], next: { priority_cost: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_pain: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_eating: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_recovery: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] } } },
              disease_osteoporosis: { question: "治療で最も重要だとお考えの部分は何ですか？", options: [{ id: "priority_cost", text: "費用" }, { id: "priority_pain", text: "痛み" }, { id: "priority_eating", text: "快適な食事" }, { id: "priority_recovery", text: "手術後の早い回復と日常生活への復帰" }], next: { priority_cost: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_pain: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_eating: { question: "これまで治療をためらっていた理由はありますか? ", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_recovery: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] } } },
              disease_heart: { question: "治療で最も重要だとお考えの部分は何ですか？", options: [{ id: "priority_cost", text: "費用" }, { id: "priority_pain", text: "痛み" }, { id: "priority_eating", text: "快適な食事" }, { id: "priority_recovery", text: "手術後の早い回復と日常生活への復帰" }], next: { priority_cost: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_pain: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_eating: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_recovery: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] } } },
              disease_none: { question: "治療で最も重要だとお考えの部分は何ですか？", options: [{ id: "priority_cost", text: "費用" }, { id: "priority_pain", text: "痛み" }, { id: "priority_eating", text: "快適な食事" }, { id: "priority_recovery", text: "手術後の早い回復と日常生活への復帰" }], next: { priority_cost: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_pain: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_eating: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_recovery: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] } } }
            }
          },
          location_back: {
            question: "現在患っている全身疾患はありますか？",
            options: [
              { id: "disease_diabetes", text: "糖尿病" },
              { id: "disease_hypertension", text: "高血圧" },
              { id: "disease_osteoporosis", text: "骨粗鬆症" },
              { id: "disease_heart", text: "心疾患" },
              { id: "disease_none", text: "ありません" }
            ],
            next: {
              disease_diabetes: { question: "治療で最も重要だとお考えの部分は何ですか？", options: [{ id: "priority_cost", text: "費用" }, { id: "priority_pain", text: "痛み" }, { id: "priority_eating", text: "快適な食事" }, { id: "priority_recovery", text: "手術後の早い回復と日常生活への復帰" }], next: { priority_cost: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_pain: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_eating: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_recovery: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] } } },
              disease_hypertension: { question: "治療で最も重要だとお考えの部分は何ですか？", options: [{ id: "priority_cost", text: "費用" }, { id: "priority_pain", text: "痛み" }, { id: "priority_eating", text: "快適な食事" }, { id: "priority_recovery", text: "手術後の早い回復と日常生活への復帰" }], next: { priority_cost: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_pain: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_eating: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_recovery: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] } } },
              disease_osteoporosis: { question: "治療で最も重要だとお考えの部分は何ですか？", options: [{ id: "priority_cost", text: "費用" }, { id: "priority_pain", text: "痛み" }, { id: "priority_eating", text: "快適な食事" }, { id: "priority_recovery", text: "手術後の早い回復と日常生活への復帰" }], next: { priority_cost: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_pain: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_eating: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_recovery: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] } } },
              disease_heart: { question: "治療で最も重要だとお考えの部分は何ですか？", options: [{ id: "priority_cost", text: "費用" }, { id: "priority_pain", text: "痛み" }, { id: "priority_eating", text: "快適な食事" }, { id: "priority_recovery", text: "手術後の早い回復と日常生活への復帰" }], next: { priority_cost: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_pain: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_eating: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_recovery: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] } } },
              disease_none: { question: "治療で最も重要だとお考えの部分は何ですか？", options: [{ id: "priority_cost", text: "費用" }, { id: "priority_pain", text: "痛み" }, { id: "priority_eating", text: "快適な食事" }, { id: "priority_recovery", text: "手術後の早い回復と日常生活への復帰" }], next: { priority_cost: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_pain: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_eating: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_recovery: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] } } }
            }
          },
          location_both: {
            question: "現在患っている全身疾患はありますか？",
            options: [
              { id: "disease_diabetes", text: "糖尿病" },
              { id: "disease_hypertension", text: "高血圧" },
              { id: "disease_osteoporosis", text: "骨粗鬆症" },
              { id: "disease_heart", text: "心疾患" },
              { id: "disease_none", text: "ありません" }
            ],
            next: {
              disease_diabetes: { question: "治療で最も重要だとお考えの部分は何ですか？", options: [{ id: "priority_cost", text: "費用" }, { id: "priority_pain", text: "痛み" }, { id: "priority_eating", text: "快適な食事" }, { id: "priority_recovery", text: "手術後の早い回復と日常生活への復帰" }], next: { priority_cost: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_pain: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_eating: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_recovery: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] } } },
              disease_hypertension: { question: "治療で最も重要だとお考えの部分は何ですか？", options: [{ id: "priority_cost", text: "費用" }, { id: "priority_pain", text: "痛み" }, { id: "priority_eating", text: "快適な食事" }, { id: "priority_recovery", text: "手術後の早い回復と日常生活への復帰" }], next: { priority_cost: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_pain: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_eating: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_recovery: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] } } },
              disease_osteoporosis: { question: "治療で最も重要だとお考えの部分は何ですか？", options: [{ id: "priority_cost", text: "費用" }, { id: "priority_pain", text: "痛み" }, { id: "priority_eating", text: "快適な食事" }, { id: "priority_recovery", text: "手術後の早い回復と日常生活への復帰" }], next: { priority_cost: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_pain: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_eating: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_recovery: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] } } },
              disease_heart: { question: "治療で最も重要だとお考えの部分は何ですか？", options: [{ id: "priority_cost", text: "費用" }, { id: "priority_pain", text: "痛み" }, { id: "priority_eating", text: "快適な食事" }, { id: "priority_recovery", text: "手術後の早い回復と日常生活への復帰" }], next: { priority_cost: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_pain: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_eating: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_recovery: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] } } },
              disease_none: { question: "治療で最も重要だとお考えの部分は何ですか？", options: [{ id: "priority_cost", text: "費用" }, { id: "priority_pain", text: "痛み" }, { id: "priority_eating", text: "快適な食事" }, { id: "priority_recovery", text: "手術後の早い回復と日常生活への復帰" }], next: { priority_cost: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_pain: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_eating: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_recovery: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] } } }
            }
          }
        }
      },
      implant_revision: {
        question: "現在、入れ歯を着用していますか？",
        options: [
          { id: "denture_yes", text: "はい" },
          { id: "denture_no", text: "いいえ" }
        ],
        next: {
          denture_yes: {
            question: "現在患っている全身疾患はありますか？",
            options: [
              { id: "disease_diabetes", text: "糖尿病" },
              { id: "disease_hypertension", text: "高血圧" },
              { id: "disease_osteoporosis", text: "骨粗鬆症" },
              { id: "disease_heart", text: "心疾患" },
              { id: "disease_none", text: "ありません" }
            ],
            next: {
              disease_diabetes: { question: "治療で最も重要だとお考えの部分は何ですか？", options: [{ id: "priority_cost", text: "費用" }, { id: "priority_pain", text: "痛み" }, { id: "priority_eating", text: "快適な食事" }, { id: "priority_recovery", text: "手術後の早い回復と日常生活への復帰" }], next: { priority_cost: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_pain: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_eating: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_recovery: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] } } },
              disease_hypertension: { question: "治療で最も重要だとお考えの部分は何ですか？", options: [{ id: "priority_cost", text: "費用" }, { id: "priority_pain", text: "痛み" }, { id: "priority_eating", text: "快適な食事" }, { id: "priority_recovery", text: "手術後の早い回復と日常生活への復帰" }], next: { priority_cost: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_pain: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_eating: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_recovery: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] } } },
              disease_osteoporosis: { question: "治療で最も重要だとお考えの部分は何ですか？", options: [{ id: "priority_cost", text: "費用" }, { id: "priority_pain", text: "痛み" }, { id: "priority_eating", text: "快適な食事" }, { id: "priority_recovery", text: "手術後の早い回復と日常生活への復帰" }], next: { priority_cost: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_pain: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_eating: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_recovery: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] } } },
              disease_heart: { question: "治療で最も重要だとお考えの部分は何ですか？", options: [{ id: "priority_cost", text: "費用" }, { id: "priority_pain", text: "痛み" }, { id: "priority_eating", text: "快適な食事" }, { id: "priority_recovery", text: "手術後の早い回復と日常生活への復帰" }], next: { priority_cost: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_pain: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_eating: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_recovery: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] } } },
              disease_none: { question: "治療で最も重要だとお考えの部分は何ですか？", options: [{ id: "priority_cost", text: "費用" }, { id: "priority_pain", text: "痛み" }, { id: "priority_eating", text: "快適な食事" }, { id: "priority_recovery", text: "手術後の早い回復と日常生活への復帰" }], next: { priority_cost: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_pain: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_eating: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_recovery: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] } } }
            }
          },
          denture_no: {
            question: "現在患っている全身疾患はありますか？",
            options: [
              { id: "disease_diabetes", text: "糖尿病" },
              { id: "disease_hypertension", text: "高血圧" },
              { id: "disease_osteoporosis", text: "骨粗鬆症" },
              { id: "disease_heart", text: "心疾患" },
              { id: "disease_none", text: "ありません" }
            ],
            next: {
              disease_diabetes: { question: "治療で最も重要だとお考えの部分は何ですか？", options: [{ id: "priority_cost", text: "費用" }, { id: "priority_pain", text: "痛み" }, { id: "priority_eating", text: "快適な食事" }, { id: "priority_recovery", text: "手術後の早い回復と日常生活への復帰" }], next: { priority_cost: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_pain: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_eating: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_recovery: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] } } },
              disease_hypertension: { question: "治療で最も重要だとお考えの部分は何ですか？", options: [{ id: "priority_cost", text: "費用" }, { id: "priority_pain", text: "痛み" }, { id: "priority_eating", text: "快適な食事" }, { id: "priority_recovery", text: "手術後の早い回復と日常生活への復帰" }], next: { priority_cost: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_pain: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_eating: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_recovery: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] } } },
              disease_osteoporosis: { question: "治療で最も重要だとお考えの部分は何ですか？", options: [{ id: "priority_cost", text: "費用" }, { id: "priority_pain", text: "痛み" }, { id: "priority_eating", text: "快適な食事" }, { id: "priority_recovery", text: "手術後の早い回復と日常生活への復帰" }], next: { priority_cost: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_pain: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_eating: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_recovery: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] } } },
              disease_heart: { question: "治療で最も重要だとお考えの部分は何ですか？", options: [{ id: "priority_cost", text: "費用" }, { id: "priority_pain", text: "痛み" }, { id: "priority_eating", text: "快適な食事" }, { id: "priority_recovery", text: "手術後の早い回復と日常生活への復帰" }], next: { priority_cost: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_pain: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_eating: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_recovery: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] } } },
              disease_none: { question: "治療で最も重要だとお考えの部分は何ですか？", options: [{ id: "priority_cost", text: "費用" }, { id: "priority_pain", text: "痛み" }, { id: "priority_eating", text: "快適な食事" }, { id: "priority_recovery", text: "手術後の早い回復と日常生活への復帰" }], next: { priority_cost: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_pain: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_eating: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] }, priority_recovery: { question: "これまで治療をためらっていた理由はありますか？", options: [{ id: "hesitation_cost", text: "費用のために" }, { id: "hesitation_fear", text: "痛み/歯科恐怖症のために" }, { id: "hesitation_clinic", text: "適切な歯科選びが難しくて" }, { id: "hesitation_none", text: "特別な理由はありません" }] } } }
            }
          }
        }
      }
    }
  },

  // 歯茎関連の質問
  gum_issue: {
    question: "どのような症状がありますか？",
    options: [
      { id: "gum_bleeding", text: "歯茎から血が出ます" },
      { id: "gum_swelling", text: "歯茎が腫れています" },
      { id: "gum_recession", text: "歯茎が下がりました" },
      { id: "gum_wobbly", text: "歯が揺れています" }
    ],
    next: {
      gum_bleeding: {
        question: "いつ出血しますか？",
        options: [
          { id: "bleeding_brushing", text: "歯磨きの時だけ" },
          { id: "bleeding_often", text: "頻繁に出血します" },
          { id: "bleeding_always", text: "何もしなくても出血します" }
        ]
      },
      gum_swelling: {
        question: "腫れとともに痛みもありますか？",
        options: [
          { id: "swelling_pain_yes", text: "はい、痛いです" },
          { id: "swelling_pain_no", text: "いいえ、腫れだけです" }
        ]
      },
      gum_recession: {
        question: "歯がしみたり、敏感になったりしていますか？",
        options: [
          { id: "recession_sensitive_yes", text: "はい、しみます" },
          { id: "recession_sensitive_no", text: "いいえ" }
        ]
      },
      gum_wobbly: {
        question: "揺れの程度はいかがですか？",
        options: [
          { id: "wobbly_slight", text: "少し揺れます" },
          { id: "wobbly_severe", text: "かなり揺れます" }
        ]
      }
    }
  },

  // 定期検診関連
  checkup: {
    question: "特に気になる部分はありますか？",
    options: [
      { id: "checkup_prevention", text: "虫歯/歯茎の予防" },
      { id: "checkup_cleaning", text: "スケーリングを受けたいです" },
      { id: "checkup_concern", text: "特定の歯が気になります" },
      { id: "checkup_general", text: "全体的な検診のみ" }
    ]
  }
};
