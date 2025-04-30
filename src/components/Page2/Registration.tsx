import React from "react";

interface PenaltyItem {
  serialNumber: string;
  particulars: string;
  fine: string;
}

interface RegistrationItem {
  heading: string;
  content: string;
  penalties?: {
    description?: string;
    penaltyTable?: PenaltyItem[];
  };
}

interface RegistrationProps {
  procedure?: RegistrationItem[];
}

const Registration: React.FC<RegistrationProps> = ({ procedure = [] }) => {
  if (procedure.length === 0) {
    return null;
  }

  const registrationItem = procedure[0];

  return (
    <div>
      <main className="">
        {/* Registration Process Section */}
        <section>
          <h1 className="text-xl font-semibold mt-4">
            {registrationItem.heading}
          </h1>
          <section className="mb-8">
            <ul className="text-gray-700 mt-2 space-y-2 list-inside">
              {registrationItem.content.split('\n').map((step, index) => (
                <li key={index}>{step.trim()}</li>
              ))}
            </ul>
          </section>
        </section>

        {/* Penalties Section */}
        {registrationItem.penalties?.description && (
          <section>
            <h2 className="text-xl font-semibold mt-4">
              Penalty for Not Complying with FSSAI's Norms
            </h2>
            <section>
              <p className="text-gray-700 mb-4">
                {registrationItem.penalties.description}
              </p>
            </section>
          </section>
        )}

        {/* Penalty Table */}
        {registrationItem.penalties?.penaltyTable && registrationItem.penalties.penaltyTable.length > 0 && (
          <table className="w-full table-auto mt-6 border-collapse">
            <thead>
              <tr className="bg-blue-500 text-white">
                <th className="py-2 px-4 border">S.No</th>
                <th className="py-2 px-4 border">Particulars</th>
                <th className="py-2 px-4 border">Fine (Rs)</th>
              </tr>
            </thead>
            <tbody>
              {registrationItem.penalties.penaltyTable.map((penalty, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border">{penalty.serialNumber}</td>
                  <td className="py-2 px-4 border">{penalty.particulars}</td>
                  <td className="py-2 px-4 border">{penalty.fine}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </main>
    </div>
  );
};

export default Registration;