import Icon from "react-native-vector-icons/Ionicons";
import {
  ContainerAddPatient,
  ContainerImageAddPatient,
  TextAddPatient,
} from "./add-patient-style";

const AddPatient = () => {
  return (
    <ContainerAddPatient>
      <ContainerImageAddPatient>
        <Icon name="add-outline" color="#000" size={40} />
      </ContainerImageAddPatient>
      <TextAddPatient>CONVIDAR PACIENTE</TextAddPatient>
    </ContainerAddPatient>
  );
};

export default AddPatient;
