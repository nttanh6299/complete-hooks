import React from 'react';
import useInput from '../Hooks/useInput';

export const UserForm = () => {
    const [firstName, bindFirstName, resetFirstName] = useInput('');
    const [lastName, bindLastName, resetLastName] = useInput('');

    const submit = (e) => {
        e.preventDefault();
        alert(`${firstName} ${lastName}`);
        resetFirstName();
        resetLastName();
    }

    return ( <div>
        <form onSubmit={submit}>
            <div>
                <label htmlFor="">First name: </label>
                <input {...bindFirstName} />
            </div>
            <div>
                <label htmlFor="">Last name: </label>
                <input {...bindLastName} />
            </div>
            <button type='submit'>Submit</button>
        </form>
        <div>
            <p>Your first name: {firstName}</p>
            <p>Your last name: {lastName}</p>
        </div>
    </div> );
}