import { Fragment, useState } from "react";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Icon from "react-native-vector-icons/Ionicons";
import {
  Button,
  ButtonViewCheckBox,
  Check,
  TitleCheck,
  ContainerFormPatient,
  ContainerIconForm,
  ContainerIconInput,
  ContainerViewCheckBox,
  IconForm,
  Input,
  TextButton,
  TitleForm,
} from "./patient-record-style";
import { Text, TouchableOpacity, View } from "react-native";

const PatientRecord = () => {
  const [checked, setChecked] = useState(false);
  const [statePatient, setStatePatient] = useState({
    name: "",
    mail: "",
    pass: "",
    repeatPass: "",
  });

  const handleInputChange = (event: any) => {
    const value = event.target.value;
    setStatePatient({
      ...statePatient,
      [event.target.name]: value,
    });
  };

  const handleCheckbox = () => {
    setChecked(!checked);
  };

  return (
    <Fragment>
      <Header status={false} />
      <ContainerFormPatient>
        <TitleForm>Crie sua conta</TitleForm>

        <ContainerIconForm>
          <ContainerIconInput>
            <IconForm>
              <Icon name="person" size={20} color="#fff" />
            </IconForm>
          </ContainerIconInput>

          <Input
            onChangeText={handleInputChange}
            value={statePatient.name}
            placeholder="Nome de usuário"
          />
        </ContainerIconForm>

        <ContainerIconForm>
          <ContainerIconInput>
            <IconForm>
              <Icon name="mail" size={20} color="#fff" />
            </IconForm>
          </ContainerIconInput>

          <Input
            onChangeText={handleInputChange}
            value={statePatient.mail}
            placeholder="E-mail"
          />
        </ContainerIconForm>

        <ContainerIconForm>
          <ContainerIconInput>
            <IconForm>
              <Icon name="key" size={20} color="#fff" />
            </IconForm>
          </ContainerIconInput>

          <Input
            onChangeText={handleInputChange}
            value={statePatient.pass}
            placeholder="Senha"
          />
        </ContainerIconForm>

        <ContainerIconForm>
          <ContainerIconInput>
            <IconForm>
              <Icon name="key" size={20} color="#fff" />
            </IconForm>
          </ContainerIconInput>

          <Input
            onChangeText={handleInputChange}
            value={statePatient.repeatPass}
            placeholder="Repetir Senha"
          />
        </ContainerIconForm>
        <ContainerViewCheckBox onPress={handleCheckbox}>
          <ButtonViewCheckBox>
            <Check checked={checked}>
              {checked && (
                <Icon name="checkmark-outline" size={15} color="#fff" />
              )}
            </Check>
            <TitleCheck>Lembre da senha</TitleCheck>
          </ButtonViewCheckBox>
        </ContainerViewCheckBox>
        <Button>
          <TextButton>Cadastre-se</TextButton>
        </Button>
      </ContainerFormPatient>
      <Footer />
    </Fragment>
  );
};

export default PatientRecord;
