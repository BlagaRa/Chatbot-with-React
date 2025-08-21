import { useEffect, useRef } from "react";
import ChatMessage from './ChatMessage.jsx';
import './ChatMessages.css'

function ChatMessages({chatMessages}){
    const chatMessagesRef=useRef(null);

    useEffect(()=>{
        const containerElem=chatMessagesRef.current;
        if(containerElem){
        containerElem.scrollTop=containerElem.scrollHeight;
        }

    },[chatMessages]);
    return(
        <div className='chat-messages-container'
        ref={chatMessagesRef}
        >

        {chatMessages.length!==0?chatMessages.map((chatMessage)=>{
            return (
            <ChatMessage 
                message={chatMessage.message}
                sender={chatMessage.sender}
                key={chatMessage.id}
            />
            )

        }):<p className='no-chat-messages-message'>Welcome to the chatbot project! Send a message using the textbox bellow!</p>}
        
        </div>
        )
}
export default ChatMessages;