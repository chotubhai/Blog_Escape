import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from "./Screens/Home";
import { Posts } from "./Screens/posts";
import { Category } from "./Screens/categories";
import { Admin } from "./Screens/Admin";
import { CategorySpecific } from "./Screens/categoriesSpecific";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

library.add(faTrashAlt);
function App() {
  return (
    <>
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/categories" component={Category} />
        <Route path="/categories" component={CategorySpecific} />
        <Route path="/posts" component={Posts} />
        <Route path="/admin" component={Admin} />
      </Router>
    </>
  );
}

export default App;
