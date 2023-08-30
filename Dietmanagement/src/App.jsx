import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'
import MealPlanner from './components/Mealplanner'
import ObesityCalculator from './components/ObesityCalculator'
import CaloriesCalculator from './components/CaloriesCalculator'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter >
          <Header />
        <Routes>
          <Route path={"/obesityCalculator"} element={<ObesityCalculator />} />
          <Route path={"/caloriesCalculator"} element={<CaloriesCalculator />} />
          <Route path={"/mealPlanner"} element={<MealPlanner/>} />
        </Routes>
          <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
