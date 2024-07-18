/*import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { useEffect } from 'react';
import { useNavigation } from "@react-navigation/native";
import { propsStack } from '../../routes/Stack/Models';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ContainerSplashScreen, ViewSplash } from './splashScreen-style';
import React from 'react';
import HeaderNFooterSplash from '@/src/assets/images/splashImage/HeanderNFooter';
import ConfirmationCode from '../confirmation-code/confirmation'

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
      <HeaderNFooterSplash/>
        <ViewSplash>
            <ActivityIndicator />
        </ViewSplash>
       
      </ContainerSplashScreen>
    </SafeAreaView>
  );
};

export default SplashScreen; */

import HeaderNFooter from "../../components/HeaderNFooterSVG";
import React, {useState} from 'react';
import {SafeAreaView, Text, StyleSheet, Platform} from 'react-native';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

import ButtonRecover from "@/src/components/ButtonRecover";

const CELL_COUNT = 6;

const ConfirmationCode = () => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <SafeAreaView style={styles.root}>
      <HeaderNFooter fill={""} />
      <Text style={styles.title2}>Insira o código</Text>
      <Text style={styles.title3}>Insira o código de login de 6 dígitos que enviamos para o seu e-mail</Text>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        autoComplete={Platform.select({ android: 'sms-otp', default: 'one-time-code' })}
        testID="my-code-input"
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
      <ButtonRecover text={'Avançar'} />
    </SafeAreaView>
  );
};

export default ConfirmationCode;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor:"#E1E0E0"
  },
  title2: {
    textAlign: 'center',
    fontSize: 22,
    color: '#334C76',
    paddingBottom: 20,
    paddingTop: 70,
  },
  title3: {
    textAlign: 'center',
    fontSize: 16,
    color: '#334C76',
    paddingBottom: 20,
    width: 280,
    marginLeft: 60,
  },
  codeFieldRoot: {
    marginTop: 20,
    marginBottom: 30,
    marginLeft: 50,
    marginRight: 50
  },
  cell: {
    width: 30,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    textAlign: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#273047',
    backgroundColor: "#E1E0E0"
  },
  focusCell: {
    borderBottomColor: '#273047', 
  },
});

