import React, { useEffect, useState } from "react";
import {
  ButtonInformationVaccine,
  ContainerItemInformationVaccine,
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

import Hidden from "../../../assets/images/image-icons/down-filled-triangular-arrow.png";
import ModalCheckVaccines from "../../Modals/modalCheckVaccines/modal-check-vaccines";

const ItemVaccine = (props: {
  applicationDate: string;
  scheduledDate: string;
  nameVaccine: string;
  description: string;
  status: string;
  colorBorderLeft: string;
  setColorBorderLeft: string;
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


  const setStatusColor = (status: string) => {
    let color = '';

    if (status === 'aplicada') color = '#5CED38';
    if (status === 'aplicada em atraso') color = '#FACB71';
    if (status === 'não aplicada') color = '#E85656';
    if (status === 'agendada') color = '#B4B4B4';

    return color;
  }

  useEffect(() => {
  }, [])
  return (
    <>
      <ButtonInformationVaccine onPress={onOpen} expanded={expanded}>
        <ViewInformationDate colorBorderLeft={props.colorBorderLeft}>
          <TextDateInformation>{props.applicationDate ? `${props.applicationDate.split(' ')[0]}` : `data_aplicacao`}</TextDateInformation>
          <TextHourInformation>{props.scheduledDate ? `${props.scheduledDate.split(' ')[0]}` : `data`}</TextHourInformation>
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
        status={props.status}
      />
    </>
  );
};

export default ItemVaccine;
