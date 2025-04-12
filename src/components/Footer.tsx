import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#06144E] text-white text-sm">
      {/* Top Footer Links */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-8 max-w-7xl mx-auto">
        {/* Column 1 */}
        <div>
          <h3 className="text-orange-500 font-bold mb-4">STARTUP</h3>
          <ul className="space-y-2">
            <li>Fssai & Eating License</li>
            <li>Business Registration</li>
            <li>Secretarial Compliances</li>
            <li>IT Services</li>
            <li>Government Licenses</li>
            <li>Government Registration</li>
            <li>NGO</li>
            <li>ISO</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-orange-500 font-bold mb-4">TAX</h3>
          <ul className="space-y-2">
            <li>Tax Filing</li>
            <li>Service Related</li>
            <li>Property Related</li>
            <li>Legal Services</li>
            <li>Accounting & Book Keeping</li>
            <li>Advisory Service</li>
            <li>Business Templates</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-orange-500 font-bold mb-4">REGULATORY</h3>
          <ul className="space-y-2">
            <li>Legal Metrology</li>
            <li>BIS</li>
            <li>CDSCO</li>
            <li>IRDA</li>
            <li>SEBI</li>
            <li>RBI</li>
            <li>FEMA</li>
            <li>Telecom</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-orange-500 font-bold mb-4">ENVIRONMENTAL</h3>
          <ul className="space-y-2">
            <li>Pollution NOC</li>
            <li>E-Waste Management</li>
            <li>Plastic Waste Management</li>
            <li>Hazardous Waste Management</li>
            <li>Battery Waste Management</li>
            <li>Environmental Licensing</li>
            <li>Environmental Advisory</li>
            <li>EIA</li>
            <li>Environmental Industry</li>
          </ul>
        </div>
      </div>

      {/* Social Media + Nav Links */}
      <div className="bg-[#F5A623] flex flex-col md:flex-row justify-between items-center px-6 py-4 text-[#06144E] font-medium">
        <div className="flex gap-4 mb-3 md:mb-0">
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
          <FaLinkedinIn />
          <FaYoutube />
        </div>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="#">ABOUT US</a>
          <a href="#">PAY NOW</a>
          <a href="#">LEARNING</a>
          <a href="#">PRIVACY POLICY</a>
          <a href="#">REFUND POLICY</a>
          <a href="#">TERMS & CONDITIONS</a>
          <a href="#">SITEMAP</a>
          <a href="#">CONTACT US</a>
        </div>
      </div>

      {/* Payment logos (simulated with text/icons or replace with actual images) */}
      <div className="flex justify-center gap-6 p-6 opacity-70">
        <span className="uppercase">Visa</span>
        <span>MasterCard</span>
        <span>Maestro</span>
        <span>Amex</span>
        <span>Paytm</span>
        <span>MobiKwik</span>
        <span>PayU</span>
      </div>

      {/* Bottom disclaimer */}
      <div className="text-center text-xs text-gray-300 px-4 pb-4">
        By continuing past this page, you agree to our <span className="text-orange-500">Terms & Conditions</span>, <span className="text-orange-500">Privacy Policy</span>, <span className="text-orange-500">Refund Policy</span>, <span className="text-orange-500">Confidentiality Policy</span>, <span className="text-orange-500">Disclaimer</span>.
        <br />
        © 2025 - Logo Private Limited. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
