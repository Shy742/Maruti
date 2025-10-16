
import React from 'react';

export const MarutiLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 200 40" xmlns="http://www.w3.org/2000/svg" {...props}>
        <text x="50" y="30" fontFamily="Arial, sans-serif" fontSize="30" fontWeight="bold" fill="white">
            <tspan dy="0" dx="0">MARUTI</tspan>
        </text>
        <path d="M10 5 L0 20 L10 35 L20 35 L30 20 L20 5 Z M10 12 L20 12 L24 20 L20 28 L10 28 L6 20 Z" fill="white"/>
    </svg>
);
