import React, { Component } from 'react';
import classes from './ProductsSlider.module.css';
import Slider from "react-slick";
import sliderimage1 from '../../assets/pic4.png';
import ProductCard from '../ProductCard/ProductCard'

function NextArrow(props) {

    return (
      <i
        className="fas fa-chevron-right"
        style={{ position: "absolute", top: "40%", right: "50px", fontSize: "2em", cursor: "pointer"}}
        onClick={props.nextSlide}
      />
    );
    
  }
 
  function PrevArrow(props) {

    return (
      <i
        className="fas fa-chevron-left"
        style={{position: "absolute", top: "40%", left: "50px", fontSize: "2em", cursor: "pointer"}}
        onClick={props.prevSlide}
      />
    );

  }

class ProductsSlider extends Component {

    prev = () => {
        this.slider.slickPrev();
    }

    next = () => {
        this.slider.slickNext();
    }
    
    state = {
        products: [
          {
            image: sliderimage1
          },
          {
            image: sliderimage1
          },
          {
            image: sliderimage1
          },
          {
            image: sliderimage1
          },
          {
            image: sliderimage1
          },
          {
            image: sliderimage1
          },
          {
            image: sliderimage1
          }
        ]
    }
                    
    render() {
 
        var settings = {
            infinite: false,
            slidesToShow: 4,
            slidesToScroll: 4,
            arrows:false,
            responsive: [
              {
                breakpoint: 320,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1 
                }
              },
              {
                breakpoint: 481,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1 
                }
              },
              {
                breakpoint: 769,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2            
                }
              },
              {
                breakpoint: 1025,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: true         
                }
              }
            ]
        };

        return (

            /* productsSection-wrapper */
            <div>
                {/* ProductsSlider */}
                <div className={classes.products_slider}>
                    <h4 className={classes.slider_title}> Products </h4>
                    <span className={classes.arrowvisilbilty}>
                    <PrevArrow prevSlide={this.prev}/>
                    <NextArrow nextSlide={this.next}/></span>

                    
                    <Slider ref={s => (this.slider = s)} className={classes.products_wrapper} {...settings}>
                        
                    
                    {this.state.products.map(product => {
                        return(<ProductCard key={product} product={product}/>)
                    })} 

                      
                    </Slider>
                </div>
            </div>
        );

    }

}

export default ProductsSlider

