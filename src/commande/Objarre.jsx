import React, { useState } from 'react';

export default function Objarre() {
    const [objarre, setobjarre] = useState([]);
    const [rediyo, setrediyo] = useState("");
    const [chexbox1, setchexbox1] = useState(false);
    const [chexbox2, setchexbox2] = useState(false);
    const [chexbox3, setchexbox3] = useState(false);

    const handleForm = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;

        const newobj = {
            name,
            email,
            chexbox1,
            chexbox2,
            chexbox3,
            rediyo
        };

        setobjarre([...objarre, newobj]);
        console.log([...objarre, newobj]);

        e.target.reset();
        setrediyo("");
        setchexbox1(false);
        setchexbox2(false);
        setchexbox3(false);
    }

    const handleRadioChange = (e) => {
        setrediyo(e.target.value);
    }

    const handleCheckbox1Change = () => {
        setchexbox1(!chexbox1);
    }

    const handleCheckbox2Change = () => {
        setchexbox2(!chexbox2);
    }

    const handleCheckbox3Change = () => {
        setchexbox3(!chexbox3);
    }

    return (
        <div>
            <form onSubmit={handleForm}>
                <input
                    type='text'
                    name='name'
                    placeholder='Enter name'
                />
                <br />
                <input
                    type='email'
                    name='email'
                    placeholder='Enter email'
                />
                <br />

                <input
                    type='radio'
                    name='gender'
                    value="male"
                    id='male'
                    checked={rediyo === "male"}
                    onChange={handleRadioChange}
                />
                <label htmlFor='male'>Male</label>
                <input
                    type='radio'
                    name='gender'
                    value="female"
                    id='female'
                    checked={rediyo === "female"}
                    onChange={handleRadioChange}
                />
                <label htmlFor='female'>Female</label>
                <br />

                <input
                    type='checkbox'
                    checked={chexbox1}
                    onChange={handleCheckbox1Change}
                    id='check1'
                />
                <label htmlFor='check1'>Check1</label>
                <input
                    type='checkbox'
                    checked={chexbox2}
                    onChange={handleCheckbox2Change}
                    id='check2'
                />
                <label htmlFor='check2'>Check2</label>
                <input
                    type='checkbox'
                    checked={chexbox3}
                    onChange={handleCheckbox3Change}
                    id='check3'
                />
                <label htmlFor='check3'>Check3</label>
                <br />

                <button type='submit'>Submit</button>
            </form>

            {objarre.map((item, index) => (
                <div key={index}>
                    <p>Name: {item.name}</p>
                    <p>Email: {item.email}</p>
                    <p>Checkbox1: {item.chexbox1 ? 'Checked' : 'Unchecked'}</p>
                    <p>Checkbox2: {item.chexbox2 ? 'Checked' : 'Unchecked'}</p>
                    <p>Checkbox3: {item.chexbox3 ? 'Checked' : 'Unchecked'}</p>
                    <p>Gender: {item.rediyo}</p>
                </div>
            ))}
        </div>
    );
}