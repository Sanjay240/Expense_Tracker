import React from 'react'
import { like, user } from '../Utils/Icons'
import Button from './Button'
import '../Styles/messageItem.css';

function MessageItem({user_name, note, likes, updateLikes, message_id}) {
  return (
    <div className='message-item'>
      <div className='icon'>
        {user}
      </div>
      <div className='content'>
        <h5>{user_name}</h5>
        <p>{note}</p>
      </div>
      <div className='btn-icon'>
        <Button
             icon={like}
             bPad={'1rem'}
             bRad={'50%'}
             bg={'var(--primary-color'}
             color={'#fff'}
             onClick={() => updateLikes(message_id, likes)}
        />
        <p>{likes}</p>
      </div>
    </div>
  )
}



export default MessageItem
