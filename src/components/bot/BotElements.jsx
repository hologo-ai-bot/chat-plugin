import styled from 'styled-components';


export const ContainerBot = styled.button`
  position: fixed;
  bottom: 20px; /* Adjust as needed */
  right: 20px; /* Adjust as needed */
  z-index: 1000; /* Adjust the z-index to ensure it's above other content */
  background-color: #007bff; /* Example background color */
  color: white;
  border: none;
  padding: 10px 20px; /* Example padding */
  border-radius: 5px; /* Example border radius */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Example box shadow */
  cursor: pointer;
  
  &:hover {
    background-color: #0056b3;
  }
`;
export const ChatPopupWrapper = styled.div`
  display: flex;
  position: fixed;
  bottom: 80px;
  right: 20px;
  width: 400px;
  height: 600px;
  max-width: 100%;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  overflow: hidden;
  flex-direction: column;
  justify-content: space-between;
`;

export const ChatHeader = styled.div`
  background-color: #007bff;
  color: white;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 30px;
  cursor: pointer;
`;

export const ChatBody = styled.div`
  padding: 10px;
  height: 500px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;

export const ChatFooter = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  gap:5px;
`;

export const ChatInput = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
`;

export const SendButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  
  &:hover {
    background-color: #0056b3;
  }
`;


export const ChatHeaderButtons = styled.div`
  display: flex;
  width: 60px;
  height: auto;
  justify-content: space-between;
  align-items: center;
`

export const Message = styled.div`
  margin: 5px 0;
  padding: 10px;
  border-radius: 10px;
  background-color: ${props => (props.sender === 'bot' ? '#f1f0f0' : '#007bff')};
  color: ${props => (props.sender === 'bot' ? 'black' : 'white')};
  align-self: ${props => (props.sender === 'bot' ? 'flex-start' : 'flex-end')};
  max-width: 80%;
  word-wrap: break-word;
`;



export const HistoryWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  background-color: #ffffff;
  flex-direction: column;
  align-items: flex-start;
`


export const HistoryCard = styled.div`
  display: flex;
  width: 90%;
  height: 50px;
  margin-top: 10px;
  border-bottom: 1px solid #7b7b7b;
  margin-left:10px;
  align-items: center;
  padding-left: 5px;
  color: black;
  

  &:hover {
    background-color: #2b78ca;
  }

`