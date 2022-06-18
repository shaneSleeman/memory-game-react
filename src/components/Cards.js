import React, {useState, useEffect} from "react";
import Card from './Card';

const Cards = ({cardsList, index}) => {
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