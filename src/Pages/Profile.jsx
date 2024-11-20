import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Components/AuthProvider';


const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      {/* Welcome Title */}
      <h1 className="text-4xl font-bold text-gray-800 mb-6">
        Welcome, {user?.displayName || "User"}!
      </h1>

      {/* Profile Card */}
      <div className="bg-purple-800  shadow-lg rounded-lg p-6 w-full max-w-md">
        {/* User Image */}
        <div className="flex justify-center mb-4">
          <img
            src={user?.photoURL || "https://via.placeholder.com/150"}
            alt="User Profile"
            className="w-24 h-24 rounded-full border border-gray-300"
          />
        </div>

        {/* Profile Information */}
        <div className="text-center">
          <h2 className="text-lg font-semibold text-white">
           Name: {user?.displayName || "Name not provided"}
          </h2>
          <p className="text-white">Email: {user?.email || "Email not provided"}</p>
        </div>

        {/* Update Button */}
        <div className="mt-6 text-center">
          <Link
            to="/updateProfile"
            className="btn btn-primary bg-[#23085a]  text-white rounded-md px-4 py-2">
            Update Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
