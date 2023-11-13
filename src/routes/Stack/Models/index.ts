import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type propsNavigationStack = {
  LoginCadastro: undefined;
  Login?: {
    name: string;
  };
  Cadastro: undefined;
  TelaPrincipal: undefined;
  TabRoutes: undefined;
  ListaPacientes: undefined;
  MeuPerfil: undefined;
  Paciente: undefined;
  ProfissionalResponsavel: undefined;
  MyVaccines: undefined;
  SplashScreen: undefined;
  CodePhone: undefined;
  TelaSucesso: undefined;
  RecuperacaoSenha: undefined;
};

export type propsStack = NativeStackNavigationProp<propsNavigationStack>;
