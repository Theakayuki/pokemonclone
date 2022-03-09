import './App.css';

import BodyContainer from './components/Hero/BodyContainer';
import Footer from './components/Footer/Footer';
import FooterSpacer from './components/FootSpacer/FooterSpacer';
import Navbar from './components/Navbar/Navbar';
import React from 'react';

function App() {
    return (
        <>
            <Navbar />
            <BodyContainer />
            <FooterSpacer />
            <Footer />
        </>
    );
}

export default App;
