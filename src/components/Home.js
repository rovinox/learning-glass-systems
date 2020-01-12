import React, { Component } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Picture1 from "./pictures/S66 Standalone Lightboard Studio Package.jpg"
import Picture2 from "./pictures/S33A Table Top Lightboard System.jpg"
import Picture3 from "./pictures/S33 Table Top Lightboard Studio Package.jpg"
import Picture4 from "./pictures/S66 Standalone Lightboard System.jpg"
import Container from '@material-ui/core/Container';

export default class Home extends Component {
    render() {
        return (
            <Container maxWidth="lg">

            
                <Carousel
                 autoPlay={true}
                 infiniteLoop={true}
                 interval={3000}
                 width="50vw"
                 transitionTime={500}
                 >
                <div>
                    <img src={Picture1} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={Picture2} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={Picture3} />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={Picture4} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        
            </Container>
        )
    }
}
