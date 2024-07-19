import styles from './Sub.module.css'

const Sub = ({
    mainMenu,
    subMenu,
    mainContents,
    handleContents,
    mainContent,
    handleContent,
}) => {
    let contentToRender
    switch (subMenu) {
        case 'list':
            contentToRender = (
                <List mainMenu={mainMenu} contents={mainContents} />
            )
            break
        case 'add':
            contentToRender = (
                <Add
                    mainMenu={mainMenu}
                    contents={mainContents}
                    handleContents={handleContents}
                    mainContent={mainContent}
                />
            )
            break
        case 'update':
            contentToRender = (
                <Update mainMenu={mainMenu} contents={mainContents} />
            )
            break
        case 'delete':
            contentToRender = (
                <Delete mainMenu={mainMenu} contents={mainContents} />
            )
            break
        default:
            contentToRender = (
                <List mainMenu={mainMenu} contents={mainContents} />
            )
            break
    }

    return <div className={styles.container}>{contentToRender}</div>
}

const Thead = ({ mainMenu }) => {
    // console.log(mainMenu)
    let header
    switch (mainMenu) {
        case 'member':
            header = (
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>City</th>
                </tr>
            )
            break
        case 'cafeMenu':
            header = (
                <tr>
                    <th>ID</th>
                    <th>Menu</th>
                    <th>Price</th>
                    <th>Category</th>
                </tr>
            )
            break
        case 'board':
            header = (
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Writer</th>
                    <th>Views</th>
                </tr>
            )
            break
        default:
            break
    }
    return <thead>{header}</thead>
}

const Tbody = ({ mainMenu, contents }) => {
    // console.log(contents)
    let body
    switch (mainMenu) {
        case 'member':
            body = contents.map(data => (
                <tr key={data.id}>
                    <td>{data.id}</td>
                    <td>{data.name}</td>
                    <td>{data.age}</td>
                    <td>{data.city}</td>
                </tr>
            ))
            break
        case 'cafeMenu':
            body = contents.map(data => (
                <tr>
                    <td>{data.id}</td>
                    <td>{data.menu}</td>
                    <td>{data.price}</td>
                    <td>{data.category}</td>
                </tr>
            ))
            break
        case 'board':
            body = contents.map(data => (
                <tr>
                    <td>{data.id}</td>
                    <td>{data.title}</td>
                    <td>{data.writer}</td>
                    <td>{data.views}</td>
                </tr>
            ))
            break
        default:
            break
    }
    return <tbody>{body}</tbody>
}

const List = ({ mainMenu, contents }) => {
    // console.log({ mainMenu, contents })
    return (
        <div className={styles.listBox}>
            <table>
                <Thead mainMenu={mainMenu} />
                <Tbody mainMenu={mainMenu} contents={contents} />
            </table>
        </div>
    )
}

const Add = ({ mainMenu, handleContents, mainContent }) => {
    let names = []
    let placeholeder = []

    switch (mainMenu) {
        case 'member':
            placeholeder[0] = 'Input Name'
            placeholeder[1] = 'Input Age'
            placeholeder[2] = 'Input City'
            names[0] = 'name'
            names[1] = 'age'
            names[2] = 'city'
            break
        case 'cafeMenu':
            placeholeder[0] = 'Input Menu'
            placeholeder[1] = 'Input Price'
            placeholeder[2] = 'Input Category'
            names[0] = 'menu'
            names[1] = 'price'
            names[2] = 'category'
            break
        case 'board':
            placeholeder[0] = 'Input Title'
            placeholeder[1] = 'Input Writer'
            placeholeder[2] = 'Input Views'
            names[0] = 'title'
            names[1] = 'writer'
            names[2] = 'views'
            break
        default:
            break
    }

    const handleChange = e => {
        console.log(e.target.name, e.target.value)
    }

    return (
        <div className={styles.addBox}>
            <div className={styles.inputBox}>
                <input
                    type="text"
                    placeholder="input ID"
                    name="name"
                    onChange={handleChange}
                ></input>
            </div>
            <div className={styles.inputBox}>
                <input
                    type="text"
                    placeholder={placeholeder[0]}
                    name={names[0]}
                    onChange={handleChange}
                ></input>
            </div>
            <div className={styles.inputBox}>
                <input
                    type="text"
                    placeholder={placeholeder[1]}
                    name={names[1]}
                    onChange={handleChange}
                ></input>
            </div>
            <div className={styles.inputBox}>
                <input
                    type="text"
                    placeholder={placeholeder[2]}
                    name={names[2]}
                    onChange={handleChange}
                ></input>
            </div>
            <div className={styles.inputBox}>
                <button>등록</button>
            </div>
        </div>
    )
}

const Update = () => {
    return (
        <div className={styles.updateBox}>
            <div className={styles.inputBox}>
                <input type="text"></input>
            </div>
            <div className={styles.inputBox}>
                <input type="text"></input>
            </div>
            <div className={styles.inputBox}>
                <input type="text"></input>
            </div>
            <div className={styles.inputBox}>
                <input type="text"></input>
            </div>
            <div className={styles.inputBox}>
                <button>수정</button>
            </div>
        </div>
    )
}

const Delete = () => {
    return (
        <div className={styles.delBox}>
            <div className={styles.inputBox}>
                <input type="text" placeholder="input ID to delete"></input>
            </div>
            <div className={styles.inputBox}>
                <button>삭제</button>
            </div>
        </div>
    )
}
export default Sub
