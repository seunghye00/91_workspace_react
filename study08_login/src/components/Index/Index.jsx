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

    const handleLogout = () => {
        // 로그아웃 시 인증 정보를 삭제
        axios.delete(`http://192.168.1.12/auth`).then(() => {
            sessionStorage.removeItem('loginID')
            setLoginID('')
            setAuth({ id: '', password: '' })
        })
    }

    const handleRemoveUser = () => {
        if (!window.confirm('정말 탈퇴하시겠습니까 ?')) {
            return
        }
        axios.delete(`http://192.168.1.12/member`).then(() => {
            handleLogout()
        })
    }

    const handleToChat = () => {}

    return (
        <>
            {loginID ? (
                <table>
                    <thead>
                        <tr>
                            <th colSpan={4}>
                                <h1>{loginID}님 환영합니다.</h1>
                                <img src="http://192.168.1.12/images/test.png"></img>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <button onClick={handleToChat}>채팅</button>
                            </td>
                            <td>
                                <button onClick={() => navi('/member/mypage')}>
                                    마이페이지
                                </button>
                            </td>
                            <td>
                                <button onClick={handleLogout}>로그아웃</button>
                            </td>
                            <td>
                                <button onClick={handleRemoveUser}>
                                    회원탈퇴
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
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
