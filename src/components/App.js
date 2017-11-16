import React, { Component } from 'react'
import HederComponent from './header_component'
import FooterComponent from './footer_component'
import BodyComponent from './body_component'
export default class App extends Component {
  render() {
    return (
      <div className = "bodyy">
        <HederComponent />
        <BodyComponent />
        <FooterComponent />
      </div>
    );
  }
}
