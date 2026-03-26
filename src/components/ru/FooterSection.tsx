'use client';

import { useState } from 'react';
import Link from 'next/link';

type ModalType = 'privacy' | 'terms' | 'rights' | 'prices' | null;

export default function FooterSection() {
  const [openModal, setOpenModal] = useState<ModalType>(null);

  return (
    <footer className="bg-white border-t border-[#e9ebf1]">
      {/* Медицинский дисклеймер */}
      <div className="bg-gray-100 py-4 px-4">
        <div className="max-w-[430px] mx-auto">
          <p className="text-[10px] text-gray-500 leading-relaxed text-center">
            Результаты лечения и отзывы на этом сайте основаны на индивидуальном опыте. Результаты могут отличаться.
            Все медицинские процедуры могут сопровождаться побочными эффектами, такими как кровотечение, инфекция, отек. Точный диагноз и план лечения определяются после консультации со специалистом.
          </p>
        </div>
      </div>

      <div className="max-w-[430px] mx-auto px-4 py-10">
        <div className="space-y-20">
          {/* Footer Links */}
          <div className="flex justify-between text-[13px] font-semibold text-[#37373e]">
            <button onClick={() => setOpenModal('privacy')} className="hover:text-gray-900">Политика конфиденциальности</button>
            <button onClick={() => setOpenModal('terms')} className="hover:text-gray-900">Условия использования</button>
            <button onClick={() => setOpenModal('rights')} className="hover:text-gray-900">Права и обязанности пациента</button>
            <button onClick={() => setOpenModal('prices')} className="hover:text-gray-900">Прейскурант</button>
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
                Представитель : <span className="font-semibold">Ли Донхён</span>
              </p>
              <p>
                Рег. номер : <span className="font-semibold">210-49-03603</span>
              </p>
              <p>
                Адрес : <span className="font-semibold">Кёнги, Пхёнтхэк, Годок-ро 250, Эдуcкай, 4 этаж, 401, 402</span>
              </p>
              <p>
                Телефон : <span className="font-semibold">031-611-3222</span>
              </p>
            </div>
          </div>

          {/* Информация по районам */}
          <div className="pt-6 border-t border-gray-200">
            <p className="text-[11px] text-gray-400 mb-2">Информация по районам</p>
            <div className="flex flex-wrap gap-x-3 gap-y-1">
              {[
                { name: 'Годок-дон', slug: 'godeok' },
                { name: 'Годок-мён', slug: 'godeok-myeon' },
                { name: 'Соджон-дон', slug: 'seojeong' },
                { name: 'Ичхун-дон', slug: 'ichung' },
                { name: 'Чандан-дон', slug: 'jangdang' },
                { name: 'Тонсак-дон', slug: 'dongsak' },
                { name: 'Чиджэ-дон', slug: 'jije' },
                { name: 'Сегё-дон', slug: 'segyo' },
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
                {openModal === 'privacy' && 'Политика конфиденциальности'}
                {openModal === 'terms' && 'Условия использования'}
                {openModal === 'rights' && 'Права и обязанности пациента'}
                {openModal === 'prices' && 'Прейскурант нестраховых услуг'}
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

// Политика конфиденциальности
function PrivacyPolicy() {
  return (
    <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
      <section>
        <h3 className="font-bold text-base text-black mb-3">1. Цели сбора и использования персональных данных</h3>
        <p>Godeok First Dental Clinic (далее &apos;клиника&apos;) обрабатывает персональные данные в следующих целях. Персональные данные не используются в иных целях, а при изменении целей использования будут приняты необходимые меры в соответствии со статьёй 18 Закона о защите персональных данных.</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Запись на лечение и консультация</li>
          <li>Ведение медицинских записей и предоставление медицинских услуг</li>
          <li>Выставление счетов за лечение и оплата</li>
          <li>Информирование об использовании клиники и лечении</li>
        </ul>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">2. Собираемые персональные данные</h3>
        <p className="mb-2">Клиника собирает следующие персональные данные для лечения и консультаций.</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Обязательные: ФИО, дата рождения, контакты (телефон), адрес</li>
          <li>Медицинская информация: история лечения, результаты обследований, записи о лечении</li>
          <li>Автосбор: IP, cookies, логи, записи использования</li>
        </ul>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">3. Сроки хранения и использования данных</h3>
        <p>Клиника обрабатывает и хранит персональные данные в течение срока, установленного законодательством, или в течение срока, согласованного с субъектом данных при сборе информации.</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Медицинские записи: 10 лет в соответствии с Законом о медицине</li>
          <li>Реестр пациентов: 5 лет</li>
          <li>Рецепты: 2 года</li>
          <li>Записи об оплате лечения: 5 лет</li>
        </ul>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">4. Предоставление данных третьим лицам</h3>
        <p>Клиника принципиально обрабатывает персональные данные в пределах заявленных целей сбора и использования. Данные не обрабатываются сверх первоначальных целей и не передаются третьим лицам без предварительного согласия субъекта данных, за исключением следующих случаев.</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Получено отдельное согласие</li>
          <li>Предусмотрено особыми положениями закона</li>
          <li>Субъект данных или его законный представитель не может выразить волю, или невозможно получить предварительное согласие в связи с неизвестным адресом и т.п., и это явно необходимо для защиты жизни, здоровья или имущества субъекта данных или третьего лица</li>
        </ul>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">5. Права и обязанности субъекта данных</h3>
        <p>Субъект данных может в любое время реализовать следующие права в отношении защиты персональных данных в клинике.</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Запрос на просмотр данных</li>
          <li>Запрос на исправление ошибок</li>
          <li>Запрос на удаление</li>
          <li>Запрос на прекращение обработки</li>
        </ul>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">6. Меры по обеспечению безопасности данных</h3>
        <p>Клиника принимает следующие меры для обеспечения безопасности персональных данных.</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Административные меры: разработка и реализация внутреннего плана управления, регулярное обучение сотрудников</li>
          <li>Технические меры: контроль доступа, шифрование, антивирусная защита</li>
          <li>Физические меры: контроль доступа в серверные и архивные помещения</li>
        </ul>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">7. Ответственный за защиту данных</h3>
        <div className="bg-gray-50 p-4 rounded-lg mt-2">
          <p><strong>ФИО:</strong> Ли Донхён</p>
          <p><strong>Должность:</strong> Главный врач</p>
          <p><strong>Контакт:</strong> 031-611-3222</p>
        </div>
      </section>

      <section className="text-xs text-gray-500 pt-4 border-t">
        <p>Настоящая Политика конфиденциальности действует с 1 января 2024 года.</p>
      </section>
    </div>
  );
}

// Условия использования
function TermsOfService() {
  return (
    <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
      <section>
        <h3 className="font-bold text-base text-black mb-3">Статья 1 (Цель)</h3>
        <p>Настоящие условия регулируют права, обязанности и ответственность клиники и пользователей в связи с использованием медицинских и дополнительных услуг, предоставляемых Godeok First Dental Clinic (далее &quot;клиника&quot;).</p>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">Статья 2 (Содержание услуг)</h3>
        <p>Клиника предоставляет следующие услуги.</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Стоматологическое лечение (общее лечение, имплантация, эстетическая стоматология и др.)</li>
          <li>Запись на лечение и консультации</li>
          <li>Онлайн AI-консультация</li>
          <li>Предоставление информации о лечении</li>
        </ul>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">Статья 3 (Запись и отмена)</h3>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Запись на лечение возможна по телефону, при визите или через онлайн-консультацию.</li>
          <li>Отмена или изменение записи возможны не позднее чем за 24 часа до назначенного времени.</li>
          <li>При неявке без уважительной причины или повторной отмене менее чем за 24 часа запись может быть ограничена в будущем.</li>
        </ol>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">Статья 4 (Оплата лечения)</h3>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Стоимость лечения рассчитывается в соответствии со стандартами медицинского страхования и прейскурантом нестраховых услуг.</li>
          <li>Оплата производится сразу после лечения наличными, банковской картой или банковским переводом.</li>
          <li>При необходимости страхового возмещения пациент обязан предоставить необходимые документы.</li>
        </ol>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">Статья 5 (Обязанности пациента)</h3>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Пациент обязан предоставить точную личную информацию и историю болезни.</li>
          <li>Пациент обязан соблюдать указания медицинского персонала по лечению.</li>
          <li>Пациент обязан уважать лечебную среду других пациентов и медицинского персонала.</li>
          <li>Пациент обязан бережно относиться к помещениям и оборудованию клиники.</li>
        </ol>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">Статья 6 (Обязанности клиники)</h3>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Клиника стремится предоставлять пациентам качественные медицинские услуги.</li>
          <li>Клиника обеспечивает безопасное хранение персональных данных пациентов в соответствии с законодательством.</li>
          <li>Клиника проводит процедуру достаточного разъяснения и получения согласия перед лечением.</li>
          <li>Клиника уважает и защищает права пациентов.</li>
        </ol>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">Статья 7 (Ограничение ответственности)</h3>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Клиника не несёт ответственности за проблемы, вызванные неточной информацией, предоставленной пациентом.</li>
          <li>Клиника не несёт ответственности за задержку или неудачу лечения по вине пациента.</li>
          <li>Клиника не несёт ответственности в случае невозможности предоставления услуг по обстоятельствам непреодолимой силы.</li>
        </ol>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">Статья 8 (Разрешение споров)</h3>
        <p>В случае возникновения споров, связанных с настоящими условиями, клиника и пациент стремятся к разрешению путём взаимных переговоров. При невозможности достижения соглашения спор разрешается в суде по подсудности.</p>
      </section>

      <section className="text-xs text-gray-500 pt-4 border-t">
        <p>Данные условия действуют с 1 января 2024 года.</p>
      </section>
    </div>
  );
}

// Права и обязанности пациента
function PatientRights() {
  return (
    <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
      <section>
        <h3 className="font-bold text-base text-black mb-3">Права пациента</h3>

        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-black mb-2">1. Право на лечение</h4>
            <p>Пациент имеет право на получение надлежащих медицинских услуг для защиты своего здоровья.</p>
          </div>

          <div>
            <h4 className="font-semibold text-black mb-2">2. Право на информацию</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Право знать имена лечащего врача, медсестры и других медицинских работников, непосредственно участвующих в лечении</li>
              <li>Право получить достаточное разъяснение о текущем состоянии здоровья, методах лечения, участии в медицинских исследованиях, возможности трансплантации, побочных эффектах, ожидаемых результатах и стоимости лечения</li>
              <li>Право на просмотр медицинских записей и получение копий</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-black mb-2">3. Право на самоопределение</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Право выбирать метод лечения, соглашаться или отказываться от него</li>
              <li>Право дать согласие или отказаться от участия в медицинских исследованиях</li>
              <li>Право на второе мнение другого врача</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-black mb-2">4. Право на конфиденциальность</h4>
            <p>Пациент имеет право на неприкосновенность физической и медицинской тайны, а также тайны частной жизни в связи с лечением.</p>
          </div>

          <div>
            <h4 className="font-semibold text-black mb-2">5. Право на подачу жалобы и медиацию</h4>
            <p>Пациент имеет право обратиться в Корейский центр медиации и арбитража медицинских споров по вопросам, возникшим в процессе оказания медицинских услуг.</p>
          </div>
        </div>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3 pt-6 border-t">Обязанности пациента</h3>

        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-black mb-2">1. Обязанность предоставления информации</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Пациент обязан точно предоставлять медицинскому персоналу информацию о своём здоровье.</li>
              <li>Необходимо сообщать об истории болезни, лекарствах, аллергиях.</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-black mb-2">2. Соблюдение указаний врача</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Пациент обязан добросовестно выполнять указания и назначения медицинского персонала.</li>
              <li>Необходимо соблюдать время записи, а при невозможности — заранее уведомить клинику.</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-black mb-2">3. Обязанность оплаты лечения</h4>
            <p>Пациент обязан своевременно оплачивать полученные медицинские услуги.</p>
          </div>

          <div>
            <h4 className="font-semibold text-black mb-2">4. Обязанность уважения к другим</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Не совершать действий, мешающих лечению других пациентов.</li>
              <li>Соблюдать тишину и порядок в клинике.</li>
              <li>Уважительно относиться к медицинскому персоналу и сотрудникам клиники.</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-black mb-2">5. Обязанность бережного отношения</h4>
            <p>Пациент обязан бережно обращаться с помещениями клиники и медицинским оборудованием, не допускать умышленного или неосторожного повреждения.</p>
          </div>
        </div>
      </section>

      <section className="bg-blue-50 p-4 rounded-lg mt-6">
        <h4 className="font-semibold text-black mb-2">Вопросы и консультации</h4>
        <p className="text-sm">Если у вас есть вопросы о защите прав пациентов или медицинских спорах</p>
        <div className="mt-2 space-y-1">
          <p><strong>Телефон клиники:</strong> 031-611-3222</p>
          <p><strong>Корейский центр медиации медицинских споров:</strong> 1670-2545</p>
        </div>
      </section>
    </div>
  );
}

// Прейскурант нестраховых услуг
function NonInsurancePrices() {
  const prices = [
    { code: 'UW3021017', item: 'Стоматологическая процедура: удаление зубного камня / 1/3 челюсти', classification: 'Удаление камня 1/3', price: '10,000', minPrice: '', maxPrice: '', note: '', updated: '2024-01-01' },
    { code: 'UW3021027', item: 'Стоматологическая процедура: удаление зубного камня / верхняя челюсть', classification: 'Удаление камня верхняя', price: '25,000', minPrice: '', maxPrice: '', note: '', updated: '2024-01-01' },
    { code: 'UW3021037', item: 'Стоматологическая процедура: удаление зубного камня / нижняя челюсть', classification: 'Удаление камня нижняя', price: '25,000', minPrice: '', maxPrice: '', note: '', updated: '2024-01-01' },
    { code: 'UW3021047', item: 'Стоматологическая процедура: удаление зубного камня / полная челюсть', classification: 'Удаление камня полная', price: '70,000', minPrice: '', maxPrice: '', note: '', updated: '2024-01-01' },
    { code: 'UZ0040014', item: 'Стоматологическая процедура: вкладка (Inlay) и накладка (Onlay)', classification: 'Ceramic inlay', price: '300,000', minPrice: '', maxPrice: '', note: '', updated: '2024-01-01' },
    { code: 'U02390000', item: 'Стоматологическая процедура: композитная пломба светового отверждения / кариес 1 поверхность', classification: 'Композит кариес 1 пов.', price: '100,000', minPrice: '', maxPrice: '', note: '', updated: '2024-01-01' },
    { code: 'U02400000', item: 'Стоматологическая процедура: композитная пломба светового отверждения / кариес 2 поверхности', classification: 'Композит 2 пов.', price: '100,000', minPrice: '', maxPrice: '', note: '', updated: '2024-01-01' },
    { code: 'U02410000', item: 'Стоматологическая процедура: композитная пломба светового отверждения / кариес 3+ поверхности', classification: 'Композит 3+ пов.', price: '150,000', minPrice: '', maxPrice: '', note: '', updated: '2024-01-01' },
    { code: 'UB0010051', item: 'Протезирование: стоматологический имплант (за 1 зуб) / Zirconia', classification: 'Имплант Zirconia', price: '', minPrice: '890,000', maxPrice: '1,290,000', note: '', updated: '2024-01-01' },
    { code: 'UW609F350', item: 'Протезирование: коронка / Zirconia', classification: 'Zirconia', price: '500,000', minPrice: '', maxPrice: '', note: 'core отдельно', updated: '2024-01-01' },
    { code: 'PDZ010000', item: 'Выдача справок: диагностическое заключение / обычное', classification: 'Обычное заключение', price: '20,000', minPrice: '', maxPrice: '', note: '', updated: '2024-01-01' },
    { code: 'PDZ090007', item: 'Выдача справок: подтверждение лечения', classification: 'Справка о лечении', price: '3,000', minPrice: '', maxPrice: '', note: '', updated: '2024-01-01' },
  ];

  return (
    <div className="space-y-4">
      <div className="bg-blue-50 p-4 rounded-lg text-sm text-gray-700">
        <p className="font-semibold mb-2">Информация о стоимости нестраховых услуг</p>
        <p className="text-xs leading-relaxed">
          Данный прейскурант составлен по стандартам 2024 года. Стоимость может варьироваться в зависимости от состояния полости рта пациента и используемых материалов.
          Точную стоимость лечения сообщим на консультации при визите.
        </p>
      </div>

      <div className="overflow-x-auto -mx-6 px-6">
        <table className="w-full text-xs border-collapse">
          <thead>
            <tr className="bg-[#008095] text-white">
              <th className="border border-gray-300 px-2 py-2 text-left min-w-[100px]">Код</th>
              <th className="border border-gray-300 px-2 py-2 text-left min-w-[200px]">Категория / Подкатегория</th>
              <th className="border border-gray-300 px-2 py-2 text-left min-w-[120px]">Название</th>
              <th className="border border-gray-300 px-2 py-2 text-right min-w-[80px]">Цена</th>
              <th className="border border-gray-300 px-2 py-2 text-right min-w-[80px]">Мин. цена</th>
              <th className="border border-gray-300 px-2 py-2 text-right min-w-[80px]">Макс. цена</th>
              <th className="border border-gray-300 px-2 py-2 text-left min-w-[80px]">Примечание</th>
            </tr>
          </thead>
          <tbody>
            {prices.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="border border-gray-300 px-2 py-2 text-gray-600">{item.code}</td>
                <td className="border border-gray-300 px-2 py-2">{item.item}</td>
                <td className="border border-gray-300 px-2 py-2">{item.classification}</td>
                <td className="border border-gray-300 px-2 py-2 text-right font-semibold">
                  {item.price ? `${item.price} вон` : '-'}
                </td>
                <td className="border border-gray-300 px-2 py-2 text-right">
                  {item.minPrice ? `${item.minPrice} вон` : '-'}
                </td>
                <td className="border border-gray-300 px-2 py-2 text-right">
                  {item.maxPrice ? `${item.maxPrice} вон` : '-'}
                </td>
                <td className="border border-gray-300 px-2 py-2 text-xs text-gray-600">{item.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="text-xs text-gray-500 space-y-1 pt-4">
        <p>※ Указанные цены относятся к нестраховым услугам, не покрываемым медицинской страховкой.</p>
        <p>※ Фактическая стоимость может отличаться в зависимости от объёма лечения и используемых материалов.</p>
        <p>※ Точную стоимость сообщим на консультации.</p>
      </div>
    </div>
  );
}
