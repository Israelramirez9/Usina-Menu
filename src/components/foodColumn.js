import React from "react";
import '../stylesheets/foodColumns.css'
function FoodColumns({ name, price, img, description }) {
    return (
        <div className="food-column-container">

            <div className="dish">
                <div className="dish-title-price-container">
                    <div className="dish-name">{name}</div>
                    <div className="dish-price">{price}$</div>
                </div>
                <div className="dish-img"><img src={img} alt="food-dish"></img></div>
                <div className="dish-description">{description}</div>
            </div>


        </div>
    );
}

export default FoodColumns;