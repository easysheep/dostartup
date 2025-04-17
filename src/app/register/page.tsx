"use client";
import Link from "next/link";

const registrationTypes = [
  { name: "Private Limited Company", slug: "private-limited-company" },
  { name: "One Person Company (OPC)", slug: "opc" },
  { name: "Partnership Firm", slug: "partnership-firm" },
  { name: "MSME Registration", slug: "msme" },
  { name: "IEC Code", slug: "iec" },
  { name: "PSARA License", slug: "psara" },
  { name: "CE Certification", slug: "ce" },
  { name: "NBFC Registration", slug: "nbfc" },
  { name: "Plastic Waste Authorization", slug: "plastic-waste" },
  { name: "GST Registration", slug: "gst" },
];

export default function RegisterPage() {
  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Choose a Registration Type</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {registrationTypes.map((type) => (
          <Link
            key={type.slug}
            href={`/register/${type.slug}`}
            className="p-5 bg-white shadow-md hover:shadow-xl transition rounded-xl border border-gray-200"
          >
            <h2 className="text-xl font-semibold text-blue-600">{type.name}</h2>
            <p className="text-gray-500 text-sm mt-2">Click to view details</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
