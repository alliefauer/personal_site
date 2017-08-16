import React, { Component } from 'react'


export default class MenuBars extends Component {

    render() {
        return (
            <div>
                <div className="bars" style={{ 'backgroundColor': this.props.color }} />
                <div className="bars" style={{ 'backgroundColor': this.props.color }} />
                <div className="bars" style={{ 'backgroundColor': this.props.color }} />
                <div className="bars" style={{ 'backgroundColor': this.props.color }} />
                <div className="bars" style={{ 'backgroundColor': this.props.color }} />
            </div>
        )
    }
}