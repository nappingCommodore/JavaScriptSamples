import React, {useState, useEffect, useRef} from 'react';

const ControlledInput = ({ value, onChange }) => (
    <input value={value} onChange={(e) => onChange(e.target.value)} />
  );
  
  const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    return (
      <form>
        <ControlledInput value={email} onChange={setEmail} placeholder="Email" />
        <ControlledInput
          value={password}
          onChange={setPassword}
          placeholder="Password"
        />
        <button>Submit</button>
      </form>
    );
  };

  