import React from 'react';

interface HamburgerProps {
  isOpen: boolean;
  toggle: () => void;
}

export const Hamburger: React.FC<HamburgerProps> = ({ isOpen, toggle }) => {
  return (
    <>
      <svg style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}>
        <defs>
          <filter id="gooeyness">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2.2" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10" result="gooeyness" />
            <feComposite in="SourceGraphic" in2="gooeyness" operator="atop" />
          </filter>
        </defs>
      </svg>
      <div 
        className={`juicy-plate plate6 ${isOpen ? 'active' : ''} md:hidden scale-75 transform origin-right -mr-2`} 
        onClick={toggle}
      >
        <svg className="juicy-burger" version="1.1" height="100" width="100" viewBox="0 0 100 100">
          <path className="juicy-line line1" d="M 50,35 H 30 M 50,35 H 70 V 38 H 30 V 41 H 70" />
          <path className="juicy-line line2" d="M 50,50 H 30 V 47 H 70 V 44 H 30" />
          <path className="juicy-line line3" d="M 50,50 H 70 V 53 H 30 V 56 H 70" />
          <path className="juicy-line line4" d="M 50,65 H 70 M 50,65 H 30 V 62 H 70 V 59 H 30" />
        </svg>
        <svg className="juicy-x" version="1.1" height="100" width="100" viewBox="0 0 100 100">
          <path className="juicy-line" d="M 34,32 L 66,68" />
          <path className="juicy-line" d="M 66,32 L 34,68" />
        </svg>
      </div>
    </>
  );
};
