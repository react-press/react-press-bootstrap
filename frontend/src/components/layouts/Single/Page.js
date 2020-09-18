import React from "react";
// import { Row, Container, Col } from 'react-bootstrap';
import Hero from "../../main/Hero";

const Page = ({ page, source_url }) => {
  return (
    <React.Fragment>
      <Hero title={page.title.rendered} source_url={source_url} />
    </React.Fragment>
  );
};

export default Page;
