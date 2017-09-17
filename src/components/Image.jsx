import React, { Component } from 'react'
import $ from 'jquery'


export default class Image extends Component {
    constructor(props) {
        super(props)
        this.state={
            hover: false
        }

    }
    render() {

        
        
        return (
            <div className={`col-md-${this.props.size} portfolio`}>
                <div className="portfolioWrapper">
                    <div className="overlay">
                        <a href={this.props.url}>
                        <img alt={this.props.image} src={this.props.image} />
                        </a>
                    </div>
                    <div className="portfolioTitle">
                        {this.props.title}
                        <div className="tag">
                            {this.props.tag}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}