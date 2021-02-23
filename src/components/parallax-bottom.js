import React from 'react'
import Slider from "react-slick";


 const ParallaxBottom = ()=>{

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

     return(
        <>
            <section className="parallax-bottom">
                
                <div className="flex-container">
                    <Slider {...settings}>
                        <div>
                            <h1>
                                Finite Theory defines a new representation of the formulas derived from General Relativity based on the superposed potentials of the predicted massless spin-2 gravitons that mediate gravitational fields.
                                <a 
                                    href="https://www.theusreview.com/reviews/Finite-Theory-by-Phil-Bouchard.html#.YDNWZegzaUl"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="link-read" >
                                        Read More
                                </a>
                                <span className="italic-tag span-verse">
                                    Kate Robinson
                                </span>
                            </h1>
                        </div>
                        <div>
                            <h1>
                                In Phil Bouchard’s new book, Unified Field Theory Finite, he describes a concept that appears to overthrow a theory of one of the most brilliant and original thinkers of the twentieth century.
                                <a 
                                    href="https://sanfranciscobookreview.com/product/unified-field-theory/"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="link-read" >
                                        Read More
                                </a>
                                <span className="italic-tag span-verse">
                                    D. Wayne Dworsky
                                </span>
                            </h1>
                        </div>
                    </Slider>
                </div>
            </section>
        </>
     )
 }

 export default ParallaxBottom