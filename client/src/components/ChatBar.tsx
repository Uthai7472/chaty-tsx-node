import React, { useState } from 'react';
import './ChatBar.css';
import { IoImages } from "react-icons/io5";
import { BsSendFill } from "react-icons/bs";
import axios from 'axios';

const ChatBar = () => {
  const username = localStorage.getItem('userLogin');
  console.log("Username: ", username);

  const [formData, setFormData] = useState({
    'username': '',
    'message': '',
    'image_url': '',
    'timestamp': '',
    'date': ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    console.log(`Name: ${name} Value: ${value}`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Generate current timestamp and date
      const now = new Date();
      const timestamp = now.toISOString(); // UTC timestamp
      const options = { timeZone: 'Asia/Bangkok' };
      const dateThailand = now.toLocaleDateString('en-US', options);

      const updatedFormData = {
        ...formData,
        username: username,
        timestamp: timestamp,
        date: dateThailand
      };

      const response = await axios.post('http://localhost:3002/api/chat/send', updatedFormData);
      console.log(response.data);
      console.log('Form Data: ', updatedFormData);

      // Clear state
      setFormData({
        'username': '',
        'message': '',
        'image_url': '',
        'timestamp': '',
        'date': ''
      });
    } catch (error) {
      console.error('An error occurred during send message:', error);
    }
  }

  return (
    <div className='chat-bar-container'>
      <div className='image-btn-block'>
        <button><IoImages /></button>
        <input type="text" onChange={handleChange} value={formData.image_url} name='image_url' id='image_url' hidden />
      </div>

      <div className='message-block'>
        <textarea onChange={handleChange} value={formData.message} className='chat-input' name='message' id='message'>

        </textarea>
      </div>

      <div className='send-btn-block'>
        <button onClick={handleSubmit}><BsSendFill /></button>
      </div>
        
    </div>
  )
}

export default ChatBar