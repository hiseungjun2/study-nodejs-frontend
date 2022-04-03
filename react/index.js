// CDN 참조로 인해 import 숨겨짐
// import React from "react";
// import ReactDOM from "react-dom";

// 함수형 컴포넌트
// 버튼에서 hello world -> 클릭 시 bye world
function helloWorldButton () {
    // 상태관리 위해 hook 사용
    // 비구조화 할당
    const [isClick, setClickState] = React.useState(false); // 컴포넌트의 상태를 설정하는 메서드, 파라미터는 초기값

    const text = isClick ? "bye world!" : "hello world!";
    
    /*
    return React.createElement(
        "button", 
        { 
            onClick : () => {
                setClickState(!isClick);
            }
        },
        text
    );
    */

    // JSX, createElement 는 안쓴다.
    return (
        <button onClick={() => { setClickState(!isClick) }}>
            {text}
        </button>
    )

    // JSX
};

const rootContainer = document.getElementById("react-root");
ReactDOM.render(React.createElement(helloWorldButton), rootContainer)

// 비구조화 할당 예시
// function returnOneThreeArray () {
//     return [1, 3];
// }
// const [a, b] = returnOneThreeArray();       // [1, 3]
// const [a, b] = [1, 3]
// console.log(a) // 1
// console.log(b) // 3