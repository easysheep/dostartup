"use client";

import React, { useState, useRef, useEffect } from "react";
import Logo from "@/assets/Logo.png";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMainItem, setOpenMainItem] = useState<string | null>(null);
  const [openSubItem, setOpenSubItem] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      setOpenMainItem(null);
      setOpenSubItem(null);
    }
  };

  const toggleMainItem = (item: string) => {
    setOpenMainItem(openMainItem === item ? null : item);
    setOpenSubItem(null);
  };

  const toggleSubItem = (item: string) => {
    setOpenSubItem(openSubItem === item ? null : item);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
        setOpenMainItem(null);
        setOpenSubItem(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  // Menu items data structure
  const menuItems = [
    {
      title: "Startup",
      subItems: [
        {
          title: "FSSAI & Eating License",
          links: [
            { name: "FSSAI License", href: "/" },
            { name: "FSSAI License Renewal", href: "/startup/fssai-renewal" },
            { name: "FSSAI State License", href: "fssai-state-license" },
            { name: "Eating House License", href: "/startup/eating-house" },
            { name: "Central FSSAI License", href: "/startup/fssai-central" },
            {
              name: "FSSAI Annual Return",
              href: "/startup/fssai-annual-return",
            },
            {
              name: "FSSAI Product Approval",
              href: "/startup/fssai-product-approval",
            },
            { name: "Food Recycling License", href: "/startup/food-recycling" },
            { name: "FPO Mark Certification", href: "/startup/fpo-mark" },
          ],
        },
        {
          title: "Business Registration",
          links: [
            {
              name: "Company Registration",
              href: "/startup/company-registration",
            },
            { name: "LLP Registration", href: "/startup/llp-registration" },
            {
              name: "Public Limited Company Registration",
              href: "/startup/public-limited",
            },
            { name: "One Person Company Registration", href: "/startup/opc" },
            {
              name: "Partnership Firm Registration",
              href: "/startup/partnership",
            },
            {
              name: "Sole Proprietorship Registration",
              href: "/startup/sole-proprietorship",
            },
            { name: "Nidhi Company Registration", href: "/startup/nidhi" },
            {
              name: "Producer Company Registration",
              href: "/startup/producer",
            },
            {
              name: "Sole Proprietorship to Pvt. Ltd. Company",
              href: "/startup/prop-to-pvt",
            },
            {
              name: "Conversion of Pvt. Ltd. to Public Limited",
              href: "/startup/pvt-to-public",
            },
            {
              name: "Indian Subsidiary Company Registration",
              href: "/startup/indian-subsidiary",
            },
            {
              name: "Conversion of LLP to Private Company",
              href: "/startup/llp-to-pvt",
            },
            {
              name: "Partnership Firm into Pvt. Ltd. Company",
              href: "/startup/partnership-to-pvt",
            },
            {
              name: "Carbon Black Manufacturing",
              href: "/startup/carbon-black",
            },
            { name: "Green Hydrogen Plant", href: "/startup/green-hydrogen" },
            { name: "Green Ammonia Plant", href: "/startup/green-ammonia" },
            {
              name: "Synthetic Rubber Business",
              href: "/startup/synthetic-rubber",
            },
            {
              name: "Paper and Paperboard Packaging Industry",
              href: "/startup/paper-packaging",
            },
            { name: "Fermentation Industry", href: "/startup/fermentation" },
            {
              name: "Renewable Energy Business",
              href: "/startup/renewable-energy",
            },
          ],
        },
        {
          title: "Secretarial Compliances",
          links: [
            {
              name: "Winding Up of Private Limited Company",
              href: "/startup/winding-up",
            },
            {
              name: "Closing a Limited Liability Partnership",
              href: "/startup/llp-closing",
            },
            {
              name: "Annual Compliance of a Pvt. Ltd. Company",
              href: "/startup/annual-compliance",
            },
            { name: "Annual Filing for LLP", href: "/startup/llp-filing" },
            {
              name: "Event Based Compliances in a Company",
              href: "/startup/event-based",
            },
            { name: "Change in Object Clause", href: "/startup/change-object" },
            {
              name: "Appointment and Resignation of Directors",
              href: "/startup/directors-change",
            },
            { name: "Change in Name Clause", href: "/startup/change-name" },
            { name: "Removal of Director", href: "/startup/remove-director" },
            {
              name: "Nidhi Company Compliance",
              href: "/startup/nidhi-compliance",
            },
            {
              name: "Section 8 Company Compliance",
              href: "/startup/section8-compliance",
            },
            { name: "NBFC Compliance", href: "/startup/nbfc-compliance" },
            {
              name: "Change in Registered Office",
              href: "/startup/change-office",
            },
            {
              name: "Change in Share Capital",
              href: "/startup/change-capital",
            },
            {
              name: "Revival of Struck Off Companies",
              href: "/startup/revival",
            },
            { name: "MCA Compliance", href: "/startup/mca-compliance" },
            { name: "Change in Directors", href: "/startup/change-directors" },
            {
              name: "Change in LLP Agreement",
              href: "/startup/change-llp-agreement",
            },
            { name: "Liquidation of Company", href: "/startup/liquidation" },
            { name: "AGR-Return Filing", href: "/startup/agr-return" },
            { name: "Form AOC-4", href: "/startup/aoc-4" },
            { name: "Form MGT-7", href: "/startup/mgt-7" },
            { name: "SPICe+ Form", href: "/startup/spice-plus" },
            { name: "AGILE PRO S", href: "/startup/agile-pro-s" },
          ],
        },
        {
          title: "IT Services",
          links: [
            {
              name: "Web Development Company",
              href: "/startup/web-development",
            },
          ],
        },
        {
          title: "Government Licenses",
          links: [
            {
              name: "Shop & Establishment License",
              href: "/startup/shop-license",
            },
            { name: "CE Certification", href: "/startup/ce-certification" },
            { name: "PSARA License", href: "/startup/psara" },
            { name: "Trade License", href: "/startup/trade-license" },
            { name: "Music License", href: "/startup/music-license" },
            { name: "Health Trade License", href: "/startup/health-license" },
            { name: "Factory License", href: "/startup/factory-license" },
            { name: "FDA Certification", href: "/startup/fda-certification" },
            { name: "GMP Certification", href: "/startup/gmp-certification" },
            { name: "Liquor License", href: "/startup/liquor-license" },
            { name: "AYUSH License", href: "/startup/ayush-license" },
            { name: "WPC Certification", href: "/startup/wpc-certification" },
            { name: "PESO Certification", href: "/startup/peso-certification" },
            { name: "CAPEXIL Certificate", href: "/startup/capexil" },
            { name: "TEC Certification", href: "/startup/tec-certification" },
            { name: "NASSCOM Membership", href: "/startup/nasscom" },
            { name: "MSO License", href: "/startup/mso-license" },
            { name: "DOT OSP Compliance", href: "/startup/dot-osp" },
            { name: "IP-1 License in India", href: "/startup/ip1-license" },
            { name: "HITS Operator", href: "/startup/hits-operator" },
            {
              name: "FIFP Approval for Telecom",
              href: "/startup/fifp-telecom",
            },
            {
              name: "Halal Certification",
              href: "/startup/halal-certification",
            },
            {
              name: "Homologation Certificate in India",
              href: "/startup/homologation",
            },
            {
              name: "Vehicle Type Approval Certificate in India",
              href: "/startup/vehicle-type-approval",
            },
            {
              name: "IMEI Number Registration",
              href: "/startup/imei-registration",
            },
            {
              name: "IMEI Certificate for Import of Mobile Handsets",
              href: "/startup/imei-certificate",
            },
            {
              name: "IMEI Certificate Generation",
              href: "/startup/imei-certificate-generation",
            },
          ],
        },
        {
          title: "Government Registration",
          links: [
            { name: "MSME Registration", href: "/startup/msme" },
            { name: "IEC Registration", href: "/startup/iec" },
            { name: "EPF Registration", href: "/startup/epf" },
            { name: "RERA Registration", href: "/startup/rera" },
            { name: "NSIC Registration", href: "/startup/nsic" },
            { name: "ESI Registration", href: "/startup/esi" },
            { name: "FIEO Registration", href: "/startup/fieo" },
            { name: "Building NOC", href: "/startup/building-noc" },
            { name: "BOCW Act Registration", href: "/startup/bocw" },
            {
              name: "RERA Registration for Agents",
              href: "/startup/rera-agent",
            },
            {
              name: "RERA Registration For Promoters",
              href: "/startup/rera-promoter",
            },
            { name: "APEDA Registration", href: "/startup/apeda" },
            { name: "RNI Registration", href: "/startup/rni" },
            { name: "Spice Board Registration", href: "/startup/spice-board" },
            { name: "Guest House Registration", href: "/startup/guest-house" },
            { name: "Barcode Registration", href: "/startup/barcode" },
            {
              name: "World Manufacturer Identifier (WMI) Code",
              href: "/startup/wmi-code",
            },
            {
              name: "Telemarketing Registration in India",
              href: "/startup/telemarketing",
            },
            {
              name: "Trusted Telecom Approval",
              href: "/startup/trusted-telecom",
            },
            {
              name: "Get Uplinking or Downlinking Channels Permission in India",
              href: "/startup/uplink-downlink",
            },
            { name: "PM-WANI Registration", href: "/startup/pm-wani" },
            {
              name: "Flipkart Seller Registration",
              href: "/startup/flipkart-seller",
            },
            {
              name: "Sanitary Import Permit",
              href: "/startup/sanitary-import",
            },
            { name: "NPOP Certification", href: "/startup/npop" },
            {
              name: "Coconut Board Registration",
              href: "/startup/coconut-board",
            },
            { name: "Drone Registration", href: "/startup/drone" },
          ],
        },
        {
          title: "NGO",
          links: [
            { name: "NGO Registration", href: "/startup/ngo-registration" },
            { name: "80G and 12A Registration", href: "/startup/80g-12a" },
            {
              name: "Section 8 Company Registration",
              href: "/startup/section-8",
            },
            { name: "Society Registration", href: "/startup/society" },
            { name: "FCRA Registration", href: "/startup/fcra" },
            { name: "12AA Registration", href: "/startup/12aa" },
            { name: "Trust Registration", href: "/startup/trust" },
            { name: "12AB Registration", href: "/startup/12ab" },
            {
              name: "Strike off Section 8 Companies",
              href: "/startup/strikeoff-section8",
            },
            { name: "NGO CSR-1 Filing", href: "/startup/csr1" },
            { name: "NGO CSR Consultancy", href: "/startup/csr-consultancy" },
            { name: "NGO Income Tax Advisory", href: "/startup/ngo-tax" },
            { name: "NGO Accounting", href: "/startup/ngo-accounting" },
            { name: "NGO Project Report", href: "/startup/ngo-project-report" },
            {
              name: "Trust Annual Compliance",
              href: "/startup/trust-compliance",
            },
            { name: "NGO Darpan Registration", href: "/startup/darpan" },
          ],
        },
        {
          title: "ISO",
          links: [
            { name: "ISO Registration", href: "/startup/iso-registration" },
            { name: "ISO 14001 EMS", href: "/startup/iso-14001" },
            { name: "ISO 22000 FSMS", href: "/startup/iso-22000" },
            { name: "ISO 9001 2015", href: "/startup/iso-9001" },
            { name: "ISO 50001 Energy Management", href: "/startup/iso-50001" },
            { name: "ISO 45001 certification", href: "/startup/iso-45001" },
            { name: "ISO 20000 Certification", href: "/startup/iso-20000" },
            { name: "ISO 31000 Certification", href: "/startup/iso-31000" },
            { name: "ISO 13485 Certification", href: "/startup/iso-13485" },
            {
              name: "ISO 21101:2014 Certification",
              href: "/startup/iso-21101",
            },
            {
              name: "ISO 37001:2016 Certification",
              href: "/startup/iso-37001",
            },
            {
              name: "ISO 27001 ISMS Certification",
              href: "/startup/iso-27001",
            },
            { name: "ISO 16001 Certification", href: "/startup/iso-16001" },
            { name: "ISO 39001 Certification", href: "/startup/iso-39001" },
            { name: "ISO 2768-1 Certification", href: "/startup/iso-2768-1" },
          ],
        },
      ],
    },
    {
      title: "IPR",
      subItems: [
        {
          title: "Trademark",
          description: "Protect your brand identity",
          links: [
            { name: "Trademark Registration", href: "/ipr/trademark" },
            { name: "Trademark Search", href: "/ipr/trademark-search" },
          ],
        },
        {
          title: "Patent",
          description: "Secure your inventions",
          links: [
            { name: "Patent Filing", href: "/ipr/patent" },
            { name: "Patent Search", href: "/ipr/patent-search" },
          ],
        },
      ],
    },
    {
      title: "Tax",
      subItems: [
        {
          title: "Income Tax",
          description: "Tax planning and filing services",
          links: [
            { name: "ITR Filing", href: "/tax/itr" },
            { name: "Tax Planning", href: "/tax/planning" },
          ],
        },
        {
          title: "GST",
          description: "Goods and Services Tax services",
          links: [
            { name: "GST Registration", href: "/tax/gst-registration" },
            { name: "GST Filing", href: "/tax/gst-filing" },
          ],
        },
      ],
    },
    {
      title: "Regulatory",
      subItems: [
        {
          title: "Licenses",
          description: "Essential business licenses",
          links: [
            { name: "FSSAI License", href: "/regulatory/fssai" },
            { name: "IEC Code", href: "/regulatory/iec" },
          ],
        },
        {
          title: "Certifications",
          description: "Quality and recognition certificates",
          links: [
            { name: "ISO Certification", href: "/regulatory/iso" },
            { name: "Startup India", href: "/regulatory/startup-india" },
          ],
        },
      ],
    },
    {
      title: "Environmental",
      subItems: [
        {
          title: "Clearances",
          description: "Environmental compliance services",
          links: [
            {
              name: "Environmental Clearance",
              href: "/environmental/clearance",
            },
            { name: "PCB NOC", href: "/environmental/pcb-noc" },
          ],
        },
      ],
    },
    {
      title: "Contact Us",
      href: "tel:+919999944807",
    },
  ];

  return (
   
      <nav className="bg-slate-800 border-gray-200 text-white sticky top-0 z-50">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              src={Logo}
              width={55}
              height={55}
              alt="DoStartup Logo"
              className="h-8"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              DoStartup
            </span>
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500"
            aria-controls="mega-menu"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div
            id="mega-menu"
            className="items-center justify-between hidden w-full md:flex md:w-auto"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-700 rounded-lg bg-slate-800 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              {menuItems.map((item, index) => (
                <li key={index} className="relative group">
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="block py-2 px-3 rounded cursor-pointer hover:bg-slate-700 md:hover:bg-transparent md:hover:text-emerald-300 md:p-0"
                    >
                      {item.title}
                    </Link>
                  ) : (
                    <>
                      <button
                        onClick={() => toggleMainItem(item.title)}
                        className="flex items-center cursor-pointer justify-between w-full py-2 px-3 rounded hover:bg-slate-700 md:hover:bg-transparent md:border-0 md:hover:text-emerald-300 md:p-0 md:w-auto"
                      >
                        {item.title}
                        <svg
                          className="w-2.5 h-2.5 ms-2.5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 10 6"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 1 4 4 4-4"
                          />
                        </svg>
                      </button>

                      {/* Desktop Dropdown - First Level */}
                      {openMainItem === item.title && (
                        <div className="fixed inset-0 z-20 pointer-events-none">
                          {/* Menu container */}
                          <div
                            className="fixed inset-x-0 top-16 bg-slate-800 border-b border-gray-700 shadow-lg z-30 pointer-events-auto"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <div className="container mx-auto flex h-[70vh]">
                              {/* First Level - Left Side (Vertical) */}
                              <div className="w-1/4 bg-slate-800 border-r border-gray-700 overflow-y-auto">
                                <ul className="py-4">
                                  {item.subItems?.map((subItem, subIndex) => (
                                    <li key={subIndex}>
                                      <button
                                        onClick={() =>
                                          toggleSubItem(
                                            `${item.title}-${subItem.title}`
                                          )
                                        }
                                        className={`flex justify-between cursor-pointer items-center w-full px-6 py-3 hover:bg-slate-700 hover:text-emerald-300 text-left ${
                                          openSubItem ===
                                          `${item.title}-${subItem.title}`
                                            ? "bg-slate-700 text-emerald-300"
                                            : ""
                                        }`}
                                      >
                                        {subItem.title}
                                        {subItem.links && (
                                          <svg
                                            className="w-3 h-3 ms-2.5"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 10 6"
                                          >
                                            <path
                                              stroke="currentColor"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              strokeWidth="2"
                                              d="m1 1 4 4 4-4"
                                            />
                                          </svg>
                                        )}
                                      </button>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* Second Level - Right Side (Horizontal) */}
                              <div className="w-3/4 bg-slate-800 p-6 overflow-x-auto">
                                {item.subItems?.map(
                                  (subItem) =>
                                    openSubItem ===
                                      `${item.title}-${subItem.title}` &&
                                    subItem.links && (
                                      <div
                                        key={subItem.title}
                                        className="flex flex-wrap gap-3"
                                      >
                                        {subItem.links.map(
                                          (link, linkIndex) => (
                                            <div
                                              key={linkIndex}
                                              className="flex-shrink-0 w-64 hover:bg-slate-900 transition-colors px-2 py-1"
                                            >
                                              <Link
                                                href={link.href}
                                                className="block"
                                              >
                                                <h4 className="font-medium text-emerald-400">
                                                  {link.name}
                                                </h4>
                                                {/* {link.description && (
                                            <p className="text-sm text-gray-300 mt-2">{link.description}</p>
                                          )} */}
                                              </Link>
                                            </div>
                                          )
                                        )}
                                      </div>
                                    )
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-4 py-2 border-t border-gray-700 bg-slate-800">
              <ul className="space-y-1">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="block py-2 px-3 rounded hover:bg-slate-700"
                        onClick={toggleMenu}
                      >
                        {item.title}
                      </Link>
                    ) : (
                      <>
                        <button
                          onClick={() => toggleMainItem(item.title)}
                          className="flex items-center justify-between w-full py-2 px-3 rounded hover:bg-slate-700 text-left"
                        >
                          {item.title}
                          <svg
                            className={`w-2.5 h-2.5 ms-2.5 transition-transform ${
                              openMainItem === item.title ? "rotate-180" : ""
                            }`}
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="m1 1 4 4 4-4"
                            />
                          </svg>
                        </button>

                        {/* Mobile Dropdown - First Level */}
                        {openMainItem === item.title && (
                          <div className="ml-4 mt-1 space-y-1">
                            {item.subItems?.map((subItem, subIndex) => (
                              <div key={subIndex}>
                                <button
                                  onClick={() =>
                                    toggleSubItem(
                                      `${item.title}-${subItem.title}`
                                    )
                                  }
                                  className="flex items-center justify-between w-full px-3 py-2 rounded hover:bg-slate-700 text-left"
                                >
                                  {subItem.title}
                                  {subItem.links && (
                                    <svg
                                      className={`w-2.5 h-2.5 ms-2.5 transition-transform ${
                                        openSubItem ===
                                        `${item.title}-${subItem.title}`
                                          ? "rotate-180"
                                          : ""
                                      }`}
                                      aria-hidden="true"
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 10 6"
                                    >
                                      <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m1 1 4 4 4-4"
                                      />
                                    </svg>
                                  )}
                                </button>

                                {/* Mobile Dropdown - Second Level */}
                                {openSubItem ===
                                  `${item.title}-${subItem.title}` &&
                                  subItem.links && (
                                    <div className="ml-4 mt-1 space-y-1">
                                      <ul className="max-h-60 overflow-y-auto">
                                        {subItem.links.map(
                                          (link, linkIndex) => (
                                            <li key={linkIndex}>
                                              <Link
                                                href={link.href}
                                                className="block px-3 py-2 rounded hover:bg-slate-700 text-sm"
                                                onClick={toggleMenu}
                                              >
                                                {link.name}
                                              </Link>
                                            </li>
                                          )
                                        )}
                                      </ul>
                                    </div>
                                  )}
                              </div>
                            ))}
                          </div>
                        )}
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </nav>
  );
};

export default Header;
