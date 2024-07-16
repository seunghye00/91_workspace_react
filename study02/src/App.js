import './App.css';
import Header from './components/Header/Header.jsx';
import Navi from './components/Navi/Navi.jsx';
import Body from './components/Body/Body.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {

  // JSX의 결과로 반환시킬 수 있는 결과 값은 최상위 컴포넌트 하나만 기능함.
  // 하나 이상의 컴포넌트를 반환시켜야 할 경우 Fragment를 통해 가상의 최상위 컴포넌트로 묶어주는 기법 사용 가능 <></>
  // 참고로 Fragment는 개발자 도구에 나타나지 않음.

  // Local Scoping : 
  
  return (
    <div className="container">
      <Header />
      <Navi />
      <Body />
      <Footer />
    </div>
  );
}

export default App;