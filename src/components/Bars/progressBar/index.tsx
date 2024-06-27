import React from "react";
import { View } from "react-native";
import styles from './style';
import {
  NeonSide,
  Progress,
} from "./style";

const ProgressBar = (props: { progress: number; width: string }) => {
  return (
    <View style={styles.container}>
      <Progress progress={props.progress}>
        <NeonSide />
      </Progress>
    </View>
  );
};

export default ProgressBar;
