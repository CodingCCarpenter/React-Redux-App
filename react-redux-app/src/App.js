import React from 'react';
// import ReactDom from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from redux-thunk;


import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hogwarts</h1>
        <SortingCeremony />
      </header>
    </div>
  );
}

export default App;
