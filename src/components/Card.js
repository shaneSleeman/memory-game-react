import React, {useState, useEffect} from "react";

const Card = ({location, imageLocation}) => {
    const [selected, setSelected] = useState(0);

    useEffect(() => {
        const clicked = () => {
            setSelected(1);
        };
    }, [])

    return (
        <div className={imageLocation}>
            <img className={location} src={imageLocation} alt="Missing"/>
        </div>
    )
}

export default Card;