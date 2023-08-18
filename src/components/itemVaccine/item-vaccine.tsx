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
import ModalCheckVaccines from "../modalCheckVaccines/modal-check-vaccines";
const ItemVaccine = (props: {
  data: string;
  time: string;
  nameVaccine: string;
  description: string;
  color: string;
}) => {
  const [expanded, setExpanded] = useState(false);
  const [visible, setVisible] = useState(false);

  const onOpen = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const toggleExpand = () => {
    setExpanded(!expanded);
  };
  return (
    <>
      <ButtonInformationVaccine onPress={onOpen} expanded={expanded}>
        <ViewInformationDate colorBorderLeft={props.color}>
          <TextDateInformation>{props.data}</TextDateInformation>
          <TextHourInformation>{props.time}</TextHourInformation>
        </ViewInformationDate>
        <ContainerNameVaccine>
          <TextNameVaccine>{props.nameVaccine}</TextNameVaccine>
        </ContainerNameVaccine>
        <ViewItemHidden onPress={toggleExpand} underlayColor="transparent">
          <ImageHidden source={Hidden} expanded={expanded} />
        </ViewItemHidden>

        <HiddenContent expanded={expanded}>
          <TextHiddenContent>{props.description}</TextHiddenContent>
        </HiddenContent>
      </ButtonInformationVaccine>
      <ModalCheckVaccines visible={visible} onClose={onClose} />
    </>
  );
};

export default ItemVaccine;
