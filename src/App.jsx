import React, { Component } from "react";
import styles from "./App.module.scss";
import Card from "./components/Card";
import NavBar from "./components/NavBar";
import Drop from "./components/Drop";

import urls from "./components/data/urls"


class App extends Component {
  getCard = (url) => (
    <div className={styles.card} key={url.idSite}>
      <Card url={url} />
    </div>
  )

  render() {
    return (
      <>
          <NavBar/>
        <section className={styles.Cards}>
          {urls.map(this.getCard)}
        </section>
      </>
    );
  }
}

export default App;
