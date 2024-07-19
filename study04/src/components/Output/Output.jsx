import { useNavigate } from 'react-router-dom';
import styles from './Output.module.css';

const Output = ({menus, setMenus}) => {

  const navi = useNavigate();

  return (
    <div className={styles.output}>
      <div className={styles.title}>
        Output
      </div>
      <div className={styles.contents}>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              menus.map(menu => (
                <tr key={menu.id}>
                  <td>{menu.id}</td>
                  <td>{menu.name}</td>
                  <td>{menu.price}</td>
                  <td><button onClick={() => setMenus(prev => prev.filter((m) => m.id !== menu.id))}>X</button></td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
      <div className={styles.btn}>
        <button onClick={()=>navi('/')}>첫페이지로</button>
      </div>
    </div>
  );
}

export default Output;