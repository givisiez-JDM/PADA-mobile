import React, { useState } from "react";
import { TouchableOpacity, View, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../routes/Stack/Models";

import { validar } from "../../config/validates";
import { loginUser } from "../../service/requests";

import {
  ButtonSenha
} from "./login-style";

import FormPatientLoginRecord from "@/src/components/Forms/form-patient-login/form-patient-login";
import LoadingModal from "@/src/components/Bars/loadingModal/loading-modal";
import Button from "@/src/components/Button/button";
import HeaderNFooter from "../../components/HeaderNFooterSVG/headerNfooterSVG";
import { SafeAreaView } from "react-native-safe-area-context";
import { Checkbox, HStack } from "native-base";

const Login = () => {
  const navigation = useNavigation<propsStack>();

  const [mail, setMail] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [errorMail, setErrorMail] = useState<string>("");
  const [errorPass, setErrorPass] = useState<string>("");
  const [checked, setChecked] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false);

  const arrayNamePlaceholder = [
    [mail, "E-mail", errorMail],
    [pass, "Senha", errorPass],
  ];

  const handleInputChange = (name: string, value: string) => {
    if (name === "E-mail") {
      setMail(value);
      setErrorMail("");
    }
    if (name === "Senha") {
      setPass(value);
      setErrorPass("");
    }
  };

  const openLoading = () => {
    setLoading(true);
  };

  const closeLoading = () => {
    setLoading(false);
  };

  const Logar = () => {
    if (validar({ mail, pass }, { setErrorMail, setErrorPass })) {
      console.log(mail, pass);
      loginUser(mail, pass, openLoading, closeLoading, navigation);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <HeaderNFooter
          fill={""}
        />
        <Image source={require("../../assets/images/logo/logo.png")} />

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

        <HStack space={6}>
          <Checkbox value="test" accessibilityLabel="This a checkbox">
            Lembrar senha
          </Checkbox>
        </HStack>

        <Button buttontext={"Entrar"} onPress={() => Logar} />

        <LoadingModal visible={loading} onClose={closeLoading} />

        <TouchableOpacity onPress={() => navigation.navigate("PassRecovery")}>
          <ButtonSenha>Esqueceu sua senha?</ButtonSenha>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
};

export default Login;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  }
})