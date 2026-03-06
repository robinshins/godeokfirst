import Image from 'next/image';

export default function DoctorSection() {
  const doctors = [
    {
      name: 'Dr. Kim Dong-seok',
      position: 'Head Dentist',
      image: '/images/dr-kim-dongseok.jpg',
      credentials: [
        'Master of Integrated Dentistry',
        'Ministry of Health certified Integrated Dentistry Specialist'
      ],
      details: [
        'Seoul National University Graduate School of Dentistry, Advanced Dentistry',
        'Seoul National University Graduate School of Dentistry, Implant Dentistry',
        'Board Member, World Congress of Oral Implantology',
        'Board Member, Korean Academy of Maxillofacial Implantology',
        'Member, Texas A&M University Prosthodontics Research Group',
        'Research Consultant, Osstem Implant',
        'Research Consultant, Neo Implant',
        'Research Consultant, Hiossen Implant',
        'Certified Member, Korean Academy of Esthetic Dentistry',
        'Regular Member, Korean Academy of Integrated Dentistry',
        'Regular Member, Korean Academy of Conservative Dentistry',
        'Certified in TMJ Treatment, Health Insurance Review Agency'
      ]
    },
    {
      name: 'Dr. Bae In-hye',
      position: 'Conservative Dentistry Specialist',
      image: '/images/dr-bae-inhye.png',
      credentials: [
        'Dual License: Dentist & Pharmacist',
        'Ministry of Health certified Conservative Dentistry Specialist'
      ],
      details: [
        'Resident, Pusan National University Dental Hospital, Conservative Dentistry',
        'Ph.D. Candidate, Pusan National University School of Dentistry (Conservative Dentistry)',
        'Master of Dentistry, Valedictorian',
        'Regular Member, Korean Academy of Conservative Dentistry',
        'Regular Member, Korean Academy of Endodontology',
        'Regular Member, Korean Academy of Adhesive Dentistry',
        'Member, Korean Academy of Dental Materials',
        'Member, Korean Academy of Esthetic Dentistry',
        'Former Director, Good Smile Dental Clinic',
        'Former Director, Plant Dental Clinic'
      ]
    }
  ];

  return (
    <div id="doctor" style={{ background: 'linear-gradient(161deg, #021847 13.86%, #0B255C 19.07%, #000 28.55%)' }}>
      <div className="max-w-[430px] mx-auto px-4 py-[60px]">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-5 mb-12">
          <div className="flex justify-center items-center w-[167.981px] h-[24px] gap-[4.8px]">
            <Image
              src="/icons/Logo.svg"
              alt="Medis Dental Clinic"
              width={168}
              height={24}
              className="object-contain"
            />
          </div>
          <p className="text-[17px] font-['Pretendard_JP'] font-bold text-[#64b7ff] uppercase tracking-[2.04px] leading-[32px]">
            Collaboration Between Specialists
          </p>
          <h2 className="text-[36px] font-['Pretendard_JP'] font-bold text-white leading-[1.35] tracking-[-0.72px] text-center">
            Kyungsung Medis Dental
            <br />
            Expert Medical Team
          </h2>
        </div>

        {/* Doctor Cards */}
        <div className="flex flex-col gap-[60px] mt-[60px]">
          {doctors.map((doctor, index) => (
            <div key={index} className="flex flex-col gap-8">
              {/* Doctor Image */}
              <div className="bg-white rounded-[20px] overflow-hidden shadow-lg h-[280px] relative">
                <Image
                  src={doctor.image}
                  alt={`${doctor.name} ${doctor.position}`}
                  fill
                  className="object-cover object-top"
                />
              </div>

              {/* Doctor Info */}
              <div className="text-white">
                <div className="flex items-center gap-2 mb-5">
                  <h3 className="text-3xl font-bold">{doctor.name}</h3>
                  <span className="text-lg font-bold">{doctor.position}</span>
                </div>

                <div className="text-2xl font-bold mb-8 leading-[1.6]">
                  {doctor.credentials.map((cred, i) => (
                    <p key={i} className={i === 0 ? 'mb-0' : ''}>{cred}</p>
                  ))}
                </div>

                <ul className="space-y-2 text-sm opacity-80">
                  {doctor.details.map((detail, i) => (
                    <li key={i} className="leading-[1.4] pl-5 relative before:content-['•'] before:absolute before:left-0">
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
