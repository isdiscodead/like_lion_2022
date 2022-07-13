import React from 'react'

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
} from './styledComponent';

import EachPost from './EachPost';

function ShowPostList({ isPost, loading, addPost, postList }) {    
  return (
    <>
        <PostSection>
            <PostTitleDiv>
                <FontAwesomeIcon icon={faArrowsRotate} onClick={addPost}/>
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
                            {postList.map((element) => (<EachPost key={element.id} title={element.title} repleCount={element.repleCount}/>))}
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