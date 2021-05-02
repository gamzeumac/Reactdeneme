import React from 'react';
import State from './components/State';
import Card from './components/Card';
import myCollapse from './components/Collapse';
import './App.css';

const App = () => {
  return (
    <div className="App">
    <State />
    <div className="card-group">
      <myCollapse>
    <Card cardTitle= "Deneme1" cardText="Lorem Ipsum 1" updatedTime="Last Update 1" url="https://picsum.photos/id/1001/200/300" /></myCollapse>
    

     </div>
    </div>
  );
}

export default App;
