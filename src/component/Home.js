import {useState} from "react";

export default function Home() {
    console.log("test...");

    const x = Math.random();
    const arr = ["아이유","이휘재","유재석"];

    function show(){
        alert("주의");
    }

    // let count = 0;
    const [count, setCount] = useState(0);
    // 일반변수가 아닌 상태변수
    // 상태변수의 setter가 호출되면 컴포넌트는 렌더링 된다

    // if, for, forEach
    return (
        <div>
            <h1>Home</h1>

            <div>count : {count}</div>

            <button onClick={()=>{setCount(count+1)}}>+</button>
            <br />
            <button onClick={show}>경고</button>
            <br />
            <button onClick={()=>{alert("주의2")}}>경고2</button>

            {/* 조건문 삼항연산자 사용 */}
            <div>
                {
                    x > 0.6 ? <span>대</span> : (x > 0.3 ? <span>중</span> : <span>소</span>)
                }
            </div>

            {/* 반복문 map메서드를 사용 */}
            <div>
                {
                    arr.map((name, index) => (<div key={index}>{name}</div>))
                }
            </div>
        </div>
    )
}