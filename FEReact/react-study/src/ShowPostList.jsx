import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

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

// 게시글 배열
const initialPostList = [
    {id:1, title:"우리집 고양이 츄르를 좋아해"},
    {id:2, title:"할 일은 왜 줄어들지가 않냐??"},
    {id:3, title:"집에 보내주세요 ..."},
];

// 게시글 개수
let postCount = initialPostList.length;

function ShowPostList() {    
    // 로딩 중 여부
    const [loading, setLoading] = useState(true);
    // 포스트 존재 여부
    const [isPost, setIsPost] = useState(true);
    const [postList, setPostList] = useState([]);

    const addPost = () => {
        postCount += 1;
        setPostList((postList) => [
            ...postList, {id: postCount, title: '강의 언제 다 보냐...'},
        ])
    }

    // write 화면 전환 navigate
    const navigate = useNavigate();
    const goWrite = () => {
        navigate('/write');
    }

    // 로딩 화면
    // 한 번만 실행되므로 빈 값을 검사 값으로 ...
    useEffect( () => {
        setTimeout( () => {
            setPostList(initialPostList);
            setLoading(false);
        }, 1000)
    }, []);

  return (
    <>
        <PostSection>
            <PostTitleDiv>
                <FontAwesomeIcon icon={faArrowsRotate} onClick={addPost}/>
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
                    !isPost ? ( 
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
            <PagenumberDiv>
                <FontAwesomeIcon icon={faArrowLeft}/>
            </PagenumberDiv>
            <PagenumberDiv>2</PagenumberDiv>
            <PagenumberDiv>
                <FontAwesomeIcon icon={faArrowRight}/>
            </PagenumberDiv>
        </PagingSection>
    </>
  )
}

export default ShowPostList