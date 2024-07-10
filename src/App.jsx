import React from 'react'
import Buttons from './components/Buttons'
import Input from './components/Input'
import TimeAndLocation from './components/TimeAndLocation'


const App = () => {
  return (
    <>
    <div className='mx-auto max-w-screen-lg mt-4 py-5 px-32 bg-gradient-to-br shadow-xl shadow-gray-400 from-cyan-600 to-blue-700'>
    <Buttons/>
    <Input/>
    <TimeAndLocation/>
    </div>
    </>
  )
}
export default App