import React, {useState, useEffect, useRef} from "react";

const Card = ({imageLocation}) => {
    const [selected, setSelected] = useState(0);

    const ref = useRef();

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
            <h1>{selected}</h1>
        </div>
    )
}

export default Card;