import { DefaultTheme } from 'styled-components';


const padaTheme: DefaultTheme = {
    borderDefault: 2,
    borderRadiusButton: 50,

    colors: {
        main: '#E3E3E3',
        secondary: '#4C7ABB',
        white: '#FFFFFF',
        greyWhite: '#FBFBFB',
        lightBlue: '#76A7ED',
        mediumBlue: '#7EB2FF',
        darkBlue: '#334C76',
        darkerBlue: '#273047',
        red: '#FF0000',
        green: '#49895B',
        grey: '#D1D1D1',
    },

    textSize: {
        textDefault: '16px',
        title: '20px',
        smallTittle: '18px',
        smallerTittle: '15px',
        bigText: '22px',
        smallText: '14px',
        smallerText: '12px',
        legendText: '12px',
        dropDownText: '10px',
    },
    textWeight: {
        softer: '300',
        soft: '350',
        normal: '400',
        semiBold: '500',
        bold: '700',
    },
    fontType: {
        main: 'Noto Sans KR'
    }

};



export { padaTheme };