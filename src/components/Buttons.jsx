import React from 'react'

function Buttons({styles}) {
  return (
    <button type='button' className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18] text-primary outline-none ${styles} rounded-[10px]`}>
        Get Started
    </button>
  )
}

export default Buttons