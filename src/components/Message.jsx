import React from 'react';

const Message = () => {
    return(
        <div className='message owner'>
        <div className="messageInfo">
            <img src="https://media.istockphoto.com/id/1351849534/es/foto/mujer-de-cabello-gris-de-mediana-edad-sonriendo-feliz-de-pie-en-la-ciudad.jpg?s=612x612&w=0&k=20&c=YDDcNTAXaRZ_oWq2K84-mJoB08xJScSM0V9W4M1J4Dg="></img>
            <span>just now</span>
        </div>
        <div className="messageContent">
        <p>guapo</p>
        <img src="https://pbs.twimg.com/profile_images/1350817748562145283/bLEfiWPP_400x400.jpg"></img> 
        </div>
        </div>
    )
}
        
export default Message;