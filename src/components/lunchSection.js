import React, { useState, useEffect } from "react";
import '../stylesheets/section.css';
import FoodColumns from "./foodColumn";


export default function LunchSection() {
    const categories = ["Almuerzos", "Tapeos", "Burguers & Sandwichs", "Desayunos & Meriendas", "Pasteleria & Postres", "Cafés & Bebidas frías", "Take Away"]
    const [dishes, setDishes] = useState([])

    useEffect(() => {
        fetch("dishes.json")
            .then((response) =>
                response.json()
            )
            .then((obj) => {
                setDishes(obj);
                console.log(obj)
            })
            .catch((e) => {
                console.log(e)
            })

    }, [])



    return (
        <>
            {
                categories.map((e, index) => {
                    let category = dishes.filter((obj) => obj.id === e)
                    return (
                        <React.Fragment key={index}>
                            <h3 id={index}>{e}</h3>
                            <div className="section-container">
                                {
                                    category.map((obj, index) =>
                                        <FoodColumns
                                            key={index}
                                            name={obj.name}
                                            price={obj.price}
                                            img={obj.img}
                                            description={obj.description}>
                                        </FoodColumns>)
                                }

                            </div>
                        </React.Fragment>)
                }
                )
            }
        </>
    );
}
