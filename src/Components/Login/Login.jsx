import React, { useContext, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const Login = () => {
    const location = useLocation();
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const { signInUser, signInWithGoogle } = useContext(AuthContext);
    const emailRef = useRef();
    const auth = getAuth();

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        setError(""); // Clear previous error

        signInUser(email, password)
            .then((result) => {
                console.log(result.user);
                toast.success("Login successful!", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: true,
                  
                });
                e.target.reset(); // Reset form fields
                navigate(location?.state || "/"); // Navigate to intended or home
            })
            .catch((error) => {
                console.error("ERROR:", error.message);
                setError(error.message); // Set error message
                toast.error("Login failed: " + error.message, {
                    position: "top-right",
                    autoClose: 3000,

                });
            });
    };
// forgot password 
    const handleForgetPassword = () => {
        const email = emailRef.current.value;
        if (!email) {
            toast.warn("Please provide a valid email address.", {
                position: "top-right",
                autoClose: 3000,
            });
        } else {
            console.log(email);
            sendPasswordResetEmail(auth, email)
                .then(() => {
                    toast.success("Password reset email sent! Please check your inbox.", {
                        position: "top-right",
                        autoClose: 3000,
                      
                    });
                })
                .catch((error) => {
                    console.error("ERROR:", error.message);
                    toast.error("Failed to send password reset email: " + error.message, {
                        position: "top-right",
                        autoClose: 3000,
                    });
                });
        }
    };

// for google signin 
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
        <div className="flex items-center min-h-screen justify-center">
            <ToastContainer />
            <div className="card bg-base-100 w-full max-w-lg rounded-md p-10 shadow-md">
                <h2 className="text-2xl text-center font-bold mb-5">
                    Login to Your Account
                </h2>
                <form onSubmit={handleLogin} className="card-body">
                    {/* Email Field */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            name="email"
                            ref={emailRef}
                            type="email"
                            placeholder="Enter your email"
                            className="input input-bordered"
                            required
                        />
                    </div>

                    {/* Password Field */}
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
                        <label onClick={handleForgetPassword} className="label">
                            <span className="label-text-alt link link-hover">
                                Forgot password?
                            </span>
                        </label>
                    </div>

                    {/* Display Error */}
                    {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

                    {/* Submit Button */}
                    <div className="form-control mt-6">
                        <button className="btn btn-primary rounded-md bg-[#23085a] text-white">
                            Login
                        </button>
                    </div>
                </form>

                {/* Register Redirect */}
                <p className="text-center font-semibold mt-3">
                    Don’t Have An Account?{" "}
                    <Link className="text-red-500 underline" to="/register">
                        Register
                    </Link>
                </p>
                <p className='text-center'>Login with <button onClick={handleGoogleSignIn} className='underline text-green-600 '>Google</button></p>
            </div>
        </div>
    );
};

export default Login;
