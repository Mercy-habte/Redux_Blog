import './App.css';
import Nav from './components/nav'
import Main from './components/main'
import Home from './components/home'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
function App() {
  return (
    <Router>
    <Nav/>
    <Main/>
    <Home/>
    </Router>
  );
}

export default App;
