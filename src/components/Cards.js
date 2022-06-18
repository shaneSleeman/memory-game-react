import React, {useState, useEffect} from "react";
import Card from './Card';

const Cards = ({cardsList}) => {
    const [index, setIndex] = useState([]);
    const [selects, setSelect] = useState([]);

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
            setIndex(index => [...index, newIndex]);
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