import Section from "./Section/Section";
import Side from "./Side/Side";
import styles from './Body.module.css';

const Body = () => {
    return (
      <div className={styles.body}>
        <Section />
        <Side />
      </div>
    );
}

export default Body;