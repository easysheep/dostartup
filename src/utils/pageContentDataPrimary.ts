export type PageContentType = {
  title: string;
  description: string;
  overview: { heading: string; content: string }[];
  benefits: { heading: string; content: string }[];
  documentsRequired: { heading: string; content: string }[];
  registrationProcedure: {
    heading: string;
    content: string;
    penalties?: {
      description: string;
      penaltyTable: {
        serialNumber: string;
        particulars: string;
        fine: string;
      }[];
    };
  }[];
  feesStructure: {
    heading?: string;
    paymentMethods?: string[];
    description?: string;
    feeTable?: {
      category: string;
      amount: string;
    }[];
  }[];
  registrationTimeline: {
    heading: string;
    description?: string;
    steps?: {
      title: string;
      duration: string;
      description: string;
    }[];
    totalTime?: string;
  }[];
  whyUs?: {
    heading?: string;
    description?: string[];
    points?: string[];
    footerText?: string;
  }[];
  faq: {
    question: string;
    answer: string;
    heading?: string;
  }[];
};

export const pageContent: Record<string, PageContentType> = {
  "fssai-state-license": {
    title: "FSSAI State License",
    description: "Get your FSSAI state food license with our expert guidance.",
    overview: [
      {
        heading: "FSSAI State License - An Overview",
        content: `FSSAI (Food Safety and Standards Authority of India) regulates the food sector across India. 
                    It ensures food safety by implementing strict guidelines. 
                    Every food business operator (FBO) must secure an FSSAI state license to operate legally. 
                    Operating without a valid license is a punishable offence under the FSS Act, 2006.
                    Functioning without a valid state food license registration is a punishable offence for FBOs as per 
                    the FSS Act, 2006. FSSAI conducts all its operations given the said Act and also follows the direction 
                    of the Ministry of Health & Family Welfare.`,
      },
    ],
    benefits: [
      {
        heading: "Benefits of Obtaining FSSAI State License",
        content: `- Boosts consumer confidence by assuring food safety standards
      - Improves brand credibility and goodwill
      - Helps in business expansion and legal compliance
      - Access to new markets including government tenders and online marketplaces
      - Sets guidelines for better hygiene and safety standards`,
      },
    ],
    documentsRequired: [
      {
        heading: "Who Needs an FSSAI State License?",
        content: `Businesses with a medium-sized operation in food manufacturing, processing, packaging, storage, distribution, or sales need to obtain an FSSAI State License. In particular, this license is required for businesses that belong to the following categories:
      - Businesses operating in a single state and generating an annual turnover of more than Rs 12 lacs and less than Rs 20 Crores.
      - Facility dealing with Proprietary foods.
      - Vegetable oil production & processing facility using the process of solvent extraction meeting the above turnover criteria.
      - Hotels having a 4-star rating or less.`,
      },
      {
        heading: "Documents Required to Obtain FSSAI State License",
        content: `Following are the Documents that one to arrange to apply for a state FSSAI license:
      Given below are the significant documents required to obtain FSSAI State License:
      - Details of key management personnel with real address & contact particulars
      - Passport-sized photos of the individual seeking the license
      - Identification and address proof of the individual
      - Applicant's PAN card`,
      },
    ],
    registrationProcedure: [
      {
        heading: "Process for Obtaining FSSAI State License",
        content: `Arranging the aforesaid Document and Filing of application via Form B.
      Submission of form to licensing authority via online portal FOSCOS. The filing process ends with the submission of standard fees.
      In-depth scrutiny of applications and Documents by FSSAI's officials.
      If needed, an on-site inspection will be conducted by FSSAI's officials to determine the level of compliance at business premises.
      Grant of State FSSAI License by the licensing authority (Note: The application may be revoked by the licensing authority in case of non-compliance).
      After securing the license, the business owner can commence their business operation.`,
        penalties: {
          description:
            "In general, the penalties for FBOs in India are pretty stringent...",
          penaltyTable: [
            {
              serialNumber: "1",
              particulars:
                "Food quality breaches the compliance given in the act",
              fine: "2 Lakh \nPetty manufacturer 25,000/-",
            },
            {
              serialNumber: "2",
              particulars: "Sub-standard food",
              fine: "5 Lakh",
            },
            // ... other penalty items
          ],
        },
      },
    ],
    feesStructure: [
      {
        heading: "Fee Structure for Obtaining FSSAI State License",
        paymentMethods: ["Demand Draft (DD)", "Treasury Challan, or", "Cash"],
        description:
          "The applicable fee varies in accordance with the production capacity of the food business:",
        feeTable: [
          {
            category:
              "More than One million tons/day\n10001 to 50,000 L/day of milk or 501 to 2500 Million tons of milk solids/annum.",
            amount: "5000/-",
          },
          {
            category:
              "Lower than one Million tons of production 501 to 10,000 L/day of milk or 2.5 million tons to 500 million tons of yearly production of milk solid.",
            amount: "3000/-",
          },
          {
            category: "Hotels having 4 stars rating",
            amount: "5000/-",
          },
          {
            category:
              "All Food Service providers including restaurants, Canteens, clubs, caterers, Banquet halls offering food catering services, Dabbawalla system, & other FBOs.",
            amount: "2000/-",
          },
        ],
      },
    ],
    registrationTimeline: [
      {
        heading: "Timeline to Obtain FSSAI State License",
        description:
          "Securing an FSSAI State License involves multiple stages. Here is an overview of the process timeline:",
        steps: [
          {
            title: "Preparation & Documentation",
            duration: "1-2 Weeks",
            description:
              "Start by gathering all required paperwork, including proof of address, identification, business registration, and a food safety management strategy. Perform a preliminary evaluation before applying to confirm you possess all necessary documents.",
          },
          {
            title: "Submission of Application",
            duration: "1 Week",
            description:
              "Fill out and send the FSSAI State License application form, either online via the FSSAI portal or at the nearby FSSAI office.",
          },
          {
            title: "Review of Application & Documents",
            duration: "2-3 Weeks",
            description:
              "Your application and documents will be reviewed by the FSSAI authority. Be ready to address any questions or requests for more information.",
          },
          {
            title: "Inspection period",
            duration: "2-4 Weeks",
            description:
              "FSSAI officials will visit your location to check your facilities and make sure they meet food safety regulations. Ensure that all safety precautions are implemented.",
          },
          {
            title: "License Issuance",
            duration: "1-2 Weeks",
            description:
              "Once the inspection and final review are completed successfully, your FSSAI State License will be issued and delivered to you.",
          },
        ],
        totalTime: "Approximately 6 to 12 weeks.",
      },
    ],
    whyUs: [
      {
        heading:
          "Why Choose Corpbiz for FSSAI State Food License Registration?",
        description: [
          "Illuminate your FSSAI state food license registration journey with Corpbiz! Our modern methodology streamlines the licensing process, converting it from a regulatory necessity into a valuable strategic asset for your business.",
          "Our team of specialists provides a seamless and efficient experience, offering precise guidance to boost your compliance and growth. See how we can simplify your FSSAI State License application with unparalleled expertise and support and why entrepreneurs trust us.",
        ],
        points: [
          "Conduct Thorough Assessments to Ensure Compliance with State-specific Regulations",
          "Expand your Business Potential with our 10+ Years of Expertise in FSSAI Services",
          "99% Success Rate in Approval of FSSAI Applications in One Go",
          "Enhance your Brand's Credibility and Market Presence with a Valid FSSAI State License",
          "Benefit from Seamless Application Processing and a Hassle-free Licensing Experience",
        ],
        footerText:
          "Delivering State Food License Registration Services in 25+ States",
      },
    ],
    faq: [
      {
        question: "What is an FSSAI state license?",
        answer:
          "An FSSAI state license is a mandatory requirement for food businesses to ensure food safety and compliance with standards set by FSSAI.",
      },
      {
        question: "How can I get an FSSAI state license?",
        answer:
          "To obtain an FSSAI state license, you need to submit an application, undergo a review, and have your premises inspected by FSSAI officials.",
      },
      // ... other FAQ items
    ],
  },

  "fssai-license-renewal": {
    title: "FSSAI License Renewal",
    description:
      "Ensure your food business stays compliant by renewing your FSSAI license with our expert assistance.",
    overview: [
      {
        heading: "FSSAI License Renewal - An Overview",
        content: `According to the Food Safety and Standards Authority of India (FSSAI), it is mandatory for all food businesses in India to renew their FSSAI license before its expiration date. The license is typically valid for 1 to 5 years depending on the choice made at the time of registration. Failure to renew on time can lead to penalties and even suspension of the food license. Therefore, timely renewal is crucial to avoid disruptions and maintain smooth operations.`,
      },
    ],
    benefits: [
      {
        heading: "Benefits of Renewing FSSAI License",
        content: `- Continues legal operation of your food business without penalties
- Maintains trust among customers with proof of compliance
- Prevents business interruptions due to license expiration
- Avoids hefty fines and legal actions
- Strengthens brand reputation by showcasing adherence to food safety standards`,
      },
    ],
    documentsRequired: [
      {
        heading: "Documents Required for FSSAI License Renewal",
        content: `The following documents are needed to renew your FSSAI License:
- Form B duly filled and signed
- Photo ID and address proof of the applicant
- Valid proof of business premises (like utility bills or rent agreements)
- Food safety management plan
- Declaration of food categories to be handled
- List of machinery and equipment used
- Analysis report of water used (if applicable)`,
      },
    ],
    registrationProcedure: [
      {
        heading: "Process for Renewing FSSAI License",
        content: `- Log in to the FSSAI's FOSCOS portal.
- Fill out the license renewal form and upload the necessary documents.
- Pay the prescribed renewal fee.
- Submit the renewal application at least 30 days before the expiration date.
- The authority will verify the application and documents.
- If required, an inspection of the premises may be carried out.
- After successful verification, the renewed FSSAI license will be issued.`,
        penalties: {
          description:
            "Failing to renew the FSSAI license within the stipulated time can attract heavy penalties.",
          penaltyTable: [
            {
              serialNumber: "1",
              particulars: "Operating with an expired license",
              fine: "Rs. 100 per day until renewal",
            },
            {
              serialNumber: "2",
              particulars: "Operating without a valid license",
              fine: "Up to Rs. 5 Lakhs and potential closure of the business",
            },
          ],
        },
      },
    ],
    feesStructure: [
      {
        heading: "Fee Structure for FSSAI License Renewal",
        paymentMethods: [
          "Online Payment",
          "Demand Draft (DD)",
          "Cash Payment (Offline submission)",
        ],
        description:
          "The fee for FSSAI license renewal depends on the type and scale of the food business and mirrors the original license fee structure:",
        feeTable: [
          {
            category: "Basic FSSAI Registration (for petty food businesses)",
            amount: "Rs. 100/- per year",
          },
          {
            category: "State License (medium-sized businesses)",
            amount: "Rs. 2000/- to Rs. 5000/- per year",
          },
          {
            category:
              "Central License (large businesses with interstate operations)",
            amount: "Rs. 7500/- per year",
          },
        ],
      },
    ],
    registrationTimeline: [
      {
        heading: "Timeline to Renew FSSAI License",
        description:
          "The renewal process should be initiated at least 30 days prior to the license expiry. Here’s the typical timeline:",
        steps: [
          {
            title: "Document Preparation",
            duration: "2-3 Days",
            description:
              "Collect and verify all required documents for renewal.",
          },
          {
            title: "Application Submission",
            duration: "1 Day",
            description:
              "Submit the renewal application and required documents through the FOSCOS portal.",
          },
          {
            title: "Verification and Inspection",
            duration: "7-15 Days",
            description:
              "FSSAI authorities verify the application and conduct an inspection if necessary.",
          },
          {
            title: "License Renewal Approval",
            duration: "5-10 Days",
            description:
              "Upon successful verification, the renewed license will be issued.",
          },
        ],
        totalTime: "Approximately 2 to 4 weeks.",
      },
    ],
    whyUs: [
      {
        heading: "Why Choose Corpbiz for FSSAI License Renewal?",
        description: [
          "Renew your FSSAI license smoothly and efficiently with Corpbiz! We take care of end-to-end support, ensuring a hassle-free experience for you.",
          "Our team of experts assists you in document preparation, application filing, follow-ups, and securing timely approval from FSSAI authorities.",
        ],
        points: [
          "Dedicated FSSAI Consultants for end-to-end assistance",
          "Error-free and Fast Document Preparation",
          "Quick Processing and Regular Follow-ups",
          "Affordable and Transparent Pricing",
          "High Success Rate in License Renewal",
        ],
        footerText:
          "Trusted by 10,000+ Businesses Across India for FSSAI Compliance",
      },
    ],
    faq: [
      {
        question: "When should I apply for FSSAI license renewal?",
        answer:
          "You should apply for FSSAI license renewal at least 30 days before the license expiry date.",
      },
      {
        question: "What happens if I fail to renew my FSSAI license?",
        answer:
          "Failure to renew the license can result in a daily penalty of Rs. 100 and possible closure of the food business.",
      },
      {
        question: "Is there any late fee for FSSAI license renewal?",
        answer:
          "Yes, a penalty of Rs. 100 per day is levied if the renewal is not filed within the stipulated timeline.",
      },
    ],
  },

  "eating-house-license": {
    title: "Eating House License Registration",
    description:
      "An Eating House License is an essential legal authorization required to operate any establishment that serves food or beverages for public consumption. It must be obtained along with other key regulatory approvals to ensure lawful operation of restaurants, cafés, food trucks, dhabas, takeaways, and similar outlets.",
    overview: [
      {
        heading: "Overview of Eating House License Registration",
        content:
          "An Eating House License is an essential legal authorization required to operate any establishment that serves food or beverages for public consumption. It is a mandatory license for anyone looking to start a food-related business, and it must be obtained along with other key regulatory approvals.",
      },
      {
        heading: "What is an Eating House?",
        content:
          "An Eating House includes any premises where food and drinks are prepared, served, or sold for consumption by the public. This covers a wide range of food service establishments such as restaurants, cafes, food trucks, dhabas, takeaways, and other similar outlets.",
      },
      {
        heading: "Issuing Authority for Eating House License",
        content:
          "As per the Delhi Police Act, an Eating House License must be applied for through the local police department or the Commissioner of Police. The license is granted after thorough verification of documents and premises by the concerned authority.",
      },
    ],
    benefits: [],
    documentsRequired: [
      {
        heading:
          "Mandatory Documents Required for Eating House License Registration",
        content:
          "- Valid identity proof (Aadhar Card, Passport, Voter ID, Driving License, or PAN Card)\n- Address proof (Aadhar Card, Passport, electricity bill, landline bill, rent/lease deed, or property ownership papers)\n- Certificate of Incorporation (for companies)\n- Details of directors (DIR-12) or board resolution nominating the authorized signatory\n- Ownership proof, tenancy agreement, or lease deed of the business premises\n- Copy of paid water and electricity bills\n- Building safety certificate issued by a certified architect or empanelled structural engineer\n- Electrical safety certificate from the Electrical Inspector or authorized contractor\n- Lift fitness certificate (if applicable)\n- Receipt of property tax payment\n- Proof of payment of regularization charges (if applicable)\n- Receipt of land-use conversion charges (if applicable)\n- Parking charges receipt (if in-house parking is insufficient)\n- Proof of source of water supply\n- FSSAI Food License\n- GST Registration Certificate\n- PAN of the proprietor, company, or firm\n- Medical fitness certificates of all employees with photographs\n- Police verification of all employees\n- Environmental clearance certificate\n- Affidavits as per police and municipal requirements\n- Smoking area details in compliance with COTPA Act, 2003\n- Valid tobacco license (if applicable)\n- Pest control records\n- Rainwater harvesting system details\n- Layout plan of the premises",
      },
    ],
    registrationProcedure: [
      {
        heading: "Step-by-Step Procedure to Obtain an Eating House License",
        content:
          "1. Fill out the online application form on the state police or licensing portal.\n2. Upload all required documents (identity proofs, establishment details, safety certificates, declarations, etc.).\n3. Attend document and premises verification by the Additional Commissioner of Police (Licensing).\n4. Follow up regularly with the licensing department to respond to any additional queries.\n5. Upon satisfactory verification and inspection, the Eating House License is issued within 30–60 days.",
        penalties: {
          description: "",
          penaltyTable: [],
        },
      },
    ],
    feesStructure: [],
    registrationTimeline: [],
    whyUs: [
      {
        heading:
          "Why Choose DoStartup for Your Eating House License Registration?",
        description: [
          "Our team has years of experience handling government registrations and licenses across India, ensuring a smooth and efficient process.",
          "We prioritize timely submissions and follow-ups to help you get your license within the committed time frame.",
          "We simplify the complex paperwork, reducing errors and eliminating unnecessary back-and-forth with authorities.",
          "Our professionals provide expert legal guidance on all compliance norms essential for food business licensing.",
        ],
        points: [
          "Extensive experience in government registrations and licensing",
          "Timely license delivery within promised timelines",
          "Streamlined documentation process with minimal delays",
          "Expert legal guidance for full compliance",
          "End-to-end support from application to issuance",
        ],
        footerText: "",
      },
    ],
    faq: [
      {
        question:
          "What is the usual time required to obtain an Eating House License?",
        answer:
          "Generally, it takes about 30 to 60 days from application submission to license issuance, depending on documentation, inspection, and internal verification.",
      },
      {
        question: "What is the validity period of an Eating House License?",
        answer:
          "The Eating House License is typically valid for up to three years, although the duration may vary based on state regulations and related licenses such as the Health Trade License.",
      },
      {
        question: "Who issues the Eating House License?",
        answer:
          "The Additional Commissioner of Police (Licensing) or equivalent local police authority is responsible for issuing the Eating House License.",
      },
      {
        question: "Can I operate without an Eating House License?",
        answer:
          "No, operating an eating house or food service business without a valid Eating House License is illegal and may attract penalties or closure notices.",
      },
      {
        question:
          "Is an FSSAI food license mandatory along with the Eating House License?",
        answer:
          "Yes, securing a valid FSSAI food license is mandatory for any entity involved in food preparation, distribution, or service.",
      },
      {
        question: "How do I apply for an Eating House License?",
        answer:
          "You must file the application online through the designated state police licensing portal, upload all supporting documents, and pay the applicable fees.",
      },
      {
        question: "What are common reasons for application rejection?",
        answer:
          "Applications may be rejected due to incomplete documentation, inaccurate information, non-compliance with safety regulations, or pending dues/taxes related to the premises.",
      },
    ],
  },
};
