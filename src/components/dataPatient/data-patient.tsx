import { FlatList } from 'react-native';
import {
    ButtonPatient,
    ContainerData,
    ContainerDataPatient,
    SubTitlePatient,
    SubTitlePatientAllergies,
    TextButtonPatient,
    TitleDataPatient,
} from './data-patient-style';

interface TData {
    name: string;
    telephone: string;
    email: string;
    data_nascimento: string;
    dosagem: string;
    alergias: string[];
    periodicidade: string;
    metodo: string;
    inicio: string;
    fim: string;
}

const DataPatient = (props: {
    name: string;
    telefone: string;
    email: string;
    data_nascimento: string;
    dosagem: string;
    alergias: string[];
    periodicidade: string;
    metodo: string;
    inicio: string;
    fim: string;
}) => {
    const itemAllergies = ({ item }: any): any => {
        return <SubTitlePatientAllergies>{item}</SubTitlePatientAllergies>;
    };

    const formatDateString = (dateString: string) => {
        const parts = dateString.split('-');
        if (parts.length === 3) {
            const year = parts[0];
            const month = parts[1];
            const day = parts[2];
            return `${day}/${month}/${year}`;
        }
        return JSON.stringify(dateString);
    };

    const formatPhoneNumber = (phoneNumber: string) => {
        const cleaned = ('' + phoneNumber).replace(/\D/g, '');
        const match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);

        if (match) {
            return `(${match[1]}) ${match[2]}-${match[3]}`;
        }

        return JSON.stringify(phoneNumber);
    };

    return (
        <ContainerDataPatient>
            <ContainerData>
                <TitleDataPatient>Nome</TitleDataPatient>
                <SubTitlePatient>{props.name}</SubTitlePatient>
            </ContainerData>
            <ContainerData>
                <TitleDataPatient>Telefone</TitleDataPatient>
                <SubTitlePatient>
                    {formatPhoneNumber(props.telefone)}
                </SubTitlePatient>
            </ContainerData>
            <ContainerData>
                <TitleDataPatient>Email</TitleDataPatient>
                <SubTitlePatient>{props.email}</SubTitlePatient>
            </ContainerData>
            <ContainerData>
                <TitleDataPatient>Data de Nascimento</TitleDataPatient>
                <SubTitlePatient>{props.data_nascimento}</SubTitlePatient>
            </ContainerData>
            <ContainerData>
                <TitleDataPatient>Dosagem do Medicamento</TitleDataPatient>
                <SubTitlePatient>{props.dosagem}</SubTitlePatient>
            </ContainerData>
            <ContainerData>
                <TitleDataPatient>Alergias</TitleDataPatient>
                <FlatList
                    data={props.alergias}
                    renderItem={itemAllergies}
                    numColumns={2}
                    keyExtractor={(item) => item}
                />
            </ContainerData>
            <ContainerData>
                <TitleDataPatient>Periodicidade do Tratamento</TitleDataPatient>
                <SubTitlePatient>{props.periodicidade}</SubTitlePatient>
            </ContainerData>
            <ContainerData>
                <TitleDataPatient>Método de Tratamento</TitleDataPatient>
                <SubTitlePatient>{props.metodo}</SubTitlePatient>
            </ContainerData>
            <ContainerData>
                <TitleDataPatient>Duração do Tratamento</TitleDataPatient>
                <SubTitlePatient>Início: {props.inicio}</SubTitlePatient>
                <SubTitlePatient>Fim: {props.fim}</SubTitlePatient>
            </ContainerData>
        </ContainerDataPatient>
    );
};

export default DataPatient;
