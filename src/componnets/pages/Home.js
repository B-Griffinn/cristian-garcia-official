import React from 'react';
import '../../App.css';
import LandingPage from '../LandingPage/LandingPage';
import Footer from '../footer/Footer';
import About from '../about/About';


// Home Page is the Landing Page aka route to "/"
function Home () {

    return (
        <>
        <LandingPage />
        <About />
        <Footer/>
        </>
    )
}

export default Home;
