// import React from 'react';

// const benefit = [
//   {
//     title: 'Regulatory Compliance',
//     img: 'https://corpbiz.io/img/adv_icon1.webp',
//     description:
//       'GST registration safeguards the interests of individuals and business entities operating in India. It ensures their legal and tax compliance, thus saving them from paying penalties for violations.',
//   },
//   {
//     title: 'Easy Compliance',
//     description:
//       'GST registration is not a complicated process. It helps business entities streamline their processes for filing tax returns and making online payments.',
//   },
//   {
//     title: 'Maintains Transparency',
//     description:
//       'GST registration allows business entities to maintain updated business records. This helps build a sense of reliability and facilitates operational transparency.',
//   },
//   {
//     title: 'Easy Compliance',
//     description:
//       'GST registration is not a complicated process. It helps business entities streamline their processes for filing tax returns and making online payments.',
//   },
//   {
//     title: 'Maintains Transparency',
//     description:
//       'GST registration allows business entities to maintain updated business records. This helps build a sense of reliability and facilitates operational transparency.',
//   },
//   {
//     title: 'Legal Protection',
//     description:
//       'GST registration safeguards the legal and regulatory standards of the business, thereby protecting their legal status.',
//   },
// ];

// export default function Benifits() {
//   return (
//     <div>
//       <section className="min-h-screen bg-[#fafafa] px-6 py-10 md:px-16 lg:px-24">
//         <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
//           Who Needs to Register?
//         </h2>
//         <div className="flex flex-col lg:flex-row gap-8">
//           {/* LEFT IMAGE - STICKY */}
//           <div className="w-full lg:w-1/2 hidden lg:flex justify-center items-start">
//             <div className="sticky top-10">
//               <img
//                 src="https://corpbiz.io/admin/style/images/userfiles/image/adv_img.png"
//                 alt="GST Illustration"
//                 width={400}
//                 height={400}
//                 className="object-contain"
//               />
//             </div>
//           </div>

//           {/* RIGHT SCROLLABLE STACK */}
//           <div className="w-full lg:w-1/2 overflow-y-auto pr-2 space-y-5 scrollbar-hide max-h-[calc(100vh-10rem)]">
//             {benefit.map((item, idx) => (
//               <div
//                 key={idx}
//                 className="border border-gray-300 rounded-lg p-5 flex items-start gap-4 bg-white hover:shadow-md transition"
//               >
//                 <img
//                   src={item.img || 'https://corpbiz.io/img/adv_icon1.webp'}
//                   alt="Icon"
//                   width={30}
//                   height={30}
//                   className="mt-1"
//                 />
//                 <div>
//                   <h3 className="font-semibold text-lg">{item.title}</h3>
//                   <p className="text-gray-600 text-sm mt-1">{item.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }






import React from 'react';

export interface BenefitItem {
  title: string;
  img?: string;
  description: string;
}
export interface BenefitsProps {
  items: BenefitItem[];
}

export default function Benefits({ items }: BenefitsProps) {
  return (
    <section className="min-h-screen bg-[#fafafa] px-6 py-10 md:px-16 lg:px-24">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Who Needs to Register?</h2>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-1/2 hidden lg:flex justify-center items-start">
          <div className="sticky top-10">
            <img src={items[0]?.img || ''} alt="Illustration" width={400} height={400} className="object-contain" />
          </div>
        </div>
        <div className="w-full lg:w-1/2 overflow-y-auto pr-2 space-y-5 scrollbar-hide max-h-[calc(100vh-10rem)]">
          {items.map((item, idx) => (
            <div key={idx} className="border border-gray-300 rounded-lg p-5 flex items-start gap-4 bg-white hover:shadow-md transition">
              {item.img && <img src={item.img} alt="Icon" width={30} height={30} className="mt-1" />}
              <div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}