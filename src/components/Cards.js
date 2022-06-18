import React, {useState, useEffect} from "react";

const Cards = ({cardsList}) => {
    let index = [];
    useEffect(() => {
        // Avoid repeats, though not entirely foolproof
        for(let i = 0; i < 6; i++) {
            let isNew = false;
            let newIndex;
            while(!isNew) {
                newIndex = Math.floor(Math.random() * 25)
                if(!index.includes(newIndex)) {
                    isNew = true;
                }
            }
            index.push(newIndex);
            
        }
    }, [])

    return (
        <div className="cards">
            {cardsList[index[0]]}
            {cardsList[index[1]]}
            {cardsList[index[2]]}
            {cardsList[index[3]]}
            {cardsList[index[4]]}
            {cardsList[index[5]]}
        </div>
    )
}

export default Cards;