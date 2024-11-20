import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { updateProfile } from 'firebase/auth';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from '../AuthProvider';
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

const Register = () => {
  const { createUser, updateUserProfile,signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State for password visibility

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photo = e.target.photo.value;

    // Validate Password
    if (!/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password)) {
      setPasswordError(
        "Password must have at least 6 characters, include an uppercase and a lowercase letter."
      );
      return;
    }

    setPasswordError(""); // Clear previous error

    // Create User
    createUser(email, password)
      .then((result) => {
        // Update profile
        updateUserProfile({ displayName: name, photoURL: photo }).then(() => {
          toast.success("Registration successful! Welcome!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
          e.target.reset();
          navigate('/');
        });
      })
      .catch((error) => {
        toast.error("Registration failed: " + error.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      });
  };
  // / for google signin 
  const handleGoogleSignIn=()=>{
      signInWithGoogle()
      .then(result=>{
          console.log(result.user);
          navigate('/')
      })
      .catch((error) => {
          console.error("ERROR:", error.message);
         
      });
  }
  

  

  return (
    <div className="items-center min-h-screen flex justify-center">
      <ToastContainer />
      <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
        <h2 className="text-2xl text-center font-bold">Register Your Account</h2>
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

          {/* Photo URL */}
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
            <div className="relative">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="input input-bordered w-full"
                required
              />
              <span
                className="absolute top-1/2 transform -translate-y-1/2 right-3 cursor-pointer text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            {passwordError && (
              <p className="text-red-500 text-sm mt-2">{passwordError}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="form-control mt-6">
            <button className="btn btn-primary rounded-none bg-[#23085a]">
              Register
            </button>
          </div>
        </form>
        <p className="text-center font-semibold">
          Already Have An Account?{" "}
          <Link className="text-red-500 underline" to="/login">
            Login
          </Link>
        </p>
        <p className='text-center'>Login with <button onClick={handleGoogleSignIn} className='underline text-green-600 '>Google</button></p>
      </div>
    </div>
  );
};

export default Register;
