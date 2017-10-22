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
                $('.mobile .nav li').slideDown('slow')
            } else {
                clicked = false
                $('.mobile .nav li').slideUp('slow')
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
                                <NavItem id="nav-home" eventKey={1} href="/#">HOME</NavItem>
                                <NavItem id="nav-about" eventKey={2} href="/#about">ABOUT</NavItem>
                                <NavItem id="nav-projects" eventKey={3} href="/#projects">PROJECTS</NavItem>
                                </Nav>
                            </div>
                        </Nav>
                    </div>
                </div>
            </div>
        )

    }
}
