import React, { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  NavbarResponsive,
  Header,
  Container,
  Typography,
  BasicButton,
  SimpleNavBar,
  Row,
  Column,
  HoverCard,
  Spacer,
  Line,
} from "../layouts";

export const Home = () => {
  const [feturedData, setFeaturedData] = useState(null);
  const [recentBlog, setRecentBlog] = useState(null);

  useEffect(() => {
    getFeaturedData();
    getRecentBlog();
  }, []);

  function getFeaturedData() {
    axios.get("/getFeaturedBlog").then((blogs) => {
      setFeaturedData(blogs.data);
    });
  }

  function getRecentBlog(blog) {
    axios.get("/getRecent").then((blogs) => {
      setRecentBlog(blogs.data);
    });
  }

  function returnCard(recentBlog) {
    var oneRow = [];
    var seperatedRow = [];
    for (var i = 0; i < recentBlog.length; i += 3) {
      oneRow.push(
        recentBlog.slice(i, i + 3).map((blog) => {
          return (
            <Column>
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
    }
    console.log(oneRow)
    seperatedRow.push(
      oneRow.map((item) => {
        return <Row style={{margin: "3rem 0"}} className="row-no-padding">{item}</Row>;
      })
    );
    return seperatedRow;
  }

  return (
    <>
      <Header
        height="70vh"
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
        <Row>
          <Column
            style={{ margin: "auto", textAlign: "center" }}
            className="column-60"
          >
            <Typography
              className="display-3"
              style={{ color: "white", margin: "3rem 0" }}
            >
              Let's do it together.
            </Typography>
            <Typography
              className="p lead"
              style={{ color: "white", margin: "1.5rem 0" }}
            >
              We travel the world in search of stories. Come along for the ride.
            </Typography>
            <BasicButton style={{ backgroundColor: "orange",marginTop : '1.5rem' }}>
              View Latest Posts
            </BasicButton>
          </Column>
        </Row>
      </Header>
      <SimpleNavBar style={{ backgroundColor: "white", color: "black" }}>
        <li>
          <Link to="/categories/nature">Nature</Link>
        </li>
        <li>
          <Link to="/categories/photography">PhotoGraphy</Link>
        </li>
        <li>
          <Link to="/categories/relaxation">Relaxation</Link>
        </li>
        <li>
          <Link to="/categories/vacation">Vacation</Link>
        </li>
        <li>
          <Link to="/categories/travel">Travel</Link>
        </li>
        <li>
          <Link to="/categories/adventure">Adventure</Link>
        </li>
      </SimpleNavBar>

      <Container padding="0.5rem" textAlign="center">
        <Typography className="h3">Featured Posts</Typography>
        <Container style={{ padding: ".5rem 0", margin: "auto" }}>
          <Container>
            <Row>
              {feturedData &&
                feturedData.map((blog) => {
                  return (
                    <Column>
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
                                backgroundColor: "orange",
                                display: "inline-block",
                                width: "auto",
                              }}
                              >
                              <Typography className="small">
                                {blog.category.toUpperCase()}
                              </Typography>
                            </Container>
                            <Container
                              margin=" 4rem 0 15px 0"
                              padding="5px 10px"
                              >
                              <Typography
                                className="h5"
                                style={{ color: "white" }}
                                >
                                {blog.title}
                              </Typography>
                            </Container>
                            <Line
                              color="grey"
                              width="100%"
                              style={{ margin: "5px 0" }}
                              />
                            <Container padding="0">
                              <Row>
                                <Column>{blog.authorName}</Column>
                                <Column className="column-offset-33">
                                  {blog.DateTime}
                                </Column>
                              </Row>
                            </Container>
                          </Container>
                        </HoverCard>
                      </Link>
                    </Column>
                  );
                })}
            </Row>
                </Container>
          </Container>

        <Spacer height="2rem" width="100%" />

        <Typography className="h3">Recents Posts</Typography>

          {recentBlog && returnCard(recentBlog)}
      </Container>
     

      <Container
        style={{
          backgroundImage:
            "linear-gradient(180deg,rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.2))",
        }}
      ></Container>
    </>
  );
};
