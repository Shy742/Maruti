
import React from 'react';

export const EngineStatusIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 40 40" {...props}>
    <circle cx="20" cy="20" r="18" fill="none" stroke="#e6e6e6" strokeWidth="3"></circle>
    <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="85 113.097" transform="rotate(-90 20 20)"></circle>
    <path d="M16 20h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M18 18l-2 2 2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="13" y="15" width="14" height="10" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);
