import { LanguageQuestionTree } from './types';
export const QUESTION_TREE_MN: LanguageQuestionTree = {
  // Алхам 1: Эхний шинж тэмдгийг үнэлэх
  initial: {
    question: "Танд ямар шинж тэмдэг эсвэл эвгүй байдал байна вэ?",
    options: [
      { id: "pain", text: "Өвдөж байна" },
      { id: "aesthetic", text: "Гоо сайхны хувьд сайжруулахыг хүсч байна" },
      { id: "missing_tooth", text: "Шүд унасан" },
      { id: "gum_issue", text: "Буйлд асуудал байна" },
      { id: "checkup", text: "Тогтмол үзлэг ба урьдчилан сэргийлэлт" }
    ]
  },

  // Цоорол/мэдрэлийн эмчилгээтэй холбоотой асуулт (эхний асуулт)
  cavity_nerve: {
    question: "Одоо эвгүй байгаа нөхцөл байдал юу вэ?",
    options: [
      { id: "cavity_pain", text: "Шүд өвдөж байна" },
      { id: "cavity_sensitive", text: "Шүд хүйтэнд мэдрэмтгий байна" },
      { id: "cavity_broken", text: "Шүд хугарсан" },
      { id: "cavity_eating", text: "Хоол идэхэд эвгүй" },
      { id: "cavity_dark", text: "Шүд хар харагдаж байна" },
      { id: "cavity_brushing", text: "Шүд угаахад эвгүй" }
    ],
    next: {
      cavity_pain: {
        question: "Нэг тодорхой шүд эвгүй байна уу, эсвэл өргөн хэсэг эвгүй байна уу?",
        options: [
          { id: "specific_tooth", text: "Нэг тодорхой шүд эвгүй байна" },
          { id: "wide_area", text: "Зүүн/баруун дээд/доод өргөн хэсэг эвгүй байна" }
        ]
      },
      cavity_sensitive: {
        question: "Нэг тодорхой шүд эвгүй байна уу, эсвэл өргөн хэсэг эвгүй байна уу?",
        options: [
          { id: "specific_tooth", text: "Нэг тодорхой шүд эвгүй байна" },
          { id: "wide_area", text: "Зүүн/баруун дээд/доод өргөн хэсэг эвгүй байна" }
        ]
      },
      cavity_broken: {
        question: "Хугарсан шүд өвдөж байна уу?",
        options: [
          { id: "broken_painful", text: "Тийм, хугарсан бөгөөд өвдөж байна" },
          { id: "broken_not_painful", text: "Хугарсан ч өвдөхгүй байна" }
        ]
      },
      cavity_eating: {
        question: "Нэг тодорхой шүд эвгүй байна уу, эсвэл өргөн хэсэг эвгүй байна уу?",
        options: [
          { id: "specific_tooth", text: "Нэг тодорхой шүд эвгүй байна" },
          { id: "wide_area", text: "Зүүн/баруун дээд/доод өргөн хэсэг эвгүй байна" }
        ]
      },
      cavity_dark: {
        question: "Хар харагдаж буй шүд хаана байна вэ?",
        options: [
          { id: "dark_front", text: "Урд шүдний хэсэг" },
          { id: "dark_back", text: "Араа шүдний хэсэг" },
          { id: "dark_multiple", text: "Олон газар хар харагдаж байна" }
        ]
      },
      cavity_brushing: {
        question: "Нэг тодорхой шүд эвгүй байна уу, эсвэл өргөн хэсэг эвгүй байна уу?",
        options: [
          { id: "specific_tooth", text: "Нэг тодорхой шүд эвгүй байна" },
          { id: "wide_area", text: "Зүүн/баруун дээд/доод өргөн хэсэг эвгүй байна" }
        ]
      }
    }
  },

  // Өвдөлттэй холбоотой асуулт (ерөнхий)
  pain: {
    question: "Ямар нөхцөлд өвдөлт мэдрэгддэг вэ?",
    options: [
      { id: "pain_cold_hot", text: "Хүйтэн эсвэл халуунд мэдрэмтгий байхад" },
      { id: "pain_chewing", text: "Хоол зажилахад" },
      { id: "pain_always", text: "Амарч байсан ч үргэлж өвдөж байна" },
      { id: "pain_wisdom", text: "Сойз шүдний хэсэг өвдөж байна" }
    ],
    next: {
      pain_cold_hot: {
        question: "Өвдөлт хэр удаан үргэлжилдэг вэ?",
        options: [
          { id: "pain_short", text: "Түр зуур мэдрээд алга болно" },
          { id: "pain_long", text: "Нэг удаа мэдэрвэл удаан үргэлжилнэ" },
          { id: "pain_getting_worse", text: "Улам бүр муудаж байна" }
        ]
      },
      pain_chewing: {
        question: "Аль хэсэг өвдөж байна вэ?",
        options: [
          { id: "pain_front", text: "Урд шүдний хэсэг" },
          { id: "pain_back", text: "Араа шүдний хэсэг" },
          { id: "pain_multiple", text: "Олон газар өвдөж байна" }
        ]
      },
      pain_always: {
        question: "Хавдар эсвэл идээ гарсан уу?",
        options: [
          { id: "pain_swelling_yes", text: "Тийм, хавдсан эсвэл идээ байна" },
          { id: "pain_swelling_no", text: "Үгүй, зөвхөн өвдөлт байна" }
        ]
      },
      pain_wisdom: {
        question: "Сойз шүдний өвдөлт хэзээнээс эхэлсэн бэ?",
        options: [
          { id: "wisdom_recent", text: "Сүүлийн хэдэн өдрийн дотор" },
          { id: "wisdom_recurring", text: "Байнга давтагддаг" },
          { id: "wisdom_swelling", text: "Буйл их хавдсан" }
        ]
      }
    }
  },

  // Сойз шүдтэй холбоотой асуулт (сойз шүдний зөвлөгөө)
  wisdom_tooth: {
    question: "Одоо сойз шүд ямар байдалтай байна вэ?",
    options: [
      { id: "wisdom_pain", text: "Сойз шүдний хэсэг өвдөж байна" },
      { id: "wisdom_checkup", text: "Өвдөхгүй байгаа ч шалгуулмаар байна" }
    ],
    next: {
      // Өвдөж байна гэж сонгоход → байрлалын асуулт
      wisdom_pain: {
        question: "Одоо аль шүд өвдөж байна вэ?",
        options: [
          { id: "wisdom_upper", text: "Дээд сойз шүд" },
          { id: "wisdom_lower", text: "Доод сойз шүд" }
        ],
        next: {
          // Дээд сойз шүд сонгосны дараа → хэзээнээс эвгүй
          wisdom_upper: {
            question: "Сойз шүдний эвгүй мэдрэмж хэзээнээс эхэлсэн бэ?",
            options: [
              { id: "wisdom_first_time", text: "Анх удаа" },
              { id: "wisdom_recurring", text: "Өмнө нь ижил төстэй туршлага байсан, сайжирсан ч одоо дахин гарсан" }
            ],
            next: {
              wisdom_first_time: {
                question: "Сойз шүдний өвдөлтийн эмчилгээнд хамгийн их санаа зовоож буй зүйл юу вэ?",
                options: [
                  { id: "worry_possible", text: "Авах боломжтой эсэх" },
                  { id: "worry_fear", text: "Авах эмчилгээнээс айх" },
                  { id: "worry_daily", text: "Авсны дараа өдөр тутмын амьдралд эвгүй байх" }
                ],
                next: {
                  worry_possible: {
                    question: "Та өмнө нь зүрх судасны мэс засал хийлгэсэн эсвэл биеийн ерөнхий өвчтэй юу?",
                    options: [
                      { id: "disease_medication", text: "Өдөр бүр уудаг эм байна (эмийн уутаа авчрах)" },
                      { id: "disease_heart", text: "Өмнө нь зүрх, судасны мэс засал хийлгэсэн" },
                      { id: "disease_bp_diabetes", text: "Цусны даралт ихсэлт/Чихрийн шижин" },
                      { id: "disease_osteoporosis", text: "Ясны сийрэгжилт" },
                      { id: "disease_other", text: "Бусад биеийн өвчин" },
                      { id: "disease_none", text: "Байхгүй" }
                    ]
                  },
                  worry_fear: {
                    question: "Та өмнө нь зүрх судасны мэс засал хийлгэсэн эсвэл биеийн ерөнхий өвчтэй юу?",
                    options: [
                      { id: "disease_medication", text: "Өдөр бүр уудаг эм байна (эмийн уутаа авчрах)" },
                      { id: "disease_heart", text: "Өмнө нь зүрх, судасны мэс засал хийлгэсэн" },
                      { id: "disease_bp_diabetes", text: "Цусны даралт ихсэлт/Чихрийн шижин" },
                      { id: "disease_osteoporosis", text: "Ясны сийрэгжилт" },
                      { id: "disease_other", text: "Бусад биеийн өвчин" },
                      { id: "disease_none", text: "Байхгүй" }
                    ]
                  },
                  worry_daily: {
                    question: "Та өмнө нь зүрх судасны мэс засал хийлгэсэн эсвэл биеийн ерөнхий өвчтэй юу?",
                    options: [
                      { id: "disease_medication", text: "Өдөр бүр уудаг эм байна (эмийн уутаа авчрах)" },
                      { id: "disease_heart", text: "Өмнө нь зүрх, судасны мэс засал хийлгэсэн" },
                      { id: "disease_bp_diabetes", text: "Цусны даралт ихсэлт/Чихрийн шижин" },
                      { id: "disease_osteoporosis", text: "Ясны сийрэгжилт" },
                      { id: "disease_other", text: "Бусад биеийн өвчин" },
                      { id: "disease_none", text: "Байхгүй" }
                    ]
                  }
                }
              },
              wisdom_recurring: {
                question: "Сойз шүдний өвдөлтийн эмчилгээнд хамгийн их санаа зовоож буй зүйл юу вэ?",
                options: [
                  { id: "worry_possible", text: "Авах боломжтой эсэх" },
                  { id: "worry_fear", text: "Авах эмчилгээнээс айх" },
                  { id: "worry_daily", text: "Авсны дараа өдөр тутмын амьдралд эвгүй байх" }
                ],
                next: {
                  worry_possible: {
                    question: "Та өмнө нь зүрх судасны мэс засал хийлгэсэн эсвэл биеийн ерөнхий өвчтэй юу?",
                    options: [
                      { id: "disease_medication", text: "Өдөр бүр уудаг эм байна (эмийн уутаа авчрах)" },
                      { id: "disease_heart", text: "Өмнө нь зүрх, судасны мэс засал хийлгэсэн" },
                      { id: "disease_bp_diabetes", text: "Цусны даралт ихсэлт/Чихрийн шижин" },
                      { id: "disease_osteoporosis", text: "Ясны сийрэгжилт" },
                      { id: "disease_other", text: "Бусад биеийн өвчин" },
                      { id: "disease_none", text: "Байхгүй" }
                    ]
                  },
                  worry_fear: {
                    question: "Та өмнө нь зүрх судасны мэс засал хийлгэсэн эсвэл биеийн ерөнхий өвчтэй юу?",
                    options: [
                      { id: "disease_medication", text: "Өдөр бүр уудаг эм байна (эмийн уутаа авчрах)" },
                      { id: "disease_heart", text: "Өмнө нь зүрх, судасны мэс засал хийлгэсэн" },
                      { id: "disease_bp_diabetes", text: "Цусны даралт ихсэлт/Чихрийн шижин" },
                      { id: "disease_osteoporosis", text: "Ясны сийрэгжилт" },
                      { id: "disease_other", text: "Бусад биеийн өвчин" },
                      { id: "disease_none", text: "Байхгүй" }
                    ]
                  },
                  worry_daily: {
                    question: "Та өмнө нь зүрх судасны мэс засал хийлгэсэн эсвэл биеийн ерөнхий өвчтэй юу?",
                    options: [
                      { id: "disease_medication", text: "Өдөр бүр уудаг эм байна (эмийн уутаа авчрах)" },
                      { id: "disease_heart", text: "Өмнө нь зүрх, судасны мэс засал хийлгэсэн" },
                      { id: "disease_bp_diabetes", text: "Цусны даралт ихсэлт/Чихрийн шижин" },
                      { id: "disease_osteoporosis", text: "Ясны сийрэгжилт" },
                      { id: "disease_other", text: "Бусад биеийн өвчин" },
                      { id: "disease_none", text: "Байхгүй" }
                    ]
                  }
                }
              }
            }
          },
          // Доод сойз шүд сонгосны дараа → хэзээнээс эвгүй
          wisdom_lower: {
            question: "Сойз шүдний эвгүй мэдрэмж хэзээнээс эхэлсэн бэ?",
            options: [
              { id: "wisdom_first_time", text: "Анх удаа" },
              { id: "wisdom_recurring", text: "Өмнө нь ижил төстэй туршлага байсан, сайжирсан ч одоо дахин гарсан" }
            ],
            next: {
              wisdom_first_time: {
                question: "Сойз шүдний өвдөлтийн эмчилгээнд хамгийн их санаа зовоож буй зүйл юу вэ?",
                options: [
                  { id: "worry_possible", text: "Авах боломжтой эсэх" },
                  { id: "worry_fear", text: "Авах эмчилгээнээс айх" },
                  { id: "worry_daily", text: "Авсны дараа өдөр тутмын амьдралд эвгүй байх" }
                ],
                next: {
                  worry_possible: {
                    question: "Та өмнө нь зүрх судасны мэс засал хийлгэсэн эсвэл биеийн ерөнхий өвчтэй юу?",
                    options: [
                      { id: "disease_medication", text: "Өдөр бүр уудаг эм байна (эмийн уутаа авчрах)" },
                      { id: "disease_heart", text: "Өмнө нь зүрх, судасны мэс засал хийлгэсэн" },
                      { id: "disease_bp_diabetes", text: "Цусны даралт ихсэлт/Чихрийн шижин" },
                      { id: "disease_osteoporosis", text: "Ясны сийрэгжилт" },
                      { id: "disease_other", text: "Бусад биеийн өвчин" },
                      { id: "disease_none", text: "Байхгүй" }
                    ]
                  },
                  worry_fear: {
                    question: "Та өмнө нь зүрх судасны мэс засал хийлгэсэн эсвэл биеийн ерөнхий өвчтэй юу?",
                    options: [
                      { id: "disease_medication", text: "Өдөр бүр уудаг эм байна (эмийн уутаа авчрах)" },
                      { id: "disease_heart", text: "Өмнө нь зүрх, судасны мэс засал хийлгэсэн" },
                      { id: "disease_bp_diabetes", text: "Цусны даралт ихсэлт/Чихрийн шижин" },
                      { id: "disease_osteoporosis", text: "Ясны сийрэгжилт" },
                      { id: "disease_other", text: "Бусад биеийн өвчин" },
                      { id: "disease_none", text: "Байхгүй" }
                    ]
                  },
                  worry_daily: {
                    question: "Та өмнө нь зүрх судасны мэс засал хийлгэсэн эсвэл биеийн ерөнхий өвчтэй юу?",
                    options: [
                      { id: "disease_medication", text: "Өдөр бүр уудаг эм байна (эмийн уутаа авчрах)" },
                      { id: "disease_heart", text: "Өмнө нь зүрх, судасны мэс засал хийлгэсэн" },
                      { id: "disease_bp_diabetes", text: "Цусны даралт ихсэлт/Чихрийн шижин" },
                      { id: "disease_osteoporosis", text: "Ясны сийрэгжилт" },
                      { id: "disease_other", text: "Бусад биеийн өвчин" },
                      { id: "disease_none", text: "Байхгүй" }
                    ]
                  }
                }
              },
              wisdom_recurring: {
                question: "Сойз шүдний өвдөлтийн эмчилгээнд хамгийн их санаа зовоож буй зүйл юу вэ?",
                options: [
                  { id: "worry_possible", text: "Авах боломжтой эсэх" },
                  { id: "worry_fear", text: "Авах эмчилгээнээс айх" },
                  { id: "worry_daily", text: "Авсны дараа өдөр тутмын амьдралд эвгүй байх" }
                ],
                next: {
                  worry_possible: {
                    question: "Та өмнө нь зүрх судасны мэс засал хийлгэсэн эсвэл биеийн ерөнхий өвчтэй юу?",
                    options: [
                      { id: "disease_medication", text: "Өдөр бүр уудаг эм байна (эмийн уутаа авчрах)" },
                      { id: "disease_heart", text: "Өмнө нь зүрх, судасны мэс засал хийлгэсэн" },
                      { id: "disease_bp_diabetes", text: "Цусны даралт ихсэлт/Чихрийн шижин" },
                      { id: "disease_osteoporosis", text: "Ясны сийрэгжилт" },
                      { id: "disease_other", text: "Бусад биеийн өвчин" },
                      { id: "disease_none", text: "Байхгүй" }
                    ]
                  },
                  worry_fear: {
                    question: "Та өмнө нь зүрх судасны мэс засал хийлгэсэн эсвэл биеийн ерөнхий өвчтэй юу?",
                    options: [
                      { id: "disease_medication", text: "Өдөр бүр уудаг эм байна (эмийн уутаа авчрах)" },
                      { id: "disease_heart", text: "Өмнө нь зүрх, судасны мэс засал хийлгэсэн" },
                      { id: "disease_bp_diabetes", text: "Цусны даралт ихсэлт/Чихрийн шижин" },
                      { id: "disease_osteoporosis", text: "Ясны сийрэгжилт" },
                      { id: "disease_other", text: "Бусад биеийн өвчин" },
                      { id: "disease_none", text: "Байхгүй" }
                    ]
                  },
                  worry_daily: {
                    question: "Та өмнө нь зүрх судасны мэс засал хийлгэсэн эсвэл биеийн ерөнхий өвчтэй юу?",
                    options: [
                      { id: "disease_medication", text: "Өдөр бүр уудаг эм байна (эмийн уутаа авчрах)" },
                      { id: "disease_heart", text: "Өмнө нь зүрх, судасны мэс засал хийлгэсэн" },
                      { id: "disease_bp_diabetes", text: "Цусны даралт ихсэлт/Чихрийн шижин" },
                      { id: "disease_osteoporosis", text: "Ясны сийрэгжилт" },
                      { id: "disease_other", text: "Бусад биеийн өвчин" },
                      { id: "disease_none", text: "Байхгүй" }
                    ]
                  }
                }
              }
            }
          }
        }
      },
      // Өвдөхгүй ч шалгуулмаар байна гэж сонгоход → эргэлзэж буй шалтгааны асуулт → эцсийн зөвлөмж
      wisdom_checkup: {
        question: "Сойз шүдний эмчилгээ хийлгэвэл хамгийн их санаа зовоох зүйл юу вэ?",
        options: [
          { id: "checkup_worry_possible", text: "Авах боломжтой эсэх" },
          { id: "checkup_worry_fear", text: "Авах эмчилгээнээс айх" },
          { id: "checkup_worry_daily", text: "Авсны дараа өдөр тутмын амьдралд эвгүй байх" }
        ],
        next: {
          checkup_worry_possible: {
            question: "Та өмнө нь зүрх судасны мэс засал хийлгэсэн эсвэл биеийн ерөнхий өвчтэй юу?",
            options: [
              { id: "disease_medication", text: "Өдөр бүр уудаг эм байна (эмийн уутаа авчрах)" },
              { id: "disease_heart", text: "Өмнө нь зүрх, судасны мэс засал хийлгэсэн" },
              { id: "disease_bp_diabetes", text: "Цусны даралт ихсэлт/Чихрийн шижин" },
              { id: "disease_osteoporosis", text: "Ясны сийрэгжилт" },
              { id: "disease_other", text: "Бусад биеийн өвчин" },
              { id: "disease_none", text: "Байхгүй" }
            ],
            next: {
              disease_medication: {
                question: "Шалгуулахдаа хамт үзүүлмээр байгаа хэсэг байна уу?",
                options: [
                  { id: "extra_cavity", text: "Цоорлын шалгалт" },
                  { id: "extra_gum", text: "Буйлын шалгалт" },
                  { id: "extra_scaling", text: "Чулуу цэвэрлэх" },
                  { id: "extra_none", text: "Үгүй, зөвхөн сойз шүд шалгуулахыг хүсч байна" }
                ]
              },
              disease_heart: {
                question: "Шалгуулахдаа хамт үзүүлмээр байгаа хэсэг байна уу?",
                options: [
                  { id: "extra_cavity", text: "Цоорлын шалгалт" },
                  { id: "extra_gum", text: "Буйлын шалгалт" },
                  { id: "extra_scaling", text: "Чулуу цэвэрлэх" },
                  { id: "extra_none", text: "Үгүй, зөвхөн сойз шүд шалгуулахыг хүсч байна" }
                ]
              },
              disease_bp_diabetes: {
                question: "Шалгуулахдаа хамт үзүүлмээр байгаа хэсэг байна уу?",
                options: [
                  { id: "extra_cavity", text: "Цоорлын шалгалт" },
                  { id: "extra_gum", text: "Буйлын шалгалт" },
                  { id: "extra_scaling", text: "Чулуу цэвэрлэх" },
                  { id: "extra_none", text: "Үгүй, зөвхөн сойз шүд шалгуулахыг хүсч байна" }
                ]
              },
              disease_osteoporosis: {
                question: "Шалгуулахдаа хамт үзүүлмээр байгаа хэсэг байна уу?",
                options: [
                  { id: "extra_cavity", text: "Цоорлын шалгалт" },
                  { id: "extra_gum", text: "Буйлын шалгалт" },
                  { id: "extra_scaling", text: "Чулуу цэвэрлэх" },
                  { id: "extra_none", text: "Үгүй, зөвхөн сойз шүд шалгуулахыг хүсч байна" }
                ]
              },
              disease_other: {
                question: "Шалгуулахдаа хамт үзүүлмээр байгаа хэсэг байна уу?",
                options: [
                  { id: "extra_cavity", text: "Цоорлын шалгалт" },
                  { id: "extra_gum", text: "Буйлын шалгалт" },
                  { id: "extra_scaling", text: "Чулуу цэвэрлэх" },
                  { id: "extra_none", text: "Үгүй, зөвхөн сойз шүд шалгуулахыг хүсч байна" }
                ]
              },
              disease_none: {
                question: "Шалгуулахдаа хамт үзүүлмээр байгаа хэсэг байна уу?",
                options: [
                  { id: "extra_cavity", text: "Цоорлын шалгалт" },
                  { id: "extra_gum", text: "Буйлын шалгалт" },
                  { id: "extra_scaling", text: "Чулуу цэвэрлэх" },
                  { id: "extra_none", text: "Үгүй, зөвхөн сойз шүд шалгуулахыг хүсч байна" }
                ]
              }
            }
          },
          checkup_worry_fear: {
            question: "Та өмнө нь зүрх судасны мэс засал хийлгэсэн эсвэл биеийн ерөнхий өвчтэй юу?",
            options: [
              { id: "disease_medication", text: "Өдөр бүр уудаг эм байна (эмийн уутаа авчрах)" },
              { id: "disease_heart", text: "Өмнө нь зүрх, судасны мэс засал хийлгэсэн" },
              { id: "disease_bp_diabetes", text: "Цусны даралт ихсэлт/Чихрийн шижин" },
              { id: "disease_osteoporosis", text: "Ясны сийрэгжилт" },
              { id: "disease_other", text: "Бусад биеийн өвчин" },
              { id: "disease_none", text: "Байхгүй" }
            ],
            next: {
              disease_medication: {
                question: "Шалгуулахдаа хамт үзүүлмээр байгаа хэсэг байна уу?",
                options: [
                  { id: "extra_cavity", text: "Цоорлын шалгалт" },
                  { id: "extra_gum", text: "Буйлын шалгалт" },
                  { id: "extra_scaling", text: "Чулуу цэвэрлэх" },
                  { id: "extra_none", text: "Үгүй, зөвхөн сойз шүд шалгуулахыг хүсч байна" }
                ]
              },
              disease_heart: {
                question: "Шалгуулахдаа хамт үзүүлмээр байгаа хэсэг байна уу?",
                options: [
                  { id: "extra_cavity", text: "Цоорлын шалгалт" },
                  { id: "extra_gum", text: "Буйлын шалгалт" },
                  { id: "extra_scaling", text: "Чулуу цэвэрлэх" },
                  { id: "extra_none", text: "Үгүй, зөвхөн сойз шүд шалгуулахыг хүсч байна" }
                ]
              },
              disease_bp_diabetes: {
                question: "Шалгуулахдаа хамт үзүүлмээр байгаа хэсэг байна уу?",
                options: [
                  { id: "extra_cavity", text: "Цоорлын шалгалт" },
                  { id: "extra_gum", text: "Буйлын шалгалт" },
                  { id: "extra_scaling", text: "Чулуу цэвэрлэх" },
                  { id: "extra_none", text: "Үгүй, зөвхөн сойз шүд шалгуулахыг хүсч байна" }
                ]
              },
              disease_osteoporosis: {
                question: "Шалгуулахдаа хамт үзүүлмээр байгаа хэсэг байна уу?",
                options: [
                  { id: "extra_cavity", text: "Цоорлын шалгалт" },
                  { id: "extra_gum", text: "Буйлын шалгалт" },
                  { id: "extra_scaling", text: "Чулуу цэвэрлэх" },
                  { id: "extra_none", text: "Үгүй, зөвхөн сойз шүд шалгуулахыг хүсч байна" }
                ]
              },
              disease_other: {
                question: "Шалгуулахдаа хамт үзүүлмээр байгаа хэсэг байна уу?",
                options: [
                  { id: "extra_cavity", text: "Цоорлын шалгалт" },
                  { id: "extra_gum", text: "Буйлын шалгалт" },
                  { id: "extra_scaling", text: "Чулуу цэвэрлэх" },
                  { id: "extra_none", text: "Үгүй, зөвхөн сойз шүд шалгуулахыг хүсч байна" }
                ]
              },
              disease_none: {
                question: "Шалгуулахдаа хамт үзүүлмээр байгаа хэсэг байна уу?",
                options: [
                  { id: "extra_cavity", text: "Цоорлын шалгалт" },
                  { id: "extra_gum", text: "Буйлын шалгалт" },
                  { id: "extra_scaling", text: "Чулуу цэвэрлэх" },
                  { id: "extra_none", text: "Үгүй, зөвхөн сойз шүд шалгуулахыг хүсч байна" }
                ]
              }
            }
          },
          checkup_worry_daily: {
            question: "Та өмнө нь зүрх судасны мэс засал хийлгэсэн эсвэл биеийн ерөнхий өвчтэй юу?",
            options: [
              { id: "disease_medication", text: "Өдөр бүр уудаг эм байна (эмийн уутаа авчрах)" },
              { id: "disease_heart", text: "Өмнө нь зүрх, судасны мэс засал хийлгэсэн" },
              { id: "disease_bp_diabetes", text: "Цусны даралт ихсэлт/Чихрийн шижин" },
              { id: "disease_osteoporosis", text: "Ясны сийрэгжилт" },
              { id: "disease_other", text: "Бусад биеийн өвчин" },
              { id: "disease_none", text: "Байхгүй" }
            ],
            next: {
              disease_medication: {
                question: "Шалгуулахдаа хамт үзүүлмээр байгаа хэсэг байна уу?",
                options: [
                  { id: "extra_cavity", text: "Цоорлын шалгалт" },
                  { id: "extra_gum", text: "Буйлын шалгалт" },
                  { id: "extra_scaling", text: "Чулуу цэвэрлэх" },
                  { id: "extra_none", text: "Үгүй, зөвхөн сойз шүд шалгуулахыг хүсч байна" }
                ]
              },
              disease_heart: {
                question: "Шалгуулахдаа хамт үзүүлмээр байгаа хэсэг байна уу?",
                options: [
                  { id: "extra_cavity", text: "Цоорлын шалгалт" },
                  { id: "extra_gum", text: "Буйлын шалгалт" },
                  { id: "extra_scaling", text: "Чулуу цэвэрлэх" },
                  { id: "extra_none", text: "Үгүй, зөвхөн сойз шүд шалгуулахыг хүсч байна" }
                ]
              },
              disease_bp_diabetes: {
                question: "Шалгуулахдаа хамт үзүүлмээр байгаа хэсэг байна уу?",
                options: [
                  { id: "extra_cavity", text: "Цоорлын шалгалт" },
                  { id: "extra_gum", text: "Буйлын шалгалт" },
                  { id: "extra_scaling", text: "Чулуу цэвэрлэх" },
                  { id: "extra_none", text: "Үгүй, зөвхөн сойз шүд шалгуулахыг хүсч байна" }
                ]
              },
              disease_osteoporosis: {
                question: "Шалгуулахдаа хамт үзүүлмээр байгаа хэсэг байна уу?",
                options: [
                  { id: "extra_cavity", text: "Цоорлын шалгалт" },
                  { id: "extra_gum", text: "Буйлын шалгалт" },
                  { id: "extra_scaling", text: "Чулуу цэвэрлэх" },
                  { id: "extra_none", text: "Үгүй, зөвхөн сойз шүд шалгуулахыг хүсч байна" }
                ]
              },
              disease_other: {
                question: "Шалгуулахдаа хамт үзүүлмээр байгаа хэсэг байна уу?",
                options: [
                  { id: "extra_cavity", text: "Цоорлын шалгалт" },
                  { id: "extra_gum", text: "Буйлын шалгалт" },
                  { id: "extra_scaling", text: "Чулуу цэвэрлэх" },
                  { id: "extra_none", text: "Үгүй, зөвхөн сойз шүд шалгуулахыг хүсч байна" }
                ]
              },
              disease_none: {
                question: "Шалгуулахдаа хамт үзүүлмээр байгаа хэсэг байна уу?",
                options: [
                  { id: "extra_cavity", text: "Цоорлын шалгалт" },
                  { id: "extra_gum", text: "Буйлын шалгалт" },
                  { id: "extra_scaling", text: "Чулуу цэвэрлэх" },
                  { id: "extra_none", text: "Үгүй, зөвхөн сойз шүд шалгуулахыг хүсч байна" }
                ]
              }
            }
          }
        }
      }
    }
  },

  // Гоо сайхантай холбоотой асуулт
  aesthetic: {
    question: "Ямар хэсгийг сайжруулахыг хүсч байна вэ?",
    options: [
      { id: "aesthetic_color", text: "Шүдний өнгө шаргалсан эсвэл өнгө өөрчлөгдсөн" },
      { id: "aesthetic_shape", text: "Шүдний хэлбэр эсвэл хэмжээ" },
      { id: "aesthetic_gap", text: "Шүд хоорондын зай" },
      { id: "aesthetic_alignment", text: "Шүдний эгнээ жигд бус" }
    ],
    next: {
      aesthetic_color: {
        question: "Өнгө өөрчлөгдсөн түвшин ба шалтгаан нь юу вэ?",
        options: [
          { id: "color_coffee", text: "Кофе/тамхинаас болсон толбо" },
          { id: "color_aging", text: "Насжилтаас болсон ерөнхий өнгө өөрчлөлт" },
          { id: "color_single", text: "Зөвхөн зарим шүд бараан өнгөтэй" }
        ]
      },
      aesthetic_shape: {
        question: "Ямар асуудал байна вэ?",
        options: [
          { id: "shape_small", text: "Шүд жижиг" },
          { id: "shape_chipped", text: "Шүд хугарсан эсвэл элэгдсэн" },
          { id: "shape_uneven", text: "Шүдний урт жигд бус" }
        ]
      },
      aesthetic_gap: {
        question: "Зай байгаа байрлал хаана вэ?",
        options: [
          { id: "gap_front", text: "Урд шүд хооронд" },
          { id: "gap_multiple", text: "Олон газар зай байна" }
        ]
      },
      aesthetic_alignment: {
        question: "Эгнээний асуудлын түвшин ямар вэ?",
        options: [
          { id: "alignment_mild", text: "Бага зэрэг муруй" },
          { id: "alignment_moderate", text: "Дунд зэргийн давхар шүд" },
          { id: "alignment_severe", text: "Их муруй" }
        ]
      }
    }
  },

  // Шүд алдалттай холбоотой асуулт (имплант зөвлөгөө) - А1: Одоогийн байдал
  missing_tooth: {
    question: "Одоо шүдний байдал ямар байна вэ?",
    options: [
      { id: "missing_upper_all", text: "Дээд шүд бүгд байхгүй эсвэл авах төлөвлөгөөтэй" },
      { id: "missing_lower_all", text: "Доод шүд бүгд байхгүй эсвэл авах төлөвлөгөөтэй" },
      { id: "missing_all", text: "Бараг бүх шүд байхгүй эсвэл авах төлөвлөгөөтэй" },
      { id: "missing_partial", text: "10-аас доош хэсэгчилсэн олон шүд байхгүй эсвэл авах төлөвлөгөөтэй" },
      { id: "implant_revision", text: "Имплантын дахин мэс засал хэрэгтэй" }
    ],
    next: {
      // А2: Хиймэл шүд байгаа эсэх (бүх сонголтод нийтлэг)
      missing_upper_all: {
        question: "Одоо хиймэл шүд зүүж байна уу?",
        options: [
          { id: "denture_yes", text: "Тийм" },
          { id: "denture_no", text: "Үгүй" }
        ],
        next: {
          // А3: Биеийн ерөнхий өвчин шалгах
          denture_yes: {
            question: "Одоо байгаа биеийн ерөнхий өвчин байна уу?",
            options: [
              { id: "disease_diabetes", text: "Чихрийн шижин" },
              { id: "disease_hypertension", text: "Цусны даралт ихсэлт" },
              { id: "disease_osteoporosis", text: "Ясны сийрэгжилт" },
              { id: "disease_heart", text: "Зүрхний өвчин" },
              { id: "disease_none", text: "Байхгүй" }
            ],
            next: {
              // А4: Эмчилгээнд чухал хэсэг (А5-ын үүрэг)
              disease_diabetes: {
                question: "Эмчилгээнд хамгийн чухал гэж үзэж буй зүйл юу вэ?",
                options: [
                  { id: "priority_cost", text: "Зардал" },
                  { id: "priority_pain", text: "Өвдөлт" },
                  { id: "priority_eating", text: "Тухтай хооллолт" },
                  { id: "priority_recovery", text: "Мэс заслын дараа хурдан сэргэж, хэвийн амьдралд буцах" }
                ],
                next: {
                  // А5: Эргэлзэж буй шалтгаан (А6-ын үүрэг)
                  priority_cost: {
                    question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?",
                    options: [
                      { id: "hesitation_cost", text: "Зардлын улмаас" },
                      { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" },
                      { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" },
                      { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }
                    ]
                  },
                  priority_pain: {
                    question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?",
                    options: [
                      { id: "hesitation_cost", text: "Зардлын улмаас" },
                      { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" },
                      { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" },
                      { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }
                    ]
                  },
                  priority_eating: {
                    question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?",
                    options: [
                      { id: "hesitation_cost", text: "Зардлын улмаас" },
                      { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" },
                      { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" },
                      { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }
                    ]
                  },
                  priority_recovery: {
                    question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?",
                    options: [
                      { id: "hesitation_cost", text: "Зардлын улмаас" },
                      { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" },
                      { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" },
                      { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }
                    ]
                  }
                }
              },
              disease_hypertension: {
                question: "Эмчилгээнд хамгийн чухал гэж үзэж буй зүйл юу вэ?",
                options: [
                  { id: "priority_cost", text: "Зардал" },
                  { id: "priority_pain", text: "Өвдөлт" },
                  { id: "priority_eating", text: "Тухтай хооллолт" },
                  { id: "priority_recovery", text: "Мэс заслын дараа хурдан сэргэж, хэвийн амьдралд буцах" }
                ],
                next: {
                  priority_cost: {
                    question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?",
                    options: [
                      { id: "hesitation_cost", text: "Зардлын улмаас" },
                      { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" },
                      { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" },
                      { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }
                    ]
                  },
                  priority_pain: {
                    question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?",
                    options: [
                      { id: "hesitation_cost", text: "Зардлын улмаас" },
                      { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" },
                      { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" },
                      { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }
                    ]
                  },
                  priority_eating: {
                    question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?",
                    options: [
                      { id: "hesitation_cost", text: "Зардлын улмаас" },
                      { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" },
                      { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" },
                      { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }
                    ]
                  },
                  priority_recovery: {
                    question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?",
                    options: [
                      { id: "hesitation_cost", text: "Зардлын улмаас" },
                      { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" },
                      { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" },
                      { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }
                    ]
                  }
                }
              },
              disease_osteoporosis: {
                question: "Эмчилгээнд хамгийн чухал гэж үзэж буй зүйл юу вэ?",
                options: [
                  { id: "priority_cost", text: "Зардал" },
                  { id: "priority_pain", text: "Өвдөлт" },
                  { id: "priority_eating", text: "Тухтай хооллолт" },
                  { id: "priority_recovery", text: "Мэс заслын дараа хурдан сэргэж, хэвийн амьдралд буцах" }
                ],
                next: {
                  priority_cost: {
                    question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?",
                    options: [
                      { id: "hesitation_cost", text: "Зардлын улмаас" },
                      { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" },
                      { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" },
                      { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }
                    ]
                  },
                  priority_pain: {
                    question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?",
                    options: [
                      { id: "hesitation_cost", text: "Зардлын улмаас" },
                      { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" },
                      { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" },
                      { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }
                    ]
                  },
                  priority_eating: {
                    question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?",
                    options: [
                      { id: "hesitation_cost", text: "Зардлын улмаас" },
                      { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" },
                      { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" },
                      { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }
                    ]
                  },
                  priority_recovery: {
                    question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?",
                    options: [
                      { id: "hesitation_cost", text: "Зардлын улмаас" },
                      { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" },
                      { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" },
                      { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }
                    ]
                  }
                }
              },
              disease_heart: {
                question: "Эмчилгээнд хамгийн чухал гэж үзэж буй зүйл юу вэ?",
                options: [
                  { id: "priority_cost", text: "Зардал" },
                  { id: "priority_pain", text: "Өвдөлт" },
                  { id: "priority_eating", text: "Тухтай хооллолт" },
                  { id: "priority_recovery", text: "Мэс заслын дараа хурдан сэргэж, хэвийн амьдралд буцах" }
                ],
                next: {
                  priority_cost: {
                    question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?",
                    options: [
                      { id: "hesitation_cost", text: "Зардлын улмаас" },
                      { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" },
                      { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" },
                      { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }
                    ]
                  },
                  priority_pain: {
                    question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?",
                    options: [
                      { id: "hesitation_cost", text: "Зардлын улмаас" },
                      { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" },
                      { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" },
                      { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }
                    ]
                  },
                  priority_eating: {
                    question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?",
                    options: [
                      { id: "hesitation_cost", text: "Зардлын улмаас" },
                      { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" },
                      { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" },
                      { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }
                    ]
                  },
                  priority_recovery: {
                    question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?",
                    options: [
                      { id: "hesitation_cost", text: "Зардлын улмаас" },
                      { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" },
                      { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" },
                      { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }
                    ]
                  }
                }
              },
              disease_none: {
                question: "Эмчилгээнд хамгийн чухал гэж үзэж буй зүйл юу вэ?",
                options: [
                  { id: "priority_cost", text: "Зардал" },
                  { id: "priority_pain", text: "Өвдөлт" },
                  { id: "priority_eating", text: "Тухтай хооллолт" },
                  { id: "priority_recovery", text: "Мэс заслын дараа хурдан сэргэж, хэвийн амьдралд буцах" }
                ],
                next: {
                  priority_cost: {
                    question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?",
                    options: [
                      { id: "hesitation_cost", text: "Зардлын улмаас" },
                      { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" },
                      { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" },
                      { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }
                    ]
                  },
                  priority_pain: {
                    question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?",
                    options: [
                      { id: "hesitation_cost", text: "Зардлын улмаас" },
                      { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" },
                      { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" },
                      { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }
                    ]
                  },
                  priority_eating: {
                    question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?",
                    options: [
                      { id: "hesitation_cost", text: "Зардлын улмаас" },
                      { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" },
                      { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" },
                      { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }
                    ]
                  },
                  priority_recovery: {
                    question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?",
                    options: [
                      { id: "hesitation_cost", text: "Зардлын улмаас" },
                      { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" },
                      { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" },
                      { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }
                    ]
                  }
                }
              }
            }
          },
          denture_no: {
            question: "Одоо байгаа биеийн ерөнхий өвчин байна уу?",
            options: [
              { id: "disease_diabetes", text: "Чихрийн шижин" },
              { id: "disease_hypertension", text: "Цусны даралт ихсэлт" },
              { id: "disease_osteoporosis", text: "Ясны сийрэгжилт" },
              { id: "disease_heart", text: "Зүрхний өвчин" },
              { id: "disease_none", text: "Байхгүй" }
            ],
            next: {
              disease_diabetes: {
                question: "Эмчилгээнд хамгийн чухал гэж үзэж буй зүйл юу вэ?",
                options: [
                  { id: "priority_cost", text: "Зардал" },
                  { id: "priority_pain", text: "Өвдөлт" },
                  { id: "priority_eating", text: "Тухтай хооллолт" },
                  { id: "priority_recovery", text: "Мэс заслын дараа хурдан сэргэж, хэвийн амьдралд буцах" }
                ],
                next: {
                  priority_cost: {
                    question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?",
                    options: [
                      { id: "hesitation_cost", text: "Зардлын улмаас" },
                      { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" },
                      { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" },
                      { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }
                    ]
                  },
                  priority_pain: {
                    question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?",
                    options: [
                      { id: "hesitation_cost", text: "Зардлын улмаас" },
                      { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" },
                      { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" },
                      { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }
                    ]
                  },
                  priority_eating: {
                    question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?",
                    options: [
                      { id: "hesitation_cost", text: "Зардлын улмаас" },
                      { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" },
                      { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" },
                      { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }
                    ]
                  },
                  priority_recovery: {
                    question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?",
                    options: [
                      { id: "hesitation_cost", text: "Зардлын улмаас" },
                      { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" },
                      { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" },
                      { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }
                    ]
                  }
                }
              },
              disease_hypertension: {
                question: "Эмчилгээнд хамгийн чухал гэж үзэж буй зүйл юу вэ?",
                options: [
                  { id: "priority_cost", text: "Зардал" },
                  { id: "priority_pain", text: "Өвдөлт" },
                  { id: "priority_eating", text: "Тухтай хооллолт" },
                  { id: "priority_recovery", text: "Мэс заслын дараа хурдан сэргэж, хэвийн амьдралд буцах" }
                ],
                next: {
                  priority_cost: {
                    question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?",
                    options: [
                      { id: "hesitation_cost", text: "Зардлын улмаас" },
                      { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" },
                      { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" },
                      { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }
                    ]
                  },
                  priority_pain: {
                    question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?",
                    options: [
                      { id: "hesitation_cost", text: "Зардлын улмаас" },
                      { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" },
                      { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" },
                      { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }
                    ]
                  },
                  priority_eating: {
                    question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?",
                    options: [
                      { id: "hesitation_cost", text: "Зардлын улмаас" },
                      { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" },
                      { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" },
                      { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }
                    ]
                  },
                  priority_recovery: {
                    question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?",
                    options: [
                      { id: "hesitation_cost", text: "Зардлын улмаас" },
                      { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" },
                      { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" },
                      { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }
                    ]
                  }
                }
              },
              disease_osteoporosis: {
                question: "Эмчилгээнд хамгийн чухал гэж үзэж буй зүйл юу вэ?",
                options: [
                  { id: "priority_cost", text: "Зардал" },
                  { id: "priority_pain", text: "Өвдөлт" },
                  { id: "priority_eating", text: "Тухтай хооллолт" },
                  { id: "priority_recovery", text: "Мэс заслын дараа хурдан сэргэж, хэвийн амьдралд буцах" }
                ],
                next: {
                  priority_cost: {
                    question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?",
                    options: [
                      { id: "hesitation_cost", text: "Зардлын улмаас" },
                      { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" },
                      { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" },
                      { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }
                    ]
                  },
                  priority_pain: {
                    question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?",
                    options: [
                      { id: "hesitation_cost", text: "Зардлын улмаас" },
                      { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" },
                      { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" },
                      { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }
                    ]
                  },
                  priority_eating: {
                    question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?",
                    options: [
                      { id: "hesitation_cost", text: "Зардлын улмаас" },
                      { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" },
                      { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" },
                      { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }
                    ]
                  },
                  priority_recovery: {
                    question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?",
                    options: [
                      { id: "hesitation_cost", text: "Зардлын улмаас" },
                      { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" },
                      { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" },
                      { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }
                    ]
                  }
                }
              },
              disease_heart: {
                question: "Эмчилгээнд хамгийн чухал гэж үзэж буй зүйл юу вэ?",
                options: [
                  { id: "priority_cost", text: "Зардал" },
                  { id: "priority_pain", text: "Өвдөлт" },
                  { id: "priority_eating", text: "Тухтай хооллолт" },
                  { id: "priority_recovery", text: "Мэс заслын дараа хурдан сэргэж, хэвийн амьдралд буцах" }
                ],
                next: {
                  priority_cost: {
                    question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?",
                    options: [
                      { id: "hesitation_cost", text: "Зардлын улмаас" },
                      { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" },
                      { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" },
                      { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }
                    ]
                  },
                  priority_pain: {
                    question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?",
                    options: [
                      { id: "hesitation_cost", text: "Зардлын улмаас" },
                      { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" },
                      { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" },
                      { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }
                    ]
                  },
                  priority_eating: {
                    question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?",
                    options: [
                      { id: "hesitation_cost", text: "Зардлын улмаас" },
                      { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" },
                      { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" },
                      { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }
                    ]
                  },
                  priority_recovery: {
                    question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?",
                    options: [
                      { id: "hesitation_cost", text: "Зардлын улмаас" },
                      { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" },
                      { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" },
                      { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }
                    ]
                  }
                }
              },
              disease_none: {
                question: "Эмчилгээнд хамгийн чухал гэж үзэж буй зүйл юу вэ?",
                options: [
                  { id: "priority_cost", text: "Зардал" },
                  { id: "priority_pain", text: "Өвдөлт" },
                  { id: "priority_eating", text: "Тухтай хооллолт" },
                  { id: "priority_recovery", text: "Мэс заслын дараа хурдан сэргэж, хэвийн амьдралд буцах" }
                ],
                next: {
                  priority_cost: {
                    question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?",
                    options: [
                      { id: "hesitation_cost", text: "Зардлын улмаас" },
                      { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" },
                      { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" },
                      { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }
                    ]
                  },
                  priority_pain: {
                    question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?",
                    options: [
                      { id: "hesitation_cost", text: "Зардлын улмаас" },
                      { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" },
                      { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" },
                      { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }
                    ]
                  },
                  priority_eating: {
                    question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?",
                    options: [
                      { id: "hesitation_cost", text: "Зардлын улмаас" },
                      { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" },
                      { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" },
                      { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }
                    ]
                  },
                  priority_recovery: {
                    question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?",
                    options: [
                      { id: "hesitation_cost", text: "Зардлын улмаас" },
                      { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" },
                      { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" },
                      { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }
                    ]
                  }
                }
              }
            }
          }
        }
      },
      // Бусад сонголтуудад ижил урсгал хэрэглэнэ (missing_upper_all-тай ижил бүтэц)
      missing_all: {
        question: "Одоо хиймэл шүд зүүж байна уу?",
        options: [
          { id: "denture_yes", text: "Тийм" },
          { id: "denture_no", text: "Үгүй" }
        ],
        next: {
          denture_yes: {
            question: "Одоо байгаа биеийн ерөнхий өвчин байна уу?",
            options: [
              { id: "disease_diabetes", text: "Чихрийн шижин" },
              { id: "disease_hypertension", text: "Цусны даралт ихсэлт" },
              { id: "disease_osteoporosis", text: "Ясны сийрэгжилт" },
              { id: "disease_heart", text: "Зүрхний өвчин" },
              { id: "disease_none", text: "Байхгүй" }
            ],
            next: {
              disease_diabetes: { question: "Эмчилгээнд хамгийн чухал гэж үзэж буй зүйл юу вэ?", options: [{ id: "priority_cost", text: "Зардал" }, { id: "priority_pain", text: "Өвдөлт" }, { id: "priority_eating", text: "Тухтай хооллолт" }, { id: "priority_recovery", text: "Мэс заслын дараа хурдан сэргэж, хэвийн амьдралд буцах" }], next: { priority_cost: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_pain: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_eating: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_recovery: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] } } },
              disease_hypertension: { question: "Эмчилгээнд хамгийн чухал гэж үзэж буй зүйл юу вэ?", options: [{ id: "priority_cost", text: "Зардал" }, { id: "priority_pain", text: "Өвдөлт" }, { id: "priority_eating", text: "Тухтай хооллолт" }, { id: "priority_recovery", text: "Мэс заслын дараа хурдан сэргэж, хэвийн амьдралд буцах" }], next: { priority_cost: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_pain: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_eating: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_recovery: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] } } },
              disease_osteoporosis: { question: "Эмчилгээнд хамгийн чухал гэж үзэж буй зүйл юу вэ?", options: [{ id: "priority_cost", text: "Зардал" }, { id: "priority_pain", text: "Өвдөлт" }, { id: "priority_eating", text: "Тухтай хооллолт" }, { id: "priority_recovery", text: "Мэс заслын дараа хурдан сэргэж, хэвийн амьдралд буцах" }], next: { priority_cost: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_pain: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_eating: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_recovery: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] } } },
              disease_heart: { question: "Эмчилгээнд хамгийн чухал гэж үзэж буй зүйл юу вэ?", options: [{ id: "priority_cost", text: "Зардал" }, { id: "priority_pain", text: "Өвдөлт" }, { id: "priority_eating", text: "Тухтай хооллолт" }, { id: "priority_recovery", text: "Мэс заслын дараа хурдан сэргэж, хэвийн амьдралд буцах" }], next: { priority_cost: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_pain: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_eating: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_recovery: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] } } },
              disease_none: { question: "Эмчилгээнд хамгийн чухал гэж үзэж буй зүйл юу вэ?", options: [{ id: "priority_cost", text: "Зардал" }, { id: "priority_pain", text: "Өвдөлт" }, { id: "priority_eating", text: "Тухтай хооллолт" }, { id: "priority_recovery", text: "Мэс заслын дараа хурдан сэргэж, хэвийн амьдралд буцах" }], next: { priority_cost: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_pain: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_eating: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_recovery: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] } } }
            }
          },
          denture_no: {
            question: "Одоо байгаа биеийн ерөнхий өвчин байна уу?",
            options: [
              { id: "disease_diabetes", text: "Чихрийн шижин" },
              { id: "disease_hypertension", text: "Цусны даралт ихсэлт" },
              { id: "disease_osteoporosis", text: "Ясны сийрэгжилт" },
              { id: "disease_heart", text: "Зүрхний өвчин" },
              { id: "disease_none", text: "Байхгүй" }
            ],
            next: {
              disease_diabetes: { question: "Эмчилгээнд хамгийн чухал гэж үзэж буй зүйл юу вэ?", options: [{ id: "priority_cost", text: "Зардал" }, { id: "priority_pain", text: "Өвдөлт" }, { id: "priority_eating", text: "Тухтай хооллолт" }, { id: "priority_recovery", text: "Мэс заслын дараа хурдан сэргэж, хэвийн амьдралд буцах" }], next: { priority_cost: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_pain: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_eating: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_recovery: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] } } },
              disease_hypertension: { question: "Эмчилгээнд хамгийн чухал гэж үзэж буй зүйл юу вэ?", options: [{ id: "priority_cost", text: "Зардал" }, { id: "priority_pain", text: "Өвдөлт" }, { id: "priority_eating", text: "Тухтай хооллолт" }, { id: "priority_recovery", text: "Мэс заслын дараа хурдан сэргэж, хэвийн амьдралд буцах" }], next: { priority_cost: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_pain: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_eating: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_recovery: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] } } },
              disease_osteoporosis: { question: "Эмчилгээнд хамгийн чухал гэж үзэж буй зүйл юу вэ?", options: [{ id: "priority_cost", text: "Зардал" }, { id: "priority_pain", text: "Өвдөлт" }, { id: "priority_eating", text: "Тухтай хооллолт" }, { id: "priority_recovery", text: "Мэс заслын дараа хурдан сэргэж, хэвийн амьдралд буцах" }], next: { priority_cost: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_pain: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_eating: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_recovery: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] } } },
              disease_heart: { question: "Эмчилгээнд хамгийн чухал гэж үзэж буй зүйл юу вэ?", options: [{ id: "priority_cost", text: "Зардал" }, { id: "priority_pain", text: "Өвдөлт" }, { id: "priority_eating", text: "Тухтай хооллолт" }, { id: "priority_recovery", text: "Мэс заслын дараа хурдан сэргэж, хэвийн амьдралд буцах" }], next: { priority_cost: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_pain: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_eating: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_recovery: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] } } },
              disease_none: { question: "Эмчилгээнд хамгийн чухал гэж үзэж буй зүйл юу вэ?", options: [{ id: "priority_cost", text: "Зардал" }, { id: "priority_pain", text: "Өвдөлт" }, { id: "priority_eating", text: "Тухтай хооллолт" }, { id: "priority_recovery", text: "Мэс заслын дараа хурдан сэргэж, хэвийн амьдралд буцах" }], next: { priority_cost: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_pain: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_eating: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_recovery: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] } } }
            }
          }
        }
      },
      missing_lower_all: {
        question: "Одоо хиймэл шүд зүүж байна уу?",
        options: [
          { id: "denture_yes", text: "Тийм" },
          { id: "denture_no", text: "Үгүй" }
        ],
        next: {
          denture_yes: {
            question: "Одоо байгаа биеийн ерөнхий өвчин байна уу?",
            options: [
              { id: "disease_diabetes", text: "Чихрийн шижин" },
              { id: "disease_hypertension", text: "Цусны даралт ихсэлт" },
              { id: "disease_osteoporosis", text: "Ясны сийрэгжилт" },
              { id: "disease_heart", text: "Зүрхний өвчин" },
              { id: "disease_none", text: "Байхгүй" }
            ],
            next: {
              disease_diabetes: { question: "Эмчилгээнд хамгийн чухал гэж үзэж буй зүйл юу вэ?", options: [{ id: "priority_cost", text: "Зардал" }, { id: "priority_pain", text: "Өвдөлт" }, { id: "priority_eating", text: "Тухтай хооллолт" }, { id: "priority_recovery", text: "Мэс заслын дараа хурдан сэргэж, хэвийн амьдралд буцах" }], next: { priority_cost: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_pain: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_eating: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_recovery: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] } } },
              disease_hypertension: { question: "Эмчилгээнд хамгийн чухал гэж үзэж буй зүйл юу вэ?", options: [{ id: "priority_cost", text: "Зардал" }, { id: "priority_pain", text: "Өвдөлт" }, { id: "priority_eating", text: "Тухтай хооллолт" }, { id: "priority_recovery", text: "Мэс заслын дараа хурдан сэргэж, хэвийн амьдралд буцах" }], next: { priority_cost: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_pain: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_eating: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_recovery: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] } } },
              disease_osteoporosis: { question: "Эмчилгээнд хамгийн чухал гэж үзэж буй зүйл юу вэ?", options: [{ id: "priority_cost", text: "Зардал" }, { id: "priority_pain", text: "Өвдөлт" }, { id: "priority_eating", text: "Тухтай хооллолт" }, { id: "priority_recovery", text: "Мэс заслын дараа хурдан сэргэж, хэвийн амьдралд буцах" }], next: { priority_cost: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_pain: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_eating: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_recovery: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] } } },
              disease_heart: { question: "Эмчилгээнд хамгийн чухал гэж үзэж буй зүйл юу вэ?", options: [{ id: "priority_cost", text: "Зардал" }, { id: "priority_pain", text: "Өвдөлт" }, { id: "priority_eating", text: "Тухтай хооллолт" }, { id: "priority_recovery", text: "Мэс заслын дараа хурдан сэргэж, хэвийн амьдралд буцах" }], next: { priority_cost: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_pain: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_eating: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_recovery: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] } } },
              disease_none: { question: "Эмчилгээнд хамгийн чухал гэж үзэж буй зүйл юу вэ?", options: [{ id: "priority_cost", text: "Зардал" }, { id: "priority_pain", text: "Өвдөлт" }, { id: "priority_eating", text: "Тухтай хооллолт" }, { id: "priority_recovery", text: "Мэс заслын дараа хурдан сэргэж, хэвийн амьдралд буцах" }], next: { priority_cost: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_pain: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_eating: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_recovery: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] } } }
            }
          },
          denture_no: {
            question: "Одоо байгаа биеийн ерөнхий өвчин байна уу?",
            options: [
              { id: "disease_diabetes", text: "Чихрийн шижин" },
              { id: "disease_hypertension", text: "Цусны даралт ихсэлт" },
              { id: "disease_osteoporosis", text: "Ясны сийрэгжилт" },
              { id: "disease_heart", text: "Зүрхний өвчин" },
              { id: "disease_none", text: "Байхгүй" }
            ],
            next: {
              disease_diabetes: { question: "Эмчилгээнд хамгийн чухал гэж үзэж буй зүйл юу вэ?", options: [{ id: "priority_cost", text: "Зардал" }, { id: "priority_pain", text: "Өвдөлт" }, { id: "priority_eating", text: "Тухтай хооллолт" }, { id: "priority_recovery", text: "Мэс заслын дараа хурдан сэргэж, хэвийн амьдралд буцах" }], next: { priority_cost: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_pain: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_eating: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_recovery: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] } } },
              disease_hypertension: { question: "Эмчилгээнд хамгийн чухал гэж үзэж буй зүйл юу вэ?", options: [{ id: "priority_cost", text: "Зардал" }, { id: "priority_pain", text: "Өвдөлт" }, { id: "priority_eating", text: "Тухтай хооллолт" }, { id: "priority_recovery", text: "Мэс заслын дараа хурдан сэргэж, хэвийн амьдралд буцах" }], next: { priority_cost: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_pain: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_eating: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_recovery: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] } } },
              disease_osteoporosis: { question: "Эмчилгээнд хамгийн чухал гэж үзэж буй зүйл юу вэ?", options: [{ id: "priority_cost", text: "Зардал" }, { id: "priority_pain", text: "Өвдөлт" }, { id: "priority_eating", text: "Тухтай хооллолт" }, { id: "priority_recovery", text: "Мэс заслын дараа хурдан сэргэж, хэвийн амьдралд буцах" }], next: { priority_cost: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_pain: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_eating: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_recovery: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] } } },
              disease_heart: { question: "Эмчилгээнд хамгийн чухал гэж үзэж буй зүйл юу вэ?", options: [{ id: "priority_cost", text: "Зардал" }, { id: "priority_pain", text: "Өвдөлт" }, { id: "priority_eating", text: "Тухтай хооллолт" }, { id: "priority_recovery", text: "Мэс заслын дараа хурдан сэргэж, хэвийн амьдралд буцах" }], next: { priority_cost: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_pain: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_eating: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_recovery: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] } } },
              disease_none: { question: "Эмчилгээнд хамгийн чухал гэж үзэж буй зүйл юу вэ?", options: [{ id: "priority_cost", text: "Зардал" }, { id: "priority_pain", text: "Өвдөлт" }, { id: "priority_eating", text: "Тухтай хооллолт" }, { id: "priority_recovery", text: "Мэс заслын дараа хурдан сэргэж, хэвийн амьдралд буцах" }], next: { priority_cost: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_pain: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_eating: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_recovery: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] } } }
            }
          }
        }
      },
      missing_partial: {
        question: "Аль хэсгийн шүд байхгүй эсвэл авах төлөвлөгөөтэй вэ?",
        options: [
          { id: "location_front", text: "Урд шүдний хэсэг" },
          { id: "location_back", text: "Араа шүдний хэсэг" },
          { id: "location_both", text: "Урд болон араа шүд хоёулаа" }
        ],
        next: {
          location_front: {
            question: "Одоо байгаа биеийн ерөнхий өвчин байна уу?",
            options: [
              { id: "disease_diabetes", text: "Чихрийн шижин" },
              { id: "disease_hypertension", text: "Цусны даралт ихсэлт" },
              { id: "disease_osteoporosis", text: "Ясны сийрэгжилт" },
              { id: "disease_heart", text: "Зүрхний өвчин" },
              { id: "disease_none", text: "Байхгүй" }
            ],
            next: {
              disease_diabetes: { question: "Эмчилгээнд хамгийн чухал гэж үзэж буй зүйл юу вэ?", options: [{ id: "priority_cost", text: "Зардал" }, { id: "priority_pain", text: "Өвдөлт" }, { id: "priority_eating", text: "Тухтай хооллолт" }, { id: "priority_recovery", text: "Мэс заслын дараа хурдан сэргэж, хэвийн амьдралд буцах" }], next: { priority_cost: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_pain: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_eating: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_recovery: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] } } },
              disease_hypertension: { question: "Эмчилгээнд хамгийн чухал гэж үзэж буй зүйл юу вэ?", options: [{ id: "priority_cost", text: "Зардал" }, { id: "priority_pain", text: "Өвдөлт" }, { id: "priority_eating", text: "Тухтай хооллолт" }, { id: "priority_recovery", text: "Мэс заслын дараа хурдан сэргэж, хэвийн амьдралд буцах" }], next: { priority_cost: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_pain: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_eating: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_recovery: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] } } },
              disease_osteoporosis: { question: "Эмчилгээнд хамгийн чухал гэж үзэж буй зүйл юу вэ?", options: [{ id: "priority_cost", text: "Зардал" }, { id: "priority_pain", text: "Өвдөлт" }, { id: "priority_eating", text: "Тухтай хооллолт" }, { id: "priority_recovery", text: "Мэс заслын дараа хурдан сэргэж, хэвийн амьдралд буцах" }], next: { priority_cost: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_pain: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_eating: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_recovery: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] } } },
              disease_heart: { question: "Эмчилгээнд хамгийн чухал гэж үзэж буй зүйл юу вэ?", options: [{ id: "priority_cost", text: "Зардал" }, { id: "priority_pain", text: "Өвдөлт" }, { id: "priority_eating", text: "Тухтай хооллолт" }, { id: "priority_recovery", text: "Мэс заслын дараа хурдан сэргэж, хэвийн амьдралд буцах" }], next: { priority_cost: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_pain: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_eating: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_recovery: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] } } },
              disease_none: { question: "Эмчилгээнд хамгийн чухал гэж үзэж буй зүйл юу вэ?", options: [{ id: "priority_cost", text: "Зардал" }, { id: "priority_pain", text: "Өвдөлт" }, { id: "priority_eating", text: "Тухтай хооллолт" }, { id: "priority_recovery", text: "Мэс заслын дараа хурдан сэргэж, хэвийн амьдралд буцах" }], next: { priority_cost: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_pain: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_eating: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_recovery: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] } } }
            }
          },
          location_back: {
            question: "Одоо байгаа биеийн ерөнхий өвчин байна уу?",
            options: [
              { id: "disease_diabetes", text: "Чихрийн шижин" },
              { id: "disease_hypertension", text: "Цусны даралт ихсэлт" },
              { id: "disease_osteoporosis", text: "Ясны сийрэгжилт" },
              { id: "disease_heart", text: "Зүрхний өвчин" },
              { id: "disease_none", text: "Байхгүй" }
            ],
            next: {
              disease_diabetes: { question: "Эмчилгээнд хамгийн чухал гэж үзэж буй зүйл юу вэ?", options: [{ id: "priority_cost", text: "Зардал" }, { id: "priority_pain", text: "Өвдөлт" }, { id: "priority_eating", text: "Тухтай хооллолт" }, { id: "priority_recovery", text: "Мэс заслын дараа хурдан сэргэж, хэвийн амьдралд буцах" }], next: { priority_cost: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_pain: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_eating: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_recovery: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] } } },
              disease_hypertension: { question: "Эмчилгээнд хамгийн чухал гэж үзэж буй зүйл юу вэ?", options: [{ id: "priority_cost", text: "Зардал" }, { id: "priority_pain", text: "Өвдөлт" }, { id: "priority_eating", text: "Тухтай хооллолт" }, { id: "priority_recovery", text: "Мэс заслын дараа хурдан сэргэж, хэвийн амьдралд буцах" }], next: { priority_cost: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_pain: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_eating: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_recovery: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] } } },
              disease_osteoporosis: { question: "Эмчилгээнд хамгийн чухал гэж үзэж буй зүйл юу вэ?", options: [{ id: "priority_cost", text: "Зардал" }, { id: "priority_pain", text: "Өвдөлт" }, { id: "priority_eating", text: "Тухтай хооллолт" }, { id: "priority_recovery", text: "Мэс заслын дараа хурдан сэргэж, хэвийн амьдралд буцах" }], next: { priority_cost: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_pain: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_eating: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_recovery: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] } } },
              disease_heart: { question: "Эмчилгээнд хамгийн чухал гэж үзэж буй зүйл юу вэ?", options: [{ id: "priority_cost", text: "Зардал" }, { id: "priority_pain", text: "Өвдөлт" }, { id: "priority_eating", text: "Тухтай хооллолт" }, { id: "priority_recovery", text: "Мэс заслын дараа хурдан сэргэж, хэвийн амьдралд буцах" }], next: { priority_cost: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_pain: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_eating: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_recovery: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] } } },
              disease_none: { question: "Эмчилгээнд хамгийн чухал гэж үзэж буй зүйл юу вэ?", options: [{ id: "priority_cost", text: "Зардал" }, { id: "priority_pain", text: "Өвдөлт" }, { id: "priority_eating", text: "Тухтай хооллолт" }, { id: "priority_recovery", text: "Мэс заслын дараа хурдан сэргэж, хэвийн амьдралд буцах" }], next: { priority_cost: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_pain: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_eating: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_recovery: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] } } }
            }
          },
          location_both: {
            question: "Одоо байгаа биеийн ерөнхий өвчин байна уу?",
            options: [
              { id: "disease_diabetes", text: "Чихрийн шижин" },
              { id: "disease_hypertension", text: "Цусны даралт ихсэлт" },
              { id: "disease_osteoporosis", text: "Ясны сийрэгжилт" },
              { id: "disease_heart", text: "Зүрхний өвчин" },
              { id: "disease_none", text: "Байхгүй" }
            ],
            next: {
              disease_diabetes: { question: "Эмчилгээнд хамгийн чухал гэж үзэж буй зүйл юу вэ?", options: [{ id: "priority_cost", text: "Зардал" }, { id: "priority_pain", text: "Өвдөлт" }, { id: "priority_eating", text: "Тухтай хооллолт" }, { id: "priority_recovery", text: "Мэс заслын дараа хурдан сэргэж, хэвийн амьдралд буцах" }], next: { priority_cost: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_pain: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_eating: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_recovery: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] } } },
              disease_hypertension: { question: "Эмчилгээнд хамгийн чухал гэж үзэж буй зүйл юу вэ?", options: [{ id: "priority_cost", text: "Зардал" }, { id: "priority_pain", text: "Өвдөлт" }, { id: "priority_eating", text: "Тухтай хооллолт" }, { id: "priority_recovery", text: "Мэс заслын дараа хурдан сэргэж, хэвийн амьдралд буцах" }], next: { priority_cost: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_pain: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_eating: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_recovery: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] } } },
              disease_osteoporosis: { question: "Эмчилгээнд хамгийн чухал гэж үзэж буй зүйл юу вэ?", options: [{ id: "priority_cost", text: "Зардал" }, { id: "priority_pain", text: "Өвдөлт" }, { id: "priority_eating", text: "Тухтай хооллолт" }, { id: "priority_recovery", text: "Мэс заслын дараа хурдан сэргэж, хэвийн амьдралд буцах" }], next: { priority_cost: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_pain: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_eating: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_recovery: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] } } },
              disease_heart: { question: "Эмчилгээнд хамгийн чухал гэж үзэж буй зүйл юу вэ?", options: [{ id: "priority_cost", text: "Зардал" }, { id: "priority_pain", text: "Өвдөлт" }, { id: "priority_eating", text: "Тухтай хооллолт" }, { id: "priority_recovery", text: "Мэс заслын дараа хурдан сэргэж, хэвийн амьдралд буцах" }], next: { priority_cost: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_pain: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_eating: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_recovery: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] } } },
              disease_none: { question: "Эмчилгээнд хамгийн чухал гэж үзэж буй зүйл юу вэ?", options: [{ id: "priority_cost", text: "Зардал" }, { id: "priority_pain", text: "Өвдөлт" }, { id: "priority_eating", text: "Тухтай хооллолт" }, { id: "priority_recovery", text: "Мэс заслын дараа хурдан сэргэж, хэвийн амьдралд буцах" }], next: { priority_cost: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_pain: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_eating: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_recovery: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] } } }
            }
          }
        }
      },
      implant_revision: {
        question: "Одоо хиймэл шүд зүүж байна уу?",
        options: [
          { id: "denture_yes", text: "Тийм" },
          { id: "denture_no", text: "Үгүй" }
        ],
        next: {
          denture_yes: {
            question: "Одоо байгаа биеийн ерөнхий өвчин байна уу?",
            options: [
              { id: "disease_diabetes", text: "Чихрийн шижин" },
              { id: "disease_hypertension", text: "Цусны даралт ихсэлт" },
              { id: "disease_osteoporosis", text: "Ясны сийрэгжилт" },
              { id: "disease_heart", text: "Зүрхний өвчин" },
              { id: "disease_none", text: "Байхгүй" }
            ],
            next: {
              disease_diabetes: { question: "Эмчилгээнд хамгийн чухал гэж үзэж буй зүйл юу вэ?", options: [{ id: "priority_cost", text: "Зардал" }, { id: "priority_pain", text: "Өвдөлт" }, { id: "priority_eating", text: "Тухтай хооллолт" }, { id: "priority_recovery", text: "Мэс заслын дараа хурдан сэргэж, хэвийн амьдралд буцах" }], next: { priority_cost: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_pain: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_eating: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_recovery: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] } } },
              disease_hypertension: { question: "Эмчилгээнд хамгийн чухал гэж үзэж буй зүйл юу вэ?", options: [{ id: "priority_cost", text: "Зардал" }, { id: "priority_pain", text: "Өвдөлт" }, { id: "priority_eating", text: "Тухтай хооллолт" }, { id: "priority_recovery", text: "Мэс заслын дараа хурдан сэргэж, хэвийн амьдралд буцах" }], next: { priority_cost: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_pain: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_eating: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_recovery: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] } } },
              disease_osteoporosis: { question: "Эмчилгээнд хамгийн чухал гэж үзэж буй зүйл юу вэ?", options: [{ id: "priority_cost", text: "Зардал" }, { id: "priority_pain", text: "Өвдөлт" }, { id: "priority_eating", text: "Тухтай хооллолт" }, { id: "priority_recovery", text: "Мэс заслын дараа хурдан сэргэж, хэвийн амьдралд буцах" }], next: { priority_cost: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_pain: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_eating: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_recovery: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] } } },
              disease_heart: { question: "Эмчилгээнд хамгийн чухал гэж үзэж буй зүйл юу вэ?", options: [{ id: "priority_cost", text: "Зардал" }, { id: "priority_pain", text: "Өвдөлт" }, { id: "priority_eating", text: "Тухтай хооллолт" }, { id: "priority_recovery", text: "Мэс заслын дараа хурдан сэргэж, хэвийн амьдралд буцах" }], next: { priority_cost: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_pain: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_eating: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_recovery: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] } } },
              disease_none: { question: "Эмчилгээнд хамгийн чухал гэж үзэж буй зүйл юу вэ?", options: [{ id: "priority_cost", text: "Зардал" }, { id: "priority_pain", text: "Өвдөлт" }, { id: "priority_eating", text: "Тухтай хооллолт" }, { id: "priority_recovery", text: "Мэс заслын дараа хурдан сэргэж, хэвийн амьдралд буцах" }], next: { priority_cost: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_pain: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_eating: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_recovery: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] } } }
            }
          },
          denture_no: {
            question: "Одоо байгаа биеийн ерөнхий өвчин байна уу?",
            options: [
              { id: "disease_diabetes", text: "Чихрийн шижин" },
              { id: "disease_hypertension", text: "Цусны даралт ихсэлт" },
              { id: "disease_osteoporosis", text: "Ясны сийрэгжилт" },
              { id: "disease_heart", text: "Зүрхний өвчин" },
              { id: "disease_none", text: "Байхгүй" }
            ],
            next: {
              disease_diabetes: { question: "Эмчилгээнд хамгийн чухал гэж үзэж буй зүйл юу вэ?", options: [{ id: "priority_cost", text: "Зардал" }, { id: "priority_pain", text: "Өвдөлт" }, { id: "priority_eating", text: "Тухтай хооллолт" }, { id: "priority_recovery", text: "Мэс заслын дараа хурдан сэргэж, хэвийн амьдралд буцах" }], next: { priority_cost: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_pain: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_eating: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_recovery: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] } } },
              disease_hypertension: { question: "Эмчилгээнд хамгийн чухал гэж үзэж буй зүйл юу вэ?", options: [{ id: "priority_cost", text: "Зардал" }, { id: "priority_pain", text: "Өвдөлт" }, { id: "priority_eating", text: "Тухтай хооллолт" }, { id: "priority_recovery", text: "Мэс заслын дараа хурдан сэргэж, хэвийн амьдралд буцах" }], next: { priority_cost: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_pain: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_eating: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_recovery: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] } } },
              disease_osteoporosis: { question: "Эмчилгээнд хамгийн чухал гэж үзэж буй зүйл юу вэ?", options: [{ id: "priority_cost", text: "Зардал" }, { id: "priority_pain", text: "Өвдөлт" }, { id: "priority_eating", text: "Тухтай хооллолт" }, { id: "priority_recovery", text: "Мэс заслын дараа хурдан сэргэж, хэвийн амьдралд буцах" }], next: { priority_cost: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_pain: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_eating: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_recovery: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] } } },
              disease_heart: { question: "Эмчилгээнд хамгийн чухал гэж үзэж буй зүйл юу вэ?", options: [{ id: "priority_cost", text: "Зардал" }, { id: "priority_pain", text: "Өвдөлт" }, { id: "priority_eating", text: "Тухтай хооллолт" }, { id: "priority_recovery", text: "Мэс заслын дараа хурдан сэргэж, хэвийн амьдралд буцах" }], next: { priority_cost: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_pain: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_eating: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_recovery: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] } } },
              disease_none: { question: "Эмчилгээнд хамгийн чухал гэж үзэж буй зүйл юу вэ?", options: [{ id: "priority_cost", text: "Зардал" }, { id: "priority_pain", text: "Өвдөлт" }, { id: "priority_eating", text: "Тухтай хооллолт" }, { id: "priority_recovery", text: "Мэс заслын дараа хурдан сэргэж, хэвийн амьдралд буцах" }], next: { priority_cost: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_pain: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_eating: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] }, priority_recovery: { question: "Одоог хүртэл эмчилгээ хийлгэхийг эргэлзэж буй шалтгаан байна уу?", options: [{ id: "hesitation_cost", text: "Зардлын улмаас" }, { id: "hesitation_fear", text: "Өвдөлт/шүдний эмчээс айх улмаас" }, { id: "hesitation_clinic", text: "Тохирох шүдний эмнэлэг сонгоход хэцүү учраас" }, { id: "hesitation_none", text: "Тусгай шалтгаан байхгүй" }] } } }
            }
          }
        }
      }
    }
  },

  // Буйлтай холбоотой асуулт
  gum_issue: {
    question: "Ямар шинж тэмдэг байна вэ?",
    options: [
      { id: "gum_bleeding", text: "Буйлаас цус гарч байна" },
      { id: "gum_swelling", text: "Буйл хавдсан" },
      { id: "gum_recession", text: "Буйл татагдсан" },
      { id: "gum_wobbly", text: "Шүд хөдөлж байна" }
    ],
    next: {
      gum_bleeding: {
        question: "Хэзээ цус гардаг вэ?",
        options: [
          { id: "bleeding_brushing", text: "Зөвхөн шүд угаахад" },
          { id: "bleeding_often", text: "Байнга цус гардаг" },
          { id: "bleeding_always", text: "Амарч байсан ч гардаг" }
        ]
      },
      gum_swelling: {
        question: "Хавдартай хамт өвдөлт ч байна уу?",
        options: [
          { id: "swelling_pain_yes", text: "Тийм, өвдөж байна" },
          { id: "swelling_pain_no", text: "Үгүй, зөвхөн хавдсан" }
        ]
      },
      gum_recession: {
        question: "Шүд хүйтэнд мэдрэмтгий эсвэл мэдрэг үү?",
        options: [
          { id: "recession_sensitive_yes", text: "Тийм, мэдрэмтгий" },
          { id: "recession_sensitive_no", text: "Үгүй" }
        ]
      },
      gum_wobbly: {
        question: "Хөдөлгөөний түвшин ямар вэ?",
        options: [
          { id: "wobbly_slight", text: "Бага зэрэг хөдөлж байна" },
          { id: "wobbly_severe", text: "Их хөдөлж байна" }
        ]
      }
    }
  },

  // Тогтмол үзлэгтэй холбоотой
  checkup: {
    question: "Тусгайлан санаа зовоож буй хэсэг байна уу?",
    options: [
      { id: "checkup_prevention", text: "Цоорол/буйлын урьдчилан сэргийлэлт" },
      { id: "checkup_cleaning", text: "Чулуу цэвэрлүүлмээр байна" },
      { id: "checkup_concern", text: "Тодорхой шүд санаа зовоож байна" },
      { id: "checkup_general", text: "Зөвхөн ерөнхий үзлэг" }
    ]
  }
};
