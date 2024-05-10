import React, { useState } from "react";
import FooterCurto from "../../components/Footers/footer/footer";
import Header from "../../components/Headers/header/header";

import {
  ContainerFormPatient,
  TextButton,
  TitleForm,
  ImageLogo,
  ContainerFormInputsPatients,
  ContainerSafe,
  Scroll,
  ContainerFooterBottom,
} from "./cadastro-style";
import Button from "../../components/Buttons/button/button"

import FormPatientRecord from "../../components/Forms/form-patient-record/form-patient-record";
import { validar } from "../../config/validates";
import checkFlag from "../../assets/images/image-icons/checkflag.png";
import errorFlag from "../../assets/images/image-icons/errorflag.png";
import Logo from "../../assets/images/logo/logo.png";

import { Platform } from "react-native";
import ModalInfo from "../../components/Modals/modalInfo/modal-info";
import LoadingModal from "../../components/Bars/loadingModal/loading-modal";
import { User } from "../../service/requests";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "expo-router";
import { propsStack } from "@/src/routes/Stack/Models";

// adicionado tipagem
const PatientRecord = () => {
  const [name, setName] = useState<string>("");
  const [mail, setMail] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [repeatPass, setRepeatPass] = useState<string>("");
  const [errorName, setErrorName] = useState<string>("");
  const [errorMail, setErrorMail] = useState<string>("");
  const [errorPass, setErrorPass] = useState<string>("");
  const [errorRepeatPass, setErrorRepeatPass] = useState<string>("");
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [flag, setFlag] = useState<string>("");
  const [mesageTextModal, setMessageTextModal] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const navigation = useNavigation<propsStack>();

  const openLoading = () => {
    setLoading(true);
  };

  const closeLoading = () => {
    setLoading(false);
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleInputChange = (name: string, value: string): void => {

    if (name === "Senha") {
      setPass(value);
      setErrorPass("");
    }
    if (name === "Repetir Senha") {
      setRepeatPass(value);
      setErrorRepeatPass("");
    }
  };

  const arrayNamePlaceholder = [

    ["key", pass, "Senha", errorPass],
    ["key", repeatPass, "Repetir Senha", errorRepeatPass],
  ];

  const savePatient = async (): Promise<void> => {
    if (
      validar(
        { pass, repeatPass },
        { setErrorName, setErrorMail, setErrorPass, setErrorRepeatPass }
      )
    ) {
      const user: User = {
        name: name,
        email: mail,
        password: pass,
      };
    }
  };

  return (
    <ContainerSafe behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <Scroll>
        <Header back={true} />
        <ContainerFormPatient>
          <ImageLogo source={Logo} />
          <TitleForm>Crie sua senha</TitleForm>
          <ContainerFormInputsPatients>
            {arrayNamePlaceholder.map(
              ([icon, valueState, place, err]) => (
                <FormPatientRecord
                  iconName={icon}
                  placeholder={place}
                  handleInputChange={(text: string) => {
                    handleInputChange(place, text);
                  }}
                  state={valueState}
                  err={err}
                />
              )
            )}
          </ContainerFormInputsPatients>
          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
          >
            <Button
              buttontext="Confirmar"
            />
          </TouchableOpacity>

          <LoadingModal visible={loading} onClose={closeLoading} />
          <ModalInfo
            visible={modalVisible}
            onClose={closeModal}
            image={flag === "check" ? checkFlag : errorFlag}
            text={mesageTextModal}
          />
        </ContainerFormPatient>
        <ContainerFooterBottom>
          <FooterCurto />
        </ContainerFooterBottom>
      </Scroll>
    </ContainerSafe>
  );
};

export default PatientRecord;
