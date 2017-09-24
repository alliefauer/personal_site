import React, { Component } from 'react'
import { Nav, NavItem } from 'react-bootstrap'
import $ from 'jquery'
import MenuBars from './MenuBars'

export default class MobileNavbar extends Component {
    componentDidMount() {
        this.jquery()
    }

    jquery() {
        let clicked = false
        $('.bars').click(function() {
            if (!clicked) {
                clicked = true
                $('.nav li').slideDown('slow')
            } else {
                clicked = false
                $('.nav li').slideUp('slow')
            }
        })
    }


    render() {
        return (
            <div>
                <div className="mobile">
                    <div className="mobile-container-fluid">
                        <Nav className="navbar navbar-default">
                            <div className="mobile-container-fluid">
                                <div className="navLogo">
                                    <a href="/">
                                        <img alt="logo" src="/images/logoblack.png" />
                                        <div className="navName">
                                            Allie Fauer
                    </div>
                                    </a>
                                </div>
                                <a href="" onClick={(e) => e.preventDefault()}>
                                    <MenuBars color="black" />
                                </a>
                                <Nav className="nav navbar-nav navbar-right" >
                                    <NavItem eventKey={1} href="/">HOME</NavItem>
                                    <NavItem eventKey={2} href="/">ABOUT</NavItem>
                                    <NavItem eventKey={3} href="/">CONTACT</NavItem>
                                    <NavItem eventKey={4} href="/">BLOG</NavItem>
                                </Nav>
                            </div>
                        </Nav>
                    </div>
                </div>
            </div>
        )

    }
}
