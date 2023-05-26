import React, { Fragment } from "react";
import { Text } from "react-native";
import HeaderFluxo from "../../components/headerFluxo/header-fluxo";

const telaPrincipal = () => {
  return (
    <Fragment>
      <HeaderFluxo title="Bem vinda !" subtitle="Olá, Amanda Costa" />
    </Fragment>
  );
};

export default telaPrincipal;
