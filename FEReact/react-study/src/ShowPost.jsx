import React, { useEffect, useState, useMemo, useRef } from 'react';

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

const postData = {
  title: `바운스`,
  contents: `아기사자가 돌아서면 두 눈이 마주칠까, 심장이 bounce, bounce 두근 대 들릴까 봐 겁나
  한참을 망설이다 용기를 내 밤새워 준비한 내 개사 들어줘, 처음 본 순간부터 아기사자랑 친해질꺼야 생각했어~~,
  Baby, you're my trampoline You make me bounce Bounde - 아기사자들은 다 귀여워 최고 -
  `,
};

const replData = [
  { id: 2, content: `반가워요!` },
  { id: 3, content: `멋쟁이 사자처럼 최고!` },
];

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
          <PostReplDiv key={element.id}>
            <ReplWriter>익명</ReplWriter>
            <Repl>{element.content}</Repl>
          </PostReplDiv>
        ))
      )}
    </>
  )
}); 

const ShowPost = () => {
  const [post, setPost] = useState(null);
  const [repls, setRepls] = useState([]);
  const [postLoading, setPostLoading] = useState(true);
  const [replLoading, setReplLoading] = useState(true);

  const repInput = useRef();

  // useEffect 2개 사용하기 ( 게시글, 댓글 )
  // 0.5초 뒤 내용 로딩 
  useEffect( () => {
    setTimeout( () => {
      setPost(postData);
      setPostLoading(false);
    }, 500)
  });

  useEffect( () => {
    setTimeout( () => {
      setRepls(replData);
      setReplLoading(false);
    }, 500);

    repInput.current.focus(); // 댓글 입력 창에 포커스 
  });

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
          <ReplSubmitDiv>
            <span>입력</span>
          </ReplSubmitDiv>
        </WriterDiv>
      </PostSection>
    </div>
  );
};

export default ShowPost;
