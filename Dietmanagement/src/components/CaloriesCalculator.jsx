import React, { useState } from 'react';

const CaloriesCalculator = () => {
    const [weight, setWeight] = useState('');
    const [activityLevel, setActivityLevel] = useState('sedentary');
    const [calories, setCalories] = useState('');

    const activityLevels = {
        sedentary: 1.2,
        light: 1.375,
        moderate: 1.55,
        active: 1.725,
        veryActive: 1.9,
    };

    const calculateCalories = () => {
        const activityMultiplier = activityLevels[activityLevel];
        const calculatedCalories = (activityMultiplier * 7700 * parseFloat(weight)).toFixed(0);
        setCalories(calculatedCalories);
    };

    return (
        <div style={styles.container}>
            <h2>Calories Calculator</h2>
            <div style={styles.form}>
                <label htmlFor="weight">Weight (in kg):</label>
                <input
                    type="number"
                    id="weight"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                />
                <label htmlFor="activityLevel">Activity Level:</label>
                <select
                    id="activityLevel"
                    value={activityLevel}
                    onChange={(e) => setActivityLevel(e.target.value)}
                >
                    <option value="sedentary">Sedentary (little or no exercise)</option>
                    <option value="light">Lightly active (light exercise/sports 1-3 days/week)</option>
                    <option value="moderate">Moderately active (moderate exercise/sports 3-5 days/week)</option>
                    <option value="active">Very active (hard exercise/sports 6-7 days a week)</option>
                    <option value="veryActive">Super active (very hard exercise/sports, physical job)</option>
                </select>
                <button onClick={calculateCalories}>Calculate</button>
            </div>
            {calories && <p>Your estimated daily calories: {calories}</p>}
        </div>
        
                        
    );
};

const styles = {
    container: {
        maxWidth: '400px',
        margin: '0 auto',
        padding: '2rem',
    },
    form: {
        display: 'grid',
        gap: '1rem',
    },
};

export default CaloriesCalculator;
