import React from 'react';

const Chats = () => {
    return (
        <div className='chats'>
            <div className="userChat">
                <img src="https://randomuser.me/api/portraits/women/90.jpg" alt="user" />
                <div className='userChatInfo'>
                    <span>Anna</span>
                    <p>hello</p>
                </div>
            </div>
            <div className="userChat">
                <img src="https://randomuser.me/api/portraits/women/90.jpg" alt="user" />
                <div className='userChatInfo'>
                    <span>Anna</span>
                    <p>hello</p>
                </div>
            </div>
            <div className="userChat">
                <img src="https://randomuser.me/api/portraits/women/90.jpg" alt="user" />
                <div className='userChatInfo'>
                    <span>Anna</span>
                    <p>hello</p>
                </div>
            </div>
        </div>

    )
}

export default Chats;