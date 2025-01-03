import React, { useState } from 'react'

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const collectData = () => {
        console.log(name, email, password)
    }
    return (
        <>
            <div className="signupContainer">
                <h2>Register</h2>
                <input className='inputBox' type="text" name="" id="" placeholder='Enter Name' value={name} onChange={(e) => setName(e.target.value)} />
                <input className='inputBox' type="email" name="" id="" placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input className='inputBox' type="password" name="" id="" placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <button onClick={collectData} className='appButton' type='button'>Sign Up</button>
            </div>
        </>
    )
}

export default Signup