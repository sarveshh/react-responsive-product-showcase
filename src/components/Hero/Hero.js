import React from 'react'
import './Hero.css'
import { SliderData } from './SliderData'
import { Button } from '../Button/Button'

const Hero = ({ slides }) => {
    return (
        <section>
            <div className="hero-wrapper">
                {slides.map((slide, index) => {
                    return (
                        <div key={index} className="hero-slide">
                            <div className="hero-slider">
                                <img src="" alt="" className="hero-image" />
                                <div className="hero-content">
                                    <h1>{slide.title}</h1>
                                    <p>{slide.price}</p>
                                    <Button to={slide.path} buttonStyle='btn--primary'>
                                        {slide.label}
                                    </Button>
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
