import React from 'react'
import Buttons from './components/Buttons'
import Input from './components/Input'
import TimeAndLocation from './components/TimeAndLocation'
import Details from './components/Details'
import Forecast from './components/Forecast'
import getWeatherData from './services/weatherService'



const App = () => {

  const getweather = async() =>{
    const data = await getWeatherData("weather", {q : "berlin"});
    console.log(data)
  }

  getweather();

  return (
    <>
    <div className='mx-auto max-w-screen-lg mt-4 py-5 px-32 bg-gradient-to-br shadow-xl shadow-gray-400 from-cyan-600 to-blue-700'>
    <Buttons/>
    <Input/>
    <TimeAndLocation/>
    <Details/>
    <Forecast/>
    <Forecast/>
    </div>
    </>
  )
}
export default App