import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./component/Navigation";
import Footer from "./component/Footer";
import About from "./component/About";
import Contact from "./component/Contact";
import Home from "./component/Home";
import Menu from "./component/menu/Menu";
import Posts from "./component/menu/Posts";
import Post from "./component/menu/Post";

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Menu" element={<Menu />}>
        <Route path="" element={<Posts />} />
        <Route path=":postSlug" element={<Post />} />
      </Route>
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);
