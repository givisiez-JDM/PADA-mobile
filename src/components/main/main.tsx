import React from "react";
import {TextAcesso, ContainerMain} from "./main-style";
import logo from "../../assets/logo.png"

import { Dimensions, Image, Text, View } from "react-native";
import { TextButton } from "../buttonDoctor/buttonDoctor-style";
import logoMedico from "../../assets/logoMedico.png"
import CheckBox from "../checkBox/checkBox";
import ButtonDoctor from "../buttonDoctor/buttonDoctor";
import Header from "../header/header";
import Footer from "../footer/footer";
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