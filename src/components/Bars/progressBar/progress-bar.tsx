import React from "react";
import {
  ContainerComponentProgressBar,
  NeonSide,
  Progress,
} from "./progress-bar-style";

const ProgressBar = (props: { progress: number; width: string }) => {
  return (
    <ContainerComponentProgressBar style={{ width: `${props.width}` }}>
      <Progress progress={props.progress}>
        <NeonSide />
      </Progress>
    </ContainerComponentProgressBar>
  );
};

export default ProgressBar;
