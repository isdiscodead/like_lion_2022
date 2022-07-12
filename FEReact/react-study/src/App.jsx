// 작성한 styled components
import {
    EachPostLi,
    Footer,
    FooterBig,
    FooterSmall,
    Header,
    LoadingDiv,
    LoadingImg,
    Main,
    MediaDiv,
    PagenumberDiv,
    PagingSection,
    PostLink,
    PostListDiv,
    PostRepl,
    PostSection,
    PostTitle,
    PostTitleDiv,
    SlogunBig,
    SlogunSection,
    SlogunSmall,
    SubHeaderDiv,
    TitleBig,
    TitleLogoDiv,
    TitleSmall,
} from './styledComponent';


// 아이콘 import 
// yarn add @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome @fortawesome/fontawesome-svg-core @fortawesome/free-brands-svg-icons
import {
    faSun,
    faMoon,
    faArrowsRotate,
    faPenToSquare,
    faLocationPin,
    faArrowLeft,
    faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { darkTheme, lightTheme, GlobalStyles } from './styles';
import { ThemeProvider } from 'styled-components';

// 로딩 아이콘
import loadingIcon from './loading.svg';


function App() {
    // 다크모드 구분 변수
    const darkMode = true;
    // 로딩 중 여부
    const loading = true;
    // 포스트 존재 여부
    const isPost = false;

    return <>
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <GlobalStyles/>
            <MediaDiv>
                <Header>
                    <TitleLogoDiv>
                        <TitleBig>멋사</TitleBig>
                        <TitleSmall>익명 게시판</TitleSmall>
                    </TitleLogoDiv>
                    <SubHeaderDiv>
                        { darkMode ? <div><FontAwesomeIcon icon={faSun}/></div> : <div><FontAwesomeIcon icon={faMoon}/></div> }
                    </SubHeaderDiv>
                </Header>

                <Main>
                    <SlogunSection>
                        <SlogunBig>HACK YOUR LIFE</SlogunBig>
                        <SlogunSmall>내 아이디어를 내 손으로 실현한다.</SlogunSmall>
                    </SlogunSection>

                    <PostSection>
                        <PostTitleDiv>
                            <FontAwesomeIcon icon={faArrowsRotate}/>
                            <PostTitle>익명 게시판</PostTitle>
                            <FontAwesomeIcon icon={faPenToSquare}/>
                        </PostTitleDiv>

                        <PostListDiv>
                            { loading ? (
                                <LoadingDiv>
                                    <LoadingImg src={loadingIcon}/>
                                </LoadingDiv>
                            ) : (
                                !isPost ? ( 
                                <LoadingDiv>아직 기록된 글이 없습니다.</LoadingDiv>
                                ) : (
                                <>
                                    <ul>
                                        <EachPostLi>
                                            <div>
                                                <FontAwesomeIcon icon={faLocationPin}/>
                                                <PostLink>꽁치, 털 밀었더니 더 못생겨져</PostLink>
                                            </div>
                                            <PostRepl>[2]</PostRepl>
                                        </EachPostLi>
                                    </ul>
                                </>))
                            }
                        </PostListDiv>
                    </PostSection>

                    <PagingSection>
                        <PagenumberDiv>
                            <FontAwesomeIcon icon={faArrowLeft}/>
                        </PagenumberDiv>
                        <PagenumberDiv>2</PagenumberDiv>
                        <PagenumberDiv>
                            <FontAwesomeIcon icon={faArrowRight}/>
                        </PagenumberDiv>
                    </PagingSection>
                </Main>
                
                <Footer>
                    <FontAwesomeIcon icon={faReact}/>
                    <FooterBig>for react study</FooterBig>
                    <FooterSmall>2022. by isdiscodead</FooterSmall>
                </Footer>
            </MediaDiv>
        </ThemeProvider>
    </>;
}

export default App;
