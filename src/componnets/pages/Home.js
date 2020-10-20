import React from 'react';
import '../../App.css';
import LandingPage from '../LandingPage/LandingPage';
import Cards from '../cards/Cards';
import Footer from '../footer/Footer';

// Home Page is the Landing Page aka route to "/"
function Home () {

    return (
        <>
        <LandingPage />
        <Cards />
        <Footer/>
        </>
    )
}

export default Home;
