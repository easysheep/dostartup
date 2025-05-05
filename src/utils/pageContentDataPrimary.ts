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
  "fpo-certification": {
    title: "FPO Certification in India – Everything You Need to Know",
    description:
      "FPO Certification (Fruit Products Order) is mandatory for businesses involved in processed fruit and vegetable products. Governed by MoFPI and regulated by FSSAI, it ensures quality, safety, and hygiene standards are met.",
    overview: [
      {
        heading: "FPO Certification – An Overview",
        content:
          "Introduced in 1955, the Fruit Products Order (FPO) Certification is required for all businesses producing processed fruit- and vegetable-based products. It validates compliance with quality, safety, and hygiene norms set by MoFPI and FSSAI.",
      },
    ],
    typesOfCertification: [
      {
        heading: "Fruit-Based Products Certification",
        content:
          "Mandatory for jams, jellies, squashes, preserves, and fruit concentrates to ensure food safety and quality.",
      },
      {
        heading: "Vegetable-Based Products Certification",
        content:
          "Required for pickles, sauces, canned vegetables, and purees, confirming hygiene and process controls.",
      },
      {
        heading: "Beverages Certification",
        content:
          "Covers fruit juices, syrups, and drinks, guaranteeing defined safety and quality benchmarks.",
      },
      {
        heading: "Canned Fruit Products Certification",
        content:
          "Applies to canned fruits, pulps, and vegetables to demonstrate hygienic processing and preservation techniques.",
      },
      {
        heading: "Frozen Fruit Products Certification",
        content:
          "Ensures freezing and storage processes for fruits and vegetables comply with safety regulations.",
      },
      {
        heading: "Dehydrated Products Certification",
        content:
          "For dried fruits, vegetables, and powders, verifying manufacturing under controlled, hygienic conditions.",
      },
      {
        heading: "Edible Oils and Fats Certification",
        content:
          "Required for refined oils, ghee, and butter to confirm food-safe practices and nutritional standards.",
      },
      {
        heading: "Honey Certification",
        content:
          "Verifies purity and quality of honey and honey-based products under FSSAI norms.",
      },
      {
        heading: "Dairy Products Certification",
        content:
          "Ensures hygienic processing of milk-derived goods like butter, cheese, and cream.",
      },
      {
        heading: "Miscellaneous Processed Food Certification",
        content:
          "Covers biscuits, snacks, and ready-to-eat items for compliance with food safety laws.",
      },
    ],
    benefits: [
      {
        heading: "Key Benefits of Obtaining FPO Certification",
        content:
          "- Guarantees product quality through stringent safety standards\n- Ensures regulatory compliance with MoFPI and FSSAI\n- Builds consumer trust and loyalty with the recognized FPO mark\n- Enables market expansion domestically and internationally\n- Strengthens product labeling and branding\n- Supports export opportunities without regulatory roadblocks\n- Simplifies application via an online process\n- Enhances overall brand value and competitiveness\n- Promotes hygienic and responsible manufacturing\n- Drives sustainable, long-term business growth",
      },
    ],
    fruitProductsRequireCertification: [
      {
        heading: "Fruit-Based Products",
        content:
          "Jams, jellies, marmalades, concentrates, squashes, preserves, chutneys, and pulps.",
      },
      {
        heading: "Vegetable-Based Products",
        content: "Pickles, sauces, canned vegetables, and purees.",
      },
      {
        heading: "Beverages",
        content: "Fruit juices, nectars, syrups, and fruit-flavored drinks.",
      },
      {
        heading: "Canned Fruit Products",
        content: "Canned fruits, vegetables, pulps, and purees.",
      },
      {
        heading: "Frozen Fruit Products",
        content: "Frozen fruits, vegetables, purees, and concentrates.",
      },
      {
        heading: "Dehydrated Products",
        content: "Dried fruits, vegetables, and powders.",
      },
      {
        heading: "Edible Oils and Fats",
        content: "Refined oils, ghee, and butter.",
      },
      {
        heading: "Dairy-Based Products",
        content: "Milk-based beverages, paneer, and dairy alternatives.",
      },
      {
        heading: "Honey and Natural Sweeteners",
        content: "Raw honey and infused honey blends.",
      },
      {
        heading: "Miscellaneous Processed Foods",
        content: "Biscuits, bakery items, and ready-to-eat snacks.",
      },
    ],
    eligibilityCriteria: [
      {
        heading: "Eligibility Criteria for FPO Certification",
        content:
          "- Registered business entity (proprietorship, partnership, company, or cooperative)\n- Valid FSSAI food license\n- Operational manufacturing facility meeting hygiene standards\n- Products fall within approved FPO categories\n- Established quality control and testing systems\n- Infrastructure compliant with FPO guidelines\n- Employee health certifications\n- Proper record-keeping of sourcing, production, and audits\n- (If applicable) Trademark registration\n- Accurate and complete application submission",
      },
    ],
    documentsRequired: [
      {
        heading: "Documents Required for FPO Mark Certification",
        content:
          "- Duly filled application form\n- Business registration certificate\n- PAN card and GST certificate\n- Valid FSSAI food license\n- Food Safety Management Plan (FSMP)\n- Facility layout plans and blueprints\n- List of equipment and machinery\n- List of raw materials and ingredients\n- Product details, specifications, and label samples\n- Quality control and laboratory test reports\n- Quality assurance plan\n- Ownership or lease agreements\n- Employee health certificates\n- (If applicable) Trademark registration proof",
      },
    ],
    applicationProcedure: [
      {
        heading: "How to Apply for FPO Mark Certification",
        content:
          "1. Verify eligibility (registered entity, FSSAI license, compliant facility)\n2. Gather all mandatory documents\n3. Register and log in on the FSSAI portal\n4. Complete the online application form accurately\n5. Upload supporting documents in prescribed formats\n6. Pay the application fee and retain the receipt\n7. Facilitate facility inspection by FSSAI officials\n8. Submit product samples for laboratory testing\n9. Await review of documents, inspection, and test reports\n10. Receive FPO certification upon approval\n11. Monitor certificate validity and apply for renewal before expiry",
      },
    ],
    registrationTimeline: [
      {
        heading: "Timeline for Obtaining FPO Certification",
        description:
          "The end-to-end process typically takes 30 to 45 days, covering documentation review, facility inspection, product testing, and final approval.",
        totalTime: "30–45 days",
      },
    ],
    whyUs: [
      {
        heading: "Why Choose Dostartup for FPO Certification?",
        description: [
          "Comprehensive eligibility assessment to ensure readiness.",
          "Expert support with documentation and online filing.",
          "Pre-audit facility evaluation to address gaps in advance.",
          "Coordination of sample testing with FSSAI-approved labs.",
          "Regulatory compliance advisory throughout the process.",
          "Employee training for hygiene and inspection preparedness.",
          "On-ground support during official inspections.",
          "Proactive certificate renewal management.",
          "Significant time and cost savings with our proven methodology.",
        ],
        points: [
          "10+ years of experience in food industry certifications",
          "99% first-time approval rate",
          "Dedicated project manager for seamless coordination",
          "Transparent pricing and no hidden fees",
          "24/7 customer support",
        ],
        footerText: "",
      },
    ],
    faq: [
      {
        question: "What is FPO Certification?",
        answer:
          "FPO Certification is a quality assurance mark issued by MoFPI and regulated by FSSAI, certifying that processed fruit and vegetable products meet mandatory safety, hygiene, and quality standards.",
      },
      {
        question: "How long does it take to obtain FPO Certification?",
        answer:
          "Typically, the process takes 30 to 45 days, depending on document accuracy, inspection schedules, and lab test turnaround times.",
      },
      {
        question: "Is an FSSAI license mandatory for FPO Certification?",
        answer:
          "Yes, a valid FSSAI food license is a prerequisite for applying for FPO Certification.",
      },
      {
        question: "Can I export products with FPO Certification?",
        answer:
          "Yes, FPO Certification is recognized internationally and facilitates export by demonstrating compliance with global food safety norms.",
      },
      {
        question: "How do I renew my FPO Certification?",
        answer:
          "Submit a renewal application through the FSSAI portal before the certificate expiry date, along with updated documents and applicable fees.",
      },
    ],
  },
  "fssai-product-approval": {
    title: "FSSAI Product Approval – Everything You Need to Know",
    description:
      "FSSAI Product Approval is the official process by which the Food Safety and Standards Authority of India grants permission for food products or ingredients that fall outside existing standards. Managed via the online Food Product Approval System (FPAS), it ensures safety and quality compliance before market launch.",
    overview: [
      {
        heading: "FSSAI Product Approval – An Overview",
        content:
          "FSSAI Product Approval is a crucial process through which FSSAI grants approval for food products or ingredients that do not comply with prescribed standards under the Food Safety & Standards Act. It is managed by the Central Government to ensure that new or proprietary food items meet safety and quality benchmarks before entering the Indian market.",
      },
      {
        heading: "Why Approval Is Mandatory",
        content:
          "Before launching any non-standard food product—ingredients, formulations, or novel foods—manufacturers must obtain FSSAI approval. This step guarantees adherence to safety, hygiene, and nutritional regulations, protecting consumer health and reinforcing brand trust.",
      },
    ],
    onlineSystem: [
      {
        heading: "FSSAI Online Product Approval System (FPAS)",
        content:
          "The FPAS portal replaces the earlier manual submission process. FBOs can now submit, pay fees, and track their product approval applications online, benefiting from enhanced transparency, speed, and accessibility.",
      },
    ],
    whenRequired: [
      {
        heading: "When Do You Need FSSAI Product Approval?",
        content:
          "- For ingredients or products not covered by existing FSSAI standards\n- Onboarding new or proprietary food formulations\n- Launching items never previously produced or tested globally\n- Seeking approval for substances that have never undergone a safety assessment",
      },
    ],
    benefits: [
      {
        heading: "Key Benefits of Obtaining FSSAI Product Approval",
        content:
          "- Streamlined, standardized assessment procedures\n- Reduced regulatory delays and minimal risk of compliance issues\n- Enhanced consumer trust through recognized safety endorsements\n- Confidence of domestic and international buyers via rigorous quality testing\n- Greater industry engagement and market reach",
      },
    ],
    informationRequired: [
      {
        heading: "Information Required for Application",
        content:
          "- Business name, address, and FBO license details\n- Brand and common product name\n- Manufacturing method and facility address\n- Complete ingredient list and pack size\n- Shelf life, serving details, and nutritional/health claims\n- Product category, country of origin, and market status\n- Contact email and phone number",
      },
    ],
    documentsRequired: [
      {
        heading: "Supporting Documents",
        content:
          "- Detailed manufacturing process description\n- Product label design (prototype or final)\n- Real-time and accelerated stability data sheets\n- NABL-accredited laboratory analysis certificates\n- Form-9, undertaking, and end-use declaration\n- Any additional test reports or safety assessments",
      },
    ],
    registrationProcedure: [
      {
        heading: "Procedure for Obtaining FSSAI Product Approval",
        content:
          "1. Incorporate a registered entity (Pvt. Ltd. or LLP) for smoother license transfer.\n2. Secure a valid FBO license and attach it to your application.\n3. Obtain required lab test reports from NABL-accredited facilities.\n4. Prepare compliant product label designs.\n5. Submit the complete application online via the FPAS portal.\n6. Facilitate facility inspection and sample testing as scheduled.\n7. Monitor application status and respond to any queries.\n8. Receive official FSSAI Product Approval to legally market your product.",
      },
    ],
    faq: [
      {
        question: "What is FSSAI Product Approval?",
        answer:
          "FSSAI Product Approval is the certification process for food items or ingredients not covered under existing standards, ensuring their safety and compliance before market introduction.",
      },
      {
        question: "Who can apply for product approval?",
        answer:
          "Any Food Business Operator (manufacturer, importer, or marketer) with a valid FBO license can apply via the FPAS portal.",
      },
      {
        question: "How long does approval take?",
        answer:
          "Typical turnaround is 30–45 days, subject to complete documentation, facility inspection, and laboratory testing.",
      },
      {
        question: "Is FBO license mandatory?",
        answer:
          "Yes. A valid FBO (registration or license) is required to submit an FSSAI product approval application.",
      },
      {
        question: "Can I track my application online?",
        answer:
          "Yes. The FPAS portal allows applicants to submit, pay fees, and track approval status in real time.",
      },
    ],
  },
  "food-recycling-license": {
    title: "Food Recycling License in India – Everything You Need to Know",
    description:
      "A Food Recycling License (Consent to Establish & Operate) from the State Pollution Control Board is mandatory for any entity that processes or recycles food waste via composting, anaerobic digestion, or industrial treatment. It ensures compliance with environmental regulations and promotes sustainable waste management.",
    overview: [
      {
        heading: "Overview of Food Recycling License",
        content:
          "India generates over 817,000 tonnes of food waste annually (2021), yet recycles only 19% of it. With nearly 40% of produced food wasted and an economic loss of ₹92,000 crores each year, a Food Recycling License helps organizations implement sustainable waste‐management solutions while meeting legal requirements.",
      },
      {
        heading: "Food Waste Management Hierarchy",
        content:
          "Effective management follows a four-tier hierarchy: prevention and reduction at source; redistribution of surplus edible food; recycling and treatment (e.g., anaerobic digestion, industrial composting); and final composting into nutrient-rich soil amendments.",
      },
    ],
    benefits: [
      {
        heading: "Key Benefits of Composting Food Waste",
        content:
          "- Prevents soil erosion by improving soil structure\n- Promotes healthier plant growth through enhanced nutrient availability\n- Conserves water via increased soil moisture retention\n- Reduces landfill waste and associated disposal costs\n- Lowers greenhouse gas emissions and agricultural odors",
      },
    ],
    documentsRequired: [
      {
        heading: "Documents Required for Food Recycling License",
        content:
          "- Covering letter describing recycling activities\n- Proof of site ownership or lease deed\n- Company registration (MOA or partnership deed)\n- Detailed site layout plan showing equipment, ETP, storage areas\n- Environmental impact diagram (2 km radius)\n- Process flowchart of recycling/manufacturing\n- CA certificate for pollution control provisions\n- KYC of authorized signatory (PAN/Aadhaar)\n- Recent utility bills (electricity/water)\n- GST registration certificate\n- Factory license under the Factories Act",
      },
    ],
    registrationProcedure: [
      {
        heading: "Procedure for Obtaining Food Recycling License",
        content:
          "1. Submit the prescribed application form to the relevant State Pollution Control Board (SPCB).\n2. Attach all required documents and detailed process descriptions.\n3. SPCB conducts a site inspection to verify compliance.\n4. Authority reviews inspection report and documentation.\n5. On approval, SPCB issues Consent to Establish (CTE) and Consent to Operate (CTO).",
      },
    ],
    whyUs: [
      {
        heading: "How Dostartup Helps You Secure Your License",
        description: [
          "Tailored end-to-end support for all application steps.",
          "Expert guidance on document collection and drafting.",
          "Coordination with SPCB officials for inspections.",
          "Timely follow-up to ensure swift approval.",
        ],
        points: [
          "Dedicated project manager",
          "100% application completeness guarantee",
          "Transparent pricing and progress tracking",
          "Post-approval compliance support",
        ],
        footerText:
          "Partner with Dostartup to turn your food waste challenge into a sustainable opportunity.",
      },
    ],
    faq: [
      {
        question: "What is a Food Recycling License?",
        answer:
          "It is the combined Consent to Establish (CTE) and Consent to Operate (CTO) issued by the State Pollution Control Board, allowing you to legally set up and run a food waste recycling facility.",
      },
      {
        question: "Who issues the Food Recycling License?",
        answer:
          "The relevant State Pollution Control Board (SPCB) or Pollution Control Committee (PCC) in Union Territories.",
      },
      {
        question: "How long does the licensing process take?",
        answer:
          "Typically 45–60 days, depending on state-specific procedures and application completeness.",
      },
      {
        question: "Is a Food Recycling License mandatory?",
        answer:
          "Yes. Any entity processing or recycling food waste in India must obtain both CTE and CTO from the SPCB.",
      },
      {
        question: "Which legislation governs food waste management?",
        answer:
          "Solid Waste Management Rules, 2016 under the Environment Protection Act, 1986, along with state-specific pollution control regulations.",
      },
    ],
  },
};
