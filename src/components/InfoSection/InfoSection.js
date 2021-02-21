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

    let leftColumnClass = ['column-left'];
    let rightColumnClass = ['column-right']

    if (reverse) {
        leftColumnClass.push('orderClass2')
        rightColumnClass.push('orderClass1')
    } else {
        leftColumnClass.push('orderClass1')
        rightColumnClass.push('orderClass2')
    }

    return (
        <section>
            <div className="info-container">
                <div className={leftColumnClass.join(' ')}>
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
