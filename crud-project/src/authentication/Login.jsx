import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { BiSolidShow } from "react-icons/bi";
import { BiSolidHide } from "react-icons/bi";

const Login = () => {
  let [formData, setFormData] = useState({
    userEmail: "",
    userPassword: ""
  })
  let { userEmail, userPassword } = formData

  let [showPass, setShowPass] = useState(false)
  let navigate = useNavigate()

  async function handleSubmit(event) {
    event.preventDefault()
    let payLoad = formData
    try {
      let { data } = await axios.get("http://localhost:5000/register");
      let matchedValue = data.filter((val) => {
        return val.userEmail === userEmail && val.userPassword === userPassword
      })

      if (matchedValue.length > 0) {
        alert("successully logined!!")
        navigate("/viewall")
      }
      else {
        alert("invalid credentials!!")
        navigate("/login")
        setFormData({
          userEmail: "",
          userPassword: ""
        })
      }
    } catch (error) {
      console.log(error)
    }
  }

  function handleChange(event) {
    let { name, value } = event.target
    setFormData({
      ...formData, [name]: value
    })
  }
  return (
    <>
      <section className='h-full w-full'>
        <form onSubmit={handleSubmit} className='h-fit w-[350px] bg-slate-800 text-gray-500 px-3 py-4 rounded-lg shadow-lg'>
          <h1 className='text-xl text-white text-center'>Login Form</h1>
          <section className='mt-1 flex flex-col gap-3'>
            <div className='w-full'>
              <label htmlFor="email" className='text-white'>Email : </label>
              <div className='mt-1'>
                <input type="email" name="userEmail" id="email" required onChange={handleChange}
                  placeholder='Enter email'
                  value={userEmail}
                  className='w-full border border-gray-500 bg-transparent py-2 px-1.5 text-sm outline-none rounded-md text-gray-500 placeholder:text-gray-500'
                />
              </div>
            </div>
            <div>
              <label htmlFor="pass" className='text-white'>Password : </label>
              <div className='h-fit relative mt-1'>
                <input
                  type={showPass ? 'text' : 'password'} name="userPassword" id="pass" required onChange={handleChange}
                  value={userPassword}
                  placeholder='Enter password'
                  className='w-full border border-gray-500 bg-transparent py-2 px-1.5 text-sm outline-none rounded-md text-gray-500 placeholder:text-gray-500'
                />
                <span
                  onClick={() => setShowPass(!showPass)}
                  className='absolute top-[35%] right-2 cursor-pointer'>{showPass ? <BiSolidShow /> : <BiSolidHide />}</span>
              </div>
            </div>
            <div className='mt-3 w-full'>
              <button className='w-full py-1.5 text-center text-white text-sm bg-blue-700 hover:bg-blue-900 rounded-md'>Login now</button>
            </div>
          </section>
        </form>
      </section>
    </>
  )
}

export default Login