import { units } from "@/src/hooks/hooks";
import { padaTheme } from "@/src/theme/pada-theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button: {
    width: units.vw * 60,
    height: units.vh * 7,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: units.vh * 4,
    backgroundColor: padaTheme.colors.secondary
  },
  buttonText: {
    fontFamily: 'NotoSansKR-Bold',
    fontSize: 24,
    lineHeight: 34,
    color: padaTheme.colors.white
  }
})

export default styles;