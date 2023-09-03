import { Button, alertTitleClasses, stepButtonClasses } from '@mui/material'
import React, { useState } from 'react'
import './SignUp.css';
import axios from 'axios';
export const SignUp = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [displayValueName, setDisplayValueName] = useState('none')

    const [displayValueEmail, setDisplayValueEmail] = useState('none')
    const [displayValueEmailEnd, setDisplayValueEmailEnd] = useState('none')

    const [displayValuePassCount, setDisplayValuePassCount] = useState('none')
    const [displayValuePassLowerCase, setDisplayValuePassLowerCase] = useState('none')
    const [displayValuePassUpperCase, setDisplayValuePassUpperCase] = useState('none')
    const [displayValuePassDigit, setDisplayValuePassDigit] = useState('none')
    const [displayValuePassSpecialChar, setDisplayValuePassSpecialChar] = useState('none')
    
    const validateName = () => {
        // Check if the First Name is an Empty string or not.

        if (name.length <= 3) {
            setDisplayValueName('flex')
            return
        } else {
            setDisplayValueName('none')
        }
    }

    const validateEmail = () => {
        // Check if the Email is an Empty string or not.

        if (email.length <= 3) {
            setDisplayValueEmail('flex')
            return
        } setDisplayValueEmail('none')


        if (!email.endsWith('com') || !email.includes('@')) {
            setDisplayValueEmailEnd('flex')
            return

        } setDisplayValueEmailEnd('none')
    }

    const validatePassword = () => {
        // check if the password follows constraints or not.

        // if password length is less than 8 characters, alert invalid form.

        if (password.length < 8) {
            setDisplayValuePassCount('flex')
            return
        } setDisplayValuePassCount('none')

        // variable to count upper case characters in the password.
        let countUpperCase = 0
        // variable to count lowercase characters in the password.
        let countLowerCase = 0
        // variable to count digit characters in the password.
        let countDigit = 0
        // variable to count special characters in the password.
        let countSpecialCharacters = 0

        for (let i = 0; i < password.length; i++) {
            const specialChars = [
                '!',
                '@',
                '#',
                '$',
                '%',
                '^',
                '&',
                '*',
                '(',
                ')',
                '_',
                '-',
                '+',
                '=',
                '[',
                '{',
                ']',
                '}',
                ':',
                ';',
                '<',
                '>',
            ]

            if (specialChars.includes(password[i])) {
                // this means that the character is special, so increment countSpecialCharacters
                countSpecialCharacters++
            } else if (!isNaN(password[i] * 1)) {
                // this means that the character is a digit, so increment countDigit
                countDigit++
            } else {
                if (password[i] == password[i].toUpperCase()) {
                    // this means that the character is an upper case character, so increment countUpperCase
                    countUpperCase++
                }
                if (password[i] == password[i].toLowerCase()) {
                    // this means that the character is lowercase, so increment countUpperCase
                    countLowerCase++
                }
            }
        }

        if (countLowerCase == 0) {
            // invalid form, 0 lowercase characters
            setDisplayValuePassLowerCase('flex')
            return
        } setDisplayValuePassLowerCase('none')

        if (countUpperCase == 0) {
            // invalid form, 0 upper case characters
            setDisplayValuePassUpperCase('flex')
            return
        } setDisplayValuePassUpperCase('none')

        if (countDigit == 0) {
            // invalid form, 0 digit characters
            setDisplayValuePassDigit('flex')
            return
        } setDisplayValuePassDigit('none')


        if (countSpecialCharacters == 0) {
            // invalid form, 0 special characters characters
            setDisplayValuePassSpecialChar('flex')
            return
        } setDisplayValuePassSpecialChar('none')
    }
    
    const validateForm = () => {
        validateName()
        validateEmail()
        validatePassword()
    }

    const signUp = async () => {

        // validating form
            validateForm()

        // Now fetching
        let user = { name, email, password }

        await fetch("/api/signUp", {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                "content-Type": 'application/json',
                "Accept": 'application/json'
            }
        }).then(res => {
            // console.log(res.json)

        }).catch(err => {
            console.log(err.response.data)
        })

        localStorage.setItem('user-info', JSON.stringify(user))

    }


    return (
        <div className={"SignUp"} style={styles.container}>
            <h3>Sign Up</h3>
            <input type='text' className={"input"} value={name} onChange={e => {setName(e.target.value) }} placeholder='Name' />
            <p className='nameError' style={{ display: displayValueName, color: "red" }}>Name is too short</p>

            <br />

            <input className={'input'} type='text' value={email} onChange={e => { setEmail(e.target.value) }}  placeholder='Email' />
            <p className='emailError' style={{ display: displayValueEmail, color: "red" }}>Email is too short</p>
            <p className='emailError' style={{ display: displayValueEmailEnd, color: "red" }}>Email should end with a domain.</p>

            <br />

            <input className={'input'} type='password' value={password} onChange={e => { setPassword(e.target.value) }} placeholder='Password' />

            <p className='passwordError' style={{ display: displayValuePassCount, color: "red" }}>Password must be 8 characters or more.</p>
            <p className='passwordError' style={{ display: displayValuePassLowerCase, color: "red" }}>None lower case characters included.</p>
            <p className='passwordError' style={{ display: displayValuePassUpperCase, color: "red" }}>None upper case characters included.</p>
            <p className='passwordError' style={{ display: displayValuePassDigit, color: "red" }}>None digits included.</p>
            <p className='passwordError' style={{ display: displayValuePassSpecialChar, color: "red" }}>None special characters included.</p>
            <button className={'button'} onClick={signUp}> SignUp</button>
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
    nameError: {
        color: 'red'
    }
};