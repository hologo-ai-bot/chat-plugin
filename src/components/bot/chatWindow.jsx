import React, { useState, useEffect } from 'react';
import {
  ChatBody,
  ChatFooter,
  ChatInput,
  SendButton,
  Message,
} from './BotElements';
import axios from 'axios';
import AddCommentIcon from '@mui/icons-material/AddComment';
import { blue } from '@mui/material/colors';

const ChatWindow = ({ sessionId, setSessionId }) => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (sessionId) {
      resumeChat(sessionId);
    }
  }, [sessionId]);

  const resumeChat = async (id) => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/bot/get_messages', { params: { session_id: id } });
      setMessages(response.data.messages.map(msg => ({
        text: msg.content,
        sender: msg.sender,
        timestamp: msg.timestamp.$date
      })));
    } catch (error) {
      console.error('Error resuming chat session', error);
    }
  };

  const handleSendMessage = async () => {
    if (inputValue.trim() !== '' && sessionId) {
      const userMessage = { text: inputValue, sender: 'user' };
      setMessages([...messages, userMessage]);
      setInputValue('');

      try {
        const response = await axios.post('http://127.0.0.1:5000/bot/convo', { clientID: "66827a99314c7cf671f939de", message: inputValue, session_Id: sessionId });
        const botMessage = { text: response.data.message, sender: 'bot' };
        setMessages(prevMessages => [...prevMessages, botMessage]);
      } catch (error) {
        console.error('Error communicating with the bot', error);
        const errorMessage = { text: 'Sorry, something went wrong. Please try again later.', sender: 'bot' };
        setMessages(prevMessages => [...prevMessages, errorMessage]);
      }
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleNewChat = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/bot/new_chat', { username: '66827a99314c7cf671f939de' });
      setSessionId(response.data.session_id);
      setMessages([]);
    } catch (error) {
      console.error('Error creating new chat session', error);
    }
  };

  return (
    <>
      <ChatBody>
        {messages.map((message, index) => (
          <Message key={index} sender={message.sender}>
            {message.text}
          </Message>
        ))}
      </ChatBody>
      <ChatFooter>
        <AddCommentIcon onClick={handleNewChat} fontSize="large" sx={{ color: blue[500] }} />
        <ChatInput
          type="text"
          placeholder="Type your message..."
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={(event) => {
            if (event.key === 'Enter') {
              handleSendMessage();
            }
          }}
        />
        <SendButton onClick={handleSendMessage}>Send</SendButton>
      </ChatFooter>
    </>
  );
};

export default ChatWindow;
