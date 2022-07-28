import axios from 'axios';
import React, { useEffect, useState, useMemo, useRef } from 'react';
import { useParams } from 'react-router-dom';

import {
  PostSection,
  PostTitleDiv,
  PostTitle,
  PostListDiv,
  PagingSection,
  LoadingDiv,
  LoadingImg,
  PagenumberDiv,
  CursorDiv,
  PostRepl,
  PostReplDiv,
  ReplTitleDiv,
  ReplWriter,
  Repl,
  WriterDiv,
  ReplInput,
  ReplSubmitDiv,
} from './styledComponent';

const PostAndRepl = React.memo(({post, postLoading, replLoading, repls, replCount}) => {
  return (
    <>
      <PostTitleDiv>
        <PostTitle>{post && post.title}</PostTitle>
      </PostTitleDiv>

      {postLoading ? ( // 로딩 중에는 로딩 이미지 출력 
        <LoadingDiv>
          <LoadingImg src={`${process.env.PUBLIC_URL}/loading.svg`} />
        </LoadingDiv>
      ) : (
        <PostReplDiv>{post && post.contents}</PostReplDiv>
      )}

      {/* post contents */}

      <ReplTitleDiv>댓글 {replCount} </ReplTitleDiv>

      {replLoading ? (
        <LoadingDiv>
          <LoadingImg src={`${process.env.PUBLIC_URL}/loading.svg`} />
        </LoadingDiv>
      ) : (
        repls &&
        repls.map((element) => (
          <PostReplDiv key={element}>
            <ReplWriter>익명</ReplWriter>
            <Repl>{element}</Repl>
          </PostReplDiv>
        ))
      )}
    </>
  )
}); 

const ShowPost = ({apiUrl}) => {
  const Params = useParams();

  const [post, setPost] = useState(null);
  const [repls, setRepls] = useState([]);
  const [postLoading, setPostLoading] = useState(true);
  const [replLoading, setReplLoading] = useState(true);

  const repInput = useRef();

  // 실제 데이터 페칭
  useEffect(() => {
    axios.get(`${apiUrl}posts/${Params.postID}`)
      .then(response => {
        setPost(response.data)
        setPostLoading(false)
        repInput.current.focus(); // 댓글 창에 포커스 
        setRepls(response.data.repls);
        setReplLoading(false)
      })
  }, [])

  // input창 상태관리
  const [repl, setRepl] = useState('');

  const onChange = (e) => {
    // input value를 state로 관리
    setRepl(e.target.value);
  };

  const countRepls = (repls) => {
    return repls.length;
  };

  // memo hook실습
  const replCount = useMemo( () => countRepls(repls), [repls] )

  // 댓글 달기 
  const onSubmitRepl = () => {
    axios.post(`${apiUrl}repl/`, {
      contents : repl,
      post: Params.postID,
    }).then(() => {
      window.location.reload();
    })
  }

  if ( !Params.postID ) {
    return <PostSection>잘못된 접근입니다.</PostSection>;
  }

  return (
    <div>
      <PostSection>
        <PostAndRepl
          post={post}
          postLoading={postLoading}
          replCount={replCount}
          replLoading={replLoading}
          repls={repls}
        />
        <WriterDiv>
          <ReplInput onChange={onChange} ref={repInput}></ReplInput>
          <ReplSubmitDiv onClick={onSubmitRepl}>
            <span>입력</span>
          </ReplSubmitDiv>
        </WriterDiv>
      </PostSection>
    </div>
  );
};

export default ShowPost;