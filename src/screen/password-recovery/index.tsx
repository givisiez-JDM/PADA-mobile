import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../routes/Stack/Models";
import { validar } from "@/src/config/validates";
import HeaderNFooter from "../../components/HeaderNFooterSVG";
import FormPatientLoginRecord from "@/src/components/Forms/form-patient-login";
import Button from "@/src/components/Button";


const PassRecovery = () => {
  const navigation = useNavigation<propsStack>();
  const [pass, setPass] = useState<string>("");
  const [repeatPass, setRepeatPass] = useState<string>("");
  const [errorPass, setErrorPass] = useState<string>("");

  const arrayNamePlaceholder = [
    [pass, "Senha", errorPass],
    [repeatPass, "Confirme sua Senha", errorPass]
  ];

  const handleInputChange = (name: string, value: string) => {
    if (name === "Senha") {
      setPass(value);
      setErrorPass("");
    }
    if (name === "Confirme sua Senha") {
      setRepeatPass(value);
      setErrorPass("");
    }

    if (validar({ pass }, { setErrorPass }) && pass === repeatPass) {
      navigation.navigate("Login")
    } else {
      console.log('senhas não conferem')
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <HeaderNFooter fill={""} />

        <Text style={styles.title}>Recuperação de senha</Text>
        <Text style={styles.subtitle}>Crie sua nova senha abaixo</Text>

        {arrayNamePlaceholder.map(
          ([valueState, place, err]) => (
            <FormPatientLoginRecord
              placeholder={place}
              handleInputChange={(text: string) => {
                handleInputChange(place, text);
              }}
              state={valueState}
              err={err}
              showPassword={false} />
          )
        )}

        <Button text="Continuar" />

      </View>

    </SafeAreaView>
  );
};

export default PassRecovery;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: '500',
    color: '#334c76',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '300',
    color: '#334c76',
    marginBottom: 40
  }
})