import React from 'react'
import { FaGreaterThan } from 'react-icons/fa'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer.jsx'
import { useState } from 'react'
const Report = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [level, setLevel] = useState('');
  const [emailConnect, setEmailConnect] = useState('');
  const [phoneConnect, setPhoneConnect] = useState('');
  const [roomId, setRoomId] = useState('');
  const [userId , setUserId] = useState('');
  const [type, setType] = useState('');

  const handleSelectChange = (event) => {
    setType(event.target.value);
  };

  const handleSendReport = () => {

  }
  return (  
    <div className=''>
      <Header />
      <div className='bg-white flex h-screen'>
        <div className='text-white items-center flex-col flex font-bold w-full pt-2'>
          <div class="grow-0 shrink-0 basis-auto w-full xl:w-5/12 px-3 lg:px-6 mb-12 xl:mb-0">
            <form>
              <div class="form-group mb-6">
                <input
                  type="text"
                  class="form-control block w-full px-3 first-letter:py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleInput7"
                  placeholder="Name" required
                />
              </div>
              <div class="form-group mb-6">
                <input
                  type="text"
                  class="form-control block w-full px-3 first-letter:py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleInput7"
                  placeholder="House ID" required value={roomId}
                  onChange={(e) => setRoomId(e.target.value)}
                />
              </div>
              <div class="form-group mb-6">
                <input
                  type="phone"
                  class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleInput8"
                  placeholder="Phone" required autoComplete='phone' value={phoneConnect}
                  onChange={(e) => setPhoneConnect(e.target.value)}

                />
              </div>
              <div class="form-group mb-6">
                <input
                  type="email"
                  class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleInput8"
                  placeholder="Email address" required autoComplete='email' value={emailConnect}
                  onChange={(e) => setEmailConnect  (e.target.value)} 

                />
              </div>
              <div class="form-group form-check text-center mb-6">
                <select
                value={type}
          onChange={handleSelectChange}
                 required className='w-full uppercase font-bold px-3 py-1.5 text-base text-gray-700 bg-white bg-clip-padding border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer border-2 outline-none '>Report
                  <option>Report</option>
                  <option>Cleaning</option>
                  <option>Parking</option>
                  <option>Internet</option>
                  <option>Neighbor</option>
                  <option>Electronic</option>
                  <option>Water</option>
                  <option>Pets</option>
                  <option>Security</option>
                </select>
              </div>
              <div class="form-group mb-6">
                <textarea
                  class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleFormControlTextarea13"
                  rows="3"
                  placeholder="Note" required value={description}
                  onChange={(e) => setDescription(e.target.value)}

                ></textarea>
              </div>
              <div class="form-group form-check text-center mb-6">
                <input
                  type="checkbox"
                  class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                  id="exampleCheck87" required

                />
                <label
                  class="form-check-label inline-block text-gray-800"
                  for="exampleCheck87"
                >
                  Send me a copy of this message
                </label>
              </div>
              <button
                type="submit" onClick={handleSendReport}
                class="w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                Send Report
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Report