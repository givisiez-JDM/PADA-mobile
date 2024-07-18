import React from "react";
import {
  Image, SafeAreaView, ScrollView,
  StyleSheet, View, Text
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { propsStack } from "@/src/routes/Stack/Models";
import InputGeral from "@/src/components/Forms/inputGeral/inputGeral";
import Button from "@/src/components/Button";
import HeaderNFooter from "@/src/components/HeaderNFooterSVG";
import { padaTheme } from "@/src/theme/pada-theme";
import { units } from "@/src/hooks/hooks";

const PassChange = () => {
  const navigation = useNavigation<propsStack>();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.subContainer}>
          <HeaderNFooter
            fill={""}
          />
          <Image source={require('../../assets/images/logo/logo.png')} style={styles.image} />
          <Text style={styles.title}>Redefinir senha</Text>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Enviaremos um código de 6 dígitos </Text>
            <Text style={styles.text}>para você no seu e-mail.</Text>
          </View>

          <InputGeral inputtext={undefined} />

          <Button text="Avançar" />
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