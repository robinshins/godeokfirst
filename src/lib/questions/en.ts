import { LanguageQuestionTree } from './types';
export const QUESTION_TREE_EN: LanguageQuestionTree = {
  // Step 1: Initial symptom assessment
  initial: {
    question: "What symptoms or discomfort are you experiencing?",
    options: [
      { id: "pain", text: "I have pain" },
      { id: "aesthetic", text: "I want cosmetic improvement" },
      { id: "missing_tooth", text: "I have a missing tooth" },
      { id: "gum_issue", text: "I have gum problems" },
      { id: "checkup", text: "Regular checkup and prevention" }
    ]
  },

  // Cavity/Root canal related questions (first question)
  cavity_nerve: {
    question: "What is your current situation?",
    options: [
      { id: "cavity_pain", text: "My tooth hurts" },
      { id: "cavity_sensitive", text: "My tooth is sensitive" },
      { id: "cavity_broken", text: "My tooth is broken" },
      { id: "cavity_eating", text: "It's uncomfortable when eating" },
      { id: "cavity_dark", text: "My tooth looks dark" },
      { id: "cavity_brushing", text: "It's uncomfortable when brushing" }
    ],
    next: {
      cavity_pain: {
        question: "Is it one specific tooth or a wider area that's uncomfortable?",
        options: [
          { id: "specific_tooth", text: "One specific tooth is uncomfortable" },
          { id: "wide_area", text: "A wider area (left/right, upper/lower) is uncomfortable" }
        ]
      },
      cavity_sensitive: {
        question: "Is it one specific tooth or a wider area that's uncomfortable?",
        options: [
          { id: "specific_tooth", text: "One specific tooth is uncomfortable" },
          { id: "wide_area", text: "A wider area (left/right, upper/lower) is uncomfortable" }
        ]
      },
      cavity_broken: {
        question: "Does the broken tooth hurt?",
        options: [
          { id: "broken_painful", text: "Yes, it's broken and hurts" },
          { id: "broken_not_painful", text: "It's broken but doesn't hurt" }
        ]
      },
      cavity_eating: {
        question: "Is it one specific tooth or a wider area that's uncomfortable?",
        options: [
          { id: "specific_tooth", text: "One specific tooth is uncomfortable" },
          { id: "wide_area", text: "A wider area (left/right, upper/lower) is uncomfortable" }
        ]
      },
      cavity_dark: {
        question: "Where is the dark-looking tooth?",
        options: [
          { id: "dark_front", text: "Front teeth area" },
          { id: "dark_back", text: "Molar area" },
          { id: "dark_multiple", text: "Multiple areas look dark" }
        ]
      },
      cavity_brushing: {
        question: "Is it one specific tooth or a wider area that's uncomfortable?",
        options: [
          { id: "specific_tooth", text: "One specific tooth is uncomfortable" },
          { id: "wide_area", text: "A wider area (left/right, upper/lower) is uncomfortable" }
        ]
      }
    }
  },

  // Pain related questions (general)
  pain: {
    question: "When do you feel the pain?",
    options: [
      { id: "pain_cold_hot", text: "When eating cold or hot foods" },
      { id: "pain_chewing", text: "When chewing food" },
      { id: "pain_always", text: "It hurts constantly even at rest" },
      { id: "pain_wisdom", text: "Wisdom tooth area hurts" }
    ],
    next: {
      pain_cold_hot: {
        question: "How long does the pain last?",
        options: [
          { id: "pain_short", text: "It's brief and goes away" },
          { id: "pain_long", text: "Once it starts, it lasts a long time" },
          { id: "pain_getting_worse", text: "It's getting progressively worse" }
        ]
      },
      pain_chewing: {
        question: "Which area hurts?",
        options: [
          { id: "pain_front", text: "Front teeth area" },
          { id: "pain_back", text: "Molar area" },
          { id: "pain_multiple", text: "Multiple areas hurt" }
        ]
      },
      pain_always: {
        question: "Is there any swelling or pus?",
        options: [
          { id: "pain_swelling_yes", text: "Yes, there's swelling or pus" },
          { id: "pain_swelling_no", text: "No, just pain" }
        ]
      },
      pain_wisdom: {
        question: "When did the wisdom tooth pain start?",
        options: [
          { id: "wisdom_recent", text: "Within the last few days" },
          { id: "wisdom_recurring", text: "It happens repeatedly" },
          { id: "wisdom_swelling", text: "The gum is very swollen" }
        ]
      }
    }
  },

  // Wisdom tooth related questions (consultation)
  wisdom_tooth: {
    question: "What is the current condition of your wisdom tooth?",
    options: [
      { id: "wisdom_pain", text: "The wisdom tooth area hurts" },
      { id: "wisdom_checkup", text: "It doesn't hurt, but I want to get it checked" }
    ],
    next: {
      // When pain is selected → location question
      wisdom_pain: {
        question: "Which tooth is currently painful?",
        options: [
          { id: "wisdom_upper", text: "Upper wisdom tooth" },
          { id: "wisdom_lower", text: "Lower wisdom tooth" }
        ],
        next: {
          // After selecting upper wisdom tooth → when discomfort started
          wisdom_upper: {
            question: "When did the discomfort with your wisdom tooth start?",
            options: [
              { id: "wisdom_first_time", text: "This is the first time" },
              { id: "wisdom_recurring", text: "I've had similar experiences before, it got better, but it's happening again" }
            ],
            next: {
              wisdom_first_time: {
                question: "What concerns you most about wisdom tooth treatment?",
                options: [
                  { id: "worry_possible", text: "Whether extraction is possible" },
                  { id: "worry_fear", text: "Fear of the extraction procedure" },
                  { id: "worry_daily", text: "Inconvenience in daily life after extraction" }
                ],
                next: {
                  worry_possible: {
                    question: "Have you had cardiovascular surgery or do you have any systemic diseases?",
                    options: [
                      { id: "disease_medication", text: "I take daily medication (please bring your medication bag)" },
                      { id: "disease_heart", text: "I've had heart or vascular surgery before" },
                      { id: "disease_bp_diabetes", text: "High blood pressure/Diabetes" },
                      { id: "disease_osteoporosis", text: "Osteoporosis" },
                      { id: "disease_other", text: "Other systemic diseases" },
                      { id: "disease_none", text: "None" }
                    ]
                  },
                  worry_fear: {
                    question: "Have you had cardiovascular surgery or do you have any systemic diseases?",
                    options: [
                      { id: "disease_medication", text: "I take daily medication (please bring your medication bag)" },
                      { id: "disease_heart", text: "I've had heart or vascular surgery before" },
                      { id: "disease_bp_diabetes", text: "High blood pressure/Diabetes" },
                      { id: "disease_osteoporosis", text: "Osteoporosis" },
                      { id: "disease_other", text: "Other systemic diseases" },
                      { id: "disease_none", text: "None" }
                    ]
                  },
                  worry_daily: {
                    question: "Have you had cardiovascular surgery or do you have any systemic diseases?",
                    options: [
                      { id: "disease_medication", text: "I take daily medication (please bring your medication bag)" },
                      { id: "disease_heart", text: "I've had heart or vascular surgery before" },
                      { id: "disease_bp_diabetes", text: "High blood pressure/Diabetes" },
                      { id: "disease_osteoporosis", text: "Osteoporosis" },
                      { id: "disease_other", text: "Other systemic diseases" },
                      { id: "disease_none", text: "None" }
                    ]
                  }
                }
              },
              wisdom_recurring: {
                question: "What concerns you most about wisdom tooth treatment?",
                options: [
                  { id: "worry_possible", text: "Whether extraction is possible" },
                  { id: "worry_fear", text: "Fear of the extraction procedure" },
                  { id: "worry_daily", text: "Inconvenience in daily life after extraction" }
                ],
                next: {
                  worry_possible: {
                    question: "Have you had cardiovascular surgery or do you have any systemic diseases?",
                    options: [
                      { id: "disease_medication", text: "I take daily medication (please bring your medication bag)" },
                      { id: "disease_heart", text: "I've had heart or vascular surgery before" },
                      { id: "disease_bp_diabetes", text: "High blood pressure/Diabetes" },
                      { id: "disease_osteoporosis", text: "Osteoporosis" },
                      { id: "disease_other", text: "Other systemic diseases" },
                      { id: "disease_none", text: "None" }
                    ]
                  },
                  worry_fear: {
                    question: "Have you had cardiovascular surgery or do you have any systemic diseases?",
                    options: [
                      { id: "disease_medication", text: "I take daily medication (please bring your medication bag)" },
                      { id: "disease_heart", text: "I've had heart or vascular surgery before" },
                      { id: "disease_bp_diabetes", text: "High blood pressure/Diabetes" },
                      { id: "disease_osteoporosis", text: "Osteoporosis" },
                      { id: "disease_other", text: "Other systemic diseases" },
                      { id: "disease_none", text: "None" }
                    ]
                  },
                  worry_daily: {
                    question: "Have you had cardiovascular surgery or do you have any systemic diseases?",
                    options: [
                      { id: "disease_medication", text: "I take daily medication (please bring your medication bag)" },
                      { id: "disease_heart", text: "I've had heart or vascular surgery before" },
                      { id: "disease_bp_diabetes", text: "High blood pressure/Diabetes" },
                      { id: "disease_osteoporosis", text: "Osteoporosis" },
                      { id: "disease_other", text: "Other systemic diseases" },
                      { id: "disease_none", text: "None" }
                    ]
                  }
                }
              }
            }
          },
          // After selecting lower wisdom tooth → when discomfort started
          wisdom_lower: {
            question: "When did the discomfort with your wisdom tooth start?",
            options: [
              { id: "wisdom_first_time", text: "This is the first time" },
              { id: "wisdom_recurring", text: "I've had similar experiences before, it got better, but it's happening again" }
            ],
            next: {
              wisdom_first_time: {
                question: "What concerns you most about wisdom tooth treatment?",
                options: [
                  { id: "worry_possible", text: "Whether extraction is possible" },
                  { id: "worry_fear", text: "Fear of the extraction procedure" },
                  { id: "worry_daily", text: "Inconvenience in daily life after extraction" }
                ],
                next: {
                  worry_possible: {
                    question: "Have you had cardiovascular surgery or do you have any systemic diseases?",
                    options: [
                      { id: "disease_medication", text: "I take daily medication (please bring your medication bag)" },
                      { id: "disease_heart", text: "I've had heart or vascular surgery before" },
                      { id: "disease_bp_diabetes", text: "High blood pressure/Diabetes" },
                      { id: "disease_osteoporosis", text: "Osteoporosis" },
                      { id: "disease_other", text: "Other systemic diseases" },
                      { id: "disease_none", text: "None" }
                    ]
                  },
                  worry_fear: {
                    question: "Have you had cardiovascular surgery or do you have any systemic diseases?",
                    options: [
                      { id: "disease_medication", text: "I take daily medication (please bring your medication bag)" },
                      { id: "disease_heart", text: "I've had heart or vascular surgery before" },
                      { id: "disease_bp_diabetes", text: "High blood pressure/Diabetes" },
                      { id: "disease_osteoporosis", text: "Osteoporosis" },
                      { id: "disease_other", text: "Other systemic diseases" },
                      { id: "disease_none", text: "None" }
                    ]
                  },
                  worry_daily: {
                    question: "Have you had cardiovascular surgery or do you have any systemic diseases?",
                    options: [
                      { id: "disease_medication", text: "I take daily medication (please bring your medication bag)" },
                      { id: "disease_heart", text: "I've had heart or vascular surgery before" },
                      { id: "disease_bp_diabetes", text: "High blood pressure/Diabetes" },
                      { id: "disease_osteoporosis", text: "Osteoporosis" },
                      { id: "disease_other", text: "Other systemic diseases" },
                      { id: "disease_none", text: "None" }
                    ]
                  }
                }
              },
              wisdom_recurring: {
                question: "What concerns you most about wisdom tooth treatment?",
                options: [
                  { id: "worry_possible", text: "Whether extraction is possible" },
                  { id: "worry_fear", text: "Fear of the extraction procedure" },
                  { id: "worry_daily", text: "Inconvenience in daily life after extraction" }
                ],
                next: {
                  worry_possible: {
                    question: "Have you had cardiovascular surgery or do you have any systemic diseases?",
                    options: [
                      { id: "disease_medication", text: "I take daily medication (please bring your medication bag)" },
                      { id: "disease_heart", text: "I've had heart or vascular surgery before" },
                      { id: "disease_bp_diabetes", text: "High blood pressure/Diabetes" },
                      { id: "disease_osteoporosis", text: "Osteoporosis" },
                      { id: "disease_other", text: "Other systemic diseases" },
                      { id: "disease_none", text: "None" }
                    ]
                  },
                  worry_fear: {
                    question: "Have you had cardiovascular surgery or do you have any systemic diseases?",
                    options: [
                      { id: "disease_medication", text: "I take daily medication (please bring your medication bag)" },
                      { id: "disease_heart", text: "I've had heart or vascular surgery before" },
                      { id: "disease_bp_diabetes", text: "High blood pressure/Diabetes" },
                      { id: "disease_osteoporosis", text: "Osteoporosis" },
                      { id: "disease_other", text: "Other systemic diseases" },
                      { id: "disease_none", text: "None" }
                    ]
                  },
                  worry_daily: {
                    question: "Have you had cardiovascular surgery or do you have any systemic diseases?",
                    options: [
                      { id: "disease_medication", text: "I take daily medication (please bring your medication bag)" },
                      { id: "disease_heart", text: "I've had heart or vascular surgery before" },
                      { id: "disease_bp_diabetes", text: "High blood pressure/Diabetes" },
                      { id: "disease_osteoporosis", text: "Osteoporosis" },
                      { id: "disease_other", text: "Other systemic diseases" },
                      { id: "disease_none", text: "None" }
                    ]
                  }
                }
              }
            }
          }
        }
      },
      // When no pain but wants checkup → concern question → final recommendation
      wisdom_checkup: {
        question: "What concerns you most about wisdom tooth treatment?",
        options: [
          { id: "checkup_worry_possible", text: "Whether extraction is possible" },
          { id: "checkup_worry_fear", text: "Fear of the extraction procedure" },
          { id: "checkup_worry_daily", text: "Inconvenience in daily life after extraction" }
        ],
        next: {
          checkup_worry_possible: {
            question: "Have you had cardiovascular surgery or do you have any systemic diseases?",
            options: [
              { id: "disease_medication", text: "I take daily medication (please bring your medication bag)" },
              { id: "disease_heart", text: "I've had heart or vascular surgery before" },
              { id: "disease_bp_diabetes", text: "High blood pressure/Diabetes" },
              { id: "disease_osteoporosis", text: "Osteoporosis" },
              { id: "disease_other", text: "Other systemic diseases" },
              { id: "disease_none", text: "None" }
            ],
            next: {
              disease_medication: {
                question: "Is there anything else you'd like to have checked during your visit?",
                options: [
                  { id: "extra_cavity", text: "Cavity checkup" },
                  { id: "extra_gum", text: "Gum checkup" },
                  { id: "extra_scaling", text: "Scaling" },
                  { id: "extra_none", text: "No, I just want to check the wisdom tooth" }
                ]
              },
              disease_heart: {
                question: "Is there anything else you'd like to have checked during your visit?",
                options: [
                  { id: "extra_cavity", text: "Cavity checkup" },
                  { id: "extra_gum", text: "Gum checkup" },
                  { id: "extra_scaling", text: "Scaling" },
                  { id: "extra_none", text: "No, I just want to check the wisdom tooth" }
                ]
              },
              disease_bp_diabetes: {
                question: "Is there anything else you'd like to have checked during your visit?",
                options: [
                  { id: "extra_cavity", text: "Cavity checkup" },
                  { id: "extra_gum", text: "Gum checkup" },
                  { id: "extra_scaling", text: "Scaling" },
                  { id: "extra_none", text: "No, I just want to check the wisdom tooth" }
                ]
              },
              disease_osteoporosis: {
                question: "Is there anything else you'd like to have checked during your visit?",
                options: [
                  { id: "extra_cavity", text: "Cavity checkup" },
                  { id: "extra_gum", text: "Gum checkup" },
                  { id: "extra_scaling", text: "Scaling" },
                  { id: "extra_none", text: "No, I just want to check the wisdom tooth" }
                ]
              },
              disease_other: {
                question: "Is there anything else you'd like to have checked during your visit?",
                options: [
                  { id: "extra_cavity", text: "Cavity checkup" },
                  { id: "extra_gum", text: "Gum checkup" },
                  { id: "extra_scaling", text: "Scaling" },
                  { id: "extra_none", text: "No, I just want to check the wisdom tooth" }
                ]
              },
              disease_none: {
                question: "Is there anything else you'd like to have checked during your visit?",
                options: [
                  { id: "extra_cavity", text: "Cavity checkup" },
                  { id: "extra_gum", text: "Gum checkup" },
                  { id: "extra_scaling", text: "Scaling" },
                  { id: "extra_none", text: "No, I just want to check the wisdom tooth" }
                ]
              }
            }
          },
          checkup_worry_fear: {
            question: "Have you had cardiovascular surgery or do you have any systemic diseases?",
            options: [
              { id: "disease_medication", text: "I take daily medication (please bring your medication bag)" },
              { id: "disease_heart", text: "I've had heart or vascular surgery before" },
              { id: "disease_bp_diabetes", text: "High blood pressure/Diabetes" },
              { id: "disease_osteoporosis", text: "Osteoporosis" },
              { id: "disease_other", text: "Other systemic diseases" },
              { id: "disease_none", text: "None" }
            ],
            next: {
              disease_medication: {
                question: "Is there anything else you'd like to have checked during your visit?",
                options: [
                  { id: "extra_cavity", text: "Cavity checkup" },
                  { id: "extra_gum", text: "Gum checkup" },
                  { id: "extra_scaling", text: "Scaling" },
                  { id: "extra_none", text: "No, I just want to check the wisdom tooth" }
                ]
              },
              disease_heart: {
                question: "Is there anything else you'd like to have checked during your visit?",
                options: [
                  { id: "extra_cavity", text: "Cavity checkup" },
                  { id: "extra_gum", text: "Gum checkup" },
                  { id: "extra_scaling", text: "Scaling" },
                  { id: "extra_none", text: "No, I just want to check the wisdom tooth" }
                ]
              },
              disease_bp_diabetes: {
                question: "Is there anything else you'd like to have checked during your visit?",
                options: [
                  { id: "extra_cavity", text: "Cavity checkup" },
                  { id: "extra_gum", text: "Gum checkup" },
                  { id: "extra_scaling", text: "Scaling" },
                  { id: "extra_none", text: "No, I just want to check the wisdom tooth" }
                ]
              },
              disease_osteoporosis: {
                question: "Is there anything else you'd like to have checked during your visit?",
                options: [
                  { id: "extra_cavity", text: "Cavity checkup" },
                  { id: "extra_gum", text: "Gum checkup" },
                  { id: "extra_scaling", text: "Scaling" },
                  { id: "extra_none", text: "No, I just want to check the wisdom tooth" }
                ]
              },
              disease_other: {
                question: "Is there anything else you'd like to have checked during your visit?",
                options: [
                  { id: "extra_cavity", text: "Cavity checkup" },
                  { id: "extra_gum", text: "Gum checkup" },
                  { id: "extra_scaling", text: "Scaling" },
                  { id: "extra_none", text: "No, I just want to check the wisdom tooth" }
                ]
              },
              disease_none: {
                question: "Is there anything else you'd like to have checked during your visit?",
                options: [
                  { id: "extra_cavity", text: "Cavity checkup" },
                  { id: "extra_gum", text: "Gum checkup" },
                  { id: "extra_scaling", text: "Scaling" },
                  { id: "extra_none", text: "No, I just want to check the wisdom tooth" }
                ]
              }
            }
          },
          checkup_worry_daily: {
            question: "Have you had cardiovascular surgery or do you have any systemic diseases?",
            options: [
              { id: "disease_medication", text: "I take daily medication (please bring your medication bag)" },
              { id: "disease_heart", text: "I've had heart or vascular surgery before" },
              { id: "disease_bp_diabetes", text: "High blood pressure/Diabetes" },
              { id: "disease_osteoporosis", text: "Osteoporosis" },
              { id: "disease_other", text: "Other systemic diseases" },
              { id: "disease_none", text: "None" }
            ],
            next: {
              disease_medication: {
                question: "Is there anything else you'd like to have checked during your visit?",
                options: [
                  { id: "extra_cavity", text: "Cavity checkup" },
                  { id: "extra_gum", text: "Gum checkup" },
                  { id: "extra_scaling", text: "Scaling" },
                  { id: "extra_none", text: "No, I just want to check the wisdom tooth" }
                ]
              },
              disease_heart: {
                question: "Is there anything else you'd like to have checked during your visit?",
                options: [
                  { id: "extra_cavity", text: "Cavity checkup" },
                  { id: "extra_gum", text: "Gum checkup" },
                  { id: "extra_scaling", text: "Scaling" },
                  { id: "extra_none", text: "No, I just want to check the wisdom tooth" }
                ]
              },
              disease_bp_diabetes: {
                question: "Is there anything else you'd like to have checked during your visit?",
                options: [
                  { id: "extra_cavity", text: "Cavity checkup" },
                  { id: "extra_gum", text: "Gum checkup" },
                  { id: "extra_scaling", text: "Scaling" },
                  { id: "extra_none", text: "No, I just want to check the wisdom tooth" }
                ]
              },
              disease_osteoporosis: {
                question: "Is there anything else you'd like to have checked during your visit?",
                options: [
                  { id: "extra_cavity", text: "Cavity checkup" },
                  { id: "extra_gum", text: "Gum checkup" },
                  { id: "extra_scaling", text: "Scaling" },
                  { id: "extra_none", text: "No, I just want to check the wisdom tooth" }
                ]
              },
              disease_other: {
                question: "Is there anything else you'd like to have checked during your visit?",
                options: [
                  { id: "extra_cavity", text: "Cavity checkup" },
                  { id: "extra_gum", text: "Gum checkup" },
                  { id: "extra_scaling", text: "Scaling" },
                  { id: "extra_none", text: "No, I just want to check the wisdom tooth" }
                ]
              },
              disease_none: {
                question: "Is there anything else you'd like to have checked during your visit?",
                options: [
                  { id: "extra_cavity", text: "Cavity checkup" },
                  { id: "extra_gum", text: "Gum checkup" },
                  { id: "extra_scaling", text: "Scaling" },
                  { id: "extra_none", text: "No, I just want to check the wisdom tooth" }
                ]
              }
            }
          }
        }
      }
    }
  },

  // Aesthetic related questions
  aesthetic: {
    question: "What would you like to improve?",
    options: [
      { id: "aesthetic_color", text: "My teeth are yellow or discolored" },
      { id: "aesthetic_shape", text: "Tooth shape or size" },
      { id: "aesthetic_gap", text: "Gaps between teeth" },
      { id: "aesthetic_alignment", text: "My teeth are not evenly aligned" }
    ],
    next: {
      aesthetic_color: {
        question: "What is the extent and cause of discoloration?",
        options: [
          { id: "color_coffee", text: "Staining from coffee/smoking" },
          { id: "color_aging", text: "Overall discoloration due to aging" },
          { id: "color_single", text: "Only specific teeth are darker" }
        ]
      },
      aesthetic_shape: {
        question: "What problem do you have?",
        options: [
          { id: "shape_small", text: "My teeth are small" },
          { id: "shape_chipped", text: "My teeth are chipped or worn" },
          { id: "shape_uneven", text: "My teeth lengths are uneven" }
        ]
      },
      aesthetic_gap: {
        question: "Where is the gap located?",
        options: [
          { id: "gap_front", text: "Between front teeth" },
          { id: "gap_multiple", text: "There are gaps in multiple places" }
        ]
      },
      aesthetic_alignment: {
        question: "How severe is the alignment problem?",
        options: [
          { id: "alignment_mild", text: "Slightly crooked" },
          { id: "alignment_moderate", text: "Moderate crowding" },
          { id: "alignment_severe", text: "Severely crooked" }
        ]
      }
    }
  },

  // Missing tooth related questions (implant consultation) - Q1: Current condition
  missing_tooth: {
    question: "What is your current dental condition?",
    options: [
      { id: "missing_upper_all", text: "All upper teeth are missing or scheduled for extraction" },
      { id: "missing_lower_all", text: "All lower teeth are missing or scheduled for extraction" },
      { id: "missing_all", text: "Almost all teeth are missing or scheduled for extraction" },
      { id: "missing_partial", text: "Multiple teeth (up to 10) are missing or scheduled for extraction" },
      { id: "implant_revision", text: "I need implant revision surgery" }
    ],
    next: {
      // Q2: Denture status (common for all options)
      missing_upper_all: {
        question: "Are you currently wearing dentures?",
        options: [
          { id: "denture_yes", text: "Yes" },
          { id: "denture_no", text: "No" }
        ],
        next: {
          // Q3: Systemic disease check
          denture_yes: {
            question: "Do you have any systemic diseases?",
            options: [
              { id: "disease_diabetes", text: "Diabetes" },
              { id: "disease_hypertension", text: "Hypertension" },
              { id: "disease_osteoporosis", text: "Osteoporosis" },
              { id: "disease_heart", text: "Heart disease" },
              { id: "disease_none", text: "No" }
            ],
            next: {
              // Q4: Important aspects in treatment (Q5 role)
              disease_diabetes: {
                question: "What is most important to you in treatment?",
                options: [
                  { id: "priority_cost", text: "Cost" },
                  { id: "priority_pain", text: "Pain management" },
                  { id: "priority_eating", text: "Comfortable eating" },
                  { id: "priority_recovery", text: "Quick recovery and return to daily life after surgery" }
                ],
                next: {
                  // Q5: Reasons for hesitation (Q6 role)
                  priority_cost: {
                    question: "Is there any reason you've been hesitating about treatment?",
                    options: [
                      { id: "hesitation_cost", text: "Due to cost" },
                      { id: "hesitation_fear", text: "Due to pain/dental anxiety" },
                      { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" },
                      { id: "hesitation_none", text: "No particular reason" }
                    ]
                  },
                  priority_pain: {
                    question: "Is there any reason you've been hesitating about treatment?",
                    options: [
                      { id: "hesitation_cost", text: "Due to cost" },
                      { id: "hesitation_fear", text: "Due to pain/dental anxiety" },
                      { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" },
                      { id: "hesitation_none", text: "No particular reason" }
                    ]
                  },
                  priority_eating: {
                    question: "Is there any reason you've been hesitating about treatment?",
                    options: [
                      { id: "hesitation_cost", text: "Due to cost" },
                      { id: "hesitation_fear", text: "Due to pain/dental anxiety" },
                      { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" },
                      { id: "hesitation_none", text: "No particular reason" }
                    ]
                  },
                  priority_recovery: {
                    question: "Is there any reason you've been hesitating about treatment?",
                    options: [
                      { id: "hesitation_cost", text: "Due to cost" },
                      { id: "hesitation_fear", text: "Due to pain/dental anxiety" },
                      { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" },
                      { id: "hesitation_none", text: "No particular reason" }
                    ]
                  }
                }
              },
              disease_hypertension: {
                question: "What is most important to you in treatment?",
                options: [
                  { id: "priority_cost", text: "Cost" },
                  { id: "priority_pain", text: "Pain management" },
                  { id: "priority_eating", text: "Comfortable eating" },
                  { id: "priority_recovery", text: "Quick recovery and return to daily life after surgery" }
                ],
                next: {
                  priority_cost: {
                    question: "Is there any reason you've been hesitating about treatment?",
                    options: [
                      { id: "hesitation_cost", text: "Due to cost" },
                      { id: "hesitation_fear", text: "Due to pain/dental anxiety" },
                      { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" },
                      { id: "hesitation_none", text: "No particular reason" }
                    ]
                  },
                  priority_pain: {
                    question: "Is there any reason you've been hesitating about treatment?",
                    options: [
                      { id: "hesitation_cost", text: "Due to cost" },
                      { id: "hesitation_fear", text: "Due to pain/dental anxiety" },
                      { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" },
                      { id: "hesitation_none", text: "No particular reason" }
                    ]
                  },
                  priority_eating: {
                    question: "Is there any reason you've been hesitating about treatment?",
                    options: [
                      { id: "hesitation_cost", text: "Due to cost" },
                      { id: "hesitation_fear", text: "Due to pain/dental anxiety" },
                      { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" },
                      { id: "hesitation_none", text: "No particular reason" }
                    ]
                  },
                  priority_recovery: {
                    question: "Is there any reason you've been hesitating about treatment?",
                    options: [
                      { id: "hesitation_cost", text: "Due to cost" },
                      { id: "hesitation_fear", text: "Due to pain/dental anxiety" },
                      { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" },
                      { id: "hesitation_none", text: "No particular reason" }
                    ]
                  }
                }
              },
              disease_osteoporosis: {
                question: "What is most important to you in treatment?",
                options: [
                  { id: "priority_cost", text: "Cost" },
                  { id: "priority_pain", text: "Pain management" },
                  { id: "priority_eating", text: "Comfortable eating" },
                  { id: "priority_recovery", text: "Quick recovery and return to daily life after surgery" }
                ],
                next: {
                  priority_cost: {
                    question: "Is there any reason you've been hesitating about treatment?",
                    options: [
                      { id: "hesitation_cost", text: "Due to cost" },
                      { id: "hesitation_fear", text: "Due to pain/dental anxiety" },
                      { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" },
                      { id: "hesitation_none", text: "No particular reason" }
                    ]
                  },
                  priority_pain: {
                    question: "Is there any reason you've been hesitating about treatment?",
                    options: [
                      { id: "hesitation_cost", text: "Due to cost" },
                      { id: "hesitation_fear", text: "Due to pain/dental anxiety" },
                      { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" },
                      { id: "hesitation_none", text: "No particular reason" }
                    ]
                  },
                  priority_eating: {
                    question: "Is there any reason you've been hesitating about treatment?",
                    options: [
                      { id: "hesitation_cost", text: "Due to cost" },
                      { id: "hesitation_fear", text: "Due to pain/dental anxiety" },
                      { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" },
                      { id: "hesitation_none", text: "No particular reason" }
                    ]
                  },
                  priority_recovery: {
                    question: "Is there any reason you've been hesitating about treatment?",
                    options: [
                      { id: "hesitation_cost", text: "Due to cost" },
                      { id: "hesitation_fear", text: "Due to pain/dental anxiety" },
                      { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" },
                      { id: "hesitation_none", text: "No particular reason" }
                    ]
                  }
                }
              },
              disease_heart: {
                question: "What is most important to you in treatment?",
                options: [
                  { id: "priority_cost", text: "Cost" },
                  { id: "priority_pain", text: "Pain management" },
                  { id: "priority_eating", text: "Comfortable eating" },
                  { id: "priority_recovery", text: "Quick recovery and return to daily life after surgery" }
                ],
                next: {
                  priority_cost: {
                    question: "Is there any reason you've been hesitating about treatment?",
                    options: [
                      { id: "hesitation_cost", text: "Due to cost" },
                      { id: "hesitation_fear", text: "Due to pain/dental anxiety" },
                      { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" },
                      { id: "hesitation_none", text: "No particular reason" }
                    ]
                  },
                  priority_pain: {
                    question: "Is there any reason you've been hesitating about treatment?",
                    options: [
                      { id: "hesitation_cost", text: "Due to cost" },
                      { id: "hesitation_fear", text: "Due to pain/dental anxiety" },
                      { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" },
                      { id: "hesitation_none", text: "No particular reason" }
                    ]
                  },
                  priority_eating: {
                    question: "Is there any reason you've been hesitating about treatment?",
                    options: [
                      { id: "hesitation_cost", text: "Due to cost" },
                      { id: "hesitation_fear", text: "Due to pain/dental anxiety" },
                      { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" },
                      { id: "hesitation_none", text: "No particular reason" }
                    ]
                  },
                  priority_recovery: {
                    question: "Is there any reason you've been hesitating about treatment?",
                    options: [
                      { id: "hesitation_cost", text: "Due to cost" },
                      { id: "hesitation_fear", text: "Due to pain/dental anxiety" },
                      { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" },
                      { id: "hesitation_none", text: "No particular reason" }
                    ]
                  }
                }
              },
              disease_none: {
                question: "What is most important to you in treatment?",
                options: [
                  { id: "priority_cost", text: "Cost" },
                  { id: "priority_pain", text: "Pain management" },
                  { id: "priority_eating", text: "Comfortable eating" },
                  { id: "priority_recovery", text: "Quick recovery and return to daily life after surgery" }
                ],
                next: {
                  priority_cost: {
                    question: "Is there any reason you've been hesitating about treatment?",
                    options: [
                      { id: "hesitation_cost", text: "Due to cost" },
                      { id: "hesitation_fear", text: "Due to pain/dental anxiety" },
                      { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" },
                      { id: "hesitation_none", text: "No particular reason" }
                    ]
                  },
                  priority_pain: {
                    question: "Is there any reason you've been hesitating about treatment?",
                    options: [
                      { id: "hesitation_cost", text: "Due to cost" },
                      { id: "hesitation_fear", text: "Due to pain/dental anxiety" },
                      { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" },
                      { id: "hesitation_none", text: "No particular reason" }
                    ]
                  },
                  priority_eating: {
                    question: "Is there any reason you've been hesitating about treatment?",
                    options: [
                      { id: "hesitation_cost", text: "Due to cost" },
                      { id: "hesitation_fear", text: "Due to pain/dental anxiety" },
                      { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" },
                      { id: "hesitation_none", text: "No particular reason" }
                    ]
                  },
                  priority_recovery: {
                    question: "Is there any reason you've been hesitating about treatment?",
                    options: [
                      { id: "hesitation_cost", text: "Due to cost" },
                      { id: "hesitation_fear", text: "Due to pain/dental anxiety" },
                      { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" },
                      { id: "hesitation_none", text: "No particular reason" }
                    ]
                  }
                }
              }
            }
          },
          denture_no: {
            question: "Do you have any systemic diseases?",
            options: [
              { id: "disease_diabetes", text: "Diabetes" },
              { id: "disease_hypertension", text: "Hypertension" },
              { id: "disease_osteoporosis", text: "Osteoporosis" },
              { id: "disease_heart", text: "Heart disease" },
              { id: "disease_none", text: "No" }
            ],
            next: {
              disease_diabetes: {
                question: "What is most important to you in treatment?",
                options: [
                  { id: "priority_cost", text: "Cost" },
                  { id: "priority_pain", text: "Pain management" },
                  { id: "priority_eating", text: "Comfortable eating" },
                  { id: "priority_recovery", text: "Quick recovery and return to daily life after surgery" }
                ],
                next: {
                  priority_cost: {
                    question: "Is there any reason you've been hesitating about treatment?",
                    options: [
                      { id: "hesitation_cost", text: "Due to cost" },
                      { id: "hesitation_fear", text: "Due to pain/dental anxiety" },
                      { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" },
                      { id: "hesitation_none", text: "No particular reason" }
                    ]
                  },
                  priority_pain: {
                    question: "Is there any reason you've been hesitating about treatment?",
                    options: [
                      { id: "hesitation_cost", text: "Due to cost" },
                      { id: "hesitation_fear", text: "Due to pain/dental anxiety" },
                      { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" },
                      { id: "hesitation_none", text: "No particular reason" }
                    ]
                  },
                  priority_eating: {
                    question: "Is there any reason you've been hesitating about treatment?",
                    options: [
                      { id: "hesitation_cost", text: "Due to cost" },
                      { id: "hesitation_fear", text: "Due to pain/dental anxiety" },
                      { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" },
                      { id: "hesitation_none", text: "No particular reason" }
                    ]
                  },
                  priority_recovery: {
                    question: "Is there any reason you've been hesitating about treatment?",
                    options: [
                      { id: "hesitation_cost", text: "Due to cost" },
                      { id: "hesitation_fear", text: "Due to pain/dental anxiety" },
                      { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" },
                      { id: "hesitation_none", text: "No particular reason" }
                    ]
                  }
                }
              },
              disease_hypertension: {
                question: "What is most important to you in treatment?",
                options: [
                  { id: "priority_cost", text: "Cost" },
                  { id: "priority_pain", text: "Pain management" },
                  { id: "priority_eating", text: "Comfortable eating" },
                  { id: "priority_recovery", text: "Quick recovery and return to daily life after surgery" }
                ],
                next: {
                  priority_cost: {
                    question: "Is there any reason you've been hesitating about treatment?",
                    options: [
                      { id: "hesitation_cost", text: "Due to cost" },
                      { id: "hesitation_fear", text: "Due to pain/dental anxiety" },
                      { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" },
                      { id: "hesitation_none", text: "No particular reason" }
                    ]
                  },
                  priority_pain: {
                    question: "Is there any reason you've been hesitating about treatment?",
                    options: [
                      { id: "hesitation_cost", text: "Due to cost" },
                      { id: "hesitation_fear", text: "Due to pain/dental anxiety" },
                      { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" },
                      { id: "hesitation_none", text: "No particular reason" }
                    ]
                  },
                  priority_eating: {
                    question: "Is there any reason you've been hesitating about treatment?",
                    options: [
                      { id: "hesitation_cost", text: "Due to cost" },
                      { id: "hesitation_fear", text: "Due to pain/dental anxiety" },
                      { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" },
                      { id: "hesitation_none", text: "No particular reason" }
                    ]
                  },
                  priority_recovery: {
                    question: "Is there any reason you've been hesitating about treatment?",
                    options: [
                      { id: "hesitation_cost", text: "Due to cost" },
                      { id: "hesitation_fear", text: "Due to pain/dental anxiety" },
                      { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" },
                      { id: "hesitation_none", text: "No particular reason" }
                    ]
                  }
                }
              },
              disease_osteoporosis: {
                question: "What is most important to you in treatment?",
                options: [
                  { id: "priority_cost", text: "Cost" },
                  { id: "priority_pain", text: "Pain management" },
                  { id: "priority_eating", text: "Comfortable eating" },
                  { id: "priority_recovery", text: "Quick recovery and return to daily life after surgery" }
                ],
                next: {
                  priority_cost: {
                    question: "Is there any reason you've been hesitating about treatment?",
                    options: [
                      { id: "hesitation_cost", text: "Due to cost" },
                      { id: "hesitation_fear", text: "Due to pain/dental anxiety" },
                      { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" },
                      { id: "hesitation_none", text: "No particular reason" }
                    ]
                  },
                  priority_pain: {
                    question: "Is there any reason you've been hesitating about treatment?",
                    options: [
                      { id: "hesitation_cost", text: "Due to cost" },
                      { id: "hesitation_fear", text: "Due to pain/dental anxiety" },
                      { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" },
                      { id: "hesitation_none", text: "No particular reason" }
                    ]
                  },
                  priority_eating: {
                    question: "Is there any reason you've been hesitating about treatment?",
                    options: [
                      { id: "hesitation_cost", text: "Due to cost" },
                      { id: "hesitation_fear", text: "Due to pain/dental anxiety" },
                      { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" },
                      { id: "hesitation_none", text: "No particular reason" }
                    ]
                  },
                  priority_recovery: {
                    question: "Is there any reason you've been hesitating about treatment?",
                    options: [
                      { id: "hesitation_cost", text: "Due to cost" },
                      { id: "hesitation_fear", text: "Due to pain/dental anxiety" },
                      { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" },
                      { id: "hesitation_none", text: "No particular reason" }
                    ]
                  }
                }
              },
              disease_heart: {
                question: "What is most important to you in treatment?",
                options: [
                  { id: "priority_cost", text: "Cost" },
                  { id: "priority_pain", text: "Pain management" },
                  { id: "priority_eating", text: "Comfortable eating" },
                  { id: "priority_recovery", text: "Quick recovery and return to daily life after surgery" }
                ],
                next: {
                  priority_cost: {
                    question: "Is there any reason you've been hesitating about treatment?",
                    options: [
                      { id: "hesitation_cost", text: "Due to cost" },
                      { id: "hesitation_fear", text: "Due to pain/dental anxiety" },
                      { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" },
                      { id: "hesitation_none", text: "No particular reason" }
                    ]
                  },
                  priority_pain: {
                    question: "Is there any reason you've been hesitating about treatment?",
                    options: [
                      { id: "hesitation_cost", text: "Due to cost" },
                      { id: "hesitation_fear", text: "Due to pain/dental anxiety" },
                      { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" },
                      { id: "hesitation_none", text: "No particular reason" }
                    ]
                  },
                  priority_eating: {
                    question: "Is there any reason you've been hesitating about treatment?",
                    options: [
                      { id: "hesitation_cost", text: "Due to cost" },
                      { id: "hesitation_fear", text: "Due to pain/dental anxiety" },
                      { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" },
                      { id: "hesitation_none", text: "No particular reason" }
                    ]
                  },
                  priority_recovery: {
                    question: "Is there any reason you've been hesitating about treatment?",
                    options: [
                      { id: "hesitation_cost", text: "Due to cost" },
                      { id: "hesitation_fear", text: "Due to pain/dental anxiety" },
                      { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" },
                      { id: "hesitation_none", text: "No particular reason" }
                    ]
                  }
                }
              },
              disease_none: {
                question: "What is most important to you in treatment?",
                options: [
                  { id: "priority_cost", text: "Cost" },
                  { id: "priority_pain", text: "Pain management" },
                  { id: "priority_eating", text: "Comfortable eating" },
                  { id: "priority_recovery", text: "Quick recovery and return to daily life after surgery" }
                ],
                next: {
                  priority_cost: {
                    question: "Is there any reason you've been hesitating about treatment?",
                    options: [
                      { id: "hesitation_cost", text: "Due to cost" },
                      { id: "hesitation_fear", text: "Due to pain/dental anxiety" },
                      { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" },
                      { id: "hesitation_none", text: "No particular reason" }
                    ]
                  },
                  priority_pain: {
                    question: "Is there any reason you've been hesitating about treatment?",
                    options: [
                      { id: "hesitation_cost", text: "Due to cost" },
                      { id: "hesitation_fear", text: "Due to pain/dental anxiety" },
                      { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" },
                      { id: "hesitation_none", text: "No particular reason" }
                    ]
                  },
                  priority_eating: {
                    question: "Is there any reason you've been hesitating about treatment?",
                    options: [
                      { id: "hesitation_cost", text: "Due to cost" },
                      { id: "hesitation_fear", text: "Due to pain/dental anxiety" },
                      { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" },
                      { id: "hesitation_none", text: "No particular reason" }
                    ]
                  },
                  priority_recovery: {
                    question: "Is there any reason you've been hesitating about treatment?",
                    options: [
                      { id: "hesitation_cost", text: "Due to cost" },
                      { id: "hesitation_fear", text: "Due to pain/dental anxiety" },
                      { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" },
                      { id: "hesitation_none", text: "No particular reason" }
                    ]
                  }
                }
              }
            }
          }
        }
      },
      // Same flow applied to other options (same structure as missing_upper_all)
      missing_all: {
        question: "Are you currently wearing dentures?",
        options: [
          { id: "denture_yes", text: "Yes" },
          { id: "denture_no", text: "No" }
        ],
        next: {
          denture_yes: {
            question: "Do you have any systemic diseases?",
            options: [
              { id: "disease_diabetes", text: "Diabetes" },
              { id: "disease_hypertension", text: "Hypertension" },
              { id: "disease_osteoporosis", text: "Osteoporosis" },
              { id: "disease_heart", text: "Heart disease" },
              { id: "disease_none", text: "No" }
            ],
            next: {
              disease_diabetes: { question: "What is most important to you in treatment?", options: [{ id: "priority_cost", text: "Cost" }, { id: "priority_pain", text: "Pain management" }, { id: "priority_eating", text: "Comfortable eating" }, { id: "priority_recovery", text: "Quick recovery and return to daily life after surgery" }], next: { priority_cost: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_pain: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_eating: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_recovery: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] } } },
              disease_hypertension: { question: "What is most important to you in treatment?", options: [{ id: "priority_cost", text: "Cost" }, { id: "priority_pain", text: "Pain management" }, { id: "priority_eating", text: "Comfortable eating" }, { id: "priority_recovery", text: "Quick recovery and return to daily life after surgery" }], next: { priority_cost: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_pain: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_eating: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_recovery: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] } } },
              disease_osteoporosis: { question: "What is most important to you in treatment?", options: [{ id: "priority_cost", text: "Cost" }, { id: "priority_pain", text: "Pain management" }, { id: "priority_eating", text: "Comfortable eating" }, { id: "priority_recovery", text: "Quick recovery and return to daily life after surgery" }], next: { priority_cost: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_pain: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_eating: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_recovery: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] } } },
              disease_heart: { question: "What is most important to you in treatment?", options: [{ id: "priority_cost", text: "Cost" }, { id: "priority_pain", text: "Pain management" }, { id: "priority_eating", text: "Comfortable eating" }, { id: "priority_recovery", text: "Quick recovery and return to daily life after surgery" }], next: { priority_cost: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_pain: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_eating: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_recovery: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] } } },
              disease_none: { question: "What is most important to you in treatment?", options: [{ id: "priority_cost", text: "Cost" }, { id: "priority_pain", text: "Pain management" }, { id: "priority_eating", text: "Comfortable eating" }, { id: "priority_recovery", text: "Quick recovery and return to daily life after surgery" }], next: { priority_cost: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_pain: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_eating: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_recovery: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] } } }
            }
          },
          denture_no: {
            question: "Do you have any systemic diseases?",
            options: [
              { id: "disease_diabetes", text: "Diabetes" },
              { id: "disease_hypertension", text: "Hypertension" },
              { id: "disease_osteoporosis", text: "Osteoporosis" },
              { id: "disease_heart", text: "Heart disease" },
              { id: "disease_none", text: "No" }
            ],
            next: {
              disease_diabetes: { question: "What is most important to you in treatment?", options: [{ id: "priority_cost", text: "Cost" }, { id: "priority_pain", text: "Pain management" }, { id: "priority_eating", text: "Comfortable eating" }, { id: "priority_recovery", text: "Quick recovery and return to daily life after surgery" }], next: { priority_cost: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_pain: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_eating: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_recovery: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] } } },
              disease_hypertension: { question: "What is most important to you in treatment?", options: [{ id: "priority_cost", text: "Cost" }, { id: "priority_pain", text: "Pain management" }, { id: "priority_eating", text: "Comfortable eating" }, { id: "priority_recovery", text: "Quick recovery and return to daily life after surgery" }], next: { priority_cost: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_pain: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_eating: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_recovery: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] } } },
              disease_osteoporosis: { question: "What is most important to you in treatment?", options: [{ id: "priority_cost", text: "Cost" }, { id: "priority_pain", text: "Pain management" }, { id: "priority_eating", text: "Comfortable eating" }, { id: "priority_recovery", text: "Quick recovery and return to daily life after surgery" }], next: { priority_cost: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_pain: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_eating: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_recovery: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] } } },
              disease_heart: { question: "What is most important to you in treatment?", options: [{ id: "priority_cost", text: "Cost" }, { id: "priority_pain", text: "Pain management" }, { id: "priority_eating", text: "Comfortable eating" }, { id: "priority_recovery", text: "Quick recovery and return to daily life after surgery" }], next: { priority_cost: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_pain: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_eating: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_recovery: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] } } },
              disease_none: { question: "What is most important to you in treatment?", options: [{ id: "priority_cost", text: "Cost" }, { id: "priority_pain", text: "Pain management" }, { id: "priority_eating", text: "Comfortable eating" }, { id: "priority_recovery", text: "Quick recovery and return to daily life after surgery" }], next: { priority_cost: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_pain: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_eating: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_recovery: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] } } }
            }
          }
        }
      },
      missing_lower_all: {
        question: "Are you currently wearing dentures?",
        options: [
          { id: "denture_yes", text: "Yes" },
          { id: "denture_no", text: "No" }
        ],
        next: {
          denture_yes: {
            question: "Do you have any systemic diseases?",
            options: [
              { id: "disease_diabetes", text: "Diabetes" },
              { id: "disease_hypertension", text: "Hypertension" },
              { id: "disease_osteoporosis", text: "Osteoporosis" },
              { id: "disease_heart", text: "Heart disease" },
              { id: "disease_none", text: "No" }
            ],
            next: {
              disease_diabetes: { question: "What is most important to you in treatment?", options: [{ id: "priority_cost", text: "Cost" }, { id: "priority_pain", text: "Pain management" }, { id: "priority_eating", text: "Comfortable eating" }, { id: "priority_recovery", text: "Quick recovery and return to daily life after surgery" }], next: { priority_cost: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_pain: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_eating: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_recovery: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] } } },
              disease_hypertension: { question: "What is most important to you in treatment?", options: [{ id: "priority_cost", text: "Cost" }, { id: "priority_pain", text: "Pain management" }, { id: "priority_eating", text: "Comfortable eating" }, { id: "priority_recovery", text: "Quick recovery and return to daily life after surgery" }], next: { priority_cost: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_pain: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_eating: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_recovery: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] } } },
              disease_osteoporosis: { question: "What is most important to you in treatment?", options: [{ id: "priority_cost", text: "Cost" }, { id: "priority_pain", text: "Pain management" }, { id: "priority_eating", text: "Comfortable eating" }, { id: "priority_recovery", text: "Quick recovery and return to daily life after surgery" }], next: { priority_cost: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_pain: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_eating: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_recovery: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] } } },
              disease_heart: { question: "What is most important to you in treatment?", options: [{ id: "priority_cost", text: "Cost" }, { id: "priority_pain", text: "Pain management" }, { id: "priority_eating", text: "Comfortable eating" }, { id: "priority_recovery", text: "Quick recovery and return to daily life after surgery" }], next: { priority_cost: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_pain: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_eating: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_recovery: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] } } },
              disease_none: { question: "What is most important to you in treatment?", options: [{ id: "priority_cost", text: "Cost" }, { id: "priority_pain", text: "Pain management" }, { id: "priority_eating", text: "Comfortable eating" }, { id: "priority_recovery", text: "Quick recovery and return to daily life after surgery" }], next: { priority_cost: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_pain: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_eating: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_recovery: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] } } }
            }
          },
          denture_no: {
            question: "Do you have any systemic diseases?",
            options: [
              { id: "disease_diabetes", text: "Diabetes" },
              { id: "disease_hypertension", text: "Hypertension" },
              { id: "disease_osteoporosis", text: "Osteoporosis" },
              { id: "disease_heart", text: "Heart disease" },
              { id: "disease_none", text: "No" }
            ],
            next: {
              disease_diabetes: { question: "What is most important to you in treatment?", options: [{ id: "priority_cost", text: "Cost" }, { id: "priority_pain", text: "Pain management" }, { id: "priority_eating", text: "Comfortable eating" }, { id: "priority_recovery", text: "Quick recovery and return to daily life after surgery" }], next: { priority_cost: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_pain: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_eating: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_recovery: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] } } },
              disease_hypertension: { question: "What is most important to you in treatment?", options: [{ id: "priority_cost", text: "Cost" }, { id: "priority_pain", text: "Pain management" }, { id: "priority_eating", text: "Comfortable eating" }, { id: "priority_recovery", text: "Quick recovery and return to daily life after surgery" }], next: { priority_cost: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_pain: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_eating: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_recovery: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] } } },
              disease_osteoporosis: { question: "What is most important to you in treatment?", options: [{ id: "priority_cost", text: "Cost" }, { id: "priority_pain", text: "Pain management" }, { id: "priority_eating", text: "Comfortable eating" }, { id: "priority_recovery", text: "Quick recovery and return to daily life after surgery" }], next: { priority_cost: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_pain: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_eating: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_recovery: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] } } },
              disease_heart: { question: "What is most important to you in treatment?", options: [{ id: "priority_cost", text: "Cost" }, { id: "priority_pain", text: "Pain management" }, { id: "priority_eating", text: "Comfortable eating" }, { id: "priority_recovery", text: "Quick recovery and return to daily life after surgery" }], next: { priority_cost: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_pain: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_eating: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_recovery: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] } } },
              disease_none: { question: "What is most important to you in treatment?", options: [{ id: "priority_cost", text: "Cost" }, { id: "priority_pain", text: "Pain management" }, { id: "priority_eating", text: "Comfortable eating" }, { id: "priority_recovery", text: "Quick recovery and return to daily life after surgery" }], next: { priority_cost: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_pain: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_eating: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_recovery: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] } } }
            }
          }
        }
      },
      missing_partial: {
        question: "Which area has missing teeth or teeth scheduled for extraction?",
        options: [
          { id: "location_front", text: "Front teeth area" },
          { id: "location_back", text: "Molar area" },
          { id: "location_both", text: "Both front teeth and molars" }
        ],
        next: {
          location_front: {
            question: "Do you have any systemic diseases?",
            options: [
              { id: "disease_diabetes", text: "Diabetes" },
              { id: "disease_hypertension", text: "Hypertension" },
              { id: "disease_osteoporosis", text: "Osteoporosis" },
              { id: "disease_heart", text: "Heart disease" },
              { id: "disease_none", text: "No" }
            ],
            next: {
              disease_diabetes: { question: "What is most important to you in treatment?", options: [{ id: "priority_cost", text: "Cost" }, { id: "priority_pain", text: "Pain management" }, { id: "priority_eating", text: "Comfortable eating" }, { id: "priority_recovery", text: "Quick recovery and return to daily life after surgery" }], next: { priority_cost: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_pain: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_eating: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_recovery: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] } } },
              disease_hypertension: { question: "What is most important to you in treatment?", options: [{ id: "priority_cost", text: "Cost" }, { id: "priority_pain", text: "Pain management" }, { id: "priority_eating", text: "Comfortable eating" }, { id: "priority_recovery", text: "Quick recovery and return to daily life after surgery" }], next: { priority_cost: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_pain: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_eating: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_recovery: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] } } },
              disease_osteoporosis: { question: "What is most important to you in treatment?", options: [{ id: "priority_cost", text: "Cost" }, { id: "priority_pain", text: "Pain management" }, { id: "priority_eating", text: "Comfortable eating" }, { id: "priority_recovery", text: "Quick recovery and return to daily life after surgery" }], next: { priority_cost: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_pain: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_eating: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_recovery: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] } } },
              disease_heart: { question: "What is most important to you in treatment?", options: [{ id: "priority_cost", text: "Cost" }, { id: "priority_pain", text: "Pain management" }, { id: "priority_eating", text: "Comfortable eating" }, { id: "priority_recovery", text: "Quick recovery and return to daily life after surgery" }], next: { priority_cost: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_pain: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_eating: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_recovery: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] } } },
              disease_none: { question: "What is most important to you in treatment?", options: [{ id: "priority_cost", text: "Cost" }, { id: "priority_pain", text: "Pain management" }, { id: "priority_eating", text: "Comfortable eating" }, { id: "priority_recovery", text: "Quick recovery and return to daily life after surgery" }], next: { priority_cost: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_pain: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_eating: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_recovery: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] } } }
            }
          },
          location_back: {
            question: "Do you have any systemic diseases?",
            options: [
              { id: "disease_diabetes", text: "Diabetes" },
              { id: "disease_hypertension", text: "Hypertension" },
              { id: "disease_osteoporosis", text: "Osteoporosis" },
              { id: "disease_heart", text: "Heart disease" },
              { id: "disease_none", text: "No" }
            ],
            next: {
              disease_diabetes: { question: "What is most important to you in treatment?", options: [{ id: "priority_cost", text: "Cost" }, { id: "priority_pain", text: "Pain management" }, { id: "priority_eating", text: "Comfortable eating" }, { id: "priority_recovery", text: "Quick recovery and return to daily life after surgery" }], next: { priority_cost: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_pain: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_eating: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_recovery: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] } } },
              disease_hypertension: { question: "What is most important to you in treatment?", options: [{ id: "priority_cost", text: "Cost" }, { id: "priority_pain", text: "Pain management" }, { id: "priority_eating", text: "Comfortable eating" }, { id: "priority_recovery", text: "Quick recovery and return to daily life after surgery" }], next: { priority_cost: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_pain: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_eating: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_recovery: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] } } },
              disease_osteoporosis: { question: "What is most important to you in treatment?", options: [{ id: "priority_cost", text: "Cost" }, { id: "priority_pain", text: "Pain management" }, { id: "priority_eating", text: "Comfortable eating" }, { id: "priority_recovery", text: "Quick recovery and return to daily life after surgery" }], next: { priority_cost: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_pain: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_eating: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_recovery: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] } } },
              disease_heart: { question: "What is most important to you in treatment?", options: [{ id: "priority_cost", text: "Cost" }, { id: "priority_pain", text: "Pain management" }, { id: "priority_eating", text: "Comfortable eating" }, { id: "priority_recovery", text: "Quick recovery and return to daily life after surgery" }], next: { priority_cost: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_pain: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_eating: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_recovery: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] } } },
              disease_none: { question: "What is most important to you in treatment?", options: [{ id: "priority_cost", text: "Cost" }, { id: "priority_pain", text: "Pain management" }, { id: "priority_eating", text: "Comfortable eating" }, { id: "priority_recovery", text: "Quick recovery and return to daily life after surgery" }], next: { priority_cost: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_pain: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_eating: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_recovery: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] } } }
            }
          },
          location_both: {
            question: "Do you have any systemic diseases?",
            options: [
              { id: "disease_diabetes", text: "Diabetes" },
              { id: "disease_hypertension", text: "Hypertension" },
              { id: "disease_osteoporosis", text: "Osteoporosis" },
              { id: "disease_heart", text: "Heart disease" },
              { id: "disease_none", text: "No" }
            ],
            next: {
              disease_diabetes: { question: "What is most important to you in treatment?", options: [{ id: "priority_cost", text: "Cost" }, { id: "priority_pain", text: "Pain management" }, { id: "priority_eating", text: "Comfortable eating" }, { id: "priority_recovery", text: "Quick recovery and return to daily life after surgery" }], next: { priority_cost: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_pain: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_eating: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_recovery: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] } } },
              disease_hypertension: { question: "What is most important to you in treatment?", options: [{ id: "priority_cost", text: "Cost" }, { id: "priority_pain", text: "Pain management" }, { id: "priority_eating", text: "Comfortable eating" }, { id: "priority_recovery", text: "Quick recovery and return to daily life after surgery" }], next: { priority_cost: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_pain: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_eating: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_recovery: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] } } },
              disease_osteoporosis: { question: "What is most important to you in treatment?", options: [{ id: "priority_cost", text: "Cost" }, { id: "priority_pain", text: "Pain management" }, { id: "priority_eating", text: "Comfortable eating" }, { id: "priority_recovery", text: "Quick recovery and return to daily life after surgery" }], next: { priority_cost: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_pain: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_eating: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_recovery: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] } } },
              disease_heart: { question: "What is most important to you in treatment?", options: [{ id: "priority_cost", text: "Cost" }, { id: "priority_pain", text: "Pain management" }, { id: "priority_eating", text: "Comfortable eating" }, { id: "priority_recovery", text: "Quick recovery and return to daily life after surgery" }], next: { priority_cost: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_pain: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_eating: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_recovery: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] } } },
              disease_none: { question: "What is most important to you in treatment?", options: [{ id: "priority_cost", text: "Cost" }, { id: "priority_pain", text: "Pain management" }, { id: "priority_eating", text: "Comfortable eating" }, { id: "priority_recovery", text: "Quick recovery and return to daily life after surgery" }], next: { priority_cost: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_pain: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_eating: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_recovery: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] } } }
            }
          }
        }
      },
      implant_revision: {
        question: "Are you currently wearing dentures?",
        options: [
          { id: "denture_yes", text: "Yes" },
          { id: "denture_no", text: "No" }
        ],
        next: {
          denture_yes: {
            question: "Do you have any systemic diseases?",
            options: [
              { id: "disease_diabetes", text: "Diabetes" },
              { id: "disease_hypertension", text: "Hypertension" },
              { id: "disease_osteoporosis", text: "Osteoporosis" },
              { id: "disease_heart", text: "Heart disease" },
              { id: "disease_none", text: "No" }
            ],
            next: {
              disease_diabetes: { question: "What is most important to you in treatment?", options: [{ id: "priority_cost", text: "Cost" }, { id: "priority_pain", text: "Pain management" }, { id: "priority_eating", text: "Comfortable eating" }, { id: "priority_recovery", text: "Quick recovery and return to daily life after surgery" }], next: { priority_cost: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_pain: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_eating: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_recovery: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] } } },
              disease_hypertension: { question: "What is most important to you in treatment?", options: [{ id: "priority_cost", text: "Cost" }, { id: "priority_pain", text: "Pain management" }, { id: "priority_eating", text: "Comfortable eating" }, { id: "priority_recovery", text: "Quick recovery and return to daily life after surgery" }], next: { priority_cost: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_pain: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_eating: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_recovery: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] } } },
              disease_osteoporosis: { question: "What is most important to you in treatment?", options: [{ id: "priority_cost", text: "Cost" }, { id: "priority_pain", text: "Pain management" }, { id: "priority_eating", text: "Comfortable eating" }, { id: "priority_recovery", text: "Quick recovery and return to daily life after surgery" }], next: { priority_cost: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_pain: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_eating: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_recovery: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] } } },
              disease_heart: { question: "What is most important to you in treatment?", options: [{ id: "priority_cost", text: "Cost" }, { id: "priority_pain", text: "Pain management" }, { id: "priority_eating", text: "Comfortable eating" }, { id: "priority_recovery", text: "Quick recovery and return to daily life after surgery" }], next: { priority_cost: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_pain: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_eating: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_recovery: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] } } },
              disease_none: { question: "What is most important to you in treatment?", options: [{ id: "priority_cost", text: "Cost" }, { id: "priority_pain", text: "Pain management" }, { id: "priority_eating", text: "Comfortable eating" }, { id: "priority_recovery", text: "Quick recovery and return to daily life after surgery" }], next: { priority_cost: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_pain: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_eating: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_recovery: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] } } }
            }
          },
          denture_no: {
            question: "Do you have any systemic diseases?",
            options: [
              { id: "disease_diabetes", text: "Diabetes" },
              { id: "disease_hypertension", text: "Hypertension" },
              { id: "disease_osteoporosis", text: "Osteoporosis" },
              { id: "disease_heart", text: "Heart disease" },
              { id: "disease_none", text: "No" }
            ],
            next: {
              disease_diabetes: { question: "What is most important to you in treatment?", options: [{ id: "priority_cost", text: "Cost" }, { id: "priority_pain", text: "Pain management" }, { id: "priority_eating", text: "Comfortable eating" }, { id: "priority_recovery", text: "Quick recovery and return to daily life after surgery" }], next: { priority_cost: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_pain: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_eating: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_recovery: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] } } },
              disease_hypertension: { question: "What is most important to you in treatment?", options: [{ id: "priority_cost", text: "Cost" }, { id: "priority_pain", text: "Pain management" }, { id: "priority_eating", text: "Comfortable eating" }, { id: "priority_recovery", text: "Quick recovery and return to daily life after surgery" }], next: { priority_cost: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_pain: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_eating: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_recovery: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] } } },
              disease_osteoporosis: { question: "What is most important to you in treatment?", options: [{ id: "priority_cost", text: "Cost" }, { id: "priority_pain", text: "Pain management" }, { id: "priority_eating", text: "Comfortable eating" }, { id: "priority_recovery", text: "Quick recovery and return to daily life after surgery" }], next: { priority_cost: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_pain: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_eating: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_recovery: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] } } },
              disease_heart: { question: "What is most important to you in treatment?", options: [{ id: "priority_cost", text: "Cost" }, { id: "priority_pain", text: "Pain management" }, { id: "priority_eating", text: "Comfortable eating" }, { id: "priority_recovery", text: "Quick recovery and return to daily life after surgery" }], next: { priority_cost: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_pain: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_eating: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_recovery: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] } } },
              disease_none: { question: "What is most important to you in treatment?", options: [{ id: "priority_cost", text: "Cost" }, { id: "priority_pain", text: "Pain management" }, { id: "priority_eating", text: "Comfortable eating" }, { id: "priority_recovery", text: "Quick recovery and return to daily life after surgery" }], next: { priority_cost: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_pain: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_eating: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] }, priority_recovery: { question: "Is there any reason you've been hesitating about treatment?", options: [{ id: "hesitation_cost", text: "Due to cost" }, { id: "hesitation_fear", text: "Due to pain/dental anxiety" }, { id: "hesitation_clinic", text: "Difficulty choosing the right dental clinic" }, { id: "hesitation_none", text: "No particular reason" }] } } }
            }
          }
        }
      }
    }
  },

  // Gum related questions
  gum_issue: {
    question: "What symptoms do you have?",
    options: [
      { id: "gum_bleeding", text: "My gums are bleeding" },
      { id: "gum_swelling", text: "My gums are swollen" },
      { id: "gum_recession", text: "My gums have receded" },
      { id: "gum_wobbly", text: "My teeth are loose" }
    ],
    next: {
      gum_bleeding: {
        question: "When do you experience bleeding?",
        options: [
          { id: "bleeding_brushing", text: "Only when brushing" },
          { id: "bleeding_often", text: "It bleeds frequently" },
          { id: "bleeding_always", text: "It bleeds even at rest" }
        ]
      },
      gum_swelling: {
        question: "Do you also have pain along with the swelling?",
        options: [
          { id: "swelling_pain_yes", text: "Yes, it hurts" },
          { id: "swelling_pain_no", text: "No, just swelling" }
        ]
      },
      gum_recession: {
        question: "Are your teeth sensitive?",
        options: [
          { id: "recession_sensitive_yes", text: "Yes, they're sensitive" },
          { id: "recession_sensitive_no", text: "No" }
        ]
      },
      gum_wobbly: {
        question: "How severe is the looseness?",
        options: [
          { id: "wobbly_slight", text: "Slightly loose" },
          { id: "wobbly_severe", text: "Very loose" }
        ]
      }
    }
  },

  // Regular checkup related
  checkup: {
    question: "Is there anything specific you're concerned about?",
    options: [
      { id: "checkup_prevention", text: "Cavity/gum prevention" },
      { id: "checkup_cleaning", text: "I want scaling" },
      { id: "checkup_concern", text: "I'm concerned about a specific tooth" },
      { id: "checkup_general", text: "Just a general checkup" }
    ]
  }
};
