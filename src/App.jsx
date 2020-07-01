import React, { Component } from "react";
import styles from "./App.module.scss";
import Card from "./components/Card";
import NavBar from "./components/NavBar";


import urls from "./components/data/urls"


class App extends Component {
  getCard = (url) => (
    <div className={styles.Cards} key={url.idSite}>
      <Card url={url} />
    </div>
  )

  render() {
    return (
      <>
        <NavBar/>
        <div className={styles.Wrap}>
          <section className={styles.Cards}>
            {urls.map(this.getCard)}
          </section>
        </div>
      </>
    );
  }
}

export default App;
