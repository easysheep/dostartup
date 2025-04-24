import Documentation from "./Documentation";
import FAQ from "./FAQ";
import FeeStructure from "./FeeStructure";
import Registration from "./Registration";
import Timeline from "./Timeline";
import Why from "./Why";

interface OverviewProps {
  overview: { heading: string; content: string | string[] }[]; // Accept sections with headings and content
}

const Overview: React.FC<OverviewProps> = ({  overview  }) => {
    return (
      <div className="flex flex-col lg:flex-row gap-4 p-4 lg:p-8">
        {/* Sticky Sidebar */}
        <aside className="lg:w-1/5 sticky top-4 h-fit bg-white border p-4 rounded shadow-md">
          <ul className="space-y-2 font-medium text-gray-700">
            <li className="hover:text-blue-600 cursor-pointer">Overview</li>
            <li className="hover:text-blue-600 cursor-pointer">Benefits</li>
            <li className="hover:text-blue-600 cursor-pointer">Documents Required</li>
            <li className="hover:text-blue-600 cursor-pointer">Registration Procedure</li>
            <li className="hover:text-blue-600 cursor-pointer">Fees Structure</li>
            <li className="hover:text-blue-600 cursor-pointer">Registration Timeline</li>
            <li className="hover:text-blue-600 cursor-pointer">Why Us</li>
            <li className="hover:text-blue-600 cursor-pointer">FAQ</li>
          </ul>
        </aside>
  
        {/* Main Content */}
        <main className="lg:w-3/5 space-y-6">
          <section>
            {overview.map((overview, index) => (
              <section key={index}>
                <h2 className="text-xl font-semibold mt-4">{overview.heading}</h2>
                <p className="mt-2 text-gray-700">{overview.content}</p>
              </section>
            ))}
          </section>
  
          <section>
            <h2 className="text-xl font-semibold mt-4">Role of the Food Safety and Standards Authority of India</h2>
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
              <li>Formulating guidelines and norms for the food sector</li>
              <li>Introducing initiatives related to food safety awareness</li>
              <li>Releasing directions for food business operators</li>
              <li>Setting out norms and rules for food testing labs</li>
              <li>Accumulating data pertaining to contaminants in food articles</li>
              <li>To facilitate recommendations to the Indian Government...</li>
              <li>Utilizing a rapid alert system...</li>
            </ul>
            <p className="pt-2 pb-2">FSSAI has rolled the mandatory provisions for FBO and regulation of manufacturing, storage, sale, & distribution processes to ensure food safety and hygiene. The authority has also set up a legitimate information network for the awareness of the masses to secure valid information related to food safety & hygiene.</p>
            <p className="pt-2 pb-2">FSSAI has underpinned stringent norms for proprietary food units, as the majority of them conduct their operation without any norms. FSSAI has mandated these facilities to secure FSSAI state licenses without any exceptions.</p>
          </section>
  
          <section>
            <h2 className="text-xl font-semibold mt-6">Benefits of FSSAI State License</h2>
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
              <li>Creates strong brand recognition</li>
              <li>Improves the credibility of the business</li>
              <li>Enables businesses to attract more customers</li>
              <li>Offers legal stability...</li>
            </ul>
          </section>
          <Documentation/>
          <Registration/>
          <FeeStructure/>
          <Timeline/>
          <Why/>
          <FAQ/>
        </main>
  
        {/* Sticky Form */}
        <aside className="lg:w-1/5 sticky top-10 h-fit bg-white border p-4 rounded shadow-md">
          <div className="text-center mb-4">
            <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">Upto 50%</span>
            <h3 className="font-bold mt-2">Free Consultation by Expert</h3>
          </div>
          <form className="space-y-3">
            <input type="text" placeholder="Your Name" className="w-full border px-3 py-2 rounded" />
            <input type="email" placeholder="Email Address" className="w-full border px-3 py-2 rounded" />
            <div className="flex gap-2">
              <span className="flex items-center px-2 border rounded bg-gray-100">+91</span>
              <input type="tel" placeholder="Mobile Number" className="w-full border px-3 py-2 rounded" />
            </div>
            <select className="w-full border px-3 py-2 rounded">
              <option>Select State</option>
              <option>Delhi</option>
              <option>Maharashtra</option>
              {/* Add more states */}
            </select>
            <button type="submit" className="w-full bg-orange-500 text-white py-2 rounded font-semibold">
              GET STARTED NOW
            </button>
          </form>
        </aside>
      </div>
    );
  };
  
  export default Overview;
  