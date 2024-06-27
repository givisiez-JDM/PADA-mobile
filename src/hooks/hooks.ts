import { Dimensions } from "react-native";

export const useUnits = () => {
    const { width, height } = Dimensions.get('window');
    const units = {
        vw: width / 100,
        vh: height / 100,
    };
    return units;
};

const unitsFunction = () => {
    const { width, height } = Dimensions.get('window');
    const units = {
        vw: width / 100,
        vh: height / 100,
    };
    return units;
};

export const units: { vw: number, vh: number } = unitsFunction();