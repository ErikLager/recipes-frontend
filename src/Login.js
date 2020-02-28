import React, { useState } from "react";
import Start from "./App";

export default function Login(props) {
    const [login, setlogin] = React.useState(0);

    function navigate(id){
        console.log(`Navigate ${id}`);
        setlogin(id);
    }
    let startpage = null;

    if (login === 0){
        startpage = <Login navigate={navigate}/>
    }

    return (
    <div className="App">
    <p id="username">Username:</p>
    <input type="text" id="uname"></input> <br />
    <p id="password">Password:</p>
    <input type="password" id="pword" /> <br />
    <button type="submit">Submit</button>
    </div>
    )
}