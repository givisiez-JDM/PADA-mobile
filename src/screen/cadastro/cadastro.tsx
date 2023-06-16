import { useEffect, useState } from "react";
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
} from "./cadastro-style";

import FormPatientRecord from "../../components/form-patient-record/form-patient-record";
import { validar } from "../../config/validates";
import checkFlag from "../../assets/checkflag.png";
import errorFlag from "../../assets/errorflag.png";
import Logo from "../../assets/logo.png";

import { Platform } from "react-native";
import apiPADA from "../../service/api";
import ModalInfo from "../../components/modalInfo/modal-info";
import LoadingModal from "../../components/loadingModal/loading-modal";

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
  const [loading, setLoading] = useState(false);
  const [mesageTextModal, setMessageTextModal] = useState("");

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
    if (name === "Nome de usuário") {
      setName(value);
      setErrorName("");
    }
    if (name === "E-mail") {
      setMail(value);
      setErrorMail("");
    }
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
    ["person", name, "Nome de usuário", errorName],
    ["mail", mail, "E-mail", errorMail],
    ["key", pass, "Senha", errorPass],
    ["key", repeatPass, "Repetir Senha", errorRepeatPass],
  ];

  const savePatient = async () => {
    if (
      validar(
        { name, mail, pass, repeatPass },
        { setErrorName, setErrorMail, setErrorPass, setErrorRepeatPass }
      )
    ) {
      try {
        /*openLoading();
        setTimeout(() => {
          closeLoading();
          openModal();
        }, 5000);*/

        await apiPADA
          .post("/doctor", {
            name: name,
            email: mail,
            password: pass,
            role: "doctor",
            created_At: new Date().toISOString(),
          })
          .then((response: any) => {
            setTimeout(() => {
              closeLoading();
              setMessageTextModal("Sucesso!");
              openModal();
            }, 5000);

            setName("");
            setMail("");
            setPass("");
            setRepeatPass("");
          })
          .catch((err: unknown) => {
            console.log(err);
          });
      } catch (error: unknown) {
        console.log(error);
      }
    }
  };

  return (
    <ContainerSafe behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <Scroll>
        <Header back={true} />
        <ContainerFormPatient>
          <ImageLogo source={Logo} />
          <TitleForm>Crie sua conta</TitleForm>
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
            <TextButton>Cadastre-se</TextButton>
          </Button>
          <LoadingModal visible={loading} onClose={closeLoading} />
          <ModalInfo
            visible={modalVisible}
            onClose={closeModal}
            image={checkFlag}
            text={mesageTextModal}
          />
        </ContainerFormPatient>

        <FooterCurto />
      </Scroll>
    </ContainerSafe>
  );
};

export default PatientRecord;
