import React from 'react';
import './App.css';
import Login from './Login';
import Signup from './Signup';

function App() {
    return (
        <div className="App">
            <Signup /> {/* Render the Login component */}
        </div>
    );
}

export default App;
