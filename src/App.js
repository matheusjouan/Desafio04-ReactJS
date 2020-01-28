import React from "react";

import "./App.css";

import Header from "./components/Header";
import PostList from "./components/PostList";

// Componente Principal da aplicação
function App() {
  return (
    <>
      <Header />
      <PostList />
    </>
  );
}

export default App;
