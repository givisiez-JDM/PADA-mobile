import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from './style';

interface Props {
    text: string;
    onPress?: () => void;
}

const ButtonRecover: React.FC<Props> = ({ text, onPress }) => {
    return (
        <>
            <TouchableOpacity onPress={onPress} style={styles.button}>
                <Text style={styles.buttonText}>{text}</Text>
            </TouchableOpacity>
        </>
    );
};

export default ButtonRecover;