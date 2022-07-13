import React, { useState } from "react";

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

// Theme 관련
import { darkTheme, lightTheme, GlobalStyles } from './styles';
import { ThemeProvider } from 'styled-components';

function App() {

    // 게시글 배열
    const initialPostList = [
        {id:1, title:"우리집 고양이 츄르를 좋아해", repleCount:1},
        {id:2, title:"할 일은 왜 줄어들지가 않냐??", repleCount:3},
        {id:3, title:"집에 보내주세요 ...", repleCount:12},
    ];

    // 게시글 개수
    let postCount = initialPostList.length;

    // 다크모드 구분 변수
    const [darkMode, setDarkMode] = useState(false);
    // 로딩 중 여부
    const [loading, setLoading] = useState(false);
    // 포스트 존재 여부
    const [isPost, setIsPost] = useState(true);
    const [postList, setPostList] = useState(initialPostList);

    const addPost = () => {
        postCount += 1;
        setPostList((postList) => [
            ...postList, {id: postCount, title: '강의 언제 다 보냐...', repleCount: 6},
        ])
    }
    return <>
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <GlobalStyles/>
            <MediaDiv>
                <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
                <Main>
                    <Slogun/>
                    <ShowPostList loading={loading} isPost={isPost} postList={postList} addPost={addPost}/>
                </Main>
                
                <Footer/>
            </MediaDiv>
        </ThemeProvider>
    </>;
}

export default App;
