import React, { useEffect, useState } from 'react';
import NoMatch from '../NoMatch';
import axios from 'axios';
import { Row, Container, Col } from 'react-bootstrap';
import Hero from '../../main/Hero';
import Posts from '../Blog/Posts';
import Pagination from '../../main/Pagination';


const Page = ({page, source_url}) => {
  

    return (
      <React.Fragment>
          <Hero
            title={page.title.rendered}
            source_url={source_url}
          />
      </React.Fragment>  
    )
    
}

export default Page;