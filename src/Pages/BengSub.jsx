// BengSub.jsx

import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";


const Bengsub2 = () => {
    return (
        <><br />
            <Navigation />

            <div>
                <div id="sub-card1">
                    <h3 id="subhead-1">Niaboytown</h3>
                    <p id="subpara-1">This is a mind-blowing adventure</p>
                    <div id="img-sub">

                        <Carousel>
                            <div >
                                <img src="https://images.pexels.com/photos/66997/pexels-photo-66997.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" id="sub-img" />

                            </div>
                            <div>
                                <img src="https://images.pexels.com/photos/837745/pexels-photo-837745.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" id="sub-img" />
        
                            </div>
                            <div>
                                <img src="https://images.pexels.com/photos/1624438/pexels-photo-1624438.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" id="sub-img" />
                            </div>
                        </Carousel>

                    </div>
                    <div id="sub-text">
                        <h2 id="sub-head-text">About the Experience</h2><br />
                        <p id="subparam">A random paragraph can also be an excellent way for a writer to tackle writers' block. Writing block can often happen
                            due to being stuck with a current project that the writer is trying to complete. By inserting a completely random paragraph from which
                            to begin, it can take down some of the issues that may have been causing the writers' block in the first place. A random paragraph
                            can also be an excellent way for a writer to tackle writers' block. Writing block can often happen due to being stuck with a current
                            project that the writer is trying to complete. By inserting a completely random paragraph from which to begin, it can take down some
                            of the issues that may have been causing the writers' block in the first place. A random paragraph can also be an excellent way for
                            a writer to tackle writers' block. Writing block can often happen due to being stuck with a current project that the writer is trying
                            to complete. By inserting a completely random paragraph from which to begin, it can take down some of the issues that may have been
                            causing the writers' block in the first place. A random paragraph can also be an excellent way for a writer to tackle writers' block.
                            Writing block can often happen due to being stuck with a current project that the writer is trying to complete. By inserting a completely
                            random paragraph from which to begin, it can take down some of the issues that may have been causing the writers' block in the first place.
                            A random paragraph can also be an excellent way for a writer to tackle writers' block. Writing block can often happen due to being stuck
                            with a current project that the writer is trying to complete. By inserting a completely random paragraph from which to begin, it can
                            take down some of the issues that may have been causing the writers' block in the first place. A random paragraph can also be an
                            excellent way for a writer to tackle writers' block. Writing block can often happen due to being stuck with a current project that
                            the writer is trying to complete. By inserting a completely random paragraph from which to begin, it can take down some of the
                            issues that may have been causing the writers' block in the first place.</p>
                    </div>
                </div>
            </div> <br />
            <Footer/>
        </>
    )
}

export default Bengsub2;