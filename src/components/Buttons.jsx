import React from 'react'

function Buttons() {
    const cities =[
        {
            id:1,
            name:"London"
        },
        {
            id:2,
            name:"Sydney"
        },
        {
            id:3,
            name:"Tokyo"
        },
        {
            id:4,
            name:"Paris"
        },
        {
            id:5,
            name:"Toronto"
        }
    ]

  return (
    <div className='flex items-center justify-around my-6'>
        {cities.map(city => {
            return (
                <button key={city.id} className='text-lg font-medium hover:'>{city.name}</button>
            )
        })}
        
    </div>
  )
}

export default Buttons
