import React from 'react'
import Add from "../img/addAvatar.png"

const Register = () => {
    return (
        <div className='formContainer'>
            <div className='formWrapper'>
                <span className="logo">Chat clone</span>
                <span className="title">Register</span>
                <form>
                    <input type="text" placeholder='display name'/>
                    <input type="email" placeholder='email'/>
                    <input type="password" placeholder='password'/>
                    <input style={{display:'none'}} type="file" id="file" />

                    <label htmlFor="file">
                    <img src={Add} alt="" />
                    <span>Add an image</span>
                    </label>
                    <button>Sing up</button>

                </form>
                <p>Do you have an account? Log in</p>
            </div>
        </div>
    )
}

export default Register