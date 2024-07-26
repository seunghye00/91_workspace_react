import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

const CompB = () => {
    // 컴포넌트가 마운트 될 때 실행할 함수 지정
    // 컴포넌트가 언마운트될 때 실행할 항수 지정
    // 의존성 배열 내의 값이 변경될 떄 실행

    useEffect(() => {
        console.log(
            '컴포넌트 B가 마운트 될 때 및 의존성 배열이 변경될 때 실행됨.'
        )
        return () => {
            console.log(
                '컴포넌트 B가 언마운트 될 떄 및 의존성 배열이 변경될 떄 실행됨.'
            )
        }
    })
    return <div>CompB</div>
}

const CompA = () => {
    // 컴포넌트가 마운트 될 때 실행할 함수 지정
    // 컴포넌트가 언마운트될 때 실행할 항수 지정
    // 의존성 배열 내의 값이 변경될 떄 실행

    useEffect(() => {
        console.log(
            '컴포넌트 A가 마운트 될 때 및 의존성 배열이 변경될 때 실행됨.'
        )
        return () => {
            // cleanup 함수. 해당 컴포넌트가 언마운트 될 때 정리해야 할 사항을 코드로 작성.
            console.log(
                '컴포넌트 A가 언마운트 될 떄 및 의존성 배열이 변경될 떄 실행됨.'
            )
        }
    })
    return <div>CompA</div>
}

// function App() {
//     // useEffect : 코드 실행 타이밍을 지정하는 함수
//     // const [count, setCount] = useState(10)
//     // console.log(10)

//     const [comp, setComp] = useState('A')
//     const handleChange = () => {
//         if (comp === 'A') {
//             setComp('B')
//         } else {
//             setComp('A')
//         }
//     }

//     return (
//         <div className="App">
//             {/* <button onClick={() => setCount(count + 1)}>카운트 증가</button> */}
//             {comp === 'A' && <CompA />}
//             {comp === 'B' && <CompB />}
//             <button onClick={handleChange}>Comp 변경</button>
//         </div>
//     )
// }

function App() {
    console.log('useEffect 외부 코드')

    const [count, setCount] = useState(10)

    useEffect(() => {
        console.log('useEffect 내부 코드')
    }, [count])
    // useEffect의 2번째 파라미터 => 의존성 배열
    // 비워둘 시 : 일반 코드와 같이 useEffect 콜백을 rerendering 시점에도 실행됨.
    // [] (빈 배열) : useEffect 콜백을 마운트 될 때만 실행 함.
    // [param] : 관측(추척)가능한 값이 변화할 때만 실행 함.

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>카운트 변경</button>
        </div>
    )
}

export default App
