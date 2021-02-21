import React from 'react'
import { Button } from '../Button/Button'

const InfoSection = ({
    heading,
    paragraphOne,
    paragraphTwo,
    buttonLabel,
    reverse,
    image,
}) => {
    return (
        <section>
            <div className="info-container">
                <div className="column-left">
                    <h1>{heading}</h1>
                    <p>{paragraphOne}</p>
                    <p>{paragraphTwo}</p>
                    <Button to="/homes" buttonStyle="btn--filled">
                        {buttonLabel}
                    </Button>
                </div>
                <div className="column-right" reverse={reverse}>
                    <img src={image} alt="home" />
                </div>
            </div>
        </section>
    )
}

export default InfoSection
