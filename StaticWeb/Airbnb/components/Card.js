import React from "react"

export default function Cards(props) {
    let badge
    if(props.openSpots===0){
        badge="Sold Out"
    }else if(props.location==="Online"){
        badge="Online"
    }
    return (
        <div className="cardContainer">
            {badge && <div className="bdge">{badge}</div>}
            <img src={`../images/${props.img}`} alt="" className="cardImage"/>
            <div className="cardStatus">
                <img src="../images/star.png" alt="" className="cardStar"/>
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p> <strong>From {props.price}</strong> / person</p>
        </div>

    )
}