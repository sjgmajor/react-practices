import React from 'react';
import FoodListItem from './FoodListItem';

function FoodList({foods}) {
    const foodItems = [];
    foods.forEach((food) => {
        foodItems.push(<FoodListItem name={food.name} count={food.count}/>);
    });

    const a =[1, 2, 3];
    a.map((e) => {
        return e*e;
    })
    
    return (
        <ul>
            {foodItems}
        </ul>
    );
}

export default FoodList;