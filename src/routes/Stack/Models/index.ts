import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type propsNavigationStack = {
  Login?: {
    name: string;
  };
  Home: undefined;
  Profile: undefined;
  Doctor: undefined;
  SplashScreen: undefined;
  MyVaccines: undefined;
  PassCreation: undefined;
  PassChange: undefined;
  PassRedefine: undefined;
  PassRecovery: undefined;
  NewPassSuccess: undefined;
  TabRoutes: undefined;
  // CodePhone: undefined;
};

export type propsStack = NativeStackNavigationProp<propsNavigationStack>;
