import React, { useState, useEffect } from "react";
import { TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../routes/Stack/Models";
import {
  ButtonSenha,
  ContainerLogin,
  ContainerSafe, FooterLogin, Scroll, 
} from "./login-style";
import { ContainerFormInputsPatients } from "../password-creation/cadastro-style";
import logo from "../../assets/images/logo/logo.png";
import FormPatientLoginRecord from "../../components/Forms/form-patient-login/form-patient-login";
import CheckBox from "../../components/checkBox/checkBox";
import LoadingModal from "../../components/Bars/loadingModal/loading-modal";
import { validar } from "../../config/validates";
import { loginUser } from "../../service/requests";
import Button from "@/src/components/Buttons/button/button";

import headerImg from "../../assets/images/headerAndFooter/header/headerImg.png";
import {ImageHeader} from "../../components/Headers/header/header-style";
import Svg, { ClipPath, Defs, Path, Rect } from "react-native-svg";
import FooterCompleto from "../../assets/images/headerAndFooter/footer/FooterCompleto.svg"



interface FooterBackSVGProps {
  width: number;
  height: number;
  fill: string;
}

const FooterBackSVG: React.FC<FooterBackSVGProps> = () => {
  return (
    <Svg width="10%" height="20%" viewBox="0 0 360 160" fill="transparent">
      <Rect width="100%" height="160" fill="transparent" fillOpacity="0.5"/>
      <Rect x="-1171" y="-1175" width="7448" height="4346" fill="none" fillOpacity="0.5"/>
      <Rect x="-1171" y="-1175" width="7448" height="4346" stroke="black" strokeWidth="8"/>
      <Defs>
        <ClipPath id="clip0">
          <Rect width="100%" height="800" fill="white" transform="translate(0 -640)"/>
        </ClipPath>
      </Defs>
      <Path d="M407.581 266.754C407.581 355.801 162.281 288.85 80.1873 288.85C-40.2335 359.481 -44 121.309 -44 32.2621C67.9381 -102.729 142.48 243.084 192.335 32.2623C221.429 -90.7695 505.423 297.25 407.581 266.754Z" fill="#4C7ABB" clipPath="url(#clip0)"/>
      <Path d="M434.707 317.521C434.707 405.091 193.685 339.25 113.022 339.25C-5.29917 408.709 -9 174.491 -9 86.9214C100.986 -45.8292 92.3068 254.784 223.214 86.9215C273.157 22.8798 530.843 347.511 434.707 317.521Z" fill="#76A7ED" clipPath="url(#clip0)"/>
    </Svg>
  );
};



const PatientLogin = () => {
  const navigation = useNavigation<propsStack>();

  const [mail, setMail] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [errorMail, setErrorMail] = useState<string>("");
  const [errorPass, setErrorPass] = useState<string>("");
  const [checked, setChecked] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false);

  const arrayNamePlaceholder = [
    [mail, "E-mail", errorMail],
    [pass, "Senha", errorPass],
  ];

  const handleInputChange = (name: string, value: string) => {
    if (name === "E-mail") {
      setMail(value);
      setErrorMail("");
    }
    if (name === "Senha") {
      setPass(value);
      setErrorPass("");
    }
  };

  const openLoading = () => {
    setLoading(true);
  };

  const closeLoading = () => {
    setLoading(false);
  };

  const Logar = () => {
    if (validar({ mail, pass }, { setErrorMail, setErrorPass })) {
      console.log(mail, pass);
      loginUser(mail, pass, openLoading, closeLoading, navigation);
    }
  };

  useEffect(() => {


  }, []);

  return (
    <ContainerSafe>
      <Scroll>
      <ImageHeader source={headerImg}/>
        <ContainerLogin>
          <Image source={logo} />
          <ContainerFormInputsPatients />

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

          <CheckBox
            title="Lembrar senha"
            size="20px"
            checked={checked}
            setChecked={setChecked}
          />

          <TouchableOpacity onPress={Logar}>
            <Button
              buttontext={"Entrar"}
            />
          </TouchableOpacity >

          <LoadingModal visible={loading} onClose={closeLoading} />

          <TouchableOpacity onPress={() => navigation.navigate("RecuperacaoSenha")}>
            <ButtonSenha>Esqueceu sua senha?</ButtonSenha>
          </TouchableOpacity>
        </ContainerLogin>
      </Scroll>

  
        <FooterBackSVG width={0} height={0} fill={""}/>
      
    </ContainerSafe>
  );
};

export default PatientLogin;