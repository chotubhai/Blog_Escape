import React, { useState, useEffect } from "react";
import {
  Header,
  NavbarResponsive,
  Container,
  Typography,
  Line,
  Spacer,
} from "../layouts";
import axios from "axios";
import { Link } from "react-router-dom";

export const Posts = (props) => {
  const [_id, setId] = useState(null);
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    setId(
      props.location.pathname.slice(
        props.location.pathname.lastIndexOf("/") + 1
      )
    );
  }, []);

  useEffect(() => {
    console.log(_id);
    axios
      .get("/getBlogById", { params: { _id: _id } })
      .then((blog) => {
        setBlog(blog.data);
      });
  }, [_id]);

  return (
    <>
      <Header
        height="70vh"
        backgroundImage={blog && `url(${blog[0].headerImg})`}
      >
        <NavbarResponsive style={{ backgroundColor: "transparent" }}>
          <li className="logo">
            <Link href="/">Escape</Link>
          </li>
          <li>
            <Link href="/">HOME</Link>
          </li>
          <li>
            <Link href="/categories">CATEGORIES</Link>
          </li>
          <li>
            <Link href="/about">ABOUT</Link>
          </li>
          <li>
            <Link href="/contact">CONTACT</Link>
          </li>
        </NavbarResponsive>
      </Header>
      <Container textAlign="center" padding="5rem">
        <Typography className="display-4">{blog && blog[1].title}</Typography>
        <Typography className="lead">{blog && blog[1].DateTime}</Typography>
        <Line width="60%" style={{ margin: "auto" }} />
        <Container textAlign="center" padding="5rem 0">
          <Typography>
            <div
              dangerouslySetInnerHTML={blog && { __html: blog[0].body }}
            ></div>
          </Typography>
          <Spacer style={{ margin: "2rem 0" }} />

          <Typography className="h3">How To Create A Readable Blog?</Typography>
          <Spacer style={{ margin: "2rem 0" }} />
          <Typography style={{ lineHeight: "1.5em" }}>
            Sportsman delighted improving dashwoods gay instantly happiness six.
            Ham now amounted absolute not mistaken way pleasant whatever. At an
            these still no dried folly stood thing. Rapid it on hours hills it
            seven years. If polite he active county in spirit an. Mrs ham
            intention promotion engrossed assurance defective. Insisted out
            differed ham man endeavor expenses. At on he total their he songs.
            Related compact effects is on settled do.
          </Typography>
        </Container>
      </Container>
    </>
  );
};
