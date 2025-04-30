import React from "react";

interface HeroProps {
  title: string;
  description: string;
}

const Hero: React.FC<HeroProps> = ({ title, description }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 p-8 bg-gray-50">
      {/* Left Content */}
      <div className="lg:w-2/3 space-y-6">
        <h1 className="text-4xl font-extrabold text-orange-600 tracking-tight">
          {title}
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">{description}</p>

        <div className="space-y-4">
          {[
            "10+ Years of Experience",
            "400+ In-House CAs, CS & Lawyers",
            "99% SLA Delivery",
            "10,000+ Pin codes Network in India",
          ].map((text, idx) => (
            <div key={idx} className="flex items-center text-gray-700">
              <span className="text-blue-600 text-2xl">✔</span>
              <p className="ml-3 text-[17px] font-medium">{text}</p>
            </div>
          ))}
        </div>

        <div className="space-x-4">
          <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-3 rounded-xl shadow-md font-semibold cursor-pointer">
            Schedule Free Consultation
          </button>
          <button className="text-blue-600 hover:text-blue-800 underline text-[15px] font-medium cursor-pointer">
            See How It Works in 1 min video
          </button>
        </div>

        <div className="flex justify-around mt-10 text-center divide-x divide-gray-300">
          {[
            {
              label: "Happy Customers",
              count: "100000+",
              img: "https://corpbiz.io/img/hand-new-icon.png",
            },
            {
              label: "Expert Advisors",
              count: "3500+",
              img: "https://corpbiz.io/img/user-new-icon.png",
            },
            {
              label: "Branch Offices",
              count: "50+",
              img: "https://corpbiz.io/img/office-new-icon.png",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="group px-6 space-y-2 flex-1 flex flex-col items-center"
            >
              <img src={item.img} alt={item.label} className="w-12 h-12 mb-1" />
              <h3 className="text-2xl font-extrabold text-gray-800 group-hover:text-blue-600 transition duration-300">
                {item.count}
              </h3>
              <p className="text-gray-600 text-sm relative inline-block">
                {item.label}
                <span className="block h-[2px] w-0 bg-blue-500 group-hover:w-full transition-all duration-300 mt-1"></span>
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Consultation Form */}
      <div className="relative lg:w-1/3 mx-auto p-4">
        {/* Ribbon */}
        <div className="absolute -top-1 -left-1 z-10">
          <div className="bg-indigo-600 text-white px-3 py-1.5 rounded-tr-lg rounded-bl-lg shadow-lg transform -skew-x-12">
            <div className="transform skew-x-12 text-sm font-semibold leading-tight">
              <p className="text-xs">
                Upto{" "}
                <span className="text-yellow-300 font-bold text-sm">50%</span>
              </p>
              <p>Affordable Price</p>
              <p className="text-yellow-400 text-[10px]">
                Money Back Guarantee
              </p>
            </div>
          </div>
        </div>

        {/* Form Container */}
        <aside className="relative z-0 bg-white rounded-2xl shadow-xl p-6 mt-3">
          <h3 className="text-xl font-bold text-center text-gray-800 mb-4">
            Free Consultation by Expert
          </h3>

          <form className="space-y-3">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-gray-100 px-3 py-2 rounded-md placeholder-gray-500 focus:outline-none text-sm"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-gray-100 px-3 py-2 rounded-md placeholder-gray-500 focus:outline-none text-sm"
            />
            <div className="flex overflow-hidden rounded-md bg-gray-100 text-sm">
              <span className="px-3 py-2 bg-gray-200 text-gray-600">+91</span>
              <input
                type="tel"
                placeholder="Mobile Number"
                className="w-full bg-transparent px-3 py-2 placeholder-gray-500 focus:outline-none"
              />
            </div>
            <select className="w-full bg-gray-100 px-3 py-2 rounded-md text-gray-700 focus:outline-none text-sm">
              <option>Select State</option>
              <option>Delhi</option>
              <option>Maharashtra</option>
            </select>

            {/* WhatsApp Updates */}
            <div className="flex items-center gap-2 text-sm">
              <label className="flex items-center gap-2 bg-gray-100 rounded-md px-3 py-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-green-500"
                />
                {/* <FaWhatsapp className="text-green-500" /> */}
                <span className="text-gray-700">WhatsApp Updates</span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md font-semibold shadow-md text-sm transition cursor-pointer"
            >
              GET STARTED NOW
            </button>
          </form>

          <p className="mt-4 text-center text-xs text-gray-500">
            Rated 4.9 by 42,817+ Customers Globally
          </p>
        </aside>
      </div>
    </div>
  );
};

export default Hero;
