import React, { useEffect, useState, createContext } from 'react';
import axios from 'axios';

export const ReactPressContext = createContext();

export const ReactPressProvider = ({children}) => {

    const [isLoaded, setIsLoaded] = useState(false);
    const [categories, setCategories] = useState([]);
    const [posts, setPosts] = useState([]);
    const [pages, setPages] = useState([]);
    const [customPosts, setCustomPosts] = useState([]);
    

    useEffect(() => {
        const getCategories = () => {
        
          const categories = axios.get(`https://admin.react-press.net/wp-json/wp/v2/categories/`);
          const posts = axios.get('https://admin.react-press.net/wp-json/wp/v2/posts');
          const pages = axios.get('https://admin.react-press.net/wp-json/wp/v2/pages');
          const customPost = axios.get('https://admin.react-press.net/wp-json/wp/v2/custom-post');

          Promise.all( [categories, posts, pages, customPost])

          .then((res) => {
            
            setCategories(res[0].data);
            setPosts(res[1].data);
            setPages(res[2].data);
            setCustomPosts(res[3].data);
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
                pages,
                customPosts
              }}
                  >
                {children}
            </ReactPressContext.Provider>
    ) 
            } return <h3>Loading....</h3>

}