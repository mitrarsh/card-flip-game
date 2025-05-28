import React, { Component } from 'react';
import Card from './card';


class Board extends Component {
    state = {
        cardList:[
            {value:"🍩", flipped:false, paired:false},
            {value:"🍩", flipped:false, paired:false},
            {value:"🍬", flipped:false, paired:false},
            {value:"🍬", flipped:false, paired:false},
            {value:"🍨", flipped:false, paired:false},
            {value:"🍨", flipped:false, paired:false},
            ].sort(()=>Math.random()-0.5),

        flippedCards:0,
        paired:0,
        status:"3 pairs left.",
        remaining:3,
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
                <div className='cards'>
                    {this.state.cardList.map(i=><Card 
                                            value={i.value}
                                            flipped={i.flipped}
                                            paired={i.paired}
                                            onFlip={()=>this.handleFlip(i)}/>)
                    }
                </div>
            </div>
        );
    }
}
 
export default Board;