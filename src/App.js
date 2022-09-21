import './App.css';
import About from './components/About';
import Feedback from './components/Feedback';
import Header from './components/Header';
import Navbar from './components/Navbar';
import './sassFile/main.scss'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Feedback/>
    </div>
  );
}

export default App;
