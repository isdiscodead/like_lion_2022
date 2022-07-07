const { Fragment } = require("react");

/*
function App() {
	const num=1;


	// 하나의 요소로 감싼다 → Fragment 태그 활용, <></>로 축약 가능
	return {
		<Fragment>
			{num==1 && <div>num은 1이 맞습니다.</div>}
			{num==1 || <div>num은 1이 아닙니다.</div>}
		<Fragment/>
	};


	// 조건부 랜더링 
	// 1. return문 밖에서 if문 
	if ( num == 1 ) {
		return <>num is 1</>
	}
	return <>num is not 1</>

	// 2. 논리 연산자 &&와 || 사용하기
	return { 
		<>
			{num==1 && <div>num은 1이 맞습니다.</div>}
			{num==1 || <div>num은 1이 아닙니다.</div>}
		</>
	};

	// 3. case문 
	var status = "happy";
	switch ( status ) {
		case 'happy':
			return <p>좋은 아침이에요!</p>
		case 'angry':
			return <p>구경났어요?</p>
		default:
			return <p>안녕하세요.</p>
	}

	// 4. 삼항 연산지
	return {
		<>
			num은 1이
			{ 
				num == 1
				? <div>맞습</div>
				: <div>아닙</div>
			}
			니다.
		</>
	}
}
*/