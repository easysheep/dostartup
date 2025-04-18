const components = [
    {
      icon: "🏢",
      title: "Central Goods and Services Tax (CGST)",
      description:
        "Central Goods and Services Tax (CGST) is a tax imposed by the Central Government on the supply of goods and services within a specified period.",
    },
    {
      icon: "🏛️",
      title: "State Goods and Services Tax (SGST)",
      description:
        "State Goods and Services Tax (SGST) is a tax imposed by the State Government on the supply of goods and services within the state's jurisdiction.",
    },
    {
      icon: "🌐",
      title: "Integrated Goods and Services Tax (IGST)",
      description:
        "Integrated Goods and Services Tax (IGST) is a tax imposed by the Central Government on the supply of goods and services across different states or between a state and a union territory.",
    },
  ];

export default function Features(){
    <section className="bg-white py-12 px-4 md:px-8" id="features">
              <div className="max-w-6xl mx-auto text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">
                  Key Components of GST Registration
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  The structure of GST registration in India evolves around the three major components as specified below:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {components.map((item, index) => (
                  <div
                    key={index}
                    className="border rounded-lg p-6 text-left hover:shadow-lg transition-all duration-300"
                  >
                    <div className="text-4xl mb-4">{item.icon}</div>
                      <h3 className="text-md font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-700 text-sm">{item.description}</p>
                    </div>
                  ))}
              </div>
    </section>
}