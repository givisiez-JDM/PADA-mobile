import { FlatList } from "react-native-gesture-handler";
import Patient from "../../assets/imgPaciente.png";
import { ContainerGrid, ImageItem, Item, TextItem } from "./grid-menu-style";
import { ImageSourcePropType } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../routes/Stack/Models";

interface Item {
  id: number;
  title: string;
  image: ImageSourcePropType;
}

const GridMenu = () => {
  const navigation = useNavigation<propsStack>();
  const data = [
    { id: 1, title: "Item 1", image: require("../../assets/imgUserItem.png") },
    { id: 2, title: "Item 2", image: require("../../assets/imgUserItem.png") },
    { id: 3, title: "Item 3", image: require("../../assets/imgUserItem.png") },
    { id: 4, title: "Item 4", image: require("../../assets/imgUserItem.png") },
    { id: 5, title: "Item 5", image: require("../../assets/imgUserItem.png") },
    { id: 6, title: "Item 6", image: require("../../assets/imgUserItem.png") },
    { id: 7, title: "Item 1", image: require("../../assets/imgUserItem.png") },
    { id: 8, title: "Item 2", image: require("../../assets/imgUserItem.png") },
    { id: 9, title: "Item 3", image: require("../../assets/imgUserItem.png") },
  ];
  const renderGridItem: React.FC<{ item: Item }> = ({ item }) => {
    return (
      <Item onPress={() => navigation.navigate("Paciente")}>
        <ImageItem source={item.image} />
        <TextItem>{item.title}</TextItem>
      </Item>
    );
  };
  return (
    <ContainerGrid>
      <FlatList
        data={data}
        renderItem={renderGridItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
      />
    </ContainerGrid>
  );
};

export default GridMenu;
