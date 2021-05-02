import React from 'react';
import State from './components/State';
import Card from './components/Card'
import './App.css';

const App = () => {
  return (
    <div className="App">
    <State />
    <Card cardTitle= "Deneme1" cardText="Lorem Ipsum 1" updatedTime="Last Update 1" url="https://picsum.photos/id/1001/200/300" />
    <Card cardTitle= "Deneme2" cardText="Lorem Ipsum 2" updatedTime="Last Update 2" url="https://picsum.photos/id/1006/200/300"  />
    <Card cardTitle= "Deneme3" cardText="Lorem Ipsum 3" updatedTime="Last Update 3" url="https://picsum.photos/id/1008/200/300"  />

     
    </div>
  );
}

export default App;
