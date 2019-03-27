import React from "react";
const SVG = () => {
  return (
    <svg
      width="159px"
      height="50px"
      viewBox="0 0 149 40"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="linearGradient-1"
        >
          <stop stop-color="#D8D8D8" offset="0%" />
          <stop stop-color="#B3B3B3" offset="100%" />
        </linearGradient>
        <rect id="path-2" x="0" y="0" width="145" height="36" rx="6" />
        <filter
          x="-2.4%"
          y="-6.9%"
          width="104.8%"
          height="119.4%"
          filterUnits="objectBoundingBox"
          id="filter-3"
        >
          <feOffset
            dx="0"
            dy="1"
            in="SourceAlpha"
            result="shadowOffsetOuter1"
          />
          <feGaussianBlur
            stdDeviation="1"
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          />
          <feComposite
            in="shadowBlurOuter1"
            in2="SourceAlpha"
            operator="out"
            result="shadowBlurOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.195772059 0"
            type="matrix"
            in="shadowBlurOuter1"
          />
        </filter>
        <filter
          x="-2.1%"
          y="-5.6%"
          width="104.1%"
          height="116.7%"
          filterUnits="objectBoundingBox"
          id="filter-4"
        >
          <feOffset
            dx="0"
            dy="2"
            in="SourceAlpha"
            result="shadowOffsetInner1"
          />
          <feComposite
            in="shadowOffsetInner1"
            in2="SourceAlpha"
            operator="arithmetic"
            k2="-1"
            k3="1"
            result="shadowInnerInner1"
          />
          <feColorMatrix
            values="0 0 0 0 1   0 0 0 0 0.999936521   0 0 0 0 1  0 0 0 1 0"
            type="matrix"
            in="shadowInnerInner1"
          />
        </filter>
        <text
          id="text-5"
          font-family="AvenirNext-Bold, Avenir Next"
          font-size="14"
          font-weight="bold"
          fill="#4A4A4A"
        >
          <tspan x="47.391" y="23">
            Update
          </tspan>
        </text>
        <filter
          x="-1.0%"
          y="-2.6%"
          width="102.0%"
          height="110.5%"
          filterUnits="objectBoundingBox"
          id="filter-6"
        >
          <feOffset
            dx="0"
            dy="1"
            in="SourceAlpha"
            result="shadowOffsetOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 1   0 0 0 0 0.999936521   0 0 0 0 1  0 0 0 1 0"
            type="matrix"
            in="shadowOffsetOuter1"
          />
        </filter>
      </defs>
      <g
        id="Page-1"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="Frontend-Assignment"
          transform="translate(-385.000000, -442.000000)"
        >
          <g id="Group" transform="translate(268.000000, 419.000000)">
            <g
              id="Buttons-/-Primary"
              transform="translate(119.000000, 24.000000)"
            >
              <g id="Button-Background">
                <use
                  fill="black"
                  fill-opacity="1"
                  filter="url(#filter-3)"
                  href="#path-2"
                />
                <use
                  fill="url(#linearGradient-1)"
                  fill-rule="evenodd"
                  href="#path-2"
                />
                <use
                  fill="black"
                  fill-opacity="1"
                  filter="url(#filter-4)"
                  href="#path-2"
                />
                <rect
                  stroke="#979797"
                  stroke-width="1"
                  stroke-linejoin="square"
                  x="0.5"
                  y="0.5"
                  width="144"
                  height="35"
                  rx="6"
                />
              </g>
              <g id="Update" fill="#4A4A4A" fill-opacity="1">
                <use filter="url(#filter-6)" href="#text-5" />
                <use href="#text-5" />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default SVG;
