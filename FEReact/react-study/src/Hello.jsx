import React from "react";
import "./Hello.css"

import styled from "styled-components";


function Hello() {
    // 스타일 값에 들어갈 객체 미리 선언 가능
    const PracticeStyle = {
        marginTop: '10px', 
        backgroundColor: 'blue'
    };

    // styled component 생성, 컴포넌트 이름은 대문자로 시작 ... 백틱 사용
    // 버튼 형태의 컴포넌트를 가져와 이용하는 방식
    const StyledButton = styled.button`
        color: red; 
        background-color: yellow;
    `;

    return (
        <> 
            
            <div style={{ marginTop: '10px', backgroundColor: 'pink' }}>
                Hello World!
            </div>
            <div style={PracticeStyle}>
                    Hello World!
            </div>
            <div className="red">
                    Hello World!
            </div>
            <StyledButton>나만의 버튼</StyledButton>
        </>
    );
}

export default Hello;