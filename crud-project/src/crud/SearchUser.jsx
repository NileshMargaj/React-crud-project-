import React, { useEffect, useState } from 'react'
import InputSearch from './InputSearch'
import axios from 'axios'

import DisplaySearch from './DisplaySearch'


const SearchUser = () => {
  const [seachInput, setSearchInpt] = useState('')
  const [allUser, setAllUser] = useState([])

  function handleChange(event) {
    setSearchInpt(event.target.value)
  }

  async function getApi() {
    const { data } = await axios.get('http://localhost:4000/user')
    setAllUser(data)
  }

  const filteredVal = allUser.filter((val) => {
    if (seachInput === '') return true
    if (!val?.fName) return false
    return val.fName.toLowerCase().includes(seachInput.toLowerCase())
  })

  useEffect(() => {
    try {
      getApi()
    } catch (error) {}
  }, [])

  return (
    <>
      <InputSearch seachInput={seachInput} handleChange={handleChange} />

      <section className="w-full max-w-6xl mx-auto mt-10 bg-slate-800 rounded-lg shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-[600px] w-full text-sm text-left text-gray-300">
            <thead className="bg-gray-700 text-white">
              <tr className="text-center">
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Age</th>
                <th className="px-4 py-2">City</th>
              </tr>
            </thead>

            <tbody>
              {filteredVal.map((val) => (
                <DisplaySearch key={val.id} {...val} />
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  )
}

export default SearchUser

