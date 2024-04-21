import React, { useEffect, useState } from 'react';
import './YourChatBlock.css';
import axios from 'axios';

const YourChatBlock = () => {
    const [messages, setMessages] = useState([]);

    const userLogin = localStorage.getItem('userLogin');
    console.log('User login: ', userLogin);

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const response = await axios.get('http://localhost:3002/api/chat/show_message');
                setMessages(response.data);
            } catch (error) {
                console.error('An error occurred while fetching messages:', error);
            }
        };

        fetchMessages();
    }, []);

    // Function to format the date in the desired format
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        date.setDate(date.getDate() + 1); // Add one day to the date
        return date.toLocaleDateString('en-US', { timeZone: 'UTC' }); // Format date as 'yyyy-mm-dd'
    };

    // Filter messages by username
    const filteredMessages = messages.filter(message => message.username !== userLogin);

  return (
    <div className='your-chat-container'>
        
        {filteredMessages.map((message, index) => (
            <div key={message.id_table} className='your-message-container'>
                <div className='your-datetime-block'>
                    {formatDate(message.date)} {message.timestamp}
                </div>
                <div className='your-message-block'>
                    {message.message}
                </div>
            </div>
        ))}
    </div>
  )
}

export default YourChatBlock