import React from 'react';
import {Helmet} from "react-helmet";
import logo from '../../assets/img/react-press-300.png';


const Home = () => (
  <React.Fragment>
      <Helmet>
          <meta charSet="utf-8" />
          <title>Home</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="pt-3">
            Coming Soon...
          </p>
        </header> 
    </React.Fragment>
); 
 
export default Home;