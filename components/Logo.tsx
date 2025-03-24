import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const LogoSvg: React.FC<{ className?: string }> = ({ className }) => {
    const defaultClassName = 'w-3/4';
    className = className || defaultClassName;

    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" stroke="currentColor" viewBox="0 0 350 350" xmlnsXlink="http://www.w3.org/1999/xlink">
            <path strokeLinecap="round" fillOpacity="0" strokeWidth="15px" style={{transformOrigin: "175px 190px 0px"}} d="M 175 49.375 L 175 330.625"></path>
            <ellipse fillOpacity="0" strokeWidth="15px" cx="175" cy="34.375" rx="15" ry="15"></ellipse>
            <ellipse fillOpacity="0" strokeWidth="15px" cx="135" cy="74.375" rx="15" ry="15"></ellipse>
            <ellipse fillOpacity="0" strokeWidth="15px" cx="215.006" cy="74.375" rx="15" ry="15"></ellipse>
            <path fillOpacity="0" strokeWidth="15px" style={{transformOrigin: "219.997px 129.542px 0px"}} d="M 204.994 144.709 C 219.994 144.709 234.994 134.709 234.994 114.709" transform="matrix(-1, 0, 0, -1, 0, 0)"></path>
            <ellipse fillOpacity="0" strokeWidth="15px" cx="95" cy="114.375" rx="15" ry="15"></ellipse>
            <path fillOpacity="0" strokeWidth="15px" style={{transformOrigin: "149.997px 49.208px 0px"}} d="M 134.994 64.375 C 149.994 64.375 164.994 54.375 164.994 34.375" transform="matrix(-1, 0, 0, -1, 0, 0)"></path>
            <path fillOpacity="0" strokeWidth="15px" d="M 185 34.041 C 200 34.041 215 44.041 215 64.041"></path>
            <ellipse fillOpacity="0" strokeWidth="15px" cx="255" cy="114.375" rx="15" ry="15"></ellipse>
            <ellipse fillOpacity="0" strokeWidth="15px" cx="55" cy="154.375" rx="15" ry="15"></ellipse>
            <ellipse fillOpacity="0" strokeWidth="15px" cx="295" cy="154.375" rx="15" ry="15"></ellipse>
            <path fillOpacity="0" strokeWidth="15px" d="M 145 74.375 C 160 74.375 175 84.375 175 104.375"></path>
            <path fillOpacity="0" strokeWidth="15px" d="M 115 114.375 C 130 114.375 145 124.375 145 144.375"></path>
            <path fillOpacity="0" strokeWidth="15px" strokeLinecap="round" d="M 115 154.375 C 130 154.375 145 164.375 145 184.375"></path>
            <path fillOpacity="0" strokeWidth="15px" style={{transformOrigin: "92.5px 154.376px 0px"}} strokeLinecap="round" d="M 70 154.375 L 115 154.375" transform="matrix(1, 0.000002, -0.000002, 1, 0, 0)"></path>
            <path fillOpacity="0" strokeWidth="15px" style={{transformOrigin: "190.003px 89.542px 0px"}} d="M 175 104.709 C 190 104.709 205 94.709 205 74.709" transform="matrix(-1, 0, 0, -1, 0, 0)"></path>
            <path fillOpacity="0" strokeWidth="15px" strokeLinecap="round" style={{transformOrigin: "257.504px 154.375px 0px"}} d="M 235.006 154.375 L 280 154.375" transform="matrix(1, -0.000002, 0.000002, 1, 0, 0)"></path>
            <path fillOpacity="0" strokeWidth="15px" style={{transformOrigin: "220.003px 169.542px 0px"}} strokeLinecap="round" d="M 205 184.709 C 220 184.709 235 174.709 235 154.709" transform="matrix(-1, 0, 0, -1, 0, 0)"></path>
            <path fillOpacity="0" strokeWidth="15px" style={{transformOrigin: "109.997px 89.542px 0px"}} d="M 94.994 104.709 C 109.994 104.709 124.994 94.709 124.994 74.709" transform="matrix(-1, 0, 0, -1, 0, 0)"></path>
            <path fillOpacity="0" strokeWidth="15px" style={{transformOrigin: "69.997px 129.543px 0px"}} d="M 54.994 144.71 C 69.994 144.71 84.994 134.71 84.994 114.71" transform="matrix(-1, 0, 0, -1, 0, 0)"></path>
            <path fillOpacity="0" strokeWidth="15px" d="M 225.006 74.375 C 240.006 74.375 255.006 84.375 255.006 104.375"></path>
            <path fillOpacity="0" strokeWidth="15px" d="M 265 114.376 C 280 114.376 295 124.376 295 144.376"></path>
            <path strokeLinecap="round" fillOpacity="0" strokeWidth="15px" d="M 205.006 144.375 L 205.005 152.29166666666666 C 205.004 160.20833333333334 205.00199999999998 176.04166666666666 205.00200000000004 192.29166666666666 C 205.00199999999998 208.54166666666666 205.004 225.20833333333334 210.004 246.66666666666666 C 215.004 268.125 225.00199999999998 294.375 230.001 307.5 L 235 320.625"></path>
            <path strokeLinecap="round" fillOpacity="0" strokeWidth="15px" d="M 145 144.375 L 145 152.29166666666666 C 145 160.20833333333334 145 176.04166666666666 145 192.29166666666666 C 145 208.54166666666666 145 225.20833333333334 140 246.66666666666666 C 135 268.125 125 294.375 120 307.5 L 115 320.625"></path>
        </svg>
    );
};


