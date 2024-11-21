import { updateProfile } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const UpdateProfile = () => {
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const auth = getAuth(); 
  const navigate = useNavigate(); 

  const handleUpdateProfile = (e) => {
    e.preventDefault();

    if (!name || !photo) {
      toast.error("Please fill out all fields!", {
        position: "top-right",
        autoClose: 3000,
       
      });
      return;
    }

    const profile = {
      displayName: name,
      photoURL: photo,
    };

    updateProfile(auth.currentUser, profile)
      .then(() => {
        toast.success("Profile updated successfully!", {
          position: "top-right",
          autoClose: 3000,
         
        });
        // console.log("User profile updated successfully!");

        // Redirect to profile page
        navigate("/profile");
      })
      .catch((error) => {
        console.error("User profile update error:", error.message);
        toast.error("Failed to update profile: " + error.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      });
  };

  return (
    <div>
      <h1 className="text-center text-4xl font-bold mt-10 text-[#23085a]">
        Update Your Profile
      </h1>

      <div className="card bg-base-100 w-full max-w-sm mx-auto shadow-2xl mt-10">
        <form onSubmit={handleUpdateProfile} className="card-body">
          {/* Name Input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="input input-bordered"
              required
            />
          </div>

          {/* Photo URL Input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              placeholder="Enter your photo URL"
              className="input input-bordered"
              required
            />
          </div>

          {/* Update Button */}
          <div className="form-control mt-6">
            <button
              type="submit"
              className="btn btn-primary bg-[#23085a] text-white"
            >
              Update Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
