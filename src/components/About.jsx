import React, { Component } from 'react'


export default class About extends Component {

    render() {
        return (
            <div className="about">
                <div className="row content">
                    <div className="col-md-4">
                        <img alt="allie" src="images/allie.jpg" />
                    </div>
                    <div className="col-md-7 col-md-offset-1">
                        <h1>Hi, I'm Allie!</h1>
                        <div className="line"/>
                        <p>I am a Software Engineer with a love for Design currently residing in Brooklyn, NY. I enjoy utilizing technology to create both digital products and physical objects that are fun and interactive! You might know my work from the DIY tutorials I write for <a href="http://www.instructables.com/member/allie.fauer/">Instructables.com</a>, or from the many awesome places on the web where I've been featured including:</p>
                        <div className="row">
                            <div className="col-md-6">
                                <p><a href="http://www.popsci.com/real-life-remembrall">Popular Science</a>
                                    <br /><a href="http://interestingengineering.com/diy-remembrall-harry-potter/">Interesting Engineering</a>
                                    <br /><a href="https://www.designnews.com/content/slideshow-makers-decorate-white-house-holidays/page/1/0">Design News</a>
                                    <br /><a href="https://blog.hackster.io/a-remembrall-that-actually-works-9d87c53a0641#.hrrwlnslj">Hackster.io</a></p>
                            </div>
                            <div className="col-md-6">
                                <p><a href="https://3dprintingindustry.com/news/20-3d-printed-holiday-ornaments-instructables-white-house-challenge-36659/">3D Printing Industry</a>
                                    <br /><a href="http://blogs.mathworks.com/iot/2016/09/09/use-matlab-to-analyze-your-tasks/">MathWorks</a>
                                    <br /><a href="http://www.solidsmack.com/cooltools/cool-tools-of-doom-n-stuff-week-26-15/">SolidSmack</a>
                                    <br /><a href="http://www.justaddsharks.co.uk/blogs/2016-04-13/recycling-laminate-into-laser-cut-jewellery">Just Add Sharks</a></p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }

}