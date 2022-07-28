import React, { useEffect } from 'react'
import { useState, useRef} from 'react';

import { TitleInput, ContentsInput } from './styledComponent'

function InputPost({onChange, contents, title}) {

    const titleInput = useRef();
    const contentInput = useRef();

    useEffect(() => { // 처음 렌더 시에 title input에 커서가 포커싱
        titleInput.current.focus();
    }, []);

    // 엔터 입력 시 content로 이동 -> onKeyUp 속성 이용
    const onKeyUp = (e) => {
        // 이벤트의 key를 가져옴
        if ( e.key == 'Enter' ) {
            contentInput.current.focus();
        }
    }


    return (
        <>
            <TitleInput ref={titleInput} onChange={onChange} name="title" value={title} placeholder="제목을 입력해주세요. (15자 이내)" onKeyUp={onKeyUp} />
            <ContentsInput ref={contentInput} onChange={onChange} name="contents" value={contents} cols="30" rows="10"></ContentsInput>
        </>
  )
}

export default InputPost