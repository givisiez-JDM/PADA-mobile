import { useState } from "react";
import {
  ContainerIconForm,
  ContainerIconInput,
  IconForm,
  Input,
} from "./form-patient-record-style";
import Icon from "react-native-vector-icons/Ionicons";
interface PatientRecordValues {
  iconName: string;
  placeholder: string;
}

const FormPatientRecord = ({ iconName, placeholder }: PatientRecordValues) => {
  const [statePatient, setStatePatient] = useState({
    name: "",
    mail: "",
    pass: "",
    repeatPass: "",
  });

  const handleInputChange = (event: any) => {
    const value = event.target.value;
    setStatePatient({
      ...statePatient,
      [event.target.name]: value,
    });
  };

  return (
    <ContainerIconForm>
      <ContainerIconInput>
        <IconForm>
          <Icon name={iconName} size={20} color="#fff" />
        </IconForm>
      </ContainerIconInput>

      <Input
        onChangeText={handleInputChange}
        value={statePatient.name}
        placeholder={placeholder}
      />
    </ContainerIconForm>
  );
};

export default FormPatientRecord;
