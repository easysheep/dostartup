const FeeStructure = () => {
    return (
        <div className="flex flex-col gap-6 p-4 lg:p-8">
          {/* Heading */}
          <h1 className="text-2xl font-bold text-center text-gray-800">
            Fee Structure for Obtaining FSSAI State License
          </h1>
          
          {/* Description */}
          <section className="text-gray-700 mt-4">
            <p className="text-lg">
              The requisite fees must be paid by an applicant seeking State Food license via:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
              <li>Demand Draft (DD)</li>
              <li>Treasury Challan, or</li>
              <li>Cash</li>
            </ul>
            <p className="mt-4 text-lg">
              The applicable fee varies in accordance with the production capacity of the food business:
            </p>
          </section>
    
          {/* Fee Table */}
          <section className="mt-6">
            <table className="min-w-full table-auto border-collapse">
              <thead>
                <tr className="bg-blue-500 text-white">
                  <th className="py-2 px-4 border">Manufacturer (Production Capacity)</th>
                  <th className="py-2 px-4 border">License Fees/year (INR)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border text-gray-700">
                    More than One million tons/day<br />
                    10001 to 50,000 L/day of milk or 501 to 2500 Million tons of milk solids/annum.
                  </td>
                  <td className="py-2 px-4 border text-center text-gray-700">5000/-</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border text-gray-700">
                    Lower than one Million tons of production 501 to 10,000 L/day of milk or 2.5 million tons to 500 million tons of yearly production of milk solid.
                  </td>
                  <td className="py-2 px-4 border text-center text-gray-700">3000/-</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border text-gray-700">Hotels having 4 stars rating</td>
                  <td className="py-2 px-4 border text-center text-gray-700">5000/-</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border text-gray-700">
                    All Food Service providers including restaurants, Canteens, clubs, caterers, Banquet halls offering food catering services, Dabbawalla system, & other FBOs.
                  </td>
                  <td className="py-2 px-4 border text-center text-gray-700">2000/-</td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
      );
}

export default FeeStructure;