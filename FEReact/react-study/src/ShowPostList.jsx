import React, { useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // axios

// 아이콘 import 
// yarn add @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome @fortawesome/fontawesome-svg-core @fortawesome/free-brands-svg-icons
import {
    faArrowsRotate,
    faPenToSquare,
    faArrowLeft,
    faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// 로딩 아이콘
import loadingIcon from './loading.svg';

import {
    PagenumberDiv,
    PagingSection,
    PostListDiv,
    PostSection,
    PostTitle,
    PostTitleDiv,
    LoadingDiv,
    LoadingImg,
    CursorDiv,
} from './styledComponent';

import EachPost from './EachPost';


function ShowPostList({apiUrl}) {    
    // 게시글 개수
    let postCount = 0;
    // 로딩 중 여부
    const [loading, setLoading] = useState(true);
    // 포스트 데이터 
    const [postList, setPostList] = useState([]);
    // pagenation 
    const [page, setPage] = useState(1);
    const [pages, setPages] = useState([]);
    const [next, setNext] = useState("");
    const [prev, setPrev] = useState("");

    const getPostList = useCallback(() => {
        setLoading(true);
        setTimeout( () => {
            // 멋사에서 제공하는 api 서버 주소를 이용, axios로 데이터 가져옴 
            axios.get(`${apiUrl}list/?page=${page}&page_size=10`).then( response => {
                console.log(response.data);
                // 게시글 개수 
                postCount = response.data.count;
                // 페이지네이션
                const lastPage = Math.ceil(postCount / 10);
                const tempPages = [];
                for ( let i=1 ; i<lastPage ; i++ ) {
                    tempPages.push(i);
                }
                setPages(tempPages);
                setNext(response.data.next)
                setPrev(response.data.prev)
                // 로딩 완료
                setPostList(response.data.results);
                setLoading(false);
            })
        }, 500)
    }, [])

    // 게시글 로딩 
    // 한 번만 실행되므로 빈 값을 검사 값으로 ...
    useEffect( () => {
        getPostList();
    }, [page]); // page 업데이트 시마다 내용 리로드 

    // useCallback으로 감싸서 최적화 진행
    // 최적화하지 않아도 되지만, 내용이 많아서 렌더가 오래 걸릴 경우는 필수 ! 

    // write 화면 전환 navigate
    const navigate = useNavigate();
    const goWrite = () => {
        navigate('/write');
    }

  return (
    <>
        <PostSection>
            <PostTitleDiv>
                <FontAwesomeIcon icon={faArrowsRotate} onClick={getPostList}/>
                <PostTitle>익명 게시판</PostTitle>

                <CursorDiv>
                    <FontAwesomeIcon onClick={goWrite} icon={faPenToSquare}/>
                </CursorDiv>
            </PostTitleDiv>

            <PostListDiv>
                { loading ? (
                    <LoadingDiv>
                        <LoadingImg src={loadingIcon}/>
                    </LoadingDiv>
                ) : (
                    postList.length === 0 ? ( 
                    <LoadingDiv>아직 기록된 글이 없습니다.</LoadingDiv>
                    ) : (
                    <>
                        <ul>
                            {postList.map((element) => (<EachPost key={element.id} title={element.title} postID={element.id}/>))}
                        </ul>
                    </>))
                }
            </PostListDiv>
            
        </PostSection>

        <PagingSection>
            { prev ? ( // 이전 페이지가 존재하는 경우에만 렌더 
                <PagenumberDiv>
                    <FontAwesomeIcon icon={faArrowLeft} onClick={() => {
                        if(page>1)setPage(page-1)
                    }}/>
                </PagenumberDiv>
            ) : ""}
            
            { pages.map( pageNum => ( // 페이지 수 만큼 페이지 버튼 추가 
                <PagenumberDiv key={pageNum} onClick={()=>setPage(pageNum)}> {pageNum} </PagenumberDiv>
            ))}

            { next ? ( 
                <PagenumberDiv>
                    <FontAwesomeIcon icon={faArrowRight} onClick={() => {
                        if(page<pages)setPage(page+1)
                    }}/> 
                </PagenumberDiv>
            ) : "" }
        </PagingSection>
    </>
  )
}

export default ShowPostList