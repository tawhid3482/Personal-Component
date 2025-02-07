import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FaRegCopy, FaCheck } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const ComponentPreview = ({ title, component, code, htmlCode }) => {
  const [activeTab, setActiveTab] = useState("preview");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(activeTab === "jsx" ? code : htmlCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="border rounded-lg p-4 shadow-md bg-white">
      {/* Title */}
      <h3 className="text-lg font-semibold mb-2">{title}</h3>

      {/* Tabs */}
      <div className="flex space-x-2 mb-4 border-b pb-2">
        {["preview", "html", "jsx"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-sm font-medium rounded-t-md transition ${
              activeTab === tab ? "bg-gray-900 text-white" : "bg-gray-200 text-gray-600"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Display Content */}
      <div className="relative">
        {activeTab === "preview" && (
          <div className="p-4 border rounded-lg bg-gray-50 flex justify-center">{component}</div>
        )}
        
        {activeTab !== "preview" && (
          <div className="relative">
            <SyntaxHighlighter language="jsx" style={atomDark} className="rounded-md">
              {activeTab === "jsx" ? code : htmlCode}
            </SyntaxHighlighter>

            {/* Copy Button */}
            <button
              onClick={handleCopy}
              className="absolute top-2 right-2 bg-gray-800 text-white p-1 rounded-md text-sm flex items-center gap-1"
            >
              {copied ? <FaCheck /> : <FaRegCopy />} {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ComponentPreview;
