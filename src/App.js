import React from 'react';
import GlobalStyle from './globalStyles';
import Home from './pages/HomePage/Home';
import Services from './pages/Services/Services';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import {Footer, NavBar} from './components';
import OurClients from "./pages/OurClients/OurClients";
import AboutUs from "./pages/AboutUs/AboutUs";

function App() {
    return (
        <Router>
            <GlobalStyle/>
            <ScrollToTop/>
            <NavBar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/services' exact element={<Services/>}/>
                <Route path='/our-clients' exact element={<OurClients/>}/>
                <Route path='/about-us' exact element={<AboutUs/>}/>
            </Routes>
            <Footer/>
        </Router>
    );
}

export default App;
