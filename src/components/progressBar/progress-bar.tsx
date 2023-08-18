import { ContainerComponentProgressBar, NeonSide, Progress } from "./progress-bar-style";

const ProgressBar = (props: { progress: number }) => {
  return (
    <ContainerComponentProgressBar>
      <Progress progress={props.progress}>
        <NeonSide />
      </Progress>
    </ContainerComponentProgressBar>
  );
};

export default ProgressBar;
