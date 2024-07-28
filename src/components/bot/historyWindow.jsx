import React, { useState, useEffect } from 'react';
import { HistoryCard, HistoryWrapper } from './BotElements';
import axios from 'axios';

const HistoryWindow = ({ onSelectChat }) => {
  const [chatSessions, setChatSessions] = useState([]);

  const fetchChatSessions = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/bot/list_chats', { params: { username: '66827a99314c7cf671f939de' } });
      setChatSessions(response.data);
      console.log(chatSessions.session_id)
    } catch (error) {
      console.error('Error fetching chat sessions', error);
    }
  };

  useEffect(() => {
    fetchChatSessions();
  }, []);

  return (
    <HistoryWrapper>
      {chatSessions.map((chatSession, index) => (
        <HistoryCard key={index} onClick={() => onSelectChat(chatSession.session_id)}>
       {chatSession.session_id}
          {/* at {new Date(chatSession.messages[0].timestamp).toLocaleString()} */}
        </HistoryCard>
      ))}
    </HistoryWrapper>
  );
};

export default HistoryWindow;
