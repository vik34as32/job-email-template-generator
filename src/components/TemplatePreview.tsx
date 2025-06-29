import React from "react";
import { Copy, Download } from "lucide-react";

interface TemplatePreviewProps {
  content: string;
  templateName: string;
}

export const TemplatePreview: React.FC<TemplatePreviewProps> = ({
  content,
  templateName,
}) => {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content);
      // You could add a toast notification here
      alert("Template copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([content], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = `${templateName.toLowerCase().replace(/\s+/g, "-")}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-800">Preview</h2>
        <div className="flex space-x-2">
          <button
            onClick={handleCopy}
            className="flex items-center space-x-2 px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            <Copy className="w-4 h-4" />
            <span>Copy</span>
          </button>
          <button
            onClick={handleDownload}
            className="flex items-center space-x-2 px-3 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>Download</span>
          </button>
        </div>
      </div>
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
        <pre className="whitespace-pre-wrap text-sm text-gray-800 font-mono leading-relaxed">
          {content}
        </pre>
      </div>
    </div>
  );
};
