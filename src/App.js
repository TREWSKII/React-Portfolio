import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Nav from './components/Nav';
function App() {
  return (
    <div className="flex-col bg-gradient-to-t from-indigo-200 flex h-screen items-center justify-center bg-blue-500">
    <Nav/>
    <div className="grow">body here</div>
    <Footer/>
  </div>
  );
}

export default App;
