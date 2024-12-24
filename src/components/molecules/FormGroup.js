import React, { useState } from 'react';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import Spinner from '../atoms/Spinner';
import './FormGroup.css';

const FormGroup = ({ onSubmit }) => {
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();  // Make sure we prevent default form submission behavior

        if (loading) return;  // Prevent further execution if already loading

        setLoading(true);  // Show spinner

        // Simulate a loading time (6-8 seconds)
        setTimeout(() => {
            setLoading(false);  // Stop loading
            if (onSubmit) {
                onSubmit(e);  // Pass the event to onSubmit
            }
        }, 6000);  // Adjust the time for the spinner (6 seconds here)
    };

    return (
        <form onSubmit={handleSubmit}>  {/* Attach handleSubmit to the form onSubmit */}
            <div className="user-input-container mb-4">
                <div className="user-input-title-container d-flex gap-2 mx-auto text-center col-9 col-md-4 mb-1">
                    <FontAwesomeIcon icon={faEnvelope} className='my-auto'/>
                    <p className="my-auto"> Correo </p>
                </div>
                
                <div className="user-input-field-container col-9 col-md-4 mx-auto">
                    <Input type="text" placeholder="Correo" className="w-100" />
                </div>
            </div>

            <div className="password-input-container">
                <div className="user-password-title-container d-flex gap-2 mx-auto text-center col-9 col-md-4 mb-1">
                    <FontAwesomeIcon icon={faLock} className='my-auto'/>
                    <p className="my-auto"> Contraseña </p>
                </div>
                
                <div className="user-password-field-container col-9 col-md-4 mx-auto">
                    <Input type="password" placeholder="Contraseña" className="w-100" />
                </div>
            </div>

            <div className="button-login-container col-9 col-md-4 mx-auto mt-4 mb-4">
                {loading ? (
                    <Spinner /> 
                ) : (
                    <Button label="Iniciar sesion" type="submit" />
                )}
            </div>
        </form>
    );
};

export default FormGroup;
