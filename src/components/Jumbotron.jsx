import React, { Component } from 'react'
import { jumbotronPhotos } from '../data/jumbotronPhotos'

export default class Jumbotron extends Component {

    render() {
        if (this.props.index >= 0) {
            return (
                <div className="jumbotron">
                    <img alt={jumbotronPhotos[this.props.index].project} src={jumbotronPhotos[this.props.index].img} />
                    <div className="projectInfoWrapper">
                        <div className="projectInfo" style={{color: jumbotronPhotos[this.props.index].color}}>
                            <b>Featured Image</b>
                            <br />
                                {jumbotronPhotos[this.props.index].project}
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div />
            )
        }

    }

}