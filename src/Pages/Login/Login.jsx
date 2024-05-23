import React from "react";
import Navbar from "../Share/Navbar";
import { Link } from "react-router-dom";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    console.log(form.get("email"));
    console.log(form.get("password"));
  };
  return (
    <div>
      <Navbar></Navbar>
      <h2>Plese Login</h2>
      <div className="hero min-h-screen bg-base-200">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p>
            Don't have an account?go to{" "}
            <Link to="/register">
              <button className="btn btn-primary">Register</button>
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
