import React, {useState} from "react";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import { ContainerBot } from "./BotElements";
import BotLayout from "./botLayout";

const Bot = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };
  return (
    <>
      <ContainerBot>
        {isOpen &&
            <BotLayout/>
        }
        <SmartToyIcon onClick={toggleChat} />
      </ContainerBot>
    </>
  );
};

export default Bot;
