import React, { Component, Fragment } from 'react';

import sliderimage1 from '../../assets/pic510.jpg';
import sliderimage2 from '../../assets/pic510.jpg';
import Slider from "react-slick";
import './NivoSlider.css'

function NextArrow(props) {

    return (
        <i
            className="fas fa-chevron-right"
            style={{ position: "absolute", top: "50%", right: "20px", fontSize: "2em", cursor: "pointer", zIndex: "1" }}
            onClick={props.nextSlide}
        />
    );

}

function PrevArrow(props) {

    return (
        <i
            className="fas fa-chevron-left"
            style={{ position: "absolute", top: "50%", left: "20px", fontSize: "2em", cursor: "pointer", zIndex: "1" }}
            onClick={props.prevSlide}
        />
    );

}

class NivoSlider extends Component {

    prev = () => {
        this.slider.slickPrev();
    }

    next = () => {
        this.slider.slickNext();
    }

    state = {
        Images: [sliderimage1, sliderimage2]
    }

    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: true
                    }
                }
            ]
        };
        return (
            <Fragment>
                <span className="arrowvisilbilty">
                    <PrevArrow prevSlide={this.prev} />
                    <NextArrow nextSlide={this.next} />
                </span>

                <Slider className="nivoSlider" ref={s => (this.slider = s)} {...settings}>
                    {this.state.Images.map(image => {
                        console.log(image);
                        return (<div key={image.indexOf()}><img style={{ width: "100%" }} key={image} src={image} /></div>)
                    })}
                </Slider>
            </Fragment>
        );
    }

}


export default NivoSlider;