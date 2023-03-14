import React from "react";
import Button from "../components/Button";
import Header from "../components/Header";
import Text from "../components/Text";
import Wrapper from "../components/Wrapper";
import "./Kitapage.css";

const App = () => {
  return (
    <div className="container">
    <Wrapper>
      <Header />
      <div className="kita-container">
        <Text >Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
        <Text>Libero reprehenderit ullam quibusdam, eius dolorem enim iure iusto corporis!</Text>
        <Button>Click here for nothing</Button>
        <Text>Libero reprehenderit ullam quibusdam, eius dolorem enim iure iusto corporis!</Text>
        <Button>Don't click here</Button>
      </div>
    </Wrapper>
    </div>
  );
};

export default App;

