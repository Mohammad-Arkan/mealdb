import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Food from './Food';

const Resturent = () => {
    const {meals} = useLoaderData()
    console.log(meals)
    return (
        <div className='page-container'>
           <div className='grid gap-6 mb-8 lg:grid-cols-4 sm:grid-cols-2'>
            {
              meals.map(meal =><Food
              key={meal.idMeal}
              meal={meal}
              ></Food>
              
            )}

           </div>
        </div>
    );
};

export default Resturent;