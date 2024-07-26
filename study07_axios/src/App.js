import './App.css'
import { useState } from 'react'
import axios from 'axios'

// 프로토콜://IP주소/board?page=1
// @RestController - RESTFul하게 URL을 작성하는 것을 지향

function App() {
    const [music, setMusic] = useState({
        id: 0,
        title: '',
        singer: '',
        publish: '',
    })

    const [musics, setMusics] = useState([])

    const [modifyMusic, setModifyMusic] = useState({
        id: 0,
        title: '',
        singer: '',
        publish: '',
    })

    const [delID, setDelID] = useState(0)

    const [searchTitle, setSearchTitle] = useState('')

    const [text, setText] = useState('')
    const [files, setFiles] = useState([])

    const handleAddChange = e => {
        let { name, value } = e.target
        setMusic(prev => ({ ...prev, [name]: value }))
    }

    const handleAdd = () => {
        // CRUD 마다 요청하는 방식이 다름
        // C - post
        // R - get
        // U - put
        // D - delete
        axios.post('http://192.168.1.12/music', music).then(resp => {
            setMusic({
                id: 0,
                title: '',
                singer: '',
                publish: '',
            })
            handleGetAll()
        })
    }

    const handleGetAll = () => {
        axios.get('http://192.168.1.12/music').then(resp => {
            setMusics(resp.data)
        })
    }

    const handleModifyChange = e => {
        let { name, value } = e.target
        setModifyMusic(prev => ({ ...prev, [name]: value }))
    }

    const handleModify = () => {
        axios
            .put(`http://192.168.1.12/music/${modifyMusic.id}`, modifyMusic)
            .then(resp => {
                setModifyMusic({
                    id: 0,
                    title: '',
                    singer: '',
                    publish: '',
                })
                handleGetAll()
            })
    }

    const handelDelIDChange = e => {
        setDelID(e.target.value)
    }

    const handleDelete = () => {
        axios.delete(`http://192.168.1.12/music/${delID}`).then(resp => {
            setDelID(0)
            handleGetAll()
        })
    }

    const handleTitleChange = e => {
        setSearchTitle(e.target.value)
    }

    const handleSearch = () => {
        axios
            .get(`http://192.168.1.12/music`, {
                params: { title: searchTitle },
            })
            .then(resp => {
                console.log(resp.data)
            })
    }

    const handleTextChange = e => {
        setText(e.target.value)
    }

    const handleFilesChange = e => {
        setFiles([...e.target.files])
    }

    const handleSubmit = () => {
        const formData = new FormData() // query parameter 형식으로 전송됨.
        formData.append('text', text)
        files.forEach(file => {
            formData.append('files', file)
        })
        axios.post(`http://192.168.1.12/files`, formData) // formData를 전송하는 순간 자동으로 multipart/form-data로 변환 됨
    }

    // 날짜
    const [publish, setPublish] = useState('')
    const handleDate = e => {
        console.log(e.target.value)
        setPublish(e.target.value)
    }
    const handleDateSubmit = () => {
        axios.post(`http://192.168.1.12/files`, { publish: publish })
    }
    return (
        <div className="App">
            <input
                type="text"
                placeholder="ID"
                name="id"
                onChange={handleAddChange}
                value={music.id || ''}
            ></input>
            <br />
            <input
                type="text"
                placeholder="Title"
                name="title"
                onChange={handleAddChange}
                value={music.title}
            ></input>
            <br />
            <input
                type="text"
                placeholder="Singer"
                name="singer"
                onChange={handleAddChange}
                value={music.singer}
            ></input>
            <br />
            <input
                type="date"
                placeholder="Publish"
                name="publish"
                onChange={handleAddChange}
                value={music.publish}
            ></input>
            <br />
            <button onClick={handleAdd}>add New</button>
            <hr />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <table style={{ border: '1px solid black', width: '200px' }}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Singer</th>
                        </tr>
                    </thead>
                    <tbody>
                        {musics.map((item, i) => {
                            return (
                                <tr key={i}>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.singer}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <button onClick={handleGetAll}>getAllMusic</button>
            <hr />
            <div>
                <input
                    type="text"
                    placeholder="ID"
                    name="id"
                    onChange={handleModifyChange}
                    value={modifyMusic.id || ''}
                ></input>
                <br />
                <input
                    type="text"
                    placeholder="Title"
                    name="title"
                    onChange={handleModifyChange}
                    value={modifyMusic.title}
                ></input>
                <br />
                <input
                    type="text"
                    placeholder="Singer"
                    name="singer"
                    onChange={handleModifyChange}
                    value={modifyMusic.singer}
                ></input>
                <br />
                <input
                    type="date"
                    placeholder="Publish"
                    name="publish"
                    onChange={handleModifyChange}
                    value={modifyMusic.publish}
                ></input>
                <br />
                <button onClick={handleModify}>수정</button>
                <hr />
                <input
                    type="text"
                    placeholder="ID"
                    name="id"
                    onChange={handelDelIDChange}
                    value={delID || ''}
                />
                <br />
                <button onClick={handleDelete}>삭제</button>
                <hr />
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    onChange={handleTitleChange}
                    value={searchTitle}
                />
                <button onClick={handleSearch}>검색</button>
            </div>
            <div>
                <input type="text" onChange={handleTextChange} />
                <input type="file" onChange={handleFilesChange} multiple />
                <button onClick={handleSubmit}>전송</button>
            </div>
            <div>
                <input type="date" name="" onChange={handleDate} />
                <button onClick={handleDateSubmit}>전송</button>
            </div>
        </div>
    )
}

export default App
