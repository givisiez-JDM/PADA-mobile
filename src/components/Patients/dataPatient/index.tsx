import React, { useState } from "react";
import { FlatList, View, StyleSheet, Text, TextInput } from "react-native";

import { BaseText, BoldTextTitle } from "@/src/theme/textColor/styletextColor";
import { units } from "@/src/hooks/hooks";
import Button from "../../Button";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "@/src/routes/Stack/Models";
import { padaTheme } from "@/src/theme/pada-theme";

interface TData {
  name: string;
  phone: string;
  email: string;
  birthDate: string;
  dosage: string;
  allergies: string[];
  frequency: string;
  method: string;
  startTreatment: string;
  endTreatment: string;
}

interface InfoDataProps {
  title: string;
  text?: string;
  textSecondary?: string;
  editMode?: boolean;
  data?: string;
  onChangeText?: Function;
}
const InfoData: React.FC<InfoDataProps> = ({ title, text, textSecondary, editMode, data, onChangeText }) => {
  return (
    <>
      {editMode ?
        (<View style={styles.infoContainer}>
          <BoldTextTitle>{title}</BoldTextTitle>
          <TextInput
            style={{ backgroundColor: padaTheme.colors.white, height: 40, borderRadius: 18 }}
            value={data}
            onChangeText={() => onChangeText} />
        </View>)
        :
        (<View style={styles.infoContainer}>
          <BoldTextTitle>{title}</BoldTextTitle>
          <BaseText>{text}</BaseText>
          {textSecondary && (<BaseText>{textSecondary}</BaseText>)}
        </View>)
      }
    </>
  )
}
const DataPatient: React.FC<TData> = ({ name, phone, email, birthDate, dosage, allergies,
  frequency, method, startTreatment, endTreatment }) => {
  const navigation = useNavigation<propsStack>();

  const [editMode, setEditMode] = useState(false);

  const [editedData, setEditedData] = useState({
    name: name,
    telefone: phone,
    email: email,
    data_nascimento: birthDate,
  });

  // const itemAllergies = ({ item }) => {
  //   return <Text>{item}</Text>;
  // };

  const formatDateString = (dateString: string) => {
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
    return "Data não definida"; // ou qualquer valor padrão desejado
  };

  const formatPhoneNumber = (phoneNumber: string) => {
    const cleaned = ("" + phoneNumber).replace(/\D/g, "");
    const match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);

    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }

    return JSON.stringify(phoneNumber);
  };



  const handleInputChange = (key: string, value: string) => {
    setEditedData(prevState => ({
      ...prevState,
      [key]: value
    }));
  };

  const handleEditAndSave = () => {
    setEditMode(!editMode);
  };

  return (
    <>
      {editMode ?
        (
          <View style={styles.container} >
            <InfoData
              editMode
              title="Nome"
              data={name}
              onChangeText={(value: string) => handleInputChange("name", value)}
            />
            <InfoData
              editMode
              title="Telefone"
              data={phone}
              onChangeText={(value: string) => handleInputChange("telefone", value)}
            />
            <InfoData
              editMode
              title="Email"
              data={email}
              onChangeText={(value: string) => handleInputChange("email", value)}
            />
            <InfoData
              editMode
              title="Data de Nascimento"
              data={formatDateString(birthDate)}
              onChangeText={(value: string) => handleInputChange("data_nascimento", value)}
            />
            <View style={{ flexDirection: 'row', marginTop: 10 }}>
              <InfoData title="Senha: ********" />
              <Button type={'editar'} text={"Alterar"} onPress={() => navigation.navigate("PassChange")} />
            </View>
            <Button type={'editar'} text={"Atualizar perfil"} onPress={handleEditAndSave} />
          </View >

        )
        :
        (
          <View style={styles.container}>
            <InfoData title="Nome" text={name} />
            <InfoData title="Telefone" text={formatPhoneNumber(phone)} />
            <InfoData title="Email" text={email} />
            <InfoData title="Data de Nascimento" text={formatDateString(birthDate)} />
            <InfoData title="Dosagem do Medicamento" text={dosage} />
            <InfoData title="Alergias" text={'alergias'} />
            <InfoData title="Periodicidade do Tratamento" text={frequency} />
            <InfoData title="Método de Tratamento" text={method} />
            <InfoData title="Duração do Tratamento"
              text={`Início: ${formatDateString(startTreatment)}`}
              textSecondary={`Fim: ${formatDateString(endTreatment)}`}
            />
            <InfoData title="Senha: ********" />
            <Button type={'editar'} text={"Editar perfil"} onPress={handleEditAndSave} />
          </View>
        )
      }
    </>
  );
};

export default DataPatient;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: units.vw * 70,
    alignSelf: 'center',
  },
  infoContainer: {
    // flex: 1,
  }
})