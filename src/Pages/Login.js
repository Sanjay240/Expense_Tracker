import React, { useState } from 'react';
import image1 from '../Images/loginImage.png';
import { useGlobalContext } from '../Context/globalContext';
import { useNavigate } from "react-router-dom";

const Login = () => {
    

    const {logUser } = useGlobalContext();
    const navigate = useNavigate();
    const[inputState, setInputState] = useState({
        email: '',
        password: ''
    })

    const [loggedIn, setLoggedIn] = useState(false);
    const { email, password} = inputState;

    const handleInput = name => e => {
        setInputState({...inputState, [name]: e.target.value})
    }

    const handleSubmit = (event)=> {
        event.preventDefault();
        logUser(inputState).then(function(result){
            if(result.status === 'success'){
                localStorage.setItem('userName', result.data.name);
                localStorage.setItem('userType', result.data.type);
                localStorage.setItem('userEmail', result.data.userId);
                localStorage.setItem('userId', result.data.id);  

                console.log('logged in user navigate to home page');
                // navigate('/home');
                window.location.reload(true);
                console.log('navigated to home page');
            }
            else {
                alert(result.response.data.message);
                window.location.reload(true);
            }
        })
        setInputState({
            email: '',
            password: ''
        })
    };

  return (
    <div>
        <section className="vh-100 ">
            <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
            <div className="card text-black rounded" >
            <div className="card-body p-md-5">
                <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login</p>

                    <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>


                        <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                            <input type="email" id="form3Example3c" className="form-control" name='email' onChange={handleInput('email')} />
                            <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                        </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                            <input type="password" id="form3Example4c" className="form-control" name='password' onChange={handleInput('password')} />
                            <label className="form-label" htmlFor="form3Example4c">Password</label>
                        </div>
                        </div>

                        <div className="form-check d-flex justify-content-center mb-5">
                        <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                        <label className="form-check-label" htmlFor="form2Example3">
                            Remember me!
                        </label>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button type="submit" className="btn btn-primary btn-lg">Login</button>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                         <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="/Register"
                             className="link-danger">Register</a></p>
                        </div>

                    </form>

                </div>
                <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                    className="img-fluid" alt="Sample image" />

                </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
        </section>
    </div>
  )
};


 
export default Login;