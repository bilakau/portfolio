import React from 'react';

interface HamburgerProps {
  isOpen: boolean;
  toggle: () => void;
}

export const Hamburger: React.FC<HamburgerProps> = ({ isOpen, toggle }) => {
  return (
    <React.Fragment>
      {/* Hidden SVG defs for gooey filter */}
      <svg style={{ position: 'fixed', width: 0, height: 0, overflow: 'hidden', top: 0, left: 0 }} aria-hidden="true">
        <defs>
          <filter id="gooeyness">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2.2" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10" result="gooeyness" />
            <feComposite in="SourceGraphic" in2="gooeyness" operator="atop" />
          </filter>
        </defs>
      </svg>

      {/* The actual hamburger button */}
      <button
        onClick={toggle}
        aria-label="Toggle menu"
        type="button"
        style={{
          width: 52,
          height: 52,
          position: 'relative',
          background: 'transparent',
          border: 'none',
          padding: 0,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {/* Burger icon */}
        <svg
          className="juicy-burger"
          style={{
            position: 'absolute',
            width: 52,
            height: 52,
            top: 0,
            left: 0,
            transform: isOpen ? 'scale(0)' : 'scale(1)',
            transition: 'transform 400ms',
            pointerEvents: 'none',
          }}
          viewBox="0 0 100 100"
        >
          <path className={`juicy-line line1 ${isOpen ? 'plate6-open-l1' : 'plate6-l1'}`} d="M 50,35 H 30 M 50,35 H 70 V 38 H 30 V 41 H 70" />
          <path className={`juicy-line line2 ${isOpen ? 'plate6-open-l2' : 'plate6-l2'}`} d="M 50,50 H 30 V 47 H 70 V 44 H 30" />
          <path className={`juicy-line line3 ${isOpen ? 'plate6-open-l3' : 'plate6-l3'}`} d="M 50,50 H 70 V 53 H 30 V 56 H 70" />
          <path className={`juicy-line line4 ${isOpen ? 'plate6-open-l4' : 'plate6-l4'}`} d="M 50,65 H 70 M 50,65 H 30 V 62 H 70 V 59 H 30" />
        </svg>

        {/* X icon */}
        <svg
          style={{
            position: 'absolute',
            width: 52,
            height: 52,
            top: 0,
            left: 0,
            transform: isOpen ? 'scale(1)' : 'scale(0)',
            transition: isOpen ? 'transform 400ms 50ms' : 'transform 400ms',
            pointerEvents: 'none',
          }}
          viewBox="0 0 100 100"
        >
          <path className="juicy-line" d="M 34,32 L 66,68" />
          <path className="juicy-line" d="M 66,32 L 34,68" />
        </svg>
      </button>
    </React.Fragment>
  );
};
