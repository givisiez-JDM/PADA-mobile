import React from "react";
import {
  ContainerEnviaremos,
  ImageIconLogoRedefinir,
  SubtittleRedefinePass,
  TitleRedefinePass,
} from "./redefinirSenha-style";
import logo from "../../assets/images/logo/logo.png";
import { useNavigation } from "@react-navigation/native";
import InputGeral from "../../components/Forms/inputGeral/inputGeral";
import { Platform, SafeAreaView, ScrollView, Text, View } from "react-native";
import { propsStack } from "@/src/routes/Stack/Models";
import Button from "@/src/components/Button"
import HeaderNFooter from "../../components/HeaderNFooterSVG";


const PassRedefine = () => {
  const navigation = useNavigation<propsStack>();

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <HeaderNFooter fill={""} />
          <ImageIconLogoRedefinir source={logo} />
          <View>
            <Text>Redefinir senha</Text>
            <Text>Enviaremos um código de 6 dígitos para você no seu e-mail.</Text>
          </View>

          <InputGeral inputtext={'Email'} />
          <Button text={'Avançar'} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PassRedefine;
