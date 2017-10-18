import React, { Component } from 'react'
import { Nav, NavItem } from 'react-bootstrap'
import $ from 'jquery'
import MenuBars from './MenuBars'

export default class WebNavbar extends Component {
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
            $('.web-container-fluid').slideDown('slow');
            $('.web .logo, .web .bars, .web .name').fadeOut();
            $('.web .navLogo img, .web .navName').fadeIn('slow');
        });


        $(document).scroll(function () {
            var scroll_pos = $(this).scrollTop();
            if ($('.navName').css('font-size') !== '18px') {
                $('.web, .jumbotron img').css('top', 50 + scroll_pos / 15 + '%');

                if (scroll_pos < 0) {
                    $('.web, .jumbotron img').css('width', 100 + scroll_pos / 15 + '%');
                }

            if (scroll_pos > 8) {
                $('.web-container-fluid').slideDown('slow');
                $('.web .logo, .web .bars, .web .name').fadeOut();
            }

            if (scroll_pos > 10) {
                $('.web .navLogo img, .web .navName').fadeIn('slow');
                clicked = false
            }

            if (scroll_pos < 10 && !clicked) {
                $('.web .navLogo img, .web .navName').fadeOut('fast');
                $('.projectInfoWrapper').fadeIn('slow');
            }

            if (scroll_pos < 8 && !clicked) {
                $('.web-container-fluid').slideUp('slow');
                $('.web .logo, .web .bars, .web .name').fadeIn();
            }

            if (scroll_pos > 150) {
                $('.projectInfoWrapper').fadeOut('slow');
            } else {
                $('.projectInfoWrapper').fadeIn('slow');
            }
        } 
        });

    }

    render() {
        return (
            <div>
                <div className="web">
                    <div className="logo">
                        <a href="/">
                            <img alt="logo" src={this.state.color === 'white' ? "/images/logowhite.png" : "/images/logoblack.png"} />
                            <div className="name" style={{ color: this.state.color }}>Allie Fauer</div>
                        </a>
                    </div>

                    <a href="" onClick={(e) => e.preventDefault()}>
                        <MenuBars color={this.state.color} />
                    </a>
                    <Nav className="navbar navbar-default">
                        <div className="container-fluid web-container-fluid">
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
                                <NavItem eventKey={2} href=".mainContent">ABOUT</NavItem>
                                <NavItem eventKey={3} href="/">CONTACT</NavItem>
                                <NavItem eventKey={4} href="/">BLOG</NavItem>
                            </Nav>
                        </div>
                    </Nav>
                </div>
            </div>
        )

    }
}
