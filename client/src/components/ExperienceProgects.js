import React, { useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';



export const ExperienceProgects = () => {

    useEffect(() => {
        // M.AutoInit();
        const elems = document.querySelectorAll(".tooltipped");
        // eslint-disable-next-line no-unused-vars
        const instances = M.Tooltip.init(elems);


    }, []);

    return (
        <>
            <h3 className="page-title white-text teal">Experience & Progects</h3>
            <div className="container">
                <div className="card">
                    <div className="card-content">
                        <div className="row">
                            <div className="col s12 m2">
                                <a href="https://178.20.42.150.sslip.io" target="_blanc" >
                                    <img alt="HomeMoneyCalc logo" src="https://178.20.42.150.sslip.io/favicon.png" className="responsive-img center-block"></img>
                                </a>
                            </div>
                            <div className="col s12 m10">
                                <p>
                                    <span className="card-title">
                                        Разработка Pet проекта
                                        {/* проекта HomeMoneyCalc */}
                                        {/* Back-end nodejs express  */}
                                    </span>

                                </p>
                            </div>
                        </div>
                        <div className="role">Back-end </div>
                        <p>
                            <em className="gray-text">
                                <a href="https://178.20.42.150.sslip.io" target="_blanc" >HomeMoneyCalc </a>
                             Сервис позволяющий вести учет расходов и доходов</em>
                        </p>
                        <div className="card-project">
                            <div className="row">
                                <div className="col s6 m3">
                                    <div className="card-image waves-effect waves-block waves-light">
                                        <img alt="Screenshot of Homemoneycal web app" src="images/Homemoneycal_1.jpg" className="activator"></img>
                                    </div>
                                </div>
                                <div className="col s6 m3">
                                    <div className="card-image waves-effect waves-block waves-light">
                                        <img alt="Screenshot of Homemoneycal web app" src="images/Homemoneycal_2.png" className="activator"></img>
                                    </div>
                                </div>
                                <div className="col s6 m3">
                                    <div className="card-image waves-effect waves-block waves-light">
                                        <img alt="Screenshot of Homemoneycal web app" src="images/Homemoneycal_3.png" className="activator"></img>
                                    </div>
                                </div>
                                <div className="col s6 m3">
                                    <div className="card-image waves-effect waves-block waves-light">
                                        <img alt="Screenshot of Homemoneycal web app" src="images/Homemoneycal_4.png" className="activator"></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h6>Основные функции сервиса</h6>
                        <ul>
                            <li>Адаптивный дизайн</li>
                            <li>Авторизация через Google, Facebook, по паролю</li>
                            <li>Отправка письма на Email о регистрации</li>
                            <li>Восстановление забытого пароля через Email</li>
                            <li>Создание пользовательских категорий расходов и доходов, задание цвета категорий</li>
                            <li>Вывод статистики по расходам / доходам за день, месяц, год</li>
                            <li>Возможность редактирования уже имеющихся данных</li>
                            <li>Выбор способа отображения информации (диаграмма, таблица, диаграмма и таблица)</li>
                            <li>Изменение порядка следования категорий</li>
                        </ul>
                        <h6 >Основные технологии, библиотеки</h6>
                        <ul className="border-bottom">
                            <li>Nodejs, Express, MongoDB, mongoose, handlebars, materializecss  </li>
                            <li>Nginx, pm2</li>
                            <li>passport.js, mocha, eslint, prettier  </li>
                        </ul>
                        <div className="spravca">
                            <input type="checkbox" id="hd-1" className="reference" />
                            <h6>Дополнительные технологии, библиотеки</h6>
                            <label htmlFor="hd-1" ><span>Показать / Скрыть</span></label>
                            <span className="story">
                                <table className="striped ">
                                    <tbody>
                                        <tr>
                                            <td>express-validator</td>
                                            <td>валидация форм</td>
                                        </tr>
                                        <tr>
                                            <td>winston</td>
                                            <td>логирование</td>
                                        </tr>
                                        <tr>
                                            <td>helmet</td>
                                            <td>защита приложений express через различные заголовки HTTP</td>
                                        </tr>
                                        <tr>
                                            <td>nodemailer</td>
                                            <td>отправка почты</td>
                                        </tr>
                                        <tr>
                                            <td>csurf</td>
                                            <td>для защиты сеансов сессии от подделки- взлома</td>
                                        </tr>
                                        <tr>
                                            <td>connect-mongodb-session</td>
                                            <td>для хранения сеансов в MongoDB</td>
                                        </tr>
                                        <tr>
                                            <td>bcrypt</td>
                                            <td>хеширования паролей</td>
                                        </tr>
                                        <tr>
                                            <td>crypto</td>
                                            <td>хеширования строки для изменения забытого пароля</td>
                                        </tr>
                                        <tr>
                                            <td>connect-flash</td>
                                            <td>для хранения и передачи сообщений</td>
                                        </tr>
                                        <tr>
                                            <td>moment-timezone</td>
                                            <td>поддержка часовых поясов IANA для Moment.js</td>
                                        </tr>
                                        <tr>
                                            <td>nodemon</td>
                                            <td>автоматического перезапуска проекта при изменении файлов проекта в dev</td>
                                        </tr>
                                        <tr>
                                            <td>underscore</td>
                                            <td>библиотека функций. Использую для проверки на корректную дату _.isDate(date)</td>
                                        </tr>
                                        <tr>
                                            <td>fontawesomecom</td>
                                            <td>иконки</td>
                                        </tr>
                                        <tr>
                                            <td>chart.js</td>
                                            <td>диаграммы</td>
                                        </tr>

                                    </tbody>
                                </table>
                            </span>
                        </div>

                        <h6 className="linksName">Ссылки на проект</h6>
                        <div className="row">
                            <div className="col s12 m2 link">
                                <a href="https://178.20.42.150.sslip.io" target="_blanc" data-position="top" data-tooltip="HomeMoneyCalc" className="tooltipped">
                                    <img alt="HomeMoneyCalc logo" src="https://178.20.42.150.sslip.io/favicon.png" className="responsive-img center-block" width="56" height="56"></img>
                                </a>
                            </div>
                            <div className="col s12 m10 link text">
                                <a href="https://178.20.42.150.sslip.io" target="_blanc" >Сайт HomeMoneyCalc</a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12 m2 link">
                                <a target="_blank" rel="noreferrer" href="https://github.com/illusionoff/homemoneycalc" data-position="top" data-tooltip="github" className="btn-floating btn-large waves-effect waves-light brown tooltipped">
                                    <i className="fa fa-github-square fa-fw" ></i>
                                </a>
                            </div>
                            <div className="col s12 m10 link text">
                                <a target="_blank" rel="noreferrer" href="https://github.com/illusionoff/homemoneycalc" className="hoverline">https://github.com/illusionoff/homemoneycalc</a>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="card">
                    <div className="card-content">
                        <div className="row">
                            <div className="col s12 m2">
                                {/* <a href="https://178.20.42.150.sslip.io" target="_blanc" > */}
                                <img alt="HomeMoneyCalc logo" src="images/icons8-64-portfolio.png" height="60" width="60" className="responsive-img center-block"></img>
                                {/* </a> */}
                            </div>
                            <div className="col s12 m10">
                                <p>
                                    <span className="card-title">
                                        Разработка сайта портфолио
                                    </span>

                                </p>
                            </div>
                        </div>
                        <div className="role">Full Stack </div>
                        <p>
                            <em className="gray-text"> <span className="blue-text text-darken-2"> Siniakoualex.com   </span>
                            Сайт портфолио на котором Вы находитесь</em>
                        </p>
                        <div className="card-project">
                            <div className="row">
                                <div className="col s6 m3">
                                    <div className="card-image waves-effect waves-block waves-light">
                                        <img alt="Screenshot of Homemoneycal web app" src="images/Homemoneycal_1.jpg" className="activator"></img>
                                    </div>
                                </div>
                                <div className="col s6 m3">
                                    <div className="card-image waves-effect waves-block waves-light">
                                        <img alt="Screenshot of Homemoneycal web app" src="images/Homemoneycal_2.png" className="activator"></img>
                                    </div>
                                </div>
                                <div className="col s6 m3">
                                    <div className="card-image waves-effect waves-block waves-light">
                                        <img alt="Screenshot of Homemoneycal web app" src="images/Homemoneycal_3.png" className="activator"></img>
                                    </div>
                                </div>
                                <div className="col s6 m3">
                                    <div className="card-image waves-effect waves-block waves-light">
                                        <img alt="Screenshot of Homemoneycal web app" src="images/Homemoneycal_4.png" className="activator"></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h6>Основные возможности и особенности</h6>
                        <ul>
                            <li>Адаптивный дизайн</li>
                            <li>Авторизация через Google, Facebook, по паролю</li>
                            <li>Отправка письма на Email о регистрации</li>
                            <li>Восстановление забытого пароля через Email</li>
                        </ul>
                        <h6 >Основные технологии, библиотеки</h6>
                        <ul className="border-bottom">
                            <li>Nodejs, Express, PostgreSQL, React, mongoose, materializecss  </li>
                            <li>Nginx, pm2</li>
                            <li>eslint, prettier</li>
                        </ul>
                        <div className="spravca">
                            <input type="checkbox" id="hd-2" className="reference" />
                            <h6>Дополнительные технологии, библиотеки</h6>
                            <label htmlFor="hd-2" ><span>Показать / Скрыть</span></label>
                            <span className="story">
                                <table className="striped ">
                                    <tbody>
                                        <tr>
                                            <td>express-validator</td>
                                            <td>валидация форм</td>
                                        </tr>
                                        <tr>
                                            <td>winston</td>
                                            <td>логирование</td>
                                        </tr>
                                        <tr>
                                            <td>helmet</td>
                                            <td>защита приложений express через различные заголовки HTTP</td>
                                        </tr>
                                        <tr>
                                            <td>nodemailer</td>
                                            <td>отправка почты</td>
                                        </tr>
                                        <tr>
                                            <td>csurf</td>
                                            <td>для защиты сеансов сессии от подделки- взлома</td>
                                        </tr>
                                        <tr>
                                            <td>connect-mongodb-session</td>
                                            <td>для хранения сеансов в MongoDB</td>
                                        </tr>
                                        <tr>
                                            <td>bcrypt</td>
                                            <td>хеширования паролей</td>
                                        </tr>
                                        <tr>
                                            <td>crypto</td>
                                            <td>хеширования строки для изменения забытого пароля</td>
                                        </tr>
                                        <tr>
                                            <td>connect-flash</td>
                                            <td>для хранения и передачи сообщений</td>
                                        </tr>
                                        <tr>
                                            <td>moment-timezone</td>
                                            <td>поддержка часовых поясов IANA для Moment.js</td>
                                        </tr>
                                        <tr>
                                            <td>nodemon</td>
                                            <td>автоматического перезапуска проекта при изменении файлов проекта в dev</td>
                                        </tr>
                                        <tr>
                                            <td>underscore</td>
                                            <td>библиотека функций. Использую для проверки на корректную дату _.isDate(date)</td>
                                        </tr>
                                        <tr>
                                            <td>fontawesomecom</td>
                                            <td>иконки</td>
                                        </tr>
                                        <tr>
                                            <td>chart.js</td>
                                            <td>диаграммы</td>
                                        </tr>

                                    </tbody>
                                </table>
                            </span>
                        </div>

                        <h6 className="linksName">Ссылки на проект</h6>
                        <div className="row">
                            <div className="col s12 m2 link">
                                <a target="_blank" rel="noreferrer" href="https://github.com/illusionoff/portfolio" data-position="top" data-tooltip="github" className="btn-floating btn-large waves-effect waves-light brown tooltipped">
                                    <i className="fa fa-github-square fa-fw" ></i>
                                </a>
                            </div>
                            <div className="col s12 m10 link text">
                                <a target="_blank" rel="noreferrer" href="https://github.com/illusionoff/portfolio" className="hoverline">https://github.com/illusionoff/portfolio</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
