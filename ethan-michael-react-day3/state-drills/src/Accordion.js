import React, {Component} from 'react';

import './Accordion.css';

class Accordion extends Component{
    state = {
      openSectionID: null,
    };

    openSection = (id) => {
      this.setState({ openSectionID:  id });
    }

    createSections() {

      if (!this.props.sections || this.props.sections.length === 0) {
        return;
      }

      return this.props.sections.map((section, index) => {

        if (this.state.openSectionID === index) {

          // Open
          return (
            <li id={index} key={index}>
              <button onClick={() => { this.openSection(index) }} >{section.title}</button>
              <p>{section.content}</p>
            </li>
          );
        } else {

          // Closed
          return (
            <li id={index} key={index}>
              <button onClick={() => { this.openSection(index) }} >{section.title}</button>
            </li>
          );
        }
      });
    };

    render(){

        return (
          <ul>
            {this.createSections()}
          </ul>
        );
    }
}

export default Accordion;
