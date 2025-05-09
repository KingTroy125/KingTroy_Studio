import React from 'react';
import { X, Mail, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-black pt-16 pb-16 px-4">
      {/* Logo/Brand */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-20">
          <h2 className="text-[40px] sm:text-[60px] md:text-[120px] lg:text-[180px] font-bold tracking-tighter leading-none select-none">
            <span className="bg-gradient-to-b from-gray-200 to-gray-500 bg-clip-text text-transparent">
              KingTroy.Studio
            </span>
          </h2>
        </div>

        {/* Navigation Links */}
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-x-8 sm:gap-x-12 gap-y-4 mb-16 sm:mb-20">
            <Link to="#" className="text-white hover:text-gray-300 transition-colors text-sm sm:text-lg">
              Career
            </Link>
            <Link to="#" className="text-white hover:text-gray-300 transition-colors text-sm sm:text-lg">
              Hero roast
            </Link>
            <Link to="#" className="text-white hover:text-gray-300 transition-colors text-sm sm:text-lg">
              Figma templates
            </Link>
            <Link to="#" className="text-white hover:text-gray-300 transition-colors text-sm sm:text-lg">
              Newsletter
            </Link>
            <Link to="#" className="text-white hover:text-gray-300 transition-colors text-sm sm:text-lg">
              Portfolio
            </Link>
          </div>
        </div>

        {/* Copyright and Social */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 text-sm sm:text-base mb-4 md:mb-0">KingTroy.Studio © {new Date().getFullYear()}</p>
          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              <X size={20} />
            </a>
            <a href="mailto:hello@kingtroy.studio" className="text-gray-500 hover:text-white transition-colors">
              <Mail size={20} />
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <Link to="/terms" className="text-gray-500 hover:text-white transition-colors text-sm">
              Terms
            </Link>
            <Link to="/privacy" className="text-gray-500 hover:text-white transition-colors text-sm">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
