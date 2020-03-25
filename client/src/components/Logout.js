import React from 'react';
import { Button } from 'react-materialize';
import { useForm } from 'react-hook-form';
import API from "../utils/API";


function Login(props) {
    const { register, handleSubmit, watch, errors } = useForm()
    const onSubmit = data => {
        API.logout().then(function (response) {
            props.updateUser({
                loggedIn: false
            });
        })
    }
    const logout = () => {
        window.location.href = '/';
    }
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Button className="orange" type="submit" onClick={() => logout()}>
                    Logout
                </Button>
            </form>
        </>
    );
}

export default Login;