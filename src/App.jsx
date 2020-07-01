import React, { Component } from "react";
import styles from "./App.module.scss";
import Card from "./components/Card";
import NavBar from "./components/NavBar";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHamburger } from '@fortawesome/free-solid-svg-icons'
 

import urls from "./components/data/urls"


class App extends Component {

  // The map is great and works perfectly, but I wouldn't wrap the Card in a div at all. You could map and just produce a card component and all the styles for the card should be in that component - see mine below.
  getCard = (url) => (
    <div className={styles.Cards} key={url.idSite}>
      <Card url={url} />
    </div>
  )

  // Like this
  // getCard = (url) => <Card url={url} />

  render() {
    return (
      <>
        <NavBar/>
        <div className={styles.Wrap}>
          <section className={styles.Cards}>
            {urls.map(this.getCard)}
            {/* Another option - you could even do it like this for less code! */}
            {/* {urls.map(url => <Card url={url} />)} */}
          </section>
        </div>
      </>
    );
  }
}

export default App;
