import React from 'react'
import { Helmet } from 'react-helmet';

import Layout from '../components/layout'
import Nav from '../components/navigation'
import Banner from '../components/non-front-banner'
import BookInfo from '../components/book-info/book-info'
import { DiscussionEmbed } from "disqus-react"
import Book1 from '../static/book/book.png'
import ParallaxBottom from '../components/parallax-bottom';

const ATB = (props) => {

    const slug = (props.location.href);

    const disqusConfig = {
        shortname: 'phil-bouchard',
        config: { identifier: 12, slug }
    }


    return (
        <>
            <Layout>
                <Helmet title="About the Book | Phil Bouchard"/>
                <Nav pathExt={props.path} />

                <Banner
                    spanFirst={`About The`}
                    contextHeading={`Book`}
                />

                <main className="wrapperMain">
                    <div
                        className="container"
                        id="book-containers" >

                        <BookInfo
                            data={{
                                title: `Finite Theory`,
                                spanFirst: `Historical Milestone in Physics`,
                                imgSrc: Book1,
                                id: '',
                                content:
                                    `
                                        <p>
                                        In this book, a new gravitational theory is being proposed to replace General Relativity and extend classical physics. The theory is objective and predicts correct low scale GPS gravitational and kinetic time dilation, the correct position of the Moon, the perihelion precession disparity, the gravitational light bending, up to the rotation curve for all galaxies without non-baryonic dark matter, the expansion of the universe without dark energy, even solves black holes and the mass of the invisible universe encompassing the visible one.
                                        </p>

                                        <p>
                                        In practical terms this means we can achieve the following:
                                        </p>

                                        <p>
                                        -Faster than light velocity; <br />
                                        -Time travel into the future; <br />
                                        -Levitation. <br />
                                        </p>

                                        <p>
                                        You will also find many reasons why not only Einstein, but Michelson, Morley and even Newton all made wrong assumptions and how to verify this experimentally.
                                        </p>
                                                
                                    `,

                                ebooks: {
                                    // stratton: 'https://www.stratton-press.com/books/true-crime-cases/',
                                    barnes: 'https://www.barnesandnoble.com/w/finite-theory-phil-bouchard/1138517716?ean=9781648953019',
                                    amazon: 'https://www.amazon.com/Finite-Theory-Phil-Bouchard-ebook/dp/B08R7VDJDJ/ref=sr_1_1?dchild=1&keywords=9781648953019&qid=1609171036&sr=8-1',
                                },
                                paperback: {
                                    amazon: 'https://www.amazon.com/Finite-Theory-Phil-Bouchard/dp/164895300X/ref=sr_1_1?keywords=9781648953002&qid=1613641693&sr=8-1',
                                    barnes: 'https://www.barnesandnoble.com/w/finite-theory-phil-bouchard/1138517716?ean=9781648953002',
                                    booksamillion: 'https://www.booksamillion.com/p/Finite-Theory/Phil-Bouchard/9781648953002?id=8136417553198',
                                },
                            }}
                        />

                        <ParallaxBottom />

                        <div className="commentSection" >
                            <div id="disqus_thread">
                                <DiscussionEmbed {...disqusConfig} />
                            </div>
                        </div>
                    </div>
                </main>


            </Layout>
        </>
    )
}


export default ATB;