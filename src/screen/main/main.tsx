import React from "react";
import {TextAcesso, ContainerMain} from "./main-style";
import logo from "../../assets/logo.png"

import { Image } from "react-native";
import logoMedico from "../../assets/logoMedico.png"
import CheckBox from "../../components/checkBox/checkBox";
import ButtonDoctor from "../../components/buttonDoctor/buttonDoctor";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import logoPaciente from "../../assets/logoPaciente.png"


const Login = () => {

   return (
        
    <ContainerMain >
      <Header/>
       
      <Image source={logo}></Image>
      <TextAcesso>Acesssar como</TextAcesso>
    
      <ButtonDoctor labelButton="Médico" imageButton={logoMedico}/>

      <ButtonDoctor labelButton="Paciente" imageButton={logoPaciente}/>

      <CheckBox/>
      <Footer /> 
     </ContainerMain>
    
  );
};

export default Login;