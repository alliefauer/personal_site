import React, { Component } from 'react'
import NavbarMain from './NavbarMain'
import { projectPage } from '../data/projectPage'


export default class Project extends Component {

    render() {
        let project = projectPage[this.props.match.params.project]
        let button;
        let imgrow = [];
        if (project.tutorial) {
            button = <button class="button">Button</button>
        }
        if (Array.isArray(project.images[1])) {
            project.images[1].forEach((image) => imgrow.push(<img src={image} style={{"width": `${100/project.images[1].length}%`}}/>))
        } else {
            imgrow.push(project.images[1])
        }

        return (
            <div>
                <NavbarMain color={'white'} />
                <div className="description" style={{ "background-color": `${project.colors[0]}` }}>
                    {project.title.toUpperCase()}
                    <h1>{project.subtitle}</h1>
                    <h1>-</h1>
                </div>
                <div className="row tableRow">
                    <div className="projectImg col-md-6">
                        <img src={project.images[0]} />
                    </div>
                    <div className="test col-md-6 rightCol">
                        <h1 style={{ "color": `${project.colors[0]}` }}>{project.sections[0].title}</h1>
                        {project.sections[0].description}
                        {button}
                    </div>
                </div>
                <div className="row">
                <div className="fullrow col-md-12">
                        {imgrow.map(image => image)}
                </div>
                </div>
                <div className="row tableRow">
                    <div className="test col-md-6 rightCol" style={{"background-color": `${project.colors[0]}`}}>
                        <h1 style={{ "color": "white" }}>About</h1>
                        {project.description}
                        {button}
                    </div>
                    <div className="projectImg col-md-6">
                        <img src={project.images[2]} />
                    </div>
                </div>
            </div>

        )
    }
}