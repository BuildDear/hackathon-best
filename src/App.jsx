import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation  } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Course from './pages/course/course.jsx';
import Contactus from './pages/contactus/contactus.jsx';
import Gallery from './pages/gallery/gallery.jsx';
import Home from './pages/home/home.jsx';
import Login from './pages/login/login.jsx'
import Register from './pages/register/register.jsx'


function App() {

  return (
    <Router>
        <div>
            <Routes>
              <Route path="/" element={<Layout><Home /></Layout>} />
              <Route path="/Contactus" element={<Layout><Contactus /></Layout>} />
              <Route path="/Gallery" element={<Layout><Gallery /></Layout>} />
              <Route path="/Course" element={<Layout><Course /></Layout>} />
              <Route path="/Login" element={<Layout><Login /></Layout>} />
              <Route path="/Register" element={<Layout><Register /></Layout>} />
            </Routes>
        </div>
    </Router>    
  );
}



export default App;
