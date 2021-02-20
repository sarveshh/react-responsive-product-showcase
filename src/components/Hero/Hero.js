import React, { useState, useRef } from 'react'
import './Hero.css'
import { SliderData } from './SliderData'
import { Button } from '../Button/Button'
import { IoMdArrowRoundForward } from 'react-icons/io'
import { IoArrowForward, IoArrowBack } from 'react-icons/io5'

const Hero = ({ slides }) => {

    const [current, setCurrent] = useState(0)
    const length = slides.length
    const timeout = useRef(null)

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    return (
        <section>
            <div className="hero-wrapper">
                {slides.map((slide, index) => {
                    return (
                        <div key={index} className="hero-slide">
                            <div className="hero-slider">
                                <img src={slide.image} alt={slide.alt} className="hero-image" />
                                <div className="hero-content">
                                    <h1 className="house-title">{slide.title}</h1>
                                    <p className="house-price">{slide.price}</p>
                                    <Button to={slide.path} buttonStyle='btn--filled'>
                                        {slide.label}
                                        <IoMdArrowRoundForward className="arrow" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    )
                })}
                <div className="slider-buttons">
                    <IoArrowBack className="slider-arrows" onClick={prevSlide} />
                    <IoArrowForward className="slider-arrows" onClick={nextSlide} />
                </div>
            </div>
        </section>
    )
}

export default Hero
