import './App.css';
import TableBox from './components/TableBox/TableBox';
import ULBox from './components/ULBox/ULBox';
import ImageBox from './components/ImageBox/ImageBox';

// let은 값이 변할 수 있는 변수, const는 한번 값을 대입하면 변경이 물가한 상수
// const TableBox = function() {} // <== ECMA6 이전의 스타일
// 아래와 같이 UI를 만들어 받환하는 함수를 Cunctional Eomponent라고 한다.
// UI를 Functional Component로 구성할 경우, 함수처럼 재사용성을 가질 수 있음.(유지보수 비용 절감)


function App() {  // Main. 즉, React App의 시작점
  return (
    <div className="container">
      <TableBox/> 
      <ULBox/>
      <ImageBox/>
    </div>
  );
}

// <TableBox/>는 {TableBox()} 이런 방식도 가능

export default App;
