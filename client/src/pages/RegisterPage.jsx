import { useState } from "react";

export default function RegisterPage () {
    const [username, setUsername] = useState('');
    return (
        <form className="Register">
            <h1>Register</h1>
            <input type="text" placeholder="username"/>
            <input type="password" placeholder="password"/>
            <button>Register</button>
        </form>
    );
}
