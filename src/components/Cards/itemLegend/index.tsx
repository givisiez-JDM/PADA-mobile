import React from "react";
import styles from './style';
import { View, Text } from "react-native";

interface BoxLegendProps {
  text?: string;
  color?: string
}

const ItemLegend: React.FC<BoxLegendProps> = ({ text, color }) => {
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: color }}></View>
      <Text>{text}</Text>
    </View>
  );
};

export default ItemLegend;
