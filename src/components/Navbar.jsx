import React, { Component } from 'react'
import { Nav, NavItem } from 'react-bootstrap'
import $ from 'jquery'
import MenuBars from './MenuBars'

export default class NavbarMain extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: ''
    }
  }

  componentDidUpdate() {
    this.setWhite()
  }

  componentDidMount() {
    this.jquery()
    this.setWhite()
  }

  setWhite() {
    if (!this.state.color) {
      this.setState({
        color: this.props.color
      })
    }
  }

  jquery() {
    let clicked = false
    $('.bars').click(function () {
      clicked = true
      $('.container-fluid').slideDown('slow');
      $('.logo, .bars, .name').fadeOut();
      $('.navLogo img, .navName').fadeIn('slow');
    });

    $(document).scroll(function () {
      var scroll_pos = $(this).scrollTop();

      $('.jumbotron img').css('top', 50 + scroll_pos / 15 + '%');

      if (scroll_pos < 0) {
        $('.jumbotron img').css('width', 100 + scroll_pos / 15 + '%');
      }

      if (scroll_pos > 8) {
        $('.container-fluid').slideDown('slow');
        $('.logo, .bars, .name').fadeOut();
      }

      if (scroll_pos > 10) {
        $('.navLogo img, .navName').fadeIn('slow');
        clicked = false
      }

      if (scroll_pos < 10 && !clicked) {
        $('.navLogo img, .navName').fadeOut('fast');
        $('.jumbotronInfoWrapper').fadeIn('slow');
      }

      if (scroll_pos < 8 && !clicked) {
        $('.container-fluid').slideUp('slow');
        $('.logo, .bars, .name').fadeIn();
      }

      if (scroll_pos > 150) {
        $('.jumbotronInfoWrapper').fadeOut('slow');
      } else {
        $('.jumbotronInfoWrapper').fadeIn('slow');
      }
    });
  }

  render() {
    console.log('*******state', this.state.color)
    return (
      <div>
        <div className="logo">
          <a href="/">
            <img alt="logo" src={this.state.color === 'white' ? "/images/logowhite.png" : "/images/logoblack.png"} />
            <div className="name" style={{ color: this.state.color }}>Allie Fauer</div>
          </a>
        </div>
        <Nav className="nav navbar-nav navbar-right" >
              <NavItem eventKey={1} href="/">HOME</NavItem>
              <NavItem eventKey={2} href="/">ABOUT</NavItem>
              <NavItem eventKey={3} href="/">CONTACT</NavItem>
              <NavItem eventKey={4} href="/">BLOG</NavItem>
        </Nav>
        <Nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navLogo">
              <a href="/">
                <img alt="logo" src="/images/logoblack.png" />
              <div className="navName">
                Allie Fauer
              </div>
              </a>
            </div>
            <Nav className="nav navbar-nav navbar-right" >
              <NavItem eventKey={1} href="/">HOME</NavItem>
              <NavItem eventKey={2} href="/">ABOUT</NavItem>
              <NavItem eventKey={3} href="/">CONTACT</NavItem>
              <NavItem eventKey={4} href="/">BLOG</NavItem>
            </Nav>
          </div>
        </Nav>
      </div>
    )

  }
}