import { useState } from 'react';
import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'
import clientAxios from '../../server/connect.js';
const Profile = () => {
    const [username, setUserName] = useState('');
    const [fullname, setFullName] = useState('');
    const [houseNumber, setHouseNumber] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [data, setData] = useState([]);

    clientAxios.get('/dev/v1/users/me').then(res => res.json()).then((data) => setData(data))
    
    return (
        <div>
            <Header />
            <div className='border-black border-t-[0.1px] pl-14 py-14'>
                <h2 className='font-bold uppercase text-[20px] pb-10'>Your Information</h2>
                <div className='border-[0.2px] border-gray-500 w-96 p-7 space-y-3 rounded-lg'>
                    <div>
                        <span className='text-gray-500'>Username</span>
                        <p className='text-black'>Kienne
                            {/* {data.username} */}
                        </p>
                    </div>
                    <div>
                        <span className='text-gray-500'>Full Name</span>
                        <p className='text-black'>Nguyen Trung Kien
                            {/* {data.username} */}
                        
                        </p>
                    </div>
                    <div>
                        <span className='text-gray-500'>House Number
                            {/* {data.address} */}
                        </span>
                        <p className='text-black'>B.06.11</p>
                    </div>
                    <div>
                        <span className='text-gray-500'>Phone</span>
                        <p className='text-black'>0388314851
                            {/* {data.phone} */}
                        </p>
                    </div>
                    <div>
                        <span className='text-gray-500'>Email</span>
                        <p className='text-black'>nguyenkiencke@gmail.com
                            {/* {data.email} */}
                        </p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Profile