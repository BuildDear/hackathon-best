import React from 'react';
import './home.scss';
import { Link } from 'react-router-dom'; 
import './../../components/reset.css'
import Help from './../../images/home/help.jpg'
import Medicine from './../../images/home/medicine.jpeg'
import Military from './../../images/home/Military.jpg'

function Home() {
  return (
    <div className="wrapper">
        <main className="main">
          <div className="main__container">
            <h2 className="main__container__title">#MilitaryHelp</h2>
            <p className="main__container__caption">
              Ми - компанія, що спеціалізується на <br/>
              підтримці військових у розвитку їхніх <br/>
              навичок. Наші програми надають доступ до <br/>
              передових методів навчання та розвитку <br/>
              особистості, що допомагає військовим <br/>
              досягати своїх цілей у службі та поза нею.
            </p>
            <Link to="/Login" className="main__container__button">
              Дізнатися більше
            </Link>
          </div>
        </main>

        <section className="whyus">
          <h2 className="whyus__title">Хто ми і яка у нас ціль?</h2>

          <div className="whyus__container">
            <span className="whyus__container__content">
              <h3 className="whyus__container__content__title">Ми - BlastCourse,</h3>
              <p className="whyus__container__content__caption">
                компанія якою є метою надання <br/>
                військовим інструментів та підтримки у <br/>
                розвитку їхніх навичок. Наша ціль <br/>
                полягає в тому, щоб забезпечити <br/>
                військових засобами, які допоможуть їм <br/>
                стати більш ефективними та <br/>
                компетентними в своїй службі, а також <br/>
                розвивати їх особистість для досягнення <br/>
                успіху в будь-яких сферах життя.

                <Link to="/Login" className="whyus__container__content__button">
                  Дізнатися більше
                </Link>
              </p>
            </span>

            <img src={ Help } alt="" className="whyus__container__image" />
          </div>
        </section>

        <section className="weoffer">
          <h2 className="weoffer__title">Що ми пропонуємо?</h2>

          <div className="weoffer__container">
            <div className="weoffer__container__left">
              <img src={ Medicine } alt="" className="weoffer__container__left__image" />
              <p className="weoffer__container__left__title">Медична підготовка</p>
              <p className="weoffer__container__left__caption">
                Наші курси з медичної підготовки <br/>
                призначені для забезпечення військових <br/>
                необхідними навичками у сфері медицини. <br/>
                Ми надаємо навчання з першої медичної <br/>
                допомоги, стресового менеджменту та <br/>
                військової медицини, що дозволяє нашим <br/>
                учасникам ефективно реагувати на будь- <br/>
                які ситуації на полі бою та в поза <br/>
                віськового ​​життя.
              </p>
            </div>

            <div className="weoffer__container__right">
              <h2 className="weoffer__container__right__title">Загальна підготовка</h2>
              <p className="weoffer__container__right__caption">
                Наші курси загальної підготовки <br/>
                спрямовані на розвиток навичок лідерства, <br/>
                тактичної майстерності, стратегічного <br/>
                мислення та комунікаційних вмінь   серед <br/>
                військових. За допомогою передових <br/>
                методів навчання наші учасники можуть <br/>
                ефективно розвивати свої здібності та <br/>
                готуватися до будь-яких викликів, які <br/>
                можуть зустріти на своєму шляху.
              </p>
              <img src={ Military } alt="" className="weoffer__container__right__image" />
            </div>
          </div>

          <Link to="/Login" className="weoffer__button">
            Дізнатися більше
          </Link>
        </section>
    </div>
  );
}

export default Home;