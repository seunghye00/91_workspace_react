import './App.css'
import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'
import Contents from './components/Contents/Contents'

function App() {
    return (
        <div className="container">
            <Header />
            <div className="body">
                <Menu />
                <Contents />
            </div>
        </div>
    )
}

export default App
