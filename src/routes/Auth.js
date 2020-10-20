import React, { useState } from "react";

const Auth = () => {
    const [Email, setEmail] = useState();
    const [Password, setPassword] = useState();
    const onSubmit = (e) => {
        e.preventDefault();
        console.log('click submit');
    };
    const onChange = (e) => {

        const {
            target: { name, value }
        } = e;

        if (name === 'email') {
            console.log(value);
            setEmail();
        } else if (name === 'password') {
            console.log(value);
            setPassword();
        }
    };
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    name="email"
                    value={Email}
                    onChange={onChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    value={Password}
                    onChange={onChange}
                    required
                />

                <input type="submit" value="Log In"></input>
                <div>
                    <button>Continue with Google</button>
                    <button>Continue with Github</button>
                </div>
            </form>
        </div>
    );

};

export default Auth;