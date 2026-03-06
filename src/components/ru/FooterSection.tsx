'use client';

import { useState } from 'react';

type ModalType = 'privacy' | 'terms' | 'rights' | 'prices' | null;

export default function FooterSection() {
  const [openModal, setOpenModal] = useState<ModalType>(null);

  return (
    <footer className="bg-white border-t border-[#e9ebf1]">
      <div className="max-w-[430px] mx-auto px-4 py-10">
        <div className="space-y-20">
          {/* Footer Links */}
          <div className="flex justify-between text-[13px] font-semibold text-[#37373e]">
            <button onClick={() => setOpenModal('privacy')} className="hover:text-gray-900">Конфиденциальность</button>
            <button onClick={() => setOpenModal('terms')} className="hover:text-gray-900">Условия</button>
            <button onClick={() => setOpenModal('rights')} className="hover:text-gray-900">Права пациента</button>
            <button onClick={() => setOpenModal('prices')} className="hover:text-gray-900">Цены</button>
          </div>

          {/* Company Info */}
          <div className="space-y-8">
            <div className="space-y-3.5">
              <div className="text-xl font-bold text-gray-900">Стоматология Медис</div>
              <p className="text-[15px] font-semibold text-[#292a2f]">
                Стоматология Кёнсон Медис
              </p>
            </div>

            <div className="space-y-2 text-[15px] text-[#292a2f]">
              <p>
                Директор : <span className="font-semibold">Др. Ким Дон Сок</span>
              </p>
              <p>
                Бизнес-регистрация : <span className="font-semibold">484-31-00750</span>
              </p>
              <p>
                Адрес : <span className="font-semibold">4F Seoung Building, 295 Suyeong-ro, Nam-gu, Пусан</span>
              </p>
              <p>
                Телефон : <span className="font-semibold">0507-1315-7475</span>
              </p>
              <p>
                Email : <span className="font-semibold">medisksu@naver.com</span>
              </p>
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
                {openModal === 'terms' && 'Условия обслуживания'}
                {openModal === 'rights' && 'Права и обязанности пациента'}
                {openModal === 'prices' && 'Прайс-лист'}
              </h2>
              <button onClick={() => setOpenModal(null)} className="text-2xl text-gray-500 hover:text-gray-900">×</button>
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
        <p>Стоматология Кёнсон Медис (далее «Клиника») обрабатывает персональные данные для следующих целей. Собранные персональные данные не используются для других целей, и при изменении целей использования будут приняты необходимые меры в соответствии с законодательством о защите персональных данных.</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Запись на прием и консультации</li>
          <li>Ведение медицинской документации и предоставление медицинских услуг</li>
          <li>Выставление счетов и оплата лечения</li>
          <li>Информирование об использовании клиники и лечении</li>
        </ul>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">2. Собираемые персональные данные</h3>
        <p className="mb-2">Клиника собирает следующие персональные данные для лечения и консультаций.</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Обязательные данные: ФИО, дата рождения, контактный телефон, адрес</li>
          <li>Медицинские данные: история болезни, результаты обследований, история лечения</li>
          <li>Автоматически собираемые данные: IP-адрес, cookies, журналы доступа, записи использования услуг</li>
        </ul>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">3. Сроки хранения и использования персональных данных</h3>
        <p>Клиника обрабатывает и хранит персональные данные в течение срока, установленного законодательством, или срока, согласованного при сборе данных.</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Медицинская документация: 10 лет в соответствии с медицинским законодательством</li>
          <li>Карта пациента: 5 лет</li>
          <li>Рецепты: 2 года</li>
          <li>Записи об оплате лечения: 5 лет</li>
        </ul>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">4. Предоставление персональных данных третьим лицам</h3>
        <p>Клиника, как правило, обрабатывает персональные данные в пределах заявленных целей сбора и использования и не передает их третьим лицам без предварительного согласия субъекта данных, за исключением следующих случаев.</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>При получении отдельного согласия субъекта данных</li>
          <li>При наличии специального положения в законодательстве</li>
          <li>Когда субъект данных или его законный представитель не может выразить волю, или невозможно получить предварительное согласие из-за неизвестного адреса, и это явно необходимо для защиты жизни, здоровья или имущества субъекта данных или третьего лица</li>
        </ul>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">5. Права и обязанности субъекта данных</h3>
        <p>Субъект данных может в любое время осуществлять следующие права в отношении защиты персональных данных.</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Запрос на ознакомление с персональными данными</li>
          <li>Запрос на исправление ошибок</li>
          <li>Запрос на удаление</li>
          <li>Запрос на прекращение обработки</li>
        </ul>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">6. Меры по обеспечению безопасности персональных данных</h3>
        <p>Клиника принимает следующие меры для обеспечения безопасности персональных данных.</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Административные меры: разработка и внедрение плана внутреннего управления, регулярное обучение сотрудников</li>
          <li>Технические меры: управление правами доступа к системам обработки персональных данных, установка систем контроля доступа, шифрование уникальных идентификаторов, установка защитного ПО</li>
          <li>Физические меры: контроль доступа в серверные и архивные помещения</li>
        </ul>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">7. Ответственный за защиту персональных данных</h3>
        <div className="bg-gray-50 p-4 rounded-lg mt-2">
          <p><strong>ФИО:</strong> Ким Дон Сок</p>
          <p><strong>Должность:</strong> Главный врач</p>
          <p><strong>Телефон:</strong> 0507-1315-7475</p>
          <p><strong>Email:</strong> medisksu@naver.com</p>
        </div>
      </section>

      <section className="text-xs text-gray-500 pt-4 border-t">
        <p>Настоящая политика конфиденциальности действует с 1 января 2024 года.</p>
      </section>
    </div>
  );
}

// Условия обслуживания
function TermsOfService() {
  return (
    <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
      <section>
        <h3 className="font-bold text-base text-black mb-3">Статья 1 (Цель)</h3>
        <p>Настоящие условия регулируют права, обязанности и ответственность Клиники и пользователя в отношении использования медицинских и дополнительных услуг, предоставляемых Стоматологией Кёнсон Медис (далее «Клиника»).</p>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">Статья 2 (Содержание услуг)</h3>
        <p>Клиника предоставляет следующие услуги.</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Стоматологические услуги (общее лечение, имплантация, ортодонтия, эстетическое лечение и др.)</li>
          <li>Услуги записи на прием и консультации</li>
          <li>Онлайн AI-консультации</li>
          <li>Информационные услуги по лечению</li>
        </ul>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">Статья 3 (Запись и отмена)</h3>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Запись на прием возможна по телефону, лично или через онлайн-консультацию.</li>
          <li>Отмена или изменение записи возможны не позднее чем за 24 часа до назначенного времени.</li>
          <li>При неявке без уважительной причины или повторных отменах менее чем за 24 часа запись на прием может быть ограничена.</li>
        </ol>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">Статья 4 (Оплата лечения)</h3>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Стоимость лечения рассчитывается в соответствии с тарифами медицинского страхования и прейскурантом на услуги, не покрываемые страховкой.</li>
          <li>Оплата производится сразу после лечения наличными, банковской картой или банковским переводом.</li>
          <li>При необходимости страхового возмещения пациент должен предоставить необходимые документы.</li>
        </ol>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">Статья 5 (Обязанности пациента)</h3>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Пациент должен предоставить точную персональную информацию и медицинскую историю.</li>
          <li>Пациент должен следовать указаниям медицинского персонала по лечению.</li>
          <li>Пациент должен уважать других пациентов и медицинский персонал.</li>
          <li>Пациент должен бережно относиться к оборудованию и имуществу клиники.</li>
        </ol>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">Статья 6 (Обязанности Клиники)</h3>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Клиника стремится предоставлять пациентам качественные медицинские услуги.</li>
          <li>Клиника обеспечивает безопасное хранение персональных данных пациентов в соответствии с законодательством.</li>
          <li>Клиника проводит процедуру информированного согласия перед лечением.</li>
          <li>Клиника уважает и защищает права пациентов.</li>
        </ol>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">Статья 7 (Ограничение ответственности)</h3>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Клиника не несет ответственности за проблемы, возникшие из-за неточной информации, предоставленной пациентом.</li>
          <li>Клиника не несет ответственности за задержку или неудачу лечения по вине пациента.</li>
          <li>Клиника не несет ответственности в случае невозможности предоставления услуг по независящим от нее обстоятельствам.</li>
        </ol>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">Статья 8 (Разрешение споров)</h3>
        <p>В случае возникновения споров по настоящим условиям Клиника и пациент стремятся разрешить их путем взаимных переговоров, а при недостижении соглашения - в соответствии с решением компетентного суда.</p>
      </section>

      <section className="text-xs text-gray-500 pt-4 border-t">
        <p>Настоящие условия вступают в силу с 1 января 2024 года.</p>
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
            <h4 className="font-semibold text-black mb-2">1. Право на получение медицинской помощи</h4>
            <p>Пациент имеет право на получение надлежащих медицинских услуг для защиты своего здоровья.</p>
          </div>

          <div>
            <h4 className="font-semibold text-black mb-2">2. Право на информацию</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Право знать имена лечащего врача, медсестер и других медицинских работников</li>
              <li>Право на получение полной информации о состоянии здоровья, методах лечения, участии в медицинских исследованиях, трансплантации органов, побочных эффектах, ожидаемых результатах и стоимости лечения</li>
              <li>Право запрашивать ознакомление с медицинской документацией и получение ее копий</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-black mb-2">3. Право на самоопределение</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Право выбирать метод лечения и давать согласие или отказываться от него</li>
              <li>Право давать согласие или отказываться от участия в медицинских исследованиях</li>
              <li>Право получить второе мнение другого врача</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-black mb-2">4. Право на защиту конфиденциальности</h4>
            <p>Пациент имеет право на защиту медицинской тайны и личной жизни.</p>
          </div>

          <div>
            <h4 className="font-semibold text-black mb-2">5. Право на обращение в арбитраж</h4>
            <p>Пациент имеет право обратиться в Корейское агентство по медиации и арбитражу медицинских споров для консультации и урегулирования споров, возникших в процессе оказания медицинских услуг.</p>
          </div>
        </div>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3 pt-6 border-t">Обязанности пациента</h3>

        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-black mb-2">1. Обязанность предоставления информации</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Пациент должен точно предоставлять медицинскому персоналу информацию о своем здоровье.</li>
              <li>Пациент должен добросовестно сообщать о перенесенных заболеваниях, принимаемых лекарствах, аллергиях и т.д.</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-black mb-2">2. Соблюдение указаний медицинского персонала</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Пациент должен добросовестно следовать указаниям и назначениям медицинского персонала.</li>
              <li>Пациент должен соблюдать время записи на прием и заблаговременно предупреждать о невозможности явки.</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-black mb-2">3. Обязанность оплаты лечения</h4>
            <p>Пациент должен своевременно оплачивать полученные медицинские услуги.</p>
          </div>

          <div>
            <h4 className="font-semibold text-black mb-2">4. Обязанность уважения к другим</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Пациент не должен мешать лечению других пациентов.</li>
              <li>Пациент должен соблюдать тишину и порядок в клинике.</li>
              <li>Пациент должен уважительно относиться к медицинскому персоналу.</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-black mb-2">5. Обязанность бережного отношения к оборудованию</h4>
            <p>Пациент должен бережно относиться к оборудованию и медицинским приборам клиники и не допускать их умышленного или неосторожного повреждения.</p>
          </div>
        </div>
      </section>

      <section className="bg-blue-50 p-4 rounded-lg mt-6">
        <h4 className="font-semibold text-black mb-2">Контакты для консультаций</h4>
        <p className="text-sm">По вопросам защиты прав пациентов и медицинских споров обращайтесь</p>
        <div className="mt-2 space-y-1">
          <p><strong>Телефон клиники:</strong> 0507-1315-7475</p>
          <p><strong>Корейское агентство по медицинским спорам:</strong> 1670-2545</p>
        </div>
      </section>
    </div>
  );
}

// Прайс-лист (услуги, не покрываемые страховкой)
function NonInsurancePrices() {
  const prices = [
    { code: 'UW3021017', item: 'Стоматологическое лечение: Чистка зубов/1/3 челюсти', classification: 'Чистка 1/3', price: '10,000', minPrice: '', maxPrice: '', note: '', updated: '2021-11-18' },
    { code: 'UW3021027', item: 'Стоматологическое лечение: Чистка/верхняя челюсть', classification: 'Чистка верхняя', price: '25,000', minPrice: '', maxPrice: '', note: '', updated: '2021-11-19' },
    { code: 'UW3021037', item: 'Стоматологическое лечение: Чистка/нижняя челюсть', classification: 'Чистка нижняя', price: '25,000', minPrice: '', maxPrice: '', note: '', updated: '2021-11-20' },
    { code: 'UW3021047', item: 'Стоматологическое лечение: Чистка/обе челюсти', classification: 'Полная чистка', price: '70,000', minPrice: '', maxPrice: '', note: '', updated: '2021-11-21' },
    { code: 'UZ0040014', item: 'Стоматологическое лечение: Вкладка/накладка (золото и др.)', classification: 'Керамическая вкладка', price: '300,000', minPrice: '', maxPrice: '', note: '', updated: '2021-11-24' },
    { code: 'U02390000', item: 'Стоматологическое лечение: Композитная пломба/кариес-1 поверхность', classification: 'Пломба 1 поверхность', price: '100,000', minPrice: '', maxPrice: '', note: '', updated: '2021-11-25' },
    { code: 'U02400000', item: 'Стоматологическое лечение: Композитная пломба/кариес-2 поверхности', classification: 'Пломба 2 поверхности', price: '100,000', minPrice: '', maxPrice: '', note: '', updated: '2021-11-26' },
    { code: 'U02410000', item: 'Стоматологическое лечение: Композитная пломба/кариес-3+ поверхности', classification: 'Пломба 3+ поверхности', price: '150,000', minPrice: '', maxPrice: '', note: '', updated: '2021-11-27' },
    { code: 'UZ0050001', item: 'Стоматологическое лечение: Композитная пломба/пришеечная', classification: 'Пришеечная пломба', price: '80,000', minPrice: '', maxPrice: '', note: '', updated: '2021-11-28' },
    { code: 'UB0010051', item: 'Протезирование: Имплант (1 зуб)/Zirconia', classification: 'Имплант zir', price: '', minPrice: '890,000', maxPrice: '1,290,000', note: '', updated: '2021-12-01' },
    { code: 'UW609F350', item: 'Протезирование: Коронка/Zirconia', classification: 'Zirconia', price: '500,000', minPrice: '', maxPrice: '', note: 'core отдельно', updated: '2021-12-04' },
    { code: 'PDZ010000', item: 'Справки: Диагностическая/общая', classification: 'Общая справка', price: '20,000', minPrice: '', maxPrice: '', note: '', updated: '2021-12-05' },
    { code: 'PDZ070003', item: 'Справки: О последствиях травмы', classification: 'Справка о последствиях', price: '100,000', minPrice: '', maxPrice: '', note: '', updated: '2021-12-06' },
    { code: 'PDZ020001', item: 'Справки: О травме/менее 3 недель', classification: 'Справка менее 3 нед', price: '100,000', minPrice: '', maxPrice: '', note: '', updated: '2021-12-07' },
    { code: 'PDZ020002', item: 'Справки: О травме/3 недели и более', classification: 'Справка 3+ нед', price: '150,000', minPrice: '', maxPrice: '', note: '', updated: '2021-12-08' },
    { code: 'PDZ090007', item: 'Справки: Подтверждение/лечение', classification: 'Подтверждение лечения', price: '3,000', minPrice: '', maxPrice: '', note: '', updated: '2021-12-09' },
    { code: 'PDZ140001', item: 'Справки: Смета будущего лечения/до 10 млн', classification: 'До 10 млн', price: '50,000', minPrice: '', maxPrice: '', note: '', updated: '2021-12-10' },
    { code: 'PDZ140002', item: 'Справки: Смета будущего лечения/10 млн+', classification: '10 млн+', price: '100,000', minPrice: '', maxPrice: '', note: '', updated: '2021-12-11' },
    { code: 'PDZ110101', item: 'Справки: Копия медкарты/1-5 страниц', classification: '1-5 страниц', price: '1,000', minPrice: '', maxPrice: '', note: '', updated: '2021-12-12' },
    { code: 'PDZ110003', item: 'Справки: Медицинские снимки/пленка', classification: 'Пленка', price: '5,000', minPrice: '', maxPrice: '', note: '', updated: '2021-12-13' },
    { code: 'PDZ110004', item: 'Справки: Медицинские снимки/CD', classification: 'CD', price: '10,000', minPrice: '', maxPrice: '', note: '', updated: '2021-12-14' },
    { code: 'PDZ160000', item: 'Справки: Копия справки', classification: 'Копия справки', price: '1,000', minPrice: '', maxPrice: '', note: '', updated: '2021-12-15' },
  ];

  return (
    <div className="space-y-4">
      <div className="bg-blue-50 p-4 rounded-lg text-sm text-gray-700">
        <p className="font-semibold mb-2">Прайс-лист на услуги, не покрываемые страховкой</p>
        <p className="text-xs leading-relaxed">
          Данный прайс-лист составлен по состоянию на ноябрь 2021 года и может меняться в зависимости от состояния полости рта пациента и используемых материалов.
          Точная стоимость лечения уточняется на консультации в клинике.
        </p>
      </div>

      <div className="overflow-x-auto -mx-6 px-6">
        <table className="w-full text-xs border-collapse">
          <thead>
            <tr className="bg-[#6b8cce] text-white">
              <th className="border border-gray-300 px-2 py-2 text-left min-w-[100px]">Код</th>
              <th className="border border-gray-300 px-2 py-2 text-left min-w-[200px]">Категория / Подкатегория</th>
              <th className="border border-gray-300 px-2 py-2 text-left min-w-[120px]">Название</th>
              <th className="border border-gray-300 px-2 py-2 text-right min-w-[80px]">Цена</th>
              <th className="border border-gray-300 px-2 py-2 text-right min-w-[80px]">Мин. цена</th>
              <th className="border border-gray-300 px-2 py-2 text-right min-w-[80px]">Макс. цена</th>
              <th className="border border-gray-300 px-2 py-2 text-left min-w-[150px]">Примечание</th>
              <th className="border border-gray-300 px-2 py-2 text-center min-w-[90px]">Обновлено</th>
            </tr>
          </thead>
          <tbody>
            {prices.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="border border-gray-300 px-2 py-2 text-gray-600">{item.code}</td>
                <td className="border border-gray-300 px-2 py-2">{item.item}</td>
                <td className="border border-gray-300 px-2 py-2">{item.classification}</td>
                <td className="border border-gray-300 px-2 py-2 text-right font-semibold">
                  {item.price ? `${item.price} KRW` : '-'}
                </td>
                <td className="border border-gray-300 px-2 py-2 text-right">
                  {item.minPrice ? `${item.minPrice} KRW` : '-'}
                </td>
                <td className="border border-gray-300 px-2 py-2 text-right">
                  {item.maxPrice ? `${item.maxPrice} KRW` : '-'}
                </td>
                <td className="border border-gray-300 px-2 py-2 text-xs text-gray-600">{item.note}</td>
                <td className="border border-gray-300 px-2 py-2 text-center text-gray-500">{item.updated}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="text-xs text-gray-500 space-y-1 pt-4">
        <p>* Данные услуги не покрываются медицинским страхованием.</p>
        <p>* Фактическая стоимость может отличаться в зависимости от содержания лечения и используемых материалов.</p>
        <p>* Точная стоимость уточняется на консультации.</p>
      </div>
    </div>
  );
}
