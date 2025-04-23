import React from "react";

const Documentation = () => {
  return (
    <div className="space-y-6 mt-8">
      <section>
        <h2 className="text-xl font-semibold">Who Needs an FSSAI State License?</h2>
        <p className="text-gray-700 mt-2">
          Businesses with a medium-sized operation in food manufacturing, processing, packaging, storage, distribution, or sales need to obtain an FSSAI State License. In particular, this license is required for businesses that belong to the following categories:
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
          <li>Businesses operating in a single state and generating an annual turnover of more than Rs 12 lacs and less than Rs 20 Crores.</li>
          <li>Facility dealing with Proprietary foods.</li>
          <li>Vegetable oil production & processing facility using the process of solvent extraction meeting the above turnover criteria.</li>
          <li>Hotels having a 4-star rating or less.</li>
          <li>Facilities dealing with dairy products, Milk Chilling Units having production capacity ranging from 500 to 50000 lit.</li>
          <li>Storages possess an overall capacity of less than 50,000 metric tons yearly.</li>
          <li>A slaughterhouse having a capacity of more than 2 & up to 50 large animals... or up to 1000 poultry birds.</li>
          <li>All food processing facilities, including re-packing units, with a per-day capacity of not less than 100kg/l to up to 2 metric tons.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Documents Required to Obtain FSSAI State License</h2>
        <p className="text-gray-700 mt-2 italic">
          Following are the Documents that one to arrange to apply for a state FSSAI license:
        </p>
        <p className="text-gray-700 mt-1">
          <strong>Given below are the significant documents required to obtain FSSAI State License:</strong>
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
          <li>Details of key management personnel with real address & contact particulars</li>
          <li>Passport-sized photos of the individual seeking the license</li>
          <li>Identification and address proof of the individual</li>
          <li>Applicant's PAN card</li>
          <li>Property ownership documents or rent agreement and NOC</li>
          <li>Particulars on Raw material suppliers</li>
          <li>Form B duly completed and authenticated</li>
          <li>List of machinery installed at the facility</li>
          <li>NOC accorded by the local Municipality</li>
        </ul>
      </section>
    </div>
  );
};

export default Documentation;