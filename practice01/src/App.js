import './App.css'
import Content from './Content/Content'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useNavigate,
} from 'react-router-dom'

function App() {
    return (
        <Router>
            <Appcontent />
        </Router>
    )
}

const Appcontent = () => {
    const navi = useNavigate()

    return (
        <div className="container">
            <div className="title">관리 콘솔</div>
            <div className="body">
                <div className="menuBox">
                    <div className="menu" onClick={() => navi('/')}>
                        메인
                    </div>
                    <div className="menu" onClick={() => navi('member')}>
                        회원 관리
                    </div>
                    <div className="menu" onClick={() => navi('cafeMenu')}>
                        카페 메뉴 관리
                    </div>
                    <div className="menu" onClick={() => navi('board')}>
                        게시글 관리
                    </div>
                </div>
                <div className="contBox">
                    <div className="cont">
                        <Routes>
                            <Route path="/*"></Route>
                            <Route
                                path="member/*"
                                element={<Content mainMenu={'member'} />}
                            ></Route>
                            <Route
                                path="cafeMenu/*"
                                element={<Content mainMenu={'cafeMenu'} />}
                            ></Route>
                            <Route
                                path="board/*"
                                element={<Content mainMenu={'board'} />}
                            ></Route>
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
