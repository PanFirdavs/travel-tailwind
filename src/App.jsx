import React from 'react';
import TopBar from './Components/TopBar';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Activities from './Components/Activities';
import Booking from './Components/Booking';
import Galery from './Components/Galery';
import Footer from './Components/Footer';
import Contacts from './Components/Contacts';

const App = () => {
  return (
    <>
    <TopBar />
    <Navbar />
    <Hero />
    <Activities />
    <Booking />
    <Galery />
    <Contacts />
    <Footer />
    </>
  );
}

export default App;