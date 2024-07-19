import { Route, Routes, useNavigate } from 'react-router-dom'
import styles from './Content.module.css'
import Sub from './Sub/Sub'
import { useState } from 'react'

const Content = ({ mainMenu }) => {
    const navi = useNavigate()

    const [members, setMembers] = useState([
        { id: 1001, name: '밍쥬', age: 4, city: 'BABO' },
        { id: 1002, name: '밍쏘', age: 14, city: 'MUNGCHUNGYEE' },
        { id: 1003, name: '웡히', age: 62, city: 'MOLA' },
        { id: 1004, name: '뭉타링', age: 104, city: 'UNIBUNNY' },
        { id: 1005, name: '승혜체고', age: 25, city: 'Seoul' },
        { id: 1006, name: '밤토리', age: -400, city: 'JEOSESANG' },
    ])
    const [member, setMember] = useState({ id: 0, name: '', age: '', city: '' })

    const [menus, setMenus] = useState([
        { id: 1001, menu: 'Americano', price: '2500', category: 'coffee' },
        { id: 1002, menu: 'Cafe Mocha', price: '3500', category: 'coffee' },
        { id: 1003, menu: 'Milk Tea', price: '3000', category: 'tea' },
        { id: 1004, menu: 'Green Tea', price: '3000', category: 'tea' },
        { id: 1005, menu: 'Orange Juice', price: '5500', category: 'juice' },
        { id: 1006, menu: 'Mango Juice', price: '5000', category: 'juice' },
    ])
    const [menu, setMenu] = useState({
        id: 0,
        menu: '',
        price: '',
        category: '',
    })

    const [boards, setBoards] = useState([
        {
            id: 1,
            title: '밍쥬야 아프지마',
            writer: '승혜체고',
            views: '908',
        },
        {
            id: 2,
            title: '밍쏘가 우리 조의 에이스',
            writer: '밍쥬는 바보',
            views: '73',
        },
        {
            id: 3,
            title: '웡히 메롱롱',
            writer: '밍쏘가리매운탕',
            views: '91',
        },
        {
            id: 4,
            title: '뭉타링 기분 웨구랭',
            writer: '내이름은 212',
            views: '990',
        },
        {
            id: 5,
            title: '승혜가 체고긴 해',
            writer: '밍쥬귀요밍',
            views: '1798271',
        },
        {
            id: 6,
            title: '밤토리 굴려버리기',
            writer: '뭉타링가링가',
            views: '70',
        },
    ])
    const [board, setBoard] = useState({
        id: 0,
        title: '',
        writer: '',
        views: '',
    })

    let mainContents
    let handleContents
    let mainContent
    let handleContent

    switch (mainMenu) {
        case 'member':
            mainContents = members
            handleContents = setMembers
            mainContent = member
            handleContent = setMember
            break
        case 'cafeMenu':
            mainContents = menus
            handleContents = setMenus
            mainContent = menu
            handleContent = setMenu
            break
        case 'board':
            mainContents = boards
            handleContents = setBoards
            mainContent = board
            handleContent = setBoard
            break
        default:
            break
    }

    return (
        <div className={styles.cont}>
            <div className={styles.subMenu}>
                <div className={styles.menu} onClick={() => navi('list')}>
                    목록
                </div>
                <div className={styles.menu} onClick={() => navi('add')}>
                    신규 등록
                </div>
                <div className={styles.menu} onClick={() => navi('update')}>
                    정보 수정
                </div>
                <div className={styles.menu} onClick={() => navi('delete')}>
                    삭제
                </div>
            </div>
            <div className={styles.contents}>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Sub
                                subMenu={'list'}
                                mainMenu={mainMenu}
                                mainContents={mainContents}
                            />
                        }
                    ></Route>
                    <Route
                        path="list"
                        element={
                            <Sub
                                subMenu={'list'}
                                mainMenu={mainMenu}
                                mainContents={mainContents}
                            />
                        }
                    ></Route>
                    <Route
                        path="add"
                        element={
                            <Sub
                                subMenu={'add'}
                                mainMenu={mainMenu}
                                mainContents={mainContents}
                                handleContents={handleContents}
                                mainContent={mainContent}
                                handleContent={handleContent}
                            />
                        }
                    ></Route>
                    <Route
                        path="update"
                        element={
                            <Sub
                                subMenu={'update'}
                                mainMenu={mainMenu}
                                mainContents={mainContents}
                                handleContents={handleContents}
                                mainContent={mainContent}
                                handleContent={handleContent}
                            />
                        }
                    ></Route>
                    <Route
                        path="delete"
                        element={
                            <Sub
                                subMenu={'delete'}
                                mainMenu={mainMenu}
                                mainContents={mainContents}
                                handleContents={handleContents}
                                mainContent={mainContent}
                                handleContent={handleContent}
                            />
                        }
                    ></Route>
                </Routes>
            </div>
        </div>
    )
}

export default Content
