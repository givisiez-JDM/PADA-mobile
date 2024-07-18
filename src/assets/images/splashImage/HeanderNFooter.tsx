import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import Svg, { Path, G, Defs, ClipPath, Rect } from 'react-native-svg';

const { width, height } = Dimensions.get('window');

const HeaderNFooterSplash = () => {
  return (
    <>
      <View style={styles.box}>
        <Svg
          width={width}
          height={height * 0.7}
          viewBox="0 0 360 500"
          fill="none"
          
        >
          <Defs>
            <ClipPath id="clip0">
              <Rect width="360" height="297" fill="white" />
            </ClipPath>
          </Defs>
          <G clipPath="url(#clip0)">
            <Path
              d="M159.66 -213.679C216.914 -273.475 362.222 -48.1671 425.259 12.1902C563.138 53.2966 412.894 216.001 355.64 275.796C182.892 284.145 362.463 -12.5661 188.63 92.3484C7.16769 155.346 104.139 -306.092 159.66 -213.679Z"
              fill="#76A7ED"
            />
            <Path
              d="M183.66 -260.679C240.914 -320.475 386.222 -95.1671 449.259 -34.8098C587.138 6.2966 436.894 169.001 379.64 228.796C206.892 237.145 386.463 -59.5661 212.63 45.3484C31.1677 108.346 128.139 -353.092 183.66 -260.679Z"
              fill="#4C7ABB"
            />
          </G>
        </Svg>
      </View>

      <View style={styles.bottom}>
        <View style={styles.box}>
          <Svg
            width={width}
            height={height * 0.4}
            viewBox="0 0 360 140"
            fill="none"
            
          >
            <Defs>
              <ClipPath id="clip0_8382_1251">
                <Rect width="360" height="217" fill="white" />
              </ClipPath>
            </Defs>
            <G clipPath="url(#clip0_8382_1251)">
              <Path
                d="M415.071 246.717C415.071 329.503 154.295 267.259 67.022 267.259C-60.9959 332.924 -65 111.498 -65 28.7112C54 -96.7889 129.5 241.711 182.5 45.7112C270 -125.289 519.085 275.068 415.071 246.717Z"
                fill="#76A7ED"
              />
              <Path
                d="M427.071 297.717C427.071 380.503 166.295 318.259 79.022 318.259C-48.9959 383.924 -53 162.498 -53 79.7112C66 -45.7889 141.5 292.711 194.5 96.7112C282 -74.2889 531.085 326.068 427.071 297.717Z"
                fill="#4C7ABB"
              />
            </G>
          </Svg>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  box: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottom: {
    position: 'absolute',
    bottom: 0,
  },
});

export default HeaderNFooterSplash;
