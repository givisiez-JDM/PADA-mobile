import React, { useState } from "react";
import {
  ContainerBackFluxo,
  ContainerHeaderFluxo,
  IconButtonNextVaccine,
  IconTime,
  ImagePerson,
  ContainerHeaderInformationDoctor,
  ContainerInfoDoctor,
  ContainerImageDoctor,
  ImageDoctor,
  ContainerSubtitles,
} from "./style";
import {
  Platform, SafeAreaView, StatusBar,
  StyleSheet, TextInput, TouchableOpacity, View, Image
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../routes/Stack/Models";
import storePatient from "../../store/storePatient";
import {
  SubTitleHeaderFluxo, SubtitlePrincipal,
  SubtitleText, TextHeaderTitle, TitleHeaderVaccines,
  TitleHeaderDoctor,
  TitleHeaderFluxo,
  TextDataPatient
} from "@/src/theme/textColor/styletextColor";
import DateTimePicker, { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import { units } from "@/src/hooks/hooks";
import { padaTheme } from "@/src/theme/pada-theme";

interface HeaderProps {
  type?: string;
  title?: string;
  backButton?: boolean;
  vaccineButton?: boolean;
  photo?: any;
}
const Header: React.FC<HeaderProps> = ({ type, title, backButton, vaccineButton, photo }) => {
  const navigation = useNavigation<propsStack>();
  const patient: any = storePatient.getState();

  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [inputValue, setInputValue] = useState<string>("Data");

  const handleInputClick = () => {
    setShowPicker(true);
  };

  const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    const currentDate = selectedDate || date;

    setShowPicker(Platform.OS === 'ios');
    setDate(currentDate);
    setInputValue(currentDate.toLocaleDateString());
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />

      {backButton && (
        <ContainerBackFluxo onPress={() => navigation.goBack()}>
          <Icon name="chevron-back-outline" color="#000" />
        </ContainerBackFluxo>
      )}

      {type === "doctor" && (
        <ContainerHeaderFluxo>
          <ContainerHeaderInformationDoctor>
            <TitleHeaderDoctor>Profissional responsável</TitleHeaderDoctor>
            <ContainerInfoDoctor>
              <ContainerImageDoctor>
                <ImageDoctor
                  source={
                    photo
                      ? { uri: `data:image/jpeg;base64,${photo}` }
                      : require('../../assets/images/image-icons/imgUserItem.png')}
                />
              </ContainerImageDoctor>
              <ContainerSubtitles>
                <TextHeaderTitle>{title}</TextHeaderTitle>
                <SubtitleText>Clínico Geral</SubtitleText>
              </ContainerSubtitles>
            </ContainerInfoDoctor>
          </ContainerHeaderInformationDoctor>
        </ContainerHeaderFluxo>
      )}


      {type === "patient" && (
        <View style={styles.patientContainer}>
          <View style={styles.patientTopContainer}>
            <ImagePerson
              source={
                photo
                  ? { uri: `data:image/jpeg;base64,${photo}` }
                  : require('../../assets/images/image-icons/imgUserItem.png')} />
            <View>
              <TitleHeaderFluxo>{title}</TitleHeaderFluxo>
              <View style={{ width: '50%' }}>
                <SubtitlePrincipal>
                  Sua próxima consulta está agendada para:
                </SubtitlePrincipal>
              </View>
              <View style={styles.scheduleContainer}>
                <Image source={require('../../assets/images/image-icons/calendar.png')} />
                <TextDataPatient>A agendar</TextDataPatient>
              </View>
              <View style={styles.containerBtns}>
                <View style={styles.nextVaccineBtn}>
                  <SubtitlePrincipal>
                    Sua próxima vacina: 01/05
                    {/* {patient.vaccinesInfo[0].scheduledDate.split(' ')[0]} */}
                  </SubtitlePrincipal>
                  <IconButtonNextVaccine>
                    <Icon name="chevron-back-outline" color="#000" />
                  </IconButtonNextVaccine>
                </View>

                <TouchableOpacity style={styles.rememberBtn} activeOpacity={0.5}  >
                  <SubtitlePrincipal>Lembrar</SubtitlePrincipal>
                  <IconTime source={require('../../assets/images/image-icons/time.png')} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      )}

      {type === "vaccines" && (
        <View style={styles.vaccinesContainer}>
          <View style={styles.vaccineTopContainer}>
            <ImagePerson
              source={
                photo
                  ? { uri: `data:image/jpeg;base64,${photo}` }
                  : require('../../assets/images/image-icons/imgUserItem.png')} />
            <TitleHeaderFluxo>{title}</TitleHeaderFluxo>
          </View>
          <View style={styles.vaccineBottomContainer}>
            <TitleHeaderVaccines>Busque em seu histórico:</TitleHeaderVaccines>
            <TouchableOpacity onPress={handleInputClick}>
              <View style={styles.inputWrapper}>
                <Icon
                  name="search"
                  size={25}
                  color="rgba(54, 69, 79, 0.7)"
                  style={{ marginLeft: 5 }}
                />
                <TextInput
                  value={inputValue}
                  placeholder="Data"
                  style={styles.input}
                // onChange={}
                />
                <Icon
                  name="calendar"
                  size={25}
                  color="rgba(54, 69, 79, 0.7)"
                // style={{ marginRight: 10 }}
                />
              </View>
            </TouchableOpacity>
            {showPicker && (
              <DateTimePicker
                value={date}
                mode={"date"}
                display="default"
                onChange={onChange} />
            )}
          </View>
        </View>
      )}


      {type === "patient-profile" && (
        <View style={styles.profileContainer}>
          <ImagePerson
            source={
              photo
                ? { uri: `data:image/jpeg;base64,${photo}` }
                : require('../../assets/images/image-icons/imgUserItem.png')}
            style={styles.img}
          />
          <View style={styles.textContainer}>
            <TextHeaderTitle>{title}</TextHeaderTitle>
            <TouchableOpacity onPress={() => navigation.navigate('MyVaccines')}>
              <SubTitleHeaderFluxo>
                Histórico de vacinas
              </SubTitleHeaderFluxo>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignSelf: 'center',
    marginBottom: units.vh * 2,
    borderBottomRightRadius: 18,
    borderBottomLeftRadius: 18,
    backgroundColor: padaTheme.colors.secondary
  },
  patientContainer: {
    marginTop: units.vh * 2,
    flexDirection: 'row',
    paddingHorizontal: '5%',
    paddingVertical: '5%',
  },
  vaccinesContainer: {
    paddingHorizontal: '5%',
  },
  vaccineTopContainer: {
    flexDirection: 'row',
    marginTop: units.vh * 4,
    alignItems: 'center',
    gap: 10
  },
  scheduleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6
  },
  containerBtns: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  nextVaccineBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    width: '42%',
    paddingHorizontal: '5%',
    borderRadius: 10,
    backgroundColor: 'rgba(118, 167, 237, 0.6)'
  },
  rememberBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    width: '30%',
    borderRadius: 16,
    backgroundColor: padaTheme.colors.green,
  },
  profileContainer: {
    width: '100%',
    height: units.vh * 22,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '5%',
    gap: 8
  },
  textContainer: {
    alignItems: 'center',
    marginTop: units.vh * 8,
    marginBottom: units.vh * 6,
    gap: 12,
    borderBottomWidth: 2,
    borderBottomColor: padaTheme.colors.white
  },
  img: {
    width: 100,
    height: 100
  },
  patientTopContainer: {
    flexDirection: 'row',
    gap: 10,
    marginTop: units.vh * 2
  },
  vaccineBottomContainer: {
    width: '100%',
    height: '22%',
  },
  inputWrapper: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    borderRadius: units.vw * 2,
    backgroundColor: '#DADADA',
  },
  input: {
    width: '70%',
    height: units.vh * 7,
    color: 'rgba(39, 48, 71, 0.5)'
  }
})