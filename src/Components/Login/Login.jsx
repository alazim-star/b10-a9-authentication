import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';


const Login = () => {
    const location=useLocation()
    console.log(location);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const { signInUser } = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        setError(""); // Clear previous error

        signInUser(email, password)
            .then((result) => {
                console.log(result.user);
                e.target.reset(); // Reset form fields
                navigate('/'); // Navigate to home
                navigate(location?.state?location.state:"/")
            })
            .catch((error) => {
                console.error("ERROR:", error.message);
                setError(error.message); // Set error message
            });
    };

    return (
        <div className="flex items-center min-h-screen justify-center">
            <div className="card bg-base-100 w-full max-w-lg rounded-md p-10 shadow-md">
                <h2 className="text-2xl text-center font-semibold mb-5">
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
                        {
                            error.login &&  <label className='label text-red-500'>{error.login}</label>(

                            )
                        }



                        <label className="label">
                            <Link to="/auth/forgot-password" className="label-text-alt link link-hover">
                                Forgot password?
                            </Link>
                        </label>
                    </div>

                    {/* Display Error */}
                    {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

                    {/* Submit Button */}
                    <div className="form-control mt-6">
                   
                    <button  className="btn btn-neutral rounded-md bg-[#2b3440] text-white">
                            Login
                        </button>
                    
             
                    </div>
                </form>

                {/* Register Redirect */}
                <p className="text-center font-semibold mt-3">
                    Don’t Have An Account?{" "}
                    <Link className="text-red-500" to="/register">
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
