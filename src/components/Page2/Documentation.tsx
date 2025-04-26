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
    <div className="space-y-6 mt-8">
      {documents.map((document, index) => (
        <section key={index}>
          <h2 className="text-xl font-semibold">{document.heading}</h2>
          {/* Split content by newlines to maintain formatting */}
          {document.content.split('\n').map((paragraph, i) => (
            <p key={i} className="text-gray-700 mt-2">
              {paragraph}
            </p>
          ))}
        </section>
      ))}
    </div>
  );
};

export default Documentation;