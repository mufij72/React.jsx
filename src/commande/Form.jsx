import React, { useState } from 'react';

export default function Form() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [radio1, setRadio1] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    console.log("Name:", name, "Age:", age, "Check1:", check1, "Check2:", check2, "Check3:", check3, "Radio1:", radio1, "Password:", password);
    setName("");
    setAge("");
    setCheck1(false);
    setCheck2(false);
    setCheck3(false);
    setRadio1("");
    setPassword("");
    setPasswordStrength("");
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setPasswordStrength(checkPasswordStrength(newPassword));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const checkPasswordStrength = (password) => {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /[0-9]/.test(password);
    const hasSpecialChars = /[^A-Za-z0-9]/.test(password);

    if (password.length >= minLength && hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChars) {
      return 'Strong';
    } else if (password.length >= minLength && ((hasUpperCase && hasLowerCase) || (hasNumbers && hasSpecialChars))) {
      return 'Moderate';
    } else {
      return 'Weak';
    }
  };

  return (
    <div>
      <h2>useState Form</h2>
      <form onSubmit={handleForm}>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <input
          type="number"
          placeholder="Enter age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <br />
        <br />
        <h2>Checkbox</h2>
        <input
          type="checkbox"
          name="check1"
          checked={check1}
          onChange={(e) => setCheck1(e.target.checked)}
        />
        <label>Check me 1</label>
        <br />
        <input
          type="checkbox"
          name="check2"
          checked={check2}
          onChange={(e) => setCheck2(e.target.checked)}
        />
        <label>Check me 2</label>
        <br />
        <input
          type="checkbox"
          name="check3"
          checked={check3}
          onChange={(e) => setCheck3(e.target.checked)}
        />
        <label>Check me 3</label>
        <br />
        <br />
        <h2>Radio Button</h2>
        <input
          type="radio"
          name="radio1"
          value="html"
          checked={radio1 === "html"}
          onChange={(e) => setRadio1(e.target.value)}
        />
        <label>HTML</label>
        <br />
        <input
          type="radio"
          name="radio1"
          value="css"
          checked={radio1 === "css"}
          onChange={(e) => setRadio1(e.target.value)}
        />
        <label>CSS</label>
        <br />
        <input
          type="radio"
          name="radio1"
          value="javascript"
          checked={radio1 === "javascript"}
          onChange={(e) => setRadio1(e.target.value)}
        />
        <label>JavaScript</label>
        <br />
        <input
          type="radio"
          name="radio1"
          value="react"
          checked={radio1 === "react"}
          onChange={(e) => setRadio1(e.target.value)}
        />
        <label>React</label>
        <br />
        <label>Enter the password</label>
        <br />
        <input 
          type={showPassword ? "text" : "password"}
          name='password'
          value={password}
          onChange={handlePasswordChange}
        />
        <button type="button" onClick={togglePasswordVisibility}>
          {showPassword ? "Hide" : "Show"}
        </button>
        <p>Password strength: {passwordStrength}</p>
        <br />
   
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
