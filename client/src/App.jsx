import React from "react";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { UserContextProvider } from "./UserContext";
import Header from "./components/Header";
import Post from "./components/Post";
import Layout from "./Layout";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import Register from "./pages/Register";
import CreatePost from "./pages/CreatePost";
import PostPage from "./pages/PostPage";

const App = () => {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path={"/login"} element={<LogIn />} />
            <Route path={"/register"} element={<Register />} />
            <Route path={"/create"} element={<CreatePost />} />
            <Route path={"/post/:id"} element={<PostPage />} />
          </Route>
        </Routes>
      </UserContextProvider>
    </BrowserRouter>
  );
};

export default App;
