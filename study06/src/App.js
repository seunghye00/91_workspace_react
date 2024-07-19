import './App.css'
import { useArrayStore, useContactStore, useStore } from './store/store'

const Comp2 = () => {
    const { str, setStr } = useStore()
    const { arr, add } = useArrayStore()
    const { contact, addContact, delContact } = useContactStore()

    return (
        <div>
            {str}
            <hr />
            <button
                onClick={() => {
                    setStr('Hello Zustand')
                }}
            >
                str 내용 변경
            </button>
            <hr />
            <ul>
                {arr.map((item, index) => {
                    return <li key={index}>{item}</li>
                })}
            </ul>
            <hr />
            <button
                onClick={() => {
                    add('Grape')
                }}
            >
                배열 내용 추가
            </button>
            <hr />
            <ul>
                {contact.map((item, index) => {
                    return (
                        <li key={index}>
                            {item.id} : {item.name} : {item.contact}
                        </li>
                    )
                })}
            </ul>
            <button
                onClick={() => {
                    delContact(1001)
                }}
            >
                삭제
            </button>
        </div>
    )
}
const Comp1 = () => {
    return (
        <div>
            <Comp2 />
        </div>
    )
}

function App() {
    return (
        <div className="container">
            <Comp1 />
        </div>
    )
}

export default App
