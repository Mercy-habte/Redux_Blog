import './App.css';
import Nav from './components/nav'
import Main from './components/main'
import Home from './components/home';
import About from './components/about'
import Footer from './components/footer';
import CategoriesBlog from './components/CategoriesBlog'
import Login from './components/Login';
import { BrowserRouter, Routes, Route, Redirect } from 'react-router-dom'
import blogs from './components/blogs';
import Contact from './components/contact';
import pageRenderer from './pageRenderer';
import CategoryBlogs from './components/CategoryBlogs';
import JobSeekerRegister from './components/JobSeekerRegister';
import Register from './components/Register';
import JobRecruiterRegister from './components/JobRecruiterRegister';
import ReadMore from './components/ReadMore';
import { useSelector } from 'react-redux';
import Logout from './components/Logout';


function App() {
 
   
    <BrowserRouter>
    

    {/* <Nav/> */}
      <Routes>
        <Route path='/about' element={<About />} />
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/categories' element={<CategoriesBlog />} />
          <Route path='/categories/:categoryId' element={<CategoryBlogs />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register/>} />
          <Route path='/read-more' element={<ReadMore/>} />
          <Route path='/job-seeker-Register' element={<JobSeekerRegister />} />
          <Route path='/job-recruiter-Register' element={<JobRecruiterRegister />} />
      </Routes>
    </BrowserRouter>
    ;
}

export default App;
