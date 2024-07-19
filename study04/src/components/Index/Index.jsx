import { useNavigate } from 'react-router-dom';
import styles from './Index.module.css';

// 구조 분해 할당 방식으로 props(propertise)에 있는 변수 중에 필요한 변수만 사용하는 방법
const Index = ({}) => {

  const navi = useNavigate();

  return (
    <div className={styles.index}>
       <div className={styles.title}>
         Index
       </div>
      <div className={styles.btnBox}>
        <div className={styles.box}>
          <button onClick={() => {navi('input')}}>toInput</button>
        </div>
        <div className={styles.box}>
           <button onClick={() => {navi('output')}}>toOutput</button>
         </div>
      </div>
    </div>
  );
}

export default Index;