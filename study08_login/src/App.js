import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Index from './components/Index/Index'
import Signup from './components/Signup/Signup'
import { useAuthStore } from './store/store'
import { useEffect } from 'react'

function App() {
    // useEffect <-- 중요도 높음. 무조건 사용할 수 있어야 함 !!!!
    // 마운팅 되는 시점, 언마운팅 되는 시점, 그리고 개발자가 정하는 특정 시점에만 실행되는 코드를 작성할 수 있는 hook 함수

    const { setLoginID } = useAuthStore()
    useEffect(() => {
        // 마운팅 되는 시점에만 실행하고 싶은 코드  =>  리렌더링되는 시점 X

        // sessionStorage에서 아이디를 꺼내서 zustand store로 이전
        const loginID = sessionStorage.getItem('loginID')
        setLoginID(loginID)

        // return ()=>{
        //     // 언마운팅 되는 시점에 실행하고 싶은 코드. 필요할 때만 작성
        // }
    }, [])

    return (
        <div className="container">
            <Router>
                <Routes>
                    <Route path="/" element={<Index />}></Route>
                    <Route path="/member/signup" element={<Signup />}></Route>
                </Routes>
            </Router>
        </div>
    )
}

export default App
