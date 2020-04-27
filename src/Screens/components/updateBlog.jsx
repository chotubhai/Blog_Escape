import React, { useState, useEffect, useRef } from "react";
import JoditEditor from "jodit-react";
import { Form, RoundButtons } from "../../layouts";
import axios from "axios";
export const UpdateBlog = ({ blogDetail }) => {
  const editor = useRef(null);
  const [formData, setFormData] = useState(null);
  function handleData(e) {
    setFormData({ ...formData, ...{ [e.target.name]: e.target.value } });
  }
  function submitForm() {
      axios.post('/updateBlog',{formData}).then((res) => document.forms[0].reset());
  }
  useEffect(() => {
  }, [formData]);
  return (
    <Form method="post" action="/updateBlog">
      <input type="hidden" name="_id" value={blogDetail[1]._id} />
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="title"
        placeholder="Title"
        id="name"
        value={blogDetail[1].title}
        onChange={(e) => {
          blogDetail[1].title = e.target.value;
          handleData(e);
        }}
      />
      <label htmlFor="datetime">Datetime</label>
      <input
        type="date"
        name="DateTime"
        placeholder="Title"
        id="datetime"
        value={blogDetail[1].DateTime}
        onChange={(e) => {
          blogDetail[1].DateTime = e.target.value;
          handleData(e);
        }}
      />
      <label htmlFor="author">Author</label>
      <input
        type="text"
        name="authorName"
        placeholder="Author"
        id="author"
        value={blogDetail[1].authorName}
        onChange={(e) => {
          blogDetail[1].authorName = e.target.value;
          handleData(e);
        }}
      />
      <label htmlFor="headerImg">Header Image</label>
      <input
        type="text"
        name="headerImg"
        id="headerImg"
        placeholder="Header Image Url"
        value={blogDetail[0].headerImg}
        onChange={(e) => {
          blogDetail[0].headerImg = e.target.value;
          handleData(e);
        }}
      />
      <label htmlFor="category">category</label>
      <select
        name="category"
        id="category"
        value={blogDetail[1].category}
        onChange={(e) => {
          blogDetail[1].category = e.target.value;
          handleData(e);
        }}
      >
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
      <JoditEditor
        ref={editor}
        tabIndex={1}
        name="body"
        value={blogDetail[0].body}  
        onChange={(e) => {
          blogDetail[0].body = e;
          setFormData({...formData,...{body:e}})
        }}
      />
      <label htmlFor="featied">Is Featured</label>
      <select
        name="featured"
        id="Featured"
        value={blogDetail[1].featured}
        onChange={(e) => {
          blogDetail[1].title = e.target.value;
          handleData(e);
        }}
      >
        <option value="true">True</option>
        <option value="false" defaultValue>
          False
        </option>
      </select>
      <RoundButtons value="submit" type="success" onClick={submitForm} />
    </Form>
  );
};
