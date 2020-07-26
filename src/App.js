import React from "react";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import MemberCard from "./components/MemberCard";

function App() {
  return (
    <div className="App">
      <Header />
      <Form />
      <MemberCard />
    </div>
  );
}

export default App;
