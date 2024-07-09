import { padaTheme } from "@/src/theme/pada-theme";
import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  container: {
    width: 220,
    height: 40,
    //border: 
    borderRadius: padaTheme.borderRadiusButton,
    borderColor: padaTheme.colors.secondary,
    backgroundColor: padaTheme.colors.secondary
  },
  buttonText: {
    fontFamily: 'NotoSansKR-Bold',
    fontSize: 24,
    color: padaTheme.colors.white
  }
})

export default styles;



// export const ContainerItemLegend = styled.View`
//   flex-direction: row;
//   column-gap: 5px;
//   align-items: center;
//   `;

// export const BoxLegend = styled.View<BoxLegendProps>`
//   width: 9.68px;
//   height: 9.13px;
//   background-color: ${({ color }) => color};
//   opacity: 0.6;
// `;

// export const TextItemLegend = styled.Text`
//   font-weight: 700;
//   font-size: 10px;
//   color: #273047;
// `;