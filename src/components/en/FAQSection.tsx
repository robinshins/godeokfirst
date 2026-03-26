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
      question: 'What is a Comprehensive\nDentistry Specialist?',
      answer: 'A Comprehensive Dentistry Specialist is a government-certified dental specialist who can diagnose and treat all dental fields including implants, prosthetics, root canals, and gum care. Dr. Lee Dong-hyun at Godeok First Dental personally handles consultation, surgery, and aftercare.'
    },
    {
      question: 'What makes you\ndifferent from other clinics?',
      answer: 'Godeok First Dental is treated by a government-certified Comprehensive Dentistry Specialist. Unlike clinics where your doctor frequently changes, one doctor takes responsibility from consultation to surgery and aftercare. With credentials from Seoul National University and experience as a research advisor for Osstem/Point/Dentis implants.'
    },
    {
      question: "I'm worried about\ntreatment costs",
      answer: 'We provide top-quality treatment at reasonable prices. We maximize insurance coverage and offer interest-free installments. Get an estimate first through our free AI consultation.'
    },
    {
      question: 'What happens on\nmy first visit?',
      answer: "On your first visit, we perform a 3D CT scan for precise diagnosis. Then you'll have a 1-on-1 consultation with our specialist to create a personalized treatment plan with detailed guidance on methods, costs, and timeline."
    }
  ],
  denture: [
    { question: 'Dentures or implants —\nwhich is right for me?', answer: 'If cost is a major concern, insurance-covered dentures may be suitable. If you prioritize chewing ability and comfort, implant-based treatment is better. We recommend the optimal treatment considering bone condition, age, and budget.' },
    { question: 'Can I get insurance\ncoverage if I\'m 65+?', answer: 'Yes, if you are 65 or older, health insurance covers up to 2 implants. Dentures are also eligible for insurance coverage, significantly reducing your out-of-pocket costs.' },
    { question: 'Is All-on-X possible\neven with bone loss?', answer: 'Yes. All-on-X selects areas with good bone for implant placement, minimizing bone grafting. We\'ll provide an accurate assessment after 3D CT diagnosis.' },
    { question: 'How long does full-arch\nimplant treatment take?', answer: 'All-on-X takes 3-6 months on average. Temporary prosthetics are placed immediately after surgery, so you\'re never without teeth.' },
    { question: 'Can I eat anything after\nfull-arch implants?', answer: 'Yes, once treatment is complete, there are virtually no dietary restrictions. You\'ll recover 80-90% of natural chewing ability.' },
  ],
  implant: [
    { question: 'Do you only do\nfull-arch implants?', answer: 'No. We perform all implant treatments from single-tooth to full-arch (All-on-X). We apply the same digital guide surgery system to all cases.' },
    { question: 'Is digital guide surgery\nexpensive?', answer: 'We provide high-quality implant treatment at reasonable prices. The precision of digital guide surgery means getting it right the first time, making it more economical long-term. Insurance available for 65+.' },
    { question: 'Can I eat right\nafter surgery?', answer: 'Yes. Temporary teeth are provided immediately after surgery. You won\'t go a single day without teeth.' },
    { question: 'How is digital guide surgery\ndifferent from regular surgery?', answer: 'Digital guide surgery performs a virtual surgery on computer after 3D scanning, designing optimal placement within 1mm precision. Result: shorter procedure, minimized pain, swelling, and bone grafting.' },
    { question: 'How long does implant\ntreatment take?', answer: 'Generally 3-6 months. You can use temporary teeth from day one. Exact timeline provided after 3D CT diagnosis.' },
    { question: 'Does implant surgery\nhurt?', answer: 'Sedation (sleep anesthesia) is available. Digital guide surgery\'s minimal incision approach significantly reduces swelling and pain compared to conventional surgery.' },
    { question: 'Are implants really\nbetter than dentures?', answer: 'Absolutely. Dentures retain only 30% of natural chewing ability, while implants recover 80-90%. No need to remove and insert, easy maintenance, and you can smile with confidence.' }
  ],
  whitening: [
    { question: 'Can anyone get\nteeth whitening?', answer: 'Most healthy adults can. Cavities or gum disease should be treated first. Not recommended for pregnant or nursing women. Our specialist assesses suitability before treatment.' },
    { question: 'Is professional whitening\nreally better than DIY?', answer: 'Absolutely. Professional whitening uses high-concentration medication for immediate results. It\'s also much safer as the dentist fully protects your gums.' },
    { question: 'Will my teeth be\nsensitive after whitening?', answer: 'We use the latest equipment with built-in sensitivity prevention. We provide detailed aftercare instructions for comfortable, bright teeth.' },
    { question: 'How long do whitening\nresults last?', answer: 'Generally 1-2 years. Reducing coffee, wine, smoking, and getting regular scaling helps maintain results longer.' },
    { question: 'Discount when combining\nscaling and whitening?', answer: 'Yes, you receive a discount when getting whitening with scaling. Whitening after clean scaling produces even better results.' }
  ],
  'wisdom-tooth': [
    { question: 'Do I really need my\nwisdom teeth removed?', answer: 'Even without pain, they can cause inflammation, cavities, and misalignment. Recovery is faster and complications fewer when you\'re younger.' },
    { question: 'Can you extract\ndifficult wisdom teeth?', answer: 'Yes. We have university hospital-level capability for difficult cases including horizontally and fully impacted wisdom teeth, using 3D CT diagnosis.' },
    { question: 'Does wisdom tooth\nextraction hurt?', answer: 'Our pain-minimization system means you barely feel anything. Sedation is available for anxious patients. Recovery is faster when younger.' },
    { question: 'What should I do\nafter extraction?', answer: 'Avoid hot/spicy foods, eat soft foods. No intense exercise or sauna for 2-3 days. Take prescribed medication regularly. Bite gauze for 30-60 minutes.' },
    { question: 'Can I get same-day\nextraction?', answer: 'Yes, extraction is possible right after 3D CT diagnosis. One-stop system from diagnosis to extraction to aftercare in a single visit.' },
  ],
  'cavity-treatment': [
    { question: 'Another clinic said to extract.\nCan you save my tooth?', answer: 'Very likely yes. Our specialist provides precise diagnosis. We can often find ways to save teeth that other clinics can\'t. Preserving natural teeth is always our top priority.' },
    { question: 'Does root canal\ntreatment hurt?', answer: 'Our pain-minimization system minimizes discomfort. Sedation available for anxious patients. Our specialist\'s precise treatment minimizes recurrence.' },
    { question: 'Does cavity treatment\ntake long?', answer: 'Early cavities are quickly completed with resin. Root canal requires 2-3 visits, but our precise treatment minimizes visits. Exact timeline depends on your condition.' },
    { question: 'Is cavity treatment\ncovered by insurance?', answer: 'Yes, most cavity treatments are covered by health insurance including resin, root canal, and crowns. Inlays/onlays may require out-of-pocket payment.' }
  ],
  'tmj': [
    { question: 'My jaw just clicks —\ndo I need treatment?', answer: 'Jaw clicking signals the joint disc has shifted. Even without pain, leaving it can progress to chronic pain.\n\nEarly diagnosis and management resolves it with simple treatment.' },
    { question: 'Do I really need\na splint?', answer: 'If grinding or clenching is the cause, a splint is the most effective treatment. It distributes excessive force during sleep.\n\nCustom-made for each patient with periodic adjustments.' },
    { question: 'How long does TMJ\ntreatment take?', answer: 'Acute pain often improves within 1-2 weeks. Splint treatment typically takes 3-6 months.\n\nExact timeline provided after thorough diagnosis.' },
    { question: 'Is TMJ treatment\ncovered by insurance?', answer: 'X-rays and medication are covered. Splint treatment is non-insurance but much more economical long-term as it can prevent surgery.\n\nDetailed costs provided during consultation.' }
  ],
  'gum-care': [
    { question: 'Isn\'t scaling\nenough?', answer: 'Scaling is the first step. But if gum disease has progressed, specialized treatment is needed to remove deep bacteria.\n\nGum treatment every 6 months helps preserve natural teeth longer.' },
    { question: 'I heard gum treatment\nhurts — is it okay?', answer: 'Don\'t worry. Our pain-minimization system ensures comfortable treatment.\n\nMany patients are surprised that dental treatment can be this comfortable.' },
    { question: 'How often should\nI get treatment?', answer: 'Scaling once a year (insurance covered), gum treatment every 6 months is ideal.\n\nFor severe cases, 3-month intervals are more effective. Regular care can help you keep natural teeth for life.' },
    { question: 'How does insurance\napply?', answer: 'Scaling is covered once a year. Gum treatment may also qualify for insurance.\n\nDetailed coverage explained during consultation.' },
    { question: 'Why do other clinics avoid\ngum treatment?', answer: 'Honestly, implants are more profitable. Also, if extraction becomes necessary after gum treatment, patients may be unhappy.\n\nBut we prioritize preserving natural teeth with our specialist\'s high success rate.' }
  ]
};

export default function FAQSection({ page = 'home' }: FAQSectionProps) {
  const faqs = faqData[page];

  return (
    <div className="bg-white">
      <div className="max-w-[430px] mx-auto px-4 py-[60px]">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-[#292a2f] text-center mb-[60px]">
          FAQ
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
