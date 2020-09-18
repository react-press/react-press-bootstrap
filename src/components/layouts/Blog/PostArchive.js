import React, { useEffect, useContext, useState } from "react";
import axios from "axios";
import { ReactPressContext } from "../../../ReactPressProvider";
import { Container } from "react-bootstrap";
import Hero from "../../main/Hero";
import Posts from "./Posts";
import Loading from "../../main/Loading";

const PostArchive = (props) => {
  //Context
  const context = useContext(ReactPressContext);
  const api = context.api;
  const categories = context.categories;
  //State
  const [isLoaded, setIsLoaded] = useState(false);
  const [success, setSuccess] = useState(false);
  const [catID, setCatID] = useState(1);
  const [catTitle, setCatTitle] = useState([]);
  const [posts, setPosts] = useState([]);

  let slug = props.location.pathname;

  useEffect(() => {
    const catMap = () => {
      const map = categories.map((category) => {
        let idx = category.slug;

        if (slug === "/category/" + idx) {
          setCatID(category.id);
          setCatTitle(category.name);
          setSuccess(true);
        }
        return null;
      });
      return map;
    };

    catMap();
  }, [success, categories, slug]);

  useEffect(() => {
    if (success) {
      axios
        .get(`${api}/wp-json/wp/v2/posts?categories=${catID}`)

        .then((res) => {
          setPosts(res.data);
          setIsLoaded(true);
        });
    }
  }, [success, catID, api]);

  if (isLoaded) {
    return (
      <React.Fragment>
        <Container className="archive">
          <Hero title={catTitle} />
          <Posts posts={posts} isLoaded={isLoaded} />
        </Container>
      </React.Fragment>
    );
  }
  return <Loading />;
};

export default PostArchive;
