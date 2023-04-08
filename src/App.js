import './App.css';
import Header from './Components/Header';
import MainContent from './Components/MainContent';
import Footer from './Components/Footer';

const list = [
  {
      name:'Ремонт техники',
      color:'white',
  },
  {
      name:'Ремонт одежды',
      color:'white',
  },
  {
      name:'Ремонт обуви',
      color:'black',
  },
  {
      name:'Ремонт сумок',
      color:'black',
  },
]


function App() {
  return (
    <div className="App">
  
      <Header data = {list}/>
      <MainContent data = {list}/>
      <Footer/>
    </div>
  );
}

export default App;
