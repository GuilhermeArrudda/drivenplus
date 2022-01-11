import "./css/reset.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import UserContext from "./components/Contexts/UserContext";
import { useEffect, useState } from "react";

export default function App() {

    const [userData, setUserData] = useState("");

    useEffect (() => {
        const userOnLocalStorage = JSON.parse(localStorage.getItem("userInfo"));

        setUserData(userOnLocalStorage)
    }, [])

    return (
        <UserContext.Provider value ={{userData, setUserData}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginPage/>}></Route>
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    )
}