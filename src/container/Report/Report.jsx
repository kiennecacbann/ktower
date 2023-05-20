import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer.jsx'
import Input from '../../components/Input'
import { useDispatch, useSelector } from 'react-redux'
import { getReportTypes } from '../../redux/actions/report-type.action'
import toast from 'react-hot-toast'
import {
  CLEAR_CREATE_REPORT,
  CLEAR_GET_ALL_REPORT_TYPE,
  CLEAR_GET_ROOM_ME_TYPE,
  RESET_CREATE_REPORT,
} from '../../constants'
import { useNavigate } from 'react-router-dom'
import Loading from '../../components/Loading'
import { getRoomMe } from '../../redux/actions/room.action'
import { createReport } from '../../redux/actions/report.action'

const Report = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [level, setLevel] = useState('')
  const [emailConnect, setEmailConnect] = useState('')
  const [phoneConnect, setPhoneConnect] = useState('')
  const [roomId, setRoomId] = useState('')
  const [type, setType] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { loading, error, report_types } = useSelector(state => state.getReportTypesReducer)
  const { loading: loadingGetRoomMe, error: errorGetRoomMe, roomMe } = useSelector(state => state.getRoomMeReducer)
  const { error: errorCreateReport, success } = useSelector(state => state.createReportReducer)

  const handleSendReport = (e) => {
    e.preventDefault()
    const id = toast.loading('Loading...')
    const formData = new FormData()
    formData.set('title', title)
    formData.set('description', description)
    formData.set('emailConnect', emailConnect)
    formData.set('phoneConnect', phoneConnect)
    formData.set('roomId', roomId)
    formData.set('type', type)

    dispatch(createReport(formData))
    toast.remove(id)
  }

  useEffect(() => {
    if (error) {
      toast.error('load data report type error')
      dispatch({ type: CLEAR_GET_ALL_REPORT_TYPE })
      navigate('/')
    }
    if (errorGetRoomMe) {
      toast.error('load data report type error')
      dispatch({ type: CLEAR_GET_ROOM_ME_TYPE })
      navigate('/')
    }
    if (errorCreateReport) {
      toast.error('errpr create report')
      dispatch({ type: CLEAR_CREATE_REPORT })
    }
  }, [error, errorGetRoomMe, errorCreateReport])

  useEffect(() => {
    if (success) {
      toast.success('sent report successfully!')
      dispatch({ type: RESET_CREATE_REPORT })
      navigate('/')
    }
  }, [success])


  useEffect(() => {
    dispatch(getReportTypes())
    dispatch(getRoomMe())
  }, [])
  return (
    <div className=''>
      <Header />
      <div className='bg-white flex h-screen'>
        <div className='text-white items-center flex-col flex font-bold w-full pt-2'>
          <div className='grow-0 shrink-0 basis-auto w-full xl:w-5/12 px-3 lg:px-6 mb-12 xl:mb-0'>
            <form onSubmit={handleSendReport}>
              <Input
                name={'title'}
                label={'Title'}
                value={title}
                onChange={e => setTitle(e.target.value)}
              />
              <Input
                name={'description'}
                label={'Description'}
                value={description}
                onChange={e => setDescription(e.target.value)}
              />
              <Input
                name={'emailConnect'}
                label={'Email Connect'}
                value={emailConnect}
                type={'email'}
                onChange={e => setEmailConnect(e.target.value)}
              />
              <Input
                name={'phoneConnect'}
                label={'Phone Connect'}
                value={phoneConnect}
                type={'number'}
                onChange={e => setPhoneConnect(e.target.value)}
              />
              {loadingGetRoomMe ? <Loading /> : (
                <Input
                  name={'roomId'}
                  label={'roomId'}
                  value={roomId}
                  as={'select'}
                  onChange={e => setRoomId(e.target.value)}
                  dataSelect={roomMe ? roomMe.map(item => ({ _id: item._id, name: item.title })) : []}
                />
              )}
              {loading ? <Loading /> : (
                <Input
                  name={'type'}
                  label={'Types Report'}
                  value={type}
                  as={'select'}
                  onChange={e => setType(e.target.value)}
                  dataSelect={report_types ? report_types.map(item => ({ _id: item._id, name: item.title })) : []}
                />
              )}
              <Input
                name={'level'}
                label={'Level'}
                value={level}
                as={'select'}
                onChange={e => setLevel(e.target.value)}
                dataSelect={[
                  { _id: 1, name: 1 },
                  { _id: 2, name: 2 },
                  { _id: 3, name: 3 },
                  { _id: 4, name: 4 },
                  { _id: 5, name: 5 },
                ]}
              />
              <button
                type='submit'
                disabled={!title || !description || !roomId || !type || !level || !emailConnect || !phoneConnect}
                className='mt-4 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-700 disabled:text-white text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              >
                Submit
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