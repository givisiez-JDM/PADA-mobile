import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { useEffect } from 'react';
import { useNavigation } from "@react-navigation/native";
import { propsStack } from '../../routes/Stack/Models';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ContainerSplashScreen, ViewSplash } from './style';
import React from 'react';

const SplashScreen: React.FC = () => {
  const navigation = useNavigation<propsStack>();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Login");
    }, 2000);
  }, []);

  return (
    <SafeAreaView>
      <ContainerSplashScreen>
        <ViewSplash>
          <ActivityIndicator />
        </ViewSplash>
      </ContainerSplashScreen>
    </SafeAreaView>
  );
};

export default SplashScreen;
