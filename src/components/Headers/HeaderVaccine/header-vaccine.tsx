import React, { useState } from "react";
import {
  ContainerBackFluxo,
  ContainerHeaderVaccineFluxo,
  ContainerImagePerson,
  ContainerInputVaccines,
  ImagePerson,
  InputCalendarVaccines,
  InputWrapper,
  MainContainerVaccine,
  TitleHeaderFluxo,
  TitleHeaderVaccines,
} from "./header-vaccine-style";
import { Platform, StatusBar, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../../routes/Stack/Models";
import Person from "../../../assets/image-icons/imgUserItem.png";
import { ContainerSafeHeader } from "../HeaderHome/header-home-style";

import Calendar from "../../../assets/image-icons/calendar.png";
import Time from "../../../assets/image-icons/time.png";
import RNDateTimePicker, { DateTimePickerEvent } from "@react-native-community/datetimepicker";


const HeaderVaccine = (props: {
  title: string | undefined;
  backButton: boolean;
  buttonVaccine: boolean;
  typeHeader: "patient";
  photo?: any;
}) => {
  const navigation = useNavigation<propsStack>();
  const [date, setDate] = useState<Date | string>("");
  const [showPicker, setShowPicker] = useState(false);
  const [inputValue, setInputValue] = useState<string>("Data");

  const handleInputClick = () => {
    setShowPicker(true);
  };

  const onChange = (event: DateTimePickerEvent, selectedDate?: Date | undefined) => {
    const currentDate = selectedDate || date;
    setShowPicker(Platform.OS === 'ios'); // Hide the picker in iOS
    setDate(currentDate);
    setInputValue(currentDate.toLocaleString());
  };

  return (
    <ContainerSafeHeader>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <ContainerHeaderVaccineFluxo>
        {props.backButton === true ? (
          <ContainerBackFluxo onPress={() => navigation.goBack()}>
            <Icon name="chevron-back-outline" color="#000" />
          </ContainerBackFluxo>
        ) : null}
        <ContainerImagePerson>
          <ImagePerson source={
            props.photo ? { uri: `data:image/jpeg;base64,${props.photo}` } : Person}
          />
          <TitleHeaderFluxo>{props.title}</TitleHeaderFluxo> 
          </ContainerImagePerson>
          <ContainerInputVaccines>
            <TitleHeaderFluxo>{props.title}</TitleHeaderFluxo>
            <TitleHeaderVaccines>
              Busque em seu histórico
            </TitleHeaderVaccines>
            <TouchableOpacity onPress={handleInputClick}>
            <InputWrapper>
              <IconWrapper>
                <Icon
                  name="search"
                  size={25}
                  color="#36454F"
                  style={{ marginLeft: 5 }}
                />
              </IconWrapper>
              <InputCalendarVaccines
               value={inputValue}
               placeholder="Data"
               placeholderTextColor="#A9A9A9" />
              <ImageCalendar source={Calendar} />
              <IconWrapperCalendar>
                <Icon
                  name="calendar"
                  size={25}
                  color="#36454F"
                  style={{ marginRight: 10 }}  />
              </IconWrapperCalendar>
            </InputWrapper>
            </TouchableOpacity>
            {showPicker && (
            <RNDateTimePicker
            value={date}
            mode="date"
            display="default"
            onChange={onChange}/>
)}
          </ContainerInputVaccines>
      </ContainerHeaderVaccineFluxo>
    </ContainerSafeHeader>
};

export default HeaderVaccine;
