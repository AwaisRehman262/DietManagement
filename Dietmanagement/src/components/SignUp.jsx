import { Button } from '@mui/material'
import React, { useState } from 'react'

export const SignUp = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const SignUp = async () => {
        let user = { name, email, password }
        console.log(user)
        await fetch("/api/signUp", {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                "content-Type": 'application/json',
                "Accept": 'application/json'
            }
        })

    }

    return (
        <div className="SignUp w-10/12 border-black border-2">
            <input type='text' className="enabled:hover:border-gray-400 disabled:opacity-75 form-control" value={name} onChange={e => { setName(e.target.value) }} placeholder='name' />
            <br />
            <input type='text' value={email} onChange={e => { setEmail(e.target.value) }} placeholder='email' />
            <br />
            <input type='text' value={password} onChange={e => { setPassword(e.target.value) }} placeholder='password' />
            <Button variant="contained" onClick={SignUp} >SignUp</Button>
        </div>
    )
}
