import { useState } from "react";
import TabBar from "../../components/buttonTabBar/buttonTabBar";
import DataDoctor from "../../components/dataDoctor/data-doctor";
import HeaderFluxo from "../../components/headerFluxo/header-fluxo";
import { ContainerSafePrincipalPaciente, Scroll } from "./profissionalResponsavel-style";
import { getDataUserStorage } from "../../service/requests";

const ProfissionalResponsavel = () => {
  const data = {
    crm: "CRM -  SP 00000",
    sobre: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    especialidade: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis ",
  };
  // const [, setRoleUser] = useState("");
  // const [name, setName] = useState("");
  // getDataUserStorage({ setRoleUser, setName });
  
  return (
    <ContainerSafePrincipalPaciente>
      <Scroll>
        <HeaderFluxo title= "Dr. Antonio" backButton={true} buttonVaccine={true} typeHeader="doctor"/>
        <DataDoctor
          crm= {data.crm}
          sobre= {data.sobre}
          especialidade= {data.especialidade}/>
      </Scroll>
      <TabBar />
    </ContainerSafePrincipalPaciente>
  );
};

export default ProfissionalResponsavel;
