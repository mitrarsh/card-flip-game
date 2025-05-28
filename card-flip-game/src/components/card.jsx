import React, { Component } from 'react';

class Card extends Component {

    render() { 

        const { value, flipped, paired, onFlip } = this.props;

        return (
            <div className='card-container' 
                onClick={!paired ? onFlip : undefined}>
                <div 
                className={`card-inner ${flipped ? 'flipped' : ''}`}>

                            <div className="card-front">
                            {value}
                            </div>
                            <div className="card-back">
                            </div>
                </div>
            </div>
        );
    }
}
 
export default Card;