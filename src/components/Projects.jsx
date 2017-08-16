import React, { Component } from 'react'
import Image from './Image'
import $ from 'jquery'
import { portfolioData } from '../data/portfolioData'

export default class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = {
            components: []
        }
    }

    componentDidMount() {
        this.setState({
            components: this.generateComponents()
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

    generateComponents() {
        let components = []
        let colCount = 0;
        let imagesInRow = 0;
        let shuffledPortfolio = this.shuffle(portfolioData);
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




    render() {
        console.log('components', this.state.components)
        return (
            <div className="projects">
                {
                    this.state.components.length && this.state.components.map(component => component)
                }
            </div>
        )
    }
}