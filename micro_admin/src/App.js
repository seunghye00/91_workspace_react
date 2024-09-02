import { useState } from 'react'
import { api } from './config/config'
import './App.css'
import useAuthStore from './store/store'
import { jwtDecode } from 'jwt-decode'

const Login = () => {
    const [user, setUser] = useState({ id: '', pw: '' })

    const { login } = useAuthStore()

    const handleChange = e => {
        const { name, value } = e.target
        setUser(prev => ({ ...prev, [name]: value }))
    }

    const handleLogin = () => {
        api.post(`/auth`, user)
            .then(resp => {
                const token = resp.data

                const decoded = jwtDecode(token)
                console.log(decoded)

                sessionStorage.setItem('token', token)
                login(token)
            })
            .catch(resp => {
                console.log(resp)
                alert('아이디 또는 패스워드를 다시 확인하세요.')
            })
    }

    return (
        <fieldset>
            <legend>Login</legend>
            <input
                type="text"
                name="id"
                placeholder="input your ID"
                onChange={handleChange}
            />
            <br />
            <input
                type="text"
                name="pw"
                placeholder="input your PW"
                onChange={handleChange}
            />
            <br />
            <button onClick={handleLogin}>Login</button>
        </fieldset>
    )
}
const Home = () => {
    const { logout } = useAuthStore()

    const handleLogout = () => {
        sessionStorage.removeItem('token')
        logout()
    }

    const handleGetMessage = () => {
        api.get(`/admin`)
            .then(resp => {
                console.log(resp)
            })
            .catch(resp => {
                console.log('에러 이유' + resp)
            })
    }
    // Cross Origin 환경에서
    // JWT Authorization처럼 헤더에 추가적인 데이터가 붙을 경우
    // 브라우저는 서버가 안전한 서버인지 검증하기 위해 preflight request를 발송

    const handleDelete = () => {
        console.log('클릭')
    }

    return (
        <fieldset>
            <legend>Home</legend>
            <button onClick={handleGetMessage}>메세지 목록</button>
            <button onClick={handleDelete}>삭제</button>
            <button onClick={handleLogout}>로그아웃</button>
        </fieldset>
    )
}

function App() {
    const { isAuth } = useAuthStore()
    return <div className="App">{isAuth ? <Home /> : <Login />}</div>
}

export default App
