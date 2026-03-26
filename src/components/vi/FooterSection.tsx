'use client';

import { useState } from 'react';
import Link from 'next/link';

type ModalType = 'privacy' | 'terms' | 'rights' | 'prices' | null;

export default function FooterSection() {
  const [openModal, setOpenModal] = useState<ModalType>(null);

  return (
    <footer className="bg-white border-t border-[#e9ebf1]">
      {/* Tuyên bố miễn trừ tuân thủ luật y tế */}
      <div className="bg-gray-100 py-4 px-4">
        <div className="max-w-[430px] mx-auto">
          <p className="text-[10px] text-gray-500 leading-relaxed text-center">
            Các trường hợp điều trị và đánh giá trên trang web này dựa trên kinh nghiệm cá nhân, hiệu quả điều trị có thể khác nhau tùy từng người.
            Mọi thủ thuật y tế đều có thể phát sinh tác dụng phụ như chảy máu, nhiễm trùng, sưng tấy, vui lòng tham khảo ý kiến bác sĩ chuyên khoa để chẩn đoán và lập kế hoạch điều trị chính xác.
          </p>
        </div>
      </div>

      <div className="max-w-[430px] mx-auto px-4 py-10">
        <div className="space-y-20">
          {/* Footer Links */}
          <div className="flex justify-between text-[13px] font-semibold text-[#37373e]">
            <button onClick={() => setOpenModal('privacy')} className="hover:text-gray-900">Chính sách bảo mật</button>
            <button onClick={() => setOpenModal('terms')} className="hover:text-gray-900">Điều khoản sử dụng</button>
            <button onClick={() => setOpenModal('rights')} className="hover:text-gray-900">Quyền và nghĩa vụ của bệnh nhân</button>
            <button onClick={() => setOpenModal('prices')} className="hover:text-gray-900">Danh mục không bảo hiểm</button>
          </div>

          {/* Company Info */}
          <div className="space-y-8">
            <div className="space-y-3.5">
              <div className="text-xl font-bold text-gray-900">Godeok First Dental</div>
              <p className="text-[15px] font-semibold text-[#292a2f]">
                Godeok First Dental Clinic
              </p>
            </div>

            <div className="space-y-2 text-[15px] text-[#292a2f]">
              <p>
                Đại diện : <span className="font-semibold">Lee Dong-hyun</span>
              </p>
              <p>
                Mã số kinh doanh : <span className="font-semibold">210-49-03603</span>
              </p>
              <p>
                Địa chỉ : <span className="font-semibold">Tầng 4, 401, 402 EduSky, 250 Godeok-ro, Pyeongtaek, Gyeonggi</span>
              </p>
              <p>
                Số điện thoại : <span className="font-semibold">031-611-3222</span>
              </p>
            </div>
          </div>

          {/* Hướng dẫn khám theo khu vực */}
          <div className="pt-6 border-t border-gray-200">
            <p className="text-[11px] text-gray-400 mb-2">Hướng dẫn khám theo khu vực</p>
            <div className="flex flex-wrap gap-x-3 gap-y-1">
              {[
                { name: 'Godeok-dong', slug: 'godeok' },
                { name: 'Godeok-myeon', slug: 'godeok-myeon' },
                { name: 'Seojeong-dong', slug: 'seojeong' },
                { name: 'Ichung-dong', slug: 'ichung' },
                { name: 'Jangdang-dong', slug: 'jangdang' },
                { name: 'Dongsak-dong', slug: 'dongsak' },
                { name: 'Jije-dong', slug: 'jije' },
                { name: 'Segyo-dong', slug: 'segyo' },
              ].map((region) => (
                <Link
                  key={region.slug}
                  href={`/${region.slug}`}
                  className="text-[11px] text-gray-400 hover:text-gray-600"
                >
                  {region.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      {openModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setOpenModal(null)}>
          <div className="bg-white rounded-2xl max-w-[430px] w-full max-h-[80vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center">
              <h2 className="text-xl font-bold">
                {openModal === 'privacy' && 'Chính sách bảo mật'}
                {openModal === 'terms' && 'Điều khoản sử dụng'}
                {openModal === 'rights' && 'Quyền và nghĩa vụ của bệnh nhân'}
                {openModal === 'prices' && 'Chi phí điều trị không bảo hiểm'}
              </h2>
              <button onClick={() => setOpenModal(null)} className="text-2xl text-gray-500 hover:text-gray-900">&times;</button>
            </div>

            <div className="p-6">
              {openModal === 'privacy' && <PrivacyPolicy />}
              {openModal === 'terms' && <TermsOfService />}
              {openModal === 'rights' && <PatientRights />}
              {openModal === 'prices' && <NonInsurancePrices />}
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}

// Chính sách bảo mật
function PrivacyPolicy() {
  return (
    <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
      <section>
        <h3 className="font-bold text-base text-black mb-3">1. Mục đích thu thập và sử dụng thông tin cá nhân</h3>
        <p>Godeok First Dental Clinic (sau đây gọi là &apos;bệnh viện&apos;) xử lý thông tin cá nhân cho các mục đích sau. Thông tin cá nhân đang được xử lý sẽ không được sử dụng cho mục đích nào khác ngoài các mục đích sau, và nếu mục đích sử dụng thay đổi, các biện pháp cần thiết như xin đồng ý riêng theo Điều 18 Luật Bảo vệ Thông tin Cá nhân sẽ được thực hiện.</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Đặt lịch khám và tư vấn</li>
          <li>Quản lý hồ sơ khám và cung cấp dịch vụ y tế</li>
          <li>Thanh toán và thu phí khám</li>
          <li>Hướng dẫn sử dụng bệnh viện và điều trị</li>
        </ul>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">2. Các mục thông tin cá nhân được thu thập</h3>
        <p className="mb-2">Bệnh viện thu thập các thông tin cá nhân sau đây cho mục đích khám và tư vấn.</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Mục bắt buộc: Họ tên, ngày sinh, số liên lạc (điện thoại), địa chỉ</li>
          <li>Thông tin khám: Hồ sơ khám, kết quả xét nghiệm, lịch sử điều trị</li>
          <li>Thu thập tự động: IP truy cập, cookie, nhật ký truy cập, lịch sử sử dụng dịch vụ</li>
        </ul>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">3. Thời gian lưu giữ và sử dụng thông tin cá nhân</h3>
        <p>Bệnh viện xử lý và lưu giữ thông tin cá nhân trong thời gian lưu giữ và sử dụng theo quy định pháp luật hoặc trong thời gian đã được chủ thể thông tin đồng ý khi thu thập.</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Hồ sơ khám: 10 năm theo Luật Y tế</li>
          <li>Danh sách bệnh nhân: 5 năm</li>
          <li>Đơn thuốc: 2 năm</li>
          <li>Hồ sơ thanh toán phí khám: 5 năm</li>
        </ul>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">4. Cung cấp thông tin cá nhân cho bên thứ ba</h3>
        <p>Về nguyên tắc, bệnh viện xử lý thông tin cá nhân trong phạm vi mục đích thu thập và sử dụng đã nêu, và không xử lý vượt quá phạm vi mục đích ban đầu hoặc cung cấp cho bên thứ ba mà không có sự đồng ý trước của chủ thể thông tin, trừ các trường hợp sau.</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Trường hợp được sự đồng ý riêng từ chủ thể thông tin</li>
          <li>Trường hợp có quy định đặc biệt trong pháp luật</li>
          <li>Trường hợp chủ thể thông tin hoặc người đại diện pháp luật không thể bày tỏ ý kiến hoặc không thể xin đồng ý trước do địa chỉ không rõ, và được công nhận là cần thiết rõ ràng cho lợi ích khẩn cấp về tính mạng, thân thể, tài sản của chủ thể thông tin hoặc bên thứ ba</li>
        </ul>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">5. Quyền, nghĩa vụ và phương thức thực hiện của chủ thể thông tin</h3>
        <p>Chủ thể thông tin có thể thực hiện các quyền bảo vệ thông tin cá nhân sau đây đối với bệnh viện bất cứ lúc nào.</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Yêu cầu xem thông tin cá nhân</li>
          <li>Yêu cầu sửa chữa khi có sai sót</li>
          <li>Yêu cầu xóa</li>
          <li>Yêu cầu ngừng xử lý</li>
        </ul>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">6. Biện pháp bảo đảm an toàn thông tin cá nhân</h3>
        <p>Bệnh viện thực hiện các biện pháp sau để bảo đảm an toàn thông tin cá nhân.</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Biện pháp quản lý: Xây dựng và thực hiện kế hoạch quản lý nội bộ, đào tạo nhân viên định kỳ</li>
          <li>Biện pháp kỹ thuật: Quản lý quyền truy cập hệ thống xử lý thông tin cá nhân, cài đặt hệ thống kiểm soát truy cập, mã hóa thông tin nhận dạng, cài đặt chương trình bảo mật</li>
          <li>Biện pháp vật lý: Kiểm soát truy cập phòng máy tính, phòng lưu trữ tài liệu</li>
        </ul>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">7. Người phụ trách bảo vệ thông tin cá nhân</h3>
        <div className="bg-gray-50 p-4 rounded-lg mt-2">
          <p><strong>Họ tên:</strong> Lee Dong-hyun</p>
          <p><strong>Chức vụ:</strong> Bác sĩ trưởng</p>
          <p><strong>Liên hệ:</strong> 031-611-3222</p>
        </div>
      </section>

      <section className="text-xs text-gray-500 pt-4 border-t">
        <p>Chính sách bảo mật này được áp dụng từ ngày 1 tháng 1 năm 2024.</p>
      </section>
    </div>
  );
}

// Điều khoản sử dụng
function TermsOfService() {
  return (
    <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
      <section>
        <h3 className="font-bold text-base text-black mb-3">Điều 1 (Mục đích)</h3>
        <p>Điều khoản này nhằm quy định quyền, nghĩa vụ và trách nhiệm của Godeok First Dental Clinic (sau đây gọi là &quot;bệnh viện&quot;) và người sử dụng liên quan đến việc sử dụng dịch vụ y tế và dịch vụ bổ sung do bệnh viện cung cấp.</p>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">Điều 2 (Nội dung dịch vụ)</h3>
        <p>Các dịch vụ do bệnh viện cung cấp bao gồm:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Dịch vụ khám nha khoa (khám tổng quát, Implant, điều trị thẩm mỹ, v.v.)</li>
          <li>Dịch vụ đặt lịch khám và tư vấn</li>
          <li>Dịch vụ tư vấn AI trực tuyến</li>
          <li>Dịch vụ cung cấp thông tin liên quan đến khám</li>
        </ul>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">Điều 3 (Đặt lịch và hủy)</h3>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Có thể đặt lịch khám qua điện thoại, trực tiếp hoặc tư vấn trực tuyến.</li>
          <li>Có thể hủy hoặc thay đổi lịch hẹn trước 24 giờ so với giờ hẹn.</li>
          <li>Nếu không đến bệnh viện vào giờ hẹn mà không có lý do chính đáng hoặc hủy lặp lại trong vòng 24 giờ, việc đặt lịch trong tương lai có thể bị hạn chế.</li>
        </ol>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">Điều 4 (Phí khám và thanh toán)</h3>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Phí khám được tính theo tiêu chuẩn chi trả bảo hiểm y tế và bảng giá dịch vụ không bảo hiểm.</li>
          <li>Phí khám nguyên tắc thanh toán ngay sau khi khám, có thể thanh toán bằng tiền mặt, thẻ tín dụng, chuyển khoản.</li>
          <li>Trường hợp cần yêu cầu bảo hiểm, bệnh nhân phải nộp các giấy tờ cần thiết.</li>
        </ol>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">Điều 5 (Nghĩa vụ của bệnh nhân)</h3>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Bệnh nhân phải cung cấp thông tin cá nhân và tiền sử bệnh chính xác.</li>
          <li>Bệnh nhân phải tuân thủ chỉ dẫn điều trị của đội ngũ y tế.</li>
          <li>Bệnh nhân phải tôn trọng môi trường khám của bệnh nhân khác và đội ngũ y tế.</li>
          <li>Bệnh nhân phải cẩn thận không làm hư hỏng cơ sở vật chất và trang thiết bị bệnh viện.</li>
        </ol>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">Điều 6 (Nghĩa vụ của bệnh viện)</h3>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Bệnh viện nỗ lực cung cấp dịch vụ y tế chất lượng cho bệnh nhân.</li>
          <li>Bệnh viện quản lý an toàn thông tin cá nhân của bệnh nhân theo quy định pháp luật.</li>
          <li>Bệnh viện thực hiện đầy đủ quy trình giải thích và đồng ý trước khi khám.</li>
          <li>Bệnh viện tôn trọng và bảo vệ quyền lợi của bệnh nhân.</li>
        </ol>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">Điều 7 (Giới hạn trách nhiệm)</h3>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Bệnh viện không chịu trách nhiệm về các vấn đề phát sinh do thông tin không chính xác mà bệnh nhân cung cấp.</li>
          <li>Bệnh viện không chịu trách nhiệm về việc trì hoãn hoặc thất bại điều trị do lỗi của bệnh nhân.</li>
          <li>Bệnh viện không chịu trách nhiệm khi không thể cung cấp dịch vụ do bất khả kháng.</li>
        </ol>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">Điều 8 (Giải quyết tranh chấp)</h3>
        <p>Trường hợp phát sinh tranh chấp liên quan đến điều khoản này, bệnh viện và bệnh nhân sẽ nỗ lực giải quyết thông qua thương lượng, nếu không đạt được thỏa thuận sẽ tuân theo phán quyết của tòa án có thẩm quyền.</p>
      </section>

      <section className="text-xs text-gray-500 pt-4 border-t">
        <p>Điều khoản này có hiệu lực từ ngày 1 tháng 1 năm 2024.</p>
      </section>
    </div>
  );
}

// Quyền và nghĩa vụ của bệnh nhân
function PatientRights() {
  return (
    <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
      <section>
        <h3 className="font-bold text-base text-black mb-3">Quyền của bệnh nhân</h3>

        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-black mb-2">1. Quyền được khám chữa bệnh</h4>
            <p>Bệnh nhân có quyền được nhận dịch vụ y tế phù hợp để bảo vệ sức khỏe của mình.</p>
          </div>

          <div>
            <h4 className="font-semibold text-black mb-2">2. Quyền được biết</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Quyền biết tên bác sĩ, y tá và nhân viên y tế trực tiếp phụ trách khám của mình</li>
              <li>Quyền được giải thích đầy đủ về tình trạng sức khỏe hiện tại, phương pháp điều trị, có phải đối tượng nghiên cứu y học hay không, ghép tạng, tác dụng phụ, kết quả dự kiến và chi phí khám</li>
              <li>Quyền yêu cầu xem hồ sơ khám và cấp bản sao</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-black mb-2">3. Quyền tự quyết định</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Quyền lựa chọn phương pháp điều trị, đồng ý hoặc từ chối</li>
              <li>Quyền đồng ý hoặc từ chối trở thành đối tượng nghiên cứu y học</li>
              <li>Quyền xin ý kiến bác sĩ khác (ý kiến thứ hai)</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-black mb-2">4. Quyền được bảo vệ bí mật</h4>
            <p>Có quyền không bị xâm phạm bí mật về thể chất, sức khỏe và đời tư liên quan đến khám chữa bệnh.</p>
          </div>

          <div>
            <h4 className="font-semibold text-black mb-2">5. Quyền yêu cầu tư vấn và hòa giải</h4>
            <p>Có quyền yêu cầu tư vấn và hòa giải tại Viện Hòa giải Tranh chấp Y tế Hàn Quốc đối với tranh chấp phát sinh trong quá trình dịch vụ y tế.</p>
          </div>
        </div>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3 pt-6 border-t">Nghĩa vụ của bệnh nhân</h3>

        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-black mb-2">1. Nghĩa vụ cung cấp thông tin</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Phải cung cấp chính xác thông tin sức khỏe của mình cho đội ngũ y tế.</li>
              <li>Phải thông báo trung thực về tiền sử bệnh, thuốc đang dùng, dị ứng, v.v.</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-black mb-2">2. Tuân thủ chỉ dẫn của đội ngũ y tế</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Phải tuân thủ nghiêm túc chỉ dẫn điều trị và đơn thuốc của đội ngũ y tế.</li>
              <li>Phải tuân thủ giờ hẹn, và liên hệ trước nếu có trường hợp bất khả kháng.</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-black mb-2">3. Nghĩa vụ thanh toán phí khám</h4>
            <p>Phải thanh toán đầy đủ phí khám cho các dịch vụ y tế đã nhận.</p>
          </div>

          <div>
            <h4 className="font-semibold text-black mb-2">4. Nghĩa vụ tôn trọng người khác</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Không được thực hiện hành vi gây cản trở việc khám và điều trị của bệnh nhân khác.</li>
              <li>Phải giữ yên lặng và trật tự trong bệnh viện.</li>
              <li>Phải tôn trọng và lịch sự với đội ngũ y tế và nhân viên bệnh viện.</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-black mb-2">5. Nghĩa vụ bảo vệ cơ sở vật chất</h4>
            <p>Phải cẩn thận giữ gìn cơ sở vật chất và thiết bị y tế bệnh viện, không cố ý hoặc vô tình làm hư hỏng.</p>
          </div>
        </div>
      </section>

      <section className="bg-blue-50 p-4 rounded-lg mt-6">
        <h4 className="font-semibold text-black mb-2">Liên hệ và tư vấn</h4>
        <p className="text-sm">Nếu bạn có câu hỏi về bảo vệ quyền bệnh nhân và tranh chấp y tế</p>
        <div className="mt-2 space-y-1">
          <p><strong>Số điện thoại bệnh viện:</strong> 031-611-3222</p>
          <p><strong>Viện Hòa giải Tranh chấp Y tế Hàn Quốc:</strong> 1670-2545</p>
        </div>
      </section>
    </div>
  );
}

// Chi phí điều trị không bảo hiểm
function NonInsurancePrices() {
  const prices = [
    { code: 'UW3021017', item: 'Nha khoa: Phí phẫu thuật/Lấy cao răng/1/3 hàm', classification: 'Lấy cao răng 1/3', price: '10,000', minPrice: '', maxPrice: '', note: '', updated: '2024-01-01' },
    { code: 'UW3021027', item: 'Nha khoa: Phí phẫu thuật/Lấy cao răng/Hàm trên', classification: 'Lấy cao răng hàm trên', price: '25,000', minPrice: '', maxPrice: '', note: '', updated: '2024-01-01' },
    { code: 'UW3021037', item: 'Nha khoa: Phí phẫu thuật/Lấy cao răng/Hàm dưới', classification: 'Lấy cao răng hàm dưới', price: '25,000', minPrice: '', maxPrice: '', note: '', updated: '2024-01-01' },
    { code: 'UW3021047', item: 'Nha khoa: Phí phẫu thuật/Lấy cao răng/Toàn hàm', classification: 'Lấy cao răng toàn hàm', price: '70,000', minPrice: '', maxPrice: '', note: '', updated: '2024-01-01' },
    { code: 'UZ0040014', item: 'Nha khoa: Phí phẫu thuật/Inlay và Onlay', classification: 'ceramic inlay', price: '300,000', minPrice: '', maxPrice: '', note: '', updated: '2024-01-01' },
    { code: 'U02390000', item: 'Nha khoa: Phí phẫu thuật/Trám resin quang trùng hợp/Sâu răng-1 mặt', classification: 'Resin sâu 1 mặt', price: '100,000', minPrice: '', maxPrice: '', note: '', updated: '2024-01-01' },
    { code: 'U02400000', item: 'Nha khoa: Phí phẫu thuật/Trám resin quang trùng hợp/Sâu răng-2 mặt', classification: 'Resin 2 mặt', price: '100,000', minPrice: '', maxPrice: '', note: '', updated: '2024-01-01' },
    { code: 'U02410000', item: 'Nha khoa: Phí phẫu thuật/Trám resin quang trùng hợp/Sâu răng-3 mặt trở lên', classification: 'Resin 3 mặt trở lên', price: '150,000', minPrice: '', maxPrice: '', note: '', updated: '2024-01-01' },
    { code: 'UB0010051', item: 'Phí phục hình/Implant nha khoa (mỗi răng)/Zirconia', classification: 'Implant zir', price: '', minPrice: '890,000', maxPrice: '1,290,000', note: '', updated: '2024-01-01' },
    { code: 'UW609F350', item: 'Phí phục hình/Mão răng/Zirconia', classification: 'zirconia', price: '500,000', minPrice: '', maxPrice: '', note: 'core riêng', updated: '2024-01-01' },
    { code: 'PDZ010000', item: 'Phí chứng nhận/Giấy chẩn đoán/Thông thường', classification: 'Giấy chẩn đoán thông thường', price: '20,000', minPrice: '', maxPrice: '', note: '', updated: '2024-01-01' },
    { code: 'PDZ090007', item: 'Phí chứng nhận/Giấy xác nhận/Khám', classification: 'Giấy xác nhận khám', price: '3,000', minPrice: '', maxPrice: '', note: '', updated: '2024-01-01' },
  ];

  return (
    <div className="space-y-4">
      <div className="bg-blue-50 p-4 rounded-lg text-sm text-gray-700">
        <p className="font-semibold mb-2">Hướng dẫn Chi phí điều trị không bảo hiểm</p>
        <p className="text-xs leading-relaxed">
          Bảng chi phí điều trị không bảo hiểm này được lập theo tiêu chuẩn năm 2024, và có thể thay đổi tùy theo tình trạng răng miệng và vật liệu sử dụng của bệnh nhân.
          Chi phí chính xác sẽ được tư vấn khi bạn đến bệnh viện.
        </p>
      </div>

      <div className="overflow-x-auto -mx-6 px-6">
        <table className="w-full text-xs border-collapse">
          <thead>
            <tr className="bg-[#008095] text-white">
              <th className="border border-gray-300 px-2 py-2 text-left min-w-[100px]">Mã</th>
              <th className="border border-gray-300 px-2 py-2 text-left min-w-[200px]">Phân loại</th>
              <th className="border border-gray-300 px-2 py-2 text-left min-w-[120px]">Tên sử dụng</th>
              <th className="border border-gray-300 px-2 py-2 text-right min-w-[80px]">Chi phí</th>
              <th className="border border-gray-300 px-2 py-2 text-right min-w-[80px]">Chi phí tối thiểu</th>
              <th className="border border-gray-300 px-2 py-2 text-right min-w-[80px]">Chi phí tối đa</th>
              <th className="border border-gray-300 px-2 py-2 text-left min-w-[80px]">Ghi chú</th>
            </tr>
          </thead>
          <tbody>
            {prices.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="border border-gray-300 px-2 py-2 text-gray-600">{item.code}</td>
                <td className="border border-gray-300 px-2 py-2">{item.item}</td>
                <td className="border border-gray-300 px-2 py-2">{item.classification}</td>
                <td className="border border-gray-300 px-2 py-2 text-right font-semibold">
                  {item.price ? `${item.price}₩` : '-'}
                </td>
                <td className="border border-gray-300 px-2 py-2 text-right">
                  {item.minPrice ? `${item.minPrice}₩` : '-'}
                </td>
                <td className="border border-gray-300 px-2 py-2 text-right">
                  {item.maxPrice ? `${item.maxPrice}₩` : '-'}
                </td>
                <td className="border border-gray-300 px-2 py-2 text-xs text-gray-600">{item.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="text-xs text-gray-500 space-y-1 pt-4">
        <p>※ Chi phí này là hạng mục không bảo hiểm, không được bảo hiểm y tế chi trả.</p>
        <p>※ Chi phí thực tế có thể khác tùy theo nội dung khám và vật liệu sử dụng.</p>
        <p>※ Chi phí chính xác sẽ được tư vấn khi khám.</p>
      </div>
    </div>
  );
}
