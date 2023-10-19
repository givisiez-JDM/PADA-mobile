import { useState } from "react";
import FooterCurto from "../../components/footer/footer";
import Header from "../../components/header/header";

import {
  Button,
  ContainerFormPatient,
  TextButton,
  TitleForm,
  ImageLogo,
  ContainerFormInputsPatients,
  ContainerSafe,
  Scroll,
  ContainerFooterBottom,
} from "./cadastro-style";

import FormPatientRecord from "../../components/form-patient-record/form-patient-record";
import { validar } from "../../config/validates";
import checkFlag from "../../assets/checkflag.png";
import errorFlag from "../../assets/errorflag.png";
import Logo from "../../assets/logo.png";

import { Platform } from "react-native";
import ModalInfo from "../../components/modalInfo/modal-info";
import LoadingModal from "../../components/loadingModal/loading-modal";
import { User, createUser } from "../../service/requests";

const PatientRecord = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const [repeatPass, setRepeatPass] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorMail, setErrorMail] = useState("");
  const [errorPass, setErrorPass] = useState("");
  const [errorRepeatPass, setErrorRepeatPass] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [flag, setFlag] = useState("");
  const [mesageTextModal, setMessageTextModal] = useState("");
  const [loading, setLoading] = useState(false);

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

  const handleInputChange = (name: string, value: string) => {
   
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

  const savePatient = async () => {
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
      createUser(
        user,
        {
          setFlag,
          setPass,
          setRepeatPass,
          setMessageTextModal,
        },
        openLoading,
        closeLoading,
        openModal
      );
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
              ([icon, valueState, place, err], index: number) => (
                <FormPatientRecord
                  iconName={icon}
                  placeholder={place}
                  handleInputChange={(text: string) => {
                    handleInputChange(place, text);
                  }}
                  state={valueState}
                  err={err}
                  key={index}
                />
              )
            )}
          </ContainerFormInputsPatients>
          <Button
            onPress={() => {
              savePatient();
            }}
          >
            <TextButton>Confirmar</TextButton>
          </Button>
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
