import { Image } from 'react-native';
import splash from '../../assets/splash.gif';
import { useEffect } from 'react';
import { useNavigation } from "@react-navigation/native";
import { propsStack } from '../../routes/Stack/Models';
import { SafeAreaView } from 'react-native-safe-area-context';
import FooterSplashUp from '../../components/footerSplashUp/footerSplashUp';
import { ImageFooterSplashDown } from '../../components/footerSplashDown/footerSplashDown-style';
import { ContainerSplashScreen } from './splashScreen-style';
import FooterSplashDown from '../../components/footerSplashDown/footerSplashDown';
import Loading from '../../components/loading/loading';

const SplashScreen: React.FC = () => {
const navigation = useNavigation<propsStack>();

    // useEffect(() => {
 
    //     setTimeout(() => {
    //         navigation.navigate("LoginCadastro");
    //     }, 3000);
    // }, []);

    return (
      <SafeAreaView>
        <ContainerSplashScreen>
          <FooterSplashUp/>
          <Loading />
          <FooterSplashDown />
        </ContainerSplashScreen>
        </SafeAreaView>
    );
};

export default SplashScreen;
