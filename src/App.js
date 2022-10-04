import './App.css';
import About from './components/About';
import Feedback from './components/Feedback';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Team from './components/Team';
import AboutUs from './components/AboutUs';
import './sassFile/main.scss'
import Clients from './components/Clients';
import Project from './components/Project';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Feedback/>
      <Team/>
      <AboutUs/>
      <Clients/>
      <Project/>
      <Footer/>
    </div>
  );
}

export default App;
