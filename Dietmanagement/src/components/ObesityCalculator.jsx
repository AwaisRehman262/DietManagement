import React, { useState } from 'react';
import './ObesityCalculator.css'

const ObesityCalculator = () => {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi, setBMI] = useState(null);
    const [status, setStatus] = useState('');


const ObesityCalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [gender, setGender] = useState('male');
  const [activityLevel, setActivityLevel] = useState('sedentary');
  const [bmi, setBMI] = useState(null);
  const [status, setStatus] = useState('');

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      let bmiValue;

      if (gender === 'male') {
        bmiValue = calculateMaleBMI(weight, heightInMeters);
      } else if (gender === 'female') {
        bmiValue = calculateFemaleBMI(weight, heightInMeters);
      }

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

  const calculateMaleBMI = (weight, height) => {
    // Calculate BMI for males based on different activity levels
    // Adjust the formulas and values according to your needs
    if (activityLevel === 'sedentary') {
      return (weight / (height * height)).toFixed(1);
    } else if (activityLevel === 'active') {
      return (weight / (height * height)).toFixed(1); // Adjust the formula
    }
  };

  const calculateFemaleBMI = (weight, height) => {
    // Calculate BMI for females based on different activity levels
    // Adjust the formulas and values according to your needs
    if (activityLevel === 'sedentary') {
      return (weight / (height * height)).toFixed(1);
    } else if (activityLevel === 'active') {
      return (weight / (height * height)).toFixed(1); // Adjust the formula
    }
  };

  return (
    <div className="container">
      <h2>Obesity Calculator</h2>
      <div className="form">
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
        <label htmlFor="gender">Gender:</label>
        <select
          id="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <label htmlFor="activityLevel">Activity Level:</label>
        <select
          id="activityLevel"
          value={activityLevel}
          onChange={(e) => setActivityLevel(e.target.value)}
        >
          <option value="sedentary">Sedentary</option>
          <option value="active">Active</option>
        </select>
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



//     const calculateBMI = () => {
//         if (weight && height) {
//             const heightInMeters = height / 100;
//             const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);
//             setBMI(bmiValue);

//             if (bmiValue < 18.5) {
//                 setStatus('Underweight');
//             } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
//                 setStatus('Normal weight');
//             } else if (bmiValue >= 25 && bmiValue < 29.9) {
//                 setStatus('Overweight');
//             } else {
//                 setStatus('Obese');
//             }
//         }
//     };

//     return (
//         <div className={"container"} style={styles.container}>
//             <h2>Obesity Calculator</h2>
//             <div className={"form"} style={styles.form}>
//                 <label htmlFor="weight">Weight (in kg):</label>
//                 <input
//                     type="number"
//                     id="weight"
//                     value={weight}
//                     onChange={(e) => setWeight(e.target.value)}
//                 />
//                 <label htmlFor="height">Height (in cm):</label>
//                 <input
//                     type="number"
//                     id="height"
//                     value={height}
//                     onChange={(e) => setHeight(e.target.value)}
//                 />
//                 <button onClick={calculateBMI}>Calculate</button>
//             </div>
//             {bmi && (
//                 <div>
//                     <p>Your BMI: {bmi}</p>
//                     <p>Status: {status}</p>
//                 </div>
//             )}
//         </div>
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
