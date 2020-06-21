import React from 'react';
import { Helmet } from "react-helmet";
import { Button }from 'react-bootstrap';


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
        <Button variant="primary">Primary</Button>{' '}
      </React.Fragment>   
      );
    }
}
 
export default Home;