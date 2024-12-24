import React from 'react';
import LoginPage from './pages/LoginPage';
import '@fontsource/public-sans'; // This imports Public Sans font
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';


const App = () => {
    return (
        <div className="App">
            <LoginPage />
        </div>
    );
};

export default App;
