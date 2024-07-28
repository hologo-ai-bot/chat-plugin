import React, { useState } from 'react';
import {
  ChatPopupWrapper,
  ChatHeader,
  CloseButton,
  ChatHeaderButtons,
} from './BotElements';
import HistoryIcon from '@mui/icons-material/History';
import ChatWindow from './chatWindow';
import HistoryWindow from './historyWindow';


const BotLayout = () => {
  const [viewHistory, setViewHistory] = useState(false);
  const [sessionId, setSessionId] = useState(null);

  const handleViewHistory = () => {
    setViewHistory(!viewHistory);
  };

  const handleSelectChat = (id) => {
    setSessionId(id);
    setViewHistory(false);
  };

  return (
    <ChatPopupWrapper>
      <ChatHeader>
        <span>Chat with us</span>
        <ChatHeaderButtons>
          <HistoryIcon onClick={handleViewHistory} />
          <CloseButton>×</CloseButton>
        </ChatHeaderButtons>
      </ChatHeader>
      {viewHistory ? (
        <HistoryWindow onSelectChat={handleSelectChat} />
      ) : (
        <ChatWindow sessionId={sessionId} setSessionId={setSessionId} />
      )}
    </ChatPopupWrapper>
  );
};

export default BotLayout;
