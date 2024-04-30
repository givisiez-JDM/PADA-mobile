import React, { useEffect, useState } from "react";
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
} from "../../Cards/itemVaccine/item-vaccine-style";

import Hidden from "../../../assets/images/image-icons/down-filled-triangular-arrow.png";
import ModalCheckVaccines from "../../Modals/modalCheckVaccines/modal-check-vaccines";

const ItemVaccine = (props: {
  applicationDate: string;
  scheduledDate: string;
  nameVaccine: string;
  description: string;
  status: string;
}) => {
  const [expanded, setExpanded] = useState(false);
  const [colorBorderLeft, setColorBorderLeft] = useState("#B4B4B4");
  const [isModalVisible, setIsModalVisible] = useState(false);
  

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const handleStatusChange = (color: string) => {
    setColorBorderLeft(color);
  };

  return (
    <>
      <ButtonInformationVaccine
        onPress={toggleModal}
        expanded={expanded}
        style={{ borderLeftColor: colorBorderLeft }}
      >
        <ViewInformationDate colorBorderLeft={colorBorderLeft}>
          <TextDateInformation>
            {props.applicationDate
              ? `${props.applicationDate.split(" ")[0]}`
              : `data_aplicacao`}
          </TextDateInformation>
          <TextHourInformation>
            {props.scheduledDate
              ? `${props.scheduledDate.split(" ")[0]}`
              : `data`}
          </TextHourInformation>
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
        onClose={toggleModal}
        status={props.status}
        handleStatusChange={handleStatusChange} 
        visible={isModalVisible} />
    </>
  );
};

export default ItemVaccine;
