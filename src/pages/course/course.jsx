import React from 'react';
import './course.scss';
import { Link } from 'react-router-dom'; 

function Courses() {
    return (
        <div className="wrapper">
            <div className="course">
                <h2 className="course__title">Курси</h2>
                <p className="course__caption">
                    Курси віськової підгтовки з нуля.
                </p>

                <div className="course__container">
                    <div className="course__container__card">
                        <div className="course__container__card__date">
                            <p className="course__container__card__date__author">Ім'я</p>
                            <p className="course__container__card__date__duration">3 тиждня</p>
                        </div>

                        <h3 className="course__container__card__title">Базовий бойовий тренінг </h3>
                        <p className="course__container__card__discription">
                            який часто називають військово-навчальним табором, призначений для ознайомлення новобранців з життям у армії. На цьому курсі вчать основних військових навичок і фізичної підготовки, а також закладають основні цінності армії.
                        </p>

                        <Link to="/Login" className="course__container__card__button">Детальніше</Link>
                    </div>

                    <div className="course__container__card">
                        <div className="course__container__card__date">
                            <p className="course__container__card__date__author">Ім'я</p>
                            <p className="course__container__card__date__duration">2 тиждня</p>
                        </div>

                        <h3 className="course__container__card__title">Школа кандидатів на офіцери</h3>
                        <p className="course__container__card__discription">
                            це інтенсивна програма, призначена для тренування, оцінки, аналізу та розвитку майбутніх офіцерів у армії США. Кандидати, які успішно завершують курс, стають офіцерами комісії.
                        </p>

                        <Link to="/Login" className="course__container__card__button">Детальніше</Link>
                    </div>

                    <div className="course__container__card">
                        <div className="course__container__card__date">
                            <p className="course__container__card__date__author">Ім'я</p>
                            <p className="course__container__card__date__duration">2 тиждня</p>
                        </div>

                        <h3 className="course__container__card__title">Пілотське навчання Військово-повітряних сил</h3>
                        <p className="course__container__card__discription">
                        Програма пілотського навчання призначена для навчання кандидатів на пілотів основ управління літаками. Курс включає теоретичне навчання, тренажери та практичні польоти.
                        </p>

                        <Link to="/Login" className="course__container__card__button">Детальніше</Link>
                    </div>

                    <div className="course__container__card">
                        <div className="course__container__card__date">
                            <p className="course__container__card__date__author">Ім'я</p>
                            <p className="course__container__card__date__duration">4 тиждня</p>
                        </div>

                        <h3 className="course__container__card__title">Навчання Navy SEAL</h3>
                        <p className="course__container__card__discription">
                            Цей високовимогливий курс готує кандидатів до елітних команд SEAL американського військово-морського флоту. Навчання включає фізичну підготовку, бойове занурення, ведення бою на суші та навчання з парашутування.
                        </p>

                        <Link to="/Login" className="course__container__card__button">Детальніше</Link>
                    </div>
                    <div className="course__container__card">
                        <div className="course__container__card__date">
                            <p className="course__container__card__date__author">Ім'я</p>
                            <p className="course__container__card__date__duration">5 тижднів</p>
                        </div>

                        <h3 className="course__container__card__title">Курс офіцерів піхоти морської піхоти</h3>
                        <p className="course__container__card__discription">
                            IOC — це інтенсивний курс, призначений для тренування та оцінки офіцерів морської піхоти для служби в піхоті. Курс фокусується на лідерстві, тактиці піхоти та фізичних та ментальних викликах бою.
                        </p>

                        <Link to="/Login" className="course__container__card__button">Детальніше</Link>
                    </div>
                    <div className="course__container__card">
                        <div className="course__container__card__date">
                            <p className="course__container__card__date__author">Ім'я</p>
                            <p className="course__container__card__date__duration">3 тиждня</p>
                        </div>

                        <h3 className="course__container__card__title">Курс кваліфікації спеціальних сил</h3>
                        <p className="course__container__card__discription">
                            Часто називаний "Q Course", ця програма тренує персонал армії для призначення до спеціальних сил США. Навчання включає вивчення мов, тактику неконвенційної війни та навички виживання.
                        </p>

                        <Link to="/Login" className="course__container__card__button">Детальніше</Link>
                    </div>
                </div>
            </div>
            
        </div>
    );
  }
  
  export default Courses;