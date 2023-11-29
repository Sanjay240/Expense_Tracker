/** Discussion component shows all the messages and the input form to add a new message. */

import React, { useEffect, useState } from 'react'
import '../Styles/discussion.css'
import { useGlobalContext } from '../Context/globalContext';
import MessageItem from './MessageItem';

function Discussion() {
  const {message, getMessages, addMessage, updateMessage} = useGlobalContext()

  const [inputState, setInputState] = useState({
    note: '',
    likes: 1,
    user_id: localStorage.getItem("userId")
  })


  const {note} = inputState;
    

    const handleInput = name => e => {
        setInputState({...inputState, [name]: e.target.value})
    }
    const handleSubmit = e => {
        e.preventDefault()
        addMessage(inputState)
        setInputState({
          note: '',
          likes: 1,
          user_id: localStorage.getItem('userId')
        })
    }


  useEffect(() => {
    getMessages()
}, [])

  return (
    <div className='discussion'>
      <div className='inner-layout'>
        <div className='chat-display'>
            {message.map((mess) => {
              const {user_name, note, likes, message_id} = mess
              return <MessageItem 
                      key = {message_id}
                      user_name = {user_name}
                      note = {note}
                      likes = {likes}
                      message_id= {message_id}
                      updateLikes = {updateMessage}
                  />
            })}
        </div>
        <form className='input-form' onSubmit={handleSubmit}>
              <input type='text' placeholder='Enter your message' className='input-area' id='note' value={note} name='note' onChange={handleInput('note')}></input>
              <button>Post</button>
        </form>
      </div>
    </div>
  )
}

export default Discussion
