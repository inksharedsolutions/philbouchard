import React from 'react'
import { Link } from 'gatsby'
import AuthorImg from '../static/author/Author-Photo.jpg'

const Author = () => {
    return (
        <>
            <section className="upper-main" id="main-upper-author">
                <div className="grid-two-columns">

                    {/* <div className="grid-child" id="wrapper-heading-content">
                        <h1>About the<br /> Author</h1>
                    </div> */}

                    <div className="grid-child" id="author-contents">

                        <p data-aos="fade-up" data-aos-duration="2000">
                        Phil Bouchard (1977) was born in Ottawa, Canada; studied mathematics/computer science at the University of Sherbrooke and has experience in the commercial software development for companies in Ottawa, ON; San Diego, CA and London, ON since the new millennium in the gaming, bioinformatics and the military defense industries.
                        </p>

                        <h1 className="author-name-tag" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                            <span>Phil</span>
                            <span>Bouchard</span>
                        </h1>

                        <span className="author-tagline">Author & Writer</span>
                        <Link className="buttonLayouts" data-aos="fade-up" data-aos-duration="3000" to="/about-the-author">
                            Read More
                        </Link>
                    </div>
                    
                    <div className="grid-child" id="author-image-container">
                        <img alt="author-img" src={AuthorImg} data-aos="fade-up" data-aos-duration="3000" />
                    </div>

                </div>
            </section>
        </>
    )
}

export default Author;