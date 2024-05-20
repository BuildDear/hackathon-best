import React, { useEffect, useState } from 'react';
import data, { IPeople } from './data';
import './slider.scss';
import prevArrow from './images/arrow-prev-svgrepo-com.svg';
import nextArrow from './images/arrow-next-svgrepo-com.svg';

const Slider = () => {
    const [people, setPeople] = useState(data);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const lastIndex = people.length - 1;
        if (currentIndex < 0) {
            setCurrentIndex(lastIndex);
        }
        if (currentIndex > lastIndex) {
            setCurrentIndex(0);
        }
    }, [currentIndex, people]);

    useEffect(() => {
        const slider = setInterval(() => setCurrentIndex((prevIndex) => prevIndex + 1), 10000);
        return () => clearInterval(slider);
    }, [currentIndex]);

    return (
        <div className="section__slaider">
            {people.map((person, personIndex) => {
                const { id, image, name, quote } = person;
                let position = 'nextSlide';
                if (personIndex === currentIndex) {
                    position = 'activeSlide';
                }
                if (personIndex === currentIndex - 1 || (currentIndex === 0 && personIndex === people.length - 1)) {
                    position = 'lastSlide';
                }

                return (
                    <article className={`section__slaider__article ${position}`} key={id}>
                        <img src={image} alt={name} className="section__slaider__img" />
                        <h4 className="section__slaider__name">{name}</h4>
                        <p className="section__slaider__text">{quote}</p>
                    </article>
                );
            })}
            <img src={prevArrow} alt="prev" className="prev" onClick={() => setCurrentIndex(currentIndex - 1)} />
            <img src={nextArrow} alt="next" className="next" onClick={() => setCurrentIndex(currentIndex + 1)} />
        </div>
    );
};

export default Slider;
