import React, { useEffect, useState, createContext } from "react";
import axios from "axios";
import Loading from "./components/main/Loading";

export const ReactPressContext = createContext();

export const ReactPressProvider = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [categories, setCategories] = useState([]);
  const [posts, setPosts] = useState([]);
  const [pages, setPages] = useState([]);
  // const [customPosts, setCustomPosts] = useState([]);
  const [api] = useState("https://admin.react-press.net");

  useEffect(() => {
    const getCategories = () => {
      const categories = axios.get(`${api}/wp-json/wp/v2/categories/`);
      const posts = axios.get(`${api}/wp-json/wp/v2/posts`);
      const pages = axios.get(`${api}/wp-json/wp/v2/pages`);
      // const customPost = axios.get(`${api}/wp-json/wp/v2/custom-post`);

      Promise.all([categories, posts, pages]).then((res) => {
        setCategories(res[0].data);
        setPosts(res[1].data);
        setPages(res[2].data);
        // setCustomPosts(res[3].data);
        setIsLoaded(true);
      });
    };
    getCategories();
  }, [api]);

  if (isLoaded) {
    return (
      <ReactPressContext.Provider
        value={{
          categories,
          posts,
          pages,
          api,
        }}
      >
        {children}
      </ReactPressContext.Provider>
    );
  }
  return <Loading />;
};
