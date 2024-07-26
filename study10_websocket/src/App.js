import './App.css'
import { useEffect, useState } from 'react'
import { host } from './config/config'
import axios from 'axios'

axios.defaults.withCredentials = true

function App() {
    const [messages, setMessages] = useState([])
    const [message, setMessage] = useState('')
    const [socket, setSocket] = useState(null)

    useEffect(() => {
        const ws = new WebSocket(`ws://${host}/chat`)

        ws.onmessage = e => {
            setMessages(prev => [...prev, JSON.parse(e.data)])
        }

        setSocket(ws)
    }, [])

    const handleChange = e => {
        setMessage(e.target.value)
    }

    const handleSend = () => {
        socket.send(message)
        setMessage('')
    }

    const handleLogin = () => {
        axios.post(`http://${host}/auth`, { id: 'abc', pw: 'abc' })
    }

    return (
        <div className="App">
            <h1>WebSocket 메세지 연습</h1>
            <input
                type="text"
                placeholder="input message"
                name="message"
                value={message}
                onChange={handleChange}
            ></input>
            <button onClick={handleSend}>전송</button>

            <div className="chatbox">
                {messages.map((msg, i) => {
                    return (
                        <div key={i}>
                            {msg.id} : {msg.msg}
                        </div>
                    )
                })}
            </div>

            <button onClick={handleLogin}>로그인</button>
        </div>
    )
}

export default App
