import Api from '../routing/axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const ViewAllUser = () => {

  const [user, setUser] = useState([])

  async function getApi() {
    try {
      const { data } = await Api.get("/user");
      setUser(data || []);
    } catch (error) {
      console.log(error);
      setUser([]);
    }
  }

  useEffect(() => {
    try {
      getApi()

    } catch (error) {
      console.log(error)
    }
  }, [])

  //! delete functionality
  function handleDelete(id) {
    Api.delete(`/user/${id}`).
      then(() => getApi()).catch((error) => console.log(error))
  }


  return (
    <>
      <section className="w-full max-w-6xl mx-auto mt-10 bg-slate-800 rounded-lg shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-[700px] w-full text-sm text-left text-gray-300">
            <thead className="bg-slate-900 text-gray-200 uppercase text-xs">
              <tr>
                <th className="px-4 py-3 sm:px-2 sm:py-1">ID</th>
                <th className="px-4 py-3 sm:px-2 sm:py-1">FIRST NAME</th>
                <th className="px-4 py-3 sm:px-2 sm:py-1">LAST NAME</th>
                <th className="px-4 py-3 sm:px-2 sm:py-1">AGE</th>
                <th className="px-4 py-3 sm:px-2 sm:py-1">CITY</th>
                <th className="px-4 py-3 sm:px-2 sm:py-1 text-center">MORE OPTION</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-700">
              {user.length === 0 ? (
                <tr>
                  <td colSpan="6" className="text-center py-6 text-gray-400">
                    Loading...
                  </td>
                </tr>
              ) : (
                user.map((val) => (

                  <tr
                    key={val.id}
                    className="hover:bg-slate-700 transition duration-200"
                  >
                    <td className="px-4 py-3">{val.id}</td>
                    <td className="px-4 py-3">{val.fName}</td>
                    <td className="px-4 py-3">{val.lName}</td>
                    <td className="px-4 py-3">{val.age}</td>
                    <td className="px-4 py-3">{val.city}</td>
                    <td className="px-4 py-3 flex gap-2 justify-center">
                      <Link to={`/edit/${val.id}`}>
                        <button className="bg-green-700 hover:bg-green-900 px-3 py-1 rounded-md text-white text-xs">
                          EDIT
                        </button>
                      </Link>
                      <button onClick={() => handleDelete(val.id)}
                        className="bg-red-700 hover:bg-red-900 px-3 py-1 rounded-md text-white text-xs">
                        DELETE
                      </button>
                    </td>
                  </tr>)
                )
              )}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

export default ViewAllUser
