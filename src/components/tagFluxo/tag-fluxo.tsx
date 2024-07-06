import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../routes/Stack/Models";
import React from "react";
import { ImageSource } from "react-native-vector-icons/Icon";
import { TextCard, TitleCard } from "@/src/theme/textColor/styletextColor";
import { units } from "@/src/hooks/hooks";
import { padaTheme } from "@/src/theme/pada-theme";

interface TagFluxoProps {
  title: string;
  text: string;
  img: ImageSource;
}

const TagFluxo: React.FC<TagFluxoProps> = ({ title, text, img }) => {
  const navigation = useNavigation<propsStack>();

  const navigateScreens = () => {
    if (title === "Meu perfil") navigation.navigate("Profile");
    if (title === "Profissional de saúde") navigation.navigate("Doctor");
    if (title === "Minhas vacinas") navigation.navigate("MyVaccines");
  };

  return (
    <TouchableOpacity style={styles.container} onPress={navigateScreens}>
      <Image source={img} style={styles.icon} />
      <TitleCard>{title}</TitleCard>
      <TextCard>{text}</TextCard>
    </TouchableOpacity>
  );
};

export default TagFluxo;

const styles = StyleSheet.create({
  container: {
    width: units.vw * 30,
    height: units.vh * 22,
    marginBottom: units.vh * 4,
    marginRight: units.vw * 16,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '2%',
    paddingVertical: '5%',
    borderRadius: 20,
    backgroundColor: padaTheme.colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 8
  },
  icon: { width: '50%', height: '40%', resizeMode: 'contain' }
})