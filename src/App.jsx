import React, { Component } from "react";
import styles from "./App.module.scss";
import Card from "./components/Card";
import NavBar from "./components/NavBar";
import Drop from "./components/Drop";


class App extends Component {
  

  render() {
    return (
      <>
        <NavBar/>
        <section className={styles.Cards}>
          <Card></Card>
          <Drop></Drop>
          <Card></Card>
          <Card></Card>
        </section>
      </>
    );
  }
}

export default App;
