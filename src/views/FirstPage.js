import axios from 'axios';
import React, { useEffect } from 'react';

const FirstPage = () => {
    useEffect(()=>{
        axios.get('http://localhost:4500/home')
            .then(res => console.log(res))
    },[])

    return (
        <div>
            <h1>this is home</h1>
        </div>
    );
};

export default FirstPage;