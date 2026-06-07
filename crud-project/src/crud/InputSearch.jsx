import React from 'react'

const InputSearch = ({seachInput,handleChange}) => {

  return (
    <>
    <div className='w-full flex justify-center rounded-lg'>
        <input type="text"
        placeholder='Search based on fname' 
        value={seachInput}
        onInput={handleChange}
        className='w-[800px]  bg-slate-800 py-2 px-2 border border-slate-500 rounded-lg text-white focus:outline-none'/>
    </div>
    </>
    

  )
}

export default InputSearch
