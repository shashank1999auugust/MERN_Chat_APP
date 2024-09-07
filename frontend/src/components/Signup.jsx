import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="min-w-96 mx-auto">
      {/* //use glassmorphism tailwindwebsite to generate blur medium */}
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100 ">
        <h1 className="text-3xl font-bold text-center ">Signup</h1>
        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              className="w-full input input-bordered h-10"
              type="text"
              placeholder="Fullname"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              className="w-full input input-bordered h-10"
              type="text"
              placeholder="Username"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              className="w-full input input-bordered h-10"
              type="password"
              placeholder="password"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              className="w-full input input-bordered h-10"
              type="password"
              placeholder="password"
            />
          </div>
          <div className="flex items-center my-4">
            <div className="flex items-center">
              <p>Male</p>
              <input type="checkbox" defaultChecked className="checkbox mx-2" />
            </div>

            <div className="flex items-center">
              <p>Female</p>
              <input type="checkbox" defaultChecked className="checkbox mx-2" />
            </div>
          </div>
          
            <p className="text-center">Already have an account? <Link to="/login">Signin</Link> </p>
          
          <div>
            <buttton className="btn btn-block btn-sm mt-2 border-slate-700">
              Signup
            </buttton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
