// import React from 'react';
// import {
//   FaFacebookF,
//   FaTwitter,
//   FaInstagram,
//   FaLinkedinIn,
//   FaYoutube,
// } from 'react-icons/fa';

// // TypeScript interfaces for type safety
// interface FooterLink {
//   name: string;
//   href: string;
// }

// interface FooterSection {
//   title: string;
//   links: FooterLink[];
// }

// const footerSections: FooterSection[] = [
//   {
//     title: 'STARTUP',
//     links: [
//       { name: 'Fssai & Eating License', href: '/services/fssai-license' },
//       { name: 'Business Registration', href: '/services/business-registration' },
//       { name: 'Secretarial Compliances', href: '/services/secretarial-compliances' },
//       { name: 'IT Services', href: '/services/it-services' },
//       { name: 'Government Licenses', href: '/services/govt-licenses' },
//       { name: 'Government Registration', href: '/services/govt-registration' },
//       { name: 'NGO', href: '/services/ngo' },
//       { name: 'ISO', href: '/services/iso' },
//     ],
//   },
//   {
//     title: 'TAX',
//     links: [
//       { name: 'Tax Filing', href: '/services/tax-filing' },
//       { name: 'Service Related', href: '/services/service-related' },
//       { name: 'Property Related', href: '/services/property-related' },
//       { name: 'Legal Services', href: '/services/legal-services' },
//       { name: 'Accounting & Book Keeping', href: '/services/accounting' },
//       { name: 'Advisory Service', href: '/services/advisory' },
//       { name: 'Business Templates', href: '/services/business-templates' },
//     ],
//   },
//   {
//     title: 'REGULATORY',
//     links: [
//       { name: 'Legal Metrology', href: '/services/legal-metrology' },
//       { name: 'BIS', href: '/services/bis' },
//       { name: 'CDSCO', href: '/services/cdsco' },
//       { name: 'IRDA', href: '/services/irda' },
//       { name: 'SEBI', href: '/services/sebi' },
//       { name: 'RBI', href: '/services/rbi' },
//       { name: 'FEMA', href: '/services/fema' },
//       { name: 'Telecom', href: '/services/telecom' },
//     ],
//   },
//   {
//     title: 'ENVIRONMENTAL',
//     links: [
//       { name: 'Pollution NOC', href: '/services/pollution-noc' },
//       { name: 'E-Waste Management', href: '/services/e-waste' },
//       { name: 'Plastic Waste Management', href: '/services/plastic-waste' },
//       { name: 'Hazardous Waste Management', href: '/services/hazardous-waste' },
//       { name: 'Battery Waste Management', href: '/services/battery-waste' },
//       { name: 'Environmental Licensing', href: '/services/environmental-licensing' },
//       { name: 'Environmental Advisory', href: '/services/environmental-advisory' },
//       { name: 'EIA', href: '/services/eia' },
//       { name: 'Environmental Industry', href: '/services/environmental-industry' },
//     ],
//   },
// ];

// const socialLinks = [
//   {
//     Icon: FaFacebookF,
//     url: 'https://facebook.com/yourpage',
//     label: 'Facebook',
//   },
//   {
//     Icon: FaTwitter,
//     url: 'https://twitter.com/yourhandle',
//     label: 'Twitter',
//   },
//   {
//     Icon: FaInstagram,
//     url: 'https://instagram.com/yourprofile',
//     label: 'Instagram',
//   },
//   {
//     Icon: FaLinkedinIn,
//     url: 'https://linkedin.com/company/yourcompany',
//     label: 'LinkedIn',
//   },
//   {
//     Icon: FaYoutube,
//     url: 'https://youtube.com/yourchannel',
//     label: 'YouTube',
//   },
// ];

// const bottomLinks = [
//   { text: 'ABOUT US', href: '/about' },
//   { text: 'PAY NOW', href: '/pay' },
//   { text: 'LEARNING', href: '/learning' },
//   { text: 'PRIVACY POLICY', href: '/privacy' },
//   { text: 'REFUND POLICY', href: '/refund' },
//   { text: 'TERMS & CONDITIONS', href: '/terms' },
//   { text: 'SITEMAP', href: '/sitemap' },
//   { text: 'CONTACT US', href: '/contact' },
// ];

// const policyLinks = [
//   { text: 'Terms & Conditions', href: '/terms' },
//   { text: 'Privacy Policy', href: '/privacy' },
//   { text: 'Refund Policy', href: '/refund' },
//   { text: 'Confidentiality Policy', href: '/confidentiality' },
//   { text: 'Disclaimer', href: '/disclaimer' },
// ];

// const Footer: React.FC = () => {
//   return (
//     <footer className="bg-slate-800 text-white text-sm">
//       {/* Top Footer Links */}
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-8 max-w-7xl mx-auto">
//         {footerSections.map((section) => (
//           <div key={section.title}>
//             <h3 className="text-orange-500 font-bold mb-4">{section.title}</h3>
//             <ul className="space-y-2">
//               {section.links.map((link) => (
//                 <li key={link.name}>
//                   <a
//                     href={link.href}
//                     className="hover:text-orange-400 transition-colors duration-200"
//                   >
//                     {link.name}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>

//       {/* Social Media + Nav Links */}
//       <div className="bg-[#F5A623] flex flex-col md:flex-row justify-between items-center px-6 py-4 text-[#06144E] font-medium">
//         <div className="flex gap-4 mb-3 md:mb-0">
//           {socialLinks.map(({ Icon, url, label }) => (
//             <a
//               key={label}
//               href={url}
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label={label}
//               className="hover:text-blue-800 transition-colors duration-200 text-lg"
//             >
//               <Icon />
//             </a>
//           ))}
//         </div>
//         <nav className="flex flex-wrap gap-4 justify-center">
//           {bottomLinks.map((link) => (
//             <a
//               key={link.text}
//               href={link.href}
//               className="hover:text-blue-800 transition-colors duration-200"
//             >
//               {link.text}
//             </a>
//           ))}
//         </nav>
//       </div>

//       {/* Bottom disclaimer */}
//       <div className="text-center text-xs text-gray-300 px-4 pb-4 mt-5">
//         By continuing past this page, you agree to our{' '}
//         {policyLinks.map((policy, idx) => (
//           <span key={policy.text}>
//             <a
//               href={policy.href}
//               className="text-orange-500 hover:text-orange-400 underline"
//             >
//               {policy.text}
//             </a>
//             {idx < policyLinks.length - 1 && ', '}
//           </span>
//         ))}
//         .
//         <br />
//         © 2025 - DoStartup Private Limited. All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

// TypeScript interfaces for type safety
interface FooterLink {
  name: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const footerSections: FooterSection[] = [
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Our Team", href: "/team" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/contact" },
      { name: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Registrations",
    links: [
      { name: "Private Ltd", href: "/register/private-limited-company" },
      { name: "OPC", href: "/register/one-person-company" },
      { name: "LLP", href: "/register/llp" },
      { name: "MSME", href: "/register/msme" },
      { name: "GST", href: "/register/gst" },
    ],
  },
  {
    title: "Certifications",
    links: [
      { name: "ISO", href: "/register/iso" },
      { name: "FSSAI", href: "/register/fssai" },
      { name: "IEC", href: "/register/iec" },
      { name: "Trademark", href: "/register/trademark" },
      { name: "PSARA", href: "/register/psara" },
    ],
  },
  {
    title: "Startup",
    links: [
      { name: "FSSAI & Eating License", href: "/services/fssai-license" },
      {
        name: "Business Registration",
        href: "/services/business-registration",
      },
      {
        name: "Secretarial Compliances",
        href: "/services/secretarial-compliances",
      },
      { name: "IT Services", href: "/services/it-services" },
      { name: "Government Licenses", href: "/services/govt-licenses" },
      { name: "NGO", href: "/services/ngo" },
      {
        name: "Environmental Licensing",
        href: "/services/environmental-licensing",
      },
      { name: "ISO", href: "/services/iso" },
    ],
  },
];

const socialLinks = [
  {
    Icon: FaFacebookF,
    url: "https://facebook.com/yourpage",
    label: "Facebook",
  },
  { Icon: FaTwitter, url: "https://twitter.com/yourhandle", label: "Twitter" },
  {
    Icon: FaInstagram,
    url: "https://instagram.com/yourprofile",
    label: "Instagram",
  },
  {
    Icon: FaLinkedinIn,
    url: "https://linkedin.com/company/yourcompany",
    label: "LinkedIn",
  },
  { Icon: FaYoutube, url: "https://youtube.com/yourchannel", label: "YouTube" },
];

const bottomLinks = [
  { text: "ABOUT US", href: "/about" },
  { text: "PAY NOW", href: "/pay" },
  { text: "LEARNING", href: "/learning" },
  { text: "PRIVACY POLICY", href: "/privacy" },
  { text: "REFUND POLICY", href: "/refund" },
  { text: "TERMS & CONDITIONS", href: "/terms" },
  { text: "SITEMAP", href: "/sitemap" },
  { text: "CONTACT US", href: "/contact" },
];

const policyLinks = [
  { text: "Terms & Conditions", href: "/terms" },
  { text: "Privacy Policy", href: "/privacy" },
  { text: "Refund Policy", href: "/refund" },
  { text: "Confidentiality Policy", href: "/confidentiality" },
  { text: "Disclaimer", href: "/disclaimer" },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-8 pb-2">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12">
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h4 className="font-semibold text-lg border-b border-gray-700 pb-2 mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-emerald-400 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Icons */}
        <div className="mt-6 flex justify-center space-x-4 text-lg">
          {socialLinks.map(({ Icon, url, label }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-emerald-600 transition-colors duration-300"
              aria-label={label}
            >
              <Icon className="text-white" />
            </a>
          ))}
        </div>

        {/* Bottom Links Navigation */}
        <div className="mt-12">
          <nav className="flex flex-wrap gap-4 justify-center text-gray-400 text-sm">
            {bottomLinks.map((link) => (
              <a
                key={link.text}
                href={link.href}
                className="hover:text-emerald-400 transition-colors duration-200"
              >
                {link.text}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom disclaimer */}
        <div className="mt-6 text-center text-xs text-gray-500 px-4 pb-4">
          By continuing past this page, you agree to our{" "}
          {policyLinks.map((policy, idx) => (
            <span key={policy.text}>
              <a
                href={policy.href}
                className="text-emerald-400 hover:text-emerald-300 underline"
              >
                {policy.text}
              </a>
              {idx < policyLinks.length - 1 && ", "}
            </span>
          ))}
          .
          <br />© {new Date().getFullYear()} DoStartup Private Limited. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
