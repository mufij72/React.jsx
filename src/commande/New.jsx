import React, { useState } from 'react';

export default function New() {
    const [formData, setFormData] = useState({
        fName: '',
        LName: '',
        phone: '',
        gender: ''
    });

    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [checked3, setChecked3] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleCheckbox1 = () => setChecked1(!checked1);
    const handleCheckbox2 = () => setChecked2(!checked2);
    const handleCheckbox3 = () => setChecked3(!checked3);

    const handleForm = (e) => {
        e.preventDefault();
        console.log({
            ...formData,
            checked1,
            checked2,
            checked3
        });
        e.target.reset();
        setFormData({
            fName: '',
            LName: '',
            phone: '',
            gender: ''
        });
        setChecked1(false);
        setChecked2(false);
        setChecked3(false);
    };

    return (
        <div>
            <h1 style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>Form Registration</h1>
            <hr />
            <form onSubmit={handleForm}>
                <label>First Name:</label>
                <input
                    type='text'
                    name='fName'
                    placeholder='Enter the first name'
                    required
                    value={formData.fName}
                    onChange={handleChange}
                />
                <br />
                <br />
                <label>Last Name:</label>
                <input
                    type='text'
                    name='LName'
                    placeholder='Enter the last name'
                    required
                    value={formData.LName}
                    onChange={handleChange}
                />
                <br />
                <br />
                <label>Mobile No.:</label>
                <input
                    type='tel'
                    name='phone'
                    placeholder='Enter the number'
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    pattern="[0-9]{10}"
                />
                <br />
                <br />
                <input
                    type='radio'
                    name='gender'
                    value='male'
                    id='male'
                    checked={formData.gender === 'male'}
                    onChange={handleChange}
                />
                <label htmlFor='male'>Male</label>
                <br />
                <input
                    type='radio'
                    name='gender'
                    value='female'
                    id='female'
                    checked={formData.gender === 'female'}
                    onChange={handleChange}
                />
                <label htmlFor='female'>Female</label>
                <br />
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
        </div>
    );
}
