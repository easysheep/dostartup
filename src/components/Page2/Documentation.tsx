import React from "react";

interface Document {
  heading: string;
  content: string;
}

interface DocumentationProps {
  documents?: Document[];
}

const Documentation: React.FC<DocumentationProps> = ({ documents = [] }) => {
  if (documents.length === 0) {
    return null; // Don't render if no documents provided
  }

  return (
    <div className="space-y-8 mt-10">
      {documents.map((document, index) => (
        <section
          key={index}
          className="border border-gray-200 rounded-lg p-5 bg-white shadow-sm"
        >
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3">
            {index + 1}. {document.heading}
          </h2>

          {document.content.split("\n").map((paragraph, i) => (
            <p
              key={i}
              className="text-sm sm:text-base text-gray-700 mb-2 leading-relaxed"
            >
              {paragraph.trim()}
            </p>
          ))}
        </section>
      ))}
    </div>
  );
};

export default Documentation;
