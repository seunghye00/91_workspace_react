import { useState } from 'react'
import styles from './Index.module.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useAuthStore } from '../../store/store'

const Index = () => {
    const { loginID, setLoginID } = useAuthStore()

    const navi = useNavigate()

    const [auth, setAuth] = useState({ id: '', password: '' })
    const handleChange = e => {
        const { name, value } = e.target
        setAuth(prev => ({ ...prev, [name]: value }))
    }

    const handleLogin = () => {
        axios
            .post(`http://192.168.1.12/auth`, auth)
            .then(resp => {
                // 서버로부터 성공 코드 반환 시 실행
                // console.log(resp)
                sessionStorage.setItem('loginID', resp.data)
                setLoginID(resp.data) // zustand 메모리 저장소에 보관 -> F5 한 방에 초기화 됨.
                navi('/')
            })
            .catch(err => {
                // 서버로부터 오류 코드 반환 시 실행
                // console.log(err)
                alert('ID 또는 패스워드를 다시 확인해주세요')
                setAuth({ id: '', password: '' })
            })
    }

    return (
        <>
            {loginID ? (
                <h1>{loginID}님 환영합니다.</h1>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>로그인</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <input
                                    type="text"
                                    placeholder="input id"
                                    name="id"
                                    onChange={handleChange}
                                    value={auth.id}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input
                                    type="text"
                                    placeholder="input pw"
                                    name="password"
                                    onChange={handleChange}
                                    value={auth.password}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className={styles.btns}>
                                <button onClick={handleLogin}>로그인</button>
                                <button onClick={() => navi('/member/signup')}>
                                    회원가입
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            )}
        </>
    )
}

export default Index
