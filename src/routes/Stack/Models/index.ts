import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type propsNavigationStack = {
  LoginCadastro: undefined;
  Login?: {
    name: string;
  };
  Cadastro: undefined;
  TelaPrincipal: undefined
};

export type propsStack = NativeStackNavigationProp<propsNavigationStack>;
