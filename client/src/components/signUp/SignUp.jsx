import { Link } from 'react-router-dom';
import AuthContext from "../../contexts/authContext";
import useForm from "../../hooks/useForm";
import { useContext, useState } from 'react';


const RegisterFormKeys = {
  Email: 'email',
  Password: 'password',
  ConfirmPassword: 'confirm-password',
  Name: 'name',
};
const SignUp = ()=>{
  const { registerSubmitHandler } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const { values, onChange, onSubmit } = useForm(async () => {
    if(!values[RegisterFormKeys.Email] || !values[RegisterFormKeys.Password]||!values[RegisterFormKeys.ConfirmPassword]||!values[RegisterFormKeys.Name]){
      setError('All fields are required.');
      return;
    }
    if (values.password.length < 5) {
      setError('Password must be at least 5 characters long.');
      return;
    }else if(values[RegisterFormKeys.Password] !== values[RegisterFormKeys.ConfirmPassword]){
      setError('Password don\'t match.');
      return;
    }

    try {
    
      await registerSubmitHandler(values);
      
      setError(null);
    } catch (error) {
      
      setError(error.message || 'An error occurred during registration.');
    }
  }, {
    [RegisterFormKeys.Email]: '',
    [RegisterFormKeys.Name]: '',
    [RegisterFormKeys.Password]: '',
    [RegisterFormKeys.ConfirmPassword]: '',
  });
    return( <section className="sign-up-form section-padding">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 mx-auto col-12">
          <h1 className="hero-title text-center mb-5">Sign Up</h1>

          <div className="row">
            <div className="col-lg-8 col-11 mx-auto">
              <form role="form" onSubmit={onSubmit}>
                <div className="form-floating">
                <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder='Email'
                        onChange={onChange}
                        values={values[RegisterFormKeys.Email]}
                    />
                  
                </div>

                <div className="form-floating my-4">
                <input
                        type="name"
                        id="name"
                        name="name"
                        placeholder='Name'
                        onChange={onChange}
                        values={values[RegisterFormKeys.Name]}
                    />
                  
                </div>
                <div className="form-floating my-4">
                <input
                        type="password"
                        name="password"
                        id="register-password"
                        placeholder='Password'
                        onChange={onChange}
                        values={values[RegisterFormKeys.Password]}
                    />
                  
                  
                </div>
                <div className="form-floating">
                <input
                        type="password"
                        name="confirm-password"
                        id="confirm-password"
                        placeholder='Confirm Password'
                        onChange={onChange}
                        values={values[RegisterFormKeys.ConfirmPassword]}
                    />
                  
                </div>
                {error && <p className="text-danger">{error}</p>}
                <button type="submit" className="btn custom-btn form-control mt-4 mb-3">
                  Create account
                </button>
                
                 <p className="text-center">Already have an account? Please <Link to="/signIn">Sign In</Link></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>)
}
export default SignUp