import NarBar from './navbar/narbar';
import ItemListContainer from './components/containers/ItemListContainer';
import './App.css';
import React from 'react';


function App() {
  return (
    <div className="App">
      <NarBar />
      <ItemListContainer />
    </div>
  );
}

export default App;
