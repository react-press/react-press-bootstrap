import React, { useContext, useState, useEffect } from 'react';
// import axios from 'axios';
import { ReactPressContext } from '../../ReactPressProvider';
// import Hero from '../main/Hero';

const FrontPage = () => {
    // const [isLoaded, setIsLoaded] = useState(false);
    // const [source_url, setSourceUrl] = useState('');
    const context = useContext(ReactPressContext);
    const pages = context.pages;
    const [frontPage, setFrontPage] = useState([]);
    // const [featuredMedia, setFeaturedMedia] = useState([]);

    const id = 46;

    useEffect(()=> {

        const pageMap = () => {
            const map = pages.map((page) => {
              
              let idx = page.id
              
              if(id === idx){
                setFrontPage(page);
                // setFeaturedMedia(page.featured_media);
                // setIsLoaded(true);
              }
              return page;
            })
            return map;
          } 
          pageMap();
      }, [pages])
      console.log(frontPage)
    
    return (
        <React.Fragment>
        Front Page
        </React.Fragment>
    )
}

export default FrontPage;