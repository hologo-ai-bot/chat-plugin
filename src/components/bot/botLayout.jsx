import React, { useState } from 'react';
import {
  ChatPopupWrapper,
  ChatHeader,
  CloseButton,
  ChatBody,
  ChatFooter,
  ChatInput,
  SendButton,
  Message,
} from './BotElements';

const BotLayout = () => {
  const [messages, setMessages] = useState([
    { text: 'Hi there! How can I help you?', sender: 'bot' }
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = () => {
    if (inputValue.trim() !== '') {
      setMessages([...messages, { text: inputValue, sender: 'user' }]);
      setInputValue('');
      // Simulate a bot response after a short delay
      setTimeout(() => {
        setMessages(prevMessages => [
          ...prevMessages,
          { text: 'This is a simulated bot response.', sender: 'bot' }
        ]);
      }, 1000);
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <ChatPopupWrapper>
      <ChatHeader>
        <span>Chat with us</span>
        <CloseButton>×</CloseButton>
      </ChatHeader>
      <ChatBody>
        {messages.map((message, index) => (
          <Message key={index} sender={message.sender}>
            {message.text}
          </Message>
        ))}
      </ChatBody>
      <ChatFooter>
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
    </ChatPopupWrapper>
  );
};

export default BotLayout;
