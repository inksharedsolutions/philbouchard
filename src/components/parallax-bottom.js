import React from 'react'
import Slider from "react-slick";


 const ParallaxBottom = ()=>{

    var settings = {
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
                            Finite Theory: Historical Milestone in Physics by Phil Bouchard is a non-fiction science and modern astrophysics book that challenges and expands on conventional theory which is widely accepted (even with multiple open questions remaining), consistent with the experimental data attributed to Einstein's General Relativity.
                                <a 
                                    href="https://books.google.ca/books/about/Finite_Theory.html?id=4q_fzAEACAAJ"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="link-read" >
                                        Read More
                                </a>
                                <span className="italic-tag span-verse">
                                    Asher Syed
                                </span>
                            </h1>
                        </div>
                        <div>
                            <h1>
                            The year 1915 marked a significant milestone in the scientific community as Albert Einstein published his paper on general relativity. This theory states that the past continues to exist and that the future is already there, waiting for us to experience it.
                                <a 
                                    href="https://books.google.ca/books/about/Finite_Theory.html?id=4q_fzAEACAAJ"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="link-read" >
                                        Read More
                                </a>
                                <span className="italic-tag span-verse">
                                    Vincent Dublado
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