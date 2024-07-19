import { Route, Routes, useNavigate } from 'react-router-dom';
import styles from './Content.module.css';
import Sub from './../Sub/Sub'

const Content = ({content}) => {

    const navi = useNavigate();

    return (
        <div className={styles.container}>
            <div className={styles.tabs}>
                <div className={styles.tab} onClick={() => {navi('list')}}>
                    List
                </div>
                <div className={styles.tab} onClick={() => {navi('add')}}>
                    Add
                </div>
                <div className={styles.tab} onClick={() => {navi('modify')}}>
                    Modify
                </div>
                <div className={styles.tab} onClick={() => {navi('delete')}}>
                    Delete
                </div>
            </div>
            <div className={styles.content}>
                <Routes>
                    <Route path='/' element={<Sub content={"Listing"}/>}></Route>
                    <Route path='list' element={<Sub content={"Listing"}/>}></Route>
                    <Route path='add' element={<Sub content={"Add"}/>}></Route>
                    <Route path='modify' element={<Sub content={"Modify"}/>}></Route>
                    <Route path='delete' element={<Sub content={"Delete"}/>}></Route>
                </Routes>
            </div>
        </div>
    );
}

export default Content;