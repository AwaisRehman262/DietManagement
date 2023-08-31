import React, { useState } from 'react';
import './mealplanner.css';
const MealPlanner = () => {
    const [selectedMeals, setSelectedMeals] = useState([]);

    const handleMealSelect = (day, meal) => {
        // Update selectedMeals state with selected meal for the specific day
        setSelectedMeals((prevSelectedMeals) => ({
            ...prevSelectedMeals,
            [day]: meal,
        }));
    };

    return (
        <div  className="mealplanner" style={styles.container}>
            <h2>Meal Planner</h2>
            <form style={styles.form}>
                <div>
                    <label htmlFor="Monday">Monday:</label>
                    <select
                        id="Monday"
                        onChange={(e) => handleMealSelect('Monday', e.target.value)}
                        value={selectedMeals['Monday'] || ''}>
                        <option value="">Select a meal</option>
                        <option value="breakfast">Breakfast</option>
                        <option value="lunch">Lunch</option>
                        <option value="dinner">Dinner</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="tuesday">Tuesday:</label>
                    <select
                        id="tuesday"
                        onChange={(e) => handleMealSelect('tuesday', e.target.value)}
                        value={selectedMeals['tuesday'] || ''}>
                        <option value="">Select a meal</option>
                        <option value="breakfast">Breakfast</option>
                        <option value="lunch">Lunch</option>
                        <option value="dinner">Dinner</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="wednesday">Wednesday:</label>
                    <select
                        id="wednesday"
                        onChange={(e) => handleMealSelect('wednesday', e.target.value)}
                        value={selectedMeals['wednesday'] || ''}>
                        <option value="">Select a meal</option>
                        <option value="breakfast">Breakfast</option>
                        <option value="lunch">Lunch</option>
                        <option value="dinner">Dinner</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="thursday">Thursday:</label>
                    <select
                        id="thursday"
                        onChange={(e) => handleMealSelect('thursday', e.target.value)}
                        value={selectedMeals['thursday'] || ''}>
                        <option value="">Select a meal</option>
                        <option value="breakfast">Breakfast</option>
                        <option value="lunch">Lunch</option>
                        <option value="dinner">Dinner</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="friday">Friday:</label>
                    <select
                        id="friday"
                        onChange={(e) => handleMealSelect('friday', e.target.value)}
                        value={selectedMeals['friday'] || ''}>
                        <option value="">Select a meal</option>
                        <option value="breakfast">Breakfast</option>
                        <option value="lunch">Lunch</option>
                        <option value="dinner">Dinner</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="saturday">Saturday:</label>
                    <select
                        id="saturday"
                        onChange={(e) => handleMealSelect('saturday', e.target.value)}
                        value={selectedMeals['saturday'] || ''}>
                        <option value="">Select a meal</option>
                        <option value="breakfast">Breakfast</option>
                        <option value="lunch">Lunch</option>
                        <option value="dinner">Dinner</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="sunday">Sunday:</label>
                    <select
                        id="sunday"
                        onChange={(e) => handleMealSelect('sunday', e.target.value)}
                        value={selectedMeals['sunday'] || ''}>
                        <option value="">Select a meal</option>
                        <option value="breakfast">Breakfast</option>
                        <option value="lunch">Lunch</option>
                        <option value="dinner">Dinner</option>
                    </select>
                </div>
    
            </form>
            <div>
                <h3>Selected Meals:</h3>
                <pre>{JSON.stringify(selectedMeals, null, 2)}</pre>
            </div>
        </div>
    );
};

const styles = {
    container: {
        maxWidth: '800px',
        margin: "0 auto",
        padding: '2rem',

    },
    form: {
        display: 'grid',
        gap: '1rem',
    },
};

export default MealPlanner;
