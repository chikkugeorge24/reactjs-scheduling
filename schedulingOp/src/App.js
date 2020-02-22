import React from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar';
import MainFrm_Filter from './components/MainFrm_Filter';
import MainFrmTableList from './components/MainFrm_TableList';
function App() {
    return (
        <div className="content">
            <NavigationBar />
            <MainFrm_Filter />
            <MainFrmTableList />
        </div>
    );
}

export default App;
