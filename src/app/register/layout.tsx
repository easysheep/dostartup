"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";

export default function RegistrationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { slug } = useParams<{ slug: string }>();
  
  // Display friendly name from slug
  const formatSlugName = (slug: string) => {
    if (!slug || typeof slug !== "string") return "";
    return slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50">
      {/* Navigation Breadcrumb */}
      <div className="max-w-6xl mx-auto pt-6 px-4 sm:px-6">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            <li>
              <Link href="/" className="text-gray-500 hover:text-blue-600 transition-colors">
                Home
              </Link>
            </li>
            <li className="flex items-center">
              <svg className="h-4 w-4 text-gray-400 mx-1" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
              </svg>
              <Link href="/register" className="text-gray-500 hover:text-blue-600 transition-colors">
                Registration Services
              </Link>
            </li>
            <li className="flex items-center">
              <svg className="h-4 w-4 text-gray-400 mx-1" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
              </svg>
              <span className="text-blue-600 font-medium">
                {formatSlugName(slug as string)}
              </span>
            </li>
          </ol>
        </nav>
      </div>

      {/* Page Header */}
      <div className="bg-white">
        <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Business Registration Services
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Get expert assistance with all your business registration needs. Our team ensures a smooth, 
              compliant, and hassle-free process.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Related Services */}
      <div className="bg-gray-50 border-t border-b border-gray-200">
        <div className="max-w-6xl mx-auto py-4 px-4 sm:px-6">
          <div className="flex flex-nowrap overflow-x-auto py-2 space-x-2 scrollbar-hide">
            <Link 
              href="/register/private-limited-company"
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium ${
                slug === 'private-limited-company' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Private Limited Company
            </Link>
            <Link 
              href="/register/opc"
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium ${
                slug === 'opc' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              One Person Company
            </Link>
            <Link 
              href="/register/partnership-firm"
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium ${
                slug === 'partnership-firm' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Partnership Firm
            </Link>
            <Link 
              href="/register/msme"
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium ${
                slug === 'msme' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              MSME Registration
            </Link>
            <Link 
              href="/register/gst"
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium ${
                slug === 'gst' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              GST Registration
            </Link>
            <Link 
              href="/register/iec"
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium ${
                slug === 'iec' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              IEC Code
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main>{children}</main>

      {/* Call to Action */}
      <div className="bg-blue-600">
        <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Need assistance with your registration?
          </h2>
          <p className="text-blue-100 mb-8 max-w-3xl mx-auto">
            Our experts are available to guide you through the entire process. Schedule a free consultation today.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition">
              Schedule Consultation
            </button>
            <button className="bg-transparent border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition">
              Contact Support
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400">
        <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-white font-bold text-lg mb-3">Business Registration Portal</h3>
              <p className="max-w-md">
                Making business registration simple, fast, and reliable for entrepreneurs across India.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              <div>
                <h4 className="text-white font-semibold mb-3">Services</h4>
                <ul className="space-y-2">
                  <li><Link href="/register/private-limited-company" className="hover:text-white transition">Company Registration</Link></li>
                  <li><Link href="/register/gst" className="hover:text-white transition">GST Registration</Link></li>
                  <li><Link href="/register/msme" className="hover:text-white transition">MSME Registration</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-3">Resources</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-white transition">Blog</a></li>
                  <li><a href="#" className="hover:text-white transition">FAQ</a></li>
                  <li><a href="#" className="hover:text-white transition">Guides</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-3">Contact</h4>
                <ul className="space-y-2">
                  <li className="hover:text-white transition">support@bizreg.com</li>
                  <li className="hover:text-white transition">+91 98765 43210</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-800 text-sm text-center">
            <p>© {new Date().getFullYear()} Business Registration Portal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}