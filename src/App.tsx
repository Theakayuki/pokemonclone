import './App.css';

import BodyContainer from './components/Hero/BodyContainer';
import Navbar from './components/Navbar/Navbar';
import React from 'react';

function App() {
    return (
        <>
            <Navbar />
            <BodyContainer>
                <h1>This is an test</h1>
            </BodyContainer>
        </>
    );
}

export default App;
