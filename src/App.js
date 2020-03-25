import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import Title from "./components/Title";
import Navbar from "./components/Navbar";
import Articles from "./components/Articles";
import FullArticle from "./components/FullArticle";
import CreateAccount from "./components/CreateAccount";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Title />
      <Navbar />
      <Router>
        <Articles path="/" />
        <Articles path="articles/:topic_id" />
        <FullArticle path="articles/:topic/:article_id" />
        <CreateAccount path="account/" />
        <Login path="login/" />
      </Router>
    </div>
  );
}

export default App;
