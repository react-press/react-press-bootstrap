import React, { Component } from 'react';
import {Helmet} from "react-helmet";
import logo from '../assets/img/logo.svg';
import '../assets/sass/App.scss';


class Page extends React.Component {
      render() { 
        return (  
        <>     
        <Helmet>
            <meta charSet="utf-8" />
            <title>My Title</title>
            <link rel="canonical" href="http://mysite.com/example" />
          </Helmet>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header> 
          </>
          );
    }
    }
 
export default Page;