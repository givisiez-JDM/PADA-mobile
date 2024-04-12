import { FlatList, TextInput } from "react-native";
import { ContainerData, ContainerDataPatient, SubTitlePatient, SubTitlePatientAllergies, TitleDataPatient } from "./data-patient-style";
import { useState } from "react";
import BlueButton from "../../Buttons/bluebutton/BlueButton";
import { ButtonTouch } from "../../Patients/dataPatient/data-patient-style";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "@/src/routes/Stack/Models";

const DataPatient = (props: {
  name: string;
  telefone: string;
  email: string;
  data_nascimento: string;
  dosagem: string;
  alergias: string[];
  periodicidade: string;
  metodo: string;
  inicio: string;
  fim: string;
}) => {
  const navigation = useNavigation<propsStack>();

  const [editMode, setEditMode] = useState(false);

  const [editedData, setEditedData] = useState({
    name: props.name,
    telefone: props.telefone,
    email: props.email,
    data_nascimento: props.data_nascimento,
    dosagem: props.dosagem,
    alergias: props.alergias,
    periodicidade: props.periodicidade,
    metodo: props.metodo,
    inicio: props.inicio,
    fim: props.fim
  });

  const handleInputChange = (key: string, value: string) => {
    setEditedData(prevState => ({
      ...prevState,
      [key]: value
    }));
  };

  const handleEditAndSave = () => {
    editMode ? setEditMode(false) : setEditMode(true);
  };



  const itemAllergies = ({ item }: any): any => {
    return <SubTitlePatientAllergies>{item}</SubTitlePatientAllergies>;
  };

  const formatDateString = (dateString?: string) => {
    if (dateString) {
      const parts = dateString.split("-");
      if (parts.length === 3) {
        const year = parts[0];
        const month = parts[1];
        const day = parts[2];
        return `${day}/${month}/${year}`;
      }
      return JSON.stringify(dateString);
    }
    return "Data não definida"; 
  };

  const formatPhoneNumber = (phoneNumber?: string) => {
    if (phoneNumber) {
      const cleaned = ("" + phoneNumber).replace(/\D/g, "");
      const match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);

      if (match) {
        return `(${match[1]}) ${match[2]}-${match[3]}`;
      }
    }
    return JSON.stringify(phoneNumber);
  };


  return (
    <ContainerDataPatient>
      {editMode ?
        (
          <>
            <ContainerData>
              <TitleDataPatient>Nome</TitleDataPatient>
              <TextInput
                value={editedData.name}
                onChangeText={(value) => handleInputChange("name", value)} />
            </ContainerData>

            <ContainerData>
              <TitleDataPatient>Telefone</TitleDataPatient>
              <TextInput
                value={editedData.telefone}
                onChangeText={(value) => handleInputChange("telefone", value)} />
            </ContainerData>

            <ContainerData>
              <TitleDataPatient>E-mail</TitleDataPatient>
              <TextInput
                value={editedData.email}
                onChangeText={(value) => handleInputChange("email", value)} />
            </ContainerData>

            <ContainerData>
              <TitleDataPatient>Data de Nascimento</TitleDataPatient>
              <TextInput
                value={editedData.data_nascimento}
                onChangeText={(value) => handleInputChange("data_nascimento", value)} />
            </ContainerData>

            <ContainerData>
              <TitleDataPatient>Alergias</TitleDataPatient>
            </ContainerData>

            <ContainerData>
              <TitleDataPatient>Tratamento</TitleDataPatient>
              <SubTitlePatient>Duração do Tratamento</SubTitlePatient>
            </ContainerData>

            <ContainerData>
              <TitleDataPatient>Medicamento</TitleDataPatient>
              <SubTitlePatient>Nome do medicamento</SubTitlePatient>
            </ContainerData>

            <ContainerData>
              <TitleDataPatient>Método de Tratamento</TitleDataPatient>
              <SubTitlePatient>{props.metodo}</SubTitlePatient>
            </ContainerData>
            <ButtonTouch onPress={handleEditAndSave}>
              <BlueButton buttontext={"Atualizar perfil"} />
            </ButtonTouch>
          </>
        ) :
        (
          <>
            <ContainerData>
              <TitleDataPatient>Nome</TitleDataPatient>
              <SubTitlePatient>{props.name}</SubTitlePatient>
            </ContainerData>
            <ContainerData>
              <TitleDataPatient>Telefone</TitleDataPatient>
              <SubTitlePatient>{formatPhoneNumber(props.telefone)}</SubTitlePatient>
            </ContainerData>
            <ContainerData>
              <TitleDataPatient>Email</TitleDataPatient>
              <SubTitlePatient>{props.email}</SubTitlePatient>
            </ContainerData>
            <ContainerData>
              <TitleDataPatient>Data de Nascimento</TitleDataPatient>
              <SubTitlePatient>
                {formatDateString(props.data_nascimento)}
              </SubTitlePatient>
            </ContainerData>
            <ContainerData>
              <TitleDataPatient>Alergias</TitleDataPatient>
              <FlatList
                data={props.alergias}
                renderItem={itemAllergies}
                numColumns={2}
                keyExtractor={(item) => item}
              />
            </ContainerData>
            <ContainerData>
              <TitleDataPatient>Tratamento</TitleDataPatient>
              <SubTitlePatient>Duração do Tratamento</SubTitlePatient>
              <SubTitlePatient>
                Início: {formatDateString(props.inicio)}
              </SubTitlePatient>
              <SubTitlePatient>
                Fim: {formatDateString(props.fim)}
              </SubTitlePatient>
            </ContainerData>

            <ContainerData>
              <TitleDataPatient>Medicamento</TitleDataPatient>
              <SubTitlePatient>Nome do medicamento</SubTitlePatient>
            </ContainerData>
            <ContainerData>
              <TitleDataPatient>Método de Tratamento</TitleDataPatient>
              <SubTitlePatient>{props.metodo}</SubTitlePatient>
            </ContainerData>

            <ContainerData>
              <TitleDataPatient>Senha:</TitleDataPatient>
              <SubTitlePatient>****</SubTitlePatient>
              <ButtonTouch onPress={() => navigation.navigate("ChangePass")}>
                <BlueButton buttontext={"Alterar"} />
              </ButtonTouch>
            </ContainerData>

            <ButtonTouch onPress={handleEditAndSave}>
              <BlueButton buttontext={"Editar perfil"} />
            </ButtonTouch>
          </>
        )
      }


    </ContainerDataPatient>
  );
};

export default DataPatient;