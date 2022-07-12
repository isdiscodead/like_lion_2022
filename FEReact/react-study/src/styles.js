import { createGlobalStyle } from 'styled-components'; // 전역에 일관성 있는 스타일 적용

//yarn add styled-reset
import reset from 'styled-reset'; // 브라우저 기본 디자인 없애기

export const lightTheme = {
    bgColor: '#f5f5f5',
    fontColor: '#2c2c2c'
};

export const darkTheme = {
    fontColor: 'white',
    bgColor: '#2c2c2c'
};

export const GlobalStyles = createGlobalStyle`
    ${reset}
`;
