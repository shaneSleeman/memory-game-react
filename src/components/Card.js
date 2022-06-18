import React, {useState, useEffect} from "react";

const Card = ({location, imageLocation}) => {
    return (
        <div className={imageLocation}>
            <img className={location} src={imageLocation} alt="Missing"/>
        </div>
    )
}

export default Card;