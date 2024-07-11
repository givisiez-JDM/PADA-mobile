import React from "react";
import { View } from "react-native";
import styles from './style';
import {
  NeonSide,
  Progress,
} from "./style";

const ProgressBarModal = (props: { progress: number;}) => {
  return (
    <View style={styles.containerModal}>
      <Progress progress={props.progress}>
        <NeonSide />
      </Progress>
    </View>
  );
};

export default ProgressBarModal;