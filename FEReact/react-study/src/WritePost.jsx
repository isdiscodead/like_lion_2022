import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import {
  PostSection,
  PostSubmit,
  PostSubmitDiv,
  PostWriteDiv,
} from './styledComponent';

import WriteTitle from './WriteTitle';
import InputPost from './InputPost';

// arrow function으로 컴포넌트 쪼개기 
const SubmitComponent = React.memo(({onSubmit}) => (
  <PostSubmitDiv>
    <PostSubmit onClick={onSubmit}>작성완료</PostSubmit>
  </PostSubmitDiv>
));

function WritePost({apiUrl}) {
  const navigate = useNavigate();

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

  const onSubmit = () => {
    console.log(inputs)
    axios.post(`${apiUrl}posts/`, {
      title : inputs.title,
      contents : inputs.contents,
      repls : [],
    }).then(response => {
      navigate('../');
    })
  }

  return (
    <PostSection>

      <WriteTitle/>

      <PostWriteDiv />

      <InputPost onChange={onChange} contents={contents} title={title} />
      
      <SubmitComponent onSubmit={onSubmit}/>
    </PostSection>
  );
}

export default WritePost;