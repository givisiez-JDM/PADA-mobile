import React from "react";
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

import Hidden from "../../../assets/image-icons/down-filled-triangular-arrow.png";
import ModalCheckVaccines from "../../Modals/modalCheckVaccines/modal-check-vaccines";
import { Colors } from "react-native/Libraries/NewAppScreen";

const ItemVaccine = (props: {
  data: string;
  time: string;
  nameVaccine: string;
  description: string;
  color: string;
  status: string;
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
          <ViewItemHidden onPress={toggleExpand}>
            <ImageHidden source={Hidden} expanded={expanded} />
          </ViewItemHidden>
        </ContainerNameVaccine>

        <HiddenContent expanded={expanded}>
          <TextHiddenContent>{props.description}</TextHiddenContent>
        </HiddenContent>
      </ButtonInformationVaccine>
      <ModalCheckVaccines
        visible={visible}
        onClose={onClose}
        typeCheck={props.color}
        status={props.status}
      />
    </>
  );
};

export default ItemVaccine;