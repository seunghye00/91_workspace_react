import { useNavigate } from 'react-router-dom'
import styles from './Signup.module.css'
import { useState } from 'react'
import axios from 'axios'

const Signup = () => {
    const navi = useNavigate()

    const [member, setMember] = useState({ id: '', password: '', name: '' })
    const handleChangeAdd = e => {
        const { name, value } = e.target
        setMember(prev => ({ ...prev, [name]: value }))
    }
    const handleAdd = () => {
        axios.post('http://192.168.1.12/member', member).then(resp => {
            setMember({ id: '', password: '', name: '' })
            navi('/')
        })
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>회원가입</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <input
                            type="text"
                            name="id"
                            placeholder="input id"
                            onChange={handleChangeAdd}
                            value={member.id}
                        />
                    </td>
                </tr>
                <tr>
                    <td>
                        <input
                            type="password"
                            name="password"
                            placeholder="input password"
                            onChange={handleChangeAdd}
                            value={member.password}
                        />
                    </td>
                </tr>
                <tr>
                    <td>
                        <input
                            type="text"
                            name="name"
                            placeholder="input name"
                            onChange={handleChangeAdd}
                            value={member.name}
                        />
                    </td>
                </tr>
                <tr>
                    <td className={styles.btns}>
                        <button onClick={handleAdd}>회원가입</button>
                        <button onClick={() => navi('/')}>홈으로</button>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default Signup
