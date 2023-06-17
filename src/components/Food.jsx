import React from 'react';
import { Link } from 'react-router-dom';

const Food = ({meal}) => {
    return (
        <div>
            <Link to={`food/${food.idMeal}`}>
            {/* <Link to="/food/id" > */}
            <div className='overflow-hidden relative mt-10 transition duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl'>
                <img src={meal.strMealThumb} alt="meal-cover" className='object-cover w-full h-56 md:h-64 xl:h-80'/>
                <div className='bg-black text-white bg-opacity-75 opacity-0 hover:opacity-100 absolute inset-0 transition-opacity duration-200 px-6 py-6 flex flex-col'>
                    <p>{meal.strMeal}</p><br/>
                    <p>{meal.strInstructions.substring(0, 100)}.....</p>
                    <p className='mt-auto'>Weight: {meal.strMeasure1}</p>
                </div>
            </div>
            </Link>
            
        </div>
    );
};

export default Food;