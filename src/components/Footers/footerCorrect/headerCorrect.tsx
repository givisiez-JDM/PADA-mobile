import React from 'react';
import { StyleSheet, View } from 'react-native';
import Svg, { Path, G, Defs, ClipPath, Rect } from 'react-native-svg';

interface HeaderBackSVGProps {
  fill: string;
}

const HeaderBackSVG: React.FC<HeaderBackSVGProps> = ({ fill }) => {
  return (
    <View style={styles.container}>
      <Svg
        viewBox="0 0 360 202"
        style={styles.svg}
        fill="none"
        
      >
        <G clipPath="url(#clip0)">
          <Path
            d="M-128.136 -117.582C-131.838 -200.285 131.46 -149.764 218.646 -153.667C343.599 -224.991 375 -8.00003 361.203 78.7388C247.934 209.435 87.1826 -45.1739 43.0001 153C2.20062 336 -233.315 -141.254 -128.136 -117.582Z"
            fill={fill || "#4C7ABB"}
          />
          <Path
            d="M-128.111 -152.342C-131.813 -235.046 131.485 -184.525 218.671 -188.428C343.624 -259.752 375.025 -42.7605 361.228 43.9783C247.959 174.674 87.2078 -79.9344 43.0253 118.239C0.272659 310 -233.289 -176.014 -128.111 -152.342Z"
            fill={fill || "#76A7ED"}
          />
        </G>
        <Defs>
          <ClipPath id="clip0">
            <Rect width="360" height="202" fill="white" />
          </ClipPath>
        </Defs>
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    aspectRatio: 360 / 202,
  },
  svg: {
    width: '100%',
    height: '100%',
  },
});

export default HeaderBackSVG;
