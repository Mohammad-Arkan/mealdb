import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FoodDetails = () => {
    const food = useLoaderData()
    console.log(food)
    return (
        <div>
          <h1>Food Info</h1>
        </div>
    );
};

export default FoodDetails;