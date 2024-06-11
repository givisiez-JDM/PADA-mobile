import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface HeaderNFooterBackSVGProps {
  fill: string;
}

const HeaderNFooterBackSVG: React.FC<HeaderNFooterBackSVGProps> = ({ fill }) => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.box}>
          <Svg
            viewBox="0 0 360 200"
            width={Dimensions.get('screen').width}
            height={200}
            fill="none"
          >
            <Path d="M-128.136 -117.582C-131.838 -200.285 131.46 -149.764 218.646 -153.667C343.599 -224.991 375 -8.00003 361.203 78.7388C247.934 209.435 87.1826 -45.1739 43.0001 153C2.20062 336 -233.315 -141.254 -128.136 -117.582Z" fill="#4C7ABB" />
            <Path d="M-128.111 -152.342C-131.813 -235.046 131.485 -184.525 218.671 -188.428C343.624 -259.752 375.025 -42.7605 361.228 43.9783C247.959 174.674 87.2078 -79.9344 43.0253 118.239C0.272659 310 -233.289 -176.014 -128.111 -152.342Z" fill="#76A7ED" />
          </Svg>
        </View>
      </View>

      <View style={styles.bottom}>
        <View style={styles.box}>
          <Svg
            viewBox="0 0 360 160"
            width={Dimensions.get('screen').width}
            height={200}
            fill="none"
          >
            <Path
              d="M407.581 266.754C407.581 355.801 162.281 288.85 80.1873 288.85C-40.2335 359.481 -44 121.309 -44 32.2622C67.9381 -102.729 142.48 243.084 192.335 32.2624C221.429 -90.7694 505.423 297.25 407.581 266.754Z"
              fill={fill || "#4C7ABB"}
            />
            <Path
              d="M434.707 317.521C434.707 405.091 193.685 339.25 113.022 339.25C-5.29916 408.709 -9 174.491 -9 86.9214C100.986 -45.8292 92.3068 254.784 223.214 86.9215C273.157 22.8798 530.843 347.511 434.707 317.521Z"
              fill={fill || "#76A7ED"}
            />
          </Svg>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    backgroundColor: '#e3e3e3',
  },
  box: {
    height: 150
  },
  bottom: {
    position: 'absolute',
    bottom: 0
  }
});

export default HeaderNFooterBackSVG;
