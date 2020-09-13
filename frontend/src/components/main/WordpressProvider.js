import React, { useEffect, useState, createContext } from 'react';
import axios from 'axios';

export const UserContext = createContext();

export const UserProvider = ({props, children}) => {

    const [categories, setCategories] = useState(false);
    const [archiveTitle, setArchiveTitle] = useState('Blog');
    const [posts, setPosts] = useState([]);
    const [loading, setloading] = useState(false);
    const [slug] = useState(`/`);
    const [catID, setCat] = useState(1);
    // const [currentPage, setCurrentPage] = useState(1);
    // const [postsPerPage] = useState(3);

    useEffect(() => {
        //GETs categories maps the data
        const getCategories = () => {
        
          axios.get(`https://admin.react-press.net/wp-json/wp/v2/categories/`)
      
          .then((res) => {
              // console.log(res);
              res.data.map(category => {
      
                let idx = category.slug;
      
                if(slug === '/category/' + idx){
                  setCat(category.id)
                  setArchiveTitle(category.name)
                  console.log(catID)
                }
              })
            }
          )
          .then(()=> {
            setCategories(true)
          })
          .catch((err) => {
            console.log(err)
          })
        }
      getCategories();
    }, [catID, slug])

    useEffect(() => {
        if (categories) {
            //GET posts in category that match the slug
            axios.get(`https://admin.react-press.net/wp-json/wp/v2/posts?categories=${catID}`)
      
            .then(res =>{ 
              setPosts(res.data);
              setloading(true);
              // console.log(res.data)
            })
          }
      }, [categories, catID]);

    
    return (
            <UserContext.Provider
              value={{
                posts,
                loading,
                slug,
                archiveTitle
              }}
                  >
                {children}
            </UserContext.Provider>
    ) 

}