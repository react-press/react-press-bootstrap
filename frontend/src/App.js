import React from 'react';
import {Helmet} from "react-helmet";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Page from './components/Page';

function App() {
  return (
    <div className="App">
      <Page/>
    </div>
  );
}

export default App;
