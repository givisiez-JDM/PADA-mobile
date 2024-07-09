import React, { useState } from "react";
import {
  Image, SafeAreaView, ScrollView,
  StyleSheet, View, Text
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { propsStack } from "@/src/routes/Stack/Models";
import InputGeral from "@/src/components/Forms/inputGeral";
import Button from "@/src/components/Button";
import HeaderNFooter from "@/src/components/HeaderNFooterSVG";
import { padaTheme } from "@/src/theme/pada-theme";
import { units } from "@/src/hooks/hooks";
import FormPatientLoginRecord from "@/src/components/Forms/form-patient-login";

const PassChange = () => {
  const navigation = useNavigation<propsStack>();
  // const [pass, setPass] = useState("");
  // const [errorPass, setErrorPass] = useState("");

  const [actualPass, setActualPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [passConfirmation, setPassConfirmation] = useState("");
  const [errorActualPass, setErrorActualPass] = useState("");
  const [errorNewPass, setErrorNewPass] = useState("");
  const [errorPassConfirmation, setErrorPassConfirmation] = useState("");

  const handleInputChange = (name: string, value: string) => {
    if (name === "Senha atual") {
      setActualPass(value);
      setErrorActualPass("");
    } else if (name === "Nova senha") {
      setNewPass(value);
      setErrorNewPass("");
    } else if (name === "Confirme senha") {
      setPassConfirmation(value);
      if (value !== newPass) {
        setErrorPassConfirmation("As senhas não coincidem.");
      } else {
        setErrorPassConfirmation("");
      }
    }
  };

  const isValid = newPass.length > 8;

  const arrayNamePlaceholder = [
    [actualPass, "Senha atual", errorActualPass],
    [newPass, "Nova senha", errorNewPass],
    [passConfirmation, "Confirme senha", errorPassConfirmation]
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.subContainer}>
          <HeaderNFooter
            fill={""}
          />
          <Image source={require('../../assets/images/logo/logo.png')} style={styles.image} />
          <Text style={styles.title}>Alterar senha</Text>
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

          <Button text="Confirmar" onPress={() => navigation.navigate("Profile")} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PassChange;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: padaTheme.colors.main
  },
  subContainer: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: padaTheme.colors.white
  },
  title: {
    fontFamily: 'NotoSansKR-Medium',
    fontSize: 22,
    backgroundColor: padaTheme.colors.darkBlue
  },
  textContainer: {
    width: 300,
    marginTop: 20
  },
  text: {
    fontFamily: 'NotoSansKR-Thin',
    fontSize: 18,
    backgroundColor: padaTheme.colors.darkBlue
  },
  image: {
    marginTop: 150,
    marginBottom: 30
  }
})