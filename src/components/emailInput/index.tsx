import { units } from '@/src/hooks/hooks';
import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface EmailInputProps {
    placeholder: string;
    onChangeText: (text: string) => void;
    value: string;
}

export const EmailInput: React.FC<EmailInputProps> = ({
    placeholder,
    onChangeText,
    value,
}) => {
    return (
        <TextInput
            style={styles.mailInput}
            onChangeText={onChangeText}
            value={value}
            placeholder={placeholder}
            placeholderTextColor="rgba(51, 76, 118, 0.6)"
        />
    );
};

interface PasswordInputProps {
    placeholder: string;
    onChangeText: (text: string) => void;
    value: string;
    showPassword: boolean;
    setShowPassword: (show: boolean) => void;
}

export const PasswordInput: React.FC<PasswordInputProps> = ({
    placeholder,
    onChangeText,
    value,
    showPassword,
    setShowPassword,
}) => {
    return (
        <TextInput
            style={styles.passInput}
            onChangeText={onChangeText}
            value={value}
            placeholder={placeholder}
            placeholderTextColor="rgba(51, 76, 118, 0.6)"
            secureTextEntry={!showPassword}
        // right={<TextInput.Icon name={showPassword? 'eye-off-outline' : 'eye'} />}
        />
    );
};


const styles = StyleSheet.create({
    mailInput: {
        width: units.vw * 80,
        height: units.vh * 6,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
    },
    passInput: {
        width: units.vw * 80,
        height: units.vh * 6,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
    },
});
