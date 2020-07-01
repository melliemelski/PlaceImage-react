import React, { Component } from "react";
import styles from "./Card.module.scss";
import urls from "../data/urls";

class Card extends Component {

      state = {
        isOpen: false
      };
    
      toggleState = () => {
        this.setState({
          isOpen: !this.state.isOpen
        })
      }
    
        getDrop = () => {
          if (this.state.isOpen === true) {
            return (this.props.title, this.props.text)
          } else {
            return null;
          }
        }

        
        render() {

        const { url } = this.props.url;

        return (
          <>
          <section>
            {this.getDrop}
            <img className={styles.cage} src={url} onClick={()=> this.toggleState(this.state.isOpen)}/>
            <p></p>  
          </section>
          </>
        );
        }
    }

export default Card;
