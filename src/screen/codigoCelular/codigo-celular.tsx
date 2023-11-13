import { Platform } from "react-native";
import {
  ButtonAdvanced,
  CodeInput,
  ContainerCode,
  ContainerFooterBottom,
  ContainerInformationCodigo,
  ContainerMain,
  ContainerSafe,
  Scroll,
  SubTitleInformationCodigo,
  TextButtonAdvanced,
  TitleInformationCodigo,
  TitleMainCodigo,
} from "./codigo-celular-style";
import Header from "../../components/header/header";
import FooterCodigoCelular from "../../components/footerCodigoCelular/footer-codigo-celular";
import { useRef, useState } from "react";

const CodigoCelular = () => {
  const [codes, setCodes] = useState(["", "", "", "", "", "", "", ""]);
  const codeInputs = useRef(Array(8).fill(null));

  const handleCodeChange = (text: string, index: number) => {
    if (/^\d?$/.test(text)) {
      const newCodes = [...codes];
      newCodes[index] = text;
      setCodes(newCodes);

      if (text !== "" && index < 7) {
        codeInputs.current[index + 1].focus();
      }
    }
  };

  return (
    <ContainerSafe behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <Header back={true} />
      <ContainerMain>
        <TitleMainCodigo>Código de Confirmação</TitleMainCodigo>

        <ContainerInformationCodigo>
          <TitleInformationCodigo>Insira o código</TitleInformationCodigo>
          <SubTitleInformationCodigo>
            Insira o código de login de 8 dígitos que enviamos para o seu número
            com final 0000.
          </SubTitleInformationCodigo>

          <ContainerCode>
            {codes.map((code: any, index) => (
              <CodeInput
                key={index}
                value={code}
                onChangeText={(text: any) => handleCodeChange(text, index)}
                keyboardType="default"
                maxLength={1}
                ref={(input: any) => (codeInputs.current[index] = input)}
                autoFocus={index === 0}
              />
            ))}
          </ContainerCode>

          <ButtonAdvanced>
            <TextButtonAdvanced>Avançar</TextButtonAdvanced>
          </ButtonAdvanced>
        </ContainerInformationCodigo>
      </ContainerMain>
      <ContainerFooterBottom>
        <FooterCodigoCelular />
      </ContainerFooterBottom>
    </ContainerSafe>
  );
};
/**<ContainerFooterBottom>
          <FooterCodigoCelular />
        </ContainerFooterBottom> */
export default CodigoCelular;
