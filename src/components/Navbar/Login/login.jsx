import React, { useState } from 'react';
import { VscChromeClose } from 'react-icons/vsc';
import { meal } from '../../../constants'
import './login.scss';

function TextInput({ type = 'text', label }) {
    const [value, setValue] = useState('');
  
    return (
      <div className="textbox">
        <input type={type} value={value} onChange={(e) => setValue(e.target.value)} />
        <label className={value ? 'label label-hover' : 'label'} htmlFor={label}>{label}</label>
      </div>
    );
}

const Login = ({handleLogin}) => {
  const [isLogin, setIsLogin] = useState(true);
  const vidRef = React.useRef();

  return (
    <div id="myModal" class="modal">
        <div class="modal__content">
          <div className="modal__content--left">
            <video ref={vidRef} src={meal} type="video/mp4" loop controls={false} autoPlay={true} muted />
          </div>

          <div className="modal__content--right">
            {isLogin && <div className="login">
              <h1>Log In <span onClick={handleLogin}><VscChromeClose style={{ cursor: 'pointer', height: '24px' }} /></span></h1>
              <TextInput label="Name / Email" />
              <TextInput label="Password" />
              <button type="button" className="custom__button" onClick={handleLogin}>Login</button>
              <p>Don't have an account &nbsp;<span onClick={() => setIsLogin(false)}>Sign Up</span></p>
            </div>}

            {!isLogin && <div className="login">
              <h1>Sign Up</h1>
              <TextInput label="Enter Name" />
              <TextInput label="Enter Email" />
              <TextInput label="Enter Password" />
              <TextInput label="Repeat Password" />
              <button type="button" className="custom__button" onClick={handleLogin}>Register</button>
              <p>Already have an account &nbsp;<span onClick={() => setIsLogin(true)}>Log In</span></p>
            </div>}
          </div>
        </div>
    </div>
  );
};

export default Login;
