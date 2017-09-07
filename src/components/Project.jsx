import React, { Component } from 'react'
import NavbarMain from './NavbarMain'
import { projectPage } from '../data/projectPage'


export default class Project extends Component {

    render() {
        let project = projectPage[this.props.match.params.project]
        return (
            <div>
                  <NavbarMain color={'white'} />  
                <div className="row tableRow">
                    <div className="projectImg col-md-7" >
                        <img src={project.images[0]} />
                    </div>
                    <div className="col-md-5 rightCol" style={{"background-color": `${project.colors[0]}`}}>
                        <h1>{project.title}</h1>
                        <h2 style={{"color": `${project.colors[1]}`}}>{project.subtitle}</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        Technologies <br/>
                        Media <br/>
                        Tutorial

                    </div>
                    <div className="col-md-8">
                        
                    </div>
                </div>

            </div>
        )

    }
}