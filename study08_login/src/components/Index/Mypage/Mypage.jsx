import { useNavigate } from 'react-router-dom'
import styles from './Mypage.module.css'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Mypage = () => {
    const navi = useNavigate()

    const [info, setInfo] = useState({ id: '', name: '' })

    useEffect(() => {
        axios.get(`http://192.168.1.12/member`).then(resp => {
            setInfo(resp.data)
        })
    })

    return (
        <table>
            <thead>
                <tr>
                    <th colSpan={2}>마이페이지</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>ID</td>
                    <td colSpan={2}>
                        <input value={info.id} readOnly></input>
                    </td>
                </tr>
                <tr>
                    <td>NAME</td>
                    <td>
                        <input value={info.name} readOnly></input>
                    </td>
                </tr>
                <tr>
                    <td colSpan={2}>
                        <div className={styles.btns}>
                            <button>수정</button>
                            <button onClick={() => navi('/')}>홈으로</button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default Mypage
