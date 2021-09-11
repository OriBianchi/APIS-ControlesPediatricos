/* eslint-disable prettier/prettier */
import React from 'react'
import imagen from './h-hands.png';
import imagen2 from './h-heart.png';
import '../style.css';

function App() {
    return (
        <div className="App">
            <img src={imagen} className="bee" alt="Abeja" />
            <img src={imagen2} className="bee" alt="Abeja" />
        </div>
    );
}

export default App;
