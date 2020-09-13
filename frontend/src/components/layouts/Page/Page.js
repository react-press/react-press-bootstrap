import React, { useEffect, useState } from 'react';
import NoMatch from '../NoMatch';
import axios from 'axios';
import { Row, Container, Col } from 'react-bootstrap';
import Hero from '../../main/Hero';
import Posts from '../Blog/Posts';
import Pagination from '../../main/Pagination';


const Page = ({page, post}) => {

  console.log(post);
  

    return (
      <React.Fragment>
          Page
      </React.Fragment>  
    )
    
}

export default Page;