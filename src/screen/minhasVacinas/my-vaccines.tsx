import HeaderFluxo from "../../components/headerFluxo/header-fluxo";
import { Scroll } from "../paciente/patient-style";
import {
  ContainerItemInformationVaccine,
  ContainerVaccinesView,
} from "./my-vaccines-styles";
import { ContainerPrincipal } from "../telaPrincipal/telaPrincipal-style";
import ItemVaccine from "../../components/itemVaccine/item-vaccine";

const MyVaccines = () => {
  const array = [
    {
      data: "05 de Julho de 2023",
      time: "10:30 AM",
      nameVaccine: "Vacina 1",
      description: "Observações",
      color: "#bbf7ac",
    },
    {
      data: "12 de Julho de 2023",
      time: "11:45 AM",
      nameVaccine: "Vacina 2",
      description: "Observações",
      color: "#FCE0AA",
    },
    {
      data: "19 de Julho de 2023",
      time: "10:30 AM",
      nameVaccine: "Vacina 3",
      description:
        "Infelizmente, não pude tomar a vacina devido a questões de saúde. Estava me sentindo mal desde a ultima aplicação. Priorizei minha recuperação!",
      color: "#F19A9A",
    },
    {
      data: "26 de Julho de 2023",
      time: "10:30 AM",
      nameVaccine: "Vacina 4",
      description: "Observações",
      color: "#D2D2D2",
    },
  ];

  return (
    <ContainerVaccinesView>
      <Scroll>
        <HeaderFluxo
          title={`Olá, João`}
          backButton={true}
          buttonVaccine={false}
          typeHeader="patient"
        />
        <ContainerPrincipal>
          <ContainerItemInformationVaccine>
            {array.map((item, index) => (
              <ItemVaccine
                key={index}
                data={item.data}
                time={item.time}
                nameVaccine={item.nameVaccine}
                description={item.description}
                color={item.color}
              />
            ))}
          </ContainerItemInformationVaccine>
        </ContainerPrincipal>
      </Scroll>
    </ContainerVaccinesView>
  );
};

export default MyVaccines;

/*
 <>
                  <ViewInformationDate>
                    <TextDateInformation>
                      05 de Julho de 2023
                    </TextDateInformation>
                    <TextHourInformation>10:30 AM</TextHourInformation>
                  </ViewInformationDate>
                  <ContainerNameVaccine>
                    <TextNameVaccine>Vacina 1</TextNameVaccine>
                  </ContainerNameVaccine>
                  <ViewItemHidden>
                    <ImageHidden source={Hidden} />
                  </ViewItemHidden>
                  <HiddenContent>
                    {expanded ? "Conteúdo escondido!" : null}
                  </HiddenContent>
                </>

*/

/*
 <ButtonInformationVaccine
              onPress={toggleExpand}
              expanded={expanded}
            >
              <ViewInformationDate>
                <TextDateInformation>05 de Julho de 2023</TextDateInformation>
                <TextHourInformation>10:30 AM</TextHourInformation>
              </ViewInformationDate>
              <ContainerNameVaccine>
                <TextNameVaccine>Vacina 1</TextNameVaccine>
              </ContainerNameVaccine>
              <ViewItemHidden>
                <ImageHidden source={Hidden} expanded={expanded} />
              </ViewItemHidden>

              <HiddenContent expanded={expanded}>
                <TextHiddenContent>
                  Infelizmente, não pude tomar a vacina devido a questões de
                  saúde. Estava me sentindo mal desde a ultima aplicação.
                  Priorizei minha recuperação!
                </TextHiddenContent>
              </HiddenContent>
            </ButtonInformationVaccine>

*/
