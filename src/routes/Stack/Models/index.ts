import { NativeStackNavigationProp } from "@react-navigation/native-stack"

export type propsNavigationStack = {
  LoginCadastro: undefined
  Login?: {
    name: string
  } 
}

export type propsStack = NativeStackNavigationProp<propsNavigationStack>