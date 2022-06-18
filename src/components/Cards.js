import React, {useState, useEffect} from "react";
import Card from './Card';

const Cards = ({cardsList, index}) => {
    //const [index, setIndex] = useState([]);
    //const [selects, setSelect] = useState([]);
    /*
    useEffect(() => {
        //cardsList[0].a
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
            setIndex(index => [...index, newIndex]);
            index.push(newIndex);
        }
    }, [])*/

    useEffect(() => {
        console.log(index[0][1]);
    })

    return (
        <div className="cards">
            {cardsList[index[0][6]]}
            {cardsList[index[0][7]]}
            {cardsList[index[0][8]]}
            {cardsList[index[0][9]]}
            {cardsList[index[0][10]]}
            {cardsList[index[0][11]]}
        </div>
    )
}

export default Cards;