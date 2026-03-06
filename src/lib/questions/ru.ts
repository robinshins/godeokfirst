import { LanguageQuestionTree } from './types';
export const QUESTION_TREE_RU: LanguageQuestionTree = {
  // Шаг 1: Определение начальных симптомов
  initial: {
    question: "Какие симптомы или дискомфорт у вас есть?",
    options: [
      { id: "pain", text: "У меня боль" },
      { id: "aesthetic", text: "Хочу улучшить эстетику" },
      { id: "missing_tooth", text: "У меня выпал зуб" },
      { id: "gum_issue", text: "У меня проблемы с дёснами" },
      { id: "checkup", text: "Регулярный осмотр и профилактика" }
    ]
  },

  // Вопросы о кариесе/лечении нервов (первый вопрос)
  cavity_nerve: {
    question: "Какая у вас сейчас проблема?",
    options: [
      { id: "cavity_pain", text: "У меня болит зуб" },
      { id: "cavity_sensitive", text: "Зуб чувствителен" },
      { id: "cavity_broken", text: "Зуб сломан" },
      { id: "cavity_eating", text: "Дискомфорт во время еды" },
      { id: "cavity_dark", text: "Зуб выглядит чёрным" },
      { id: "cavity_brushing", text: "Дискомфорт при чистке зубов" }
    ],
    next: {
      cavity_pain: {
        question: "Вас беспокоит один конкретный зуб или большая область?",
        options: [
          { id: "specific_tooth", text: "Беспокоит один конкретный зуб" },
          { id: "wide_area", text: "Беспокоит большая область слева/справа вверху/внизу" }
        ]
      },
      cavity_sensitive: {
        question: "Вас беспокоит один конкретный зуб или большая область?",
        options: [
          { id: "specific_tooth", text: "Беспокоит один конкретный зуб" },
          { id: "wide_area", text: "Беспокоит большая область слева/справа вверху/внизу" }
        ]
      },
      cavity_broken: {
        question: "Болит ли сломанный зуб?",
        options: [
          { id: "broken_painful", text: "Да, сломан и болит" },
          { id: "broken_not_painful", text: "Сломан, но не болит" }
        ]
      },
      cavity_eating: {
        question: "Вас беспокоит один конкретный зуб или большая область?",
        options: [
          { id: "specific_tooth", text: "Беспокоит один конкретный зуб" },
          { id: "wide_area", text: "Беспокоит большая область слева/справа вверху/внизу" }
        ]
      },
      cavity_dark: {
        question: "Где находится потемневший зуб?",
        options: [
          { id: "dark_front", text: "В области передних зубов" },
          { id: "dark_back", text: "В области коренных зубов" },
          { id: "dark_multiple", text: "В нескольких местах видны тёмные пятна" }
        ]
      },
      cavity_brushing: {
        question: "Вас беспокоит один конкретный зуб или большая область?",
        options: [
          { id: "specific_tooth", text: "Беспокоит один конкретный зуб" },
          { id: "wide_area", text: "Беспокоит большая область слева/справа вверху/внизу" }
        ]
      }
    }
  },

  // Вопросы о боли (общие)
  pain: {
    question: "В каких ситуациях вы чувствуете боль?",
    options: [
      { id: "pain_cold_hot", text: "При контакте с холодным или горячим" },
      { id: "pain_chewing", text: "При жевании пищи" },
      { id: "pain_always", text: "Болит постоянно, даже в покое" },
      { id: "pain_wisdom", text: "Болит область зуба мудрости" }
    ],
    next: {
      pain_cold_hot: {
        question: "Как долго длится боль?",
        options: [
          { id: "pain_short", text: "Ненадолго чувствительность и проходит" },
          { id: "pain_long", text: "Долго сохраняется чувствительность" },
          { id: "pain_getting_worse", text: "Становится всё хуже" }
        ]
      },
      pain_chewing: {
        question: "Какая область болит?",
        options: [
          { id: "pain_front", text: "В области передних зубов" },
          { id: "pain_back", text: "В области коренных зубов" },
          { id: "pain_multiple", text: "Болит в нескольких местах" }
        ]
      },
      pain_always: {
        question: "Есть ли отёк или гной?",
        options: [
          { id: "pain_swelling_yes", text: "Да, есть отёк или гной" },
          { id: "pain_swelling_no", text: "Нет, только боль" }
        ]
      },
      pain_wisdom: {
        question: "Когда началась боль от зуба мудрости?",
        options: [
          { id: "wisdom_recent", text: "За последние несколько дней" },
          { id: "wisdom_recurring", text: "Часто повторяется" },
          { id: "wisdom_swelling", text: "Сильно опухла десна" }
        ]
      }
    }
  },

  // Вопросы о зубах мудрости (для консультации)
  wisdom_tooth: {
    question: "Каково сейчас состояние зуба мудрости?",
    options: [
      { id: "wisdom_pain", text: "Болит область зуба мудрости" },
      { id: "wisdom_checkup", text: "Не болит, но хочу проверить" }
    ],
    next: {
      // При выборе "больно" → вопрос о месте
      wisdom_pain: {
        question: "Какой зуб сейчас болит?",
        options: [
          { id: "wisdom_upper", text: "Верхний зуб мудрости" },
          { id: "wisdom_lower", text: "Нижний зуб мудрости" }
        ],
        next: {
          // После выбора верхнего зуба мудрости → с каких пор неудобства
          wisdom_upper: {
            question: "Когда начался дискомфорт от зуба мудрости?",
            options: [
              { id: "wisdom_first_time", text: "Впервые" },
              { id: "wisdom_recurring", text: "Раньше было похожее, прошло, и снова появилось" }
            ],
            next: {
              wisdom_first_time: {
                question: "Что вас больше всего беспокоит в лечении зуба мудрости?",
                options: [
                  { id: "worry_possible", text: "Возможность удаления" },
                  { id: "worry_fear", text: "Страх перед удалением" },
                  { id: "worry_daily", text: "Неудобства в повседневной жизни после удаления" }
                ],
                next: {
                  worry_possible: {
                    question: "У вас были операции на сердечно-сосудистой системе или есть хронические заболевания?",
                    options: [
                      { id: "disease_medication", text: "Я принимаю лекарства ежедневно (возьмите с собой упаковку)" },
                      { id: "disease_heart", text: "Была операция на сердце или сосудах" },
                      { id: "disease_bp_diabetes", text: "Гипертония/Диабет" },
                      { id: "disease_osteoporosis", text: "Остеопороз" },
                      { id: "disease_other", text: "Другие системные заболевания" },
                      { id: "disease_none", text: "Нет" }
                    ]
                  },
                  worry_fear: {
                    question: "У вас были операции на сердечно-сосудистой системе или есть хронические заболевания?",
                    options: [
                      { id: "disease_medication", text: "Я принимаю лекарства ежедневно (возьмите с собой упаковку)" },
                      { id: "disease_heart", text: "Была операция на сердце или сосудах" },
                      { id: "disease_bp_diabetes", text: "Гипертония/Диабет" },
                      { id: "disease_osteoporosis", text: "Остеопороз" },
                      { id: "disease_other", text: "Другие системные заболевания" },
                      { id: "disease_none", text: "Нет" }
                    ]
                  },
                  worry_daily: {
                    question: "У вас были операции на сердечно-сосудистой системе или есть хронические заболевания?",
                    options: [
                      { id: "disease_medication", text: "Я принимаю лекарства ежедневно (возьмите с собой упаковку)" },
                      { id: "disease_heart", text: "Была операция на сердце или сосудах" },
                      { id: "disease_bp_diabetes", text: "Гипертония/Диабет" },
                      { id: "disease_osteoporosis", text: "Остеопороз" },
                      { id: "disease_other", text: "Другие системные заболевания" },
                      { id: "disease_none", text: "Нет" }
                    ]
                  }
                }
              },
              wisdom_recurring: {
                question: "Что вас больше всего беспокоит в лечении зуба мудрости?",
                options: [
                  { id: "worry_possible", text: "Возможность удаления" },
                  { id: "worry_fear", text: "Страх перед удалением" },
                  { id: "worry_daily", text: "Неудобства в повседневной жизни после удаления" }
                ],
                next: {
                  worry_possible: {
                    question: "У вас были операции на сердечно-сосудистой системе или есть хронические заболевания?",
                    options: [
                      { id: "disease_medication", text: "Я принимаю лекарства ежедневно (возьмите с собой упаковку)" },
                      { id: "disease_heart", text: "Была операция на сердце или сосудах" },
                      { id: "disease_bp_diabetes", text: "Гипертония/Диабет" },
                      { id: "disease_osteoporosis", text: "Остеопороз" },
                      { id: "disease_other", text: "Другие системные заболевания" },
                      { id: "disease_none", text: "Нет" }
                    ]
                  },
                  worry_fear: {
                    question: "У вас были операции на сердечно-сосудистой системе или есть хронические заболевания?",
                    options: [
                      { id: "disease_medication", text: "Я принимаю лекарства ежедневно (возьмите с собой упаковку)" },
                      { id: "disease_heart", text: "Была операция на сердце или сосудах" },
                      { id: "disease_bp_diabetes", text: "Гипертония/Диабет" },
                      { id: "disease_osteoporosis", text: "Остеопороз" },
                      { id: "disease_other", text: "Другие системные заболевания" },
                      { id: "disease_none", text: "Нет" }
                    ]
                  },
                  worry_daily: {
                    question: "У вас были операции на сердечно-сосудистой системе или есть хронические заболевания?",
                    options: [
                      { id: "disease_medication", text: "Я принимаю лекарства ежедневно (возьмите с собой упаковку)" },
                      { id: "disease_heart", text: "Была операция на сердце или сосудах" },
                      { id: "disease_bp_diabetes", text: "Гипертония/Диабет" },
                      { id: "disease_osteoporosis", text: "Остеопороз" },
                      { id: "disease_other", text: "Другие системные заболевания" },
                      { id: "disease_none", text: "Нет" }
                    ]
                  }
                }
              }
            }
          },
          // После выбора нижнего зуба мудрости → с каких пор неудобства
          wisdom_lower: {
            question: "Когда начался дискомфорт от зуба мудрости?",
            options: [
              { id: "wisdom_first_time", text: "Впервые" },
              { id: "wisdom_recurring", text: "Раньше было похожее, прошло, и снова появилось" }
            ],
            next: {
              wisdom_first_time: {
                question: "Что вас больше всего беспокоит в лечении зуба мудрости?",
                options: [
                  { id: "worry_possible", text: "Возможность удаления" },
                  { id: "worry_fear", text: "Страх перед удалением" },
                  { id: "worry_daily", text: "Неудобства в повседневной жизни после удаления" }
                ],
                next: {
                  worry_possible: {
                    question: "У вас были операции на сердечно-сосудистой системе или есть хронические заболевания?",
                    options: [
                      { id: "disease_medication", text: "Я принимаю лекарства ежедневно (возьмите с собой упаковку)" },
                      { id: "disease_heart", text: "Была операция на сердце или сосудах" },
                      { id: "disease_bp_diabetes", text: "Гипертония/Диабет" },
                      { id: "disease_osteoporosis", text: "Остеопороз" },
                      { id: "disease_other", text: "Другие системные заболевания" },
                      { id: "disease_none", text: "Нет" }
                    ]
                  },
                  worry_fear: {
                    question: "У вас были операции на сердечно-сосудистой системе или есть хронические заболевания?",
                    options: [
                      { id: "disease_medication", text: "Я принимаю лекарства ежедневно (возьмите с собой упаковку)" },
                      { id: "disease_heart", text: "Была операция на сердце или сосудах" },
                      { id: "disease_bp_diabetes", text: "Гипертония/Диабет" },
                      { id: "disease_osteoporosis", text: "Остеопороз" },
                      { id: "disease_other", text: "Другие системные заболевания" },
                      { id: "disease_none", text: "Нет" }
                    ]
                  },
                  worry_daily: {
                    question: "У вас были операции на сердечно-сосудистой системе или есть хронические заболевания?",
                    options: [
                      { id: "disease_medication", text: "Я принимаю лекарства ежедневно (возьмите с собой упаковку)" },
                      { id: "disease_heart", text: "Была операция на сердце или сосудах" },
                      { id: "disease_bp_diabetes", text: "Гипертония/Диабет" },
                      { id: "disease_osteoporosis", text: "Остеопороз" },
                      { id: "disease_other", text: "Другие системные заболевания" },
                      { id: "disease_none", text: "Нет" }
                    ]
                  }
                }
              },
              wisdom_recurring: {
                question: "Что вас больше всего беспокоит в лечении зуба мудрости?",
                options: [
                  { id: "worry_possible", text: "Возможность удаления" },
                  { id: "worry_fear", text: "Страх перед удалением" },
                  { id: "worry_daily", text: "Неудобства в повседневной жизни после удаления" }
                ],
                next: {
                  worry_possible: {
                    question: "У вас были операции на сердечно-сосудистой системе или есть хронические заболевания?",
                    options: [
                      { id: "disease_medication", text: "Я принимаю лекарства ежедневно (возьмите с собой упаковку)" },
                      { id: "disease_heart", text: "Была операция на сердце или сосудах" },
                      { id: "disease_bp_diabetes", text: "Гипертония/Диабет" },
                      { id: "disease_osteoporosis", text: "Остеопороз" },
                      { id: "disease_other", text: "Другие системные заболевания" },
                      { id: "disease_none", text: "Нет" }
                    ]
                  },
                  worry_fear: {
                    question: "У вас были операции на сердечно-сосудистой системе или есть хронические заболевания?",
                    options: [
                      { id: "disease_medication", text: "Я принимаю лекарства ежедневно (возьмите с собой упаковку)" },
                      { id: "disease_heart", text: "Была операция на сердце или сосудах" },
                      { id: "disease_bp_diabetes", text: "Гипертония/Диабет" },
                      { id: "disease_osteoporosis", text: "Остеопороз" },
                      { id: "disease_other", text: "Другие системные заболевания" },
                      { id: "disease_none", text: "Нет" }
                    ]
                  },
                  worry_daily: {
                    question: "У вас были операции на сердечно-сосудистой системе или есть хронические заболевания?",
                    options: [
                      { id: "disease_medication", text: "Я принимаю лекарства ежедневно (возьмите с собой упаковку)" },
                      { id: "disease_heart", text: "Была операция на сердце или сосудах" },
                      { id: "disease_bp_diabetes", text: "Гипертония/Диабет" },
                      { id: "disease_osteoporosis", text: "Остеопороз" },
                      { id: "disease_other", text: "Другие системные заболевания" },
                      { id: "disease_none", text: "Нет" }
                    ]
                  }
                }
              }
            }
          }
        }
      },
      // Если не больно, но хотите проверить → вопрос о причине сомнений → итоговая рекомендация
      wisdom_checkup: {
        question: "Что вас больше всего беспокоит при лечении зуба мудрости?",
        options: [
          { id: "checkup_worry_possible", text: "Возможность удаления" },
          { id: "checkup_worry_fear", text: "Страх перед удалением" },
          { id: "checkup_worry_daily", text: "Неудобства в повседневной жизни после удаления" }
        ],
        next: {
          checkup_worry_possible: {
            question: "У вас были операции на сердечно-сосудистой системе или есть хронические заболевания?",
            options: [
              { id: "disease_medication", text: "Я принимаю лекарства ежедневно (возьмите с собой упаковку)" },
              { id: "disease_heart", text: "Была операция на сердце или сосудах" },
              { id: "disease_bp_diabetes", text: "Гипертония/Диабет" },
              { id: "disease_osteoporosis", text: "Остеопороз" },
              { id: "disease_other", text: "Другие системные заболевания" },
              { id: "disease_none", text: "Нет" }
            ],
            next: {
              disease_medication: {
                question: "Хотите ли вы также проверить что-то ещё?",
                options: [
                  { id: "extra_cavity", text: "Проверка кариеса" },
                  { id: "extra_gum", text: "Проверка дёсен" },
                  { id: "extra_scaling", text: "Чистка зубов" },
                  { id: "extra_none", text: "Нет, только зуб мудрости" }
                ]
              },
              disease_heart: {
                question: "Хотите ли вы также проверить что-то ещё?",
                options: [
                  { id: "extra_cavity", text: "Проверка кариеса" },
                  { id: "extra_gum", text: "Проверка дёсен" },
                  { id: "extra_scaling", text: "Чистка зубов" },
                  { id: "extra_none", text: "Нет, только зуб мудрости" }
                ]
              },
              disease_bp_diabetes: {
                question: "Хотите ли вы также проверить что-то ещё?",
                options: [
                  { id: "extra_cavity", text: "Проверка кариеса" },
                  { id: "extra_gum", text: "Проверка дёсен" },
                  { id: "extra_scaling", text: "Чистка зубов" },
                  { id: "extra_none", text: "Нет, только зуб мудрости" }
                ]
              },
              disease_osteoporosis: {
                question: "Хотите ли вы также проверить что-то ещё?",
                options: [
                  { id: "extra_cavity", text: "Проверка кариеса" },
                  { id: "extra_gum", text: "Проверка дёсен" },
                  { id: "extra_scaling", text: "Чистка зубов" },
                  { id: "extra_none", text: "Нет, только зуб мудрости" }
                ]
              },
              disease_other: {
                question: "Хотите ли вы также проверить что-то ещё?",
                options: [
                  { id: "extra_cavity", text: "Проверка кариеса" },
                  { id: "extra_gum", text: "Проверка дёсен" },
                  { id: "extra_scaling", text: "Чистка зубов" },
                  { id: "extra_none", text: "Нет, только зуб мудрости" }
                ]
              },
              disease_none: {
                question: "Хотите ли вы также проверить что-то ещё?",
                options: [
                  { id: "extra_cavity", text: "Проверка кариеса" },
                  { id: "extra_gum", text: "Проверка дёсен" },
                  { id: "extra_scaling", text: "Чистка зубов" },
                  { id: "extra_none", text: "Нет, только зуб мудрости" }
                ]
              }
            }
          },
          checkup_worry_fear: {
            question: "У вас были операции на сердечно-сосудистой системе или есть хронические заболевания?",
            options: [
              { id: "disease_medication", text: "Я принимаю лекарства ежедневно (возьмите с собой упаковку)" },
              { id: "disease_heart", text: "Была операция на сердце или сосудах" },
              { id: "disease_bp_diabetes", text: "Гипертония/Диабет" },
              { id: "disease_osteoporosis", text: "Остеопороз" },
              { id: "disease_other", text: "Другие системные заболевания" },
              { id: "disease_none", text: "Нет" }
            ],
            next: {
              disease_medication: {
                question: "Хотите ли вы также проверить что-то ещё?",
                options: [
                  { id: "extra_cavity", text: "Проверка кариеса" },
                  { id: "extra_gum", text: "Проверка дёсен" },
                  { id: "extra_scaling", text: "Чистка зубов" },
                  { id: "extra_none", text: "Нет, только зуб мудрости" }
                ]
              },
              disease_heart: {
                question: "Хотите ли вы также проверить что-то ещё?",
                options: [
                  { id: "extra_cavity", text: "Проверка кариеса" },
                  { id: "extra_gum", text: "Проверка дёсен" },
                  { id: "extra_scaling", text: "Чистка зубов" },
                  { id: "extra_none", text: "Нет, только зуб мудрости" }
                ]
              },
              disease_bp_diabetes: {
                question: "Хотите ли вы также проверить что-то ещё?",
                options: [
                  { id: "extra_cavity", text: "Проверка кариеса" },
                  { id: "extra_gum", text: "Проверка дёсен" },
                  { id: "extra_scaling", text: "Чистка зубов" },
                  { id: "extra_none", text: "Нет, только зуб мудрости" }
                ]
              },
              disease_osteoporosis: {
                question: "Хотите ли вы также проверить что-то ещё?",
                options: [
                  { id: "extra_cavity", text: "Проверка кариеса" },
                  { id: "extra_gum", text: "Проверка дёсен" },
                  { id: "extra_scaling", text: "Чистка зубов" },
                  { id: "extra_none", text: "Нет, только зуб мудрости" }
                ]
              },
              disease_other: {
                question: "Хотите ли вы также проверить что-то ещё?",
                options: [
                  { id: "extra_cavity", text: "Проверка кариеса" },
                  { id: "extra_gum", text: "Проверка дёсен" },
                  { id: "extra_scaling", text: "Чистка зубов" },
                  { id: "extra_none", text: "Нет, только зуб мудрости" }
                ]
              },
              disease_none: {
                question: "Хотите ли вы также проверить что-то ещё?",
                options: [
                  { id: "extra_cavity", text: "Проверка кариеса" },
                  { id: "extra_gum", text: "Проверка дёсен" },
                  { id: "extra_scaling", text: "Чистка зубов" },
                  { id: "extra_none", text: "Нет, только зуб мудрости" }
                ]
              }
            }
          },
          checkup_worry_daily: {
            question: "У вас были операции на сердечно-сосудистой системе или есть хронические заболевания?",
            options: [
              { id: "disease_medication", text: "Я принимаю лекарства ежедневно (возьмите с собой упаковку)" },
              { id: "disease_heart", text: "Была операция на сердце или сосудах" },
              { id: "disease_bp_diabetes", text: "Гипертония/Диабет" },
              { id: "disease_osteoporosis", text: "Остеопороз" },
              { id: "disease_other", text: "Другие системные заболевания" },
              { id: "disease_none", text: "Нет" }
            ],
            next: {
              disease_medication: {
                question: "Хотите ли вы также проверить что-то ещё?",
                options: [
                  { id: "extra_cavity", text: "Проверка кариеса" },
                  { id: "extra_gum", text: "Проверка дёсен" },
                  { id: "extra_scaling", text: "Чистка зубов" },
                  { id: "extra_none", text: "Нет, только зуб мудрости" }
                ]
              },
              disease_heart: {
                question: "Хотите ли вы также проверить что-то ещё?",
                options: [
                  { id: "extra_cavity", text: "Проверка кариеса" },
                  { id: "extra_gum", text: "Проверка дёсен" },
                  { id: "extra_scaling", text: "Чистка зубов" },
                  { id: "extra_none", text: "Нет, только зуб мудрости" }
                ]
              },
              disease_bp_diabetes: {
                question: "Хотите ли вы также проверить что-то ещё?",
                options: [
                  { id: "extra_cavity", text: "Проверка кариеса" },
                  { id: "extra_gum", text: "Проверка дёсен" },
                  { id: "extra_scaling", text: "Чистка зубов" },
                  { id: "extra_none", text: "Нет, только зуб мудрости" }
                ]
              },
              disease_osteoporosis: {
                question: "Хотите ли вы также проверить что-то ещё?",
                options: [
                  { id: "extra_cavity", text: "Проверка кариеса" },
                  { id: "extra_gum", text: "Проверка дёсен" },
                  { id: "extra_scaling", text: "Чистка зубов" },
                  { id: "extra_none", text: "Нет, только зуб мудрости" }
                ]
              },
              disease_other: {
                question: "Хотите ли вы также проверить что-то ещё?",
                options: [
                  { id: "extra_cavity", text: "Проверка кариеса" },
                  { id: "extra_gum", text: "Проверка дёсен" },
                  { id: "extra_scaling", text: "Чистка зубов" },
                  { id: "extra_none", text: "Нет, только зуб мудрости" }
                ]
              },
              disease_none: {
                question: "Хотите ли вы также проверить что-то ещё?",
                options: [
                  { id: "extra_cavity", text: "Проверка кариеса" },
                  { id: "extra_gum", text: "Проверка дёсен" },
                  { id: "extra_scaling", text: "Чистка зубов" },
                  { id: "extra_none", text: "Нет, только зуб мудрости" }
                ]
              }
            }
          }
        }
      }
    }
  },

  // Вопросы об эстетике
  aesthetic: {
    question: "Что бы вы хотели улучшить?",
    options: [
      { id: "aesthetic_color", text: "Зубы пожелтели или изменили цвет" },
      { id: "aesthetic_shape", text: "Форма или размер зубов" },
      { id: "aesthetic_gap", text: "Промежутки между зубами" },
      { id: "aesthetic_alignment", text: "Неровное расположение зубов" }
    ],
    next: {
      aesthetic_color: {
        question: "Какова степень и причина изменения цвета?",
        options: [
          { id: "color_coffee", text: "Окрашивание от кофе/сигарет" },
          { id: "color_aging", text: "Общее изменение цвета из-за старения" },
          { id: "color_single", text: "Только определённый зуб потемнел" }
        ]
      },
      aesthetic_shape: {
        question: "Какая у вас проблема?",
        options: [
          { id: "shape_small", text: "Зубы маленькие" },
          { id: "shape_chipped", text: "Зуб сколот или стёрт" },
          { id: "shape_uneven", text: "Неравномерная длина зубов" }
        ]
      },
      aesthetic_gap: {
        question: "Где находятся промежутки?",
        options: [
          { id: "gap_front", text: "Между передними зубами" },
          { id: "gap_multiple", text: "Промежутки в нескольких местах" }
        ]
      },
      aesthetic_alignment: {
        question: "Какова степень проблемы с выравниванием?",
        options: [
          { id: "alignment_mild", text: "Слегка неровные" },
          { id: "alignment_moderate", text: "Умеренная скученность" },
          { id: "alignment_severe", text: "Сильно неровные" }
        ]
      }
    }
  },

  // Вопросы о потере зубов (для консультации по имплантам) - Q1: Текущее состояние
  missing_tooth: {
    question: "Каково текущее состояние ваших зубов?",
    options: [
      { id: "missing_upper_all", text: "Все верхние зубы отсутствуют или подлежат удалению" },
      { id: "missing_lower_all", text: "Все нижние зубы отсутствуют или подлежат удалению" },
      { id: "missing_all", text: "Почти все зубы отсутствуют или подлежат удалению" },
      { id: "missing_partial", text: "Отсутствуют несколько зубов (до 10) или подлежат удалению" },
      { id: "implant_revision", text: "Нужна повторная операция на импланте" }
    ],
    next: {
      // Q2: Наличие протеза (общее для всех вариантов)
      missing_upper_all: {
        question: "Вы сейчас носите протез?",
        options: [
          { id: "denture_yes", text: "Да" },
          { id: "denture_no", text: "Нет" }
        ],
        next: {
          // Q3: Проверка системных заболеваний
          denture_yes: {
            question: "У вас есть какие-либо системные заболевания?",
            options: [
              { id: "disease_diabetes", text: "Диабет" },
              { id: "disease_hypertension", text: "Гипертония" },
              { id: "disease_osteoporosis", text: "Остеопороз" },
              { id: "disease_heart", text: "Сердечные заболевания" },
              { id: "disease_none", text: "Нет" }
            ],
            next: {
              // Q4: Важное в лечении (роль Q5)
              disease_diabetes: {
                question: "Что для вас самое важное в лечении?",
                options: [
                  { id: "priority_cost", text: "Стоимость" },
                  { id: "priority_pain", text: "Боль" },
                  { id: "priority_eating", text: "Комфортный приём пищи" },
                  { id: "priority_recovery", text: "Быстрое восстановление и возврат к обычной жизни после операции" }
                ],
                next: {
                  // Q5: Причина сомнений (роль Q6)
                  priority_cost: {
                    question: "Есть ли причина, по которой вы откладывали лечение?",
                    options: [
                      { id: "hesitation_cost", text: "Из-за стоимости" },
                      { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" },
                      { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" },
                      { id: "hesitation_none", text: "Нет особой причины" }
                    ]
                  },
                  priority_pain: {
                    question: "Есть ли причина, по которой вы откладывали лечение?",
                    options: [
                      { id: "hesitation_cost", text: "Из-за стоимости" },
                      { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" },
                      { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" },
                      { id: "hesitation_none", text: "Нет особой причины" }
                    ]
                  },
                  priority_eating: {
                    question: "Есть ли причина, по которой вы откладывали лечение?",
                    options: [
                      { id: "hesitation_cost", text: "Из-за стоимости" },
                      { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" },
                      { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" },
                      { id: "hesitation_none", text: "Нет особой причины" }
                    ]
                  },
                  priority_recovery: {
                    question: "Есть ли причина, по которой вы откладывали лечение?",
                    options: [
                      { id: "hesitation_cost", text: "Из-за стоимости" },
                      { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" },
                      { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" },
                      { id: "hesitation_none", text: "Нет особой причины" }
                    ]
                  }
                }
              },
              disease_hypertension: {
                question: "Что для вас самое важное в лечении?",
                options: [
                  { id: "priority_cost", text: "Стоимость" },
                  { id: "priority_pain", text: "Боль" },
                  { id: "priority_eating", text: "Комфортный приём пищи" },
                  { id: "priority_recovery", text: "Быстрое восстановление и возврат к обычной жизни после операции" }
                ],
                next: {
                  priority_cost: {
                    question: "Есть ли причина, по которой вы откладывали лечение?",
                    options: [
                      { id: "hesitation_cost", text: "Из-за стоимости" },
                      { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" },
                      { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" },
                      { id: "hesitation_none", text: "Нет особой причины" }
                    ]
                  },
                  priority_pain: {
                    question: "Есть ли причина, по которой вы откладывали лечение?",
                    options: [
                      { id: "hesitation_cost", text: "Из-за стоимости" },
                      { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" },
                      { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" },
                      { id: "hesitation_none", text: "Нет особой причины" }
                    ]
                  },
                  priority_eating: {
                    question: "Есть ли причина, по которой вы откладывали лечение?",
                    options: [
                      { id: "hesitation_cost", text: "Из-за стоимости" },
                      { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" },
                      { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" },
                      { id: "hesitation_none", text: "Нет особой причины" }
                    ]
                  },
                  priority_recovery: {
                    question: "Есть ли причина, по которой вы откладывали лечение?",
                    options: [
                      { id: "hesitation_cost", text: "Из-за стоимости" },
                      { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" },
                      { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" },
                      { id: "hesitation_none", text: "Нет особой причины" }
                    ]
                  }
                }
              },
              disease_osteoporosis: {
                question: "Что для вас самое важное в лечении?",
                options: [
                  { id: "priority_cost", text: "Стоимость" },
                  { id: "priority_pain", text: "Боль" },
                  { id: "priority_eating", text: "Комфортный приём пищи" },
                  { id: "priority_recovery", text: "Быстрое восстановление и возврат к обычной жизни после операции" }
                ],
                next: {
                  priority_cost: {
                    question: "Есть ли причина, по которой вы откладывали лечение?",
                    options: [
                      { id: "hesitation_cost", text: "Из-за стоимости" },
                      { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" },
                      { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" },
                      { id: "hesitation_none", text: "Нет особой причины" }
                    ]
                  },
                  priority_pain: {
                    question: "Есть ли причина, по которой вы откладывали лечение?",
                    options: [
                      { id: "hesitation_cost", text: "Из-за стоимости" },
                      { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" },
                      { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" },
                      { id: "hesitation_none", text: "Нет особой причины" }
                    ]
                  },
                  priority_eating: {
                    question: "Есть ли причина, по которой вы откладывали лечение?",
                    options: [
                      { id: "hesitation_cost", text: "Из-за стоимости" },
                      { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" },
                      { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" },
                      { id: "hesitation_none", text: "Нет особой причины" }
                    ]
                  },
                  priority_recovery: {
                    question: "Есть ли причина, по которой вы откладывали лечение?",
                    options: [
                      { id: "hesitation_cost", text: "Из-за стоимости" },
                      { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" },
                      { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" },
                      { id: "hesitation_none", text: "Нет особой причины" }
                    ]
                  }
                }
              },
              disease_heart: {
                question: "Что для вас самое важное в лечении?",
                options: [
                  { id: "priority_cost", text: "Стоимость" },
                  { id: "priority_pain", text: "Боль" },
                  { id: "priority_eating", text: "Комфортный приём пищи" },
                  { id: "priority_recovery", text: "Быстрое восстановление и возврат к обычной жизни после операции" }
                ],
                next: {
                  priority_cost: {
                    question: "Есть ли причина, по которой вы откладывали лечение?",
                    options: [
                      { id: "hesitation_cost", text: "Из-за стоимости" },
                      { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" },
                      { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" },
                      { id: "hesitation_none", text: "Нет особой причины" }
                    ]
                  },
                  priority_pain: {
                    question: "Есть ли причина, по которой вы откладывали лечение?",
                    options: [
                      { id: "hesitation_cost", text: "Из-за стоимости" },
                      { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" },
                      { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" },
                      { id: "hesitation_none", text: "Нет особой причины" }
                    ]
                  },
                  priority_eating: {
                    question: "Есть ли причина, по которой вы откладывали лечение?",
                    options: [
                      { id: "hesitation_cost", text: "Из-за стоимости" },
                      { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" },
                      { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" },
                      { id: "hesitation_none", text: "Нет особой причины" }
                    ]
                  },
                  priority_recovery: {
                    question: "Есть ли причина, по которой вы откладывали лечение?",
                    options: [
                      { id: "hesitation_cost", text: "Из-за стоимости" },
                      { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" },
                      { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" },
                      { id: "hesitation_none", text: "Нет особой причины" }
                    ]
                  }
                }
              },
              disease_none: {
                question: "Что для вас самое важное в лечении?",
                options: [
                  { id: "priority_cost", text: "Стоимость" },
                  { id: "priority_pain", text: "Боль" },
                  { id: "priority_eating", text: "Комфортный приём пищи" },
                  { id: "priority_recovery", text: "Быстрое восстановление и возврат к обычной жизни после операции" }
                ],
                next: {
                  priority_cost: {
                    question: "Есть ли причина, по которой вы откладывали лечение?",
                    options: [
                      { id: "hesitation_cost", text: "Из-за стоимости" },
                      { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" },
                      { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" },
                      { id: "hesitation_none", text: "Нет особой причины" }
                    ]
                  },
                  priority_pain: {
                    question: "Есть ли причина, по которой вы откладывали лечение?",
                    options: [
                      { id: "hesitation_cost", text: "Из-за стоимости" },
                      { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" },
                      { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" },
                      { id: "hesitation_none", text: "Нет особой причины" }
                    ]
                  },
                  priority_eating: {
                    question: "Есть ли причина, по которой вы откладывали лечение?",
                    options: [
                      { id: "hesitation_cost", text: "Из-за стоимости" },
                      { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" },
                      { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" },
                      { id: "hesitation_none", text: "Нет особой причины" }
                    ]
                  },
                  priority_recovery: {
                    question: "Есть ли причина, по которой вы откладывали лечение?",
                    options: [
                      { id: "hesitation_cost", text: "Из-за стоимости" },
                      { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" },
                      { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" },
                      { id: "hesitation_none", text: "Нет особой причины" }
                    ]
                  }
                }
              }
            }
          },
          denture_no: {
            question: "У вас есть какие-либо системные заболевания?",
            options: [
              { id: "disease_diabetes", text: "Диабет" },
              { id: "disease_hypertension", text: "Гипертония" },
              { id: "disease_osteoporosis", text: "Остеопороз" },
              { id: "disease_heart", text: "Сердечные заболевания" },
              { id: "disease_none", text: "Нет" }
            ],
            next: {
              disease_diabetes: {
                question: "Что для вас самое важное в лечении?",
                options: [
                  { id: "priority_cost", text: "Стоимость" },
                  { id: "priority_pain", text: "Боль" },
                  { id: "priority_eating", text: "Комфортный приём пищи" },
                  { id: "priority_recovery", text: "Быстрое восстановление и возврат к обычной жизни после операции" }
                ],
                next: {
                  priority_cost: {
                    question: "Есть ли причина, по которой вы откладывали лечение?",
                    options: [
                      { id: "hesitation_cost", text: "Из-за стоимости" },
                      { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" },
                      { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" },
                      { id: "hesitation_none", text: "Нет особой причины" }
                    ]
                  },
                  priority_pain: {
                    question: "Есть ли причина, по которой вы откладывали лечение?",
                    options: [
                      { id: "hesitation_cost", text: "Из-за стоимости" },
                      { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" },
                      { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" },
                      { id: "hesitation_none", text: "Нет особой причины" }
                    ]
                  },
                  priority_eating: {
                    question: "Есть ли причина, по которой вы откладывали лечение?",
                    options: [
                      { id: "hesitation_cost", text: "Из-за стоимости" },
                      { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" },
                      { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" },
                      { id: "hesitation_none", text: "Нет особой причины" }
                    ]
                  },
                  priority_recovery: {
                    question: "Есть ли причина, по которой вы откладывали лечение?",
                    options: [
                      { id: "hesitation_cost", text: "Из-за стоимости" },
                      { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" },
                      { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" },
                      { id: "hesitation_none", text: "Нет особой причины" }
                    ]
                  }
                }
              },
              disease_hypertension: {
                question: "Что для вас самое важное в лечении?",
                options: [
                  { id: "priority_cost", text: "Стоимость" },
                  { id: "priority_pain", text: "Боль" },
                  { id: "priority_eating", text: "Комфортный приём пищи" },
                  { id: "priority_recovery", text: "Быстрое восстановление и возврат к обычной жизни после операции" }
                ],
                next: {
                  priority_cost: {
                    question: "Есть ли причина, по которой вы откладывали лечение?",
                    options: [
                      { id: "hesitation_cost", text: "Из-за стоимости" },
                      { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" },
                      { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" },
                      { id: "hesitation_none", text: "Нет особой причины" }
                    ]
                  },
                  priority_pain: {
                    question: "Есть ли причина, по которой вы откладывали лечение?",
                    options: [
                      { id: "hesitation_cost", text: "Из-за стоимости" },
                      { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" },
                      { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" },
                      { id: "hesitation_none", text: "Нет особой причины" }
                    ]
                  },
                  priority_eating: {
                    question: "Есть ли причина, по которой вы откладывали лечение?",
                    options: [
                      { id: "hesitation_cost", text: "Из-за стоимости" },
                      { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" },
                      { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" },
                      { id: "hesitation_none", text: "Нет особой причины" }
                    ]
                  },
                  priority_recovery: {
                    question: "Есть ли причина, по которой вы откладывали лечение?",
                    options: [
                      { id: "hesitation_cost", text: "Из-за стоимости" },
                      { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" },
                      { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" },
                      { id: "hesitation_none", text: "Нет особой причины" }
                    ]
                  }
                }
              },
              disease_osteoporosis: {
                question: "Что для вас самое важное в лечении?",
                options: [
                  { id: "priority_cost", text: "Стоимость" },
                  { id: "priority_pain", text: "Боль" },
                  { id: "priority_eating", text: "Комфортный приём пищи" },
                  { id: "priority_recovery", text: "Быстрое восстановление и возврат к обычной жизни после операции" }
                ],
                next: {
                  priority_cost: {
                    question: "Есть ли причина, по которой вы откладывали лечение?",
                    options: [
                      { id: "hesitation_cost", text: "Из-за стоимости" },
                      { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" },
                      { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" },
                      { id: "hesitation_none", text: "Нет особой причины" }
                    ]
                  },
                  priority_pain: {
                    question: "Есть ли причина, по которой вы откладывали лечение?",
                    options: [
                      { id: "hesitation_cost", text: "Из-за стоимости" },
                      { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" },
                      { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" },
                      { id: "hesitation_none", text: "Нет особой причины" }
                    ]
                  },
                  priority_eating: {
                    question: "Есть ли причина, по которой вы откладывали лечение?",
                    options: [
                      { id: "hesitation_cost", text: "Из-за стоимости" },
                      { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" },
                      { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" },
                      { id: "hesitation_none", text: "Нет особой причины" }
                    ]
                  },
                  priority_recovery: {
                    question: "Есть ли причина, по которой вы откладывали лечение?",
                    options: [
                      { id: "hesitation_cost", text: "Из-за стоимости" },
                      { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" },
                      { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" },
                      { id: "hesitation_none", text: "Нет особой причины" }
                    ]
                  }
                }
              },
              disease_heart: {
                question: "Что для вас самое важное в лечении?",
                options: [
                  { id: "priority_cost", text: "Стоимость" },
                  { id: "priority_pain", text: "Боль" },
                  { id: "priority_eating", text: "Комфортный приём пищи" },
                  { id: "priority_recovery", text: "Быстрое восстановление и возврат к обычной жизни после операции" }
                ],
                next: {
                  priority_cost: {
                    question: "Есть ли причина, по которой вы откладывали лечение?",
                    options: [
                      { id: "hesitation_cost", text: "Из-за стоимости" },
                      { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" },
                      { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" },
                      { id: "hesitation_none", text: "Нет особой причины" }
                    ]
                  },
                  priority_pain: {
                    question: "Есть ли причина, по которой вы откладывали лечение?",
                    options: [
                      { id: "hesitation_cost", text: "Из-за стоимости" },
                      { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" },
                      { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" },
                      { id: "hesitation_none", text: "Нет особой причины" }
                    ]
                  },
                  priority_eating: {
                    question: "Есть ли причина, по которой вы откладывали лечение?",
                    options: [
                      { id: "hesitation_cost", text: "Из-за стоимости" },
                      { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" },
                      { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" },
                      { id: "hesitation_none", text: "Нет особой причины" }
                    ]
                  },
                  priority_recovery: {
                    question: "Есть ли причина, по которой вы откладывали лечение?",
                    options: [
                      { id: "hesitation_cost", text: "Из-за стоимости" },
                      { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" },
                      { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" },
                      { id: "hesitation_none", text: "Нет особой причины" }
                    ]
                  }
                }
              },
              disease_none: {
                question: "Что для вас самое важное в лечении?",
                options: [
                  { id: "priority_cost", text: "Стоимость" },
                  { id: "priority_pain", text: "Боль" },
                  { id: "priority_eating", text: "Комфортный приём пищи" },
                  { id: "priority_recovery", text: "Быстрое восстановление и возврат к обычной жизни после операции" }
                ],
                next: {
                  priority_cost: {
                    question: "Есть ли причина, по которой вы откладывали лечение?",
                    options: [
                      { id: "hesitation_cost", text: "Из-за стоимости" },
                      { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" },
                      { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" },
                      { id: "hesitation_none", text: "Нет особой причины" }
                    ]
                  },
                  priority_pain: {
                    question: "Есть ли причина, по которой вы откладывали лечение?",
                    options: [
                      { id: "hesitation_cost", text: "Из-за стоимости" },
                      { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" },
                      { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" },
                      { id: "hesitation_none", text: "Нет особой причины" }
                    ]
                  },
                  priority_eating: {
                    question: "Есть ли причина, по которой вы откладывали лечение?",
                    options: [
                      { id: "hesitation_cost", text: "Из-за стоимости" },
                      { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" },
                      { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" },
                      { id: "hesitation_none", text: "Нет особой причины" }
                    ]
                  },
                  priority_recovery: {
                    question: "Есть ли причина, по которой вы откладывали лечение?",
                    options: [
                      { id: "hesitation_cost", text: "Из-за стоимости" },
                      { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" },
                      { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" },
                      { id: "hesitation_none", text: "Нет особой причины" }
                    ]
                  }
                }
              }
            }
          }
        }
      },
      // Тот же поток применяется к другим вариантам (та же структура, что и missing_upper_all)
      missing_all: {
        question: "Вы сейчас носите протез?",
        options: [
          { id: "denture_yes", text: "Да" },
          { id: "denture_no", text: "Нет" }
        ],
        next: {
          denture_yes: {
            question: "У вас есть какие-либо системные заболевания?",
            options: [
              { id: "disease_diabetes", text: "Диабет" },
              { id: "disease_hypertension", text: "Гипертония" },
              { id: "disease_osteoporosis", text: "Остеопороз" },
              { id: "disease_heart", text: "Сердечные заболевания" },
              { id: "disease_none", text: "Нет" }
            ],
            next: {
              disease_diabetes: { question: "Что для вас самое важное в лечении?", options: [{ id: "priority_cost", text: "Стоимость" }, { id: "priority_pain", text: "Боль" }, { id: "priority_eating", text: "Комфортный приём пищи" }, { id: "priority_recovery", text: "Быстрое восстановление и возврат к обычной жизни после операции" }], next: { priority_cost: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_pain: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_eating: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_recovery: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] } } },
              disease_hypertension: { question: "Что для вас самое важное в лечении?", options: [{ id: "priority_cost", text: "Стоимость" }, { id: "priority_pain", text: "Боль" }, { id: "priority_eating", text: "Комфортный приём пищи" }, { id: "priority_recovery", text: "Быстрое восстановление и возврат к обычной жизни после операции" }], next: { priority_cost: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_pain: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_eating: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_recovery: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] } } },
              disease_osteoporosis: { question: "Что для вас самое важное в лечении?", options: [{ id: "priority_cost", text: "Стоимость" }, { id: "priority_pain", text: "Боль" }, { id: "priority_eating", text: "Комфортный приём пищи" }, { id: "priority_recovery", text: "Быстрое восстановление и возврат к обычной жизни после операции" }], next: { priority_cost: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_pain: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_eating: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_recovery: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] } } },
              disease_heart: { question: "Что для вас самое важное в лечении?", options: [{ id: "priority_cost", text: "Стоимость" }, { id: "priority_pain", text: "Боль" }, { id: "priority_eating", text: "Комфортный приём пищи" }, { id: "priority_recovery", text: "Быстрое восстановление и возврат к обычной жизни после операции" }], next: { priority_cost: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_pain: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_eating: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_recovery: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] } } },
              disease_none: { question: "Что для вас самое важное в лечении?", options: [{ id: "priority_cost", text: "Стоимость" }, { id: "priority_pain", text: "Боль" }, { id: "priority_eating", text: "Комфортный приём пищи" }, { id: "priority_recovery", text: "Быстрое восстановление и возврат к обычной жизни после операции" }], next: { priority_cost: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_pain: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_eating: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_recovery: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] } } }
            }
          },
          denture_no: {
            question: "У вас есть какие-либо системные заболевания?",
            options: [
              { id: "disease_diabetes", text: "Диабет" },
              { id: "disease_hypertension", text: "Гипертония" },
              { id: "disease_osteoporosis", text: "Остеопороз" },
              { id: "disease_heart", text: "Сердечные заболевания" },
              { id: "disease_none", text: "Нет" }
            ],
            next: {
              disease_diabetes: { question: "Что для вас самое важное в лечении?", options: [{ id: "priority_cost", text: "Стоимость" }, { id: "priority_pain", text: "Боль" }, { id: "priority_eating", text: "Комфортный приём пищи" }, { id: "priority_recovery", text: "Быстрое восстановление и возврат к обычной жизни после операции" }], next: { priority_cost: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_pain: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_eating: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_recovery: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] } } },
              disease_hypertension: { question: "Что для вас самое важное в лечении?", options: [{ id: "priority_cost", text: "Стоимость" }, { id: "priority_pain", text: "Боль" }, { id: "priority_eating", text: "Комфортный приём пищи" }, { id: "priority_recovery", text: "Быстрое восстановление и возврат к обычной жизни после операции" }], next: { priority_cost: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_pain: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_eating: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_recovery: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] } } },
              disease_osteoporosis: { question: "Что для вас самое важное в лечении?", options: [{ id: "priority_cost", text: "Стоимость" }, { id: "priority_pain", text: "Боль" }, { id: "priority_eating", text: "Комфортный приём пищи" }, { id: "priority_recovery", text: "Быстрое восстановление и возврат к обычной жизни после операции" }], next: { priority_cost: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_pain: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_eating: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_recovery: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] } } },
              disease_heart: { question: "Что для вас самое важное в лечении?", options: [{ id: "priority_cost", text: "Стоимость" }, { id: "priority_pain", text: "Боль" }, { id: "priority_eating", text: "Комфортный приём пищи" }, { id: "priority_recovery", text: "Быстрое восстановление и возврат к обычной жизни после операции" }], next: { priority_cost: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_pain: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_eating: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_recovery: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] } } },
              disease_none: { question: "Что для вас самое важное в лечении?", options: [{ id: "priority_cost", text: "Стоимость" }, { id: "priority_pain", text: "Боль" }, { id: "priority_eating", text: "Комфортный приём пищи" }, { id: "priority_recovery", text: "Быстрое восстановление и возврат к обычной жизни после операции" }], next: { priority_cost: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_pain: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_eating: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_recovery: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] } } }
            }
          }
        }
      },
      missing_lower_all: {
        question: "Вы сейчас носите протез?",
        options: [
          { id: "denture_yes", text: "Да" },
          { id: "denture_no", text: "Нет" }
        ],
        next: {
          denture_yes: {
            question: "У вас есть какие-либо системные заболевания?",
            options: [
              { id: "disease_diabetes", text: "Диабет" },
              { id: "disease_hypertension", text: "Гипертония" },
              { id: "disease_osteoporosis", text: "Остеопороз" },
              { id: "disease_heart", text: "Сердечные заболевания" },
              { id: "disease_none", text: "Нет" }
            ],
            next: {
              disease_diabetes: { question: "Что для вас самое важное в лечении?", options: [{ id: "priority_cost", text: "Стоимость" }, { id: "priority_pain", text: "Боль" }, { id: "priority_eating", text: "Комфортный приём пищи" }, { id: "priority_recovery", text: "Быстрое восстановление и возврат к обычной жизни после операции" }], next: { priority_cost: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_pain: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_eating: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_recovery: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] } } },
              disease_hypertension: { question: "Что для вас самое важное в лечении?", options: [{ id: "priority_cost", text: "Стоимость" }, { id: "priority_pain", text: "Боль" }, { id: "priority_eating", text: "Комфортный приём пищи" }, { id: "priority_recovery", text: "Быстрое восстановление и возврат к обычной жизни после операции" }], next: { priority_cost: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_pain: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_eating: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_recovery: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] } } },
              disease_osteoporosis: { question: "Что для вас самое важное в лечении?", options: [{ id: "priority_cost", text: "Стоимость" }, { id: "priority_pain", text: "Боль" }, { id: "priority_eating", text: "Комфортный приём пищи" }, { id: "priority_recovery", text: "Быстрое восстановление и возврат к обычной жизни после операции" }], next: { priority_cost: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_pain: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_eating: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_recovery: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] } } },
              disease_heart: { question: "Что для вас самое важное в лечении?", options: [{ id: "priority_cost", text: "Стоимость" }, { id: "priority_pain", text: "Боль" }, { id: "priority_eating", text: "Комфортный приём пищи" }, { id: "priority_recovery", text: "Быстрое восстановление и возврат к обычной жизни после операции" }], next: { priority_cost: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_pain: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_eating: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_recovery: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] } } },
              disease_none: { question: "Что для вас самое важное в лечении?", options: [{ id: "priority_cost", text: "Стоимость" }, { id: "priority_pain", text: "Боль" }, { id: "priority_eating", text: "Комфортный приём пищи" }, { id: "priority_recovery", text: "Быстрое восстановление и возврат к обычной жизни после операции" }], next: { priority_cost: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_pain: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_eating: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_recovery: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] } } }
            }
          },
          denture_no: {
            question: "У вас есть какие-либо системные заболевания?",
            options: [
              { id: "disease_diabetes", text: "Диабет" },
              { id: "disease_hypertension", text: "Гипертония" },
              { id: "disease_osteoporosis", text: "Остеопороз" },
              { id: "disease_heart", text: "Сердечные заболевания" },
              { id: "disease_none", text: "Нет" }
            ],
            next: {
              disease_diabetes: { question: "Что для вас самое важное в лечении?", options: [{ id: "priority_cost", text: "Стоимость" }, { id: "priority_pain", text: "Боль" }, { id: "priority_eating", text: "Комфортный приём пищи" }, { id: "priority_recovery", text: "Быстрое восстановление и возврат к обычной жизни после операции" }], next: { priority_cost: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_pain: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_eating: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_recovery: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] } } },
              disease_hypertension: { question: "Что для вас самое важное в лечении?", options: [{ id: "priority_cost", text: "Стоимость" }, { id: "priority_pain", text: "Боль" }, { id: "priority_eating", text: "Комфортный приём пищи" }, { id: "priority_recovery", text: "Быстрое восстановление и возврат к обычной жизни после операции" }], next: { priority_cost: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_pain: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_eating: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_recovery: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] } } },
              disease_osteoporosis: { question: "Что для вас самое важное в лечении?", options: [{ id: "priority_cost", text: "Стоимость" }, { id: "priority_pain", text: "Боль" }, { id: "priority_eating", text: "Комфортный приём пищи" }, { id: "priority_recovery", text: "Быстрое восстановление и возврат к обычной жизни после операции" }], next: { priority_cost: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_pain: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_eating: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_recovery: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] } } },
              disease_heart: { question: "Что для вас самое важное в лечении?", options: [{ id: "priority_cost", text: "Стоимость" }, { id: "priority_pain", text: "Боль" }, { id: "priority_eating", text: "Комфортный приём пищи" }, { id: "priority_recovery", text: "Быстрое восстановление и возврат к обычной жизни после операции" }], next: { priority_cost: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_pain: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_eating: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_recovery: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] } } },
              disease_none: { question: "Что для вас самое важное в лечении?", options: [{ id: "priority_cost", text: "Стоимость" }, { id: "priority_pain", text: "Боль" }, { id: "priority_eating", text: "Комфортный приём пищи" }, { id: "priority_recovery", text: "Быстрое восстановление и возврат к обычной жизни после операции" }], next: { priority_cost: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_pain: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_eating: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_recovery: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] } } }
            }
          }
        }
      },
      missing_partial: {
        question: "Какие зубы отсутствуют или подлежат удалению?",
        options: [
          { id: "location_front", text: "В области передних зубов" },
          { id: "location_back", text: "В области коренных зубов" },
          { id: "location_both", text: "И передние, и коренные зубы" }
        ],
        next: {
          location_front: {
            question: "У вас есть какие-либо системные заболевания?",
            options: [
              { id: "disease_diabetes", text: "Диабет" },
              { id: "disease_hypertension", text: "Гипертония" },
              { id: "disease_osteoporosis", text: "Остеопороз" },
              { id: "disease_heart", text: "Сердечные заболевания" },
              { id: "disease_none", text: "Нет" }
            ],
            next: {
              disease_diabetes: { question: "Что для вас самое важное в лечении?", options: [{ id: "priority_cost", text: "Стоимость" }, { id: "priority_pain", text: "Боль" }, { id: "priority_eating", text: "Комфортный приём пищи" }, { id: "priority_recovery", text: "Быстрое восстановление и возврат к обычной жизни после операции" }], next: { priority_cost: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_pain: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_eating: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_recovery: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] } } },
              disease_hypertension: { question: "Что для вас самое важное в лечении?", options: [{ id: "priority_cost", text: "Стоимость" }, { id: "priority_pain", text: "Боль" }, { id: "priority_eating", text: "Комфортный приём пищи" }, { id: "priority_recovery", text: "Быстрое восстановление и возврат к обычной жизни после операции" }], next: { priority_cost: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_pain: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_eating: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_recovery: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] } } },
              disease_osteoporosis: { question: "Что для вас самое важное в лечении?", options: [{ id: "priority_cost", text: "Стоимость" }, { id: "priority_pain", text: "Боль" }, { id: "priority_eating", text: "Комфортный приём пищи" }, { id: "priority_recovery", text: "Быстрое восстановление и возврат к обычной жизни после операции" }], next: { priority_cost: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_pain: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_eating: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_recovery: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] } } },
              disease_heart: { question: "Что для вас самое важное в лечении?", options: [{ id: "priority_cost", text: "Стоимость" }, { id: "priority_pain", text: "Боль" }, { id: "priority_eating", text: "Комфортный приём пищи" }, { id: "priority_recovery", text: "Быстрое восстановление и возврат к обычной жизни после операции" }], next: { priority_cost: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_pain: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_eating: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_recovery: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] } } },
              disease_none: { question: "Что для вас самое важное в лечении?", options: [{ id: "priority_cost", text: "Стоимость" }, { id: "priority_pain", text: "Боль" }, { id: "priority_eating", text: "Комфортный приём пищи" }, { id: "priority_recovery", text: "Быстрое восстановление и возврат к обычной жизни после операции" }], next: { priority_cost: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_pain: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_eating: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_recovery: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] } } }
            }
          },
          location_back: {
            question: "У вас есть какие-либо системные заболевания?",
            options: [
              { id: "disease_diabetes", text: "Диабет" },
              { id: "disease_hypertension", text: "Гипертония" },
              { id: "disease_osteoporosis", text: "Остеопороз" },
              { id: "disease_heart", text: "Сердечные заболевания" },
              { id: "disease_none", text: "Нет" }
            ],
            next: {
              disease_diabetes: { question: "Что для вас самое важное в лечении?", options: [{ id: "priority_cost", text: "Стоимость" }, { id: "priority_pain", text: "Боль" }, { id: "priority_eating", text: "Комфортный приём пищи" }, { id: "priority_recovery", text: "Быстрое восстановление и возврат к обычной жизни после операции" }], next: { priority_cost: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_pain: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_eating: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_recovery: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] } } },
              disease_hypertension: { question: "Что для вас самое важное в лечении?", options: [{ id: "priority_cost", text: "Стоимость" }, { id: "priority_pain", text: "Боль" }, { id: "priority_eating", text: "Комфортный приём пищи" }, { id: "priority_recovery", text: "Быстрое восстановление и возврат к обычной жизни после операции" }], next: { priority_cost: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_pain: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_eating: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_recovery: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] } } },
              disease_osteoporosis: { question: "Что для вас самое важное в лечении?", options: [{ id: "priority_cost", text: "Стоимость" }, { id: "priority_pain", text: "Боль" }, { id: "priority_eating", text: "Комфортный приём пищи" }, { id: "priority_recovery", text: "Быстрое восстановление и возврат к обычной жизни после операции" }], next: { priority_cost: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_pain: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_eating: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_recovery: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] } } },
              disease_heart: { question: "Что для вас самое важное в лечении?", options: [{ id: "priority_cost", text: "Стоимость" }, { id: "priority_pain", text: "Боль" }, { id: "priority_eating", text: "Комфортный приём пищи" }, { id: "priority_recovery", text: "Быстрое восстановление и возврат к обычной жизни после операции" }], next: { priority_cost: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_pain: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_eating: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_recovery: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] } } },
              disease_none: { question: "Что для вас самое важное в лечении?", options: [{ id: "priority_cost", text: "Стоимость" }, { id: "priority_pain", text: "Боль" }, { id: "priority_eating", text: "Комфортный приём пищи" }, { id: "priority_recovery", text: "Быстрое восстановление и возврат к обычной жизни после операции" }], next: { priority_cost: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_pain: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_eating: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_recovery: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] } } }
            }
          },
          location_both: {
            question: "У вас есть какие-либо системные заболевания?",
            options: [
              { id: "disease_diabetes", text: "Диабет" },
              { id: "disease_hypertension", text: "Гипертония" },
              { id: "disease_osteoporosis", text: "Остеопороз" },
              { id: "disease_heart", text: "Сердечные заболевания" },
              { id: "disease_none", text: "Нет" }
            ],
            next: {
              disease_diabetes: { question: "Что для вас самое важное в лечении?", options: [{ id: "priority_cost", text: "Стоимость" }, { id: "priority_pain", text: "Боль" }, { id: "priority_eating", text: "Комфортный приём пищи" }, { id: "priority_recovery", text: "Быстрое восстановление и возврат к обычной жизни после операции" }], next: { priority_cost: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_pain: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_eating: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_recovery: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] } } },
              disease_hypertension: { question: "Что для вас самое важное в лечении?", options: [{ id: "priority_cost", text: "Стоимость" }, { id: "priority_pain", text: "Боль" }, { id: "priority_eating", text: "Комфортный приём пищи" }, { id: "priority_recovery", text: "Быстрое восстановление и возврат к обычной жизни после операции" }], next: { priority_cost: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_pain: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_eating: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_recovery: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] } } },
              disease_osteoporosis: { question: "Что для вас самое важное в лечении?", options: [{ id: "priority_cost", text: "Стоимость" }, { id: "priority_pain", text: "Боль" }, { id: "priority_eating", text: "Комфортный приём пищи" }, { id: "priority_recovery", text: "Быстрое восстановление и возврат к обычной жизни после операции" }], next: { priority_cost: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_pain: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_eating: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_recovery: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] } } },
              disease_heart: { question: "Что для вас самое важное в лечении?", options: [{ id: "priority_cost", text: "Стоимость" }, { id: "priority_pain", text: "Боль" }, { id: "priority_eating", text: "Комфортный приём пищи" }, { id: "priority_recovery", text: "Быстрое восстановление и возврат к обычной жизни после операции" }], next: { priority_cost: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_pain: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_eating: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_recovery: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] } } },
              disease_none: { question: "Что для вас самое важное в лечении?", options: [{ id: "priority_cost", text: "Стоимость" }, { id: "priority_pain", text: "Боль" }, { id: "priority_eating", text: "Комфортный приём пищи" }, { id: "priority_recovery", text: "Быстрое восстановление и возврат к обычной жизни после операции" }], next: { priority_cost: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_pain: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_eating: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_recovery: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] } } }
            }
          }
        }
      },
      implant_revision: {
        question: "Вы сейчас носите протез?",
        options: [
          { id: "denture_yes", text: "Да" },
          { id: "denture_no", text: "Нет" }
        ],
        next: {
          denture_yes: {
            question: "У вас есть какие-либо системные заболевания?",
            options: [
              { id: "disease_diabetes", text: "Диабет" },
              { id: "disease_hypertension", text: "Гипертония" },
              { id: "disease_osteoporosis", text: "Остеопороз" },
              { id: "disease_heart", text: "Сердечные заболевания" },
              { id: "disease_none", text: "Нет" }
            ],
            next: {
              disease_diabetes: { question: "Что для вас самое важное в лечении?", options: [{ id: "priority_cost", text: "Стоимость" }, { id: "priority_pain", text: "Боль" }, { id: "priority_eating", text: "Комфортный приём пищи" }, { id: "priority_recovery", text: "Быстрое восстановление и возврат к обычной жизни после операции" }], next: { priority_cost: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_pain: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_eating: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_recovery: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] } } },
              disease_hypertension: { question: "Что для вас самое важное в лечении?", options: [{ id: "priority_cost", text: "Стоимость" }, { id: "priority_pain", text: "Боль" }, { id: "priority_eating", text: "Комфортный приём пищи" }, { id: "priority_recovery", text: "Быстрое восстановление и возврат к обычной жизни после операции" }], next: { priority_cost: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_pain: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_eating: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_recovery: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] } } },
              disease_osteoporosis: { question: "Что для вас самое важное в лечении?", options: [{ id: "priority_cost", text: "Стоимость" }, { id: "priority_pain", text: "Боль" }, { id: "priority_eating", text: "Комфортный приём пищи" }, { id: "priority_recovery", text: "Быстрое восстановление и возврат к обычной жизни после операции" }], next: { priority_cost: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_pain: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_eating: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_recovery: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] } } },
              disease_heart: { question: "Что для вас самое важное в лечении?", options: [{ id: "priority_cost", text: "Стоимость" }, { id: "priority_pain", text: "Боль" }, { id: "priority_eating", text: "Комфортный приём пищи" }, { id: "priority_recovery", text: "Быстрое восстановление и возврат к обычной жизни после операции" }], next: { priority_cost: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_pain: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_eating: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_recovery: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] } } },
              disease_none: { question: "Что для вас самое важное в лечении?", options: [{ id: "priority_cost", text: "Стоимость" }, { id: "priority_pain", text: "Боль" }, { id: "priority_eating", text: "Комфортный приём пищи" }, { id: "priority_recovery", text: "Быстрое восстановление и возврат к обычной жизни после операции" }], next: { priority_cost: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_pain: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_eating: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_recovery: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] } } }
            }
          },
          denture_no: {
            question: "У вас есть какие-либо системные заболевания?",
            options: [
              { id: "disease_diabetes", text: "Диабет" },
              { id: "disease_hypertension", text: "Гипертония" },
              { id: "disease_osteoporosis", text: "Остеопороз" },
              { id: "disease_heart", text: "Сердечные заболевания" },
              { id: "disease_none", text: "Нет" }
            ],
            next: {
              disease_diabetes: { question: "Что для вас самое важное в лечении?", options: [{ id: "priority_cost", text: "Стоимость" }, { id: "priority_pain", text: "Боль" }, { id: "priority_eating", text: "Комфортный приём пищи" }, { id: "priority_recovery", text: "Быстрое восстановление и возврат к обычной жизни после операции" }], next: { priority_cost: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_pain: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_eating: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_recovery: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] } } },
              disease_hypertension: { question: "Что для вас самое важное в лечении?", options: [{ id: "priority_cost", text: "Стоимость" }, { id: "priority_pain", text: "Боль" }, { id: "priority_eating", text: "Комфортный приём пищи" }, { id: "priority_recovery", text: "Быстрое восстановление и возврат к обычной жизни после операции" }], next: { priority_cost: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_pain: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_eating: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_recovery: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] } } },
              disease_osteoporosis: { question: "Что для вас самое важное в лечении?", options: [{ id: "priority_cost", text: "Стоимость" }, { id: "priority_pain", text: "Боль" }, { id: "priority_eating", text: "Комфортный приём пищи" }, { id: "priority_recovery", text: "Быстрое восстановление и возврат к обычной жизни после операции" }], next: { priority_cost: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_pain: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_eating: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_recovery: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] } } },
              disease_heart: { question: "Что для вас самое важное в лечении?", options: [{ id: "priority_cost", text: "Стоимость" }, { id: "priority_pain", text: "Боль" }, { id: "priority_eating", text: "Комфортный приём пищи" }, { id: "priority_recovery", text: "Быстрое восстановление и возврат к обычной жизни после операции" }], next: { priority_cost: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_pain: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_eating: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_recovery: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] } } },
              disease_none: { question: "Что для вас самое важное в лечении?", options: [{ id: "priority_cost", text: "Стоимость" }, { id: "priority_pain", text: "Боль" }, { id: "priority_eating", text: "Комфортный приём пищи" }, { id: "priority_recovery", text: "Быстрое восстановление и возврат к обычной жизни после операции" }], next: { priority_cost: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_pain: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_eating: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] }, priority_recovery: { question: "Есть ли причина, по которой вы откладывали лечение?", options: [{ id: "hesitation_cost", text: "Из-за стоимости" }, { id: "hesitation_fear", text: "Из-за боли/страха перед стоматологом" }, { id: "hesitation_clinic", text: "Трудно выбрать подходящую клинику" }, { id: "hesitation_none", text: "Нет особой причины" }] } } }
            }
          }
        }
      }
    }
  },

  // Вопросы о дёснах
  gum_issue: {
    question: "Какие у вас симптомы?",
    options: [
      { id: "gum_bleeding", text: "Дёсны кровоточат" },
      { id: "gum_swelling", text: "Дёсны опухли" },
      { id: "gum_recession", text: "Дёсны отступили" },
      { id: "gum_wobbly", text: "Зубы шатаются" }
    ],
    next: {
      gum_bleeding: {
        question: "Когда идёт кровь?",
        options: [
          { id: "bleeding_brushing", text: "Только при чистке зубов" },
          { id: "bleeding_often", text: "Часто кровоточит" },
          { id: "bleeding_always", text: "Кровоточит даже в покое" }
        ]
      },
      gum_swelling: {
        question: "Есть ли боль вместе с отёком?",
        options: [
          { id: "swelling_pain_yes", text: "Да, болит" },
          { id: "swelling_pain_no", text: "Нет, только отёк" }
        ]
      },
      gum_recession: {
        question: "Ваши зубы чувствительны?",
        options: [
          { id: "recession_sensitive_yes", text: "Да, чувствительны" },
          { id: "recession_sensitive_no", text: "Нет" }
        ]
      },
      gum_wobbly: {
        question: "Насколько сильно шатаются?",
        options: [
          { id: "wobbly_slight", text: "Слегка шатаются" },
          { id: "wobbly_severe", text: "Сильно шатаются" }
        ]
      }
    }
  },

  // Регулярный осмотр
  checkup: {
    question: "Есть ли что-то, что вас особенно беспокоит?",
    options: [
      { id: "checkup_prevention", text: "Профилактика кариеса/дёсен" },
      { id: "checkup_cleaning", text: "Хочу сделать чистку зубов" },
      { id: "checkup_concern", text: "Беспокоит конкретный зуб" },
      { id: "checkup_general", text: "Только общий осмотр" }
    ]
  }
};
