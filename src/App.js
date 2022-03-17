import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import FirstPage from "./views/FirstPage";
import Login from "./views/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/home" element={<FirstPage/>} />
      </Routes>
    </BrowserRouter>
  )
}



export default App;

