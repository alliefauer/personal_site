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
                    <div className="col-md-5 rightCol" style={{ "background-color": `${project.colors[0]}` }}>
                        <h1>{project.title}</h1>
                        <h2 style={{ "color": `${project.colors[1]}` }}>{project.subtitle}</h2>
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
                                            <div>
                                            <a href={item[1]} style={{"color": `${project.colors[2]}`}}>{item[0]}</a><br/>
                                            </div>
                                        )
                                    }
                                }
                                )}
                            </div>
                        )
                        )}

                    </div>
                    <div className="col-md-9">
                        {project.about.map(paragraph => <div><p>{paragraph}</p><br /></div>)}
                    </div>
                </div>

                <div>
                    {project.sections.map(section => {
                        if (Array.isArray(section)) {
                            return (
                                <div className="sectionImgWrapper">
                                    {section.map(item => {
                                        console.log(section.length)
                                        if(item.image) {
                                        return (
                                            <div className={`col-md-${12 / section.length} sectionImg`}>
                                                <img src={item.image} />
                                            </div>
                                        )
                                        } else if(item.video) {
                                            return (
                                                <div>
                                                <div className="iframeWrapper">
                                                <div className={`col-md-${12 / section.length} sectionVid`}>
                                                <img class="ratio" src="http://placehold.it/16x9"/>
                                                    <iframe src={item.video} frameborder="0" allowfullscreen />
                                                </div>
                                            </div>
                                            </div>
                                            )
                                        }
                                    })}
                                </div>
                            )
                        }
                    }
                    )}

                </div>
                {/* <Footer/> */}

            </div>
        )

    }
}