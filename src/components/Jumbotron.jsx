import React, { Component } from 'react'
import { jumbotronPhotos } from '../data/jumbotronPhotos'

export default class Jumbotron extends Component {

    render() {
        if (this.props.index >= 0) {
            return (
                <div className="jumbotron">
                    <img alt={jumbotronPhotos[this.props.index].project} src={jumbotronPhotos[this.props.index].img} />
                    <div className="jumbotronInfoWrapper">
                        <div className="jumbotronInfo" style={{color: jumbotronPhotos[this.props.index].color}}>
                            <b>Featured Image</b>
                            <br />
                                <a style={{color: jumbotronPhotos[this.props.index].color2}} href={jumbotronPhotos[this.props.index].url}>{jumbotronPhotos[this.props.index].project}</a>
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