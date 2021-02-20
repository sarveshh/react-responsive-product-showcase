import React from 'react'
import { Button } from '../Button/Button'

const InfoSection = () => {
    return (
        <section>
            <div className="info-container">
                <div className="column-left">
                    <h1>Heading</h1>
                    <p>Paragraph</p>
                    <p>Paragraph</p>
                    <Button to="/homes" buttonStyle="btn--filled">
                        label
                    </Button>
                </div>
                <div className="column-right">
                    <img src="" alt="home" />
                </div>
            </div>
        </section>
    )
}

export default InfoSection
