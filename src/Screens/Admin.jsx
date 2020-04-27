import React, { useEffect, useState, useRef } from "react";
import { Link, Redirect } from "react-router-dom";
import JoditEditor from "jodit-react";
import {UpdateBlog} from './components/updateBlog';
import { DeleteWidget } from "./components/DeleteWidget";
import {
  AdminNavbar,
  SideNav,
  Column,
  HoverCard,
  Typography,
  Line,
  Row,
  Form,
  Container,
  RoundButtons,
} from "../layouts";
import axios from "axios";

export const Admin = (props) => {
  const editor = useRef(null);
  const [category, setCategory] = useState(null);
  const [task, setTask] = useState(null);
  const [blog, setBlog] = useState(null);
  const [blogId, setBlogId] = useState(null);
  const [blogDetail, setBlogDetail] = useState(null);

  function submitForm(e) {
    // e.preventDefault();
    return <Redirect to="/admin" />;
  }

  useEffect(() => {
    axios
      .get("http://localhost:5000/getBlogByCategory", { params: { category } })
      .then((blog) => {
       setBlog(blog.data);
      });
  }, [category]);

  function returnCard(Blog) {
    if (!Blog) return;

    var oneRow = [];
    var seperatedRow = [];
    for (var i = 0; i < Blog.length; i += 3) {
      oneRow.push(
        Blog.slice(i, i + 3).map((blog) => {
          return (
            <Column>
              <Link to={`/admin/update/${blog._id}`}>
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

  function loadForm() {
    return (
      <Form method="post" action="/insertBlog">
        <label htmlFor="name">Name</label>
        <input type="text" name="title" placeholder="Title" id="name" />
        <label htmlFor="datetime">Datetime</label>
        <input type="date" name="DateTime" placeholder="Title" id="datetime" />
        <label htmlFor="author">Author</label>
        <input type="text" name="authorName" placeholder="Author" id="author" />
        <label htmlFor="headerImg">Header Image</label>
        <input
          type="text"
          name="headerImg"
          id="headerImg"
          placeholder="Header Image Url"
        />
        <label htmlFor="category">category</label>
        <select name="category" id="category">
          <option value="nature" defaultValue>
            Nature
          </option>
          <option value="relaxation">Relaxation</option>
          <option value="adventure">Adventure</option>
          <option value="travel">Travel</option>
          <option value="Vacation">Vacation</option>
          <option value="photography">Photograhy</option>
        </select>
        <label htmlFor="body">body</label>
        <JoditEditor ref={editor} tabIndex={1} name="body" />
        <label htmlFor="featied">Is Featured</label>
        <select name="featured" id="Featured">
          <option value="true">True</option>
          <option value="false" defaultValue>
            False
          </option>
        </select>
        <RoundButtons value="submit" type="success" onClick={submitForm} />
      </Form>
    );
  }
  useEffect(() => {
    var pathname = props.location.pathname;
    if (pathname == "/admin") setTask("insert");
    else if (pathname.includes("/admin/update-")) {

      setTask("update");
      setCategory(pathname.slice(pathname.lastIndexOf("-") + 1));

    } else if (pathname.includes("/admin/delete-")) {

      setTask("delete");
      setCategory(pathname.slice(pathname.lastIndexOf("-") + 1));

    } else if (pathname.includes("/admin/update/")) {
      setBlogId(pathname.slice(pathname.lastIndexOf("/") + 1));
      axios
        .get("/getBlogById", {
          params: { _id: pathname.slice(pathname.lastIndexOf("/") + 1) },
        })
        .then((blog) => {
          setBlogDetail(blog.data);
        });
      setTask("updateById");
    }
  }, [props.location]);

  return (
    <>
      <AdminNavbar>
       <Link to="/">Escape</Link>
        <SideNav>
          <div className="category">
            <div className="link">
              <Link to="/admin">Insert a Blog</Link>
            </div>
          </div>
          <div className="link">
            Update
            <ul>
              <li>
                <Link to="/admin/update-nature">Nature</Link>
              </li>
              <li>
                <Link to="/admin/update-relaxation">Relaxation</Link>
              </li>
              <li>
                <Link to="/admin/update-adventure">Adventure</Link>
              </li>
              <li>
                <Link to="/admin/update-vacation">Vacation</Link>
              </li>
              <li>
                <Link to="/admin/update-travel">Travel</Link>
              </li>
              <li>
                <Link to="/admin/update-photography">Photograhy</Link>
              </li>
            </ul>
          </div>
          <div className="link">
            Delete
            <ul>
              <li>
                <Link to="/admin/delete-nature">Nature</Link>
              </li>
              <li>
                <Link to="/admin/delete-relaxation">Relaxation</Link>
              </li>
              <li>
                <Link to="/admin/delete-adventure">Adventure</Link>
              </li>
              <li>
                <Link to="/admin/delete-vacation">Vacation</Link>
              </li>
              <li>
                <Link to="/admin/delete-travel">Travel</Link>
              </li>
              <li>
                <Link to="/admin/delete-photography">Photograhy</Link>
              </li>
            </ul>
          </div>
        </SideNav>
      </AdminNavbar>
      <Container>
        {task && task === "insert"
          ? loadForm()
          : task === "update"
          ? returnCard(blog)
          : task === "updateById"
          ? !blogDetail ?  null : <UpdateBlog blogDetail={blogDetail}/>
          : task === "delete"? !category ? null : <DeleteWidget category={category}/> : null }
      </Container>
    </>
  );
};
