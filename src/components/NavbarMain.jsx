import React, { Component } from 'react'
import { Nav, NavItem } from 'react-bootstrap'
import $ from 'jquery'
import MenuBars from './MenuBars'
import WebNavbar from './WebNavbar'
import MobileNavbar from './MobileNavbar'

export default class NavbarMain extends Component {

  render() {
    return (
      <div>
        <WebNavbar color={this.props.color} />
        <MobileNavbar />
      </div>
    )

  }
}
