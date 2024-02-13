import React, { useState } from 'react';
import './App.css';

function App() {
    const [redBoxColor, setRedBoxColor] = useState('red');
    const [blueBoxColor, setBlueBoxColor] = useState('blue');

    const redClick = () => {
        if (redBoxColor === 'red') {
            setRedBoxColor('blue');
            setBlueBoxColor('red');
        } else {
            setRedBoxColor('red');
            setBlueBoxColor('blue');
        }
    };

    const blueClick = () => {
        if (blueBoxColor === 'blue') {
            setBlueBoxColor('red');
            setRedBoxColor('blue');
        } else {
            setBlueBoxColor('blue');
            setRedBoxColor('red');
        }
    };

    return (
        <div className="App">
            <div className={`box-${redBoxColor}`} onClick={redClick}></div>
            <div className={`box-${blueBoxColor}`} onClick={blueClick}></div>
        </div>
    );
}

export default App;
