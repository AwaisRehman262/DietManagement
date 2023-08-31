import { Button } from '@mui/material'
import React, { useState } from 'react'
import './SignUp.css';
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

        localStorage.setItem('user-info',JSON.stringify(user))

    }

    return (
        <div className={"SignUp"} style={styles.container}>
            <input type='text' className={"input"} value={name} onChange={e => { setName(e.target.value) }} placeholder='name' />

            <br />
            <input type='text' value={email} onChange={e => { setEmail(e.target.value) }} placeholder='email' />
            <br />
            <input type='text' value={password} onChange={e => { setPassword(e.target.value) }} placeholder='password' />
            <Button variant="contained" onClick={SignUp} >SignUp</Button>
        </div>
    )
}


const styles = {
    container: {
        maxWidth: '800px',
        margin: "0 auto",
        padding: '2rem',

    },
    form: {
        display: 'grid',
        gap: '1rem',
    },
};