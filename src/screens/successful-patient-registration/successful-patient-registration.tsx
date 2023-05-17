import { Fragment } from "react";
import {
  ButtonLogin,
  CheckImgae,
  ContainerSuccess,
  TextLogin,
  TextTitle,
} from "./successful-patient-registration-style";
import Check from "../../assets/iconcheck.png";
const SuccessfulPatientRegistration = () => {
  return (
    <Fragment>
      <ContainerSuccess>
        <CheckImgae source={Check} />
        <TextTitle>Cadastro realizado com sucesso!</TextTitle>
        <ButtonLogin>
          <TextLogin>Entrar</TextLogin>
        </ButtonLogin>
      </ContainerSuccess>
    </Fragment>
  );
};

export default SuccessfulPatientRegistration;
