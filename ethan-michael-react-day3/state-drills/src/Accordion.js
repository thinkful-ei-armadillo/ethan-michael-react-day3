import React, {Component} from 'react';

class Accordion extends Component{
    state = {
      openSectionID: null,
    };

    openSection = (id) => {
      this.setState({ openSectionID:  id });
    }

    createSections() {

      return this.props.sections.map((section, index) => {

        if (this.state.openSectionID === index) {

          // Open
          return (
            <li>
              <button onClick={() => { this.openSection(index) }} >{section.title}</button>
              <p>{section.content}</p>
            </li>
          );
        } else {

          // Closed
          return (
            <li>
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
