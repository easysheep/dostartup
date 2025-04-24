'use client';
import React, { useState } from "react";
import clsx from 'clsx';
import Link from "next/link";

import Types from "../../components/Page1/Types";
import Faq from "../../components/Page1/Faq";
import Features from "../../components/Page1/Features";
import Documents from "../../components/Page1/Documents";
import Eligibility from "../../components/Page1/Eligibility";
import Overview from "../../components/Page1/Overview";
import Benifits from "../../components/Page1/Benifits";

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

const services = [
  {
    title: "Simplified Registration",
    desc: "We at Corpbiz have successfully processed and simplified around 5000+ GST registration applications in India.",
  },
  {
    title: "High Success Rate",
    desc: "We at Corpbiz guarantee a 99% business success rate while obtaining a GST registration certificate in India.",
  },
  {
    title: "Simplify Documentation",
    desc: "We at Corpbiz assist in simplifying the documentation required to obtain a GST registration certificate in India.",
  },
  {
    title: "Legal Advice",
    desc: "Corpbiz provides legal advice and regular updates to simplify the legal necessities for securing GST registration in India.",
  },
  {
    title: "End-to-End Solutions",
    desc: "We at Corpbiz provide end-to-end solutions to address queries related to GST registration in India.",
  },
  {
    title: "Affordable Pricing",
    desc: "Corpbiz offers 100% affordable and transparent pricing for GST registration services in India.",
  },
  {
    title: "Reduces Compliance Buden",
    desc: "We at Corpbiz ensure that the compliance burden is reduced by up to 30%.",
  },
  {
    title: "10+ Years of Extensive Experience",
    desc: "We at Corpbiz possess an experienced team with extensive knowledge and an in-depth understanding.",
  },
  {
    title: "24/7 Customer Support",
    desc: "Corpbiz offers 24/7 customer support assistance to address compliance-related concerns or queries.",
  },
];

export default function GstRegisteration() {
  const [activeTab, setActiveTab] = useState('Overview');

  return (
    <div className="min-h-screen bg-[#fff7f2] flex flex-col items-center p-4 px-10">

      {/* Page One */}
      <div className="w-full flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden mt-10">
        {/* Left Content */}
        <div className="w-full md:w-1/2 p-6 space-y-4">
          <h1 className="text-3xl font-bold text-[#009966]">
            GST Registration <span className="text-black">Made Simple in India</span>
          </h1>
          <p className="text-lg font-semibold">
            Start Your Application from Just <span className="font-bold">₹499</span> T&C*
          </p>
          <p className="text-gray-700">
            Starting a business or struggling with GST registration? Let our experienced team take the stress off your plate. We handle the entire process — from documentation to submission — ensuring a smooth and hassle-free GST registration experience. Trusted by thousands of business owners and entrepreneurs across India.
          </p>
          <h2 className="text-[#009966] font-semibold">Here’s What You Get:</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Complete Documentation Support</li>
            <li>ARN Generation in Just 2–3 Working Days</li>
            <li>GST Registration Certificate Issued</li>
            <li>Expert Guidance – One-on-One Consultation with GST Professionals</li>
            <li>Assistance with HSN/SAC Code Identification</li>
            <li>Free GST Return Filing for 1 Month</li>
          </ul>
          <p className="text-md text-gray-800">
            ⭐ Trusted by 50,000+ Founders | Registration in 3–5 Business Days
          </p>

          <div className="flex items-center space-x-4 mt-4">
            <button className="bg-blue-700 text-white px-6 py-2 rounded-md">Ready to Get Started?</button>
            <img src="https://corpbiz.io/img/google.webp" alt="Google Reviews" className="h-12" />
            <img src="https://cdn.trustpilot.net/brand-assets/4.6.0/logo-white.svg" alt="Trustpilot" className="h-10 bg-green-500 rounded" />
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
          <h2 className="text-xl font-bold text-center mb-4">Schedule a Call or Chat with Us on WhatsApp</h2>
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

      {/* Tabs Navbar */}
      <div className="bg-[#33b388] sticky top-16 z-100 shadow-md rounded-md mt-2 w-full">
        <div className="flex justify-start md:justify-center space-x-4 px-4 py-2">
          {tabs.map((tab) => (
            <div key={tab.name} className="relative">
              <Link
                href={tab.link}
                onClick={() => setActiveTab(tab.name)}
                className={`px-2 py-1 font-medium whitespace-nowrap text-sm md:text-base transition-all duration-300 ${activeTab === tab.name
                  ? 'text-[#33B388] bg-white rounded-md shadow'
                  : 'text-white'
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

      {/* Sections */}
      <div id="overview"><Overview /></div>
      <div id="benefits"><Benifits /></div>
      <div id="eligibility"><Eligibility /></div>
      <div id="documents"><Documents /></div>
      <div id="features"><Features /></div>
      <div id="types"><Types /></div>
      <div id="faqs"><Faq /></div>
    </div>
  );
}
