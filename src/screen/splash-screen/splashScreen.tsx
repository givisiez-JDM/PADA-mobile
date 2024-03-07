import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { useEffect } from 'react';
import { useNavigation } from "@react-navigation/native";
import { propsStack } from '../../routes/Stack/Models';
import { SafeAreaView } from 'react-native-safe-area-context';
import FooterSplashUp from '../../components/Footers/footerSplashUp/footerSplashUp';
import { ImageFooterSplashDown } from '../../components/Footers/footerSplashDown/footerSplashDown-style';
import { ContainerSplashScreen, ViewSplash } from './splashScreen-style';
import FooterSplashDown from '../../components/Footers/footerSplashDown/footerSplashDown';
import Loading from '../../components/Bars/loading/loading';

const SplashScreen: React.FC = () => {
  const navigation = useNavigation<propsStack>();

  useEffect(() => {

    setTimeout(() => {
      navigation.navigate("Login");
    }, 3000);
  }, []);

  return (
    <SafeAreaView>
      <ContainerSplashScreen>
        <FooterSplashUp />
        <ViewSplash>
          <ActivityIndicator size="large" style={{ transform: [{ scaleX: 3 }, { scaleY: 3 }] }} color="#76A7ED" />
        </ViewSplash>
        {/* <Loading /> */}
        <FooterSplashDown />
      </ContainerSplashScreen>
    </SafeAreaView>
  );
};

export default SplashScreen;
