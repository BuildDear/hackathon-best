import React, { useState } from 'react';
import './login.scss';
import { Link } from 'react-router-dom'; 

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login Data Submitted:', formData);
        
    };

    return (
        <div className="wrapper login">
            <form onSubmit={handleSubmit} className="login__form">
                <h2 className="login__form__title">Увійти</h2>
                <div className="login__form__group">
                    <label htmlFor="email" className="login__form__group__caption">Email:</label>
                    <input type="email" id="email" name="email" className="login__form__group__input" value={formData.email} onChange={handleChange} placeholder="Введіть ваш Email" required />
                </div>
                <div className="login__form__group">
                    <label htmlFor="password" className="login__form__group__caption">Пароль:</label>
                    <input type="password" id="password" name="password" className="login__form__group__input" value={formData.password} onChange={handleChange} placeholder="Введіть ваш пароль" required />
                </div>

                
                <Link to="/" className="login__form__group__button" type="submit">Увійти</Link>
            </form>
        </div>
    );
}

export default Login;
