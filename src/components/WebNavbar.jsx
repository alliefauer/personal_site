import React, { Component } from 'react'
import { Nav, NavItem } from 'react-bootstrap'
import $ from 'jquery'
import MenuBars from './MenuBars'
import Scrollchor from 'react-scrollchor';

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

    homeScroll() {
        let homeDiv = document.getElementsByClassName("about")
        document.scrollTop = homeDiv.scrollHeight
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
            //     $("#about").click(function () {
            //         let aboutDiv = (".about").scrollTop()

            // });
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
                                <NavItem id="nav-home" eventKey={1} href="/#">HOME</NavItem>
                                <NavItem id="nav-about" eventKey={2} href="/#about">ABOUT</NavItem>
                                <NavItem id="nav-projects" eventKey={3} href="/#projects">PROJECTS</NavItem>
                            </Nav>
                        </div>
                    </Nav>
                </div>
            </div>
        )

    }
}
