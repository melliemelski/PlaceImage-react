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
          return <><p>{this.props.url.title}</p><p>{this.props.url.text}</p></>
        } else {
          return null;
        }
      }

        
        render() {

        const { url } = this.props.url;

        return (
          <>
          <section>
            <img src={url} onClick={this.toggleState}/>
            {this.getDrop()}
          </section>
          </>
        );
        }
    }

export default Card;
