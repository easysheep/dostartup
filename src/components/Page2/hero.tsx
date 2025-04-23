import React from "react";

const Hero = () => {
    return  (
        <div className="flex flex-col lg:flex-row gap-8 p-8 bg-gray-50">
          {/* Left Content */}
          <div className="lg:w-2/3 space-y-6">
            <h1 className="text-3xl font-bold text-orange-600">
              FSSAI State License
            </h1>
            <p className="text-lg text-gray-700">
              Unsure about legal requirements to get an FSSAI state License? Let our experts streamline the FSSAI state licensing process and reduce legal hurdles for your food business.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center text-gray-700">
                <span className="text-blue-500 text-xl">✔</span>
                <p className="ml-2 text-lg">10+ Years of Experience</p>
              </div>
              <div className="flex items-center text-gray-700">
                <span className="text-blue-500 text-xl">✔</span>
                <p className="ml-2 text-lg">400+ In-House CAs, CS & Lawyers</p>
              </div>
              <div className="flex items-center text-gray-700">
                <span className="text-blue-500 text-xl">✔</span>
                <p className="ml-2 text-lg">99% SLA Delivery</p>
              </div>
              <div className="flex items-center text-gray-700">
                <span className="text-blue-500 text-xl">✔</span>
                <p className="ml-2 text-lg">10,000+ Pin codes Network in India</p>
              </div>
            </div>
    
            <div className="space-x-4">
              <button className="bg-blue-500 text-white px-6 py-2 rounded-lg">
                Schedule Free Consultation
              </button>
              <button className="text-blue-500 underline">See How It Works in 1 min video</button>
            </div>
    
            <div className="flex justify-around mt-8 text-center">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">100000 +</h3>
                <p className="text-gray-700">Happy Customers</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">3500 +</h3>
                <p className="text-gray-700">Expert Advisors</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">50 +</h3>
                <p className="text-gray-700">Branch Offices</p>
              </div>
            </div>
          </div>
    
          {/* Right Consultation Form */}
          <div className="lg:w-1/3 p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
              Free Consultation by Expert
            </h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border px-3 py-2 rounded"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border px-3 py-2 rounded"
              />
              <div className="flex gap-2">
                <span className="flex items-center px-2 border rounded bg-gray-100">+91</span>
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  className="w-full border px-3 py-2 rounded"
                />
              </div>
              <select className="w-full border px-3 py-2 rounded">
                <option>Select State</option>
                <option>Delhi</option>
                <option>Maharashtra</option>
                {/* Add more states */}
              </select>
              <div className="flex items-center space-x-3">
                <label className="text-gray-700">Get Update on</label>
                <div className="flex items-center space-x-2">
                  <button
                    type="button"
                    className="flex items-center bg-green-500 text-white px-2 py-1 rounded-md"
                  >
                    <span>WhatsApp</span>
                    <input
                      type="checkbox"
                      className="ml-2"
                    />
                  </button>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-2 rounded-lg font-semibold"
              >
                GET STARTED NOW
              </button>
            </form>
            <div className="mt-4 text-center text-gray-500">
              <p className="text-sm">Rated at 4.9 by 42,817+ Customers Globally</p>
            </div>
          </div>
        </div>
      );
};

export default Hero;