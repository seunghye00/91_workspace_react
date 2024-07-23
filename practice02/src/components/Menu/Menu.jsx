import styles from './Menu.module.css'

const Menu = () => {
    return (
        <div className={styles.menu}>
            <div className={styles.category}>멤버 관리</div>
            <div className={styles.category}>카페 메뉴 관리</div>
            <div className={styles.category}>게시판 관리</div>
        </div>
    )
}

export default Menu
