import React from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar';
import MainFrm_Filter from './components/MainFrm_Filter';
function App() {
    return (
        <React.Fragment>
            <NavigationBar />
            <MainFrm_Filter />
        </React.Fragment>
    );
}

export default App;
