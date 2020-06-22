import React from 'react';
import { Helmet } from "react-helmet";
import ContactForm from '../ContactForm';


class Contact extends React.Component {

  render() { 

    return (  
    <React.Fragment>
      <Helmet>
          <meta charSet="utf-8" />
          <title>Contact</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <h1>Contact</h1>
        <ContactForm />
      </React.Fragment>   
      );
    }
}
 
export default Contact;