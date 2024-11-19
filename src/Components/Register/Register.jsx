import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { updateProfile } from 'firebase/auth';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';



const Register = () => {
  const {createUser, updateUserProfile}=useContext(AuthContext)
const navigate=useNavigate()
const Navigate =useNavigate()

const handleRegister=e=>{
  e.preventDefault()
  const name=e.target.name.value
  const email=e.target.email.value
  const password=e.target.password.value
  console.log(name,email,password);
// creat user 
createUser(email,password)
.then(result=>{
  console.log(result.user);
  e.target.reset()
  navigate('/')

  updateUserProfile({displayName:name,photoURL:photo})
})
.then(()=>{
  navigate('/')
})

.catch(error=>{
  console.log("ERROR",error.message);
})

}

// profile update 


  return (
    <div className="items-center min-h-screen flex justify-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
        <h2 className="text-2xl text-center font-semibold">Register Your Account</h2>
        <form onSubmit={handleRegister} className="card-body">
          {/* Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              className="input input-bordered"
              required
            />
          </div>

          {/* Photo */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              name="photo"
              type="text"
              placeholder="Photo URL"
              className="input input-bordered"
              required
            />
          </div>

          {/* Email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="input input-bordered"
              required
            />
          </div>

          {/* Password */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>

          {/* Submit Button */}
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none bg-[#2b3440]">
              Register
            </button>
          </div>
        </form>
        <p className="text-center font-semibold">
          Already Have An Account?{" "}
          <Link className="text-red-500" to="/auth/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
