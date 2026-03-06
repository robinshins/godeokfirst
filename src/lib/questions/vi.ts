import { LanguageQuestionTree } from './types';
export const QUESTION_TREE_VI: LanguageQuestionTree = {
  // Bước 1: Đánh giá triệu chứng ban đầu
  initial: {
    question: "Bạn có triệu chứng hoặc khó chịu gì?",
    options: [
      { id: "pain", text: "Tôi bị đau" },
      { id: "aesthetic", text: "Tôi muốn cải thiện thẩm mỹ" },
      { id: "missing_tooth", text: "Tôi bị mất răng" },
      { id: "gum_issue", text: "Tôi có vấn đề về nướu" },
      { id: "checkup", text: "Kiểm tra định kỳ và phòng ngừa" }
    ]
  },

  // Câu hỏi liên quan đến sâu răng/điều trị tủy (câu hỏi đầu tiên)
  cavity_nerve: {
    question: "Tình trạng khó chịu hiện tại của bạn là gì?",
    options: [
      { id: "cavity_pain", text: "Răng đau" },
      { id: "cavity_sensitive", text: "Răng ê buốt" },
      { id: "cavity_broken", text: "Răng bị vỡ" },
      { id: "cavity_eating", text: "Khó chịu khi ăn" },
      { id: "cavity_dark", text: "Răng có vẻ đen" },
      { id: "cavity_brushing", text: "Khó chịu khi đánh răng" }
    ],
    next: {
      cavity_pain: {
        question: "Một răng cụ thể khó chịu hay vùng rộng khó chịu?",
        options: [
          { id: "specific_tooth", text: "Một răng cụ thể khó chịu" },
          { id: "wide_area", text: "Vùng rộng bên trái/phải trên/dưới khó chịu" }
        ]
      },
      cavity_sensitive: {
        question: "Một răng cụ thể khó chịu hay vùng rộng khó chịu?",
        options: [
          { id: "specific_tooth", text: "Một răng cụ thể khó chịu" },
          { id: "wide_area", text: "Vùng rộng bên trái/phải trên/dưới khó chịu" }
        ]
      },
      cavity_broken: {
        question: "Răng bị vỡ có đau không?",
        options: [
          { id: "broken_painful", text: "Có, vỡ và đau" },
          { id: "broken_not_painful", text: "Vỡ nhưng không đau" }
        ]
      },
      cavity_eating: {
        question: "Một răng cụ thể khó chịu hay vùng rộng khó chịu?",
        options: [
          { id: "specific_tooth", text: "Một răng cụ thể khó chịu" },
          { id: "wide_area", text: "Vùng rộng bên trái/phải trên/dưới khó chịu" }
        ]
      },
      cavity_dark: {
        question: "Răng có vẻ đen ở đâu?",
        options: [
          { id: "dark_front", text: "Vùng răng cửa" },
          { id: "dark_back", text: "Vùng răng hàm" },
          { id: "dark_multiple", text: "Nhiều chỗ có vẻ đen" }
        ]
      },
      cavity_brushing: {
        question: "Một răng cụ thể khó chịu hay vùng rộng khó chịu?",
        options: [
          { id: "specific_tooth", text: "Một răng cụ thể khó chịu" },
          { id: "wide_area", text: "Vùng rộng bên trái/phải trên/dưới khó chịu" }
        ]
      }
    }
  },

  // Câu hỏi liên quan đến đau (chung)
  pain: {
    question: "Bạn cảm thấy đau trong tình huống nào?",
    options: [
      { id: "pain_cold_hot", text: "Khi ê buốt với đồ lạnh hoặc nóng" },
      { id: "pain_chewing", text: "Khi nhai thức ăn" },
      { id: "pain_always", text: "Vẫn đau ngay cả khi nghỉ ngơi" },
      { id: "pain_wisdom", text: "Đau vùng răng khôn" }
    ],
    next: {
      pain_cold_hot: {
        question: "Cơn đau kéo dài bao lâu?",
        options: [
          { id: "pain_short", text: "Ê buốt một chút rồi biến mất" },
          { id: "pain_long", text: "Một khi ê buốt thì kéo dài lâu" },
          { id: "pain_getting_worse", text: "Ngày càng nặng hơn" }
        ]
      },
      pain_chewing: {
        question: "Vùng nào đau?",
        options: [
          { id: "pain_front", text: "Vùng răng cửa" },
          { id: "pain_back", text: "Vùng răng hàm" },
          { id: "pain_multiple", text: "Nhiều chỗ đau" }
        ]
      },
      pain_always: {
        question: "Có sưng hoặc mủ không?",
        options: [
          { id: "pain_swelling_yes", text: "Có, sưng hoặc có mủ" },
          { id: "pain_swelling_no", text: "Không, chỉ đau thôi" }
        ]
      },
      pain_wisdom: {
        question: "Đau răng khôn bắt đầu từ khi nào?",
        options: [
          { id: "wisdom_recent", text: "Vài ngày gần đây" },
          { id: "wisdom_recurring", text: "Thường xuyên tái phát" },
          { id: "wisdom_swelling", text: "Nướu sưng nhiều" }
        ]
      }
    }
  },

  // Câu hỏi liên quan đến răng khôn (tư vấn răng khôn)
  wisdom_tooth: {
    question: "Tình trạng răng khôn hiện tại của bạn thế nào?",
    options: [
      { id: "wisdom_pain", text: "Đau vùng răng khôn" },
      { id: "wisdom_checkup", text: "Không đau, nhưng muốn kiểm tra" }
    ],
    next: {
      // Khi chọn đau → câu hỏi vị trí
      wisdom_pain: {
        question: "Răng nào đang đau?",
        options: [
          { id: "wisdom_upper", text: "Răng khôn trên" },
          { id: "wisdom_lower", text: "Răng khôn dưới" }
        ],
        next: {
          // Sau khi chọn răng khôn trên → từ khi nào khó chịu
          wisdom_upper: {
            question: "Cảm giác khó chịu ở răng khôn bắt đầu từ khi nào?",
            options: [
              { id: "wisdom_first_time", text: "Lần đầu tiên" },
              { id: "wisdom_recurring", text: "Đã từng có trải nghiệm tương tự trước đây, đã khỏi nhưng bây giờ lại tái phát" }
            ],
            next: {
              wisdom_first_time: {
                question: "Điều bạn lo lắng nhất khi điều trị đau răng khôn là gì?",
                options: [
                  { id: "worry_possible", text: "Có thể nhổ được không" },
                  { id: "worry_fear", text: "Sợ điều trị nhổ răng" },
                  { id: "worry_daily", text: "Khó chịu trong sinh hoạt hàng ngày sau khi nhổ" }
                ],
                next: {
                  worry_possible: {
                    question: "Bạn đã từng phẫu thuật tim mạch hoặc có bệnh toàn thân không?",
                    options: [
                      { id: "disease_medication", text: "Có thuốc uống hàng ngày (vui lòng mang theo túi thuốc)" },
                      { id: "disease_heart", text: "Đã từng phẫu thuật tim, mạch máu" },
                      { id: "disease_bp_diabetes", text: "Cao huyết áp/Tiểu đường" },
                      { id: "disease_osteoporosis", text: "Loãng xương" },
                      { id: "disease_other", text: "Bệnh toàn thân khác" },
                      { id: "disease_none", text: "Không có" }
                    ]
                  },
                  worry_fear: {
                    question: "Bạn đã từng phẫu thuật tim mạch hoặc có bệnh toàn thân không?",
                    options: [
                      { id: "disease_medication", text: "Có thuốc uống hàng ngày (vui lòng mang theo túi thuốc)" },
                      { id: "disease_heart", text: "Đã từng phẫu thuật tim, mạch máu" },
                      { id: "disease_bp_diabetes", text: "Cao huyết áp/Tiểu đường" },
                      { id: "disease_osteoporosis", text: "Loãng xương" },
                      { id: "disease_other", text: "Bệnh toàn thân khác" },
                      { id: "disease_none", text: "Không có" }
                    ]
                  },
                  worry_daily: {
                    question: "Bạn đã từng phẫu thuật tim mạch hoặc có bệnh toàn thân không?",
                    options: [
                      { id: "disease_medication", text: "Có thuốc uống hàng ngày (vui lòng mang theo túi thuốc)" },
                      { id: "disease_heart", text: "Đã từng phẫu thuật tim, mạch máu" },
                      { id: "disease_bp_diabetes", text: "Cao huyết áp/Tiểu đường" },
                      { id: "disease_osteoporosis", text: "Loãng xương" },
                      { id: "disease_other", text: "Bệnh toàn thân khác" },
                      { id: "disease_none", text: "Không có" }
                    ]
                  }
                }
              },
              wisdom_recurring: {
                question: "Điều bạn lo lắng nhất khi điều trị đau răng khôn là gì?",
                options: [
                  { id: "worry_possible", text: "Có thể nhổ được không" },
                  { id: "worry_fear", text: "Sợ điều trị nhổ răng" },
                  { id: "worry_daily", text: "Khó chịu trong sinh hoạt hàng ngày sau khi nhổ" }
                ],
                next: {
                  worry_possible: {
                    question: "Bạn đã từng phẫu thuật tim mạch hoặc có bệnh toàn thân không?",
                    options: [
                      { id: "disease_medication", text: "Có thuốc uống hàng ngày (vui lòng mang theo túi thuốc)" },
                      { id: "disease_heart", text: "Đã từng phẫu thuật tim, mạch máu" },
                      { id: "disease_bp_diabetes", text: "Cao huyết áp/Tiểu đường" },
                      { id: "disease_osteoporosis", text: "Loãng xương" },
                      { id: "disease_other", text: "Bệnh toàn thân khác" },
                      { id: "disease_none", text: "Không có" }
                    ]
                  },
                  worry_fear: {
                    question: "Bạn đã từng phẫu thuật tim mạch hoặc có bệnh toàn thân không?",
                    options: [
                      { id: "disease_medication", text: "Có thuốc uống hàng ngày (vui lòng mang theo túi thuốc)" },
                      { id: "disease_heart", text: "Đã từng phẫu thuật tim, mạch máu" },
                      { id: "disease_bp_diabetes", text: "Cao huyết áp/Tiểu đường" },
                      { id: "disease_osteoporosis", text: "Loãng xương" },
                      { id: "disease_other", text: "Bệnh toàn thân khác" },
                      { id: "disease_none", text: "Không có" }
                    ]
                  },
                  worry_daily: {
                    question: "Bạn đã từng phẫu thuật tim mạch hoặc có bệnh toàn thân không?",
                    options: [
                      { id: "disease_medication", text: "Có thuốc uống hàng ngày (vui lòng mang theo túi thuốc)" },
                      { id: "disease_heart", text: "Đã từng phẫu thuật tim, mạch máu" },
                      { id: "disease_bp_diabetes", text: "Cao huyết áp/Tiểu đường" },
                      { id: "disease_osteoporosis", text: "Loãng xương" },
                      { id: "disease_other", text: "Bệnh toàn thân khác" },
                      { id: "disease_none", text: "Không có" }
                    ]
                  }
                }
              }
            }
          },
          // Sau khi chọn răng khôn dưới → từ khi nào khó chịu
          wisdom_lower: {
            question: "Cảm giác khó chịu ở răng khôn bắt đầu từ khi nào?",
            options: [
              { id: "wisdom_first_time", text: "Lần đầu tiên" },
              { id: "wisdom_recurring", text: "Đã từng có trải nghiệm tương tự trước đây, đã khỏi nhưng bây giờ lại tái phát" }
            ],
            next: {
              wisdom_first_time: {
                question: "Điều bạn lo lắng nhất khi điều trị đau răng khôn là gì?",
                options: [
                  { id: "worry_possible", text: "Có thể nhổ được không" },
                  { id: "worry_fear", text: "Sợ điều trị nhổ răng" },
                  { id: "worry_daily", text: "Khó chịu trong sinh hoạt hàng ngày sau khi nhổ" }
                ],
                next: {
                  worry_possible: {
                    question: "Bạn đã từng phẫu thuật tim mạch hoặc có bệnh toàn thân không?",
                    options: [
                      { id: "disease_medication", text: "Có thuốc uống hàng ngày (vui lòng mang theo túi thuốc)" },
                      { id: "disease_heart", text: "Đã từng phẫu thuật tim, mạch máu" },
                      { id: "disease_bp_diabetes", text: "Cao huyết áp/Tiểu đường" },
                      { id: "disease_osteoporosis", text: "Loãng xương" },
                      { id: "disease_other", text: "Bệnh toàn thân khác" },
                      { id: "disease_none", text: "Không có" }
                    ]
                  },
                  worry_fear: {
                    question: "Bạn đã từng phẫu thuật tim mạch hoặc có bệnh toàn thân không?",
                    options: [
                      { id: "disease_medication", text: "Có thuốc uống hàng ngày (vui lòng mang theo túi thuốc)" },
                      { id: "disease_heart", text: "Đã từng phẫu thuật tim, mạch máu" },
                      { id: "disease_bp_diabetes", text: "Cao huyết áp/Tiểu đường" },
                      { id: "disease_osteoporosis", text: "Loãng xương" },
                      { id: "disease_other", text: "Bệnh toàn thân khác" },
                      { id: "disease_none", text: "Không có" }
                    ]
                  },
                  worry_daily: {
                    question: "Bạn đã từng phẫu thuật tim mạch hoặc có bệnh toàn thân không?",
                    options: [
                      { id: "disease_medication", text: "Có thuốc uống hàng ngày (vui lòng mang theo túi thuốc)" },
                      { id: "disease_heart", text: "Đã từng phẫu thuật tim, mạch máu" },
                      { id: "disease_bp_diabetes", text: "Cao huyết áp/Tiểu đường" },
                      { id: "disease_osteoporosis", text: "Loãng xương" },
                      { id: "disease_other", text: "Bệnh toàn thân khác" },
                      { id: "disease_none", text: "Không có" }
                    ]
                  }
                }
              },
              wisdom_recurring: {
                question: "Điều bạn lo lắng nhất khi điều trị đau răng khôn là gì?",
                options: [
                  { id: "worry_possible", text: "Có thể nhổ được không" },
                  { id: "worry_fear", text: "Sợ điều trị nhổ răng" },
                  { id: "worry_daily", text: "Khó chịu trong sinh hoạt hàng ngày sau khi nhổ" }
                ],
                next: {
                  worry_possible: {
                    question: "Bạn đã từng phẫu thuật tim mạch hoặc có bệnh toàn thân không?",
                    options: [
                      { id: "disease_medication", text: "Có thuốc uống hàng ngày (vui lòng mang theo túi thuốc)" },
                      { id: "disease_heart", text: "Đã từng phẫu thuật tim, mạch máu" },
                      { id: "disease_bp_diabetes", text: "Cao huyết áp/Tiểu đường" },
                      { id: "disease_osteoporosis", text: "Loãng xương" },
                      { id: "disease_other", text: "Bệnh toàn thân khác" },
                      { id: "disease_none", text: "Không có" }
                    ]
                  },
                  worry_fear: {
                    question: "Bạn đã từng phẫu thuật tim mạch hoặc có bệnh toàn thân không?",
                    options: [
                      { id: "disease_medication", text: "Có thuốc uống hàng ngày (vui lòng mang theo túi thuốc)" },
                      { id: "disease_heart", text: "Đã từng phẫu thuật tim, mạch máu" },
                      { id: "disease_bp_diabetes", text: "Cao huyết áp/Tiểu đường" },
                      { id: "disease_osteoporosis", text: "Loãng xương" },
                      { id: "disease_other", text: "Bệnh toàn thân khác" },
                      { id: "disease_none", text: "Không có" }
                    ]
                  },
                  worry_daily: {
                    question: "Bạn đã từng phẫu thuật tim mạch hoặc có bệnh toàn thân không?",
                    options: [
                      { id: "disease_medication", text: "Có thuốc uống hàng ngày (vui lòng mang theo túi thuốc)" },
                      { id: "disease_heart", text: "Đã từng phẫu thuật tim, mạch máu" },
                      { id: "disease_bp_diabetes", text: "Cao huyết áp/Tiểu đường" },
                      { id: "disease_osteoporosis", text: "Loãng xương" },
                      { id: "disease_other", text: "Bệnh toàn thân khác" },
                      { id: "disease_none", text: "Không có" }
                    ]
                  }
                }
              }
            }
          }
        }
      },
      // Khi chọn không đau nhưng muốn kiểm tra → câu hỏi lý do do dự → đề xuất cuối cùng
      wisdom_checkup: {
        question: "Nếu điều trị răng khôn, điều bạn lo lắng nhất là gì?",
        options: [
          { id: "checkup_worry_possible", text: "Có thể nhổ được không" },
          { id: "checkup_worry_fear", text: "Sợ điều trị nhổ răng" },
          { id: "checkup_worry_daily", text: "Khó chịu trong sinh hoạt hàng ngày sau khi nhổ" }
        ],
        next: {
          checkup_worry_possible: {
            question: "Bạn đã từng phẫu thuật tim mạch hoặc có bệnh toàn thân không?",
            options: [
              { id: "disease_medication", text: "Có thuốc uống hàng ngày (vui lòng mang theo túi thuốc)" },
              { id: "disease_heart", text: "Đã từng phẫu thuật tim, mạch máu" },
              { id: "disease_bp_diabetes", text: "Cao huyết áp/Tiểu đường" },
              { id: "disease_osteoporosis", text: "Loãng xương" },
              { id: "disease_other", text: "Bệnh toàn thân khác" },
              { id: "disease_none", text: "Không có" }
            ],
            next: {
              disease_medication: {
                question: "Có phần nào bạn muốn kiểm tra cùng lúc không?",
                options: [
                  { id: "extra_cavity", text: "Kiểm tra sâu răng" },
                  { id: "extra_gum", text: "Kiểm tra nướu" },
                  { id: "extra_scaling", text: "Lấy cao răng" },
                  { id: "extra_none", text: "Không, chỉ muốn kiểm tra răng khôn" }
                ]
              },
              disease_heart: {
                question: "Có phần nào bạn muốn kiểm tra cùng lúc không?",
                options: [
                  { id: "extra_cavity", text: "Kiểm tra sâu răng" },
                  { id: "extra_gum", text: "Kiểm tra nướu" },
                  { id: "extra_scaling", text: "Lấy cao răng" },
                  { id: "extra_none", text: "Không, chỉ muốn kiểm tra răng khôn" }
                ]
              },
              disease_bp_diabetes: {
                question: "Có phần nào bạn muốn kiểm tra cùng lúc không?",
                options: [
                  { id: "extra_cavity", text: "Kiểm tra sâu răng" },
                  { id: "extra_gum", text: "Kiểm tra nướu" },
                  { id: "extra_scaling", text: "Lấy cao răng" },
                  { id: "extra_none", text: "Không, chỉ muốn kiểm tra răng khôn" }
                ]
              },
              disease_osteoporosis: {
                question: "Có phần nào bạn muốn kiểm tra cùng lúc không?",
                options: [
                  { id: "extra_cavity", text: "Kiểm tra sâu răng" },
                  { id: "extra_gum", text: "Kiểm tra nướu" },
                  { id: "extra_scaling", text: "Lấy cao răng" },
                  { id: "extra_none", text: "Không, chỉ muốn kiểm tra răng khôn" }
                ]
              },
              disease_other: {
                question: "Có phần nào bạn muốn kiểm tra cùng lúc không?",
                options: [
                  { id: "extra_cavity", text: "Kiểm tra sâu răng" },
                  { id: "extra_gum", text: "Kiểm tra nướu" },
                  { id: "extra_scaling", text: "Lấy cao răng" },
                  { id: "extra_none", text: "Không, chỉ muốn kiểm tra răng khôn" }
                ]
              },
              disease_none: {
                question: "Có phần nào bạn muốn kiểm tra cùng lúc không?",
                options: [
                  { id: "extra_cavity", text: "Kiểm tra sâu răng" },
                  { id: "extra_gum", text: "Kiểm tra nướu" },
                  { id: "extra_scaling", text: "Lấy cao răng" },
                  { id: "extra_none", text: "Không, chỉ muốn kiểm tra răng khôn" }
                ]
              }
            }
          },
          checkup_worry_fear: {
            question: "Bạn đã từng phẫu thuật tim mạch hoặc có bệnh toàn thân không?",
            options: [
              { id: "disease_medication", text: "Có thuốc uống hàng ngày (vui lòng mang theo túi thuốc)" },
              { id: "disease_heart", text: "Đã từng phẫu thuật tim, mạch máu" },
              { id: "disease_bp_diabetes", text: "Cao huyết áp/Tiểu đường" },
              { id: "disease_osteoporosis", text: "Loãng xương" },
              { id: "disease_other", text: "Bệnh toàn thân khác" },
              { id: "disease_none", text: "Không có" }
            ],
            next: {
              disease_medication: {
                question: "Có phần nào bạn muốn kiểm tra cùng lúc không?",
                options: [
                  { id: "extra_cavity", text: "Kiểm tra sâu răng" },
                  { id: "extra_gum", text: "Kiểm tra nướu" },
                  { id: "extra_scaling", text: "Lấy cao răng" },
                  { id: "extra_none", text: "Không, chỉ muốn kiểm tra răng khôn" }
                ]
              },
              disease_heart: {
                question: "Có phần nào bạn muốn kiểm tra cùng lúc không?",
                options: [
                  { id: "extra_cavity", text: "Kiểm tra sâu răng" },
                  { id: "extra_gum", text: "Kiểm tra nướu" },
                  { id: "extra_scaling", text: "Lấy cao răng" },
                  { id: "extra_none", text: "Không, chỉ muốn kiểm tra răng khôn" }
                ]
              },
              disease_bp_diabetes: {
                question: "Có phần nào bạn muốn kiểm tra cùng lúc không?",
                options: [
                  { id: "extra_cavity", text: "Kiểm tra sâu răng" },
                  { id: "extra_gum", text: "Kiểm tra nướu" },
                  { id: "extra_scaling", text: "Lấy cao răng" },
                  { id: "extra_none", text: "Không, chỉ muốn kiểm tra răng khôn" }
                ]
              },
              disease_osteoporosis: {
                question: "Có phần nào bạn muốn kiểm tra cùng lúc không?",
                options: [
                  { id: "extra_cavity", text: "Kiểm tra sâu răng" },
                  { id: "extra_gum", text: "Kiểm tra nướu" },
                  { id: "extra_scaling", text: "Lấy cao răng" },
                  { id: "extra_none", text: "Không, chỉ muốn kiểm tra răng khôn" }
                ]
              },
              disease_other: {
                question: "Có phần nào bạn muốn kiểm tra cùng lúc không?",
                options: [
                  { id: "extra_cavity", text: "Kiểm tra sâu răng" },
                  { id: "extra_gum", text: "Kiểm tra nướu" },
                  { id: "extra_scaling", text: "Lấy cao răng" },
                  { id: "extra_none", text: "Không, chỉ muốn kiểm tra răng khôn" }
                ]
              },
              disease_none: {
                question: "Có phần nào bạn muốn kiểm tra cùng lúc không?",
                options: [
                  { id: "extra_cavity", text: "Kiểm tra sâu răng" },
                  { id: "extra_gum", text: "Kiểm tra nướu" },
                  { id: "extra_scaling", text: "Lấy cao răng" },
                  { id: "extra_none", text: "Không, chỉ muốn kiểm tra răng khôn" }
                ]
              }
            }
          },
          checkup_worry_daily: {
            question: "Bạn đã từng phẫu thuật tim mạch hoặc có bệnh toàn thân không?",
            options: [
              { id: "disease_medication", text: "Có thuốc uống hàng ngày (vui lòng mang theo túi thuốc)" },
              { id: "disease_heart", text: "Đã từng phẫu thuật tim, mạch máu" },
              { id: "disease_bp_diabetes", text: "Cao huyết áp/Tiểu đường" },
              { id: "disease_osteoporosis", text: "Loãng xương" },
              { id: "disease_other", text: "Bệnh toàn thân khác" },
              { id: "disease_none", text: "Không có" }
            ],
            next: {
              disease_medication: {
                question: "Có phần nào bạn muốn kiểm tra cùng lúc không?",
                options: [
                  { id: "extra_cavity", text: "Kiểm tra sâu răng" },
                  { id: "extra_gum", text: "Kiểm tra nướu" },
                  { id: "extra_scaling", text: "Lấy cao răng" },
                  { id: "extra_none", text: "Không, chỉ muốn kiểm tra răng khôn" }
                ]
              },
              disease_heart: {
                question: "Có phần nào bạn muốn kiểm tra cùng lúc không?",
                options: [
                  { id: "extra_cavity", text: "Kiểm tra sâu răng" },
                  { id: "extra_gum", text: "Kiểm tra nướu" },
                  { id: "extra_scaling", text: "Lấy cao răng" },
                  { id: "extra_none", text: "Không, chỉ muốn kiểm tra răng khôn" }
                ]
              },
              disease_bp_diabetes: {
                question: "Có phần nào bạn muốn kiểm tra cùng lúc không?",
                options: [
                  { id: "extra_cavity", text: "Kiểm tra sâu răng" },
                  { id: "extra_gum", text: "Kiểm tra nướu" },
                  { id: "extra_scaling", text: "Lấy cao răng" },
                  { id: "extra_none", text: "Không, chỉ muốn kiểm tra răng khôn" }
                ]
              },
              disease_osteoporosis: {
                question: "Có phần nào bạn muốn kiểm tra cùng lúc không?",
                options: [
                  { id: "extra_cavity", text: "Kiểm tra sâu răng" },
                  { id: "extra_gum", text: "Kiểm tra nướu" },
                  { id: "extra_scaling", text: "Lấy cao răng" },
                  { id: "extra_none", text: "Không, chỉ muốn kiểm tra răng khôn" }
                ]
              },
              disease_other: {
                question: "Có phần nào bạn muốn kiểm tra cùng lúc không?",
                options: [
                  { id: "extra_cavity", text: "Kiểm tra sâu răng" },
                  { id: "extra_gum", text: "Kiểm tra nướu" },
                  { id: "extra_scaling", text: "Lấy cao răng" },
                  { id: "extra_none", text: "Không, chỉ muốn kiểm tra răng khôn" }
                ]
              },
              disease_none: {
                question: "Có phần nào bạn muốn kiểm tra cùng lúc không?",
                options: [
                  { id: "extra_cavity", text: "Kiểm tra sâu răng" },
                  { id: "extra_gum", text: "Kiểm tra nướu" },
                  { id: "extra_scaling", text: "Lấy cao răng" },
                  { id: "extra_none", text: "Không, chỉ muốn kiểm tra răng khôn" }
                ]
              }
            }
          }
        }
      }
    }
  },

  // Câu hỏi liên quan đến thẩm mỹ
  aesthetic: {
    question: "Bạn muốn cải thiện phần nào?",
    options: [
      { id: "aesthetic_color", text: "Răng bị vàng hoặc đổi màu" },
      { id: "aesthetic_shape", text: "Hình dáng hoặc kích thước răng" },
      { id: "aesthetic_gap", text: "Khoảng cách giữa các răng" },
      { id: "aesthetic_alignment", text: "Răng sắp xếp không đều" }
    ],
    next: {
      aesthetic_color: {
        question: "Mức độ và nguyên nhân đổi màu như thế nào?",
        options: [
          { id: "color_coffee", text: "Ố màu do cà phê/thuốc lá" },
          { id: "color_aging", text: "Đổi màu toàn bộ do lão hóa" },
          { id: "color_single", text: "Chỉ một số răng bị tối màu" }
        ]
      },
      aesthetic_shape: {
        question: "Bạn có vấn đề gì?",
        options: [
          { id: "shape_small", text: "Răng nhỏ" },
          { id: "shape_chipped", text: "Răng bị vỡ hoặc mòn" },
          { id: "shape_uneven", text: "Chiều dài răng không đều" }
        ]
      },
      aesthetic_gap: {
        question: "Khoảng cách ở vị trí nào?",
        options: [
          { id: "gap_front", text: "Giữa các răng cửa" },
          { id: "gap_multiple", text: "Có khoảng cách ở nhiều chỗ" }
        ]
      },
      aesthetic_alignment: {
        question: "Mức độ vấn đề sắp xếp như thế nào?",
        options: [
          { id: "alignment_mild", text: "Hơi lệch" },
          { id: "alignment_moderate", text: "Răng chồng mức độ trung bình" },
          { id: "alignment_severe", text: "Lệch nghiêm trọng" }
        ]
      }
    }
  },

  // Câu hỏi về mất răng (tư vấn implant) - Q1: Tình trạng hiện tại
  missing_tooth: {
    question: "Tình trạng răng hiện tại của bạn thế nào?",
    options: [
      { id: "missing_upper_all", text: "Không còn răng trên hoặc sẽ nhổ hết" },
      { id: "missing_lower_all", text: "Không còn răng dưới hoặc sẽ nhổ hết" },
      { id: "missing_all", text: "Gần như không còn răng hoặc sẽ nhổ hết" },
      { id: "missing_partial", text: "Mất một số răng (dưới 10 răng) hoặc sẽ nhổ" },
      { id: "implant_revision", text: "Cần phẫu thuật lại implant" }
    ],
    next: {
      // Q2: Có đeo răng giả không (chung cho tất cả tùy chọn)
      missing_upper_all: {
        question: "Hiện tại bạn có đeo răng giả không?",
        options: [
          { id: "denture_yes", text: "Có" },
          { id: "denture_no", text: "Không" }
        ],
        next: {
          // Q3: Xác nhận bệnh toàn thân
          denture_yes: {
            question: "Bạn có bệnh toàn thân nào không?",
            options: [
              { id: "disease_diabetes", text: "Tiểu đường" },
              { id: "disease_hypertension", text: "Cao huyết áp" },
              { id: "disease_osteoporosis", text: "Loãng xương" },
              { id: "disease_heart", text: "Bệnh tim" },
              { id: "disease_none", text: "Không có" }
            ],
            next: {
              // Q4: Phần quan trọng trong điều trị (vai trò Q5)
              disease_diabetes: {
                question: "Điều bạn coi trọng nhất trong điều trị là gì?",
                options: [
                  { id: "priority_cost", text: "Chi phí" },
                  { id: "priority_pain", text: "Đau" },
                  { id: "priority_eating", text: "Ăn uống thoải mái" },
                  { id: "priority_recovery", text: "Hồi phục nhanh và trở lại sinh hoạt bình thường sau phẫu thuật" }
                ],
                next: {
                  // Q5: Lý do do dự (vai trò Q6)
                  priority_cost: {
                    question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?",
                    options: [
                      { id: "hesitation_cost", text: "Vì chi phí" },
                      { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" },
                      { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" },
                      { id: "hesitation_none", text: "Không có lý do đặc biệt" }
                    ]
                  },
                  priority_pain: {
                    question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?",
                    options: [
                      { id: "hesitation_cost", text: "Vì chi phí" },
                      { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" },
                      { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" },
                      { id: "hesitation_none", text: "Không có lý do đặc biệt" }
                    ]
                  },
                  priority_eating: {
                    question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?",
                    options: [
                      { id: "hesitation_cost", text: "Vì chi phí" },
                      { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" },
                      { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" },
                      { id: "hesitation_none", text: "Không có lý do đặc biệt" }
                    ]
                  },
                  priority_recovery: {
                    question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?",
                    options: [
                      { id: "hesitation_cost", text: "Vì chi phí" },
                      { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" },
                      { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" },
                      { id: "hesitation_none", text: "Không có lý do đặc biệt" }
                    ]
                  }
                }
              },
              disease_hypertension: {
                question: "Điều bạn coi trọng nhất trong điều trị là gì?",
                options: [
                  { id: "priority_cost", text: "Chi phí" },
                  { id: "priority_pain", text: "Đau" },
                  { id: "priority_eating", text: "Ăn uống thoải mái" },
                  { id: "priority_recovery", text: "Hồi phục nhanh và trở lại sinh hoạt bình thường sau phẫu thuật" }
                ],
                next: {
                  priority_cost: {
                    question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?",
                    options: [
                      { id: "hesitation_cost", text: "Vì chi phí" },
                      { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" },
                      { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" },
                      { id: "hesitation_none", text: "Không có lý do đặc biệt" }
                    ]
                  },
                  priority_pain: {
                    question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?",
                    options: [
                      { id: "hesitation_cost", text: "Vì chi phí" },
                      { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" },
                      { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" },
                      { id: "hesitation_none", text: "Không có lý do đặc biệt" }
                    ]
                  },
                  priority_eating: {
                    question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?",
                    options: [
                      { id: "hesitation_cost", text: "Vì chi phí" },
                      { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" },
                      { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" },
                      { id: "hesitation_none", text: "Không có lý do đặc biệt" }
                    ]
                  },
                  priority_recovery: {
                    question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?",
                    options: [
                      { id: "hesitation_cost", text: "Vì chi phí" },
                      { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" },
                      { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" },
                      { id: "hesitation_none", text: "Không có lý do đặc biệt" }
                    ]
                  }
                }
              },
              disease_osteoporosis: {
                question: "Điều bạn coi trọng nhất trong điều trị là gì?",
                options: [
                  { id: "priority_cost", text: "Chi phí" },
                  { id: "priority_pain", text: "Đau" },
                  { id: "priority_eating", text: "Ăn uống thoải mái" },
                  { id: "priority_recovery", text: "Hồi phục nhanh và trở lại sinh hoạt bình thường sau phẫu thuật" }
                ],
                next: {
                  priority_cost: {
                    question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?",
                    options: [
                      { id: "hesitation_cost", text: "Vì chi phí" },
                      { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" },
                      { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" },
                      { id: "hesitation_none", text: "Không có lý do đặc biệt" }
                    ]
                  },
                  priority_pain: {
                    question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?",
                    options: [
                      { id: "hesitation_cost", text: "Vì chi phí" },
                      { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" },
                      { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" },
                      { id: "hesitation_none", text: "Không có lý do đặc biệt" }
                    ]
                  },
                  priority_eating: {
                    question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?",
                    options: [
                      { id: "hesitation_cost", text: "Vì chi phí" },
                      { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" },
                      { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" },
                      { id: "hesitation_none", text: "Không có lý do đặc biệt" }
                    ]
                  },
                  priority_recovery: {
                    question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?",
                    options: [
                      { id: "hesitation_cost", text: "Vì chi phí" },
                      { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" },
                      { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" },
                      { id: "hesitation_none", text: "Không có lý do đặc biệt" }
                    ]
                  }
                }
              },
              disease_heart: {
                question: "Điều bạn coi trọng nhất trong điều trị là gì?",
                options: [
                  { id: "priority_cost", text: "Chi phí" },
                  { id: "priority_pain", text: "Đau" },
                  { id: "priority_eating", text: "Ăn uống thoải mái" },
                  { id: "priority_recovery", text: "Hồi phục nhanh và trở lại sinh hoạt bình thường sau phẫu thuật" }
                ],
                next: {
                  priority_cost: {
                    question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?",
                    options: [
                      { id: "hesitation_cost", text: "Vì chi phí" },
                      { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" },
                      { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" },
                      { id: "hesitation_none", text: "Không có lý do đặc biệt" }
                    ]
                  },
                  priority_pain: {
                    question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?",
                    options: [
                      { id: "hesitation_cost", text: "Vì chi phí" },
                      { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" },
                      { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" },
                      { id: "hesitation_none", text: "Không có lý do đặc biệt" }
                    ]
                  },
                  priority_eating: {
                    question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?",
                    options: [
                      { id: "hesitation_cost", text: "Vì chi phí" },
                      { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" },
                      { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" },
                      { id: "hesitation_none", text: "Không có lý do đặc biệt" }
                    ]
                  },
                  priority_recovery: {
                    question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?",
                    options: [
                      { id: "hesitation_cost", text: "Vì chi phí" },
                      { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" },
                      { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" },
                      { id: "hesitation_none", text: "Không có lý do đặc biệt" }
                    ]
                  }
                }
              },
              disease_none: {
                question: "Điều bạn coi trọng nhất trong điều trị là gì?",
                options: [
                  { id: "priority_cost", text: "Chi phí" },
                  { id: "priority_pain", text: "Đau" },
                  { id: "priority_eating", text: "Ăn uống thoải mái" },
                  { id: "priority_recovery", text: "Hồi phục nhanh và trở lại sinh hoạt bình thường sau phẫu thuật" }
                ],
                next: {
                  priority_cost: {
                    question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?",
                    options: [
                      { id: "hesitation_cost", text: "Vì chi phí" },
                      { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" },
                      { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" },
                      { id: "hesitation_none", text: "Không có lý do đặc biệt" }
                    ]
                  },
                  priority_pain: {
                    question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?",
                    options: [
                      { id: "hesitation_cost", text: "Vì chi phí" },
                      { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" },
                      { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" },
                      { id: "hesitation_none", text: "Không có lý do đặc biệt" }
                    ]
                  },
                  priority_eating: {
                    question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?",
                    options: [
                      { id: "hesitation_cost", text: "Vì chi phí" },
                      { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" },
                      { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" },
                      { id: "hesitation_none", text: "Không có lý do đặc biệt" }
                    ]
                  },
                  priority_recovery: {
                    question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?",
                    options: [
                      { id: "hesitation_cost", text: "Vì chi phí" },
                      { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" },
                      { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" },
                      { id: "hesitation_none", text: "Không có lý do đặc biệt" }
                    ]
                  }
                }
              }
            }
          },
          denture_no: {
            question: "Bạn có bệnh toàn thân nào không?",
            options: [
              { id: "disease_diabetes", text: "Tiểu đường" },
              { id: "disease_hypertension", text: "Cao huyết áp" },
              { id: "disease_osteoporosis", text: "Loãng xương" },
              { id: "disease_heart", text: "Bệnh tim" },
              { id: "disease_none", text: "Không có" }
            ],
            next: {
              disease_diabetes: {
                question: "Điều bạn coi trọng nhất trong điều trị là gì?",
                options: [
                  { id: "priority_cost", text: "Chi phí" },
                  { id: "priority_pain", text: "Đau" },
                  { id: "priority_eating", text: "Ăn uống thoải mái" },
                  { id: "priority_recovery", text: "Hồi phục nhanh và trở lại sinh hoạt bình thường sau phẫu thuật" }
                ],
                next: {
                  priority_cost: {
                    question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?",
                    options: [
                      { id: "hesitation_cost", text: "Vì chi phí" },
                      { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" },
                      { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" },
                      { id: "hesitation_none", text: "Không có lý do đặc biệt" }
                    ]
                  },
                  priority_pain: {
                    question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?",
                    options: [
                      { id: "hesitation_cost", text: "Vì chi phí" },
                      { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" },
                      { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" },
                      { id: "hesitation_none", text: "Không có lý do đặc biệt" }
                    ]
                  },
                  priority_eating: {
                    question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?",
                    options: [
                      { id: "hesitation_cost", text: "Vì chi phí" },
                      { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" },
                      { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" },
                      { id: "hesitation_none", text: "Không có lý do đặc biệt" }
                    ]
                  },
                  priority_recovery: {
                    question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?",
                    options: [
                      { id: "hesitation_cost", text: "Vì chi phí" },
                      { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" },
                      { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" },
                      { id: "hesitation_none", text: "Không có lý do đặc biệt" }
                    ]
                  }
                }
              },
              disease_hypertension: {
                question: "Điều bạn coi trọng nhất trong điều trị là gì?",
                options: [
                  { id: "priority_cost", text: "Chi phí" },
                  { id: "priority_pain", text: "Đau" },
                  { id: "priority_eating", text: "Ăn uống thoải mái" },
                  { id: "priority_recovery", text: "Hồi phục nhanh và trở lại sinh hoạt bình thường sau phẫu thuật" }
                ],
                next: {
                  priority_cost: {
                    question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?",
                    options: [
                      { id: "hesitation_cost", text: "Vì chi phí" },
                      { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" },
                      { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" },
                      { id: "hesitation_none", text: "Không có lý do đặc biệt" }
                    ]
                  },
                  priority_pain: {
                    question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?",
                    options: [
                      { id: "hesitation_cost", text: "Vì chi phí" },
                      { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" },
                      { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" },
                      { id: "hesitation_none", text: "Không có lý do đặc biệt" }
                    ]
                  },
                  priority_eating: {
                    question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?",
                    options: [
                      { id: "hesitation_cost", text: "Vì chi phí" },
                      { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" },
                      { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" },
                      { id: "hesitation_none", text: "Không có lý do đặc biệt" }
                    ]
                  },
                  priority_recovery: {
                    question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?",
                    options: [
                      { id: "hesitation_cost", text: "Vì chi phí" },
                      { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" },
                      { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" },
                      { id: "hesitation_none", text: "Không có lý do đặc biệt" }
                    ]
                  }
                }
              },
              disease_osteoporosis: {
                question: "Điều bạn coi trọng nhất trong điều trị là gì?",
                options: [
                  { id: "priority_cost", text: "Chi phí" },
                  { id: "priority_pain", text: "Đau" },
                  { id: "priority_eating", text: "Ăn uống thoải mái" },
                  { id: "priority_recovery", text: "Hồi phục nhanh và trở lại sinh hoạt bình thường sau phẫu thuật" }
                ],
                next: {
                  priority_cost: {
                    question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?",
                    options: [
                      { id: "hesitation_cost", text: "Vì chi phí" },
                      { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" },
                      { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" },
                      { id: "hesitation_none", text: "Không có lý do đặc biệt" }
                    ]
                  },
                  priority_pain: {
                    question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?",
                    options: [
                      { id: "hesitation_cost", text: "Vì chi phí" },
                      { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" },
                      { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" },
                      { id: "hesitation_none", text: "Không có lý do đặc biệt" }
                    ]
                  },
                  priority_eating: {
                    question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?",
                    options: [
                      { id: "hesitation_cost", text: "Vì chi phí" },
                      { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" },
                      { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" },
                      { id: "hesitation_none", text: "Không có lý do đặc biệt" }
                    ]
                  },
                  priority_recovery: {
                    question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?",
                    options: [
                      { id: "hesitation_cost", text: "Vì chi phí" },
                      { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" },
                      { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" },
                      { id: "hesitation_none", text: "Không có lý do đặc biệt" }
                    ]
                  }
                }
              },
              disease_heart: {
                question: "Điều bạn coi trọng nhất trong điều trị là gì?",
                options: [
                  { id: "priority_cost", text: "Chi phí" },
                  { id: "priority_pain", text: "Đau" },
                  { id: "priority_eating", text: "Ăn uống thoải mái" },
                  { id: "priority_recovery", text: "Hồi phục nhanh và trở lại sinh hoạt bình thường sau phẫu thuật" }
                ],
                next: {
                  priority_cost: {
                    question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?",
                    options: [
                      { id: "hesitation_cost", text: "Vì chi phí" },
                      { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" },
                      { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" },
                      { id: "hesitation_none", text: "Không có lý do đặc biệt" }
                    ]
                  },
                  priority_pain: {
                    question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?",
                    options: [
                      { id: "hesitation_cost", text: "Vì chi phí" },
                      { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" },
                      { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" },
                      { id: "hesitation_none", text: "Không có lý do đặc biệt" }
                    ]
                  },
                  priority_eating: {
                    question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?",
                    options: [
                      { id: "hesitation_cost", text: "Vì chi phí" },
                      { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" },
                      { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" },
                      { id: "hesitation_none", text: "Không có lý do đặc biệt" }
                    ]
                  },
                  priority_recovery: {
                    question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?",
                    options: [
                      { id: "hesitation_cost", text: "Vì chi phí" },
                      { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" },
                      { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" },
                      { id: "hesitation_none", text: "Không có lý do đặc biệt" }
                    ]
                  }
                }
              },
              disease_none: {
                question: "Điều bạn coi trọng nhất trong điều trị là gì?",
                options: [
                  { id: "priority_cost", text: "Chi phí" },
                  { id: "priority_pain", text: "Đau" },
                  { id: "priority_eating", text: "Ăn uống thoải mái" },
                  { id: "priority_recovery", text: "Hồi phục nhanh và trở lại sinh hoạt bình thường sau phẫu thuật" }
                ],
                next: {
                  priority_cost: {
                    question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?",
                    options: [
                      { id: "hesitation_cost", text: "Vì chi phí" },
                      { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" },
                      { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" },
                      { id: "hesitation_none", text: "Không có lý do đặc biệt" }
                    ]
                  },
                  priority_pain: {
                    question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?",
                    options: [
                      { id: "hesitation_cost", text: "Vì chi phí" },
                      { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" },
                      { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" },
                      { id: "hesitation_none", text: "Không có lý do đặc biệt" }
                    ]
                  },
                  priority_eating: {
                    question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?",
                    options: [
                      { id: "hesitation_cost", text: "Vì chi phí" },
                      { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" },
                      { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" },
                      { id: "hesitation_none", text: "Không có lý do đặc biệt" }
                    ]
                  },
                  priority_recovery: {
                    question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?",
                    options: [
                      { id: "hesitation_cost", text: "Vì chi phí" },
                      { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" },
                      { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" },
                      { id: "hesitation_none", text: "Không có lý do đặc biệt" }
                    ]
                  }
                }
              }
            }
          }
        }
      },
      // Áp dụng luồng tương tự cho các tùy chọn khác (cấu trúc giống missing_upper_all)
      missing_all: {
        question: "Hiện tại bạn có đeo răng giả không?",
        options: [
          { id: "denture_yes", text: "Có" },
          { id: "denture_no", text: "Không" }
        ],
        next: {
          denture_yes: {
            question: "Bạn có bệnh toàn thân nào không?",
            options: [
              { id: "disease_diabetes", text: "Tiểu đường" },
              { id: "disease_hypertension", text: "Cao huyết áp" },
              { id: "disease_osteoporosis", text: "Loãng xương" },
              { id: "disease_heart", text: "Bệnh tim" },
              { id: "disease_none", text: "Không có" }
            ],
            next: {
              disease_diabetes: { question: "Điều bạn coi trọng nhất trong điều trị là gì?", options: [{ id: "priority_cost", text: "Chi phí" }, { id: "priority_pain", text: "Đau" }, { id: "priority_eating", text: "Ăn uống thoải mái" }, { id: "priority_recovery", text: "Hồi phục nhanh và trở lại sinh hoạt bình thường sau phẫu thuật" }], next: { priority_cost: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_pain: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_eating: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_recovery: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] } } },
              disease_hypertension: { question: "Điều bạn coi trọng nhất trong điều trị là gì?", options: [{ id: "priority_cost", text: "Chi phí" }, { id: "priority_pain", text: "Đau" }, { id: "priority_eating", text: "Ăn uống thoải mái" }, { id: "priority_recovery", text: "Hồi phục nhanh và trở lại sinh hoạt bình thường sau phẫu thuật" }], next: { priority_cost: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_pain: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_eating: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_recovery: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] } } },
              disease_osteoporosis: { question: "Điều bạn coi trọng nhất trong điều trị là gì?", options: [{ id: "priority_cost", text: "Chi phí" }, { id: "priority_pain", text: "Đau" }, { id: "priority_eating", text: "Ăn uống thoải mái" }, { id: "priority_recovery", text: "Hồi phục nhanh và trở lại sinh hoạt bình thường sau phẫu thuật" }], next: { priority_cost: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_pain: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_eating: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_recovery: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] } } },
              disease_heart: { question: "Điều bạn coi trọng nhất trong điều trị là gì?", options: [{ id: "priority_cost", text: "Chi phí" }, { id: "priority_pain", text: "Đau" }, { id: "priority_eating", text: "Ăn uống thoải mái" }, { id: "priority_recovery", text: "Hồi phục nhanh và trở lại sinh hoạt bình thường sau phẫu thuật" }], next: { priority_cost: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_pain: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_eating: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_recovery: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] } } },
              disease_none: { question: "Điều bạn coi trọng nhất trong điều trị là gì?", options: [{ id: "priority_cost", text: "Chi phí" }, { id: "priority_pain", text: "Đau" }, { id: "priority_eating", text: "Ăn uống thoải mái" }, { id: "priority_recovery", text: "Hồi phục nhanh và trở lại sinh hoạt bình thường sau phẫu thuật" }], next: { priority_cost: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_pain: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_eating: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_recovery: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] } } }
            }
          },
          denture_no: {
            question: "Bạn có bệnh toàn thân nào không?",
            options: [
              { id: "disease_diabetes", text: "Tiểu đường" },
              { id: "disease_hypertension", text: "Cao huyết áp" },
              { id: "disease_osteoporosis", text: "Loãng xương" },
              { id: "disease_heart", text: "Bệnh tim" },
              { id: "disease_none", text: "Không có" }
            ],
            next: {
              disease_diabetes: { question: "Điều bạn coi trọng nhất trong điều trị là gì?", options: [{ id: "priority_cost", text: "Chi phí" }, { id: "priority_pain", text: "Đau" }, { id: "priority_eating", text: "Ăn uống thoải mái" }, { id: "priority_recovery", text: "Hồi phục nhanh và trở lại sinh hoạt bình thường sau phẫu thuật" }], next: { priority_cost: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_pain: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_eating: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_recovery: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] } } },
              disease_hypertension: { question: "Điều bạn coi trọng nhất trong điều trị là gì?", options: [{ id: "priority_cost", text: "Chi phí" }, { id: "priority_pain", text: "Đau" }, { id: "priority_eating", text: "Ăn uống thoải mái" }, { id: "priority_recovery", text: "Hồi phục nhanh và trở lại sinh hoạt bình thường sau phẫu thuật" }], next: { priority_cost: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_pain: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_eating: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_recovery: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] } } },
              disease_osteoporosis: { question: "Điều bạn coi trọng nhất trong điều trị là gì?", options: [{ id: "priority_cost", text: "Chi phí" }, { id: "priority_pain", text: "Đau" }, { id: "priority_eating", text: "Ăn uống thoải mái" }, { id: "priority_recovery", text: "Hồi phục nhanh và trở lại sinh hoạt bình thường sau phẫu thuật" }], next: { priority_cost: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_pain: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_eating: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_recovery: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] } } },
              disease_heart: { question: "Điều bạn coi trọng nhất trong điều trị là gì?", options: [{ id: "priority_cost", text: "Chi phí" }, { id: "priority_pain", text: "Đau" }, { id: "priority_eating", text: "Ăn uống thoải mái" }, { id: "priority_recovery", text: "Hồi phục nhanh và trở lại sinh hoạt bình thường sau phẫu thuật" }], next: { priority_cost: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_pain: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_eating: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_recovery: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] } } },
              disease_none: { question: "Điều bạn coi trọng nhất trong điều trị là gì?", options: [{ id: "priority_cost", text: "Chi phí" }, { id: "priority_pain", text: "Đau" }, { id: "priority_eating", text: "Ăn uống thoải mái" }, { id: "priority_recovery", text: "Hồi phục nhanh và trở lại sinh hoạt bình thường sau phẫu thuật" }], next: { priority_cost: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_pain: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_eating: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_recovery: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] } } }
            }
          }
        }
      },
      missing_lower_all: {
        question: "Hiện tại bạn có đeo răng giả không?",
        options: [
          { id: "denture_yes", text: "Có" },
          { id: "denture_no", text: "Không" }
        ],
        next: {
          denture_yes: {
            question: "Bạn có bệnh toàn thân nào không?",
            options: [
              { id: "disease_diabetes", text: "Tiểu đường" },
              { id: "disease_hypertension", text: "Cao huyết áp" },
              { id: "disease_osteoporosis", text: "Loãng xương" },
              { id: "disease_heart", text: "Bệnh tim" },
              { id: "disease_none", text: "Không có" }
            ],
            next: {
              disease_diabetes: { question: "Điều bạn coi trọng nhất trong điều trị là gì?", options: [{ id: "priority_cost", text: "Chi phí" }, { id: "priority_pain", text: "Đau" }, { id: "priority_eating", text: "Ăn uống thoải mái" }, { id: "priority_recovery", text: "Hồi phục nhanh và trở lại sinh hoạt bình thường sau phẫu thuật" }], next: { priority_cost: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_pain: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_eating: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_recovery: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] } } },
              disease_hypertension: { question: "Điều bạn coi trọng nhất trong điều trị là gì?", options: [{ id: "priority_cost", text: "Chi phí" }, { id: "priority_pain", text: "Đau" }, { id: "priority_eating", text: "Ăn uống thoải mái" }, { id: "priority_recovery", text: "Hồi phục nhanh và trở lại sinh hoạt bình thường sau phẫu thuật" }], next: { priority_cost: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_pain: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_eating: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_recovery: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] } } },
              disease_osteoporosis: { question: "Điều bạn coi trọng nhất trong điều trị là gì?", options: [{ id: "priority_cost", text: "Chi phí" }, { id: "priority_pain", text: "Đau" }, { id: "priority_eating", text: "Ăn uống thoải mái" }, { id: "priority_recovery", text: "Hồi phục nhanh và trở lại sinh hoạt bình thường sau phẫu thuật" }], next: { priority_cost: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_pain: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_eating: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_recovery: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] } } },
              disease_heart: { question: "Điều bạn coi trọng nhất trong điều trị là gì?", options: [{ id: "priority_cost", text: "Chi phí" }, { id: "priority_pain", text: "Đau" }, { id: "priority_eating", text: "Ăn uống thoải mái" }, { id: "priority_recovery", text: "Hồi phục nhanh và trở lại sinh hoạt bình thường sau phẫu thuật" }], next: { priority_cost: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_pain: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_eating: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_recovery: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] } } },
              disease_none: { question: "Điều bạn coi trọng nhất trong điều trị là gì?", options: [{ id: "priority_cost", text: "Chi phí" }, { id: "priority_pain", text: "Đau" }, { id: "priority_eating", text: "Ăn uống thoải mái" }, { id: "priority_recovery", text: "Hồi phục nhanh và trở lại sinh hoạt bình thường sau phẫu thuật" }], next: { priority_cost: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_pain: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_eating: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_recovery: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] } } }
            }
          },
          denture_no: {
            question: "Bạn có bệnh toàn thân nào không?",
            options: [
              { id: "disease_diabetes", text: "Tiểu đường" },
              { id: "disease_hypertension", text: "Cao huyết áp" },
              { id: "disease_osteoporosis", text: "Loãng xương" },
              { id: "disease_heart", text: "Bệnh tim" },
              { id: "disease_none", text: "Không có" }
            ],
            next: {
              disease_diabetes: { question: "Điều bạn coi trọng nhất trong điều trị là gì?", options: [{ id: "priority_cost", text: "Chi phí" }, { id: "priority_pain", text: "Đau" }, { id: "priority_eating", text: "Ăn uống thoải mái" }, { id: "priority_recovery", text: "Hồi phục nhanh và trở lại sinh hoạt bình thường sau phẫu thuật" }], next: { priority_cost: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_pain: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_eating: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_recovery: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] } } },
              disease_hypertension: { question: "Điều bạn coi trọng nhất trong điều trị là gì?", options: [{ id: "priority_cost", text: "Chi phí" }, { id: "priority_pain", text: "Đau" }, { id: "priority_eating", text: "Ăn uống thoải mái" }, { id: "priority_recovery", text: "Hồi phục nhanh và trở lại sinh hoạt bình thường sau phẫu thuật" }], next: { priority_cost: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_pain: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_eating: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_recovery: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] } } },
              disease_osteoporosis: { question: "Điều bạn coi trọng nhất trong điều trị là gì?", options: [{ id: "priority_cost", text: "Chi phí" }, { id: "priority_pain", text: "Đau" }, { id: "priority_eating", text: "Ăn uống thoải mái" }, { id: "priority_recovery", text: "Hồi phục nhanh và trở lại sinh hoạt bình thường sau phẫu thuật" }], next: { priority_cost: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_pain: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_eating: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_recovery: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] } } },
              disease_heart: { question: "Điều bạn coi trọng nhất trong điều trị là gì?", options: [{ id: "priority_cost", text: "Chi phí" }, { id: "priority_pain", text: "Đau" }, { id: "priority_eating", text: "Ăn uống thoải mái" }, { id: "priority_recovery", text: "Hồi phục nhanh và trở lại sinh hoạt bình thường sau phẫu thuật" }], next: { priority_cost: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_pain: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_eating: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_recovery: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] } } },
              disease_none: { question: "Điều bạn coi trọng nhất trong điều trị là gì?", options: [{ id: "priority_cost", text: "Chi phí" }, { id: "priority_pain", text: "Đau" }, { id: "priority_eating", text: "Ăn uống thoải mái" }, { id: "priority_recovery", text: "Hồi phục nhanh và trở lại sinh hoạt bình thường sau phẫu thuật" }], next: { priority_cost: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_pain: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_eating: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_recovery: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] } } }
            }
          }
        }
      },
      missing_partial: {
        question: "Răng ở vùng nào bị mất hoặc sẽ nhổ?",
        options: [
          { id: "location_front", text: "Vùng răng cửa" },
          { id: "location_back", text: "Vùng răng hàm" },
          { id: "location_both", text: "Cả răng cửa và răng hàm" }
        ],
        next: {
          location_front: {
            question: "Bạn có bệnh toàn thân nào không?",
            options: [
              { id: "disease_diabetes", text: "Tiểu đường" },
              { id: "disease_hypertension", text: "Cao huyết áp" },
              { id: "disease_osteoporosis", text: "Loãng xương" },
              { id: "disease_heart", text: "Bệnh tim" },
              { id: "disease_none", text: "Không có" }
            ],
            next: {
              disease_diabetes: { question: "Điều bạn coi trọng nhất trong điều trị là gì?", options: [{ id: "priority_cost", text: "Chi phí" }, { id: "priority_pain", text: "Đau" }, { id: "priority_eating", text: "Ăn uống thoải mái" }, { id: "priority_recovery", text: "Hồi phục nhanh và trở lại sinh hoạt bình thường sau phẫu thuật" }], next: { priority_cost: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_pain: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_eating: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_recovery: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] } } },
              disease_hypertension: { question: "Điều bạn coi trọng nhất trong điều trị là gì?", options: [{ id: "priority_cost", text: "Chi phí" }, { id: "priority_pain", text: "Đau" }, { id: "priority_eating", text: "Ăn uống thoải mái" }, { id: "priority_recovery", text: "Hồi phục nhanh và trở lại sinh hoạt bình thường sau phẫu thuật" }], next: { priority_cost: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_pain: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_eating: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_recovery: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] } } },
              disease_osteoporosis: { question: "Điều bạn coi trọng nhất trong điều trị là gì?", options: [{ id: "priority_cost", text: "Chi phí" }, { id: "priority_pain", text: "Đau" }, { id: "priority_eating", text: "Ăn uống thoải mái" }, { id: "priority_recovery", text: "Hồi phục nhanh và trở lại sinh hoạt bình thường sau phẫu thuật" }], next: { priority_cost: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_pain: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_eating: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_recovery: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] } } },
              disease_heart: { question: "Điều bạn coi trọng nhất trong điều trị là gì?", options: [{ id: "priority_cost", text: "Chi phí" }, { id: "priority_pain", text: "Đau" }, { id: "priority_eating", text: "Ăn uống thoải mái" }, { id: "priority_recovery", text: "Hồi phục nhanh và trở lại sinh hoạt bình thường sau phẫu thuật" }], next: { priority_cost: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_pain: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_eating: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_recovery: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] } } },
              disease_none: { question: "Điều bạn coi trọng nhất trong điều trị là gì?", options: [{ id: "priority_cost", text: "Chi phí" }, { id: "priority_pain", text: "Đau" }, { id: "priority_eating", text: "Ăn uống thoải mái" }, { id: "priority_recovery", text: "Hồi phục nhanh và trở lại sinh hoạt bình thường sau phẫu thuật" }], next: { priority_cost: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_pain: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_eating: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_recovery: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] } } }
            }
          },
          location_back: {
            question: "Bạn có bệnh toàn thân nào không?",
            options: [
              { id: "disease_diabetes", text: "Tiểu đường" },
              { id: "disease_hypertension", text: "Cao huyết áp" },
              { id: "disease_osteoporosis", text: "Loãng xương" },
              { id: "disease_heart", text: "Bệnh tim" },
              { id: "disease_none", text: "Không có" }
            ],
            next: {
              disease_diabetes: { question: "Điều bạn coi trọng nhất trong điều trị là gì?", options: [{ id: "priority_cost", text: "Chi phí" }, { id: "priority_pain", text: "Đau" }, { id: "priority_eating", text: "Ăn uống thoải mái" }, { id: "priority_recovery", text: "Hồi phục nhanh và trở lại sinh hoạt bình thường sau phẫu thuật" }], next: { priority_cost: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_pain: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_eating: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_recovery: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] } } },
              disease_hypertension: { question: "Điều bạn coi trọng nhất trong điều trị là gì?", options: [{ id: "priority_cost", text: "Chi phí" }, { id: "priority_pain", text: "Đau" }, { id: "priority_eating", text: "Ăn uống thoải mái" }, { id: "priority_recovery", text: "Hồi phục nhanh và trở lại sinh hoạt bình thường sau phẫu thuật" }], next: { priority_cost: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_pain: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_eating: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_recovery: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] } } },
              disease_osteoporosis: { question: "Điều bạn coi trọng nhất trong điều trị là gì?", options: [{ id: "priority_cost", text: "Chi phí" }, { id: "priority_pain", text: "Đau" }, { id: "priority_eating", text: "Ăn uống thoải mái" }, { id: "priority_recovery", text: "Hồi phục nhanh và trở lại sinh hoạt bình thường sau phẫu thuật" }], next: { priority_cost: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_pain: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_eating: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_recovery: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] } } },
              disease_heart: { question: "Điều bạn coi trọng nhất trong điều trị là gì?", options: [{ id: "priority_cost", text: "Chi phí" }, { id: "priority_pain", text: "Đau" }, { id: "priority_eating", text: "Ăn uống thoải mái" }, { id: "priority_recovery", text: "Hồi phục nhanh và trở lại sinh hoạt bình thường sau phẫu thuật" }], next: { priority_cost: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_pain: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_eating: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_recovery: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] } } },
              disease_none: { question: "Điều bạn coi trọng nhất trong điều trị là gì?", options: [{ id: "priority_cost", text: "Chi phí" }, { id: "priority_pain", text: "Đau" }, { id: "priority_eating", text: "Ăn uống thoải mái" }, { id: "priority_recovery", text: "Hồi phục nhanh và trở lại sinh hoạt bình thường sau phẫu thuật" }], next: { priority_cost: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_pain: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_eating: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_recovery: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] } } }
            }
          },
          location_both: {
            question: "Bạn có bệnh toàn thân nào không?",
            options: [
              { id: "disease_diabetes", text: "Tiểu đường" },
              { id: "disease_hypertension", text: "Cao huyết áp" },
              { id: "disease_osteoporosis", text: "Loãng xương" },
              { id: "disease_heart", text: "Bệnh tim" },
              { id: "disease_none", text: "Không có" }
            ],
            next: {
              disease_diabetes: { question: "Điều bạn coi trọng nhất trong điều trị là gì?", options: [{ id: "priority_cost", text: "Chi phí" }, { id: "priority_pain", text: "Đau" }, { id: "priority_eating", text: "Ăn uống thoải mái" }, { id: "priority_recovery", text: "Hồi phục nhanh và trở lại sinh hoạt bình thường sau phẫu thuật" }], next: { priority_cost: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_pain: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_eating: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_recovery: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] } } },
              disease_hypertension: { question: "Điều bạn coi trọng nhất trong điều trị là gì?", options: [{ id: "priority_cost", text: "Chi phí" }, { id: "priority_pain", text: "Đau" }, { id: "priority_eating", text: "Ăn uống thoải mái" }, { id: "priority_recovery", text: "Hồi phục nhanh và trở lại sinh hoạt bình thường sau phẫu thuật" }], next: { priority_cost: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_pain: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_eating: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_recovery: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] } } },
              disease_osteoporosis: { question: "Điều bạn coi trọng nhất trong điều trị là gì?", options: [{ id: "priority_cost", text: "Chi phí" }, { id: "priority_pain", text: "Đau" }, { id: "priority_eating", text: "Ăn uống thoải mái" }, { id: "priority_recovery", text: "Hồi phục nhanh và trở lại sinh hoạt bình thường sau phẫu thuật" }], next: { priority_cost: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_pain: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_eating: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_recovery: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] } } },
              disease_heart: { question: "Điều bạn coi trọng nhất trong điều trị là gì?", options: [{ id: "priority_cost", text: "Chi phí" }, { id: "priority_pain", text: "Đau" }, { id: "priority_eating", text: "Ăn uống thoải mái" }, { id: "priority_recovery", text: "Hồi phục nhanh và trở lại sinh hoạt bình thường sau phẫu thuật" }], next: { priority_cost: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_pain: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_eating: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_recovery: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] } } },
              disease_none: { question: "Điều bạn coi trọng nhất trong điều trị là gì?", options: [{ id: "priority_cost", text: "Chi phí" }, { id: "priority_pain", text: "Đau" }, { id: "priority_eating", text: "Ăn uống thoải mái" }, { id: "priority_recovery", text: "Hồi phục nhanh và trở lại sinh hoạt bình thường sau phẫu thuật" }], next: { priority_cost: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_pain: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_eating: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_recovery: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] } } }
            }
          }
        }
      },
      implant_revision: {
        question: "Hiện tại bạn có đeo răng giả không?",
        options: [
          { id: "denture_yes", text: "Có" },
          { id: "denture_no", text: "Không" }
        ],
        next: {
          denture_yes: {
            question: "Bạn có bệnh toàn thân nào không?",
            options: [
              { id: "disease_diabetes", text: "Tiểu đường" },
              { id: "disease_hypertension", text: "Cao huyết áp" },
              { id: "disease_osteoporosis", text: "Loãng xương" },
              { id: "disease_heart", text: "Bệnh tim" },
              { id: "disease_none", text: "Không có" }
            ],
            next: {
              disease_diabetes: { question: "Điều bạn coi trọng nhất trong điều trị là gì?", options: [{ id: "priority_cost", text: "Chi phí" }, { id: "priority_pain", text: "Đau" }, { id: "priority_eating", text: "Ăn uống thoải mái" }, { id: "priority_recovery", text: "Hồi phục nhanh và trở lại sinh hoạt bình thường sau phẫu thuật" }], next: { priority_cost: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_pain: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_eating: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_recovery: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] } } },
              disease_hypertension: { question: "Điều bạn coi trọng nhất trong điều trị là gì?", options: [{ id: "priority_cost", text: "Chi phí" }, { id: "priority_pain", text: "Đau" }, { id: "priority_eating", text: "Ăn uống thoải mái" }, { id: "priority_recovery", text: "Hồi phục nhanh và trở lại sinh hoạt bình thường sau phẫu thuật" }], next: { priority_cost: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_pain: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_eating: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_recovery: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] } } },
              disease_osteoporosis: { question: "Điều bạn coi trọng nhất trong điều trị là gì?", options: [{ id: "priority_cost", text: "Chi phí" }, { id: "priority_pain", text: "Đau" }, { id: "priority_eating", text: "Ăn uống thoải mái" }, { id: "priority_recovery", text: "Hồi phục nhanh và trở lại sinh hoạt bình thường sau phẫu thuật" }], next: { priority_cost: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_pain: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_eating: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_recovery: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] } } },
              disease_heart: { question: "Điều bạn coi trọng nhất trong điều trị là gì?", options: [{ id: "priority_cost", text: "Chi phí" }, { id: "priority_pain", text: "Đau" }, { id: "priority_eating", text: "Ăn uống thoải mái" }, { id: "priority_recovery", text: "Hồi phục nhanh và trở lại sinh hoạt bình thường sau phẫu thuật" }], next: { priority_cost: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_pain: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_eating: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_recovery: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] } } },
              disease_none: { question: "Điều bạn coi trọng nhất trong điều trị là gì?", options: [{ id: "priority_cost", text: "Chi phí" }, { id: "priority_pain", text: "Đau" }, { id: "priority_eating", text: "Ăn uống thoải mái" }, { id: "priority_recovery", text: "Hồi phục nhanh và trở lại sinh hoạt bình thường sau phẫu thuật" }], next: { priority_cost: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_pain: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_eating: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_recovery: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] } } }
            }
          },
          denture_no: {
            question: "Bạn có bệnh toàn thân nào không?",
            options: [
              { id: "disease_diabetes", text: "Tiểu đường" },
              { id: "disease_hypertension", text: "Cao huyết áp" },
              { id: "disease_osteoporosis", text: "Loãng xương" },
              { id: "disease_heart", text: "Bệnh tim" },
              { id: "disease_none", text: "Không có" }
            ],
            next: {
              disease_diabetes: { question: "Điều bạn coi trọng nhất trong điều trị là gì?", options: [{ id: "priority_cost", text: "Chi phí" }, { id: "priority_pain", text: "Đau" }, { id: "priority_eating", text: "Ăn uống thoải mái" }, { id: "priority_recovery", text: "Hồi phục nhanh và trở lại sinh hoạt bình thường sau phẫu thuật" }], next: { priority_cost: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_pain: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_eating: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_recovery: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] } } },
              disease_hypertension: { question: "Điều bạn coi trọng nhất trong điều trị là gì?", options: [{ id: "priority_cost", text: "Chi phí" }, { id: "priority_pain", text: "Đau" }, { id: "priority_eating", text: "Ăn uống thoải mái" }, { id: "priority_recovery", text: "Hồi phục nhanh và trở lại sinh hoạt bình thường sau phẫu thuật" }], next: { priority_cost: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_pain: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_eating: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_recovery: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] } } },
              disease_osteoporosis: { question: "Điều bạn coi trọng nhất trong điều trị là gì?", options: [{ id: "priority_cost", text: "Chi phí" }, { id: "priority_pain", text: "Đau" }, { id: "priority_eating", text: "Ăn uống thoải mái" }, { id: "priority_recovery", text: "Hồi phục nhanh và trở lại sinh hoạt bình thường sau phẫu thuật" }], next: { priority_cost: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_pain: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_eating: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_recovery: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] } } },
              disease_heart: { question: "Điều bạn coi trọng nhất trong điều trị là gì?", options: [{ id: "priority_cost", text: "Chi phí" }, { id: "priority_pain", text: "Đau" }, { id: "priority_eating", text: "Ăn uống thoải mái" }, { id: "priority_recovery", text: "Hồi phục nhanh và trở lại sinh hoạt bình thường sau phẫu thuật" }], next: { priority_cost: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_pain: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_eating: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_recovery: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] } } },
              disease_none: { question: "Điều bạn coi trọng nhất trong điều trị là gì?", options: [{ id: "priority_cost", text: "Chi phí" }, { id: "priority_pain", text: "Đau" }, { id: "priority_eating", text: "Ăn uống thoải mái" }, { id: "priority_recovery", text: "Hồi phục nhanh và trở lại sinh hoạt bình thường sau phẫu thuật" }], next: { priority_cost: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_pain: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_eating: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] }, priority_recovery: { question: "Có lý do gì khiến bạn do dự điều trị cho đến nay không?", options: [{ id: "hesitation_cost", text: "Vì chi phí" }, { id: "hesitation_fear", text: "Vì đau/sợ nha khoa" }, { id: "hesitation_clinic", text: "Khó chọn nha khoa phù hợp" }, { id: "hesitation_none", text: "Không có lý do đặc biệt" }] } } }
            }
          }
        }
      }
    }
  },

  // Câu hỏi liên quan đến nướu
  gum_issue: {
    question: "Bạn có triệu chứng gì?",
    options: [
      { id: "gum_bleeding", text: "Nướu chảy máu" },
      { id: "gum_swelling", text: "Nướu bị sưng" },
      { id: "gum_recession", text: "Nướu bị tụt" },
      { id: "gum_wobbly", text: "Răng bị lung lay" }
    ],
    next: {
      gum_bleeding: {
        question: "Khi nào chảy máu?",
        options: [
          { id: "bleeding_brushing", text: "Chỉ khi đánh răng" },
          { id: "bleeding_often", text: "Thường xuyên chảy máu" },
          { id: "bleeding_always", text: "Chảy máu ngay cả khi nghỉ" }
        ]
      },
      gum_swelling: {
        question: "Sưng có kèm đau không?",
        options: [
          { id: "swelling_pain_yes", text: "Có, đau" },
          { id: "swelling_pain_no", text: "Không, chỉ sưng" }
        ]
      },
      gum_recession: {
        question: "Răng có ê buốt hoặc nhạy cảm không?",
        options: [
          { id: "recession_sensitive_yes", text: "Có, ê buốt" },
          { id: "recession_sensitive_no", text: "Không" }
        ]
      },
      gum_wobbly: {
        question: "Mức độ lung lay như thế nào?",
        options: [
          { id: "wobbly_slight", text: "Lung lay nhẹ" },
          { id: "wobbly_severe", text: "Lung lay nhiều" }
        ]
      }
    }
  },

  // Liên quan đến kiểm tra định kỳ
  checkup: {
    question: "Có phần nào bạn đặc biệt lo lắng không?",
    options: [
      { id: "checkup_prevention", text: "Phòng ngừa sâu răng/bệnh nướu" },
      { id: "checkup_cleaning", text: "Muốn lấy cao răng" },
      { id: "checkup_concern", text: "Lo lắng về một răng cụ thể" },
      { id: "checkup_general", text: "Chỉ kiểm tra tổng quát" }
    ]
  }
};
