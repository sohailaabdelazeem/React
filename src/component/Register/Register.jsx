import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [apiError, setApiError] = useState(null);
  let navigate = useNavigate();
  const initialValues = {
    userName: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  const validationSchema = Yup.object().shape({
    userName: Yup.string().min(3, 'Min character three').max(15, 'Max character 15').required('UserName is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(4, 'Password must be at least 4 characters').required('Password is required'),
    confirePassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Password and Confirm Password should match')
      .required('Confirm password is required')
  });

  async function register() {
    try {
      setApiError(null);
      let { data } = await axios.post(`http://localhost:3000/auth/signUP`);  
      console.log(data);
      if (data.message == 'created') {
        navigate('/login');
      }
    } catch (error) {
      setApiError(error.response?.data?.message || error.message || 'An error occurred');
    }
  }
 
  

  let registerForm = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: register
  });

  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <h2 className="my-5">Sign Up</h2>
        {apiError ? <div className="alert alert-danger" role="alert">{apiError}</div> : ''}

        <form onSubmit={registerForm.handleSubmit}>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="userName"
              placeholder="UserName"
              name="userName"
              value={registerForm.values.userName}
              onChange={registerForm.handleChange}
              onBlur={registerForm.handleBlur}
            />
            <label htmlFor="userName">UserName</label>
            {registerForm.errors.userName && registerForm.touched.userName ? (
              <div className="alert alert-danger mt-3" role="alert">
                {registerForm.errors.userName}
              </div>
            ) : ''}
          </div>

          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Email"
              name="email"
              value={registerForm.values.email}
              onChange={registerForm.handleChange}
              onBlur={registerForm.handleBlur}
            />
            <label htmlFor="email">Email Address</label>
            {registerForm.errors.email && registerForm.touched.email ? (
              <div className="alert alert-danger mt-3" role="alert">
                {registerForm.errors.email}
              </div>
            ) : ''}
          </div>

          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              name="password"
              value={registerForm.values.password}
              onChange={registerForm.handleChange}
              onBlur={registerForm.handleBlur}
            />
            <label htmlFor="password">Password</label>
            {registerForm.errors.password && registerForm.touched.password ? (
              <div className="alert alert-danger mt-3" role="alert">
                {registerForm.errors.password}
              </div>
            ) : ''}
          </div>

          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              placeholder="Confirm Password"
              name="confirePassword"
              value={registerForm.values.confirePassword}
              onChange={registerForm.handleChange}
              onBlur={registerForm.handleBlur}
            />
            <label htmlFor="confirmPassword">Confirm Password</label>
            {registerForm.errors.confirmPassword && registerForm.touched.confirmPassword ? (
              <div className="alert alert-danger mt-3" role="alert">
                {registerForm.errors.confirmPassword}
              </div>
            ) : ''}
          </div>

          <button className="btn btn-outline-primary" type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}


