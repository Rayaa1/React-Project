import { Link } from 'react-router-dom';
import "./signIn.css"
import useForm from "../../hooks/useForm";

import { useContext, useState } from 'react';
import AuthContext from '../../contexts/authContext.jsx';


const LoginFormKeys = {
  Email: 'email',
  Password: 'password',
};

export default function SignIn() {
  const { loginSubmitHandler } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const { values, onChange, onSubmit } =useForm(async () => {
    if(!values.email){
      setError('Email is required.');
      return;
    }
    if(!values.password){
      setError('Password is required.');
      return;
    }
    if (values.password.length < 5) {
      setError('Password must be at least 5 characters long.');
      return;
    }

    try {
    
      await loginSubmitHandler(values);
      
      setError(null);
    } catch (error) {
      
      setError(error.message || 'An error occurred during login.');
    }
  }, {
    [LoginFormKeys.Email]: '',
    [LoginFormKeys.Password]: '',
  });
  


  return (
    <section id="sign-in" className="sign-in-form section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto col-12">
            <h1 className="hero-title text-center mb-5">Sign In</h1>
            <div className="row">
              <div className="col-lg-8 col-11 mx-auto">
                <form role="form" method='POST' onSubmit={onSubmit}>
                  <div className="form-floating mb-4 p-0">
                    <input
                      type="email"
                      id="email"
                      name={LoginFormKeys.Email}
                      placeholder='Email'
                      onChange={onChange}
                      value={values[LoginFormKeys.Email]}
                     
                    />
                    
                    
                  </div>
                  <div className="form-floating p-0">
                    <input
                      type="password"
                      id="password"
                      placeholder='Password'
                      name={LoginFormKeys.Password}
                      onChange={onChange}
                      value={values[LoginFormKeys.Password]}
                      
                    />

                  </div>
                  {error && <p className="text-danger">{error}</p>}
                  <button type="submit" className="btn custom-btn form-control mt-4 mb-3" >
                    Sign in
                  </button>
                  
                  <p className="text-center">
                    Don’t have an account? <Link to="/signUp">Sign Up</Link>
                  </p>
                </form>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}