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

        localStorage.setItem('user-info', JSON.stringify(user))

    }

    const validateName = () => {
        // Check if the First Name is an Empty string or not.

        if (name.length == 0) {
            alert('Invalid Form, First Name can not be empty')
            return
        }
    }
    const validateEmail = () => {


        // Check if the Email is an Empty string or not.

        if (email.length == 0) {
            alert('Invalid Form, Email Address can not be empty')
            return
        }
    }

    // check if the password follows constraints or not.

    // if password length is less than 8 characters, alert invalid form.

    if (password.length < 8) {
        alert(
            'Invalid Form, Password must contain greater than or equal to 8 characters.',
        )
        return
    }

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
        alert('Invalid Form, 0 lower case characters in password')
        return
    }

    if (countUpperCase == 0) {
        // invalid form, 0 upper case characters
        alert('Invalid Form, 0 upper case characters in password')
        return
    }

    if (countDigit == 0) {
        // invalid form, 0 digit characters
        alert('Invalid Form, 0 digit characters in password')
        return
    }

    if (countSpecialCharacters == 0) {
        // invalid form, 0 special characters characters
        alert('Invalid Form, 0 special characters in password')
        return
    }

    // if all the conditions are valid, this means that the form is valid

    alert('Form is valid')

}
return (
    <div className={"SignUp"} style={styles.container}>
        <input type='text' className={"input"} value={name} onChange={e => { setName(e.target.value) }} onBlur={validateName()} placeholder='Name' />

        <br />
        <input className={'input'} type='text' value={email} onChange={e => { setEmail(e.target.value) }} onBlur={() => validateEmail(e)} placeholder='Email' />
        <br />
        <input className={'input'} type='text' value={password} onChange={e => { setPassword(e.target.value) }} onBlur={() => validatePassword(e)} placeholder='Password' />
        <button className={'button'} onClick={SignUp} >SignUp</button>
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