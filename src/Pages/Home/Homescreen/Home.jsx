import React from 'react';
import HeroSection from '../HeroSection';
import MySkills from '../MySkills';
import AboutMe from "../AboutMe";
import MyPortfolio from "../MyPortfolio"
import ContactMe from "../ContactMe";

function Home() {
    return (
        <>
            <HeroSection/>
            <MySkills/>
            <AboutMe/>
            <MyPortfolio/>
            <ContactMe/>
        </>
    );
}

export default Home;