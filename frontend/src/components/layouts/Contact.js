import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '../modules/Hero'
import ContactForm from '../modules/ContactForm';

const Contact = () => (
  <React.Fragment>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Contact</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Hero/>
      <ContactForm />
  </React.Fragment>   
)

export default Contact;