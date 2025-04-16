// app/register/page.tsx
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
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Choose Registration Type</h1>
      <ul className="space-y-3">
        {registrationTypes.map((type) => (
          <li key={type.slug}>
            <Link
              href={`/register/${type.slug}`}
              className="block p-4 bg-gray-100 rounded-xl hover:bg-gray-200 transition"
            >
              {type.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
