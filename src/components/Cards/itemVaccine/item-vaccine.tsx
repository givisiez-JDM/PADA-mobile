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

const ItemVaccine = (props: {
  applicationDate: string;
  scheduledDate: string;
  nameVaccine: string;
  description: string;
  // color: string;
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
        <ViewInformationDate /*colorBorderLeft={props.color}*/>
          <TextDateInformation>{props.applicationDate}</TextDateInformation>
          <TextHourInformation>{props.scheduledDate}</TextHourInformation>
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
      // typeCheck={props.color}
      />
    </>
  );
};

export default ItemVaccine;