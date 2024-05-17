import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        borderDefault: string,
        borderRadiusButton: string,

        colors: {
            main: string,
            secondary: string,
            white: string,
            greyWhite: string,
            lightBlue: string,
            mediumBlue: string,
            darkBlue: string,
            darkerBlue: string,
            red: string,
            green: string,
            grey: string,
        },

        textSize: {
            textDefault: string,
            title: string,
            smallTittle: string,
            smallerTittle: string,
            bigText: string,
            smallText: string,
            smallerText: string,
            legendText: string,
            dropDownText: string,
        },
        textWeight: {
            softer: string,
            soft: string,
            normal: string,
            semiBold: string,
            bold: string,
        }
        fontType: {
            main: string,
        }
    };

}