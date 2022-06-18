import React from "react";

const Card = ({name, imageLocation}) => {
    return (
        <div>
            <img src={imageLocation} alt={name}/>
            <div>{name}</div>
        </div>
    )
}

export default Card;