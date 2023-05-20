import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'
import {useDispatch, useSelector} from "react-redux";
import Loading from "../Loading";
import toast from "react-hot-toast";
import {useEffect} from "react";
import {clearErrors} from "../../redux/actions";
import imageDefault from '../../assets/avatar-default.gif'

const Profile = () => {
  const dispatch = useDispatch()
  const {loading, user, error} = useSelector(state => state.user)
  useEffect(() => {
    if (error) {
      toast.error(error)
      dispatch({type: clearErrors()})
    }
  }, [error]);

  return (
    <>
      {loading ? <Loading/> : (
        <div>
          <Header/>
          <div className='border-black border-t-[0.1px] pl-14 py-14'>
            <h2 className='font-bold uppercase text-[20px] pb-10'>Your Information</h2>
            <div className='border-[0.2px] border-gray-500 w-96 p-7 space-y-3 rounded-lg'>
              <div className={"w-[300px] h-[300px] rounded"}>
                <img className={'rounded-full w-full h-full'} src={user?.avatar?.url || imageDefault} alt={"image" +
                  " user"}/>
              </div>
              <div>
                <span className='text-gray-500'>Username</span>
                <p className='text-black'>{user?.username || 'Kiên nè'}
                  {/* {data.username} */}
                </p>
              </div>
              <div>
                <span className='text-gray-500'>Full Name</span>
                <p className='text-black'>{user?.username || 'Kiên nè'}
                  {/* {data.username} */}

                </p>
              </div>
              <div>
                        <span className='text-gray-500'>House Number
                          {/* {data.address} */}
                        </span>
                <p className='text-black'>{user?.address || 'chưa có địa chỉ'}</p>
              </div>
              <div>
                <span className='text-gray-500'>Phone</span>
                <p className='text-black'>{user?.phone || 'chưa có số điện thoại'}
                  {/* {data.phone} */}
                </p>
              </div>
              <div>
                <span className='text-gray-500'>Email</span>
                <p className='text-black'>{user?.email || 'chưa có email'}
                  {/* {data.email} */}
                </p>
              </div>
            </div>
          </div>
          <Footer/>
        </div>
      )}
    </>
  )
}

export default Profile