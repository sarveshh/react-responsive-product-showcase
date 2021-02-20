import React from 'react'
import './Hero.css'
import { SliderData } from './SliderData'
import { Button } from '../Button/Button'
import { IoMdArrowRoundForward } from 'react-icons/io'
import { IoArrowForward, IoArrowBack } from 'react-icons/io5'

const Hero = ({ slides }) => {
    return (
        <section>
            <div className="hero-wrapper">
                {slides.map((slide, index) => {
                    return (
                        <div key={index} className="hero-slide">
                            <div className="hero-slider">
                                <img src={slide.image} alt={slide.alt} className="hero-image" />
                                <div className="hero-content">
                                    <h1>{slide.title}</h1>
                                    <p>{slide.price}</p>
                                    <Button to={slide.path} buttonStyle='btn--filled'>
                                        {slide.label}
                                        <IoMdArrowRoundForward />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    )
                })}
                <div className="slider-buttons">
                    <IoArrowBack className="slider-arrows" />
                    <IoArrowForward className="slider-arrows" />
                </div>
            </div>
        </section>
    )
}

export default Hero
