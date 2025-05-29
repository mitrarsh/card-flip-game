import React, { Component } from 'react';
import Card from './card';
import { Link } from 'react-router-dom';


class Level3 extends Component {
    state = {
        cardList:[
            {value:"🍩", flipped:false, paired:false},
            {value:"🍩", flipped:false, paired:false},
            {value:"🍬", flipped:false, paired:false},
            {value:"🍬", flipped:false, paired:false},
            {value:"🍨", flipped:false, paired:false},
            {value:"🍨", flipped:false, paired:false},
            {value:"🧁", flipped:false, paired:false},
            {value:"🧁", flipped:false, paired:false},
            {value:"🍪", flipped:false, paired:false},
            {value:"🍪", flipped:false, paired:false},
            {value:"🍭", flipped:false, paired:false},
            {value:"🍭", flipped:false, paired:false},
            {value:"🧋", flipped:false, paired:false},
            {value:"🧋", flipped:false, paired:false},
            {value:"🍫", flipped:false, paired:false},
            {value:"🍫", flipped:false, paired:false},
            {value:"🥨", flipped:false, paired:false},
            {value:"🥨", flipped:false, paired:false},

            ].sort(()=>Math.random()-0.5),

        flippedCards:0,
        paired:0,
        status:"9 pairs left.",
        remaining:69,
    } 

    handleFlip=(card)=>{


        let {flippedCards, cardList}=this.state;

        if(card.flipped || card.paired) return;
        
        card.flipped=true;
        flippedCards++;

        if (flippedCards<2){
            this.setState({cardList, flippedCards});
            return;
        }
        else{
            this.handlePairing();
        }
    }

    handlePairing=()=>{

        let {cardList, paired, flippedCards, status, remaining}= this.state;

        const tempflipped= cardList.filter(card=>card.flipped&& !card.paired);

        if(tempflipped.length>=2){
            const[a,b] = tempflipped;
            if (a.value===b.value){
                a.paired=b.paired=true;
                paired++;
                remaining--;

                remaining===0
                ? status= "You Win! 🎉"
                : status= `${remaining} pairs left`;
                this.setState({ paired, remaining, cardList, status, flippedCards: 0 });
            }
            else{
                setTimeout(() => {a.flipped=false; b.flipped=false;
                this.setState({ paired, remaining, cardList, status, flippedCards: 0 });}
                ,500);
            }


            
        }

        this.setState({ paired, cardList, status, flippedCards:0});
    }


    
    render() { 
        return (
            <div className='cards-container'>
                    <p>{this.state.status}</p>
                <div className='cards3'>
                    {this.state.cardList.map(i=><Card 
                                            value={i.value}
                                            flipped={i.flipped}
                                            paired={i.paired}
                                            onFlip={()=>this.handleFlip(i)}/>)
                    }
                </div>
                <button  className='nextbtn'><Link
                                        to="/level3"
                                        disabled={this.state.remaining !== 0}
                                        style={{
                                                fontSize: "1.5rem",
                                                color:  "white",
                                                fontWeight: "900",
                                                marginTop: "2rem",
                                                backgroundColor: "rgb(102, 154, 78)",
                                                border: "none",
                                                borderRadius: "0.5rem",
                                                padding: "0.5rem",
                                                cursor: "pointer",
                                                textDecoration:"none",
                                                pointerEvents: this.state.remaining !== 0 ? 'none' : 'auto',
                                                opacity: this.state.remaining !== 0 ? 0.5 : 1,
                                            
                                        }}
                                        >
                                        Next Level
                                        </Link>
                                </button>
            </div>
        );
    }
}
 
export default Level3;