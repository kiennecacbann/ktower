import React, {useEffect, useState} from "react";
import images from "../../constants/images";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import toast from "react-hot-toast";
import {clearErrors, login} from "../../redux/actions";

function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {error, isAuthenticated} = useSelector(
    (state) => state.user
  );
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function submit(e) {
    e.preventDefault();
    const id = toast.loading('submit login...')
    dispatch(login(email, password))
    toast.remove(id)
  }

  useEffect(() => {
    if (error) {
      toast.error(error)
      dispatch(clearErrors())
    }
  }, [error]);

  useEffect(() => {
    if (isAuthenticated) {
      toast.success('Login successfully')
      navigate('/')
    }
  }, [isAuthenticated]);

  return (
    <>
      <div className="grid gird-cols-1 sm:grid-cols-2 h-screen w-full">
        <div className="hidden sm:block">
          {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
          <img
            src={images.login_img2}
            alt="Login Image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-gray-800 flex flex-col justify-center">
          <form
            className="max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg"
          >
            <h2 className="text-4xl text-white font-bold text-center">SIGN IN</h2>
            <div className="flex flex-col text-gray-400 py-2">
              <label>Your email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@email.com"
                type="email"
                className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                required
              ></input>
            </div>
            <div className="flex flex-col text-gray-400 py-2">
              <label>Password</label>
              <input
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
                type="password"
                className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                required
              ></input>
            </div>
            <div className="flex justify-between text-gray-400 py-2">
              <p className=" flex items-center">
                <input className="mr-2" type="checkbox"/>
                remember me
              </p>
              <Link to="/fgpw">
                <a className="underline cursor-pointer">forgot password</a>
              </Link>
            </div>
            <button
              type="submit"
              onClick={submit}
              disabled={!email || !password}
              className="w-full disabled:opacity-50 disabled:bg-gray-600 disabled:text-white my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg"
            >
              sign in
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
