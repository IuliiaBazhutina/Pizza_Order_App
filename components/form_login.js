import { createContext, useState } from 'react';

export const UserContext = createContext();

function LogIn({ children }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    const nameValidation = (name) => {
        if (name) { setName(name); setMessage("") }
        else { setMessage("Please enter your name") }
    }


    const emailValidation = (email) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (email && emailRegex.test(email)) { setEmail(email); setMessage("") }
        else if (email == "") {
            setMessage("Please enter your email")
        } else {
            setMessage("Please enter valid email")
        }
    }


    // Handle login form submission
    const handleLogin = (e) => {
        e.preventDefault();
        if (name && email) {
            setIsLoggedIn(true)
            setMessage("");
            document.getElementById('form').reset();
        } else if
            (!name) { setMessage("Please enter your name") }
        else { setMessage("Please enter your email") }
    }



    return (
        <div>
            <h2>Login</h2>

            <form onSubmit={handleLogin} id="form">

                <label>Name</label>
                <input
                    type='text'
                    onBlur={(e) => nameValidation(e.target.value)} />

                <label>Email</label>
                <input
                    type='email'
                    onBlur={(e) => emailValidation(e.target.value)}
                />

                <button type='submit'>Log In</button>
            </form>
            <p>{message}</p>
            {/* renders only if user is logged in */}
            {isLoggedIn && <h2>Welcome, {name}!</h2>}

            <UserContext.Provider value={{ name, email }}>
                {children}
            </UserContext.Provider>
        </div>
    );
}

export default LogIn;