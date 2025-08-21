import { useState } from "react";
import waitingImage from "../assets/loading-spinner.gif"
import { Chatbot } from "supersimpledev";
import './ChatInput.css'

function ChatInput({chatMessages,setChatMessages}){
        const [inputText,setInputText]=useState('')
        const [isLoading,setIsLoading]=useState(false)
        function saveInputText(event){
          setInputText(event.target.value);
        }
        async function sendMessage(){
          if(isLoading || inputText===''){return}
          setIsLoading(true);
          setInputText('');
          const newChatMessages=[
            ...chatMessages,
            {
              message:inputText,
              sender:'user',
              id:crypto.randomUUID(),
            },

          ]
          setChatMessages(newChatMessages);
          const LoadingChatMessage=[
            ...newChatMessages,{
              message:<img width={30}src={waitingImage}/>,
              sender:'robot',
              id:crypto.randomUUID()
            },
          ]
          setChatMessages(LoadingChatMessage);

          const response=await Chatbot.getResponseAsync(inputText);
            
          setChatMessages([
            ...newChatMessages,
            {
              message:response,
              sender:'robot',
              id:crypto.randomUUID(),
            },
          ]);
          setIsLoading(false)
            



        }
        function sendMessageKey(event){
          if(event.key==='Enter'){
            sendMessage()
          }else if(event.key==='Escape'){
            setInputText('')
          }else{
            return
          }
        }
        

        return (
          <div className='chat-input-container'>
            <input 
              placeholder='Send a message to Chatbot' 
              size='30'
              onChange={saveInputText}
              onKeyDown={sendMessageKey}
              value={inputText}
              disabled={isLoading}
              className='chat-input'
              
            />
            <button
              onClick={sendMessage}
              className='send-button'
            > Send</button>
          </div>
        )}
export default ChatInput;