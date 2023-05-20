import React, { useEffect, useState } from 'react'
import AboutUs from './components/AboutUs/AboutUs.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import store from './redux/store'
import ProtectedRoute from './routes/ProtectedRoute'
import Home from './page/Home/Home'
import Login from './container/Login/Login'
import Report from './container/Report/Report'
import Chat from './container/Message/Chat'
import ShoppingCart from './container/ShoppingCart/ShoppingCart'
import OrderHistory from './container/OrderHistory/OrderHistory'
import Profile from './components/Profile/Profile'
import ForgotPassword from './container/ForgotPassword/ForgotPassword'
import Contact from './components/Contact/Contact'
import Bill from './container/Bill/Bill'
import CreateBlog from './container/Blog/CreateBlog'
import Blogs from './container/Blog/Blogs'
import Post from './container/Blog/Blog'
import Error from './container/Error/Error404'
import Error500 from './container/Error/Error500'
import { Provider } from 'react-redux'
import { loadUser } from './redux/actions'
import Loading from './components/Loading'
import { Toaster } from 'react-hot-toast'
import ResetPassword from './page/ResetPassword'
import UtilsPage from './container/UtisPage'
import BlogByCategoriesId from './container/BlogByCategoriesId'
import UtilByCategorieId from './container/UtilByCategorieId'
import UtilDetailPage from './container/UtilDetailPage'

const App = () => {
  const [hasWindow, setHasWindow] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHasWindow(true)
    }
  }, [])

  useEffect(() => {
    // @ts-ignore
    store.dispatch(loadUser())
  }, [])

  return (
    <>
      {
        !hasWindow ? <Loading /> : (
          <Provider store={store}>
            <Toaster
              position={'top-center'}
              toastOptions={{
                duration: 1000,
              }}
            />
            <BrowserRouter>
              <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/' element={<ProtectedRoute><Home /></ProtectedRoute>} />
                <Route path='/report' element={<ProtectedRoute><Report /></ProtectedRoute>} />
                <Route path='/chat' element={<ProtectedRoute><Chat /></ProtectedRoute>} />
                <Route path='/rent' element={<ProtectedRoute><UtilsPage /></ProtectedRoute>} />
                <Route path='/cart' element={<ProtectedRoute><ShoppingCart /></ProtectedRoute>} />
                <Route path='/aboutus' element={<ProtectedRoute><AboutUs /></ProtectedRoute>} />
                <Route path='/orderhistory' element={<ProtectedRoute><OrderHistory /></ProtectedRoute>} />
                <Route path='/profile' element={<ProtectedRoute><Profile /></ProtectedRoute>} />
                <Route path='/reset-password/:token' element={<ResetPassword />} />
                <Route path='/fgpw' element={<ForgotPassword />} />
                <Route path='/contact' element={<ProtectedRoute><Contact /></ProtectedRoute>} />
                <Route path='/bill' element={<ProtectedRoute><Bill /></ProtectedRoute>} />
                <Route path='/createblog' element={<ProtectedRoute><CreateBlog /></ProtectedRoute>} />
                <Route path='/blog/categories/:id' element={<ProtectedRoute><BlogByCategoriesId /></ProtectedRoute>} />
                <Route path='/blog' element={<ProtectedRoute><Blogs /></ProtectedRoute>} />
                <Route path='/utils/categories/:id' element={<ProtectedRoute><UtilByCategorieId /></ProtectedRoute>} />
                <Route path='/blog/:id' element={<ProtectedRoute><Post /></ProtectedRoute>} />
                <Route path='/util/:id' element={<ProtectedRoute><UtilDetailPage /></ProtectedRoute>} />
                <Route path='/error500' element={<Error500 />} />
                <Route path='*' element={<Error />} />
              </Routes>
            </BrowserRouter>
          </Provider>
        )
      }
    </>
  )
}

export default App