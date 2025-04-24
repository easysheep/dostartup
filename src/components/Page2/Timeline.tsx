const Timeline = () => {
    return (
        <div className="flex flex-col gap-6 p-4 lg:p-8">
          {/* Heading */}
          <h1 className="text-2xl font-bold text-center text-gray-800">
            Timeline to Obtain FSSAI State License
          </h1>
    
          {/* Description */}
          <section className="text-gray-700 mt-4">
            <p className="text-lg">
              Securing an FSSAI State License involves multiple stages. Here is an overview of the process timeline:
            </p>
          </section>
    
          {/* Timeline Steps */}
          <section className="mt-6">
            <div className="space-y-6">
              {/* Step 1 */}
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="lg:w-1/4 bg-blue-500 text-white p-4 rounded shadow-md">
                  <h3 className="text-xl font-semibold">Preparation & Documentation (1-2 Weeks)</h3>
                </div>
                <div className="lg:w-3/4 p-4 bg-gray-50 rounded shadow-md">
                  <p>
                    Start by gathering all required paperwork, including proof of address, identification, business registration, and a food safety management strategy. Perform a preliminary evaluation before applying to confirm you possess all necessary documents.
                  </p>
                </div>
              </div>
    
              {/* Step 2 */}
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="lg:w-1/4 bg-blue-500 text-white p-4 rounded shadow-md">
                  <h3 className="text-xl font-semibold">Submission of Application (1 Week)</h3>
                </div>
                <div className="lg:w-3/4 p-4 bg-gray-50 rounded shadow-md">
                  <p>
                    Fill out and send the FSSAI State License application form, either online via the FSSAI portal or at the nearby FSSAI office.
                  </p>
                </div>
              </div>
    
              {/* Step 3 */}
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="lg:w-1/4 bg-blue-500 text-white p-4 rounded shadow-md">
                  <h3 className="text-xl font-semibold">Review of Application & Documents (2-3 Weeks)</h3>
                </div>
                <div className="lg:w-3/4 p-4 bg-gray-50 rounded shadow-md">
                  <p>
                    Your application and documents will be reviewed by the FSSAI authority. Be ready to address any questions or requests for more information.
                  </p>
                </div>
              </div>
    
              {/* Step 4 */}
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="lg:w-1/4 bg-blue-500 text-white p-4 rounded shadow-md">
                  <h3 className="text-xl font-semibold">Inspection period (2-4 Weeks)</h3>
                </div>
                <div className="lg:w-3/4 p-4 bg-gray-50 rounded shadow-md">
                  <p>
                    FSSAI officials will visit your location to check your facilities and make sure they meet food safety regulations. Ensure that all safety precautions are implemented.
                  </p>
                </div>
              </div>
    
              {/* Step 5 */}
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="lg:w-1/4 bg-blue-500 text-white p-4 rounded shadow-md">
                  <h3 className="text-xl font-semibold">License Issuance (1-2 Weeks)</h3>
                </div>
                <div className="lg:w-3/4 p-4 bg-gray-50 rounded shadow-md">
                  <p>
                    Once the inspection and final review are completed successfully, your FSSAI State License will be issued and delivered to you.
                  </p>
                </div>
              </div>
    
              {/* Total Estimated Time */}
              <div className="flex flex-col lg:flex-row gap-4 mt-6">
                <div className="lg:w-1/4 bg-blue-500 text-white p-4 rounded shadow-md">
                  <h3 className="text-xl font-semibold">Total Estimated Time</h3>
                </div>
                <div className="lg:w-3/4 p-4 bg-gray-50 rounded shadow-md">
                  <p className="font-semibold">Approximately 6 to 12 weeks.</p>
                </div>
              </div>
            </div>
          </section>
    
          {/* Consultation Form */}
          <section className="mt-8">
            <div className="bg-white border p-6 rounded shadow-md">
              <h3 className="text-xl font-semibold text-center">Book a Free Consultation</h3>
              <p className="text-center text-gray-600 mb-4">Get response within 1 hour</p>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name*"
                  className="w-full border px-3 py-2 rounded"
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address*"
                  className="w-full border px-3 py-2 rounded"
                  required
                />
                <div className="flex gap-2">
                  <span className="flex items-center px-2 border rounded bg-gray-100">+91</span>
                  <input
                    type="tel"
                    placeholder="Mobile Number*"
                    className="w-full border px-3 py-2 rounded"
                    required
                  />
                </div>
                <select className="w-full border px-3 py-2 rounded" required>
                  <option>Select State</option>
                  <option>Delhi</option>
                  <option>Maharashtra</option>
                  {/* Add more states */}
                </select>
                <button
                  type="submit"
                  className="w-full bg-orange-500 text-white py-2 rounded font-semibold"
                >
                  SEND NOW
                </button>
              </form>
            </div>
          </section>
        </div>
      );
}

export default Timeline;