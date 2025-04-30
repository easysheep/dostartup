
export type PageContentType = {
    overview: {
      heading: string;
      paragraphs: string[];
      imageUrl: string;
      buttonText: string;
    };
    features: {
      icon: string;
      title: string;
      description: string;
    }[];
    benefits: {
      title: string;
      img?: string;
      description: string;
    }[];
    documents: {
      steps: { title: string; desc: string }[];
      violations: string[];
      consequences: string[];
    };
    eligibility: { heading: string; items: string[] }[];
    services: { title: string; desc: string }[];
    faqs: { question: string; answer: string }[];
    types: {
      cards: { title: string; shortText: string; backText: string }[];
      roleBenefits: string[];
      differenceTable: {
        serialNumber: string;
        gst: string;
        incomeTax: string;
      }[];
      timelineFees: string[];
    };
  };
  
  export const pageContent: Record<string, PageContentType> = {
    'gst-registration': {
      overview: {
        heading: 'GST Registration in India – Everything You Need to Know',
        paragraphs: [
          'If you are looking for GST registration to empower your business legally, you are at the right place.',
          'The Goods and Services Tax, popularly known as GST, was introduced on July 1, 2017, as a replacement for various central and state-level taxes, including Service Tax, Excise Duty, CST, Entertainment Tax, Luxury Tax, and VAT. GST has streamlined compliance, lowered tax evasions, and boosted the efficacy of the economy.',
          'GST has united multiple indirect taxes into a unified system, promoting the ease of doing business and eliminating cascading tax effects.',
          'Talk to consultants at Corpbiz and enjoy easy and timely GST registration in India.'
        ],
        imageUrl: 'https://corpbiz.io/img/img1.webp',
        buttonText: 'Get started with DoStartup',
      },
      features: [
        { icon: '🏢', title: 'Central Goods and Services Tax (CGST)', description: 'Central Goods and Services Tax (CGST) is a tax imposed by the Central Government on the supply of goods and services within a specified period.' },
        { icon: '🏛️', title: 'State Goods and Services Tax (SGST)', description: 'State Goods and Services Tax (SGST) is a tax imposed by the State Government on the supply of goods and services within the state.' },
        { icon: '🌐', title: 'Integrated Goods and Services Tax (IGST)', description: 'Integrated GST (IGST) is a tax imposed on inter-state goods and services supply.' },
      ],
      benefits: [
        { title: 'Regulatory Compliance', img: 'https://corpbiz.io/img/adv_icon1.webp', description: 'GST registration safeguards interests by ensuring legal and tax compliance.' },
        { title: 'Easy Compliance', description: 'Helps streamline filing returns and online payments.' },
        { title: 'Maintains Transparency', description: 'Allows maintaining updated records and operational transparency.' },
        { title: 'Legal Protection', description: 'Safeguards legal and regulatory standards of the business.' },
      ],
      documents: {
        steps: [
          { title: 'Apply on GST Portal', desc: 'Visit the GST portal and provide business details.' },
          { title: 'Authenticate OTP', desc: 'Verify via OTP sent to your mobile and email.' },
          { title: 'TRN Generated', desc: 'Receive the generated TRN number via email.' },
          { title: 'Submission for Verification', desc: 'Submit promoter, business, and Aadhar details.' },
          { title: 'Receive ARN Confirmation', desc: 'Get ARN confirmation via SMS.' },
        ],
        violations: [
          'Penalty of 10% of pending tax for accidental underpayment.',
          '100% penalty for intentional tax evasion.',
          'Minimum INR 10,000 penalty for late payments.',
          'Interest on outstanding GST liabilities.',
          'Suspension or cancellation of GST registration.'
        ],
        consequences: [
          'Rs. 10,000 or tax evaded, whichever is greater (Section 122).',
          'Penalty for non-registration: Rs. 2 lakhs or Rs. 10,000 (whichever higher).',
          'Rs. 2 lakh if GST registration is not obtained.'
        ],
      },
      eligibility: [
        { heading: 'Eligibility Checklist for Filing GST Registration', items: [
            'Businesses with turnover over INR 40 Lakhs (INR 20 Lakhs for special states).',
            'Service providers with turnover over INR 20 Lakhs (INR 10 Lakhs for special states).',
            'Businesses previously under old tax structures must migrate.',
            'Non-residents supplying taxable services in India require registration.',
          ]
        },
        { heading: 'Other Entities Eligible to Apply', items: [
            'Inter-state goods suppliers.',
            'Reverse charge liable entities.',
            'Input service distributors.',
            'E-commerce operators.',
          ]
        },
        { heading: 'Documents Required for GST Registration Online', items: [
            'PAN Card', 'Aadhar Card', 'Company Registration Certificate', 'Identity & Address Proof', 'Photographs', 'Business Address Proof', 'Bank Statement', 'Digital Signature Certificate', 'Lease Agreement', 'Authorization Letter'
          ]
        }
      ],
      services: [
        { title: 'Simplified Registration', desc: 'Processed 5000+ GST applications successfully.' },
        { title: 'High Success Rate', desc: '99% success rate in obtaining certificates.' },
        { title: 'Simplify Documentation', desc: 'Assisting in documentation for GST registration.' },
        { title: 'Legal Advice', desc: 'Regular legal updates and advice.' },
        { title: 'End-to-End Solutions', desc: 'Complete compliance solutions.' },
        { title: 'Affordable Pricing', desc: 'Transparent pricing for GST services.' },
        { title: 'Reduced Compliance Burden', desc: 'Reduce burden by up to 30%.' },
        { title: '10+ Years of Experience', desc: 'Extensive expertise in GST registration.' },
        { title: '24/7 Customer Support', desc: 'Round-the-clock compliance assistance.' },
      ],
      faqs: [
        { question: 'What is GST?', answer: 'GST stands for Goods and Services Tax.' },
        { question: 'When is GST registration crucial?', answer: 'For businesses exceeding threshold, e-commerce, and inter-state suppliers.' },
        { question: 'Is photograph required for registration?', answer: 'Yes, recent photograph is mandatory.' },
        { question: 'Do e-commerce operators register in each state?', answer: 'Yes, registration is state-specific.' },
        { question: 'Is GST registration mandatory in India?', answer: 'Yes for eligible businesses.' },
        { question: 'Is GST certificate mandatory?', answer: 'Yes, it is proof of registration.' },
      ],
      types: {
        cards: [
          { title: 'Wrong Documentation', shortText: 'Avoid wrong documentation.', backText: 'Avoid preparing invoices and bills incorrectly.' },
          { title: 'Understanding Composition Scheme', shortText: 'Misunderstanding can cause issues.', backText: 'Be aware of the GST composition scheme implications.' },
          { title: 'Missing Return Deadlines', shortText: 'Don’t miss filing due dates.', backText: 'Late filings lead to penalties.' },
          { title: 'Invoice Inaccuracies', shortText: 'Ensure invoice accuracy.', backText: 'Mistakes lead to compliance risks.' },
          { title: 'GSTR-2A/3B Discrepancies', shortText: 'Reconcile purchases regularly.', backText: 'Avoid mismatches in returns.' },
          { title: 'Unverified GSTIN', shortText: 'Verify supplier GSTINs.', backText: 'Prevent input tax credit issues.' },
        ],
        roleBenefits: [
          'Allows collection of GST from customers.',
          'Enables input tax credit claims.',
          'Facilitates loan applications.',
          'Qualifies for government tenders.',
          'Boosts business credibility.',
        ],
        differenceTable: [
          { serialNumber: '1', gst: 'Indirect tax on consumption', incomeTax: 'Direct tax on income' },
          { serialNumber: '2', gst: 'Multi-stage tax with input credit', incomeTax: 'Single-level tax' },
          { serialNumber: '3', gst: 'Filed monthly/quarterly', incomeTax: 'Filed annually' },
          { serialNumber: '4', gst: 'Central & State governments', incomeTax: 'Central government only' },
          { serialNumber: '5', gst: 'Mandatory above Rs. 40 Lakhs turnover', incomeTax: 'Above Rs. 3 Lakhs income' },
        ],
        timelineFees: [
          'Approval timeline: 7-10 working days.',
          'Full process: approx. 30 days.',
          'Starting fees from Rs. 1999/-.',
          'Government charges no direct fees online.',
          'Fees influenced by state policies and business nature.',
        ],
      },
    },
  };