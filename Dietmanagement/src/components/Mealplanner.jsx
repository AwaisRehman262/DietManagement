import React, { useState } from 'react';

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
        <div style={styles.container}>
            <h2>Meal Planner</h2>
            <form style={styles.form}>
                <div>
                    <label htmlFor="monday">Monday:</label>
                    <select
                        id="monday"
                        onChange={(e) => handleMealSelect('monday', e.target.value)}
                        value={selectedMeals['monday'] || ''}
                    >
                        <option value="">Select a meal</option>
                        <option value="breakfast">Breakfast</option>
                        <option value="lunch">Lunch</option>
                        <option value="dinner">Dinner</option>
                    </select>
                </div>
                {/* Repeat similar blocks for other days */}
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
        margin: '0 auto',
        padding: '2rem',
    },
    form: {
        display: 'grid',
        gap: '1rem',
    },
};

export default MealPlanner;
