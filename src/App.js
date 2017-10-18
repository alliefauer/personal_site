import React, { Component } from 'react';
import './style/App.css';
import NavbarMain from './components/NavbarMain'
import Jumbotron from './components/Jumbotron'
import About from './components/About'
import Projects from './components/Projects'
import { jumbotronPhotos } from './data/jumbotronPhotos'


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      index: -1,
      logoColor: ''
    }
  }

  componentDidMount() {
    let jumbotronRandom = Math.floor(Math.random() * jumbotronPhotos.length)
    this.setState({
      index: jumbotronRandom,
      logoColor: jumbotronPhotos[jumbotronRandom].color
    })
  }

  render() {
    return (
      <div>
        <NavbarMain color={this.state.logoColor} />
        <Jumbotron index={this.state.index} />
        <div className ="mainContent">
          <About />
          <Projects />
        </div>
      </div>
    );
  }
}


