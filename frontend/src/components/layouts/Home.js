import React from 'react';
import {Helmet} from "react-helmet";
import logo from '../../assets/img/yoh-logo.png';


class Home extends React.Component {

  render() { 

    return (  
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
    }
}
 
export default Home;