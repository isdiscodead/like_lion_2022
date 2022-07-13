import React from 'react'

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';

import {
    FooterDiv,
    FooterBig,
    FooterSmall,
} from './styledComponent';


function Footer() {
  return (
    <FooterDiv>
        <FontAwesomeIcon icon={faReact}/>
        <FooterBig>for react study</FooterBig>
        <FooterSmall>2022. by isdiscodead</FooterSmall>
    </FooterDiv>
  )
}

export default Footer