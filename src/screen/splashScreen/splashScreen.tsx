import {ActivityIndicator, StyleSheet, View} from 'react-native';
import { useEffect } from 'react';
import { useNavigation } from "@react-navigation/native";
import { propsStack } from '../../routes/Stack/Models';
import { SafeAreaView } from 'react-native-safe-area-context';
import FooterSplashUp from '../../components/footerSplashUp/footerSplashUp';
import { ImageFooterSplashDown } from '../../components/footerSplashDown/footerSplashDown-style';
import { ContainerSplashScreen, ViewSplash } from './splashScreen-style';
import FooterSplashDown from '../../components/footerSplashDown/footerSplashDown';
import Loading from '../../components/loading/loading';

const SplashScreen: React.FC = () => {
const navigation = useNavigation<propsStack>();

    useEffect(() => {
 
        setTimeout(() => {
            navigation.navigate("LoginCadastro");
        }, 3000);
    }, []);

    return (
      <SafeAreaView>
        <ContainerSplashScreen>
          <FooterSplashUp/>
          <ViewSplash>
          <ActivityIndicator size="large" style={{ transform: [{ scaleX: 3 }, { scaleY: 3 }] }}  color="#76A7ED" />
          </ViewSplash>
          {/* <Loading /> */}
          <FooterSplashDown />
        </ContainerSplashScreen>
        </SafeAreaView>
    );
};

export default SplashScreen;
