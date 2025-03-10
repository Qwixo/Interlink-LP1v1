import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold text-[#064088] mb-4">INTERLINK International Institutes</h3>
          
          <div className="text-gray-700 text-sm">
            <p className="font-semibold mb-2">Contact:</p>
            <p className="mb-1">Ms. Valley Peters, Executive Director</p>
            <p className="mb-1">
              Email: <a href="mailto:admissions@interlink.edu" className="text-[#064088] hover:underline">admissions@interlink.edu</a>
            </p>
            <p className="mb-1">Tel: (720) 391-2030</p>
            <p className="mb-1">WhatsApp: +1 720 391 2030</p>
            <p className="mt-3">
              Website: <a href="https://interlink.edu/" target="_blank" rel="noopener noreferrer" className="text-[#064088] hover:underline">https://interlink.edu/</a>
            </p>
          </div>
          
          <div className="mt-6 text-xs text-gray-500">
            <p>© {new Date().getFullYear()} INTERLINK International Institutes. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
