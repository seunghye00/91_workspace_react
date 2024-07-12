import './App.css';
import Header from './components/Header/Header.jsx';
import Navi from './components/Navi/Navi.jsx';
import Body from './components/Body/Body.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
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