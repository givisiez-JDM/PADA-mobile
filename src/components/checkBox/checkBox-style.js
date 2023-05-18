import styled from 'styled-components/native';

export const ContainerViewCheckBox = styled.TouchableHighlight`
    display: flex;
    flex-direction: row;
    column-gap: 10px;
    align-items: center;
    margin-top: 32px;
    margin-bottom: 60px;
`;

export const ButtonViewCheckBox = styled.View`
    display: flex;
    flex-direction: row;
    column-gap: 10px;
    justify-content: center;
    align-items: center;
`;

export const Check = styled.View`
    width: 15px;
    height: 15px;
    border-width: 1px;
    border-radius: 2px;
    justify-content: center;
    align-items: center;
    border-color: ${({ checked }) => (checked ? '#334C76' : '#4C7ABB')};
    background: ${({ checked }) => (checked ? '#334C76' : '#f5f5f5')};
    
`;

export const TitleCheck = styled.Text`
    color: #334c76;
    font-size: 18px;
    font-weight: 300;
`;
