import styles from './Menu.module.css';

const Menu = ({menu}) => {
    return (
        <div className={styles.container}>
            {menu}
        </div>
    );
} 

export default Menu;