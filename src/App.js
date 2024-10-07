import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Signin, Signup, Home, Posts, Joke } from "./pages";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/random-joke" element={<Joke />} />
      </Routes>
    </BrowserRouter>
  );
};
