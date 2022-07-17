import React from 'react'

const Pagination = () => {
  return (
        <ul className='flex justify-center mt-14 text-base font-secondary text-primary'>
            <li className='mx-2 px-2 py-1'>1</li>
            <li className='mx-2 px-2 py-1'>2</li>
            <li className='mx-2 px-2 py-1 bg-primary text-white rounded'>3</li>
            <li className='mx-2 px-2 py-1'>4</li>
            <li className='mx-2 px-2 py-1'>...</li>
            <li className='mx-2 px-2 py-1'>10</li>
        </ul>
  )
}

export default Pagination