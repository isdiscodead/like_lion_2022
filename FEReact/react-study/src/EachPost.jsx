import React from 'react'
import { useNavigate } from 'react-router-dom';

// 아이콘 import 
import {
    faLocationPin,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  CursorDiv,
  EachPostLi,
  PostLink,
  PostRepl,
} from './styledComponent';


function EachPost({ title, postID }) {
  const navigate = useNavigate();
  const goPost = () => {
    navigate(`${ '/post/' + postID }`)
  }

  return (
    <EachPostLi onClick={goPost}>
        <CursorDiv>
            <FontAwesomeIcon icon={faLocationPin}/>
            <PostLink>{title}</PostLink>
        </CursorDiv>
    </EachPostLi>
  )
}

export default EachPost