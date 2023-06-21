import React from "react";
import {
  ContainerErrorText,
  ContainerFormPatientRecord,
  ContainerIconInput,
  ContainerInput,
  ContainerLogin,
  Input,
  InputText,
} from "./form-patient-login-style";
import Icon from "react-native-vector-icons/Ionicons";
import { Image, Text } from "react-native";
import { ImageSource } from "react-native-vector-icons/Icon";
import { ButtonImageIcon } from "../buttonLogin/buttonLogin-style";
import { ImageLogo } from "../buttonEmailSenha/buttonEmailSenha-style";

interface PatientRecordValues {
  placeholder: string;
  handleInputChange: any;
  state: any;
  err: any;
  imageButton: ImageSource;
}

const FormPatientLoginRecord = ({
  imageButton,
  placeholder,
  handleInputChange,
  state,
  err,
}: PatientRecordValues) => {
  return (
    <ContainerFormPatientRecord>
    

          
        
        
        <ContainerLogin>

          <ImageLogo>
          <Image source={imageButton}></Image>
          </ImageLogo>
 <Input
          onChangeText={handleInputChange}
          value={state}
          placeholder={placeholder} 
          
         
        >

          
        </Input>
        </ContainerLogin>

       

         

{err !== "" && (
        <ContainerErrorText>
          <Icon name="alert-circle-outline" color="#FF0000" />
          <InputText>{err}</InputText>
        </ContainerErrorText>
      )}

     

      
    </ContainerFormPatientRecord>
  );
};

export default FormPatientLoginRecord;

/*
<ContainerIconInput>
          <ButtonImageIcon>
            <ImageLogo>
              <Image source={imageButton}></Image>
            </ImageLogo>
          </ButtonImageIcon>
        </ContainerIconInput>
        <Input
          onChangeText={handleInputChange}
          value={state}
          placeholder={placeholder}
          secureTextEntry={placeholder === "Senha" ? true : false}
        />

*/
