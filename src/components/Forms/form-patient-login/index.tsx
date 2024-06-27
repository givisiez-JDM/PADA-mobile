import React from "react";
import { StyleSheet, View, TextInput, Text } from 'react-native';

import Icon from "react-native-vector-icons/Ionicons";
import { padaTheme } from "@/src/theme/pada-theme";
import { units } from "@/src/hooks/hooks";

interface PatientRecordValues {
  placeholder: string;
  handleInputChange: any;
  state: any;
  err: any;
  showPassword: boolean;
}

const FormPatientLoginRecord = ({ placeholder,
  handleInputChange, state, err }: PatientRecordValues) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <TextInput
          style={styles.input}
          onChangeText={handleInputChange}
          value={state}
          placeholder={placeholder}
          placeholderTextColor='rgba(51, 76, 118, 0.6)'
          secureTextEntry={!showPassword && placeholder === "Senha"}
        />
        {["Senha", "Confirme sua Senha", "Nova senha"].includes(placeholder) && (
          <Icon
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            size={25}
            color="black"
            onPress={toggleShowPassword}
            style={{ position: "absolute", right: 10, top: 11 }}
          />
        )}
      </View>

      {err !== "" && (
        <View style={styles.errorContainer}>
          <Icon name="alert-circle-outline" color="#FF0000" />
          <Text style={styles.errorText}>{err}</Text>
        </View>
      )}
    </View>
  );
};

export default FormPatientLoginRecord;

const styles = StyleSheet.create({
  container: {
    width: units.vw * 80,
    height: units.vh * 7,
    justifyContent: 'center'
  },
  containerInput: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: units.vw * 2,
    borderColor: padaTheme.colors.darkBlue,
    backgroundColor: padaTheme.colors.white,
  },
  input: {
    width: '90%',
    height: '100%',
    fontFamily: 'NotoSansKR-Thin',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    color: padaTheme.colors.darkBlue
  },
  errorContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  errorText: {
    fontFamily: 'NotoSansKR-Thin',
    fontSize: 10,
    color: padaTheme.colors.red
  }
})