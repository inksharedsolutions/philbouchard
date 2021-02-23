import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from '../components/layout';
import Nav from '../components/navigation';
import Banner from '../components/non-front-banner'
import AuthorImg from '../static/author/Author-Photo.jpg'

const Author = (props) => {
    return(
        <>
            <Layout>
                <Helmet title="About the Author | Phil Bouchard"/>
                <Nav pathExt={props.path}/>
                <Banner
                    spanFirst={`About The`}
                    contextHeading={`Author`} />

                <div className="container">
                    <section className="body-author-contents columns">

                        <div className="heading-quote column">
                            <div className="author-image-container">
                                <img src={AuthorImg} alt="author-profile"/>
                            </div>

                            <div className="heading-quote">
                                <h4>
                                    "That means the mass of the invisible universe is 738 times the mass of the visible universe."
                                </h4>
                                <span className="ata-span-fx">
                                    Favorite Line from the Book
                                </span>
                            </div>

                        </div>

                        <article className="article-section column" id="author">
                            <p>
                            Phil Bouchard (1977) was born in Ottawa, Canada; studied mathematics/computer science at the University of Sherbrooke and has experience in the commercial software development for companies in Ottawa, ON; San Diego, CA and London, ON since the new millennium in the gaming, bioinformatics and the military defense industries.
                            </p>
                            <p>
                            He is also a credible martial artist at the North American level, the founder and Chief Executive Officer (CEO) of an important innovative scientific company in artificial intelligence covering Artificial Narrow Intelligence (ANI), Artificial General Intelligence (AGI), Artificial Super Intelligence (AGI), and defines a new layer to finalize it all: Artificial Collective Intelligence (ACI).
                            </p>
                            <p>
                            Not to mention powerful tools used to create deterministic memory management and to speed up Python algorithms by 10x: Fornux C++ Superset and AI PowerShift. To know more about it, please visit: <a href="https://www.fornux.com" target="_blank" rel="noreferrer" className="link-read">https://www.fornux.com</a>
                            </p>

                            <p>
                                <span className="author-name">
                                    <span className="author-span-ft">Author | Writer </span>
                                    <span className="ata-name">Phil Bouchard</span>
                                </span>
                            </p>

                        </article>

                    </section>
                </div>
            </Layout>
        </>
    )
}

export default Author;