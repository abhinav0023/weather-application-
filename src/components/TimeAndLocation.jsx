import React from 'react'

function TimeAndLocation() {
  return (
    <div>
        <div className='flex items-center justify-center my-6'>
            <p className='text-xl font-extralight'> Tuesday, 10 July 2024 | Local time: 13:00 </p>
        </div>
        <div className='flex items-center justify-center my-3'>
            <p className='text-3xl font-medium'>Berlin, DE</p>
        </div>
    </div>
  )
}

export default TimeAndLocation