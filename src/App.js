import './App.css';
import Nav from './components/nav'
import Main from './components/main'
import Home from './components/home';
import About from './components/about'
import Footer from './components/footer';
import { BrowserRouter as Router, Routes, Route, Redirect } from 'react-router-dom'
import blogs from './components/blogs';
function App() {
  return (
    <Router>
      <Nav/>
      <Main/>
      <Home/> 
      <About/> 
       <Footer/>
     
    </Router>
  );
}

export default App;
