import React from 'react';
import { useApp } from '../context/AppContext';

export default function Logo({ variant = 'default', className = '' }) {
  const { navigateTo } = useApp ? useApp() : { navigateTo: () => {} };

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (navigateTo) {
      navigateTo('home');
    }
  };

  return (
    <div 
      onClick={handleLogoClick}
      className={`inline-flex items-center gap-3 select-none cursor-pointer group transition-transform duration-200 hover:opacity-95 ${className}`}
      title="SKFF - S. K. Flavours & Fragrances"
    >
      <img
        src="/logo.svg"
        alt="SKFF - S. K. Flavours & Fragrances"
        className="h-10 md:h-12 w-auto object-contain drop-shadow-sm group-hover:scale-102 transition-transform duration-300"
      />
    </div>
  );
}
