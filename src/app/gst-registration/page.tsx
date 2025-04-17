'use client';
import React from "react";

import { useState } from 'react';
import clsx from 'clsx';
import Link from "next/link";
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

const tabs = [
    { name: 'Overview', link: '#overview' },
    { name: 'Advantages', link: '#benefits' },
    { name: 'Eligibility Criteria', link: '#eligibility' },
    { name: 'Documents Required', link: '#documents' },
    { name: 'Process', link: '#process' },
    { name: 'Features', link: '#features' },
    { name: 'Types', link: '#types' },
    { name: 'FAQs', link: '#faqs' },
  ];

const benefits = [
    {
      title: 'Regulatory Compliance',
      img: 'https://corpbiz.io/img/adv_icon1.webp',
      description:
        'GST registration safeguards the interests of individuals and business entities operating in India. It ensures their legal and tax compliance, thus saving them from paying penalties for violations.',
    },
    {
      title: 'Easy Compliance',
      description:
        'GST registration is not a complicated process. It helps business entities streamline their processes for filing tax returns and making online payments.',
    },
    {
      title: 'Maintains Transparency',
      description:
        'GST registration allows business entities to maintain updated business records. This helps build a sense of reliability and facilitates operational transparency.',
    },
    {
        title: 'Easy Compliance',
        description:
          'GST registration is not a complicated process. It helps business entities streamline their processes for filing tax returns and making online payments.',
    },
    {
        title: 'Maintains Transparency',
        description:
          'GST registration allows business entities to maintain updated business records. This helps build a sense of reliability and facilitates operational transparency.',
    },
    {
      title: 'Legal Protection',
      description:
        'GST registration safeguards the legal and regulatory standards of the business, thereby protecting their legal status.',
    },
  ];

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

export default function gstRegisteration(){
    
    const [activeTab, setActiveTab] = useState('Overview');

    return (
        <div className="min-h-screen bg-[#fff7f2] flex flex-col items-center p-4 px-10">

          {/* page one */}
          <div className="w-full flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden mt-10">
            {/* Left Content */}
            <div className="w-full md:w-1/2 p-6 space-y-4">
              <h1 className="text-3xl font-bold text-[#009966]">
                GST Registration <span className="text-black">in India</span>
              </h1>
              <p className="text-lg font-semibold">Application Filing starting at <span className="font-bold">499</span> T&C*</p>
              <p className="text-gray-700">
                Are you facing challenges during GST registration? Let Corpbiz experts ease the process of GST registration, application status tracking, online document submission, and more. Saved 20 Lakh+ Hours of Indian Entrepreneurs.
              </p>
              <h2 className="text-[#009966] font-semibold">What’s Included?</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Document Preparation</li>
                <li>Get ARN in 2-3 Days</li>
                <li>GST Certificate</li>
                <li>Free Consultation with GST Expert</li>
                <li>Guidance on HSN/SAC Code</li>
                <li>1 Month Return Filing Free</li>
              </ul>
              <p className="text-md text-gray-800">
                ⭐ 50,000+ Founders Trust Us & GST Registration Assured in 3-5 Business Days
              </p>
    
              <div className="flex items-center space-x-4 mt-4">
                <button className="bg-blue-700 text-white px-6 py-2 rounded-md">Schedule a call</button>
                <div className="flex items-center space-x-2">
                  <img src="https://corpbiz.io/img/google.webp" alt="Google Reviews" className="h-12" />
                </div>
                <div>
                  <img src="https://cdn.trustpilot.net/brand-assets/4.6.0/logo-white.svg" alt="Trustpilot" className="h-10 bg-green-500 rounded" />
                </div>
              </div>
    
              <div className="flex justify-between text-center mt-6">
                <div>
                  <p className="font-bold text-xl">42868+</p>
                  <p className="text-sm text-gray-600">Happy Clients</p>
                </div>
                <div>
                  <p className="font-bold text-xl">3500+</p>
                  <p className="text-sm text-gray-600">Expert Advisors</p>
                </div>
                <div>
                  <p className="font-bold text-xl">50+</p>
                  <p className="text-sm text-gray-600">Branch Offices</p>
                </div>
              </div>
            </div>
    
            {/* Right Form */}
            <div className="w-full md:w-1/2 bg-[#f7f9fc] p-6 relative">
              <div className="absolute top-0 left-0 bg-blue-700 text-white text-xs px-3 py-1 rounded-br-lg font-semibold">
                Upto 50% Affordable Price<br />Money Back Guarantee
              </div>
              <h2 className="text-xl font-bold text-center mb-4">Free Consultation by Expert</h2>
              <form className="space-y-4">
                <input type="text" placeholder="Your Name" className="w-full p-2 border border-gray-300 rounded" />
                <input type="email" placeholder="Email Address" className="w-full p-2 border border-gray-300 rounded" />
                <div className="flex border border-gray-300 rounded overflow-hidden">
                  <span className="bg-gray-100 p-2">+91</span>
                  <input type="tel" placeholder="Mobile Number" className="w-full p-2" />
                </div>
                <select className="w-full p-2 border border-gray-300 rounded">
                  <option>Select State</option>
                  <option>Delhi</option>
                  <option>Maharashtra</option>
                  <option>Uttar Pradesh</option>
                  {/* Add more states */}
                </select>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" checked readOnly className="accent-green-600" />
                  <label>Get Update on <span className="text-green-600">Whatsapp</span></label>
                </div>
                <button type="submit" className="w-full bg-[#009966] text-white py-2 font-semibold rounded">
                  GET STARTED NOW
                </button>
              </form>
            </div>
          </div>

          {/* page two */}

          {/* navbar */}
          <div className="bg-[#33b388] shadow-md rounded-md mt-2 w-full">
                <div className="flex justify-start md:justify-center space-x-4 px-4 py-2">
                    {tabs.map((tab) => (
                        <div key={tab.name} className="relative">
                        <Link
                            href={tab.link}
                            onClick={() => setActiveTab(tab.name)}
                            className={`px-2 py-1 font-medium whitespace-nowrap text-sm md:text-base transition-all duration-300 ${
                            activeTab === tab.name
                                ? 'text-[#009966] bg-white rounded-md shadow'
                                : 'text-black'
                            }`}
                        >
                            {tab.name}
                        </Link>
                        {activeTab === tab.name && (
                        <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white" />
                    )}
                </div>
            ))}
          </div>
          </div>

          {/* GST Registration- An Overview */}
          <section className="px-6 py-12 md:px-16 lg:px-32 bg-white" id="overview">
            <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
                {/* LEFT SIDE - TEXT */}
                <div className="lg:w-1/2">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    GST Registration – An Overview
                    </h2>
                    <p className="text-gray-700 mb-4">
                        If you are looking for GST registration to empower your business legally, you are at the right place.
                    </p>
                    <p className="text-gray-700 mb-4">
                        The Goods and Services Tax, popularly known as GST, was introduced on July 1, 2017, as a replacement for various central and state-level taxes, including Service Tax, Excise Duty, CST, Entertainment Tax, Luxury Tax, and VAT. GST introduction has since ensured the streamlining of the tax process in India. GST registration is mandatory for traders, service providers, manufacturers, and freelancers.
                    </p>
                    <p className="text-gray-700 mb-4">
                        GST has united various indirect taxes, including VAT, service tax, and excise duty, into a unified single tax system. The consolidation of multiple taxes restructured as GST has streamlined compliance, lowered tax evasions, eliminated the domino effect of taxes, promoted the ease of doing business, and boosted the efficacy of the country’s economy.
                    </p>
                    <p className="text-gray-700 mb-6">
                        Talk to consultants at Corpbiz and enjoy easy and timely GST registration in India.
                    </p>

                    <button
                    className="inline-block px-6 py-3 bg-[#009966] hover:bg-[#00b377] text-white font-semibold rounded shadow-md transition">
                     Get started with DoStartup
                    
                    </button>
                </div>

                {/* RIGHT SIDE - IMAGE */}
                <div className="lg:w-1/2 flex justify-center">
                <img
                    src="https://corpbiz.io/img/img1.webp"
                    alt="GST Illustration"
                    width={450}
                    height={300}
                    className="object-contain"
                />
                </div>
            </div>
          </section>
          <section className="px-6 py-12 md:px-16 lg:px-32 bg-white bg-[#66cc99]">
            <div className="flex flex-col lg:flex-row items-center gap-10 rounded-lg overflow-hidden shadow-md">
                {/* LEFT IMAGE SECTION */}
                <div className="relative lg:w-1/2 bg-[#FFF6EF] flex justify-center items-center">
                {/* ICON overlay */}
                <div className="absolute left-12 z-20">
                    <img
                        src="https://corpbiz.io/admin/style/images/userfiles/image/FBOs.png"
                        alt="Briefcase Icon"
                        width={400}
                        height={400}
                    />
                </div>
            </div>

            {/* RIGHT TEXT SECTION */}
            <div className="lg:w-1/2 bg-gradient-to-r from-[#66cc99] to-[#33b388] p-6 md:p-10">
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                    What is a GST Registration Certificate?
                </h2>
                <p className="text-gray-700 mb-4">
                    GST registration certificate is an official document issued by the Government of India to business entities registered under the Goods and Services Tax (GST) framework. GST certificate stands as a testimony to the entity’s legal standing and legitimate registration under GST. However, the certificate further displays critical information, including the GST identification number, business name, and the official address of the business.
                </p>
                <p className="text-gray-700">
                    The GST Certificate is important for accomplishing tax obligations and crucial in cementing an entity's credibility and operational legality. Furthermore, the GST registration verification is of utmost importance for any business. It is essential for{' '}
                    <Link href="#" className="text-blue-600 hover:underline">LLPs</Link>,{' '}
                    <Link href="#" className="text-blue-600 hover:underline">OPCs</Link>,{' '}
                    <Link href="#" className="text-blue-600 hover:underline">private limited companies</Link> and{' '}
                    <Link href="#" className="text-blue-600 hover:underline">public limited companies</Link> as well.
                </p>
            </div>
            </div>
          </section>

          {/* BENEFITS */}
          <section className="h-screen overflow-hidden bg-[#fafafa] px-6 py-10 md:px-16 lg:px-24" id="benefits">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
                What are the Benefits of GST Registration?
            </h2>
            <div className="flex h-[calc(100vh-6rem)] gap-8">
                {/* LEFT IMAGE - STICKY */}
                <div className="w-1/2 hidden lg:flex justify-center items-start">
                    <div className="sticky top-10">
                        <img
                            src="https://corpbiz.io/admin/style/images/userfiles/image/adv_img.png"
                            alt="GST Illustration"
                            width={400}
                            height={400}
                            className="object-contain"
                        />
                    </div>
                </div>

                {/* RIGHT SCROLLABLE STACK */}
                <div className="w-full lg:w-1/2 overflow-y-auto pr-2 space-y-5 scrollbar-hide">
                {benefits.map((item, idx) => (
                    <div
                        key={idx}
                        className="border border-gray-300 rounded-lg p-5 flex items-start gap-4 bg-white hover:shadow-md transition"
                    >
                    <img
                        src="https://corpbiz.io/img/adv_icon1.webp"
                        alt="Shield Icon"
                        width={30}
                        height={30}
                        className="mt-1"
                    />
                    <div>
                        <h3 className="font-semibold text-lg">{item.title}</h3>
                        <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                    </div>
                </div>
                ))}
            </div>
            </div>
          </section>

            {/* ELIGIBILITY CRITERIA */}            
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

            {/* DOCUMENTS REQUIRED */}
            <div className="max-w-6xl mx-auto py-12 px-4 md:px-8" id="documents">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">How to Apply for GST Registration Online?</h2>
                    <p className="text-center text-gray-600 mb-10">
                        The process of GST registration is now easy and simple. The step-by-step guide to apply for GST registration online are mentioned below-
                    </p>

                    <div className="flex flex-col md:flex-row items-start gap-10">
                        {/* Left Image */}
                        <div className="flex-1">
                        <img
                            src="https://corpbiz.io/img/steps_img.webp" // Replace with your image path
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

            

        </div>
    );
}