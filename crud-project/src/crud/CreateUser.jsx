import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreateUser = () => {
  let [formData, setFormData] = useState({
    fName: "",
    lName: "",
    age: "",
    city: ""
  })
  let { fName, lName, city, age } = formData

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault()

    //! passing data to the server 
    try {
      let payload = formData
      axios.post("http://localhost:4000/user", payload)
      navigate('/viewall')
    } catch (error) {
      console.log(error)
    } finally {
      setFormData({
        fName: "",
        lName: "",
        age: "",
        city: ""
      })
    }
  }



  function handleChange(e) {
    let { name, value } = e.target
    setFormData({
      ...formData, [name]: value
    })
  }
  return (
    <>
      <form onSubmit={handleSubmit} className='h-fit w-[350px] bg-slate-800 text-gray-500 px-2.5 py-3 rounded-lg shadow-lg'>
        <h2 className='text-xl text-white text-center'>Create User</h2>
        <div className='mt-1 flex flex-col gap-3'>
          <section className='w-full'>
            <label htmlFor="fname" className='text-white'>First Name : </label>
            <div className='mt-1'>
              <input type="text" name="fName" value={fName} id="fname" placeholder='First Name' onChange={handleChange} required
                className='w-full border border-gray-500 bg-transparent py-2 px-1.5 text-sm outline-none rounded-md text-gray-500 placeholder:text-gray-500' />
            </div>
          </section>
          <section className='w-full'>
            <label htmlFor="lname" className='text-white'>Last Name : </label>
            <div className='mt-1'>
              <input type="text" name="lName" value={lName} id="lname" onChange={handleChange} placeholder='Last Name' required
                className='w-full border border-gray-500 bg-transparent py-2 px-1.5 text-sm outline-none rounded-md text-gray-500 placeholder:text-gray-500' />
            </div>
          </section>
          <section className='w-full'>
            <label htmlFor="age" className='text-white'>Age : </label>
            <div className='mt-1'>
              <input type="text" name="age" value={age} id="age" onChange={handleChange} placeholder='Age' required
                className='w-full border border-gray-500 bg-transparent py-2 px-1.5 text-sm outline-none rounded-md text-gray-500 placeholder:text-gray-500' />
            </div>
          </section>
          <section className='w-full'>
            <label htmlFor="city" className='text-white'>City : </label>
            <div className='mt-1'>
              <input type="text" name="city" value={city} id="city" onChange={handleChange} placeholder='City' required
                className='w-full border border-gray-500 bg-transparent py-2 px-1.5 text-sm outline-none rounded-md text-gray-500 placeholder:text-gray-500' />
            </div>
          </section>
          <section className='mt-3 w-full'>
            <button className='w-full py-1 text-white bg-blue-700 hover:bg-blue-900 rounded-md'>submit</button>
          </section>
        </div>
      </form>
    </>
  )
}

export default CreateUser