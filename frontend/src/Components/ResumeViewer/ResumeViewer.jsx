import React, { useState } from "react";
import { RiCloseLine, RiDownloadLine, RiExternalLinkLine } from "@remixicon/react";

const ResumeViewer = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Shailendra_Shukla_Resume.pdf';
    link.click();
  };

  const handleViewExternal = () => {
    window.open('/resume.pdf', '_blank');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <h2 className="text-xl font-semibold text-white">Resume - Shailendra Shukla</h2>
          <div className="flex items-center gap-3">
            <button
              onClick={handleViewExternal}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300"
              title="Open in new tab"
            >
              <RiExternalLinkLine size={16} />
              <span className="hidden sm:inline">Open External</span>
            </button>
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-300"
              title="Download PDF"
            >
              <RiDownloadLine size={16} />
              <span className="hidden sm:inline">Download</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-700 text-gray-400 hover:text-white rounded-lg transition-colors duration-300"
              title="Close"
            >
              <RiCloseLine size={20} />
            </button>
          </div>
        </div>

        {/* PDF Viewer */}
        <div className="flex-1 p-6">
          <div className="w-full h-full bg-white rounded-lg overflow-hidden shadow-inner">
            <iframe
              src="/resume.pdf#toolbar=1"
              className="w-full h-full min-h-[500px]"
              title="Resume PDF"
              frameBorder="0"
            >
              <div className="flex flex-col items-center justify-center h-full text-gray-600">
                <p className="mb-4">Unable to display PDF. Your browser might not support PDF viewing.</p>
                <div className="flex gap-4">
                  <button
                    onClick={handleViewExternal}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                  >
                    Open in New Tab
                  </button>
                  <button
                    onClick={handleDownload}
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300"
                  >
                    Download PDF
                  </button>
                </div>
              </div>
            </iframe>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-700 text-center">
          <p className="text-gray-400 text-sm">
            If you're having trouble viewing the PDF, try downloading it or opening in a new tab.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResumeViewer;
