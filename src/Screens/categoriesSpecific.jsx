import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  NavbarResponsive,
  Header,
  Row,
  Typography,
  Container,
  Line,
  Column,
  HoverCard,
} from "../layouts";
import axios from "axios";

export const CategorySpecific = (props) => {
  const [category, setCategory] = useState(null);
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    setCategory(
      props.location.pathname.slice(props.location.pathname.lastIndexOf("/") + 1)
    );
  }, [props]);

  useEffect(() => {
    axios
      .get("/getBlogByCategory", { params: { category } })
      .then((blog) => {
        console.log(blog.data);
        setBlog(blog.data)});
  }, [category]);

  function returnCard(Blog) {
    var oneRow = [];
    var seperatedRow = [];
    for (var i = 0; i < Blog.length; i += 3) {
      oneRow.push(
        Blog.slice(i, i + 3).map((blog) => {
          return (
            <Column className="column-33">
              <Link to={`/posts/${blog._id}`}>
                <HoverCard
                  translateDown
                  backgroundImage={`url(${blog.headerImg})`}
                  style={{ padding: 0 }}
                >
                  <Container padding="1rem" textAlign="left">
                    <Container
                      margin=" 0 0 15px 0"
                      padding="5px 10px"
                      style={{
                        width: "auto",
                        backgroundColor: "orange",
                        display: "inline-block",
                      }}
                    >
                      <Typography className="small">{blog.category}</Typography>
                    </Container>
                    <Container margin=" 0 0 15px 0" padding="5px 10px">
                      <Typography className="h5" style={{ color: "white" }}>
                        {blog.title}
                      </Typography>
                    </Container>
                    <Line
                      color="grey"
                      width="100%"
                      style={{ margin: "5px 0" }}
                    />
                    <Container
                      padding="0"
                      flex
                      justifyContent="space-between"
                      style={{ color: "white" }}
                    >
                      <Row>
                        <Column className="column-33">
                          <Typography className="small">
                            {blog.authorName}
                          </Typography>
                        </Column>
                        <Column className="column-33 column-offset-25">
                          <Typography className="small">
                            {blog.DateTime}
                          </Typography>
                        </Column>
                      </Row>
                    </Container>
                  </Container>
                </HoverCard>
              </Link>
            </Column>
          );
        })
      );
      seperatedRow.push(
        oneRow.map((item) => {
          return <Row className="row-no-padding">{item}</Row>;
        })
      );
    }
    return seperatedRow;
  }

  return (
    <>
      <Header
        height="60vh"
        backgroundImage="linear-gradient(100deg,rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.04)) , url('http://uploads.webflow.com/560425adca8e085154729773/5614eb8fe8da77e53e25f7fc_photo-1439189741837-58720e8d82d5.jpg')"
      >
        <NavbarResponsive style={{ backgroundColor: "transparent" }}>
          <li className="logo">
            <a href="/">Escape</a>
          </li>
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="/categories">CATEGORIES</a>
          </li>
        </NavbarResponsive>
        <Row className="row-center" style={{paddingTop: '8rem'}}>
          <Typography className="h5">Showing all posts in</Typography>
          </Row><Row className="row-center">
          <Typography className="display-2" style={{ color: "white" }}>
            {category && category.toUpperCase()}
          </Typography>
        </Row>
      </Header>
      <Container padding="5rem">
        {blog && returnCard(blog)}
      </Container>
    </>
  );
};
