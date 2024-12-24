import React from 'react';
import LoginForm from '../components/organisms/LoginForm';
import "./LoginPage.css";
import Navbar from "../components/molecules/Navbar"

const LoginPage = () => {
    return (
        <div className="login-page container">

        
            <Navbar userImage={"https://www.shutterstock.com/image-vector/colorful-lion-head-pop-art-600nw-2261480715.jpg"}/>
            <h5 className="page-title text-center mt-3 mb-5"> Centro de experiencia de innovación </h5>

            <div className="login-image mx-auto">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPb8HCqquwaZT0dsBe36JLleLOUhGdwQyflw&s" alt="login-place-image"></img>
            </div>

            <h4 className="login-title text-center mt-3"> Iniciar sesion </h4>

            <LoginForm />
        </div>
    );
};

export default LoginPage;
