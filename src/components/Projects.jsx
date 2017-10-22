import React, { Component } from 'react'
import Image from './Image'
import $ from 'jquery'
import { portfolioData } from '../data/portfolioData'
import FontAwesome from 'react-fontawesome'

export default class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = {
            components: [],
            graphicDesign: [],
            programming: [],
            modeling: [],
            digitalFabrication: [],
            graphicDesignStyle: 'inactive',
            programmingStyle: 'inactive',
            modelingStyle: 'inactive',
            digitalFabricationStyle: 'inactive',
            allStyle: 'active'
        }

        this.filterGraphicDesign = this.filterGraphicDesign.bind(this)
        this.filterProgramming = this.filterProgramming.bind(this)
        this.filterModeling = this.filterModeling.bind(this)
        this.filterDigitalFabrication = this.filterDigitalFabrication.bind(this)
        this.seeAll = this.seeAll.bind(this)
    }

    componentDidMount() {
        this.setState({
            components: this.generateComponents(portfolioData),
            graphicDesign: portfolioData.filter(item => item.tags.indexOf("Graphic Design") >= 0),
            programming: portfolioData.filter(item => item.tags.indexOf("Programming") >= 0),
            modeling: portfolioData.filter(item => item.tags.indexOf("3d Modeling") >= 0),
            digitalFabrication: portfolioData.filter(item => item.tags.indexOf("Digital Fabrication") >= 0)
        }, () => {
            console.log('****this.state', this.state)
        })
    }

    shuffle(arr) {
        let currentIndex = arr.length, temporaryValue, randomIndex;

        while (0 !== currentIndex) {

            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;


            temporaryValue = arr[currentIndex];
            arr[currentIndex] = arr[randomIndex];
            arr[randomIndex] = temporaryValue;
        }

        return arr;
    }

    generateComponents(projects) {
        let components = []
        let colCount = 0;
        let imagesInRow = 0;
        let shuffledPortfolio = this.shuffle(projects);
        let portfolioCountdown = shuffledPortfolio.length - 1;

        let tallOrWide = () => {
            let size = Math.floor(Math.random() * 2)
            return size === 0 ? 'tall' : 'wide'
        }

        let tallImg = (item) => {
            components.push(
                <Image image={`images/${item.name}tall.jpg`} size={3} url={item.url} title={item.title} tag={item.tag} />
            )
            colCount += 3
            imagesInRow++
            portfolioCountdown--
        }

        let wideImg = (item) => {
            components.push(
                <Image image={`images/${item.name}wide.jpg`} size={6} url={item.url} title={item.title} tag={item.tag} />
            )
            colCount += 6
            imagesInRow++
            portfolioCountdown--
        }

        let chooseImage = (arr) => {
            while (portfolioCountdown >= 4 || imagesInRow !== 0) {
                if (imagesInRow === 0) {
                    let size = tallOrWide()
                    size === 'tall' ? tallImg(shuffledPortfolio[portfolioCountdown]) : wideImg(shuffledPortfolio[portfolioCountdown])
                    chooseImage(arr)
                } else if (imagesInRow === 1) {
                    if (colCount === 3) {
                        let size = tallOrWide()
                        if (size === 'tall') {
                            tallImg(shuffledPortfolio[portfolioCountdown])
                            wideImg(shuffledPortfolio[portfolioCountdown])
                        } else {
                            wideImg(shuffledPortfolio[portfolioCountdown])
                            tallImg(shuffledPortfolio[portfolioCountdown])
                        }
                    }
                    else if (colCount === 6) {
                        let size = tallOrWide()
                        if (size === 'tall') {
                            tallImg(shuffledPortfolio[portfolioCountdown])
                            tallImg(shuffledPortfolio[portfolioCountdown])
                        } else {
                            wideImg(shuffledPortfolio[portfolioCountdown])
                        }
                    }
                }
                colCount = 0
                imagesInRow = 0
                chooseImage(arr)
                if (portfolioCountdown === 3) {
                    wideImg(shuffledPortfolio[portfolioCountdown])
                    wideImg(shuffledPortfolio[portfolioCountdown])
                    wideImg(shuffledPortfolio[portfolioCountdown])
                    wideImg(shuffledPortfolio[portfolioCountdown])
                } else if (portfolioCountdown === 2) {
                    tallImg(shuffledPortfolio[portfolioCountdown])
                    wideImg(shuffledPortfolio[portfolioCountdown])
                    tallImg(shuffledPortfolio[portfolioCountdown])
                } else if (portfolioCountdown === 1) {
                    wideImg(shuffledPortfolio[portfolioCountdown])
                    wideImg(shuffledPortfolio[portfolioCountdown])
                }
            }
        }
        chooseImage(shuffledPortfolio)
        return components
    }

    filterGraphicDesign() {
        this.setState({
            graphicDesign: portfolioData.filter(item => item.tags.indexOf("Graphic Design") >= 0),
            // graphicDesignStyle: this.state.graphicDesignStyle === 'active' ? 'inactive' : 'active'
            graphicDesignStyle: 'active',
            programmingStyle: 'inactive',
            modelingStyle: 'inactive',
            digitalFabricationStyle: 'inactive',
            allStyle: 'inactive'
        }, () => {
            let filtered = new Map()
            this.state.graphicDesign.forEach(item => filtered.set(item, ''))
            // this.state.programming.forEach(item => filtered.set(item, ''))
            // this.state.modeling.forEach(item => filtered.set(item, ''))
            // this.state.digitalFabrication.forEach(item => filtered.set(item, ''))
            let comps = []
            for (let key of filtered.keys()) {
                comps.push(key)
            }

            this.setState({
                components: this.generateComponents(comps)
            })
        })
    }

    filterProgramming() {
        this.setState({
            programming: portfolioData.filter(item => item.tags.indexOf("Programming") >= 0),
            // programmingStyle: this.state.programmingStyle === 'active' ? 'inactive' : 'active'
            graphicDesignStyle: 'inactive',
            programmingStyle: 'active',
            modelingStyle: 'inactive',
            digitalFabricationStyle: 'inactive',
            allStyle: 'inactive'
        }, () => {
            let filtered = new Map()
            // this.state.graphicDesign.forEach(item => filtered.set(item, ''))
            this.state.programming.forEach(item => filtered.set(item, ''))
            // this.state.modeling.forEach(item => filtered.set(item, ''))
            // this.state.digitalFabrication.forEach(item => filtered.set(item, ''))
            let comps = []
            for (let key of filtered.keys()) {
                comps.push(key)
            }

            this.setState({
                components: this.generateComponents(comps)
            })
        })
    }

    filterModeling() {
        this.setState({
            modeling: portfolioData.filter(item => item.tags.indexOf("3d Modeling") >= 0),
            // modelingStyle: this.state.modelingStyle === 'active' ? 'inactive' : 'active'
            graphicDesignStyle: 'inactive',
            programmingStyle: 'inactive',
            modelingStyle: 'active',
            digitalFabricationStyle: 'inactive',
            allStyle: 'inactive'
        }, () => {
            let filtered = new Map()
            // this.state.graphicDesign.forEach(item => filtered.set(item, ''))
            // this.state.programming.forEach(item => filtered.set(item, ''))
            this.state.modeling.forEach(item => filtered.set(item, ''))
            // this.state.digitalFabrication.forEach(item => filtered.set(item, ''))
            let comps = []
            for (let key of filtered.keys()) {
                comps.push(key)
            }

            this.setState({
                components: this.generateComponents(comps)
            })
        })
    }

    filterDigitalFabrication() {
        this.setState({
            digitalFabrication: portfolioData.filter(item => item.tags.indexOf("Digital Fabrication") >= 0),
            // digitalFabricationStyle: this.state.digitalFabricationStyle === 'active' ? 'inactive' : 'active'
            graphicDesignStyle: 'inactive',
            programmingStyle: 'inactive',
            modelingStyle: 'inactive',
            digitalFabricationStyle: 'active',
            allStyle: 'inactive'
        }, () => {
            let filtered = new Map()
            // this.state.graphicDesign.forEach(item => filtered.set(item, ''))
            // this.state.programming.forEach(item => filtered.set(item, ''))
            // this.state.modeling.forEach(item => filtered.set(item, ''))
            this.state.digitalFabrication.forEach(item => filtered.set(item, ''))
            let comps = []
            for (let key of filtered.keys()) {
                comps.push(key)
            }

            this.setState({
                components: this.generateComponents(comps)
            })
        })
    }

    seeAll() {
        this.setState({
            components: this.generateComponents(portfolioData),
            graphicDesignStyle: 'inactive',
            programmingStyle: 'inactive',
            modelingStyle: 'inactive',
            digitalFabricationStyle: 'inactive',
            allStyle: 'active'
        })
    }

    render() {
        
        return (
            <div className="projects" id="projects">
                <p>Filter by Category:</p>
                <button className={this.state.graphicDesignStyle} onClick={this.filterGraphicDesign}>Graphic Design</button>
                <button className={this.state.programmingStyle} onClick={this.filterProgramming}>Programming</button>
                <button className={this.state.modelingStyle} onClick={this.filterModeling}>3D Modeling</button>
                <button className={this.state.digitalFabricationStyle} onClick={this.filterDigitalFabrication}>Digital Fabrication</button>
                <button className={this.state.allStyle} onClick={this.seeAll}>All Categories</button>
                <br/>
                {
                    this.state.components.length && this.state.components.map(component => component) || <h1>Toggle Filters</h1>
                }
            </div>
        )
    }
}