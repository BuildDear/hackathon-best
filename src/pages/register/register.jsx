import React, { useState } from 'react';
import './register.scss'
import { Link } from 'react-router-dom'; 

function Register() {
    const [formData, setFormData] = useState({
        username: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        agreeToTerms: false,
        role: '', 
    });

    const handleChange = (e) => {
        const { name, type, checked, value } = e.target;
        const finalValue = type === 'checkbox' ? checked : value;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' && name === 'role' ? '' : finalValue,
            ...(name === 'role' && { role: value }),
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match.");
            return;
        }
        if (!formData.agreeToTerms) {
            alert("You must agree to the terms and conditions.");
            return;
        }
        console.log('Form Data Submitted:', formData);
    };

    return (
        <div className="wrapper register">
            <form onSubmit={handleSubmit} className="register__form">
                <h2 className="register__form__title">Реєстрація</h2>
                <div className="register__form__group">
                    <label htmlFor="username" className="register__form__group__caption">Ім'я:</label>
                    <input type="text" id="username" name="username" className="register__form__group__input" value={formData.username} onChange={handleChange} placeholder="Ім'я" required />
                </div>
                <div className="register__form__group">
                    <label htmlFor="lastName" className="register__form__group__caption">Прізвище:</label>
                    <input type="text" id="lastName" name="lastName" className="register__form__group__input" value={formData.lastName} onChange={handleChange} placeholder="Прізвище" required />
                </div>
                <div className="register__form__group">
                    <label htmlFor="email" className="register__form__group__caption">Email:</label>
                    <input type="email" id="email" name="email" className="register__form__group__input" value={formData.email} onChange={handleChange} placeholder="Email" required />
                </div>
                <div className="register__form__group">
                    <label htmlFor="password" className="register__form__group__caption">Пароль:</label>
                    <input type="password" id="password" name="password" className="register__form__group__input" value={formData.password} onChange={handleChange} placeholder="Пароль" required />
                </div>
                <div className="register__form__group">
                    <label htmlFor="confirmPassword" className="register__form__group__caption">Підтвердіть Пароль:</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" className="register__form__group__input" value={formData.confirmPassword} onChange={handleChange} placeholder="Підтвердіть пароль" required />
                </div>
                <div className="register__form__group__checkbox">
                    <label className="register__form__group__checkbox__item">
                        <input type="checkbox" name="role" value="user" checked={formData.role === 'user'} onChange={handleChange} />
                        Користувач
                    </label>
                    <label className="register__form__group__checkbox__item">
                        <input type="checkbox" name="role" value="creator" checked={formData.role === 'creator'} onChange={handleChange} />
                        Ментор
                    </label>
                </div>

                <div className="register__form__group__agree">
                    <label className="register__form__group__agree__item">
                        <input type="checkbox" name="agreeToTerms" checked={formData.agreeToTerms} onChange={handleChange} />
                        Я згоден з умовами користування
                    </label>
                </div>


                <Link to="/" className="register__form__group__button" type="submit">Зареєструватися</Link>
            </form>
        </div>
    );
}

export default Register;
