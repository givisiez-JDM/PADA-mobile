import React from 'react';
import { StyleSheet, View } from 'react-native';
import Svg, { Path, G, Defs, ClipPath, Rect } from 'react-native-svg';

interface FooterBackSVGProps {
  fill: string;
}

const FooterBackSVG: React.FC<FooterBackSVGProps> = ({ fill }) => {
  return (
    <View style={styles.container}>
      <Svg
        viewBox="0 0 360 160"
        style={styles.svg}
        fill="none"
      >
        <G clipPath="url(#clip0)">
          <Path
            d="M407.581 266.754C407.581 355.801 162.281 288.85 80.1873 288.85C-40.2335 359.481 -44 121.309 -44 32.2622C67.9381 -102.729 142.48 243.084 192.335 32.2624C221.429 -90.7694 505.423 297.25 407.581 266.754Z"
            fill={fill || "#4C7ABB"}
          />
          <Path
            d="M434.707 317.521C434.707 405.091 193.685 339.25 113.022 339.25C-5.29916 408.709 -9 174.491 -9 86.9214C100.986 -45.8292 92.3068 254.784 223.214 86.9215C273.157 22.8798 530.843 347.511 434.707 317.521Z"
            fill={fill || "#76A7ED"}
          />
        </G>
        <Defs>
          <ClipPath id="clip0">
            <Rect width="360" height="160" fill="white" />
          </ClipPath>
        </Defs>
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    aspectRatio: 360 / 160,
  },
  svg: {
    width: '100%',
    height: '10%',
  },
});

export default FooterBackSVG;
