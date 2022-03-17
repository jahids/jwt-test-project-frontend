import axios from 'axios';
import React, { useRef } from 'react';

const Login = () => {
    const inputname = useRef();
    const inputpass = useRef();
  
    const handleDatapass = (e) => {
  
      
  
      const inputValue = inputname.current.value;
      const passValue = inputpass.current.value;
    //   const [] = useState('');
  
      axios.post(`http://localhost:4500/api/login`, {
        inputValue, passValue
      })
        .then(res => console.log(res.cookies));
  
    }
    return (
        <div>
        <input ref={inputname} type="text" placeholder="plese enter your name" />
        <input ref={inputpass} type="number" placeholder="plese enter your pass" />
        <button onClick={handleDatapass} >click</button>

        </div>
    );
};

export default Login;