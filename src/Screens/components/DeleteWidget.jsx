import React, { useState, useEffect } from "react";
import { Link,Redirect } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./miscellanous.css";
import {
  Alert,
  Column,
  HoverCard,
  Typography,
  Row,
  Container,
  Modal,
  Line,
  Spacer,
  RoundButtons,
} from "../../layouts";
export const DeleteWidget = ({ category }) => {
  const [Blog, setBlog] = useState(null);
  const [modalDisplay, setModalDisplay] = useState(false);
  const [blogIdArray, setBlogIdArray] = useState([]);

  useEffect(() => {
    axios
      .get("/getBlogByCategory", { params: { category } })
      .then((blog) => {
        setBlog(blog.data);
      });
  }, [category]);

function deleteBlog() {
  var obj = {_id : blogIdArray}
  axios.get("/deleteBlogId",{params :obj}).then((res) => {console.log(res.data); return window.location.reload()})
}

  function returnCard(Blog) {
    if (!Blog) return;

    var oneRow = [];
    var seperatedRow = [];
    for (var i = 0; i < Blog.length; i += 3) {
      oneRow.push(
        Blog.slice(i, i + 3).map((blog) => {
          return (
            <Column
              onClick={(e) => {
                if (
                  !e.currentTarget.children[0].className.includes("hovercard")
                )
                  return;
                e.currentTarget.children[0].classList.toggle("borderRed");
                if (blogIdArray.includes(blog._id)) {
                  blogIdArray.splice(blogIdArray.indexOf(blog._id), 1);
                } else {
                  blogIdArray.push(blog._id);
                }
                setBlogIdArray([...blogIdArray]);
              }}
            >
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
                  <Line color="grey" width="100%" style={{ margin: "5px 0" }} />
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
      {blogIdArray.length == 0 ? null : (
        <Alert display={blogIdArray.length} type="danger" onClick={()=>{
          setModalDisplay(true);
        }} position="bottomRight" style={{ width: "5rem" }}>
          <FontAwesomeIcon icon="trash-alt" size="sm" />
        </Alert>
      )}
      {!Blog ? null : returnCard(Blog)}
      {<Modal display={modalDisplay} setDisplay={setModalDisplay} >
        <Container style={{width: '40%',backgroundColor:'white'}} padding="5rem 2.5rem 0 2.5rem">
      <Typography className="h3">{`Do you want to delete ${blogIdArray.length} blogs`}
       <Spacer height="10rem"/>
       <Row >
         <Column className="column-offset-40"><RoundButtons type="danger" value="Delete" onClick={deleteBlog}/></Column>
         <Column><RoundButtons type="info" value="Cancel"  onClick={() =>setModalDisplay(false)}/></Column>
       </Row>
      </Typography>
        </Container>
        </ Modal>}
    </>
  );
};
