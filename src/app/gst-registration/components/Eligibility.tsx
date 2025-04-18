import { CheckCircle2 } from 'lucide-react';

const points = [
    {
      heading: "Eligibility Checklist for Filing GST Registration",
      items: [
        "Businesses having an aggregate annual turnover of more than INR 40 Lakhs must apply for GST registration. However, for any special category state, the threshold amount is INR 20 Lakhs.",
        "All service providers with an aggregate annual turnover of over INR 20 Lakhs must apply for GST registration. However, the limit for any special category states has been set at INR 10 Lakhs.",
        "The business or service provider dealing with goods and services is exempted from the purview of the GST and is not required to fulfill these thresholds.",
        "Businesses previously registered under the old tax structures, such as Excise, Service Tax, VAT, etc., are required to shift to the newer GST structure.",
        "Even if certain individuals and business entities are non-residents and do not reside in India but are involved in taxable dealings within India, they are required to obtain GST registration.",
        "Entities indulged in the business of offering information online, database access, or retrieval services from outside India to any individuals in India, except for the ones who have an existing GST, are also required to obtain a GST registration certificate."
      ]
    },
    {
        heading: "Other Entities Eligible to Apply for GST Registration",
        items: [
          "Any individual or business dealing with goods supplied across state boundaries.",
          "Businesses that are bound by the framework to pay tax under the reverse charge.",
          "Input service distributors and their agents or representatives.",
          "All operators and aggregators delivering goods and services through e-commerce platforms.",
          "Anyone who undertakes taxable supply (if applicable).",
          "Anyone who is identified as a representative and supplies goods and services on behalf of the main falls under this category.",
          "Any individuals or businesses, which deliver goods and services through e-commerce aggregators."
        ]
    },
    {
        heading: "Documents Required for GST Registration Online",
        items: [
          "Applicant’s PAN Card",
          "Applicant’s Aadhar Card",
          "Proof of business registration/ Company Registration Certificate of Incorporation",
          "Identity proof of Promoters/Director",
          "Address proof of Promoters/Director",
          "Photographs of Promoters/Director",
          "Address proof of the place of business",
          "Bank Account statement/Cancelled cheque",
          "Digital Signature Certificate (DSC)",
          "Lease/Rent Agreement",
          "Letter of Authorization/Board Resolution for Authorized Signatory"
        ]
    }
];

export default function Eligibility(){
    return(
        <div className="max-w-5xl mx-auto p-6 text-gray-800" id="eligibility">
            {points.map((section, index) => (
                <div key={index} className="mb-6">
                <h2 className="text-2xl font-bold mb-2">{section.heading}</h2>
                    <ul className="space-y-3">
                        {section.items.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                                <CheckCircle2 className="text-blue-500 mt-1" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                ))}
        </div>
    )
}