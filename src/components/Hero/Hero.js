import React from 'react'
import './Hero.css'

const Hero = () => {
    return (
        <section>
            <div className="hero-wrapper">
                {slides.map((slide, index) => {
                    return (
                        <div key={index} className="hero-slide">
                            <div className="hero-slider">
                                <img src="" alt="" className="hero-image" />
                                <div className="hero-content">

                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Hero
