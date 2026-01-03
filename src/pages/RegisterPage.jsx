import { useNavigate } from "react-router-dom";

export const RegisterPage = ({formData, setFormData}) => {
  const navigate = useNavigate();

  // Save Changes by Name
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Submit data and return back to main page
  const handleSubmit = () => {
    const requiredFields = ["fullName", "phone", "email", "password", "option"];

    const hasRequireFields = requiredFields.every(
      (key) => formData[key]?.trim() !== ""
    );

    const isEmailFilled = formData.email?.includes("@");
    const isPasswordFilled = formData.password?.length >= 6;
    const isPhoneValid = /^\d{10,15}$/.test(formData.phone);

    const isFormFilled =
      hasRequireFields && isEmailFilled && isPasswordFilled && isPhoneValid;

    if (!isFormFilled) {
      alert("Data is not filled. Please fill all fields");
      return;
    }

    navigate("/");
  };

  return (
    <>
      <div className="p-4">
        <h1 className="font-bold text-2xl w-40">Create your PopX account</h1>

        <div className="relative mt-5">
          <label
            htmlFor="fullName"
            className="absolute left-2 -translate-y-1/2 text-purple/20 text-sm bg-[#F5F5F5] pl-1 pr-2 text-purple-500 font-semibold"
          >
            Full Name
            <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Enter full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full rounded-sm border border-[#CBCBCB] px-4 py-2 outline-none focus:border-[#E70B897B] focus:ring-0 text-sm"
          ></input>
        </div>

        <div className="relative mt-6">
          <label
            htmlFor="phone"
            className="absolute left-2 -translate-y-1/2 text-purple/20 text-sm bg-[#F5F5F5] pl-1 pr-2 text-purple-500 font-semibold"
          >
            Phone Number
            <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="Enter phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full rounded-sm border border-[#CBCBCB] px-4 py-2 outline-none focus:border-[#E70B897B] focus:ring-0 text-sm"
          ></input>
        </div>

        <div className="relative mt-6">
          <label
            htmlFor="email"
            className="absolute left-2 -translate-y-1/2 text-purple/20 text-sm bg-[#F5F5F5] pl-1 pr-2 text-purple-500 font-semibold"
          >
            Email Address
            <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email Address"
            className="w-full rounded-sm border border-[#CBCBCB] px-4 py-2 outline-none focus:border-[#E70B897B] focus:ring-0 text-sm"
          ></input>
        </div>

        <div className="relative mt-6 ">
          <label
            htmlFor="password"
            className="absolute left-2 -translate-y-1/2 text-purple/20 text-sm bg-[#F5F5F5] pl-1 pr-2 text-purple-500 font-semibold"
          >
            Password
            <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full rounded-sm border border-[#CBCBCB] px-4 py-2 pr-16 outline-none focus:border-[#E70B897B] focus:ring-0 text-sm"
          ></input>
        </div>

        <div className="relative mt-6">
          <label
            htmlFor="company"
            className="absolute left-2 -translate-y-1/2 text-purple/20 text-sm bg-[#F5F5F5] pl-1 pr-2 text-purple-500 font-semibold"
          >
            Company Name
          </label>
          <input
            type="text"
            id="company"
            name="company"
            placeholder="Enter Company Name"
            value={formData.company}
            onChange={handleChange}
            className="w-full rounded-sm border border-[#CBCBCB] px-4 py-2 outline-none focus:border-[#E70B897B] focus:ring-0 text-sm"
          ></input>
        </div>

        <div className="mt-5">
          <p className="text-sm">
            Are you an Agency?<span className="text-red-500">*</span>
          </p>
          <div className="flex gap-6">
            {["Yes", "No"].map((val) => {
              const isChecked = formData.option === val;
              return (
                <label
                  key={val}
                  className="flex items-center gap-x-4 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="option"
                    value={val}
                    checked={isChecked}
                    onChange={handleChange}
                    className={
                      isChecked ? "accent-[#7431FE]" : "accent-gray-400"
                    }
                  />
                  {val}
                </label>
              );
            })}
          </div>
        </div>

        <button
          onClick={handleSubmit}
          className="w-full mt-20 bg-[#7431FE] p-2 rounded-sm text-white font-semibold cursor-pointer"
        >
          Create Account
        </button>
      </div>
    </>
  );
}