import {React, useState} from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function Login() {
  const [apiError, setApiError] = useState(null);
  let navigate = useNavigate();

  const initialValues = {
    email: '',
    password: '',
   };
  const validationSchema = Yup.object().shape({
     email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(4, 'Password must be at least 4 characters').required('Password is required'),
   
  });

  
  async function Login(values) {
    try {
      setApiError(null);
      let {data} = await axios.post(`http://localhost:3000/auth/login`, values);  
      console.log(data);
      if (data.message === 'created' || data.token) { // Ensure correct success response
        navigate('/home'); 
      }
    } catch (error) {
      setApiError(error.response?.data?.message || error.message || 'An error occurred');
    }
  }

    let loginForm = useFormik({
      initialValues: initialValues,
      validationSchema: validationSchema,
      onSubmit: Login
    });
  return (
    <div className="row">
    <div className="col-md-6 offset-md-3">
      <div className="my-5">Login</div>
      {apiError ? <div className="alert alert-danger" role="alert">{apiError}</div> : ''}

      <form onSubmit={loginForm.handleSubmit}>

        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Email"
            name="email"
            value={loginForm.values.email}
            onChange={loginForm.handleChange}
            onBlur={loginForm.handleBlur}
          />
          <label htmlFor="email">Email Address</label>
          {loginForm.errors.email && loginForm.touched.email ? (
            <div className="alert alert-danger" role="alert">
              {loginForm.errors.email}
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
            value={loginForm.values.password}
            onChange={loginForm.handleChange}
            onBlur={loginForm.handleBlur}
          />
          <label htmlFor="password">Password</label>
          {loginForm.errors.password && loginForm.touched.password ? (
            <div className="alert alert-danger" role="alert">
              {loginForm.errors.password}
            </div>
          ) : ''}
        </div>

  

        <button className="btn btn-outline-primary" type="submit">Login </button>
      </form>
    </div>
  </div>
  )
}
