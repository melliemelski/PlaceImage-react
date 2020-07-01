import React, { Component } from "react";
import styles from "./Card.module.scss";
import Drop from "../Drop";
import urls from "../data/urls";

class Card extends Component {
  

  render() {
    const { url } = this.props;
    
    return (
      <>
      <section>
        <img className={styles.cage} src={url}/>
        <p>this is a drop</p>  
      </section>
      </>
    );
    }
}

export default Card;
