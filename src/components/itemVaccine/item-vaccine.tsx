import { useState } from "react";
import {
  ButtonInformationVaccine,
  ContainerNameVaccine,
  HiddenContent,
  ImageHidden,
  TextDateInformation,
  TextHiddenContent,
  TextHourInformation,
  TextNameVaccine,
  ViewInformationDate,
  ViewItemHidden,
} from "./item-vaccine-style";
import Hidden from "../../assets/down-filled-triangular-arrow.png";
const ItemVaccine = (props: {
  data: string;
  time: string;
  nameVaccine: string;
  description: string;
  color: string;
}) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };
  return (
    <ButtonInformationVaccine onPress={toggleExpand} expanded={expanded}>
      <ViewInformationDate colorBorderLeft={props.color}>
        <TextDateInformation>{props.data}</TextDateInformation>
        <TextHourInformation>{props.time}</TextHourInformation>
      </ViewInformationDate>
      <ContainerNameVaccine>
        <TextNameVaccine>{props.nameVaccine}</TextNameVaccine>
      </ContainerNameVaccine>
      <ViewItemHidden>
        <ImageHidden source={Hidden} expanded={expanded} />
      </ViewItemHidden>

      <HiddenContent expanded={expanded}>
        <TextHiddenContent>{props.description}</TextHiddenContent>
      </HiddenContent>
    </ButtonInformationVaccine>
  );
};

export default ItemVaccine;
