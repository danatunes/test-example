import './App.css';
import {Login, Main} from "./pages";
import {Navigate, Route, Routes} from "react-router-dom";


function App() {

    const token = localStorage.getItem("access_token")
    console.log(token)

    return (
        <Routes>
            <Route exact path='/' element={<Login/>}/>
            <Route exact path='/main' element={<Main/>}/>
            <Route exact path='/main' element={token===null ? <Navigate to='/'/> : <Navigate to='/main'/>}/>
        </Routes>
    );
}

export default App;
