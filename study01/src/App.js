import './App.css'
import TableBox from './components/TableBox/TableBox'
import ULBox from './components/ULBox/ULBox'
import ImageBox from './components/ImageBox/ImageBox'
import { useRef } from 'react'
import { useState } from 'react'

// let은 값이 변할 수 있는 변수, const는 한번 값을 대입하면 변경이 물가한 상수
// const TableBox = function() {} // <== ECMA6 이전의 스타일
// 아래와 같이 UI를 만들어 받환하는 함수를 Cunctional Eomponent라고 한다.
// UI를 Functional Component로 구성할 경우, 함수처럼 재사용성을 가질 수 있음.(유지보수 비용 절감)

// 사용 빈도 순
// useState / useEffect / useNavigate / useStore / useLocation
// useState / useNavigate / useEffect / useStore / useRef / useLocation
// useRef -> document.getElementById("id") 같은 동작을 하지만 리액트 내에서는 useRef를 써야 함. document는 react 매커니즘을 무시하고 동작해서 오류를 유발할 확률이 높다.
//           값의 변화가 UI에 전혀 영향을 주지 않는다면 useRef 사용 !!
//           사용하는 대표적인 예시 => 포커스 함수 사용
// 1> UI에 영향을 주지 않는 값을 사용하는 경우
// 2> document.getElementById 처럼 대상의 주소(Ref)가 필요한 경우 - focus (주로 라이브러리를 사용할 때 종종 발생)
// 3> rerendering을 유발하지도 않고 rerendering에도 변경되지 않는 값이 필요한 경우

function App() {
    // Main. 즉, React App의 시작점

    let a = 10 // 10 -> rerendering -> 11
    const b = useRef(10) // 10 -> 11 ===> 값이 변해도 rerendering을 유발하지 않음.
    const [c, setC] = useState(10) // 10 -> rerendering -> 11

    const inputRef = useRef(null)
    const handleTest = () => {
        console.log(inputRef.current.value)
        a++
        b.current++
        setC(c + 10)
    }

    const handlePrint = () => {
        console.log(a)
        console.log(b.current)
        console.log(c)
    }
    return (
        <div className="container">
            <TableBox />
            <ULBox />
            <ImageBox />
            <input ref={inputRef} type="text" value="Hello" />
            <button onClick={handleTest}>테스트</button>
            <button onClick={handlePrint}>출력</button>
        </div>
    )
}

// <TableBox/>는 {TableBox()} 이런 방식도 가능

export default App
