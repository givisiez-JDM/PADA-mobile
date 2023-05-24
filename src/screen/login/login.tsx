import React from "react";
import {TextAcesso, ContainerMain} from "./login-style";
import logo from "../../assets/logo.png"

import { Image } from "react-native";

import ButtonLogin from "../../components/buttonLogin/buttonLogin";
import ButtonCadastrar from "../../components/buttonCadastrar/buttonCadastrar"
import Header from "../../components/header/header";
import FooterLongo from "../../components/footerLongo/footerLongo"
import logoPaciente from "../../assets/logoPaciente.png"


const Login = () => {

   return (
        <>
        <Header/>
    <ContainerMain >
      <Image source={logo}></Image>
    
      

      <ButtonCadastrar/>
     </ContainerMain>

     <FooterLongo/>
     </>
  );
};

export default Login;