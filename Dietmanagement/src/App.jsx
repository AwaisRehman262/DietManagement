import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'
import MealPlanner from './components/Mealplanner'
import ObesityCalculator from './components/ObesityCalculator'
import CaloriesCalculator from './components/CaloriesCalculator'

function App() {

  return (
    <>
      <Header />
      <MealPlanner />
      <CaloriesCalculator />
      <ObesityCalculator />
      {/* <Footer /> */}
    </>
  )
}

export default App
