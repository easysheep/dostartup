import React from "react";

interface FeeItem {
  category: string;
  amount: string;
}

interface FeeStructureProps {
  fees?: {
    heading?: string;
    paymentMethods?: string[];
    description?: string;
    feeTable?: FeeItem[];
  }[];
}

const FeeStructure: React.FC<FeeStructureProps> = ({ fees = [] }) => {
  if (fees.length === 0) {
    return null;
  }

  const feeData = fees[0];

  return (
    <div className="flex flex-col gap-6 p-4 lg:p-8">
      {/* Heading */}
      <h1 className="text-2xl font-bold text-center text-gray-800">
        {feeData.heading || "Fee Structure for Obtaining FSSAI State License"}
      </h1>
      
      {/* Description */}
      <section className="text-gray-700 mt-4">
        <p className="text-lg">
          {feeData.description || "The requisite fees must be paid by an applicant seeking State Food license via:"}
        </p>
        
        {feeData.paymentMethods && feeData.paymentMethods.length > 0 && (
          <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
            {feeData.paymentMethods.map((method, index) => (
              <li key={index}>{method}</li>
            ))}
          </ul>
        )}
      </section>

      {/* Fee Table */}
      {feeData.feeTable && feeData.feeTable.length > 0 && (
        <section className="mt-6">
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr className="bg-blue-500 text-white">
                <th className="py-2 px-4 border">Manufacturer (Production Capacity)</th>
                <th className="py-2 px-4 border">License Fees/year (INR)</th>
              </tr>
            </thead>
            <tbody>
              {feeData.feeTable.map((fee, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border text-gray-700">
                    {fee.category.split('\n').map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </td>
                  <td className="py-2 px-4 border text-center text-gray-700">
                    {fee.amount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}
    </div>
  );
};

export default FeeStructure;