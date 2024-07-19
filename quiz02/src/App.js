import './App.css'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useNavigate,
} from 'react-router-dom'
import Menu from './components/Menu/Menu'

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
            <div className="list">List</div>
            <div className="menuBox">
                <div className="choiceMenu">
                    <div className="menu" onClick={() => navi('add')}>
                        Add
                    </div>
                    <div className="menu" onClick={() => navi('delete')}>
                        Delete
                    </div>
                    <div className="menu" onClick={() => navi('modify')}>
                        Modify
                    </div>
                </div>
                <div className="viewMenu">
                    <Routes>
                        <Route path="/" element={<Menu menu={''} />} />
                        <Route path="add/*" element={<Menu menu={'Add'} />} />
                        <Route
                            path="delete/*"
                            element={<Menu menu={'Delete'} />}
                        />
                        <Route
                            path="modify/*"
                            element={<Menu menu={'Modify'} />}
                        />
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default App
