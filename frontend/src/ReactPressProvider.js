import React, { useEffect, useState, createContext } from 'react';
import axios from 'axios';

export const ReactPressContext = createContext();

export const ReactPressProvider = ({props, children}) => {

    const [isLoaded, setIsLoaded] = useState(false);
    const [categories, setCategories] = useState([]);
    const [posts, setPosts] = useState([]);
    const [pages, setPages] = useState([]);

    useEffect(() => {
        const getCategories = () => {
        
          const categories = axios.get(`https://admin.react-press.net/wp-json/wp/v2/categories/`);
          const posts = axios.get('https://admin.react-press.net/wp-json/wp/v2/posts');
          const pages = axios.get('https://admin.react-press.net/wp-json/wp/v2/pages');

          Promise.all( [categories, posts, pages])

          .then((res) => {
            
            setCategories(res[0].data);
            setPosts(res[1].data);
            setPages(res[2].data);
            setIsLoaded(true);

            }
          )
        }
      getCategories();
    }, [])
    
    if(isLoaded){
    return (
            <ReactPressContext.Provider
              value={{
                categories,
                posts,
                pages
              }}
                  >
                {children}
            </ReactPressContext.Provider>
    ) 
            } return <h3>Loading....</h3>

}