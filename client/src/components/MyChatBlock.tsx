import React, { useEffect, useState } from 'react';
import './MyChatBlock.css';
import axios from 'axios';

const MyChatBlock = () => {
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

    const sortedMessages = [...messages].sort((a, b) => a.id_table - b.id_table);

    // Filter messages by username
    // const filteredMessages = sortedMessages.filter(message => message.username === userLogin);

    // const filteredYourMessages = sortedMessages.filter(message => message.username !== userLogin);

    const chatContainerClass = messages.some(message => message.username === userLogin ? 'my-chat-container' : 'your-chat-container');

  return (
    <div>
        
        <div className='chat-container'>
            {sortedMessages.map((message, index) => (
                // <div className={message.username === userLogin ? 'my-chat-container' : 'your-chat-container'}>
                    <div key={message.id_table} className={message.username === userLogin ? 'message-container' : 'your-message-container'}>
                        <div className='datetime-block'>
                            {formatDate(message.date)} {message.timestamp}
                        </div>
                        <div className='message-block'>
                            {message.message}
                        </div>
                    </div>
                // </div>
            ))}
        </div>
    </div>
  )
}

export default MyChatBlock