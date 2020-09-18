import React from "react";
import { Row, Container } from "react-bootstrap";
import Hero from "../../main/Hero";

const Page = ({ page, source_url }) => {
  return (
    <React.Fragment>
      <Container>
        <Hero title={page.title.rendered} source_url={source_url} />
      </Container>
      <Container>
        <Row>
          <div
            className="content-single"
            dangerouslySetInnerHTML={{ __html: page.content.rendered }}
          ></div>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Page;
