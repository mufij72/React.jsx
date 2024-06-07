import React, { useState, useEffect } from 'react';
import { FaCheck, FaTimes } from "react-icons/fa";

export default function Practicalor() {
    const [formArray, setFormArray] = useState([]);
    const [radio, setRadio] = useState('');
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [checked3, setChecked3] = useState(false);

    // Load data from local storage when the component mounts
    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('formArray'));
        if (storedData) {
            setFormArray(storedData);
        }
    }, []);

    // Save data to local storage whenever formArray changes
    useEffect(() => {
        localStorage.setItem('formArray', JSON.stringify(formArray));
    }, [formArray]);

    const handleForm = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;

        const newEntry = {
            name,
            email,
            checked1,
            checked2,
            checked3,
            radio
        };

        setFormArray([...formArray, newEntry]);

        e.target.reset();
        setRadio('');
        setChecked1(false);
        setChecked2(false);
        setChecked3(false);
    };

    const handleRadioChange = (e) => {
        setRadio(e.target.value);
    };

    const handleCheckbox1 = () => {
        setChecked1(!checked1);
    };

    const handleCheckbox2 = () => {
        setChecked2(!checked2);
    };

    const handleCheckbox3 = () => {
        setChecked3(!checked3);
    };

    const handleDelete = (index) => {
        const newArray = formArray.filter((_, i) => i !== index);
        setFormArray(newArray);
    };

    return (
        <div>
            <form onSubmit={handleForm}>
                <input
                    type='text'
                    name='name'
                    placeholder='Enter the name'
                />
                <br />
                <input
                    type='email'
                    name='email'
                    placeholder='Enter the email'
                />
                <br />

                <input
                    type='radio'
                    name='gender'
                    value='male'
                    id='male'
                    checked={radio === 'male'}
                    onChange={handleRadioChange}
                />
                <label htmlFor='male'>Male</label>
                <br />
                <input
                    type='radio'
                    name='gender'
                    value='female'
                    id='female'
                    checked={radio === 'female'}
                    onChange={handleRadioChange}
                />
                <label htmlFor='female'>Female</label>
                <br />

                <input
                    type='checkbox'
                    checked={checked1}
                    onChange={handleCheckbox1}
                    id='check1'
                />
                <label htmlFor='check1'>Checkbox 1</label>
                <br />

                <input
                    type='checkbox'
                    checked={checked2}
                    onChange={handleCheckbox2}
                    id='check2'
                />
                <label htmlFor='check2'>Checkbox 2</label>
                <br />

                <input
                    type='checkbox'
                    checked={checked3}
                    onChange={handleCheckbox3}
                    id='check3'
                />
                <label htmlFor='check3'>Checkbox 3</label>
                <br />

                <button type='submit'>Submit</button>
            </form>

            <table style={{ borderCollapse: 'collapse', width: '100%', marginTop: '20px' }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid black', padding: '8px' }}>No.</th>
                        <th style={{ border: '1px solid black', padding: '8px' }}>Name</th>
                        <th style={{ border: '1px solid black', padding: '8px' }}>Email</th>
                        <th style={{ border: '1px solid black', padding: '8px' }}>Gender</th>
                        <th style={{ border: '1px solid black', padding: '8px' }}>Checkbox 1</th>
                        <th style={{ border: '1px solid black', padding: '8px' }}>Checkbox 2</th>
                        <th style={{ border: '1px solid black', padding: '8px' }}>Checkbox 3</th>
                        <th style={{ border: '1px solid black', padding: '8px' }}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {formArray.map((item, index) => (
                        <tr key={index}>
                            <td style={{ border: '1px solid black', padding: '8px' }}>{index + 1}</td>
                            <td style={{ border: '1px solid black', padding: '8px' }}>{item.name}</td>
                            <td style={{ border: '1px solid black', padding: '8px' }}>{item.email}</td>
                            <td style={{ border: '1px solid black', padding: '8px' }}>{item.radio}</td>
                            <td style={{ border: '1px solid black', padding: '8px' }}>{item.checked1 ? <FaCheck /> : <FaTimes />}</td>
                            <td style={{ border: '1px solid black', padding: '8px' }}>{item.checked2 ? <FaCheck /> : <FaTimes />}</td>
                            <td style={{ border: '1px solid black', padding: '8px' }}>{item.checked3 ? <FaCheck /> : <FaTimes />}</td>
                            <td style={{ border: '1px solid black', padding: '8px' }}>
                                <button onClick={() => handleDelete(index)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
