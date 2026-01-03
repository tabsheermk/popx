import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const LoginPage = ({formData}) => {
  const [loginformData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  // Save Changes by Name
  const handleChange = (e) => {
    setLoginFormData({
      ...loginformData,
      [e.target.name]: e.target.value,
    });
  };

  // Validate and allow User to go to Profile page
  const handleSubmit = () => {
    if (!loginformData.email || !loginformData.password) {
      alert("Please fill all the data.");
      return;
    }

    if (
      !(loginformData.email === formData.email) ||
      !(loginformData.password === formData.password)
    ) {
      alert("The data does not match the given credentials. Please try again.");
      return;
    }

    navigate("/dashboard");
  };

  const isDisabled = !loginformData.email || !loginformData.password;

  return (
    <>
      <div className="p-4">
        <h1 className="font-bold text-2xl w-50 mb-2">Signin to your PopX account</h1>
        <p className="w-60 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>

        <div className="relative">
          <label
            htmlFor="email"
            className="absolute left-2 -translate-y-1/2 text-purple/20 text-sm bg-[#F5F5F5] pl-1 pr-2 text-purple-500 font-semibold"
          >
            Email Address
          </label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Enter email Address"
            value={loginformData.email}
            onChange={handleChange}
            className="w-full rounded-sm border border-[#CBCBCB] px-4 py-2 outline-none focus:border-[#E70B897B] focus:ring-0 text-sm"
          ></input>
        </div>

        <div className="relative mt-6 ">
          <label
            htmlFor="password"
            className="absolute left-2 -translate-y-1/2 text-purple/20 text-sm bg-[#F5F5F5] pl-1 pr-2 text-purple-500 font-semibold"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter Password"
            value={loginformData.password}
            onChange={handleChange}
            className="w-full rounded-sm border border-[#CBCBCB] px-4 py-2 outline-none focus:border-[#E70B897B] focus:ring-0 text-sm"
          ></input>
        </div>

        <button
          onClick={handleSubmit}
          className={`w-full mt-5 p-2 rounded-sm text-white font-semibold transition
          ${
            isDisabled
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-[#7431FE] cursor-pointer"
          }`}
          disabled={isDisabled}
        >
          Login
        </button>
      </div>
    </>
  );
};