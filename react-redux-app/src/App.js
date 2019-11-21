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
        <h1>Welcome to Hogwarts</h1>
        <Img src= 'http://getwallpapers.com/wallpaper/full/0/6/b/15711.jpg' alt='hogwarts on foggy night' />
        <SortingCeremony />
      </header>
    </div>
  );
}

export default App;
