import React, { Component } from "react";
import styles from "./NavBar.module.scss";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHamburger } from '@fortawesome/free-solid-svg-icons'

library.add(faHamburger)

class NavBar extends Component {
  state = {
    isOpen: false
  };

  toggleState = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  getMenu = () => {
    if (this.state.isOpen === true) {
      return <><p>NavBar</p><p>Open</p></>
    } else {
      return null;
    }
  }

  render() {
    return (
      <nav className={styles.navFlex}>
        <div className={styles.navFlex}>
          <span className={styles.faStyles} onClick={this.toggleState}>
          <FontAwesomeIcon icon="hamburger"/>
          </span>
          {this.getMenu()}
        </div>
      </nav>
    );
  }
}

export default NavBar;
