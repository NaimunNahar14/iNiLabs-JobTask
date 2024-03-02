import React from 'react';
import NavBar from '../Shared/NavBar';
import Banner from './Banner';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
import Section7 from './Section7';
import Section8 from './Section8';
import Footer from '../Shared/Footer';

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <Section1></Section1>
            <Section2></Section2>
            <Section6></Section6>
            <Section3></Section3>
            <Section4></Section4>
            <Section5></Section5>
            <Section7></Section7>
           <Section8></Section8>
           <Footer></Footer>
        </div>
    );
};

export default Home;