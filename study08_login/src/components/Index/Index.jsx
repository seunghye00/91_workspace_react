import styles from './Index.module.css'
import { useNavigate } from 'react-router-dom'

const Index = () => {
    const navi = useNavigate()

    return (
        <table>
            <thead>
                <tr>
                    <th>로그인</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <input type="text" placeholder="input id" />
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="text" placeholder="input pw" />
                    </td>
                </tr>
                <tr>
                    <td className={styles.btns}>
                        <button>로그인</button>{' '}
                        <button onClick={() => navi('/member/signup')}>
                            회원가입
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default Index
