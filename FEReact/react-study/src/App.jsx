import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

// 작성한 styled components
import {
    Main,
    MediaDiv,
} from './styledComponent';

// 묶어서 분리한 Component들
import Header from './Header';
import Slogun from './Slogun';
import ShowPostList from "./ShowPostList";
import Footer from './Footer';
import ShowPost from "./ShowPost";
import WritePost from "./WritePost";

// Theme 관련
import { darkTheme, lightTheme, GlobalStyles } from './styles';
import { ThemeProvider } from 'styled-components';

// api 주소
const API_URL = "https://reactapitest.pythonanywhere.com/api/" 

function App() {
    // 다크모드 구분 변수
    const [darkMode, setDarkMode] = useState(false);

    return <>
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <GlobalStyles/>
            <MediaDiv>
                <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
                <Main>
                    <Slogun/>
                    <Routes>
                        <Route path="/" element={ <ShowPostList apiUrl={API_URL} /> }>
                        </Route>
                        <Route path="/write" element={<WritePost apiUrl={API_URL}/>}></Route>
                        <Route path="/post/:postID" element={<ShowPost apiUrl={API_URL}/>}></Route>
                    </Routes>
                    
                </Main>
                
                <Footer/>
            </MediaDiv>
        </ThemeProvider>
    </>;
}

export default App;
