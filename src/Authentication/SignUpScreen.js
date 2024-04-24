import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function SignUpScreen({nameChange, emailChange, passwordChange }) {

  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newCompany, setNewCompany] = useState('');
  const [newAgency, setNewAgency] = useState('');
  const navigate = useNavigate();

  function submitHandler(e){
        e.preventDefault();
        nameChange(newName);
        emailChange(newEmail);
        passwordChange(newPassword);
        console.log(newAgency);
        if(newName && newPhone&& newEmail && newPassword && newAgency ){
            navigate("/login");
        } else{
          alert("Please fill all required field!");
        }

  }

  return (
    <div id='registerPage'>
      <h1 id='register-tag'>Create your PopX account</h1>
        <form onSubmit={submitHandler}>
        <fieldset>
          <legend>Full Name<span class="star">*</span></legend>
          <input placeholder='Enter name' type="text" name='name' id='register-name' class="input-btn"
          value={newName} onChange={(e) => setNewName(e.target.value)} />
        </fieldset>
        <fieldset>
          <legend>Phone Number<span class="star">*</span></legend>
          <input placeholder='Enter phone' type="number" name='number' id='register-number' class="input-btn"
          value={newPhone} onChange={(e) => setNewPhone(e.target.value)} />
        </fieldset>
        <fieldset>
          <legend>Email Address<span class="star">*</span></legend>
          <input placeholder='Enter email address' type="text" name='email' id='register-email'  class="input-btn"
          value={newEmail} onChange={(e) => setNewEmail(e.target.value)} />
          </fieldset>
          <fieldset>
          <legend>Password<span class="star">*</span></legend>
          <input placeholder='Enter password' type="password" name='name' id='register-password' class="input-btn"
          value={newPassword} onChange={(e) => setNewPassword(e.target.value)} /><br />
          </fieldset>
          <fieldset>
          <legend>Company Name</legend>
          <input placeholder='Enter company' type="text" name='company' id='register-company' class="input-btn"
          value={newCompany} onChange={(e) => setNewCompany(e.target.value)}/>
        </fieldset>

        <p class="para-radio">Are you an Agency?<span class="star">*</span></p> 
        <label> 
        <input type="radio" name="option" onClick={(e) => setNewAgency("yes")}/> <span class="para-radio"> Yes </span>
        </label> 
  
        <label> 
        <input type="radio" name="option" onClick={(e) => setNewAgency("no")}/> <span class="para-radio">No</span> 
        </label> 
        <input id='register-submit' type='submit' value='Submit' />
        </form>
      
      <div>
        Already a User?
        <br/>
        <Link to="/login"><button id='register-to-login'>Login</button></Link>
      </div>

    </div>
  )
}
export default SignUpScreen;