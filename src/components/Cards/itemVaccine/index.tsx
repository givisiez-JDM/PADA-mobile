import React, { useState } from "react";
import {View, Text, StyleSheet} from "react-native"
import {
  ButtonInformationVaccine,
  
  ContainerNameVaccine,
  HiddenContent,
  ImageHidden,
  TextHiddenContent,
  TextNameVaccine,
  ViewInformationDate,
  ViewItemHidden,
} from "./style";

import Hidden from "../../../assets/images/image-icons/down-filled-triangular-arrow.png";
import ModalCheckVaccines from "../../Modals/modalCheckVaccines/modal-check-vaccines";
import { TextDataVaccine } from "@/src/theme/textColor/styletextColor";

const ItemVaccine = (props: {
  applicationDate: string;
  scheduledDate: string;
  nameVaccine: string;
  description: string;
  status: string;
  colorBorderLeft: string;
  setColorBorderLeft: (color: string) => void; // Recebe a função setColorBorderLeft como prop
}) => {
  const [expanded, setExpanded] = useState(false);
  const [visible, setVisible] = useState(false);

  const onOpen = () => { setVisible(true); };

  const onClose = () => { setVisible(false); };

  const toggleExpand = () => { setExpanded(!expanded); };

 
  return (

    
  <View style={ isSelected= "aplicada"{borderLeftColor: "#5CED38"}}>
   <ButtonInformationVaccine onPress={onOpen} expanded={expanded}>
        <ViewInformationDate>
          <TextDataVaccine>{props.applicationDate ? `${props.applicationDate.split(' ')[0]}` : `data_aplicacao`}</TextDataVaccine>
          <TextDataVaccine>{props.scheduledDate ? `${props.scheduledDate.split(' ')[0]}` : `data`}</TextDataVaccine>
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
        colorBorderLeft={""}/>
  </View>
   
  );
};

export default ItemVaccine;


const styles = StyleSheet.create ({
  container: {
    backgroundColor: "red"
  }
,
  container2:{
    backgroundColor: "blue"
  }
})







