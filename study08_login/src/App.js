import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Index from './components/Index/Index'
import Signup from './components/Signup/Signup'

function App() {
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
