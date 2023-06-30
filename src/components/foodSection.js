import React, { useState, useEffect } from "react";
import '../stylesheets/section.css';
import FoodColumns from "./foodColumn";


export default function FoodSection() {
    // const categories = ["Almuerzos", "Tapeos", "Burguers & Sandwichs", "Desayunos & Meriendas", "Pasteleria & Postres", "Cafés & Bebidas frías", "Take Away"]
    const [categories, setCategories] = useState([])
    const [dishes, setDishes] = useState([])

    useEffect(() => {
        fetch("dishes.json")
            .then((response) =>
                response.json()
            )
            .then((dishesFetched) => {
                const categoryObject = {}

                dishesFetched.forEach((dish) => {
                    categoryObject[dish.category] = "";
                })
                setDishes(dishesFetched);
                setCategories(Object.keys(categoryObject))
            })
            .catch((e) => {
                console.log(e)
            })

    }, [])



    return (
        <>
            {
                categories.map((dishCategory, index) => {
                    let category = dishes.filter((obj) => obj.category === dishCategory)
                    return (
                        <React.Fragment key={index}>
                            <h3 id={index}>{dishCategory}</h3>
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
