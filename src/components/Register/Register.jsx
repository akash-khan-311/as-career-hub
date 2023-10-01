import React, { useContext, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { AuthContext } from "../../CoontextApi/UserContext";
import toast, { Toaster } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

const Register = () => {
  const { createUserWithEmail, updateNmae, signInGoogle } =
    useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    if (name.length === 0) {
      toast.error("Enter Your Name First");
      return;
    } else if (email.length === 0) {
      toast.error("Enter Your Email");
      return;
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    ) {
      toast.error("Email Id Not Valid , Please Enter Your Valid Email");
      return;
    } else if (!/^(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,}$/.test(password)) {
      toast.error(
        "Password should be at least 6 characters and must be at least one special character"
      );
      return;
    }

    createUserWithEmail(email, password)
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
        updateNmae(name)
          .then()
          .catch((err) => console.log(err.message));
        toast.success("user created successfully");

        console.log(user);
      })
      .catch((error) => console.log(error.message));
  };
  const hanldeGoogleLogin = () => {
    signInGoogle().then((result) => {
      const user = result.user;
      navigate(from, { replace: true });
      toast.success(`Login Success ${user.email}`);
    });
  };
  const handleError = () => {
    toast.error("This Method Not Enabled yet");
  };
  return (
    <div className=" my-10 ">
      <div className=" mx-auto rounded-lg backdrop-blur-2xl w-full max-w-lg shadow-2xl bg-white/10 card-body">
        <form onSubmit={handleRegister} className="">
          <div className="">
            <div>
              <h2 className="text-3xl  lg:text-5xl">Register</h2>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input backdrop-blur-3xl bg-white/10 input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="input backdrop-blur-3xl bg-white/10 input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="relative form-control">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="password"
                  className="input backdrop-blur-3xl bg-white/10 input-bordered "
                />
                <div className="absolute right-3 bottom-3">
                  <a
                    onClick={() => setShowPassword(!showPassword)}
                    className="cursor-pointer"
                  >
                    {showPassword ? (
                      <AiOutlineEye className="text-xl" />
                    ) : (
                      <AiOutlineEyeInvisible className="text-xl" />
                    )}
                  </a>
                </div>
              </div>
              <label className="label">
                <button href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </button>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="custom-btn h-12">
                Login
              </button>
            </div>
          </div>
        </form>
        <div>
          <div className="relative">
            <div className="relative flex justify-center text-sm">
              <span className="px-2  text-gray-500 text-lg my-3">
                Or continue with
              </span>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-3">
            <div>
              <a
                onClick={handleError}
                className="w-full cursor-pointer flex  items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              >
                <img
                  className="h-5 w-5"
                  src="https://www.svgrepo.com/show/512120/facebook-176.svg"
                  alt="facebook"
                />
              </a>
            </div>
            <div>
              <a
                onClick={handleError}
                className="w-full cursor-pointer flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              >
                <img
                  className="h-5 w-5"
                  src="https://www.svgrepo.com/show/513008/twitter-154.svg"
                  alt="twitter"
                />
              </a>
            </div>
            <div>
              <a
                onClick={hanldeGoogleLogin}
                className="w-full cursor-pointer flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              >
                <img
                  className="h-5 w-6"
                  src="https://www.svgrepo.com/show/506498/google.svg"
                  alt="google"
                />
              </a>
            </div>
          </div>
          <Toaster position="top-center" reverseOrder={false} />
        </div>
      </div>
    </div>
  );
};

export default Register;
