import React from 'react';
import './App.css';
import SideBar from './SideBar.js';
import Feed from './Feed';
import Widgets from './Widgets';

function App() {
  return (
    <div className="App">
      <SideBar/>
      <Feed/>
      <Widgets/>
    </div>
  );
}

export default App;
