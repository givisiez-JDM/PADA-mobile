import React, { useState } from 'react';
import { FlatList, View, Text } from 'react-native';
import { ContainerData, ContainerDataPatient, SubTitlePatient, SubTitlePatientAllergies, TitleDataPatient, ButtonTouch, InputEdit } from './data-patient-style';
import BlueButton from '../../Buttons/bluebutton/BlueButton';
import { useNavigation } from '@react-navigation/native';
import { propsStack } from '@/src/routes/Stack/Models';

const DataPatient = (props) => {
  const navigation = useNavigation<propsStack>();
  const [editMode, setEditMode] = useState(false);
  const [editedData, setEditedData] = useState({
    name: props.name,
    telefone: props.telefone,
    email: props.email,
    data_nascimento: props.data_nascimento,
  });

  const handleInputChange = (key, value) => {
    setEditedData(prevState => ({
      ...prevState,
      [key]: value
    }));
  };

  const handleEditAndSave = () => {
    setEditMode(!editMode);
  };

  const itemAllergies = ({ item }) => {
    return <SubTitlePatientAllergies>{item}</SubTitlePatientAllergies>;
  };

  const formatDateString = (dateString) => {
    if (dateString) {
      const parts = dateString.split("-");
      if (parts.length === 3) {
        const year = parts[0];
        const month = parts[1];
        const day = parts[2];
        return `${day}/${month}/${year}`;
      }
      return dateString;
    }
    return "Data não definida"; 
  };

  const formatPhoneNumber = (phoneNumber) => {
    if (phoneNumber) {
      const cleaned = ("" + phoneNumber).replace(/\D/g, "");
      const match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);

      if (match) {
        return `(${match[1]}) ${match[2]}-${match[3]}`;
      }
    }
    return phoneNumber;
  };

  return (
    <ContainerDataPatient>
      {editMode ? (
        <>
          <ContainerData>
            <TitleDataPatient>Nome</TitleDataPatient>
            <InputEdit
              value={editedData.name}
              onChangeText={(value) => handleInputChange("name", value)}
            />
          </ContainerData>
          <ContainerData>
            <TitleDataPatient>Telefone</TitleDataPatient>
            <InputEdit
              value={editedData.telefone}
              onChangeText={(value) => handleInputChange("telefone", value)}
            />
          </ContainerData>
          <ContainerData>
            <TitleDataPatient>E-mail</TitleDataPatient>
            <InputEdit
              value={editedData.email}
              onChangeText={(value) => handleInputChange("email", value)}
            />
          </ContainerData>
          <ContainerData>
            <TitleDataPatient>Data de Nascimento</TitleDataPatient>
            <InputEdit
              value={editedData.data_nascimento}
              onChangeText={(value) => handleInputChange("data_nascimento", value)}
            />
          </ContainerData>
          <ButtonTouch onPress={handleEditAndSave}>
            <BlueButton buttontext={"Atualizar perfil"} />
          </ButtonTouch>
        </>
      ) : (
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
          {!editMode && props.alergias.length > 0 && (
            <ContainerData>
              <TitleDataPatient>Alergias</TitleDataPatient>
              <FlatList
                data={props.alergias}
                renderItem={itemAllergies}
                numColumns={2}
                keyExtractor={(item) => item}
              />
            </ContainerData>
          )}
          {!editMode && (
            <>
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
                <SubTitlePatient>{props.dosagem}</SubTitlePatient>
              </ContainerData>
              <ContainerData>
                <TitleDataPatient>Método de Tratamento</TitleDataPatient>
                <SubTitlePatient>{props.metodo}</SubTitlePatient>
              </ContainerData>
            </>
          )}
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
      )}
    </ContainerDataPatient>
  );
};

export default DataPatient;
