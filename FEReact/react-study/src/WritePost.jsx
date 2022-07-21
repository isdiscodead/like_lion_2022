import React, { useState } from 'react';
import {
  ContentsInput,
  PostSection,
  PostSubmit,
  PostSubmitDiv,
  PostTitle,
  PostTitleDiv,
  PostWriteDiv,
  TitleInput,
} from './styledComponent';

function WritePost() {
  // useState 만들어주기
  const [inputs, setInputs] = useState({
    title: '',
    contents: '',
  })
  
  // 2개를 동시에 관리하기 위한 객체
  const { title, contents } = inputs;

  // 제목, 게시글에 대한 onChange 함수
  const onChange = (e) => {
    const { value, name } = e.target; // 타겟이 되는 곳의 value와 name을 가져옴
    setInputs({
      ...inputs, // 기존 인풋 값을 가져와서 사용
      [name] : value, // 해당되는 name의 key값을 이용해 value 수정 
    });
  }

  return (
    <PostSection>
      <PostTitleDiv>
        <PostTitle>글쓰기</PostTitle>
      </PostTitleDiv>
      <PostWriteDiv>
        <TitleInput onChange={onChange} name="title" value={title} placeholder="제목을 입력해주세요. (15자 이내)" />
        <ContentsInput onChange={onChange} name="contents" value={contents} cols="30" rows="10"></ContentsInput>
      </PostWriteDiv>
      <PostSubmitDiv>
        <PostSubmit>작성완료</PostSubmit>
      </PostSubmitDiv>
    </PostSection>
  );
}

export default WritePost;