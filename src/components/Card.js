import React, {useState, useEffect} from "react";

const Card = ({imageLocation}) => {
    const [selected, setSelected] = useState(0);

    useEffect(() => {
        const clicked = () => {
            setSelected(1);
        };
        //const thisCard = document.querySelector(`.${imageLocation}`);
        
        //ref.current.addEventListener('click', clicked);
    }, [])

    return (
        <div className={imageLocation}>
            <img src={imageLocation} alt="Missing"/>
        </div>
    )
}

export default Card;