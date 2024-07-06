import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from './style';

interface Props {
    type?: string;
    text: string;
    onPress?: () => void;
}

const Button: React.FC<Props> = ({ text, onPress, type }) => {
    return (
        <>
            <TouchableOpacity onPress={onPress} style={type === 'editar' ? styles.editButton : styles.button}>
                <Text style={type === 'editar' ? styles.editbuttonText : styles.buttonText}>{text}</Text>
            </TouchableOpacity>
        </>
    );
};

export default Button;