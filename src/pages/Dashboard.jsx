import { useState } from "react";
import defaultProfile from "../assets/default_profile.jpg";
import { FaCamera } from "react-icons/fa";

export const Dashboard = ({formData}) => {
    
  const [profile, setProfile] = useState(null);

  const handleProfileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfile(URL.createObjectURL(file));
    }
  };

  return (
    <>
      <div className="p-4 bg-white font-semibold">
        <h2 className="">Account Settings</h2>
      </div>

      <div className="p-4 space-y-6">
        {/* Avatar + User Info */}
        <div className="flex items-center gap-4">
          {/* Avatar + Camera Button */}
          <div className="w-24 h-24 relative">
            <div className="w-24 h-24 rounded-full border overflow-hidden">
              <img
                src={profile || defaultProfile}
                alt="profile"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Camera Button + Input */}
            <button
              type="button"
              onClick={() => document.getElementById("profileUpload").click()}
              className="absolute bottom-0 right-0 bg-[#7431FE] p-2 rounded-full text-white"
            >
              <FaCamera size={14} />
            </button>
            <input
              type="file"
              accept="image/*"
              hidden
              id="profileUpload"
              onChange={handleProfileChange}
            />
          </div>

          {/* Name + Email displayed */}
          <div className="mb-10">
            <p className="font-semibold">
              {formData.fullName || "default name"}{" "}
            </p>
            <p className="">{formData.email || "default email"} </p>
          </div>
        </div>

        {/* Description */}
        <div className="w-full text-sm">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </>
  );
}