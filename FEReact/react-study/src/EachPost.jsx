import React from 'react'

// 아이콘 import 
import {
    faLocationPin,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
    EachPostLi,
    PostLink,
    PostRepl,
} from './styledComponent';


function EachPost({title, repleCount}) {
  return (
    <EachPostLi>
        <div>
            <FontAwesomeIcon icon={faLocationPin}/>
            <PostLink>{title}</PostLink>
        </div>
        <PostRepl>[{repleCount}]</PostRepl>
    </EachPostLi>
  )
}

export default EachPost