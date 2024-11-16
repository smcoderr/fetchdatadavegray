import React from 'react'

const Button = ({buttonText, reqType, setReqType}) => {
  return (
    <button className={` ${buttonText === reqType ? 'bg-black text-white' : 'bg-stone-300'} p-3 flex-1 border border-black`}
    type='button'
    onClick={() => setReqType(buttonText)}
    >
        {buttonText}
    </button>
  )
}

export default Button