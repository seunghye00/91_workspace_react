import styles from './Section.module.css';

const Section = () => {
    return (
      // <div className={styles.section + " " + styles.bgred}></div>
      <div className={`${styles.section} ${styles.bgred}`}></div>
    );
}

export default Section;