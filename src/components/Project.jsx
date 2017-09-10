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
                        <img src={project.mainImage} />
                    </div>
                    <div className="col-md-5 rightCol" style={{"background-color": `${project.colors[0]}`}}>
                        <h1>{project.title}</h1>
                        <h2 style={{"color": `${project.colors[1]}`}}>{project.subtitle}</h2>
                    </div>
                </div>
                <div className="row projectInfo">
                    <div className="col-md-3">
                        {project.sidebar.map(section => (
                            <div className="sidebarSection">
                            <h4><b>{section[0]}</b></h4>
                            {section[1].map(item => {
                                if (!Array.isArray(item)) {
                                    return (
                                        <p>{item}</p>
                                    )
                                } else {
                                    return (
                                        <a href={item[1]}>{item[0]}</a>
                                    )
                                }
                                }
                            )}
                            </div>
                        )
                            )}

                    </div>
                    <div className="col-md-9">
                        {project.about.map(paragraph => <div><p>{paragraph}</p><br/></div>)}
                    </div>
                    </div>

                    <div>
                        {project.sections.map(section => {
                            if (Array.isArray(section)) {
                                return (
                                    <div className="sectionImgWrapper">
                                {section.map(img => {
                                    console.log(section.length)
                                    return (
                                        <div className={`col-md-${12/section.length} sectionImg`}>
                                        <img src={img} />
                                        </div>
                                    )
                                })}
                                </div>
                                )
                            }
                        }
                        )}

                </div>

            </div>
        )

    }
}