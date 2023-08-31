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
            <input type='text' className={"input"} value={name} onChange={e => { setName(e.target.value) }} placeholder='Name' />

            <br />
            <input className={'input'} type='text' value={email} onChange={e => { setEmail(e.target.value) }} placeholder='Email' />
            <br />
            <input className={'input'} type='text' value={password} onChange={e => { setPassword(e.target.value) }} placeholder='Password' />
            <button className={'button'} onClick={SignUp}>SignUp</button>
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