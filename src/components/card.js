import React from "react";
import './styles.css';

const Card = (props) => {
    console.log(props)
    return (
        <>
            <section className="card">
                <img src={props.item.imageUrl} alt="Mount Fuji" className="card--Img" />
                <div className="cardContent">
                    <img src="https://raw.githubusercontent.com/LisaPMunich/travel-journal/main/src/assets/icons8-location-48.png" alt="location logo" className="card--location" />
                    <span className="card--dest">{props.item.location}</span>
                    <h1 className="card--title">{props.item.title}</h1>
                    <span className="card--date">{props.item.startDate} - {props.item.endDate}</span>
                    <p className="card--desc">
                        {props.item.description}
                    </p>
                </div>
            </section>
            <hr className="card--line"></hr>
        </>
    )

}

export default Card;