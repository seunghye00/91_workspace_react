import { useState } from 'react';
import './App.css';
import styles from './App.module.css';
import Index from './components/Index/Index';
import Input from './components/Input/Input';
import Output from './components/Output/Output';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {

  // Paging 기법 2가지
  // 1. 상태 변수 활용 (규모가 작을 때 사용)
  // 2. url을 변경    

  // 첫번째 방법
  // const [page,setPage] = useState("/");

  const [menus, setMenus] = useState([
    {id: 1001, name: "Americano", price: 2000},
    {id: 1002, name: "Cafe Latte", price: 3500},
    {id: 1003, name: "Cafe Mocha", price: 4000},
    {id: 1004, name: "Orange Juice", price: 5000},
    {id: 1005, name: "Mango Juice", price: 6000}
  ]);

  return (
    <div className={styles.container}>
      <Router> 
      {/* Router 태그로 감싼 내부는 Router에 의해서 url이 변경될 가능성이 있다. ==> Router의 영향력 행사 가능 범위 지정 */}
      <div className={styles.box}>
        {/* functional conponent ==> 함수처럼 동작함. 즉, 매개변수 전달 가능
            - 전달 방법 : 태그의 속성(key)과 값(value)을 부여
            - 아래 코드는 setPage 함수의 주소값을 'setPage'키에 담아서 Index에 전달하는 방법  */}
        {/* {page === "/" && <Index setPage={setPage} />} */}
        {/* {page === "input" && <Input setPage={setPage} setMenus={setMenus} />} */}
        {/* {page === "output" && <Output setPage={setPage} menus={menus} setMenus={setMenus} />} */}
          
        <Routes>
          {/* Routes 태그 내부는 무조건 url이 변경됨. */}
          <Route path='/' element={<Index />}/>
          <Route path='input' element={<Input  setMenus={setMenus}/>}/>
          <Route path='output' element={<Output menus={menus} setMenus={setMenus}/>}/>
        </Routes>
      </div>  
      </Router> 
    </div>
  );
}

export default App;