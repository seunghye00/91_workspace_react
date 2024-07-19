import { useState } from 'react';
import styles from './Input.module.css';
import { useNavigate } from 'react-router-dom';

const Input = ({setMenus}) => {
  
  const navi = useNavigate();

  const [menu, setMenu] = useState({id: 0, name: '', price: ''});
  const handleChange = (e) => {
    const {name, value} = e.target;
    setMenu(prev => ({...prev, [name]: value}));
  };

  const handleToIndex = () => {
    navi('/');
  };
  const handleAdd = () => {
    setMenus(prev => [...prev, menu]);
    setMenu({id: 0, name: '', price: ''});
  }
  return (
    <div className={styles.input}>
      <div className={styles.title}>
        Input Form
      </div>
      <div className={styles.inputBox}>                                                                         
        <input type='text' placeholder='input id' name='id' value={menu.id || ''} onChange={handleChange}/>
      </div>
      <div className={styles.inputBox}>
        <input type='text' placeholder='input name' name='name' value={menu.name} onChange={handleChange}/>
      </div>
      <div className={styles.inputBox}>
        <input type='text' placeholder='input price' name='price' value={menu.price || ''} onChange={handleChange}/>
      </div>
      <div className={styles.btnBox}>
        <button onClick={handleAdd}>추가</button>
        <button onClick={handleToIndex}>취소</button>
      </div>
    </div>
  );    
}

export default Input;