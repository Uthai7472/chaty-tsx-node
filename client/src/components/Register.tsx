import React, { ChangeEvent, useState } from 'react';
// import '../index.css';
import './Register.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        id: '',
        username: '',
        password: '',
    });

    // Function for handle change input and set to state
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [event.target.name]: event.target.value,
        }));
        console.log(formData.id);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(`Submit ID : ${formData.id}`);

        try {
            const response = await axios.post('http://localhost:3002/api/register', formData);
            console.log("Response Data from /api/register: ", response.data);
            navigate('/');

        } catch (error) {
            console.error(error);
            alert(error);
        }
    }   

  return (
    <div className='body'>
        <div className='register-form-box rounded-2xl'>
            
            <div className='form'>
                <div className='register-topic'>
                    <h1>Register</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='text-form'>
                        <label htmlFor="">ID</label>
                        <input type="text" id="id" name="id" onChange={handleChange} required/>
                        <label htmlFor="" className='fo'>Username</label>
                        <input type="text" id="username" name="username" onChange={handleChange} required/>
                        <label htmlFor="">Password</label>
                        <input type="password" id="password" name="password" onChange={handleChange} required/>
                    </div>
                    <div className='flex justify-center items-center'>
                        <button className='register-button bg-pink-2'>Register</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Register