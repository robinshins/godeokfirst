type PageType = 'home' | 'implant' | 'denture' | 'whitening' | 'wisdom-tooth' | 'cavity-treatment' | 'gum-care' | 'tmj';

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
      question: 'Chuyên gia Nha khoa Tổng hợp\nlà gì?',
      answer: 'Chuyên gia Nha khoa Tổng hợp là chuyên gia nha khoa được Bộ Y tế Phúc lợi chứng nhận, có thể chẩn đoán và điều trị toàn diện tất cả các lĩnh vực nha khoa như Implant, phục hình, bảo tồn, Điều trị nướu. Bác sĩ trưởng Lee Dong-hyun của Godeok First Dental trực tiếp tư vấn, phẫu thuật, đến chăm sóc sau điều trị chịu trách nhiệm đến cùng.'
    },
    {
      question: 'Điểm khác biệt so với\ncác nha khoa khác là gì?',
      answer: 'Chuyên gia Nha khoa Tổng hợp được Bộ Y tế Phúc lợi chứng nhận của Godeok First Dental trực tiếp khám. Khác với nơi bác sĩ phụ trách thường xuyên thay đổi, từ tư vấn đến phẫu thuật và chăm sóc sau điều trị một người chịu trách nhiệm. Hoàn thành Sau đại học Nha khoa ĐH Seoul, Cố vấn nghiên cứu Implant Osstem/Point/Dentis là những điểm khác biệt.'
    },
    {
      question: 'Chi phí điều trị\ncó vẻ đắt quá',
      answer: 'Godeok First Dental cung cấp điều trị chất lượng cao nhất với giá hợp lý. Tận dụng tối đa các hạng mục được áp dụng bảo hiểm, giảm gánh nặng kinh tế thông qua trả góp không lãi suất và các chương trình khuyến mãi đa dạng. Bạn có thể kiểm tra báo giá sơ bộ qua tư vấn AI miễn phí.'
    },
    {
      question: 'Quy trình khi đến\nlần đầu tiên?',
      answer: 'Lần khám đầu tiên, chẩn đoán chính xác tình trạng miệng bằng CT 3D. Sau đó, thông qua tư vấn 1:1 với Chuyên gia Nha khoa Tổng hợp, lập kế hoạch điều trị cá nhân hóa và hướng dẫn chi tiết phương pháp điều trị, chi phí và thời gian.'
    }
  ],
  denture: [
    {
      question: 'Hàm giả và Implant,\ncái nào phù hợp với tôi?',
      answer: 'Nếu gánh nặng chi phí lớn, Hàm giả được bảo hiểm y tế chi trả là phù hợp; nếu bạn muốn lực nhai tốt và thoải mái, điều trị dòng Implant tốt hơn. Godeok First Dental đề xuất phương pháp điều trị tối ưu xem xét toàn diện tình trạng xương, tuổi tác và ngân sách.'
    },
    {
      question: 'Từ 65 tuổi trở lên\ncó được bảo hiểm không?',
      answer: 'Vâng, nếu từ 65 tuổi trở lên, bảo hiểm y tế được áp dụng cho tối đa 2 Implant. Ngoài ra, Hàm giả cũng thuộc đối tượng bảo hiểm y tế nên có thể giảm đáng kể phần tự chi trả. Phạm vi bảo hiểm cụ thể sẽ được hướng dẫn chi tiết khi đến bệnh viện.'
    },
    {
      question: 'All on X Implant,\ncó thể thực hiện khi thiếu xương không?',
      answer: 'Có thể thực hiện ngay cả với người có tình trạng xương không tốt. All on X chọn vùng xương tốt để cấy Implant, nên có thể giảm thiểu ghép xương. Sau khi chẩn đoán chính xác bằng CT 3D, chúng tôi sẽ hướng dẫn chính xác khả năng thực hiện.'
    },
    {
      question: 'Thời gian điều trị Implant toàn hàm\nmất bao lâu?',
      answer: 'All on X trung bình 3~6 tháng, Implant toàn hàm truyền thống mất khoảng 6 tháng~1 năm tùy thuộc vào việc ghép xương. Ngay sau phẫu thuật sẽ được lắp phục hình tạm thời nên không có thời gian phải sống thiếu răng.'
    },
    {
      question: 'Sau Implant toàn hàm\ncó thể ăn uống thoải mái không?',
      answer: 'Vâng, khi điều trị hoàn thành thành công, hầu như không có hạn chế trong ăn uống. Phục hồi 80~90% lực nhai của răng tự nhiên, bạn có thể thoải mái ăn thịt, táo và các thức ăn cứng khác.'
    },
  ],
  implant: [
    {
      question: 'Chỉ thực hiện\nImplant toàn hàm thôi sao?',
      answer: 'Không. Godeok First Dental thực hiện tất cả các điều trị Implant từ 1 răng đến Implant toàn hàm (All on X). Implant đơn lẻ cũng được áp dụng hệ thống Phẫu thuật dẫn đường kỹ thuật số tương tự, cung cấp điều trị chính xác và nhanh chóng.'
    },
    {
      question: 'Phẫu thuật dẫn đường kỹ thuật số,\ncó đắt không?',
      answer: 'Godeok First Dental cung cấp điều trị Implant chất lượng cao với giá hợp lý. Với sự chính xác của Phẫu thuật dẫn đường kỹ thuật số, làm đúng một lần sẽ kinh tế hơn về lâu dài. Từ 65 tuổi trở lên có thể áp dụng bảo hiểm y tế, và chúng tôi sẽ giảm gánh nặng thông qua trả góp không lãi suất và các ưu đãi đa dạng.'
    },
    {
      question: 'Sau phẫu thuật có\năn được ngay không?',
      answer: 'Vâng, có thể. Ngay sau phẫu thuật cung cấp răng tạm để có thể ăn thức ăn mềm. Không có ngày nào phải sống thiếu răng, từ ngay sau phẫu thuật đến khi lắp phục hình cuối cùng, bạn có thể duy trì cuộc sống hàng ngày thoải mái.'
    },
    {
      question: 'Phẫu thuật dẫn đường kỹ thuật số\nkhác phẫu thuật thông thường thế nào?',
      answer: 'Phẫu thuật dẫn đường kỹ thuật số sử dụng Quét miệng 3D để Chẩn đoán chính xác, sau đó tiến hành phẫu thuật mô phỏng trên máy tính trước. Qua đó thiết kế vị trí cấy ghép tối ưu, giảm thiểu sai số đến 1mm và giảm thiểu vết cắt. Kết quả là thời gian thủ thuật được rút ngắn, đau, sưng và ghép xương được giảm thiểu.'
    },
    {
      question: 'Điều trị Implant toàn hàm,\nmất bao lâu?',
      answer: 'Tùy thuộc vào tình trạng miệng cá nhân, nhưng thường mất khoảng 3-6 tháng. Từ ngay sau phẫu thuật, bạn có thể sử dụng răng tạm, và sau khi xương và Implant hoàn toàn tích hợp sẽ hoàn tất tất cả điều chỉnh. Thời gian chính xác sẽ được hướng dẫn sau khi chẩn đoán CT 3D.'
    },
    {
      question: 'Phẫu thuật cấy ghép Implant,\ncó đau không?',
      answer: 'Có thể thực hiện thủ thuật thoải mái thông qua an thần có ý thức (gây mê). Trong quá trình phẫu thuật hầu như không cảm thấy đau. Sau phẫu thuật, nhờ phương pháp cắt tối thiểu của Phẫu thuật dẫn đường kỹ thuật số, sưng và đau ít hơn đáng kể so với phẫu thuật thông thường. Thuốc giảm đau được kê đơn đủ để quản lý.'
    },
    {
      question: 'Implant toàn hàm\nthực sự tốt hơn Hàm giả sao?',
      answer: 'Vâng, chắc chắn khác biệt. Hàm giả chỉ duy trì 30% lực nhai của răng tự nhiên, nhưng Implant phục hồi đến 80-90% và cảm giác nhai hoàn toàn khác. Không cần tháo lắp phiền phức, chăm sóc đơn giản như răng tự nhiên và vệ sinh. Chỉ cần thực hiện một lần có thể sử dụng cả đời, và có thể cười tươi giúp lấy lại sự tự tin về mặt tâm lý.'
    }
  ],
  whitening: [
    {
      question: 'Tẩy trắng răng,\nai cũng có thể thực hiện không?',
      answer: 'Hầu hết người lớn khỏe mạnh đều có thể thực hiện tẩy trắng. Tuy nhiên, nếu có sâu răng hoặc bệnh nướu, nên điều trị trước rồi mới tiến hành, và không khuyến nghị cho phụ nữ mang thai hoặc đang cho con bú. Trước khi thực hiện, Chuyên gia Nha khoa Tổng hợp sẽ chẩn đoán chính xác tình trạng răng để đánh giá sự phù hợp.'
    },
    {
      question: 'Tẩy trắng nha khoa thực sự\nhiệu quả hơn tẩy trắng tại nhà?',
      answer: 'Vâng, chắc chắn khác biệt. Nha khoa sử dụng hydrogen peroxide nồng độ cao (dược phẩm) cho hiệu quả tức thì. Tẩy trắng tại nhà dùng thuốc không kê đơn nồng độ thấp nên hiệu quả hạn chế, còn tẩy trắng nha khoa bảo vệ nướu hoàn hảo trước khi thực hiện nên an toàn hơn nhiều.'
    },
    {
      question: 'Sau tẩy trắng\nrăng có bị ê buốt không?',
      answer: 'Godeok First Dental sử dụng thiết bị tẩy trắng mới nhất, có chứa chất chống ê buốt nên triệu chứng ê buốt được giảm thiểu. Trước khi thực hiện sẽ chẩn đoán chính xác tình trạng răng, và sau khi thực hiện cũng hướng dẫn chi tiết cách chăm sóc để bạn có thể duy trì răng sáng mà không có khó chịu.'
    },
    {
      question: 'Hiệu quả tẩy trắng\nkéo dài bao lâu?',
      answer: 'Thông thường kéo dài khoảng 1-2 năm, và có sự khác biệt tùy theo thói quen ăn uống và tình trạng chăm sóc cá nhân. Nếu giảm các yếu tố gây đổi màu như cà phê, rượu vang, hút thuốc và lấy cao răng định kỳ cùng chăm sóc, bạn có thể duy trì lâu hơn.'
    },
    {
      question: 'Lấy cao răng và tẩy trắng\nnhận cùng lúc có giảm giá không?',
      answer: 'Vâng, nếu bạn nhận tẩy trắng cùng lúc với lấy cao răng, sẽ được giảm giá. Lấy cao răng giúp làm sạch bề mặt răng trước rồi tẩy trắng thì hiệu quả càng tốt hơn.'
    }
  ],
  'wisdom-tooth': [
    {
      question: 'Nhổ răng khôn,\ncó bắt buộc phải nhổ không?',
      answer: 'Ngay cả khi không đau, có thể gây viêm nhiễm, sâu răng, mất cân bằng hàm răng bên trong nướu. Sau khi chẩn đoán chính xác bằng CT 3D sẽ đánh giá có cần nhổ hay không, nếu không nhổ trước có thể phát sinh vấn đề như viêm cấp tính, tổn thương răng kế cận, rối loạn khớp thái dương hàm. Càng trẻ phục hồi càng nhanh và nguy cơ biến chứng ít hơn.'
    },
    {
      question: 'Răng khôn độ khó cao\ncũng nhổ được không?',
      answer: 'Vâng, có thể. Godeok First Dental có kinh nghiệm nhổ răng phong phú và trang bị hệ thống nhổ răng độ khó cấp bệnh viện đại học. Các trường hợp khó như răng khôn nằm ngang, răng khôn ngầm hoàn toàn mà nha khoa thông thường phải chuyển bệnh viện lớn cũng được nhổ an toàn bằng chẩn đoán chính xác CT 3D.'
    },
    {
      question: 'Nhổ răng khôn,\ncó đau không?',
      answer: 'Với hệ thống gây tê giảm đau mới nhất, hầu như không cảm thấy đau trong quá trình thủ thuật. Người lo lắng có thể sử dụng an thần có ý thức (gây mê) để thực hiện thoải mái. Sau thủ thuật, sưng và đau có thể quản lý đủ bằng thuốc được kê đơn, và càng trẻ phục hồi càng nhanh.'
    },
    {
      question: 'Sau nhổ răng khôn\ncó lưu ý gì không?',
      answer: 'Sau nhổ răng, tránh thức ăn nóng và kích thích, ăn thức ăn mềm. Tránh tập thể dục mạnh và xông hơi trong 2-3 ngày, uống thuốc kháng sinh và chống viêm được kê đều đặn. Cắn gạc khoảng 30 phút đến 1 giờ, tránh đánh răng quá mạnh hoặc dùng ống hút. Hướng dẫn chăm sóc chi tiết sau điều trị.'
    },
    {
      question: 'Nhổ răng khôn,\ncó thể khám nhanh không?',
      answer: 'Có thể nhổ ngay sau chụp và chẩn đoán CT 3D. Hệ thống khám một lần hoàn tất từ chẩn đoán đến nhổ răng và chăm sóc sau. Tuy nhiên, nếu viêm nặng thì nhổ sau điều trị chống viêm an toàn hơn, đội ngũ y tế sẽ hướng dẫn thời điểm tối ưu theo tình trạng miệng cá nhân.'
    },
  ],
  'cavity-treatment': [
    {
      question: 'Nơi khác bảo nhổ\ncó cứu được không?',
      answer: 'Vâng, khả năng cao. Chuyên gia Nha khoa Tổng hợp Godeok First Dental chẩn đoán chính xác. Có thể tìm ra cách cứu răng mà nha khoa thông thường không phát hiện, và ưu tiên hàng đầu là cứu răng tự nhiên. Sau khi chẩn đoán chính xác, chúng tôi sẽ hướng dẫn phương pháp tốt nhất.'
    },
    {
      question: 'Điều trị tủy,\ncó đau không?',
      answer: 'Giảm thiểu đau bằng hệ thống gây tê giảm đau mới nhất. Người lo lắng có thể thoải mái thực hiện với an thần có ý thức (gây mê). Điều trị chính xác của Chuyên gia Nha khoa Tổng hợp giảm thiểu tái phát và tác dụng phụ, và sau điều trị chúng tôi sẽ liên tục chăm sóc.'
    },
    {
      question: 'Điều trị sâu răng,\ncó mất nhiều thời gian không?',
      answer: 'Sâu răng giai đoạn đầu được hoàn thành nhanh chóng bằng điều trị resin, sâu răng rộng có thể điều trị bằng hệ thống inlay. Trường hợp cần điều trị tủy thì cần 2-3 lần đến khám, nhưng điều trị chính xác giúp giảm thiểu số lần điều trị. Thời gian chính xác sẽ được hướng dẫn tùy theo tình trạng miệng cá nhân.'
    },
    {
      question: 'Điều trị sâu răng,\ncó được bảo hiểm không?',
      answer: 'Vâng, hầu hết Điều trị sâu răng được bảo hiểm y tế chi trả. Bạn có thể nhận quyền lợi bảo hiểm cho các điều trị cơ bản như điều trị resin, điều trị tủy, mão răng, còn inlay/onlay có thể phát sinh chi phí tự trả. Khi khám lần đầu, chúng tôi sẽ hướng dẫn chi tiết chi phí chính xác và khả năng bảo hiểm.'
    }
  ],
  'tmj': [
    {
      question: 'Hàm chỉ có tiếng kêu\ncó cần điều trị không?',
      answer: 'Tiếng kêu ở hàm là tín hiệu đĩa khớp lệch khỏi vị trí bình thường. Ngay cả khi không đau, nếu bỏ qua, đĩa khớp bị tổn thương tiến triển có thể dẫn đến hạn chế há miệng hoặc đau mãn tính.\n\nChẩn đoán và quản lý sớm sẽ cải thiện bằng điều trị đơn giản.'
    },
    {
      question: 'Splint (máng ổn định khớp cắn)\ncó bắt buộc không?',
      answer: 'Nếu nguyên nhân là nghiến răng hoặc siết chặt răng, nẹp là phương pháp điều trị hiệu quả nhất. Giảm tải lực quá mức lên khớp thái dương hàm trong khi ngủ, phân tán lực và bảo vệ khớp.\n\nĐược chế tạo tùy chỉnh cho từng bệnh nhân, và điều chỉnh khớp cắn định kỳ để nâng cao hiệu quả điều trị.'
    },
    {
      question: 'Thời gian điều trị khớp thái dương hàm\nmất bao lâu?',
      answer: 'Đau cấp tính thường cải thiện trong 1~2 tuần bằng điều trị thuốc và vật lý trị liệu. Điều trị nẹp thường mất khoảng 3~6 tháng.\n\nVì có sự khác biệt tùy theo mức độ triệu chứng và nguyên nhân, sau khi chẩn đoán chính xác chúng tôi sẽ hướng dẫn thời gian điều trị chính xác.'
    },
    {
      question: 'Điều trị khớp thái dương hàm,\ncó được bảo hiểm không?',
      answer: 'Chụp X-ray để chẩn đoán khớp thái dương hàm, kê đơn thuốc được bảo hiểm y tế chi trả. Điều trị nẹp là hạng mục không bảo hiểm, nhưng về lâu dài có thể tránh phẫu thuật nên kinh tế hơn nhiều.\n\nChi phí chi tiết sẽ được hướng dẫn khi tư vấn.'
    }
  ],
  'gum-care': [
    {
      question: 'Chỉ lấy cao răng\nthì chưa đủ sao?',
      answer: 'Lấy cao răng là bước đầu tiên để loại bỏ cao răng. Tuy nhiên, nếu bệnh nướu đã tiến triển, cần dùng thiết bị đặc biệt để loại bỏ vi khuẩn sâu trong nướu và cần điều trị chính xác.\n\nNếu nhận điều trị nướu mỗi 6 tháng, bạn có thể bảo tồn răng tự nhiên lâu dài.'
    },
    {
      question: 'Nghe nói Điều trị nướu đau lắm\ncó sao không?',
      answer: 'Đừng lo lắng. Chúng tôi có hệ thống gây tê giảm đau nên bạn có thể điều trị mà không có khó chịu.\n\nNhiều bệnh nhân ngạc nhiên nói rằng "Điều trị nha khoa cũng có thể thoải mái như thế này".'
    },
    {
      question: 'Bao lâu cần\nđiều trị một lần?',
      answer: 'Lấy cao răng cơ bản 1 lần/năm (được bảo hiểm), Điều trị nướu nên thực hiện mỗi 6 tháng là lý tưởng.\n\nTrường hợp nướu nghiêm trọng, chăm sóc mỗi 3 tháng sẽ hiệu quả hơn. Với chăm sóc định kỳ, bạn có thể sử dụng răng tự nhiên cả đời mà không cần Implant.'
    },
    {
      question: 'Bảo hiểm\nđược áp dụng thế nào?',
      answer: 'Lấy cao răng được bảo hiểm y tế 1 lần/năm. Trường hợp cần Điều trị nướu, bảo hiểm cũng được áp dụng và được tiến hành chia thành nhiều lần.\n\nPhạm vi bảo hiểm chi tiết sẽ được hướng dẫn thông qua tư vấn.'
    },
    {
      question: 'Tại sao nha khoa khác\nkhông muốn điều trị nướu?',
      answer: 'Thẳng thắn mà nói, vì Implant có lợi nhuận tốt hơn Điều trị nướu. Ngoài ra, nếu sau Điều trị nướu cuối cùng phải nhổ thì bệnh nhân có thể không hài lòng nên nhiều nha khoa ngại.\n\nNhưng chúng tôi ưu tiên bảo tồn răng tự nhiên hàng đầu, và tự hào với tỷ lệ thành công cao nhờ khám chính xác của Chuyên gia Nha khoa Tổng hợp.'
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
