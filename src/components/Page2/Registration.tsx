const Registration = () => {
    return (
      <div>
        <main className="">
        <section>
          <h1 className="text-xl font-semibold mt-4">
            Process for Obtaining FSSAI State License
          </h1>
          <section className="mb-8">
            <ul className="text-gray-700 mt-2 space-y-2 list-inside">
              <li>Arranging the aforesaid Document and Filing of application via Form B.</li>
              <li>Submission of form to licensing authority via online portal FOSCOS. The filing process ends with the submission of standard fees.</li>
              <li>In-depth scrutiny of applications and Documents by FSSAI's officials.</li>
              <li>If needed, an on-site inspection will be conducted by FSSAI's officials to determine the level of compliance at business premises.</li>
              <li>Grant of State FSSAI License by the licensing authority (Note: The application may be revoked by the licensing authority in case of non-compliance).</li>
              <li>After securing the license, the business owner can commence their business operation.</li>
            </ul>
          </section>

          <h2 className="text-xl font-semibold mt-4">
            Penalty for Not Complying with FSSAI's Norms
          </h2>
          <section>
            <p className="text-gray-700 mb-4">
              In general, the penalties for FBOs in India are pretty stringent, and they are bound to face severe consequences in case of non-compliance. FSSAI officials can conduct a surprise audit of the business premises without informing the owner. If they find some loopholes on account of compliance management, the concerned entity has to face penalties as cited in the FSS Act of 2006.
            </p>
          </section>

          <table className="w-full table-auto mt-6 border-collapse">
            <thead>
              <tr className="bg-blue-500 text-white">
                <th className="py-2 px-4 border">S.No</th>
                <th className="py-2 px-4 border">Particulars</th>
                <th className="py-2 px-4 border">Fine (Rs)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border">1</td>
                <td className="py-2 px-4 border">Food quality breaches the compliance given in the act</td>
                <td className="py-2 px-4 border">2 Lakh <br />Petty manufacturer 25,000/-</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border">2</td>
                <td className="py-2 px-4 border">Sub-standard food</td>
                <td className="py-2 px-4 border">5 Lakh</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border">3</td>
                <td className="py-2 px-4 border">Misbranded Food</td>
                <td className="py-2 px-4 border">3 Lakh</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border">4</td>
                <td className="py-2 px-4 border">Falsified advertisement or invalid description</td>
                <td className="py-2 px-4 border">10 Lakh</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>

      </div>
    );
  };
  
  export default Registration;