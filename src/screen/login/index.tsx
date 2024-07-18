import React, { useState } from "react";
import { TouchableOpacity, View, Image, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../routes/Stack/Models";

import { validar } from "../../config/validates";
import { loginUser } from "../../service/requests";

import FormPatientLoginRecord from "@/src/components/Forms/form-patient-login";
import LoadingModal from "@/src/components/Bars/loadingModal";
import Button from "@/src/components/Button";
import HeaderNFooter from "../../components/HeaderNFooterSVG";
import { SafeAreaView } from "react-native-safe-area-context";
import { Checkbox, HStack } from "native-base";
import { padaTheme } from "@/src/theme/pada-theme";
import { units } from "@/src/hooks/hooks";

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
    <SafeAreaView style={styles.container}>
      <HeaderNFooter
        fill={""}
      />
      <View style={styles.subContainer}>
        <Image source={require("../../assets/images/logo/logo.png")} style={{ width: 110, height: 120, marginBottom: units.vh * 2 }} />

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
        {/* checked | setchecked */}
        <HStack space={6}>
          <Checkbox value="test" accessibilityLabel="This a checkbox" >
            Lembrar senha
          </Checkbox>
        </HStack>

        <Button text={"Entrar"} onPress={Logar} />

        {/* <LoadingModal visible={loading} onClose={closeLoading} /> */}

        <TouchableOpacity onPress={() => navigation.navigate("PassRecovery")}>
          <Text style={styles.forgotPass}>Esqueceu sua senha?</Text>
        </TouchableOpacity>
      </View>


    </SafeAreaView>
  );
};

export default Login;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: padaTheme.colors.main
  },
  subContainer: {
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    gap: units.vh * 2
  },
  forgotPass: {
    fontFamily: 'NotoSansKR-Thin',
    fontSize: 16,
    color: padaTheme.colors.darkerBlue
  }
})