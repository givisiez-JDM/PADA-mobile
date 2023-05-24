import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type propsNavigationStack = {
  LoginCadastro: undefined;
  Login?: {
    name: string;
  };
  Cadastro: undefined;
};

export type propsStack = NativeStackNavigationProp<propsNavigationStack>;
