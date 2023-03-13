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
      <Text className="kitas-teksas">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
      <Text className="kitas-teksas">Libero reprehenderit ullam quibusdam, eius dolorem enim iure iusto corporis!</Text>
      <Button className="kitas-mygtukas">Click here for nothing</Button>
      <Button className="kitas-mygtukas">Don't click here</Button>
    </Wrapper>
    </div>
  );
};

export default App;

