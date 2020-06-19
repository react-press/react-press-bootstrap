import React, { Component } from 'react';
import {Helmet} from "react-helmet";
import logo from '../../assets/img/logo.svg';
import '../../assets/sass/__main.scss';


class Home extends React.Component {

  render() { 

    return (  
    <React.Fragment>
      <Helmet>
          <meta charSet="utf-8" />
          <title>Page</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <h1>Page</h1>
      </React.Fragment>   
      );
    }
}
 
export default Home;