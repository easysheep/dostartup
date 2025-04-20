'use client';
import React from "react";
import Link from "next/link";


export default function Overview(){
    return(
        <div>
            <section className="px-6 py-12 md:px-16 lg:px-32 bg-white" id="overview">
            <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
                {/* LEFT SIDE - TEXT */}
                <div className="lg:w-1/2">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    GST Registration in India – Everything You Need to Know
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
        </div>
    )
}