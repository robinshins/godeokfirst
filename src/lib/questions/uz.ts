import { LanguageQuestionTree } from './types';
export const QUESTION_TREE_UZ: LanguageQuestionTree = {
  // 1-bosqich: Dastlabki alomatlarni aniqlash
  initial: {
    question: "Sizda qanday alomatlar yoki noqulaylik bor?",
    options: [
      { id: "pain", text: "Og'riq bor" },
      { id: "aesthetic", text: "Estetik jihatdan yaxshilashni xohlayman" },
      { id: "missing_tooth", text: "Tish tushib ketdi" },
      { id: "gum_issue", text: "Milkda muammo bor" },
      { id: "checkup", text: "Muntazam tekshiruv va profilaktika" }
    ]
  },

  // Kariyes/nerv davolash haqida savollar (birinchi savol)
  cavity_nerve: {
    question: "Hozirgi noqulay vaziyat nima?",
    options: [
      { id: "cavity_pain", text: "Tish og'riyapti" },
      { id: "cavity_sensitive", text: "Tish sezgir" },
      { id: "cavity_broken", text: "Tish singan" },
      { id: "cavity_eating", text: "Ovqatlanganda noqulay" },
      { id: "cavity_dark", text: "Tish qora ko'rinadi" },
      { id: "cavity_brushing", text: "Tish tozalashda noqulay" }
    ],
    next: {
      cavity_pain: {
        question: "Bitta aniq tishda noqulaymi yoki keng sohadami?",
        options: [
          { id: "specific_tooth", text: "Bitta aniq tishda noqulay" },
          { id: "wide_area", text: "Chap/o'ng yuqori/pastki keng sohada noqulay" }
        ]
      },
      cavity_sensitive: {
        question: "Bitta aniq tishda noqulaymi yoki keng sohadami?",
        options: [
          { id: "specific_tooth", text: "Bitta aniq tishda noqulay" },
          { id: "wide_area", text: "Chap/o'ng yuqori/pastki keng sohada noqulay" }
        ]
      },
      cavity_broken: {
        question: "Singan tish og'riyaptimi?",
        options: [
          { id: "broken_painful", text: "Ha, singan va og'riyapti" },
          { id: "broken_not_painful", text: "Singan, lekin og'rimayapti" }
        ]
      },
      cavity_eating: {
        question: "Bitta aniq tishda noqulaymi yoki keng sohadami?",
        options: [
          { id: "specific_tooth", text: "Bitta aniq tishda noqulay" },
          { id: "wide_area", text: "Chap/o'ng yuqori/pastki keng sohada noqulay" }
        ]
      },
      cavity_dark: {
        question: "Qora ko'rinadigan tish qayerda?",
        options: [
          { id: "dark_front", text: "Old tishlar sohasida" },
          { id: "dark_back", text: "Oziq tishlar sohasida" },
          { id: "dark_multiple", text: "Bir necha joyda qora ko'rinadi" }
        ]
      },
      cavity_brushing: {
        question: "Bitta aniq tishda noqulaymi yoki keng sohadami?",
        options: [
          { id: "specific_tooth", text: "Bitta aniq tishda noqulay" },
          { id: "wide_area", text: "Chap/o'ng yuqori/pastki keng sohada noqulay" }
        ]
      }
    }
  },

  // Og'riq haqida savollar (umumiy)
  pain: {
    question: "Qaysi vaziyatda og'riq his qilasiz?",
    options: [
      { id: "pain_cold_hot", text: "Sovuq yoki issiq narsalarga teginganda" },
      { id: "pain_chewing", text: "Ovqat chaynaganda" },
      { id: "pain_always", text: "Tinch turganda ham doim og'riyapti" },
      { id: "pain_wisdom", text: "Aql tishi sohasida og'riq bor" }
    ],
    next: {
      pain_cold_hot: {
        question: "Og'riq qancha davom etadi?",
        options: [
          { id: "pain_short", text: "Bir oz sezgir bo'lib, keyin yo'qoladi" },
          { id: "pain_long", text: "Bir marta sezgir bo'lsa, uzoq davom etadi" },
          { id: "pain_getting_worse", text: "Tobora kuchaymoqda" }
        ]
      },
      pain_chewing: {
        question: "Qaysi soha og'riyapti?",
        options: [
          { id: "pain_front", text: "Old tishlar sohasida" },
          { id: "pain_back", text: "Oziq tishlar sohasida" },
          { id: "pain_multiple", text: "Bir necha joyda og'riyapti" }
        ]
      },
      pain_always: {
        question: "Shish yoki yiring bormi?",
        options: [
          { id: "pain_swelling_yes", text: "Ha, shish yoki yiring bor" },
          { id: "pain_swelling_no", text: "Yo'q, faqat og'riq bor" }
        ]
      },
      pain_wisdom: {
        question: "Aql tishi og'rig'i qachon boshlandi?",
        options: [
          { id: "wisdom_recent", text: "So'nggi bir necha kun ichida" },
          { id: "wisdom_recurring", text: "Tez-tez takrorlanadi" },
          { id: "wisdom_swelling", text: "Milk juda shishgan" }
        ]
      }
    }
  },

  // Aql tishi haqida savollar (maslahat uchun)
  wisdom_tooth: {
    question: "Aql tishingiz hozir qanday holatda?",
    options: [
      { id: "wisdom_pain", text: "Aql tishi sohasida og'riq bor" },
      { id: "wisdom_checkup", text: "Og'rimayapti, lekin tekshirmoqchiman" }
    ],
    next: {
      // "Og'riyapti" tanlanganda → joy haqida savol
      wisdom_pain: {
        question: "Hozir qaysi tish og'riyapti?",
        options: [
          { id: "wisdom_upper", text: "Yuqori aql tishi" },
          { id: "wisdom_lower", text: "Pastki aql tishi" }
        ],
        next: {
          // Yuqori aql tishini tanlagandan so'ng → qachondan beri noqulay
          wisdom_upper: {
            question: "Aql tishidan noqulaylik qachon boshlandi?",
            options: [
              { id: "wisdom_first_time", text: "Birinchi marta" },
              { id: "wisdom_recurring", text: "Oldin ham shunga o'xshash tajriba bo'lgan, o'tib ketgan edi, endi yana paydo bo'ldi" }
            ],
            next: {
              wisdom_first_time: {
                question: "Aql tishi og'rig'ini davolashda eng ko'p nimadan xavotirlanasiz?",
                options: [
                  { id: "worry_possible", text: "Tish sug'urish mumkinligi" },
                  { id: "worry_fear", text: "Tish sug'urishdan qo'rqish" },
                  { id: "worry_daily", text: "Tish sug'urilgandan keyin kundalik hayotdagi noqulaylik" }
                ],
                next: {
                  worry_possible: {
                    question: "Sizda yurak-qon tomir operatsiyasi bo'lganmi yoki surunkali kasalliklar bormi?",
                    options: [
                      { id: "disease_medication", text: "Har kuni dori ichaman (iltimos, dori qutisini olib keling)" },
                      { id: "disease_heart", text: "Oldin yurak yoki qon tomir operatsiyasi bo'lgan" },
                      { id: "disease_bp_diabetes", text: "Yuqori qon bosimi/Diabet" },
                      { id: "disease_osteoporosis", text: "Osteoporoz" },
                      { id: "disease_other", text: "Boshqa surunkali kasalliklar" },
                      { id: "disease_none", text: "Yo'q" }
                    ]
                  },
                  worry_fear: {
                    question: "Sizda yurak-qon tomir operatsiyasi bo'lganmi yoki surunkali kasalliklar bormi?",
                    options: [
                      { id: "disease_medication", text: "Har kuni dori ichaman (iltimos, dori qutisini olib keling)" },
                      { id: "disease_heart", text: "Oldin yurak yoki qon tomir operatsiyasi bo'lgan" },
                      { id: "disease_bp_diabetes", text: "Yuqori qon bosimi/Diabet" },
                      { id: "disease_osteoporosis", text: "Osteoporoz" },
                      { id: "disease_other", text: "Boshqa surunkali kasalliklar" },
                      { id: "disease_none", text: "Yo'q" }
                    ]
                  },
                  worry_daily: {
                    question: "Sizda yurak-qon tomir operatsiyasi bo'lganmi yoki surunkali kasalliklar bormi?",
                    options: [
                      { id: "disease_medication", text: "Har kuni dori ichaman (iltimos, dori qutisini olib keling)" },
                      { id: "disease_heart", text: "Oldin yurak yoki qon tomir operatsiyasi bo'lgan" },
                      { id: "disease_bp_diabetes", text: "Yuqori qon bosimi/Diabet" },
                      { id: "disease_osteoporosis", text: "Osteoporoz" },
                      { id: "disease_other", text: "Boshqa surunkali kasalliklar" },
                      { id: "disease_none", text: "Yo'q" }
                    ]
                  }
                }
              },
              wisdom_recurring: {
                question: "Aql tishi og'rig'ini davolashda eng ko'p nimadan xavotirlanasiz?",
                options: [
                  { id: "worry_possible", text: "Tish sug'urish mumkinligi" },
                  { id: "worry_fear", text: "Tish sug'urishdan qo'rqish" },
                  { id: "worry_daily", text: "Tish sug'urilgandan keyin kundalik hayotdagi noqulaylik" }
                ],
                next: {
                  worry_possible: {
                    question: "Sizda yurak-qon tomir operatsiyasi bo'lganmi yoki surunkali kasalliklar bormi?",
                    options: [
                      { id: "disease_medication", text: "Har kuni dori ichaman (iltimos, dori qutisini olib keling)" },
                      { id: "disease_heart", text: "Oldin yurak yoki qon tomir operatsiyasi bo'lgan" },
                      { id: "disease_bp_diabetes", text: "Yuqori qon bosimi/Diabet" },
                      { id: "disease_osteoporosis", text: "Osteoporoz" },
                      { id: "disease_other", text: "Boshqa surunkali kasalliklar" },
                      { id: "disease_none", text: "Yo'q" }
                    ]
                  },
                  worry_fear: {
                    question: "Sizda yurak-qon tomir operatsiyasi bo'lganmi yoki surunkali kasalliklar bormi?",
                    options: [
                      { id: "disease_medication", text: "Har kuni dori ichaman (iltimos, dori qutisini olib keling)" },
                      { id: "disease_heart", text: "Oldin yurak yoki qon tomir operatsiyasi bo'lgan" },
                      { id: "disease_bp_diabetes", text: "Yuqori qon bosimi/Diabet" },
                      { id: "disease_osteoporosis", text: "Osteoporoz" },
                      { id: "disease_other", text: "Boshqa surunkali kasalliklar" },
                      { id: "disease_none", text: "Yo'q" }
                    ]
                  },
                  worry_daily: {
                    question: "Sizda yurak-qon tomir operatsiyasi bo'lganmi yoki surunkali kasalliklar bormi?",
                    options: [
                      { id: "disease_medication", text: "Har kuni dori ichaman (iltimos, dori qutisini olib keling)" },
                      { id: "disease_heart", text: "Oldin yurak yoki qon tomir operatsiyasi bo'lgan" },
                      { id: "disease_bp_diabetes", text: "Yuqori qon bosimi/Diabet" },
                      { id: "disease_osteoporosis", text: "Osteoporoz" },
                      { id: "disease_other", text: "Boshqa surunkali kasalliklar" },
                      { id: "disease_none", text: "Yo'q" }
                    ]
                  }
                }
              }
            }
          },
          // Pastki aql tishini tanlagandan so'ng → qachondan beri noqulay
          wisdom_lower: {
            question: "Aql tishidan noqulaylik qachon boshlandi?",
            options: [
              { id: "wisdom_first_time", text: "Birinchi marta" },
              { id: "wisdom_recurring", text: "Oldin ham shunga o'xshash tajriba bo'lgan, o'tib ketgan edi, endi yana paydo bo'ldi" }
            ],
            next: {
              wisdom_first_time: {
                question: "Aql tishi og'rig'ini davolashda eng ko'p nimadan xavotirlanasiz?",
                options: [
                  { id: "worry_possible", text: "Tish sug'urish mumkinligi" },
                  { id: "worry_fear", text: "Tish sug'urishdan qo'rqish" },
                  { id: "worry_daily", text: "Tish sug'urilgandan keyin kundalik hayotdagi noqulaylik" }
                ],
                next: {
                  worry_possible: {
                    question: "Sizda yurak-qon tomir operatsiyasi bo'lganmi yoki surunkali kasalliklar bormi?",
                    options: [
                      { id: "disease_medication", text: "Har kuni dori ichaman (iltimos, dori qutisini olib keling)" },
                      { id: "disease_heart", text: "Oldin yurak yoki qon tomir operatsiyasi bo'lgan" },
                      { id: "disease_bp_diabetes", text: "Yuqori qon bosimi/Diabet" },
                      { id: "disease_osteoporosis", text: "Osteoporoz" },
                      { id: "disease_other", text: "Boshqa surunkali kasalliklar" },
                      { id: "disease_none", text: "Yo'q" }
                    ]
                  },
                  worry_fear: {
                    question: "Sizda yurak-qon tomir operatsiyasi bo'lganmi yoki surunkali kasalliklar bormi?",
                    options: [
                      { id: "disease_medication", text: "Har kuni dori ichaman (iltimos, dori qutisini olib keling)" },
                      { id: "disease_heart", text: "Oldin yurak yoki qon tomir operatsiyasi bo'lgan" },
                      { id: "disease_bp_diabetes", text: "Yuqori qon bosimi/Diabet" },
                      { id: "disease_osteoporosis", text: "Osteoporoz" },
                      { id: "disease_other", text: "Boshqa surunkali kasalliklar" },
                      { id: "disease_none", text: "Yo'q" }
                    ]
                  },
                  worry_daily: {
                    question: "Sizda yurak-qon tomir operatsiyasi bo'lganmi yoki surunkali kasalliklar bormi?",
                    options: [
                      { id: "disease_medication", text: "Har kuni dori ichaman (iltimos, dori qutisini olib keling)" },
                      { id: "disease_heart", text: "Oldin yurak yoki qon tomir operatsiyasi bo'lgan" },
                      { id: "disease_bp_diabetes", text: "Yuqori qon bosimi/Diabet" },
                      { id: "disease_osteoporosis", text: "Osteoporoz" },
                      { id: "disease_other", text: "Boshqa surunkali kasalliklar" },
                      { id: "disease_none", text: "Yo'q" }
                    ]
                  }
                }
              },
              wisdom_recurring: {
                question: "Aql tishi og'rig'ini davolashda eng ko'p nimadan xavotirlanasiz?",
                options: [
                  { id: "worry_possible", text: "Tish sug'urish mumkinligi" },
                  { id: "worry_fear", text: "Tish sug'urishdan qo'rqish" },
                  { id: "worry_daily", text: "Tish sug'urilgandan keyin kundalik hayotdagi noqulaylik" }
                ],
                next: {
                  worry_possible: {
                    question: "Sizda yurak-qon tomir operatsiyasi bo'lganmi yoki surunkali kasalliklar bormi?",
                    options: [
                      { id: "disease_medication", text: "Har kuni dori ichaman (iltimos, dori qutisini olib keling)" },
                      { id: "disease_heart", text: "Oldin yurak yoki qon tomir operatsiyasi bo'lgan" },
                      { id: "disease_bp_diabetes", text: "Yuqori qon bosimi/Diabet" },
                      { id: "disease_osteoporosis", text: "Osteoporoz" },
                      { id: "disease_other", text: "Boshqa surunkali kasalliklar" },
                      { id: "disease_none", text: "Yo'q" }
                    ]
                  },
                  worry_fear: {
                    question: "Sizda yurak-qon tomir operatsiyasi bo'lganmi yoki surunkali kasalliklar bormi?",
                    options: [
                      { id: "disease_medication", text: "Har kuni dori ichaman (iltimos, dori qutisini olib keling)" },
                      { id: "disease_heart", text: "Oldin yurak yoki qon tomir operatsiyasi bo'lgan" },
                      { id: "disease_bp_diabetes", text: "Yuqori qon bosimi/Diabet" },
                      { id: "disease_osteoporosis", text: "Osteoporoz" },
                      { id: "disease_other", text: "Boshqa surunkali kasalliklar" },
                      { id: "disease_none", text: "Yo'q" }
                    ]
                  },
                  worry_daily: {
                    question: "Sizda yurak-qon tomir operatsiyasi bo'lganmi yoki surunkali kasalliklar bormi?",
                    options: [
                      { id: "disease_medication", text: "Har kuni dori ichaman (iltimos, dori qutisini olib keling)" },
                      { id: "disease_heart", text: "Oldin yurak yoki qon tomir operatsiyasi bo'lgan" },
                      { id: "disease_bp_diabetes", text: "Yuqori qon bosimi/Diabet" },
                      { id: "disease_osteoporosis", text: "Osteoporoz" },
                      { id: "disease_other", text: "Boshqa surunkali kasalliklar" },
                      { id: "disease_none", text: "Yo'q" }
                    ]
                  }
                }
              }
            }
          }
        }
      },
      // Og'ritmayapti, lekin tekshirmoqchiman tanlaganda → ikkilanish sababi → yakuniy tavsiya
      wisdom_checkup: {
        question: "Aql tishini davolashda eng ko'p nimadan xavotirlanasiz?",
        options: [
          { id: "checkup_worry_possible", text: "Tish sug'urish mumkinligi" },
          { id: "checkup_worry_fear", text: "Tish sug'urishdan qo'rqish" },
          { id: "checkup_worry_daily", text: "Tish sug'urilgandan keyin kundalik hayotdagi noqulaylik" }
        ],
        next: {
          checkup_worry_possible: {
            question: "Sizda yurak-qon tomir operatsiyasi bo'lganmi yoki surunkali kasalliklar bormi?",
            options: [
              { id: "disease_medication", text: "Har kuni dori ichaman (iltimos, dori qutisini olib keling)" },
              { id: "disease_heart", text: "Oldin yurak yoki qon tomir operatsiyasi bo'lgan" },
              { id: "disease_bp_diabetes", text: "Yuqori qon bosimi/Diabet" },
              { id: "disease_osteoporosis", text: "Osteoporoz" },
              { id: "disease_other", text: "Boshqa surunkali kasalliklar" },
              { id: "disease_none", text: "Yo'q" }
            ],
            next: {
              disease_medication: {
                question: "Qo'shimcha tekshirmoqchi bo'lgan narsa bormi?",
                options: [
                  { id: "extra_cavity", text: "Kariyes tekshiruvi" },
                  { id: "extra_gum", text: "Milk tekshiruvi" },
                  { id: "extra_scaling", text: "Tish tozalash" },
                  { id: "extra_none", text: "Yo'q, faqat aql tishini tekshirmoqchiman" }
                ]
              },
              disease_heart: {
                question: "Qo'shimcha tekshirmoqchi bo'lgan narsa bormi?",
                options: [
                  { id: "extra_cavity", text: "Kariyes tekshiruvi" },
                  { id: "extra_gum", text: "Milk tekshiruvi" },
                  { id: "extra_scaling", text: "Tish tozalash" },
                  { id: "extra_none", text: "Yo'q, faqat aql tishini tekshirmoqchiman" }
                ]
              },
              disease_bp_diabetes: {
                question: "Qo'shimcha tekshirmoqchi bo'lgan narsa bormi?",
                options: [
                  { id: "extra_cavity", text: "Kariyes tekshiruvi" },
                  { id: "extra_gum", text: "Milk tekshiruvi" },
                  { id: "extra_scaling", text: "Tish tozalash" },
                  { id: "extra_none", text: "Yo'q, faqat aql tishini tekshirmoqchiman" }
                ]
              },
              disease_osteoporosis: {
                question: "Qo'shimcha tekshirmoqchi bo'lgan narsa bormi?",
                options: [
                  { id: "extra_cavity", text: "Kariyes tekshiruvi" },
                  { id: "extra_gum", text: "Milk tekshiruvi" },
                  { id: "extra_scaling", text: "Tish tozalash" },
                  { id: "extra_none", text: "Yo'q, faqat aql tishini tekshirmoqchiman" }
                ]
              },
              disease_other: {
                question: "Qo'shimcha tekshirmoqchi bo'lgan narsa bormi?",
                options: [
                  { id: "extra_cavity", text: "Kariyes tekshiruvi" },
                  { id: "extra_gum", text: "Milk tekshiruvi" },
                  { id: "extra_scaling", text: "Tish tozalash" },
                  { id: "extra_none", text: "Yo'q, faqat aql tishini tekshirmoqchiman" }
                ]
              },
              disease_none: {
                question: "Qo'shimcha tekshirmoqchi bo'lgan narsa bormi?",
                options: [
                  { id: "extra_cavity", text: "Kariyes tekshiruvi" },
                  { id: "extra_gum", text: "Milk tekshiruvi" },
                  { id: "extra_scaling", text: "Tish tozalash" },
                  { id: "extra_none", text: "Yo'q, faqat aql tishini tekshirmoqchiman" }
                ]
              }
            }
          },
          checkup_worry_fear: {
            question: "Sizda yurak-qon tomir operatsiyasi bo'lganmi yoki surunkali kasalliklar bormi?",
            options: [
              { id: "disease_medication", text: "Har kuni dori ichaman (iltimos, dori qutisini olib keling)" },
              { id: "disease_heart", text: "Oldin yurak yoki qon tomir operatsiyasi bo'lgan" },
              { id: "disease_bp_diabetes", text: "Yuqori qon bosimi/Diabet" },
              { id: "disease_osteoporosis", text: "Osteoporoz" },
              { id: "disease_other", text: "Boshqa surunkali kasalliklar" },
              { id: "disease_none", text: "Yo'q" }
            ],
            next: {
              disease_medication: {
                question: "Qo'shimcha tekshirmoqchi bo'lgan narsa bormi?",
                options: [
                  { id: "extra_cavity", text: "Kariyes tekshiruvi" },
                  { id: "extra_gum", text: "Milk tekshiruvi" },
                  { id: "extra_scaling", text: "Tish tozalash" },
                  { id: "extra_none", text: "Yo'q, faqat aql tishini tekshirmoqchiman" }
                ]
              },
              disease_heart: {
                question: "Qo'shimcha tekshirmoqchi bo'lgan narsa bormi?",
                options: [
                  { id: "extra_cavity", text: "Kariyes tekshiruvi" },
                  { id: "extra_gum", text: "Milk tekshiruvi" },
                  { id: "extra_scaling", text: "Tish tozalash" },
                  { id: "extra_none", text: "Yo'q, faqat aql tishini tekshirmoqchiman" }
                ]
              },
              disease_bp_diabetes: {
                question: "Qo'shimcha tekshirmoqchi bo'lgan narsa bormi?",
                options: [
                  { id: "extra_cavity", text: "Kariyes tekshiruvi" },
                  { id: "extra_gum", text: "Milk tekshiruvi" },
                  { id: "extra_scaling", text: "Tish tozalash" },
                  { id: "extra_none", text: "Yo'q, faqat aql tishini tekshirmoqchiman" }
                ]
              },
              disease_osteoporosis: {
                question: "Qo'shimcha tekshirmoqchi bo'lgan narsa bormi?",
                options: [
                  { id: "extra_cavity", text: "Kariyes tekshiruvi" },
                  { id: "extra_gum", text: "Milk tekshiruvi" },
                  { id: "extra_scaling", text: "Tish tozalash" },
                  { id: "extra_none", text: "Yo'q, faqat aql tishini tekshirmoqchiman" }
                ]
              },
              disease_other: {
                question: "Qo'shimcha tekshirmoqchi bo'lgan narsa bormi?",
                options: [
                  { id: "extra_cavity", text: "Kariyes tekshiruvi" },
                  { id: "extra_gum", text: "Milk tekshiruvi" },
                  { id: "extra_scaling", text: "Tish tozalash" },
                  { id: "extra_none", text: "Yo'q, faqat aql tishini tekshirmoqchiman" }
                ]
              },
              disease_none: {
                question: "Qo'shimcha tekshirmoqchi bo'lgan narsa bormi?",
                options: [
                  { id: "extra_cavity", text: "Kariyes tekshiruvi" },
                  { id: "extra_gum", text: "Milk tekshiruvi" },
                  { id: "extra_scaling", text: "Tish tozalash" },
                  { id: "extra_none", text: "Yo'q, faqat aql tishini tekshirmoqchiman" }
                ]
              }
            }
          },
          checkup_worry_daily: {
            question: "Sizda yurak-qon tomir operatsiyasi bo'lganmi yoki surunkali kasalliklar bormi?",
            options: [
              { id: "disease_medication", text: "Har kuni dori ichaman (iltimos, dori qutisini olib keling)" },
              { id: "disease_heart", text: "Oldin yurak yoki qon tomir operatsiyasi bo'lgan" },
              { id: "disease_bp_diabetes", text: "Yuqori qon bosimi/Diabet" },
              { id: "disease_osteoporosis", text: "Osteoporoz" },
              { id: "disease_other", text: "Boshqa surunkali kasalliklar" },
              { id: "disease_none", text: "Yo'q" }
            ],
            next: {
              disease_medication: {
                question: "Qo'shimcha tekshirmoqchi bo'lgan narsa bormi?",
                options: [
                  { id: "extra_cavity", text: "Kariyes tekshiruvi" },
                  { id: "extra_gum", text: "Milk tekshiruvi" },
                  { id: "extra_scaling", text: "Tish tozalash" },
                  { id: "extra_none", text: "Yo'q, faqat aql tishini tekshirmoqchiman" }
                ]
              },
              disease_heart: {
                question: "Qo'shimcha tekshirmoqchi bo'lgan narsa bormi?",
                options: [
                  { id: "extra_cavity", text: "Kariyes tekshiruvi" },
                  { id: "extra_gum", text: "Milk tekshiruvi" },
                  { id: "extra_scaling", text: "Tish tozalash" },
                  { id: "extra_none", text: "Yo'q, faqat aql tishini tekshirmoqchiman" }
                ]
              },
              disease_bp_diabetes: {
                question: "Qo'shimcha tekshirmoqchi bo'lgan narsa bormi?",
                options: [
                  { id: "extra_cavity", text: "Kariyes tekshiruvi" },
                  { id: "extra_gum", text: "Milk tekshiruvi" },
                  { id: "extra_scaling", text: "Tish tozalash" },
                  { id: "extra_none", text: "Yo'q, faqat aql tishini tekshirmoqchiman" }
                ]
              },
              disease_osteoporosis: {
                question: "Qo'shimcha tekshirmoqchi bo'lgan narsa bormi?",
                options: [
                  { id: "extra_cavity", text: "Kariyes tekshiruvi" },
                  { id: "extra_gum", text: "Milk tekshiruvi" },
                  { id: "extra_scaling", text: "Tish tozalash" },
                  { id: "extra_none", text: "Yo'q, faqat aql tishini tekshirmoqchiman" }
                ]
              },
              disease_other: {
                question: "Qo'shimcha tekshirmoqchi bo'lgan narsa bormi?",
                options: [
                  { id: "extra_cavity", text: "Kariyes tekshiruvi" },
                  { id: "extra_gum", text: "Milk tekshiruvi" },
                  { id: "extra_scaling", text: "Tish tozalash" },
                  { id: "extra_none", text: "Yo'q, faqat aql tishini tekshirmoqchiman" }
                ]
              },
              disease_none: {
                question: "Qo'shimcha tekshirmoqchi bo'lgan narsa bormi?",
                options: [
                  { id: "extra_cavity", text: "Kariyes tekshiruvi" },
                  { id: "extra_gum", text: "Milk tekshiruvi" },
                  { id: "extra_scaling", text: "Tish tozalash" },
                  { id: "extra_none", text: "Yo'q, faqat aql tishini tekshirmoqchiman" }
                ]
              }
            }
          }
        }
      }
    }
  },

  // Estetika haqida savollar
  aesthetic: {
    question: "Nimani yaxshilashni xohlaysiz?",
    options: [
      { id: "aesthetic_color", text: "Tishlar sariq yoki rang o'zgargan" },
      { id: "aesthetic_shape", text: "Tish shakli yoki o'lchami" },
      { id: "aesthetic_gap", text: "Tishlar orasidagi bo'shliq" },
      { id: "aesthetic_alignment", text: "Tishlar tekis emas" }
    ],
    next: {
      aesthetic_color: {
        question: "Rang o'zgarish darajasi va sababi nima?",
        options: [
          { id: "color_coffee", text: "Kofe/sigaret bo'yoqlari" },
          { id: "color_aging", text: "Yoshdan kelib chiqadigan umumiy rang o'zgarishi" },
          { id: "color_single", text: "Faqat ma'lum tish qorong'i" }
        ]
      },
      aesthetic_shape: {
        question: "Sizda qanday muammo bor?",
        options: [
          { id: "shape_small", text: "Tishlar kichik" },
          { id: "shape_chipped", text: "Tish singan yoki yeyilgan" },
          { id: "shape_uneven", text: "Tish uzunligi notekis" }
        ]
      },
      aesthetic_gap: {
        question: "Bo'shliq qayerda?",
        options: [
          { id: "gap_front", text: "Old tishlar orasida" },
          { id: "gap_multiple", text: "Bir necha joyda bo'shliq bor" }
        ]
      },
      aesthetic_alignment: {
        question: "Tish joylashuvi muammosi qanday darajada?",
        options: [
          { id: "alignment_mild", text: "Biroz qiyshiq" },
          { id: "alignment_moderate", text: "O'rtacha darajada qo'shimcha tish" },
          { id: "alignment_severe", text: "Juda qiyshiq" }
        ]
      }
    }
  },

  // Tish yo'qotish haqida savollar (implant maslahati uchun) - Q1: Hozirgi holat
  missing_tooth: {
    question: "Hozirgi tish holatingiz qanday?",
    options: [
      { id: "missing_upper_all", text: "Barcha yuqori tishlar yo'q yoki sug'urilishi kerak" },
      { id: "missing_lower_all", text: "Barcha pastki tishlar yo'q yoki sug'urilishi kerak" },
      { id: "missing_all", text: "Deyarli barcha tishlar yo'q yoki sug'urilishi kerak" },
      { id: "missing_partial", text: "Bir nechta tishlar yo'q (10 tagacha) yoki sug'urilishi kerak" },
      { id: "implant_revision", text: "Implant qayta operatsiyasi kerak" }
    ],
    next: {
      // Q2: Protez bormi (barcha variantlar uchun umumiy)
      missing_upper_all: {
        question: "Hozir protez taqyapsizmi?",
        options: [
          { id: "denture_yes", text: "Ha" },
          { id: "denture_no", text: "Yo'q" }
        ],
        next: {
          // Q3: Surunkali kasalliklarni tekshirish
          denture_yes: {
            question: "Sizda surunkali kasalliklar bormi?",
            options: [
              { id: "disease_diabetes", text: "Diabet" },
              { id: "disease_hypertension", text: "Yuqori qon bosimi" },
              { id: "disease_osteoporosis", text: "Osteoporoz" },
              { id: "disease_heart", text: "Yurak kasalliklari" },
              { id: "disease_none", text: "Yo'q" }
            ],
            next: {
              // Q4: Davolanishdagi muhim narsa (Q5 roli)
              disease_diabetes: {
                question: "Davolanishda siz uchun eng muhim narsa nima?",
                options: [
                  { id: "priority_cost", text: "Narx" },
                  { id: "priority_pain", text: "Og'riq" },
                  { id: "priority_eating", text: "Qulay ovqatlanish" },
                  { id: "priority_recovery", text: "Operatsiyadan keyin tez tiklanish va oddiy hayotga qaytish" }
                ],
                next: {
                  // Q5: Ikkilanish sababi (Q6 roli)
                  priority_cost: {
                    question: "Davolanishni kechiktirishingiz uchun sabab bormi?",
                    options: [
                      { id: "hesitation_cost", text: "Narx tufayli" },
                      { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" },
                      { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" },
                      { id: "hesitation_none", text: "Maxsus sabab yo'q" }
                    ]
                  },
                  priority_pain: {
                    question: "Davolanishni kechiktirishingiz uchun sabab bormi?",
                    options: [
                      { id: "hesitation_cost", text: "Narx tufayli" },
                      { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" },
                      { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" },
                      { id: "hesitation_none", text: "Maxsus sabab yo'q" }
                    ]
                  },
                  priority_eating: {
                    question: "Davolanishni kechiktirishingiz uchun sabab bormi?",
                    options: [
                      { id: "hesitation_cost", text: "Narx tufayli" },
                      { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" },
                      { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" },
                      { id: "hesitation_none", text: "Maxsus sabab yo'q" }
                    ]
                  },
                  priority_recovery: {
                    question: "Davolanishni kechiktirishingiz uchun sabab bormi?",
                    options: [
                      { id: "hesitation_cost", text: "Narx tufayli" },
                      { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" },
                      { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" },
                      { id: "hesitation_none", text: "Maxsus sabab yo'q" }
                    ]
                  }
                }
              },
              disease_hypertension: {
                question: "Davolanishda siz uchun eng muhim narsa nima?",
                options: [
                  { id: "priority_cost", text: "Narx" },
                  { id: "priority_pain", text: "Og'riq" },
                  { id: "priority_eating", text: "Qulay ovqatlanish" },
                  { id: "priority_recovery", text: "Operatsiyadan keyin tez tiklanish va oddiy hayotga qaytish" }
                ],
                next: {
                  priority_cost: {
                    question: "Davolanishni kechiktirishingiz uchun sabab bormi?",
                    options: [
                      { id: "hesitation_cost", text: "Narx tufayli" },
                      { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" },
                      { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" },
                      { id: "hesitation_none", text: "Maxsus sabab yo'q" }
                    ]
                  },
                  priority_pain: {
                    question: "Davolanishni kechiktirishingiz uchun sabab bormi?",
                    options: [
                      { id: "hesitation_cost", text: "Narx tufayli" },
                      { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" },
                      { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" },
                      { id: "hesitation_none", text: "Maxsus sabab yo'q" }
                    ]
                  },
                  priority_eating: {
                    question: "Davolanishni kechiktirishingiz uchun sabab bormi?",
                    options: [
                      { id: "hesitation_cost", text: "Narx tufayli" },
                      { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" },
                      { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" },
                      { id: "hesitation_none", text: "Maxsus sabab yo'q" }
                    ]
                  },
                  priority_recovery: {
                    question: "Davolanishni kechiktirishingiz uchun sabab bormi?",
                    options: [
                      { id: "hesitation_cost", text: "Narx tufayli" },
                      { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" },
                      { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" },
                      { id: "hesitation_none", text: "Maxsus sabab yo'q" }
                    ]
                  }
                }
              },
              disease_osteoporosis: {
                question: "Davolanishda siz uchun eng muhim narsa nima?",
                options: [
                  { id: "priority_cost", text: "Narx" },
                  { id: "priority_pain", text: "Og'riq" },
                  { id: "priority_eating", text: "Qulay ovqatlanish" },
                  { id: "priority_recovery", text: "Operatsiyadan keyin tez tiklanish va oddiy hayotga qaytish" }
                ],
                next: {
                  priority_cost: {
                    question: "Davolanishni kechiktirishingiz uchun sabab bormi?",
                    options: [
                      { id: "hesitation_cost", text: "Narx tufayli" },
                      { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" },
                      { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" },
                      { id: "hesitation_none", text: "Maxsus sabab yo'q" }
                    ]
                  },
                  priority_pain: {
                    question: "Davolanishni kechiktirishingiz uchun sabab bormi?",
                    options: [
                      { id: "hesitation_cost", text: "Narx tufayli" },
                      { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" },
                      { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" },
                      { id: "hesitation_none", text: "Maxsus sabab yo'q" }
                    ]
                  },
                  priority_eating: {
                    question: "Davolanishni kechiktirishingiz uchun sabab bormi?",
                    options: [
                      { id: "hesitation_cost", text: "Narx tufayli" },
                      { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" },
                      { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" },
                      { id: "hesitation_none", text: "Maxsus sabab yo'q" }
                    ]
                  },
                  priority_recovery: {
                    question: "Davolanishni kechiktirishingiz uchun sabab bormi?",
                    options: [
                      { id: "hesitation_cost", text: "Narx tufayli" },
                      { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" },
                      { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" },
                      { id: "hesitation_none", text: "Maxsus sabab yo'q" }
                    ]
                  }
                }
              },
              disease_heart: {
                question: "Davolanishda siz uchun eng muhim narsa nima?",
                options: [
                  { id: "priority_cost", text: "Narx" },
                  { id: "priority_pain", text: "Og'riq" },
                  { id: "priority_eating", text: "Qulay ovqatlanish" },
                  { id: "priority_recovery", text: "Operatsiyadan keyin tez tiklanish va oddiy hayotga qaytish" }
                ],
                next: {
                  priority_cost: {
                    question: "Davolanishni kechiktirishingiz uchun sabab bormi?",
                    options: [
                      { id: "hesitation_cost", text: "Narx tufayli" },
                      { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" },
                      { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" },
                      { id: "hesitation_none", text: "Maxsus sabab yo'q" }
                    ]
                  },
                  priority_pain: {
                    question: "Davolanishni kechiktirishingiz uchun sabab bormi?",
                    options: [
                      { id: "hesitation_cost", text: "Narx tufayli" },
                      { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" },
                      { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" },
                      { id: "hesitation_none", text: "Maxsus sabab yo'q" }
                    ]
                  },
                  priority_eating: {
                    question: "Davolanishni kechiktirishingiz uchun sabab bormi?",
                    options: [
                      { id: "hesitation_cost", text: "Narx tufayli" },
                      { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" },
                      { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" },
                      { id: "hesitation_none", text: "Maxsus sabab yo'q" }
                    ]
                  },
                  priority_recovery: {
                    question: "Davolanishni kechiktirishingiz uchun sabab bormi?",
                    options: [
                      { id: "hesitation_cost", text: "Narx tufayli" },
                      { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" },
                      { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" },
                      { id: "hesitation_none", text: "Maxsus sabab yo'q" }
                    ]
                  }
                }
              },
              disease_none: {
                question: "Davolanishda siz uchun eng muhim narsa nima?",
                options: [
                  { id: "priority_cost", text: "Narx" },
                  { id: "priority_pain", text: "Og'riq" },
                  { id: "priority_eating", text: "Qulay ovqatlanish" },
                  { id: "priority_recovery", text: "Operatsiyadan keyin tez tiklanish va oddiy hayotga qaytish" }
                ],
                next: {
                  priority_cost: {
                    question: "Davolanishni kechiktirishingiz uchun sabab bormi?",
                    options: [
                      { id: "hesitation_cost", text: "Narx tufayli" },
                      { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" },
                      { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" },
                      { id: "hesitation_none", text: "Maxsus sabab yo'q" }
                    ]
                  },
                  priority_pain: {
                    question: "Davolanishni kechiktirishingiz uchun sabab bormi?",
                    options: [
                      { id: "hesitation_cost", text: "Narx tufayli" },
                      { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" },
                      { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" },
                      { id: "hesitation_none", text: "Maxsus sabab yo'q" }
                    ]
                  },
                  priority_eating: {
                    question: "Davolanishni kechiktirishingiz uchun sabab bormi?",
                    options: [
                      { id: "hesitation_cost", text: "Narx tufayli" },
                      { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" },
                      { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" },
                      { id: "hesitation_none", text: "Maxsus sabab yo'q" }
                    ]
                  },
                  priority_recovery: {
                    question: "Davolanishni kechiktirishingiz uchun sabab bormi?",
                    options: [
                      { id: "hesitation_cost", text: "Narx tufayli" },
                      { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" },
                      { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" },
                      { id: "hesitation_none", text: "Maxsus sabab yo'q" }
                    ]
                  }
                }
              }
            }
          },
          denture_no: {
            question: "Sizda surunkali kasalliklar bormi?",
            options: [
              { id: "disease_diabetes", text: "Diabet" },
              { id: "disease_hypertension", text: "Yuqori qon bosimi" },
              { id: "disease_osteoporosis", text: "Osteoporoz" },
              { id: "disease_heart", text: "Yurak kasalliklari" },
              { id: "disease_none", text: "Yo'q" }
            ],
            next: {
              disease_diabetes: {
                question: "Davolanishda siz uchun eng muhim narsa nima?",
                options: [
                  { id: "priority_cost", text: "Narx" },
                  { id: "priority_pain", text: "Og'riq" },
                  { id: "priority_eating", text: "Qulay ovqatlanish" },
                  { id: "priority_recovery", text: "Operatsiyadan keyin tez tiklanish va oddiy hayotga qaytish" }
                ],
                next: {
                  priority_cost: {
                    question: "Davolanishni kechiktirishingiz uchun sabab bormi?",
                    options: [
                      { id: "hesitation_cost", text: "Narx tufayli" },
                      { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" },
                      { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" },
                      { id: "hesitation_none", text: "Maxsus sabab yo'q" }
                    ]
                  },
                  priority_pain: {
                    question: "Davolanishni kechiktirishingiz uchun sabab bormi?",
                    options: [
                      { id: "hesitation_cost", text: "Narx tufayli" },
                      { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" },
                      { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" },
                      { id: "hesitation_none", text: "Maxsus sabab yo'q" }
                    ]
                  },
                  priority_eating: {
                    question: "Davolanishni kechiktirishingiz uchun sabab bormi?",
                    options: [
                      { id: "hesitation_cost", text: "Narx tufayli" },
                      { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" },
                      { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" },
                      { id: "hesitation_none", text: "Maxsus sabab yo'q" }
                    ]
                  },
                  priority_recovery: {
                    question: "Davolanishni kechiktirishingiz uchun sabab bormi?",
                    options: [
                      { id: "hesitation_cost", text: "Narx tufayli" },
                      { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" },
                      { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" },
                      { id: "hesitation_none", text: "Maxsus sabab yo'q" }
                    ]
                  }
                }
              },
              disease_hypertension: {
                question: "Davolanishda siz uchun eng muhim narsa nima?",
                options: [
                  { id: "priority_cost", text: "Narx" },
                  { id: "priority_pain", text: "Og'riq" },
                  { id: "priority_eating", text: "Qulay ovqatlanish" },
                  { id: "priority_recovery", text: "Operatsiyadan keyin tez tiklanish va oddiy hayotga qaytish" }
                ],
                next: {
                  priority_cost: {
                    question: "Davolanishni kechiktirishingiz uchun sabab bormi?",
                    options: [
                      { id: "hesitation_cost", text: "Narx tufayli" },
                      { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" },
                      { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" },
                      { id: "hesitation_none", text: "Maxsus sabab yo'q" }
                    ]
                  },
                  priority_pain: {
                    question: "Davolanishni kechiktirishingiz uchun sabab bormi?",
                    options: [
                      { id: "hesitation_cost", text: "Narx tufayli" },
                      { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" },
                      { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" },
                      { id: "hesitation_none", text: "Maxsus sabab yo'q" }
                    ]
                  },
                  priority_eating: {
                    question: "Davolanishni kechiktirishingiz uchun sabab bormi?",
                    options: [
                      { id: "hesitation_cost", text: "Narx tufayli" },
                      { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" },
                      { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" },
                      { id: "hesitation_none", text: "Maxsus sabab yo'q" }
                    ]
                  },
                  priority_recovery: {
                    question: "Davolanishni kechiktirishingiz uchun sabab bormi?",
                    options: [
                      { id: "hesitation_cost", text: "Narx tufayli" },
                      { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" },
                      { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" },
                      { id: "hesitation_none", text: "Maxsus sabab yo'q" }
                    ]
                  }
                }
              },
              disease_osteoporosis: {
                question: "Davolanishda siz uchun eng muhim narsa nima?",
                options: [
                  { id: "priority_cost", text: "Narx" },
                  { id: "priority_pain", text: "Og'riq" },
                  { id: "priority_eating", text: "Qulay ovqatlanish" },
                  { id: "priority_recovery", text: "Operatsiyadan keyin tez tiklanish va oddiy hayotga qaytish" }
                ],
                next: {
                  priority_cost: {
                    question: "Davolanishni kechiktirishingiz uchun sabab bormi?",
                    options: [
                      { id: "hesitation_cost", text: "Narx tufayli" },
                      { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" },
                      { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" },
                      { id: "hesitation_none", text: "Maxsus sabab yo'q" }
                    ]
                  },
                  priority_pain: {
                    question: "Davolanishni kechiktirishingiz uchun sabab bormi?",
                    options: [
                      { id: "hesitation_cost", text: "Narx tufayli" },
                      { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" },
                      { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" },
                      { id: "hesitation_none", text: "Maxsus sabab yo'q" }
                    ]
                  },
                  priority_eating: {
                    question: "Davolanishni kechiktirishingiz uchun sabab bormi?",
                    options: [
                      { id: "hesitation_cost", text: "Narx tufayli" },
                      { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" },
                      { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" },
                      { id: "hesitation_none", text: "Maxsus sabab yo'q" }
                    ]
                  },
                  priority_recovery: {
                    question: "Davolanishni kechiktirishingiz uchun sabab bormi?",
                    options: [
                      { id: "hesitation_cost", text: "Narx tufayli" },
                      { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" },
                      { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" },
                      { id: "hesitation_none", text: "Maxsus sabab yo'q" }
                    ]
                  }
                }
              },
              disease_heart: {
                question: "Davolanishda siz uchun eng muhim narsa nima?",
                options: [
                  { id: "priority_cost", text: "Narx" },
                  { id: "priority_pain", text: "Og'riq" },
                  { id: "priority_eating", text: "Qulay ovqatlanish" },
                  { id: "priority_recovery", text: "Operatsiyadan keyin tez tiklanish va oddiy hayotga qaytish" }
                ],
                next: {
                  priority_cost: {
                    question: "Davolanishni kechiktirishingiz uchun sabab bormi?",
                    options: [
                      { id: "hesitation_cost", text: "Narx tufayli" },
                      { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" },
                      { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" },
                      { id: "hesitation_none", text: "Maxsus sabab yo'q" }
                    ]
                  },
                  priority_pain: {
                    question: "Davolanishni kechiktirishingiz uchun sabab bormi?",
                    options: [
                      { id: "hesitation_cost", text: "Narx tufayli" },
                      { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" },
                      { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" },
                      { id: "hesitation_none", text: "Maxsus sabab yo'q" }
                    ]
                  },
                  priority_eating: {
                    question: "Davolanishni kechiktirishingiz uchun sabab bormi?",
                    options: [
                      { id: "hesitation_cost", text: "Narx tufayli" },
                      { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" },
                      { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" },
                      { id: "hesitation_none", text: "Maxsus sabab yo'q" }
                    ]
                  },
                  priority_recovery: {
                    question: "Davolanishni kechiktirishingiz uchun sabab bormi?",
                    options: [
                      { id: "hesitation_cost", text: "Narx tufayli" },
                      { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" },
                      { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" },
                      { id: "hesitation_none", text: "Maxsus sabab yo'q" }
                    ]
                  }
                }
              },
              disease_none: {
                question: "Davolanishda siz uchun eng muhim narsa nima?",
                options: [
                  { id: "priority_cost", text: "Narx" },
                  { id: "priority_pain", text: "Og'riq" },
                  { id: "priority_eating", text: "Qulay ovqatlanish" },
                  { id: "priority_recovery", text: "Operatsiyadan keyin tez tiklanish va oddiy hayotga qaytish" }
                ],
                next: {
                  priority_cost: {
                    question: "Davolanishni kechiktirishingiz uchun sabab bormi?",
                    options: [
                      { id: "hesitation_cost", text: "Narx tufayli" },
                      { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" },
                      { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" },
                      { id: "hesitation_none", text: "Maxsus sabab yo'q" }
                    ]
                  },
                  priority_pain: {
                    question: "Davolanishni kechiktirishingiz uchun sabab bormi?",
                    options: [
                      { id: "hesitation_cost", text: "Narx tufayli" },
                      { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" },
                      { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" },
                      { id: "hesitation_none", text: "Maxsus sabab yo'q" }
                    ]
                  },
                  priority_eating: {
                    question: "Davolanishni kechiktirishingiz uchun sabab bormi?",
                    options: [
                      { id: "hesitation_cost", text: "Narx tufayli" },
                      { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" },
                      { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" },
                      { id: "hesitation_none", text: "Maxsus sabab yo'q" }
                    ]
                  },
                  priority_recovery: {
                    question: "Davolanishni kechiktirishingiz uchun sabab bormi?",
                    options: [
                      { id: "hesitation_cost", text: "Narx tufayli" },
                      { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" },
                      { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" },
                      { id: "hesitation_none", text: "Maxsus sabab yo'q" }
                    ]
                  }
                }
              }
            }
          }
        }
      },
      // Boshqa variantlarga ham xuddi shunday jarayon qo'llaniladi (missing_upper_all bilan bir xil tuzilma)
      missing_all: {
        question: "Hozir protez taqyapsizmi?",
        options: [
          { id: "denture_yes", text: "Ha" },
          { id: "denture_no", text: "Yo'q" }
        ],
        next: {
          denture_yes: {
            question: "Sizda surunkali kasalliklar bormi?",
            options: [
              { id: "disease_diabetes", text: "Diabet" },
              { id: "disease_hypertension", text: "Yuqori qon bosimi" },
              { id: "disease_osteoporosis", text: "Osteoporoz" },
              { id: "disease_heart", text: "Yurak kasalliklari" },
              { id: "disease_none", text: "Yo'q" }
            ],
            next: {
              disease_diabetes: { question: "Davolanishda siz uchun eng muhim narsa nima?", options: [{ id: "priority_cost", text: "Narx" }, { id: "priority_pain", text: "Og'riq" }, { id: "priority_eating", text: "Qulay ovqatlanish" }, { id: "priority_recovery", text: "Operatsiyadan keyin tez tiklanish va oddiy hayotga qaytish" }], next: { priority_cost: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_pain: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_eating: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_recovery: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] } } },
              disease_hypertension: { question: "Davolanishda siz uchun eng muhim narsa nima?", options: [{ id: "priority_cost", text: "Narx" }, { id: "priority_pain", text: "Og'riq" }, { id: "priority_eating", text: "Qulay ovqatlanish" }, { id: "priority_recovery", text: "Operatsiyadan keyin tez tiklanish va oddiy hayotga qaytish" }], next: { priority_cost: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_pain: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_eating: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_recovery: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] } } },
              disease_osteoporosis: { question: "Davolanishda siz uchun eng muhim narsa nima?", options: [{ id: "priority_cost", text: "Narx" }, { id: "priority_pain", text: "Og'riq" }, { id: "priority_eating", text: "Qulay ovqatlanish" }, { id: "priority_recovery", text: "Operatsiyadan keyin tez tiklanish va oddiy hayotga qaytish" }], next: { priority_cost: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_pain: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_eating: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_recovery: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] } } },
              disease_heart: { question: "Davolanishda siz uchun eng muhim narsa nima?", options: [{ id: "priority_cost", text: "Narx" }, { id: "priority_pain", text: "Og'riq" }, { id: "priority_eating", text: "Qulay ovqatlanish" }, { id: "priority_recovery", text: "Operatsiyadan keyin tez tiklanish va oddiy hayotga qaytish" }], next: { priority_cost: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_pain: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_eating: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_recovery: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] } } },
              disease_none: { question: "Davolanishda siz uchun eng muhim narsa nima?", options: [{ id: "priority_cost", text: "Narx" }, { id: "priority_pain", text: "Og'riq" }, { id: "priority_eating", text: "Qulay ovqatlanish" }, { id: "priority_recovery", text: "Operatsiyadan keyin tez tiklanish va oddiy hayotga qaytish" }], next: { priority_cost: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_pain: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_eating: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_recovery: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] } } }
            }
          },
          denture_no: {
            question: "Sizda surunkali kasalliklar bormi?",
            options: [
              { id: "disease_diabetes", text: "Diabet" },
              { id: "disease_hypertension", text: "Yuqori qon bosimi" },
              { id: "disease_osteoporosis", text: "Osteoporoz" },
              { id: "disease_heart", text: "Yurak kasalliklari" },
              { id: "disease_none", text: "Yo'q" }
            ],
            next: {
              disease_diabetes: { question: "Davolanishda siz uchun eng muhim narsa nima?", options: [{ id: "priority_cost", text: "Narx" }, { id: "priority_pain", text: "Og'riq" }, { id: "priority_eating", text: "Qulay ovqatlanish" }, { id: "priority_recovery", text: "Operatsiyadan keyin tez tiklanish va oddiy hayotga qaytish" }], next: { priority_cost: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_pain: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_eating: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_recovery: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] } } },
              disease_hypertension: { question: "Davolanishda siz uchun eng muhim narsa nima?", options: [{ id: "priority_cost", text: "Narx" }, { id: "priority_pain", text: "Og'riq" }, { id: "priority_eating", text: "Qulay ovqatlanish" }, { id: "priority_recovery", text: "Operatsiyadan keyin tez tiklanish va oddiy hayotga qaytish" }], next: { priority_cost: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_pain: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_eating: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_recovery: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] } } },
              disease_osteoporosis: { question: "Davolanishda siz uchun eng muhim narsa nima?", options: [{ id: "priority_cost", text: "Narx" }, { id: "priority_pain", text: "Og'riq" }, { id: "priority_eating", text: "Qulay ovqatlanish" }, { id: "priority_recovery", text: "Operatsiyadan keyin tez tiklanish va oddiy hayotga qaytish" }], next: { priority_cost: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_pain: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_eating: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_recovery: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] } } },
              disease_heart: { question: "Davolanishda siz uchun eng muhim narsa nima?", options: [{ id: "priority_cost", text: "Narx" }, { id: "priority_pain", text: "Og'riq" }, { id: "priority_eating", text: "Qulay ovqatlanish" }, { id: "priority_recovery", text: "Operatsiyadan keyin tez tiklanish va oddiy hayotga qaytish" }], next: { priority_cost: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_pain: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_eating: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_recovery: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] } } },
              disease_none: { question: "Davolanishda siz uchun eng muhim narsa nima?", options: [{ id: "priority_cost", text: "Narx" }, { id: "priority_pain", text: "Og'riq" }, { id: "priority_eating", text: "Qulay ovqatlanish" }, { id: "priority_recovery", text: "Operatsiyadan keyin tez tiklanish va oddiy hayotga qaytish" }], next: { priority_cost: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_pain: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_eating: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_recovery: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] } } }
            }
          }
        }
      },
      missing_lower_all: {
        question: "Hozir protez taqyapsizmi?",
        options: [
          { id: "denture_yes", text: "Ha" },
          { id: "denture_no", text: "Yo'q" }
        ],
        next: {
          denture_yes: {
            question: "Sizda surunkali kasalliklar bormi?",
            options: [
              { id: "disease_diabetes", text: "Diabet" },
              { id: "disease_hypertension", text: "Yuqori qon bosimi" },
              { id: "disease_osteoporosis", text: "Osteoporoz" },
              { id: "disease_heart", text: "Yurak kasalliklari" },
              { id: "disease_none", text: "Yo'q" }
            ],
            next: {
              disease_diabetes: { question: "Davolanishda siz uchun eng muhim narsa nima?", options: [{ id: "priority_cost", text: "Narx" }, { id: "priority_pain", text: "Og'riq" }, { id: "priority_eating", text: "Qulay ovqatlanish" }, { id: "priority_recovery", text: "Operatsiyadan keyin tez tiklanish va oddiy hayotga qaytish" }], next: { priority_cost: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_pain: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_eating: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_recovery: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] } } },
              disease_hypertension: { question: "Davolanishda siz uchun eng muhim narsa nima?", options: [{ id: "priority_cost", text: "Narx" }, { id: "priority_pain", text: "Og'riq" }, { id: "priority_eating", text: "Qulay ovqatlanish" }, { id: "priority_recovery", text: "Operatsiyadan keyin tez tiklanish va oddiy hayotga qaytish" }], next: { priority_cost: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_pain: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_eating: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_recovery: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] } } },
              disease_osteoporosis: { question: "Davolanishda siz uchun eng muhim narsa nima?", options: [{ id: "priority_cost", text: "Narx" }, { id: "priority_pain", text: "Og'riq" }, { id: "priority_eating", text: "Qulay ovqatlanish" }, { id: "priority_recovery", text: "Operatsiyadan keyin tez tiklanish va oddiy hayotga qaytish" }], next: { priority_cost: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_pain: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_eating: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_recovery: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] } } },
              disease_heart: { question: "Davolanishda siz uchun eng muhim narsa nima?", options: [{ id: "priority_cost", text: "Narx" }, { id: "priority_pain", text: "Og'riq" }, { id: "priority_eating", text: "Qulay ovqatlanish" }, { id: "priority_recovery", text: "Operatsiyadan keyin tez tiklanish va oddiy hayotga qaytish" }], next: { priority_cost: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_pain: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_eating: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_recovery: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] } } },
              disease_none: { question: "Davolanishda siz uchun eng muhim narsa nima?", options: [{ id: "priority_cost", text: "Narx" }, { id: "priority_pain", text: "Og'riq" }, { id: "priority_eating", text: "Qulay ovqatlanish" }, { id: "priority_recovery", text: "Operatsiyadan keyin tez tiklanish va oddiy hayotga qaytish" }], next: { priority_cost: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_pain: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_eating: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_recovery: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] } } }
            }
          },
          denture_no: {
            question: "Sizda surunkali kasalliklar bormi?",
            options: [
              { id: "disease_diabetes", text: "Diabet" },
              { id: "disease_hypertension", text: "Yuqori qon bosimi" },
              { id: "disease_osteoporosis", text: "Osteoporoz" },
              { id: "disease_heart", text: "Yurak kasalliklari" },
              { id: "disease_none", text: "Yo'q" }
            ],
            next: {
              disease_diabetes: { question: "Davolanishda siz uchun eng muhim narsa nima?", options: [{ id: "priority_cost", text: "Narx" }, { id: "priority_pain", text: "Og'riq" }, { id: "priority_eating", text: "Qulay ovqatlanish" }, { id: "priority_recovery", text: "Operatsiyadan keyin tez tiklanish va oddiy hayotga qaytish" }], next: { priority_cost: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_pain: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_eating: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_recovery: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] } } },
              disease_hypertension: { question: "Davolanishda siz uchun eng muhim narsa nima?", options: [{ id: "priority_cost", text: "Narx" }, { id: "priority_pain", text: "Og'riq" }, { id: "priority_eating", text: "Qulay ovqatlanish" }, { id: "priority_recovery", text: "Operatsiyadan keyin tez tiklanish va oddiy hayotga qaytish" }], next: { priority_cost: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_pain: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_eating: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_recovery: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] } } },
              disease_osteoporosis: { question: "Davolanishda siz uchun eng muhim narsa nima?", options: [{ id: "priority_cost", text: "Narx" }, { id: "priority_pain", text: "Og'riq" }, { id: "priority_eating", text: "Qulay ovqatlanish" }, { id: "priority_recovery", text: "Operatsiyadan keyin tez tiklanish va oddiy hayotga qaytish" }], next: { priority_cost: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_pain: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_eating: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_recovery: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] } } },
              disease_heart: { question: "Davolanishda siz uchun eng muhim narsa nima?", options: [{ id: "priority_cost", text: "Narx" }, { id: "priority_pain", text: "Og'riq" }, { id: "priority_eating", text: "Qulay ovqatlanish" }, { id: "priority_recovery", text: "Operatsiyadan keyin tez tiklanish va oddiy hayotga qaytish" }], next: { priority_cost: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_pain: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_eating: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_recovery: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] } } },
              disease_none: { question: "Davolanishda siz uchun eng muhim narsa nima?", options: [{ id: "priority_cost", text: "Narx" }, { id: "priority_pain", text: "Og'riq" }, { id: "priority_eating", text: "Qulay ovqatlanish" }, { id: "priority_recovery", text: "Operatsiyadan keyin tez tiklanish va oddiy hayotga qaytish" }], next: { priority_cost: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_pain: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_eating: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_recovery: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] } } }
            }
          }
        }
      },
      missing_partial: {
        question: "Qaysi sohadagi tishlar yo'q yoki sug'urilishi kerak?",
        options: [
          { id: "location_front", text: "Old tishlar sohasida" },
          { id: "location_back", text: "Oziq tishlar sohasida" },
          { id: "location_both", text: "Old va oziq tishlar hammasi" }
        ],
        next: {
          location_front: {
            question: "Sizda surunkali kasalliklar bormi?",
            options: [
              { id: "disease_diabetes", text: "Diabet" },
              { id: "disease_hypertension", text: "Yuqori qon bosimi" },
              { id: "disease_osteoporosis", text: "Osteoporoz" },
              { id: "disease_heart", text: "Yurak kasalliklari" },
              { id: "disease_none", text: "Yo'q" }
            ],
            next: {
              disease_diabetes: { question: "Davolanishda siz uchun eng muhim narsa nima?", options: [{ id: "priority_cost", text: "Narx" }, { id: "priority_pain", text: "Og'riq" }, { id: "priority_eating", text: "Qulay ovqatlanish" }, { id: "priority_recovery", text: "Operatsiyadan keyin tez tiklanish va oddiy hayotga qaytish" }], next: { priority_cost: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_pain: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_eating: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_recovery: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] } } },
              disease_hypertension: { question: "Davolanishda siz uchun eng muhim narsa nima?", options: [{ id: "priority_cost", text: "Narx" }, { id: "priority_pain", text: "Og'riq" }, { id: "priority_eating", text: "Qulay ovqatlanish" }, { id: "priority_recovery", text: "Operatsiyadan keyin tez tiklanish va oddiy hayotga qaytish" }], next: { priority_cost: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_pain: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_eating: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_recovery: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] } } },
              disease_osteoporosis: { question: "Davolanishda siz uchun eng muhim narsa nima?", options: [{ id: "priority_cost", text: "Narx" }, { id: "priority_pain", text: "Og'riq" }, { id: "priority_eating", text: "Qulay ovqatlanish" }, { id: "priority_recovery", text: "Operatsiyadan keyin tez tiklanish va oddiy hayotga qaytish" }], next: { priority_cost: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_pain: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_eating: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_recovery: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] } } },
              disease_heart: { question: "Davolanishda siz uchun eng muhim narsa nima?", options: [{ id: "priority_cost", text: "Narx" }, { id: "priority_pain", text: "Og'riq" }, { id: "priority_eating", text: "Qulay ovqatlanish" }, { id: "priority_recovery", text: "Operatsiyadan keyin tez tiklanish va oddiy hayotga qaytish" }], next: { priority_cost: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_pain: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_eating: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_recovery: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] } } },
              disease_none: { question: "Davolanishda siz uchun eng muhim narsa nima?", options: [{ id: "priority_cost", text: "Narx" }, { id: "priority_pain", text: "Og'riq" }, { id: "priority_eating", text: "Qulay ovqatlanish" }, { id: "priority_recovery", text: "Operatsiyadan keyin tez tiklanish va oddiy hayotga qaytish" }], next: { priority_cost: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_pain: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_eating: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_recovery: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] } } }
            }
          },
          location_back: {
            question: "Sizda surunkali kasalliklar bormi?",
            options: [
              { id: "disease_diabetes", text: "Diabet" },
              { id: "disease_hypertension", text: "Yuqori qon bosimi" },
              { id: "disease_osteoporosis", text: "Osteoporoz" },
              { id: "disease_heart", text: "Yurak kasalliklari" },
              { id: "disease_none", text: "Yo'q" }
            ],
            next: {
              disease_diabetes: { question: "Davolanishda siz uchun eng muhim narsa nima?", options: [{ id: "priority_cost", text: "Narx" }, { id: "priority_pain", text: "Og'riq" }, { id: "priority_eating", text: "Qulay ovqatlanish" }, { id: "priority_recovery", text: "Operatsiyadan keyin tez tiklanish va oddiy hayotga qaytish" }], next: { priority_cost: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_pain: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_eating: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_recovery: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] } } },
              disease_hypertension: { question: "Davolanishda siz uchun eng muhim narsa nima?", options: [{ id: "priority_cost", text: "Narx" }, { id: "priority_pain", text: "Og'riq" }, { id: "priority_eating", text: "Qulay ovqatlanish" }, { id: "priority_recovery", text: "Operatsiyadan keyin tez tiklanish va oddiy hayotga qaytish" }], next: { priority_cost: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_pain: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_eating: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_recovery: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] } } },
              disease_osteoporosis: { question: "Davolanishda siz uchun eng muhim narsa nima?", options: [{ id: "priority_cost", text: "Narx" }, { id: "priority_pain", text: "Og'riq" }, { id: "priority_eating", text: "Qulay ovqatlanish" }, { id: "priority_recovery", text: "Operatsiyadan keyin tez tiklanish va oddiy hayotga qaytish" }], next: { priority_cost: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_pain: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_eating: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_recovery: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] } } },
              disease_heart: { question: "Davolanishda siz uchun eng muhim narsa nima?", options: [{ id: "priority_cost", text: "Narx" }, { id: "priority_pain", text: "Og'riq" }, { id: "priority_eating", text: "Qulay ovqatlanish" }, { id: "priority_recovery", text: "Operatsiyadan keyin tez tiklanish va oddiy hayotga qaytish" }], next: { priority_cost: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_pain: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_eating: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_recovery: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] } } },
              disease_none: { question: "Davolanishda siz uchun eng muhim narsa nima?", options: [{ id: "priority_cost", text: "Narx" }, { id: "priority_pain", text: "Og'riq" }, { id: "priority_eating", text: "Qulay ovqatlanish" }, { id: "priority_recovery", text: "Operatsiyadan keyin tez tiklanish va oddiy hayotga qaytish" }], next: { priority_cost: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_pain: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_eating: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_recovery: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] } } }
            }
          },
          location_both: {
            question: "Sizda surunkali kasalliklar bormi?",
            options: [
              { id: "disease_diabetes", text: "Diabet" },
              { id: "disease_hypertension", text: "Yuqori qon bosimi" },
              { id: "disease_osteoporosis", text: "Osteoporoz" },
              { id: "disease_heart", text: "Yurak kasalliklari" },
              { id: "disease_none", text: "Yo'q" }
            ],
            next: {
              disease_diabetes: { question: "Davolanishda siz uchun eng muhim narsa nima?", options: [{ id: "priority_cost", text: "Narx" }, { id: "priority_pain", text: "Og'riq" }, { id: "priority_eating", text: "Qulay ovqatlanish" }, { id: "priority_recovery", text: "Operatsiyadan keyin tez tiklanish va oddiy hayotga qaytish" }], next: { priority_cost: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_pain: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_eating: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_recovery: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] } } },
              disease_hypertension: { question: "Davolanishda siz uchun eng muhim narsa nima?", options: [{ id: "priority_cost", text: "Narx" }, { id: "priority_pain", text: "Og'riq" }, { id: "priority_eating", text: "Qulay ovqatlanish" }, { id: "priority_recovery", text: "Operatsiyadan keyin tez tiklanish va oddiy hayotga qaytish" }], next: { priority_cost: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_pain: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_eating: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_recovery: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] } } },
              disease_osteoporosis: { question: "Davolanishda siz uchun eng muhim narsa nima?", options: [{ id: "priority_cost", text: "Narx" }, { id: "priority_pain", text: "Og'riq" }, { id: "priority_eating", text: "Qulay ovqatlanish" }, { id: "priority_recovery", text: "Operatsiyadan keyin tez tiklanish va oddiy hayotga qaytish" }], next: { priority_cost: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_pain: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_eating: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_recovery: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] } } },
              disease_heart: { question: "Davolanishda siz uchun eng muhim narsa nima?", options: [{ id: "priority_cost", text: "Narx" }, { id: "priority_pain", text: "Og'riq" }, { id: "priority_eating", text: "Qulay ovqatlanish" }, { id: "priority_recovery", text: "Operatsiyadan keyin tez tiklanish va oddiy hayotga qaytish" }], next: { priority_cost: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_pain: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_eating: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_recovery: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] } } },
              disease_none: { question: "Davolanishda siz uchun eng muhim narsa nima?", options: [{ id: "priority_cost", text: "Narx" }, { id: "priority_pain", text: "Og'riq" }, { id: "priority_eating", text: "Qulay ovqatlanish" }, { id: "priority_recovery", text: "Operatsiyadan keyin tez tiklanish va oddiy hayotga qaytish" }], next: { priority_cost: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_pain: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_eating: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_recovery: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] } } }
            }
          }
        }
      },
      implant_revision: {
        question: "Hozir protez taqyapsizmi?",
        options: [
          { id: "denture_yes", text: "Ha" },
          { id: "denture_no", text: "Yo'q" }
        ],
        next: {
          denture_yes: {
            question: "Sizda surunkali kasalliklar bormi?",
            options: [
              { id: "disease_diabetes", text: "Diabet" },
              { id: "disease_hypertension", text: "Yuqori qon bosimi" },
              { id: "disease_osteoporosis", text: "Osteoporoz" },
              { id: "disease_heart", text: "Yurak kasalliklari" },
              { id: "disease_none", text: "Yo'q" }
            ],
            next: {
              disease_diabetes: { question: "Davolanishda siz uchun eng muhim narsa nima?", options: [{ id: "priority_cost", text: "Narx" }, { id: "priority_pain", text: "Og'riq" }, { id: "priority_eating", text: "Qulay ovqatlanish" }, { id: "priority_recovery", text: "Operatsiyadan keyin tez tiklanish va oddiy hayotga qaytish" }], next: { priority_cost: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_pain: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_eating: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_recovery: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] } } },
              disease_hypertension: { question: "Davolanishda siz uchun eng muhim narsa nima?", options: [{ id: "priority_cost", text: "Narx" }, { id: "priority_pain", text: "Og'riq" }, { id: "priority_eating", text: "Qulay ovqatlanish" }, { id: "priority_recovery", text: "Operatsiyadan keyin tez tiklanish va oddiy hayotga qaytish" }], next: { priority_cost: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_pain: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_eating: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_recovery: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] } } },
              disease_osteoporosis: { question: "Davolanishda siz uchun eng muhim narsa nima?", options: [{ id: "priority_cost", text: "Narx" }, { id: "priority_pain", text: "Og'riq" }, { id: "priority_eating", text: "Qulay ovqatlanish" }, { id: "priority_recovery", text: "Operatsiyadan keyin tez tiklanish va oddiy hayotga qaytish" }], next: { priority_cost: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_pain: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_eating: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_recovery: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] } } },
              disease_heart: { question: "Davolanishda siz uchun eng muhim narsa nima?", options: [{ id: "priority_cost", text: "Narx" }, { id: "priority_pain", text: "Og'riq" }, { id: "priority_eating", text: "Qulay ovqatlanish" }, { id: "priority_recovery", text: "Operatsiyadan keyin tez tiklanish va oddiy hayotga qaytish" }], next: { priority_cost: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_pain: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_eating: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_recovery: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] } } },
              disease_none: { question: "Davolanishda siz uchun eng muhim narsa nima?", options: [{ id: "priority_cost", text: "Narx" }, { id: "priority_pain", text: "Og'riq" }, { id: "priority_eating", text: "Qulay ovqatlanish" }, { id: "priority_recovery", text: "Operatsiyadan keyin tez tiklanish va oddiy hayotga qaytish" }], next: { priority_cost: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_pain: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_eating: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_recovery: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] } } }
            }
          },
          denture_no: {
            question: "Sizda surunkali kasalliklar bormi?",
            options: [
              { id: "disease_diabetes", text: "Diabet" },
              { id: "disease_hypertension", text: "Yuqori qon bosimi" },
              { id: "disease_osteoporosis", text: "Osteoporoz" },
              { id: "disease_heart", text: "Yurak kasalliklari" },
              { id: "disease_none", text: "Yo'q" }
            ],
            next: {
              disease_diabetes: { question: "Davolanishda siz uchun eng muhim narsa nima?", options: [{ id: "priority_cost", text: "Narx" }, { id: "priority_pain", text: "Og'riq" }, { id: "priority_eating", text: "Qulay ovqatlanish" }, { id: "priority_recovery", text: "Operatsiyadan keyin tez tiklanish va oddiy hayotga qaytish" }], next: { priority_cost: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_pain: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_eating: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_recovery: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] } } },
              disease_hypertension: { question: "Davolanishda siz uchun eng muhim narsa nima?", options: [{ id: "priority_cost", text: "Narx" }, { id: "priority_pain", text: "Og'riq" }, { id: "priority_eating", text: "Qulay ovqatlanish" }, { id: "priority_recovery", text: "Operatsiyadan keyin tez tiklanish va oddiy hayotga qaytish" }], next: { priority_cost: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_pain: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_eating: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_recovery: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] } } },
              disease_osteoporosis: { question: "Davolanishda siz uchun eng muhim narsa nima?", options: [{ id: "priority_cost", text: "Narx" }, { id: "priority_pain", text: "Og'riq" }, { id: "priority_eating", text: "Qulay ovqatlanish" }, { id: "priority_recovery", text: "Operatsiyadan keyin tez tiklanish va oddiy hayotga qaytish" }], next: { priority_cost: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_pain: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_eating: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_recovery: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] } } },
              disease_heart: { question: "Davolanishda siz uchun eng muhim narsa nima?", options: [{ id: "priority_cost", text: "Narx" }, { id: "priority_pain", text: "Og'riq" }, { id: "priority_eating", text: "Qulay ovqatlanish" }, { id: "priority_recovery", text: "Operatsiyadan keyin tez tiklanish va oddiy hayotga qaytish" }], next: { priority_cost: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_pain: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_eating: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_recovery: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] } } },
              disease_none: { question: "Davolanishda siz uchun eng muhim narsa nima?", options: [{ id: "priority_cost", text: "Narx" }, { id: "priority_pain", text: "Og'riq" }, { id: "priority_eating", text: "Qulay ovqatlanish" }, { id: "priority_recovery", text: "Operatsiyadan keyin tez tiklanish va oddiy hayotga qaytish" }], next: { priority_cost: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_pain: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_eating: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] }, priority_recovery: { question: "Davolanishni kechiktirishingiz uchun sabab bormi?", options: [{ id: "hesitation_cost", text: "Narx tufayli" }, { id: "hesitation_fear", text: "Og'riq/tish shifokori qo'rquvi tufayli" }, { id: "hesitation_clinic", text: "Mos stomatologiyani tanlash qiyin bo'lgani uchun" }, { id: "hesitation_none", text: "Maxsus sabab yo'q" }] } } }
            }
          }
        }
      }
    }
  },

  // Milklar haqida savollar
  gum_issue: {
    question: "Sizda qanday alomatlar bor?",
    options: [
      { id: "gum_bleeding", text: "Milkdan qon oqmoqda" },
      { id: "gum_swelling", text: "Milk shishgan" },
      { id: "gum_recession", text: "Milk cho'kkan" },
      { id: "gum_wobbly", text: "Tish qimirlamoqda" }
    ],
    next: {
      gum_bleeding: {
        question: "Qon qachon oqadi?",
        options: [
          { id: "bleeding_brushing", text: "Faqat tish tozalashda" },
          { id: "bleeding_often", text: "Tez-tez qon oqadi" },
          { id: "bleeding_always", text: "Tinch turganda ham qon oqadi" }
        ]
      },
      gum_swelling: {
        question: "Shish bilan birga og'riq ham bormi?",
        options: [
          { id: "swelling_pain_yes", text: "Ha, og'riyapti" },
          { id: "swelling_pain_no", text: "Yo'q, faqat shish bor" }
        ]
      },
      gum_recession: {
        question: "Tishlar sezgirmi?",
        options: [
          { id: "recession_sensitive_yes", text: "Ha, sezgir" },
          { id: "recession_sensitive_no", text: "Yo'q" }
        ]
      },
      gum_wobbly: {
        question: "Tish qancha qimirlamoqda?",
        options: [
          { id: "wobbly_slight", text: "Biroz qimirlamoqda" },
          { id: "wobbly_severe", text: "Juda qimirlamoqda" }
        ]
      }
    }
  },

  // Muntazam tekshiruv haqida
  checkup: {
    question: "Alohida tashvishlantiradigan narsa bormi?",
    options: [
      { id: "checkup_prevention", text: "Kariyes/milk kasalligi profilaktikasi" },
      { id: "checkup_cleaning", text: "Tish tozalashni xohlayman" },
      { id: "checkup_concern", text: "Aniq bir tish haqida xavotirdaman" },
      { id: "checkup_general", text: "Faqat umumiy tekshiruv" }
    ]
  }
};
