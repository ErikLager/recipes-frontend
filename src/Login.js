import React from "react";

export default function Login() {
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