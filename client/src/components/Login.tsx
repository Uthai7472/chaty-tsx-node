import React, { ChangeEvent, useEffect, useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {

    const [loginData, setLoginData] = useState({
        username: '',
        password: '',
    });

    const navigate = useNavigate();

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setLoginData((prevLoginData) => ({
            ...prevLoginData,
            [event.target.name]: event.target.value,
        }));

        console.log(loginData);
    };
    

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        console.log("Login Data : ", loginData);

        try {
            const response = await axios.post('http://localhost:3002/users/login', loginData);
            console.log('Response Data: ', response.data);
            
            if (response.data.authenticated === 'true') {
                // Store authentication state in localStorage
                localStorage.setItem('isAuthenticated', 'true');
                localStorage.setItem('userLogin', loginData.username);
                navigate('/main');
            }

        } catch (error) {
            console.error(error);
            alert(error);
        }
    }

    // console.log("status is authen now : ", isAuthenticated);

  return (
    <div className='body'>
            <div className='login-form-box rounded-2xl'>
                <div className='form'>
                    <div className='login-topic'>
                        <h1>OuMilin Family Login</h1>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className='text-form'>
                            <label htmlFor="" className='fo'>Username</label>
                            <input type="text" id="username" name="username" onChange={handleChange} />
                            <label htmlFor="">Password</label>
                            <input type="password" id="password" name="password" onChange={handleChange} />
                        </div>
                        <div className='flex justify-center items-center'>
                            <button className='login-button bg-cream'>Login</button>
                        </div>
                    </form>
                    <div className='flex justify-center items-center mt-8'>
                        <Link to={"/register"} className='text-sm text-black hover:text-pick-3'>Register here</Link>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Login