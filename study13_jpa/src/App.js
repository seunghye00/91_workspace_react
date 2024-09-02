import { useState } from 'react'
import axios from 'axios'

function App() {
    const [message, setMessage] = useState({ writer: '', message: '' })
    const [updateMessage, setUpdateMessage] = useState({
        seq: 0,
        writer: '',
        message: '',
    })
    const [delSeq, setDelSeq] = useState(0)

    const [data, setData] = useState([])

    const handleGet = () => {
        axios.get(`http://192.168.1.12/messages`).then(resp => {
            console.log(resp)
            setData(resp.data)
        })
    }

    const handlePost = () => {
        axios.post(`http://192.168.1.12/messages`, message).then(resp => {
            console.log(resp)
            handleGet()
        })
    }

    const handleUpdate = () => {
        axios
            .put(
                `http://192.168.1.12/messages/${updateMessage.seq}`,
                updateMessage
            )
            .then(resp => {
                console.log(resp)
                handleGet()
            })
    }

    const handleDelete = () => {
        axios.delete(`http://192.168.1.12/messages/${delSeq}`).then(resp => {
            console.log(resp)
            handleGet()
        })
    }

    const handleInputChange = e => {
        const { name, value } = e.target
        setMessage(prev => ({ ...prev, [name]: value }))
    }

    const handleModifyChange = e => {
        const { name, value } = e.target
        setUpdateMessage(prev => ({ ...prev, [name]: value }))
    }

    return (
        <div className="App">
            <input type="text" name="writer" onChange={handleInputChange} />
            <input type="text" name="message" onChange={handleInputChange} />
            <button onClick={handlePost}>POST</button>
            <hr />
            <button onClick={handleGet}>GET</button>
            <fieldset>
                <legend>messages</legend>
                {data.map((item, i) => {
                    return (
                        <div key={i} style={{ border: '1px solid black' }}>
                            <p>
                                {item.seq}. {item.writer}
                            </p>
                            <p>{item.message}</p>
                            <p>{item.writeDate}</p>
                        </div>
                    )
                })}
            </fieldset>
            <hr />
            <input type="text" name="seq" onChange={handleModifyChange} />
            <input type="text" name="writer" onChange={handleModifyChange} />
            <input type="text" name="message" onChange={handleModifyChange} />
            <button onClick={handleUpdate}>Update</button>
            <hr />
            <input
                type="text"
                onChange={e => {
                    setDelSeq(e.target.value)
                }}
            />
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default App
