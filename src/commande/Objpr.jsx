import React, { useState } from 'react';

export default function ObjPr() {
    const [obj, setObj] = useState({
        name: "",
        email: "",
        password: "",
        radio: "",
        checkbox: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setObj({
            ...obj,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log(obj);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Enter name'
                    name='name'
                    value={obj.name}
                    onChange={handleChange}
                />
                <br />
                <input
                    type='email'
                    placeholder='Enter email'
                    name='email'
                    value={obj.email}
                    onChange={handleChange}
                />
                <br />
                <input
                    type='password'
                    placeholder='Enter password'
                    name='password'
                    value={obj.password}
                    onChange={handleChange}
                />
                <br />
                <input
                    type='radio'
                    name='radio'
                    value='option1'
                    checked={obj.radio === 'option1'}
                    onChange={handleChange}
                /> Option 1
                <br />
                <input
                    type='radio'
                    name='radio'
                    value='option2'
                    checked={obj.radio === 'option2'}
                    onChange={handleChange}
                /> Option 2
                <br />
                <input
                    type='checkbox'
                    name='checkbox'
                    id='sub'
                    value={obj.checkbox}
                    onChange={handleChange}
                /> <label htmlFor='sub'> subscrib</label>
                <br />
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
}
