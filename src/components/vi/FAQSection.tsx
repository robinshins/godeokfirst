type PageType = 'home' | 'implant' | 'whitening' | 'wisdom-tooth' | 'cavity-treatment' | 'gum-care';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  page?: PageType;
}

const faqData: Record<PageType, FAQ[]> = {
  home: [
    {
      question: '0 ca tái phẫu thuật trong 10 năm,\nđiều này có thật không?',
      answer: 'Vâng, đây là sự thật. Nha khoa Kyungsung Medis ghi nhận 0 ca tái phẫu thuật do thất bại trong 10 năm nhờ phẫu thuật hướng dẫn kỹ thuật số chính xác và chăm sóc hậu phẫu kỹ lưỡng. Không có một trường hợp nào implant bị rơi hoặc phải phẫu thuật lại do lỗi. Với hệ thống hợp tác giữa chuyên gia nha khoa tổng hợp và chuyên gia bảo tồn, chúng tôi cam kết chỉ một lần điều trị suốt đời.'
    },
    {
      question: 'Điểm khác biệt với\ncác nha khoa khác là gì?',
      answer: 'Kinh nghiệm và năng lực số 1 về phẫu thuật implant tại quận Nam, Busan (1,500+ ca), là bệnh viện chỉ định chính thức của các trường đại học và tổ chức nổi tiếng, được chứng nhận là bệnh viện ưu tú về implant Megagen/Osstem/Neo, và chuyên môn giảng dạy cho nha sĩ toàn quốc.'
    },
    {
      question: 'Chi phí điều trị\ncó đắt không?',
      answer: 'Nha khoa Kyungsung Medis cung cấp điều trị chất lượng cao với giá hợp lý. Chúng tôi tận dụng tối đa các khoản bảo hiểm có thể áp dụng, và giảm gánh nặng tài chính thông qua trả góp không lãi suất và các chương trình khuyến mãi. Bạn có thể kiểm tra ước tính chi phí qua tư vấn AI miễn phí.'
    },
    {
      question: 'Quy trình khám\nlần đầu như thế nào?',
      answer: 'Lần khám đầu tiên, chúng tôi chẩn đoán chính xác tình trạng răng miệng bằng CT 3D. Sau đó, bạn sẽ được tư vấn 1:1 với chuyên gia nha khoa tổng hợp hoặc chuyên gia bảo tồn để lập kế hoạch điều trị cá nhân, và được hướng dẫn chi tiết về phương pháp điều trị, chi phí và thời gian.'
    }
  ],
  implant: [
    {
      question: 'Chỉ thực hiện\nimplant toàn hàm thôi sao?',
      answer: 'Không. Nha khoa Kyungsung Medis thực hiện tất cả các loại điều trị implant từ 1 răng đến implant toàn hàm (All on X). Implant đơn lẻ cũng được áp dụng phẫu thuật hướng dẫn kỹ thuật số và hệ thống phòng lab nội bộ, đảm bảo điều trị chính xác và nhanh chóng.'
    },
    {
      question: 'Phẫu thuật hướng dẫn kỹ thuật số\ncó đắt không?',
      answer: 'Nha khoa Kyungsung Medis cung cấp điều trị implant chất lượng cao với giá hợp lý. Với độ chính xác của phẫu thuật hướng dẫn kỹ thuật số, không có nguy cơ tái phẫu thuật nên về lâu dài còn tiết kiệm hơn. Người từ 65 tuổi trở lên có thể áp dụng bảo hiểm y tế, và chúng tôi giảm gánh nặng qua trả góp không lãi suất và các chương trình khuyến mãi.'
    },
    {
      question: 'Sau phẫu thuật\ncó thể ăn ngay không?',
      answer: 'Vâng, có thể. Nhờ răng tạm độ cứng cao được làm ngay tại phòng lab nội bộ, bạn có thể ăn thức ăn mềm ngay sau phẫu thuật. Không có ngày nào phải sống không có răng, và bạn có thể duy trì sinh hoạt bình thường từ ngay sau phẫu thuật đến khi lắp răng vĩnh viễn.'
    },
    {
      question: 'Phẫu thuật hướng dẫn kỹ thuật số\nkhác gì so với phẫu thuật thông thường?',
      answer: 'Phẫu thuật hướng dẫn kỹ thuật số tiến hành phẫu thuật ảo trên máy tính sau khi chẩn đoán chính xác bằng quét 3D răng miệng. Qua đó thiết kế vị trí cấy ghép tối ưu, giảm thiểu sai số đến 1mm và giảm thiểu vết cắt. Kết quả là thời gian phẫu thuật rút ngắn, giảm đau, sưng và ghép xương.'
    },
    {
      question: 'Điều trị implant toàn hàm\nmất bao lâu?',
      answer: 'Tùy thuộc vào tình trạng răng miệng của từng người, thường mất khoảng 3-6 tháng. Với hệ thống implant phục hình tức thời, bạn có thể sử dụng răng tạm ngay sau phẫu thuật, và lắp răng vĩnh viễn sau khi xương và implant hoàn toàn liền hợp. Thời gian chính xác sẽ được hướng dẫn sau khi chẩn đoán CT 3D.'
    },
    {
      question: 'Phẫu thuật implant\ncó đau không?',
      answer: 'Bạn có thể điều trị thoải mái với phương pháp an thần có ý thức (gây mê nhẹ). Trong quá trình phẫu thuật gần như không cảm thấy đau, và sau phẫu thuật, nhờ phương pháp cắt tối thiểu của phẫu thuật hướng dẫn kỹ thuật số, sưng và đau giảm đáng kể so với phẫu thuật thông thường. Có thể kiểm soát tốt bằng thuốc giảm đau được kê đơn.'
    },
    {
      question: 'Implant toàn hàm\nthực sự tốt hơn răng giả sao?',
      answer: 'Vâng, hoàn toàn khác biệt. Răng giả chỉ duy trì 30% lực nhai của răng tự nhiên, trong khi implant phục hồi lên đến 80-90%, cảm giác nhai hoàn toàn khác. Không cần tháo lắp, chăm sóc đơn giản như răng tự nhiên và vệ sinh hơn. Một lần điều trị có thể sử dụng suốt đời, và có thể cười tươi tự tin, lấy lại sự tự tin về mặt tâm lý.'
    }
  ],
  whitening: [
    {
      question: 'Dán sứ laminate hay tẩy trắng,\ncái nào phù hợp với tôi?',
      answer: 'Nếu chỉ muốn làm sáng màu răng, chọn tẩy trắng. Nếu muốn cải thiện cả hình dáng và sắp xếp răng, chọn dán sứ laminate. Laminate có thể cải thiện đồng thời màu sắc, hình dáng, kích thước và sắp xếp răng, với bảo hành 2 năm để bạn yên tâm điều trị.'
    },
    {
      question: 'Tẩy trắng tại nha khoa\nthực sự hiệu quả hơn tự tẩy trắng không?',
      answer: 'Vâng, hoàn toàn khác biệt. Nha khoa sử dụng hydrogen peroxide nồng độ cao 15% (thuốc) nên thấy hiệu quả ngay lập tức. Tự tẩy trắng sử dụng thuốc nồng độ thấp nên hiệu quả hạn chế, còn tẩy trắng tại nha khoa an toàn hơn vì chuyên gia bảo vệ nướu hoàn toàn trước khi điều trị.'
    },
    {
      question: 'Sau tẩy trắng răng\ncó bị ê buốt không?',
      answer: 'Nha khoa Kyungsung Medis sử dụng hệ thống Osstem Beauties có chứa chất chống ê buốt nên triệu chứng ê buốt được giảm thiểu. Trước điều trị, chúng tôi chẩn đoán chính xác tình trạng răng, và sau điều trị hướng dẫn chi tiết cách chăm sóc để bạn duy trì răng trắng sáng mà không khó chịu.'
    },
    {
      question: 'Hiệu quả tẩy trắng\nduy trì được bao lâu?',
      answer: 'Thông thường duy trì khoảng 1-2 năm, có thể khác nhau tùy thói quen ăn uống và cách chăm sóc. Nếu giảm các yếu tố gây đổi màu như cà phê, rượu vang, hút thuốc và lấy cao răng định kỳ, có thể duy trì lâu hơn. Tẩy trắng Best (4 chu kỳ) hiệu quả rõ rệt và lâu dài hơn tẩy trắng cơ bản.'
    },
    {
      question: 'Lấy cao răng và tẩy trắng\ncùng lúc có giảm giá không?',
      answer: 'Vâng, khi lấy cao răng theo chương trình kiểm tra sức khỏe quốc gia, bạn được giảm 50% khi tẩy trắng. Cả tẩy trắng cơ bản (1 chu kỳ) và tẩy trắng Best (2 lần đến, 4 chu kỳ) đều được giảm giá, và hiệu quả sẽ tốt hơn khi tẩy trắng sau khi làm sạch bề mặt răng bằng lấy cao răng.'
    }
  ],
  'wisdom-tooth': [
    {
      question: 'Nhổ răng khôn\ncó cần thiết không?',
      answer: 'Ngay cả khi không đau, răng khôn vẫn có thể gây viêm, sâu răng, mất cân bằng hàm bên trong nướu. Sau khi chẩn đoán chính xác bằng CT 3D, chúng tôi sẽ đánh giá có cần nhổ hay không. Nếu không nhổ sớm, có thể xảy ra viêm cấp tính, hư răng bên cạnh, rối loạn khớp thái dương hàm. Càng trẻ càng hồi phục nhanh và ít biến chứng.'
    },
    {
      question: 'Răng khôn khó nhổ\ncó nhổ được không?',
      answer: 'Vâng, có thể. Nha khoa Kyungsung Medis có hơn 2,700 ca nhổ răng và hệ thống có thể xử lý các ca khó ngang tầm bệnh viện đại học. Các trường hợp khó như răng nằm ngang, răng ngầm hoàn toàn mà nha khoa thông thường chuyển đến bệnh viện lớn, chúng tôi cũng nhổ an toàn với chẩn đoán chính xác CT 3D.'
    },
    {
      question: 'Nhổ răng khôn\ncó đau không?',
      answer: 'Với hệ thống gây tê giảm đau hiện đại, bạn gần như không cảm thấy đau trong quá trình điều trị. Nếu lo lắng, bạn có thể điều trị thoải mái với phương pháp an thần có ý thức (gây mê nhẹ). Sưng và đau sau điều trị có thể kiểm soát tốt bằng thuốc được kê đơn, càng trẻ càng hồi phục nhanh.'
    },
    {
      question: 'Sau nhổ răng khôn\ncần lưu ý gì?',
      answer: 'Sau nhổ răng, tránh thức ăn nóng và kích thích, ăn thức ăn mềm. Tránh vận động mạnh và xông hơi trong 2-3 ngày, uống kháng sinh và thuốc chống viêm đều đặn theo đơn. Cắn gạc khoảng 30 phút - 1 tiếng, tránh đánh răng quá mạnh hoặc dùng ống hút. Cách chăm sóc chi tiết sẽ được hướng dẫn sau điều trị.'
    },
    {
      question: 'Nhổ răng khôn\ncó điều trị nhanh được không?',
      answer: 'Có thể nhổ ngay sau khi chụp CT 3D và chẩn đoán. Với hệ thống điều trị một lần, từ chẩn đoán đến nhổ răng và chăm sóc hậu phẫu đều hoàn thành trong một lần đến. Tuy nhiên, nếu viêm nặng, an toàn hơn là điều trị viêm trước rồi nhổ, bác sĩ sẽ hướng dẫn thời điểm tối ưu tùy tình trạng răng miệng.'
    },
  ],
  'cavity-treatment': [
    {
      question: 'Nơi khác bảo phải nhổ,\ncó thể cứu được không?',
      answer: 'Vâng, khả năng cao. Nha khoa Kyungsung Medis có chuyên gia bảo tồn chẩn đoán chính xác với kính hiển vi phóng đại 25 lần. Có thể tìm ra cách cứu răng mà nha khoa thông thường không thấy được, cứu răng tự nhiên là sứ mệnh của chuyên gia bảo tồn. Sau khi chẩn đoán chính xác, chúng tôi sẽ hướng dẫn phương pháp tốt nhất.'
    },
    {
      question: 'Điều trị tủy\ncó đau không?',
      answer: 'Với hệ thống gây tê giảm đau hiện đại và kính hiển vi, đau được giảm thiểu. Nếu lo lắng, bạn có thể điều trị thoải mái với phương pháp an thần có ý thức (gây mê nhẹ). Điều trị chính xác của chuyên gia bảo tồn giảm thiểu tái phát và tác dụng phụ, và chúng tôi tiếp tục chăm sóc sau điều trị.'
    },
    {
      question: 'Điều trị sâu răng\nmất bao lâu?',
      answer: 'Sâu răng giai đoạn đầu hoàn thành nhanh với điều trị trám, sâu răng lớn có thể điều trị trong 24 giờ với hệ thống inlay. Nếu cần điều trị tủy, cần đến 2-3 lần, nhưng với điều trị chính xác bằng kính hiển vi, số lần điều trị được giảm thiểu. Thời gian chính xác sẽ được hướng dẫn tùy tình trạng răng miệng.'
    },
    {
      question: 'Điều trị bằng kính hiển vi\nkhác gì so với điều trị thông thường?',
      answer: 'Kính hiển vi phóng đại răng lên đến 25 lần, xác định chính xác sâu răng, vết nứt, ống tủy mà mắt thường không thấy được. Qua đó có thể chẩn đoán và điều trị chính xác, giảm thiểu tái phát và tác dụng phụ, cũng như giảm tổn thương mô xung quanh. Đây là thiết bị chỉ có ở một số bệnh viện đại học và nha khoa chuyên khoa.'
    },
    {
      question: 'Điều trị sâu răng\ncó áp dụng bảo hiểm không?',
      answer: 'Vâng, hầu hết điều trị sâu răng được áp dụng bảo hiểm y tế. Các điều trị cơ bản như trám răng, điều trị tủy, mão răng đều được hưởng bảo hiểm, inlay/onlay có thể phải tự chi trả một phần. Khi khám lần đầu, chúng tôi sẽ hướng dẫn chi tiết về chi phí chính xác và phạm vi bảo hiểm.'
    }
  ],
  'gum-care': [
    {
      question: 'Chỉ lấy cao răng\nthôi có đủ không?',
      answer: 'Lấy cao răng là bước đầu tiên của việc loại bỏ cao răng. Tuy nhiên, nếu bệnh nướu đã tiến triển, cần điều trị chính xác bằng thiết bị đặc biệt như NSK varios 970 để loại bỏ vi khuẩn sâu trong nướu.\n\nNếu điều trị nướu định kỳ 6 tháng một lần, bạn có thể bảo tồn răng tự nhiên lâu dài.'
    },
    {
      question: 'Nghe nói điều trị nướu đau,\ncó sao không?',
      answer: 'Đừng lo lắng. Chúng tôi có hệ thống giảm đau 4 bước: gây tê súc miệng, gây tê bôi, máy gây tê điện giảm đau, máy gây tê thần kinh.\n\nNhiều bệnh nhân ngạc nhiên rằng "điều trị nha khoa cũng có thể thoải mái như thế này". Chúng tôi cố gắng hết sức để bạn điều trị mà không khó chịu.'
    },
    {
      question: 'Cần điều trị\nbao lâu một lần?',
      answer: 'Lấy cao răng cơ bản 1 năm/lần (áp dụng bảo hiểm), điều trị nướu lý tưởng là 6 tháng/lần.\n\nNếu tình trạng nướu nghiêm trọng, điều trị 3 tháng/lần sẽ hiệu quả hơn. Với chăm sóc định kỳ, bạn có thể sử dụng răng tự nhiên suốt đời mà không cần implant.'
    },
    {
      question: 'Bảo hiểm áp dụng\nnhư thế nào?',
      answer: 'Lấy cao răng được áp dụng bảo hiểm y tế 1 năm/lần. Nếu cần điều trị nướu, có thể được áp dụng bảo hiểm và được chia ra để điều trị.\n\nPhạm vi bảo hiểm chi tiết sẽ được hướng dẫn qua tư vấn.'
    },
    {
      question: 'Tại sao nha khoa khác\nkhông muốn điều trị nướu?',
      answer: 'Nói thật, vì implant có lợi nhuận cao hơn điều trị nướu. Ngoài ra, nếu cuối cùng phải nhổ răng sau điều trị nướu, có thể có phàn nàn từ bệnh nhân nên nhiều nha khoa ngại.\n\nTuy nhiên, chúng tôi đặt bảo tồn răng tự nhiên lên hàng đầu, và tự hào có tỷ lệ thành công cao với hệ thống hợp tác chuyên gia bảo tồn.'
    }
  ]
};

export default function FAQSection({ page = 'home' }: FAQSectionProps) {
  const faqs = faqData[page];

  return (
    <div className="bg-white">
      <div className="max-w-[430px] mx-auto px-4 py-[60px]">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-[#292a2f] text-center mb-[60px]">
          Câu hỏi thường gặp
        </h2>

        {/* FAQ Items */}
        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`py-10 space-y-5 ${
                index !== faqs.length - 1 ? 'border-b border-[#e9ebf1]' : ''
              }`}
            >
              <h3 className="text-[22px] font-bold text-black leading-[1.4] whitespace-pre-line">
                {faq.question}
              </h3>
              <p className="text-[17px] font-medium text-[#5d5f6d] leading-[1.59] pr-5">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
