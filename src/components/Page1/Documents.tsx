import { div } from "framer-motion/client";
const steps = [
    {
      title: 'Apply on GST Portal',
      desc: 'The applicant must visit the GST portal and provide all the relevant details, such as the legal business name, PAN, email ID, mobile number, district, and state.',
    },
    {
      title: 'Authenticate OTP',
      desc: 'Once the details are submitted, the applicant receives an OTP on their registered mobile number and email ID.',
    },
    {
      title: 'TRN Generated',
      desc: 'Once the OTP is verified, the applicant must send the TRN number duly generated via email.',
    },
    {
      title: 'Submission for Verification',
      desc: 'Next, the applicant needs to submit the details related to the promoters/partners, place of business, business details, authorized signatory, state, Aadhar authentication and verification.',
    },
    {
      title: 'Receive ARN Confirmation',
      desc: (
        <>
          Once the applicant saves and continue filing with the form, the ARN confirmation number is generated via SMS.
          <br />
          <strong>
            Tired of the complex GST registration process? Contact consultants at Corpbiz and enjoy worry-free registration.
          </strong>
        </>
      ),
    },
];

const violations = [
    "In the case where a taxpayer fails to pay tax or underpays accidentally, a penalty equal to 10% of the pending tax is imposed.",
    "In case an individual or a business avoids paying taxes intentionally, they draw a penalty equivalent to 100% of the amount evaded as tax.",
    "It is advisable to make the tax payments within stipulated time limits. However, this violation draws a minimum penalty of INR 10,000.",
    "Interest is assessed on the outstanding tax amount in case GST liabilities are not paid.",
    "Suspension or cancellation of your GST registration certificate."
];

const consequences = [
    "Penalty of Rs. 10,000 or the amount of tax evaded or any short tax due, whichever is greater, as per Section 122 of the CGST Act.",
    "Penalty for not registering GST is Rs. 2 lakhs or Rs. 10,000, whichever is higher.",
    "Rs. 2 lakh is assessed if an individual fails to register for GST."
];


export default function Documents(){
    return(
        <div>
            <div className="max-w-6xl mx-auto py-12 px-4 md:px-8" id="documents">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">How to Apply for GST Registration Online?</h2>
                    <p className="text-center text-gray-600 mb-10">
                        The process of GST registration is now easy and simple. The step-by-step guide to apply for GST registration online are mentioned below-
                    </p>

                    <div className="flex flex-col md:flex-row items-start gap-10">
                        {/* Left Image */}
                        <div className="flex-1">
                        <img
                            src="https://corpbiz.io/img/steps_img.webp"
                            alt="Form Fill"
                            className="rounded-xl w-full object-cover shadow-lg"
                        />
                        </div>

                        {/* Right Steps */}
                        <div className="flex-1 space-y-6">
                            {steps.map((step, index) => (
                                <div key={index} className="border-b pb-4">
                                    <div className="flex gap-4">
                                        <div className="font-semibold text-blue-600 italic min-w-[40px]">
                                            {index + 1}.
                                        </div>
                                    <div>
                                    <h3 className="font-semibold italic text-gray-800">{step.title}</h3>
                                    <p className="text-gray-600 mt-1">{step.desc}</p>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
            
            
            <section className="bg-white py-12 px-4 md:px-8">
              <div className="max-w-6xl mx-auto text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">
                  Consequences for Non-Compliance with GST Registration
                </h2>
                <p className="text-gray-600">
                  It is mandatory for certain businesses to obtain GST registration. Violating the regulatory and legal GST norms attract the following penalties:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Left Card */}
              <div className="bg-blue-100 p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Penalty For Violation In Case Of GST Registration
                </h3>
                <ul className="space-y-3">
                  {violations.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">✔️</span>
                      <span className="text-gray-800">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Card */}
              <div className="bg-blue-800 text-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold mb-4">
                  Consequences For Not Registering GST
                </h3>
                <ul className="space-y-3">
                  {consequences.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-orange-400 mt-1">✔️</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              </div>
            </section>
        </div>
    )
}