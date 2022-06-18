import React, {useState, useEffect} from "react";
import Card from './Card';

const Cards = ({cardsList}) => {
    const [index, addIndex] = useState([]);
    //let index = [];
    useEffect(() => {
        // Avoid repeats
        for(let i = 0; i < 6; i++) {
            let isNew = false;
            let newIndex;
            while(!isNew) {
                newIndex = Math.floor(Math.random() * 25)
                if(!index.includes(newIndex)) {
                    isNew = true;
                }
            }
            addIndex(index => [...index, newIndex]);
            index.push(newIndex);
        }
        console.log(cardsList[index[0]]);
    }, [])

    function changeSelected(card) {
        alert("clicked");
    }

    return (
        <div className="cards">
            <div onClick={changeSelected}>{cardsList[index[0]]}</div>
            <div onClick={changeSelected}>{cardsList[index[1]]}</div>
            <div onClick={changeSelected}>{cardsList[index[2]]}</div>
            <div onClick={changeSelected}>{cardsList[index[3]]}</div>
            <div onClick={changeSelected}>{cardsList[index[4]]}</div>
            <div onClick={changeSelected}>{cardsList[index[5]]}</div>
        </div>
    )
}

export default Cards;