import React from 'react';
import Attach from '../img/attach.png';
import Img from '../img/img.png';

const Input = () => {
    return (
        <div className='input' placeholder='Type something...'>
            <div className='send'>
                <img src={Attach} alt="" />
                <input type='file' style={{ display: 'none' }} id='file' />
                <label htmlfor='file'>
                    <img src={Img} alt="" />
                </label>
                <button>Send</button>
            </div>

        </div>
    )
}

export default Input;