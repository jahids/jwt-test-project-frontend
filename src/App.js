import axios from "axios";
import { useRef } from "react";


function App() {

  const inputname = useRef();
  const inputpass = useRef();

  const handleDatapass = (e) => {

    

    const inputValue = inputname.current.value;
    const passValue = inputpass.current.value;

    axios.post(`http://localhost:4500/api/login`, {
      inputValue, passValue
    })
      .then(res => console.log(res))

  }





  return (

    <div>
      <input ref={inputname} type="text" placeholder="plese enter your name" />
      <input ref={inputpass} type="number" placeholder="plese enter your pass" />
      <button onClick={handleDatapass} >click</button>

    </div>






  )

}



export default App;

