import React from "react";
import Svg, { Path, } from "react-native-svg";


interface FooterBackSVGProps {
  width: number;
  height: number;
  fill: string;
}

const FooterBackSVG: React.FC<FooterBackSVGProps> = () => {
    

  return (
    <Svg width="100%" height="23%" fill="transparent">
      <Path d="M407.581 266.754C407.581 355.801 162.281 288.85 80.1873 288.85C-40.2335 359.481 -44 121.309 -44 32.2621C67.9381 -102.729 142.48 243.084 192.335 32.2623C221.429 -90.7695 505.423 297.25 407.581 266.754Z" fill="#4C7ABB" clipPath="url(#clip0)" />
      <Path d="M434.707 317.521C434.707 405.091 193.685 339.25 113.022 339.25C-5.29917 408.709 -9 174.491 -9 86.9214C100.986 -45.8292 92.3068 254.784 223.214 86.9215C273.157 22.8798 530.843 347.511 434.707 317.521Z" fill="#76A7ED" clipPath="url(#clip0)" />
    </Svg>
  );
};

export default FooterBackSVG;
