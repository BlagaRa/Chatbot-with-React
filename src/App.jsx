import './App.css'
import {  useState } from 'react';
import ChatInput from './components/ChatInput.jsx';
import ChatMessages from './components/ChatMessages.jsx';

      

      
      
      

function App(){

        const [chatMessages,setChatMessages]=useState([]);
        

        return (
          <div className='app-container'>
            
            <ChatMessages
              chatMessages={chatMessages}
            />
            <ChatInput
              chatMessages={chatMessages}
              setChatMessages={setChatMessages}
            />
           
          </div>
        );
      }


export default App
