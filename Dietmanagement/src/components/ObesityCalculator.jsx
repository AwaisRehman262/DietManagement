import React, { useState } from 'react';
import './ObesityCalculator.css'

const ObesityCalculator = () => {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi, setBMI] = useState(null);
    const [status, setStatus] = useState('');

    const calculateBMI = () => {
        if (weight && height) {
            const heightInMeters = height / 100;
            const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);
            setBMI(bmiValue);

            if (bmiValue < 18.5) {
                setStatus('Underweight');
            } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
                setStatus('Normal weight');
            } else if (bmiValue >= 25 && bmiValue < 29.9) {
                setStatus('Overweight');
            } else {
                setStatus('Obese');
            }
        }
    };

    return (
        <div className={"container"} style={styles.container}>
            <h2>Obesity Calculator</h2>
            <div className={"form"} style={styles.form}>
                <label htmlFor="weight">Weight (in kg):</label>
                <input
                    type="number"
                    id="weight"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                />
                <label htmlFor="height">Height (in cm):</label>
                <input
                    type="number"
                    id="height"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                />
                <button onClick={calculateBMI}>Calculate</button>
            </div>
            {bmi && (
                <div>
                    <p>Your BMI: {bmi}</p>
                    <p>Status: {status}</p>
                </div>
            )}
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

export default ObesityCalculator;
