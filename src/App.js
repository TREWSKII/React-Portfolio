import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Nav from './components/Nav';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
function App() {
  return (
    <div className="flex-col bg-gradient-to-t from-indigo-200 flex min-h-screen items-center justify-center bg-blue-500">
    <Nav/>
    <div className="grow"><AboutMe/><Projects/></div>
    <Footer/>
  </div>
  );
}

export default App;
