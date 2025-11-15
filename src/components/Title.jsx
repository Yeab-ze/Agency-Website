import React from 'react'

const Title = ({ title, desc }) => {
  return (
    <div id='services' className='text-center max-w-xl'>
        <h2 className='text-xl sm:text-5xl font-medium text-center'>
            {title}
        </h2>

        <p className='max-w-lg text-center text-gray-500 dark:text-white/75 mt-6 mx-auto'>
            {desc}
        </p>
    </div>
  )
}

export default Title
