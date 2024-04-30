import React from "react";
import {
  BoxLegend,
  ContainerItemLegend,
  TextItemLegend,
} from "./item-legend-style";

const ItemLegend = (props: { text: string; color: string }) => {
  return (
    <ContainerItemLegend>
      <BoxLegend style={{ color: `${props.color}` }} />
      <TextItemLegend>{props.text}</TextItemLegend>
    </ContainerItemLegend>
  );
};

export default ItemLegend;