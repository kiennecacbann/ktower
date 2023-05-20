import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import toast from "react-hot-toast";
import {clearErrors, loadUser, resetPassword} from "../redux/actions";
import images from "../constants/images";
import {UPDATE_PASSWORD_RESET} from "../constants";

const ResetPassword = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const params = useParams()

  const {token} = params
  const {error, isAuthenticated} = useSelector(
    (state) => state.user
  );
  const {error: errorUpdate, success} = useSelector(state => state.forgotPasswordReducer)

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleResetPassword = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      toast.error('Not matching password & confirmPassword')
      return;
    }

    const id = toast.loading('Submitting...')
    dispatch(resetPassword(token, {
      password,
      passwordConfirm: confirmPassword
    }))
    toast.remove(id);
  }

  useEffect(() => {
    if (error) {
      toast.error(error)
      dispatch(clearErrors())
    }
  }, [error]);

  useEffect(() => {
    if (errorUpdate) {
      toast.error(errorUpdate)
      dispatch(clearErrors())
    }
  }, [errorUpdate])

  useEffect(() => {
    if (isAuthenticated) {
      toast.success('Login successfully')
      navigate('/')
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (success) {
      dispatch(loadUser())
      toast.success('Reset password successfully')
      dispatch({type: UPDATE_PASSWORD_RESET})
    }
  }, [success]);

  return (
    <div className='grid gird-cols-1 sm:grid-cols-2 h-screen w-full'>
      <div className='hidden sm:block'>
        <img src={images.login_img2} alt="Login Image" className='w-full h-full object-cover'/>
      </div>
      <div className='bg-gray-800 flex flex-col justify-center'>
        <form onSubmit={handleResetPassword} className='max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg'>
          <h2 className='text-3xl text-white font-bold text-center'>Reset Password</h2>
          <div className='flex flex-col text-gray-400 py-2'>
            <label>Password</label>
            <input value={password} required onChange={(e) => setPassword(e.target.value)}
                   placeholder='Please enter your new password'
                   type="password"
                   className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'>
            </input>
          </div>
          <div className='flex flex-col text-gray-400 py-2'>
            <label>Confirm Password</label>
            <input value={confirmPassword} required onChange={(e) => setConfirmPassword(e.target.value)}
                   placeholder='Please enter confirm password'
                   type="password"
                   className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'>
            </input>
          </div>
          <div className='flex justify-between text-gray-400 py-2'>
            <p className=' flex items-center'>Are you remember?</p>
            <a className='underline cursor-pointer' href='/login'>login now</a>
          </div>
          <button type='submit' disabled={!password || !confirmPassword}
                  className='w-full my-5 py-2 disabled:opacity-50 disabled:bg-gray-700 disabled:text-teal-50 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>NEXT
          </button>
        </form>
      </div>
    </div>
  )
}

export default ResetPassword