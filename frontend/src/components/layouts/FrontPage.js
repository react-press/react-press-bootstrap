import React, { useContext, useState, useEffect } from 'react';
// import axios from 'axios';
import { ReactPressContext } from '../../ReactPressProvider';
import Hero from '../main/Hero';

const FrontPage = () => {
    // const [isLoaded, setIsLoaded] = useState(false);
    // const [source_url, setSourceUrl] = useState('');
    const context = useContext(ReactPressContext);
    const pages = context.pages;
    const [frontPage, setFrontPage] = useState([]);
    // const [featuredMedia, setFeaturedMedia] = useState([]);

    const id = 46;
    const title = 'Front Page Title';
    const source_url = 'http://via.placeholder.com/1980'

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
          <div className="front-page">
          <Hero
            title={title}
            source_url={source_url}
          />
          </div>
    )
}

export default FrontPage;