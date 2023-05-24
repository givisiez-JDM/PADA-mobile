import React from "react";
import {TextAcesso, ContainerMain} from "./loginCadastro-style";
import logo from "../../assets/logo.png"
import { Image } from "react-native";
import ButtonLogin from "../../components/buttonLogin/buttonLogin";
import ButtonCadastrar from "../../components/buttonCadastrar/buttonCadastrar"
import Header from "../../components/header/header";
import FooterLongo from "../../components/footerLongo/footerLongo"
import Login from "../login/login"


const LoginCadastro = () => {

   return (
        <>


        <Header/>
    <ContainerMain >
      <Image source={logo}></Image>
    
      <ButtonLogin/>

      <ButtonCadastrar/>
     </ContainerMain>

     <FooterLongo/>
     </>
  );
};

export default LoginCadastro;