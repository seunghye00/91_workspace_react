import { useState } from 'react'
import axios from 'axios'
import { host } from './config/config.js'

function App() {
    const [file, setFile] = useState(null)
    const handleUpload = () => {
        const formData = new FormData()
        formData.append('file', file)
        axios.post(`http://${host}/file`, formData)
    }
    const handleFileChange = e => {
        setFile(e.target.files[0])
    }
    const handleList = () => {
        axios.get(`http://${host}/file`).then(resp => {
            console.log(resp.data)
            setFile(resp.data)
        })
    }
    const handleDelete = e => {
        const sysname = e.target.dataset.sysname
        axios.delete(`http://${host}/file/${sysname}`).then(resp => {
            console.log(resp)
        })
    }
    return (
        <div className="App">
            <fieldset>
                <legend>File Upload</legend>
                <input type="file" onChange={handleFileChange}></input>
                <button onClick={handleUpload}>전송</button>
            </fieldset>
            <fieldset>
                <legend>File List</legend>
                <button onClick={handleList}>파일리스트</button>
                <div id="fileList">
                    {file && file.length > 0 ? (
                        file.map((e, i) => {
                            return (
                                <div key={i}>
                                    {e.seq}.{' '}
                                    <a
                                        href={`http://${host}/file/${e.sysname}/${e.oriname}`}
                                        download
                                    >
                                        {e.oriname}
                                    </a>
                                    <div
                                        className="delBtn"
                                        data-sysname={e.sysname}
                                        onClick={handleDelete}
                                        style={{
                                            cursor: 'pointer',
                                            display: 'inline-block',
                                            marginLeft: '10px',
                                        }}
                                    >
                                        X
                                    </div>
                                </div>
                            )
                        })
                    ) : (
                        <div>No files available</div> // 파일이 없을 때 표시할 내용
                    )}
                </div>
            </fieldset>
        </div>
    )
}

export default App
