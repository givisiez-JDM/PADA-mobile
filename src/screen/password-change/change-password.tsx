import BlueButton from "@/src/components/Buttons/bluebutton/BlueButton";
import FormPatientLoginRecord from "@/src/components/Forms/form-patient-login/form-patient-login";
import { ButtonTouch } from "@/src/components/Patients/dataPatient/data-patient-style";
import { propsStack } from "@/src/routes/Stack/Models";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Platform } from "react-native";
import { ContainerSafe, Scroll } from "../login/login-style";
import { ImageIconLogoRedefinir, TextRedefinir, ContainerFooterBottom, TextPass, ContainerMain, ContainerTextPass } from "./change-password-style";
import logo from "../../assets/images/logo/logo.png";

const ChangePass = () => {
  const navigation = useNavigation<propsStack>();

  const [passAtual, setPassAtual] = useState("");
  const [novaPass, setNovaPass] = useState("");
  const [confirmarPass, setConfirmarPass] = useState("");
  const [errorPassAtual, setErrorPassAtual] = useState("");
  const [errorNovaPass, setErrorNovaPass] = useState("");
  const [errorConfirmarPass, setErrorConfirmarPass] = useState("");

  const handleInputChange = (name: string, value: string) => {
    if (name === "Senha atual") {
      setPassAtual(value);
      setErrorPassAtual("");
    } else if (name === "Nova senha") {
      setNovaPass(value);
      setErrorNovaPass("");
    } else if (name === "Confirme senha") {
      setConfirmarPass(value);
      if (value !== novaPass) {
        setErrorConfirmarPass("As senhas não coincidem.");
      } else {
        setErrorConfirmarPass("");
      }
    }
  };

  const isNovaSenhaValida = novaPass.length > 8;

  const arrayNamePlaceholder = [
    [passAtual, "Senha atual", errorPassAtual],
    [novaPass, "Nova senha", errorNovaPass],
    [confirmarPass, "Confirme senha", errorConfirmarPass]
  ];

  return (
    <ContainerSafe behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <Scroll>
        <ContainerMain>
          <ImageIconLogoRedefinir source={logo} />
          <TextRedefinir>Alterar senha</TextRedefinir>

          {arrayNamePlaceholder.map(([valueState, place, err], index) => (
            <React.Fragment key={index}>
              <FormPatientLoginRecord
                placeholder={place}
                handleInputChange={(text: string) => {
                handleInputChange(place, text);
                }}
                state={valueState}
                err={err}
                showPassword={false}
              />
              {index === 1 && (
                <React.Fragment>

                <ContainerTextPass>
                <TextPass style={{ color: isNovaSenhaValida ? "#4C7ABB" : "#FF0000" }}>
                  A senha deve ter no mínimo 8 caracteres.
                </TextPass>
                    <TextPass style={{ color: /[A-Z]/.test(novaPass) ? "#4C7ABB" : "#FF0000" }}>
                      A senha deve ter pelo menos uma letra maiúscula.
                    </TextPass>
                    <TextPass style={{ color: /[a-z]/.test(novaPass) ? "#4C7ABB" : "#FF0000" }}>
                      A senha deve ter pelo menos uma letra minúscula.
                    </TextPass>
                    <TextPass style={{ color: /[!@#$%^&*(),.?":{}|<>]/.test(novaPass) ? "#4C7ABB" : "#FF0000" }}>
                      A senha deve ter pelo menos um símbolo. Ex: ! # $ % & + -@ ? : ; = | \
                    </TextPass>
                    <TextPass style={{ color: /[0-9]/.test(novaPass) ? "#4C7ABB" : "#FF0000" }}>
                      A senha deve ter pelo menos um número.
                    </TextPass>
                    </ContainerTextPass>
                </React.Fragment>
              )}
            </React.Fragment>
          ))}

          <ButtonTouch onPress={() => navigation.navigate("Paciente")}>
            <BlueButton buttontext={"Confirmar"} />
          </ButtonTouch>

          <ContainerFooterBottom></ContainerFooterBottom>
        </ContainerMain>
      </Scroll>
    </ContainerSafe>
  );
};

export default ChangePass;
