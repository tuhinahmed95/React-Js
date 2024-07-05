// import React from 'react';

import { NavLink } from "react-router-dom";

const Register = () => {
    return (
        <div className="hold-transition register-page">
  <div className="register-box">
    <div className="card">
      <div className="card-body register-card-body">
        <p className="login-box-msg">Register a new membership</p>
        <form action="../../index.html" method="post">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Full name"
            />
            <div className="input-group-append">
              <div className="input-group-text">
                <span className="fas fa-user" />
              </div>
            </div>
          </div>
          <div className="input-group mb-3">
            <input type="email" className="form-control" placeholder="Email" />
            <div className="input-group-append">
              <div className="input-group-text">
                <span className="fas fa-envelope" />
              </div>
            </div>
          </div>
          <div className="input-group mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
            />
            <div className="input-group-append">
              <div className="input-group-text">
                <span className="fas fa-lock" />
              </div>
            </div>
          </div>
          <div className="input-group mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Retype password"
            />
            <div className="input-group-append">
              <div className="input-group-text">
                <span className="fas fa-lock" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-8">
              <div className="icheck-primary">
                <input
                  type="checkbox"
                  id="agreeTerms"
                  name="terms"
                  defaultValue="agree"
                />
                <label htmlFor="agreeTerms">
                  I agree to the <a href="#">terms</a>
                </label>
              </div>
            </div>
            {/* /.col */}
            <div className="col-4">
              <button type="submit" className="btn btn-primary btn-block">
                <NavLink to ="/Login" className="text-center">
                   Register
                </NavLink>
              </button>
            </div>
            {/* /.col */}
          </div>
        </form>
        <div className="social-auth-links text-center">
          <p>- OR -</p>
          <a href="#" className="btn btn-block btn-primary">
            <i className="fab fa-facebook mr-2" />
            Sign up using Facebook
          </a>
          <a href="#" className="btn btn-block btn-danger">
            <i className="fab fa-google-plus mr-2" />
            Sign up using Google+
          </a>
        </div>
        <NavLink to ="/Login" className="text-center">
          I already have a membership
        </NavLink>
      </div>
      {/* /.form-box */}
    </div>
    {/* /.card */}
  </div>
  {/* /.register-box */}
</div>

    );
};

export default Register;