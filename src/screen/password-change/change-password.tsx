import BlueButton from "@/src/components/Buttons/bluebutton/BlueButton";
import FormPatientLoginRecord from "@/src/components/Forms/form-patient-login/form-patient-login";
import { ButtonTouch } from "@/src/components/Patients/dataPatient/data-patient-style";
import { propsStack } from "@/src/routes/Stack/Models";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Platform } from "react-native";
import { Header } from "react-native/Libraries/NewAppScreen";
import { ContainerTelaPrincipal } from "../home/telaPrincipal-style";
import { ContainerSafe, Scroll } from "../login/login-style";
import { ImageIconLogoRedefinir, TextRedefinir, ContainerFooterBottom } from "./change-password-style";
import FooterCurto from "../../components/Footers/footer/footer";
import logo from "../../assets/images/logo/logo.png";

const ChangePass = () => {
  const navigation = useNavigation<propsStack>();

  const [pass, setPass] = useState("");
  const [errorPass, setErrorPass] = useState("");

  const handleInputChange = (name: string, value: string) => {
    if (name === "Senha") {
      setPass(value);
      setErrorPass("");
    }
  };

  const arrayNamePlaceholder = [
    [pass, "Senha atual", errorPass],
    [pass, "Nova senha", errorPass],
    [pass, "Confirme senha", errorPass]
  ];

  return (
    <ContainerSafe behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <Scroll>
        <ContainerTelaPrincipal>
          <Header back={true} />
          <ImageIconLogoRedefinir source={logo} />
          <TextRedefinir>Alterar senha</TextRedefinir>

          {arrayNamePlaceholder.map(
            ([valueState, place, err]) => (
              <FormPatientLoginRecord
                placeholder={place}
                handleInputChange={(text: string) => {
                  handleInputChange(place, text);
                }}
                state={valueState}
                err={err}
                showPassword={false} />
            )
          )}

          <ButtonTouch onPress={() => navigation.navigate("Paciente")}>
            <BlueButton buttontext={"Confirmar"} />
          </ButtonTouch>

          <ContainerFooterBottom>
            <FooterCurto />
          </ContainerFooterBottom>
        </ContainerTelaPrincipal>
      </Scroll>
    </ContainerSafe>
  );
};

export default ChangePass;