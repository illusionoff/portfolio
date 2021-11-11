import React, { useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

export const Projects = () => {

  useEffect(() => {
    // M.AutoInit();
    const elems = document.querySelectorAll(".tooltipped");
    // eslint-disable-next-line no-unused-vars
    const instances = M.Tooltip.init(elems);
  }, []);

  return (
    <>
      <h3 className="page-title white-text">Projects</h3>
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
                  <span className="card-title ">
                    Разработка HomeMoneyCalc
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
                    <img alt="Screenshot of Homemoneycal web app" src="images/Homemoneycal_1.png" className="activator"></img>
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
              <li>Nodejs, Express, npm, REST API </li>
              <li>MongoDB, mongoose</li>
              <li>materializecss, handlebars</li>
              <li>Nginx, pm2</li>
              <li>passport.js, mocha</li>
              <li>eslint, prettier  </li>
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
                <a target="_blank" rel="noreferrer" href="https://github.com/illusionoff/homemoneycalcnew" data-position="top" data-tooltip="github" className="btn-floating btn-large waves-effect waves-light brown tooltipped">
                  <i className="fa fa-github-square fa-fw" ></i>
                </a>
              </div>
              <div className="col s12 m10 link text calcnew text-newline">
                <a target="_blank" rel="noreferrer" href="https://github.com/illusionoff/homemoneycalcnew" className="hoverline">https://github.com/illusionoff/homemoneycalcnew</a>
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

            </div>
            <h6>Основные возможности и особенности</h6>
            <ul>
              <li>Адаптивный дизайн</li>
              <li>Отправка письма с сообщением из формы обратной связи на мой Email</li>
              <li>Отправка краткого SMS сообщения на мой номер телефона</li>
              <li>Запись сообщений обратной связи в БД</li>
            </ul>
            <h6 >Основные технологии, библиотеки</h6>
            <ul className="border-bottom">
              <li>Nodejs, Express, npm, REST API </li>
              <li>React, materializecss</li>
              <li>PostgreSQL</li>
              <li>Nginx, pm2</li>
            </ul>
            <div className="spravca">
              <input type="checkbox" id="hd-2" className="reference" />
              <h6>Дополнительные технологии, библиотеки</h6>
              <label htmlFor="hd-2" ><span>Показать / Скрыть</span></label>
              <span className="story">
                <table className="striped ">
                  <tbody>
                    <tr>
                      <td>config</td>
                      <td>библиотека конфигурационных данных</td>
                    </tr>
                    <tr>
                      <td>react-scroll</td>
                      <td>библиотека удобного скроллинга по ссылкам</td>
                    </tr>
                    <tr>
                      <td>express-validator</td>
                      <td>валидация форм</td>
                    </tr>
                    <tr>
                      <td>nodemailer</td>
                      <td>отправка почты</td>
                    </tr>
                    <tr>
                      <td>nodemon</td>
                      <td>автоматического перезапуска проекта при изменении файлов проекта в dev</td>
                    </tr>
                    <tr>
                      <td>fontawesomecom</td>
                      <td>иконки</td>
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
        <div className="card">
          <div className="card-content">
            <div className="row">
              <div className="col s12 m2">
                <a href="http://criptoarbitr.178.20.42.150.sslip.io/" target="_blanc" >
                  <img alt="CriptoArbitr logo" src="images/favicon_criptoarbitr.png" className="responsive-img center-block"></img>
                </a>
              </div>
              <div className="col s12 m10">
                <p>
                  <span className="card-title ">
                    Разработка CriptoArbitr
                  </span>
                </p>
              </div>
            </div>
            <div className="role">Full Stack</div>
            <p>
              <em className="gray-text">
                <a href="http://criptoarbitr.178.20.42.150.sslip.io/" target="_blanc" >CriptoArbitr </a>
                Исседование возможности извлечения прибыли на разнице курсов между двумя криптобиржами (межбиржевой арбитраж).</em>
            </p>
            <div className="card-project">
              <div className="row">
                <div className="col s6 m3">
                  <div className="card-image waves-effect waves-block waves-light">
                    <img alt="Screenshot of CriptoArbitr web app" src="images/criptoarbitr_1.png" className="activator"></img>
                  </div>
                </div>
                <div className="col s6 m3">
                  <div className="card-image waves-effect waves-block waves-light">
                    <img alt="Screenshot of CriptoArbitr web app" src="images/criptoarbitr_2.png" className="activator"></img>
                  </div>
                </div>
                <div className="col s12 m6">
                  <div className="card-image waves-effect waves-block waves-light">
                    <img alt="Screenshot of CriptoArbitr web app" src="images/criptoarbitr_3.png" className="activator"></img>
                  </div>
                </div>

              </div>
            </div>
            <h6>Основные функции сервиса</h6>
            <ul>
              <li>Получение данных котировок в реальном времени по спотовому рынку выбранной криптовалюты с бирж Gate.io и bithumb.pro</li>
              <li>Получение данных по комиссиям криптобиржи   bithumb.pro запись данных в .csv файл о котировках, дополнительных параметрах</li>
              <li>Активация записи данных в .csv файл по заданному значению необходимой прибыли  и выбор направления торговли</li>
              <li>Сбор статитстики и анализ скорости поступления сигналов с биржи bithumb.pro</li>
              <li>Загрузка актуальных файлов для визуализации с каталога запущенного проекта</li>
              <li>Визуализация данных в виде диаграмм</li>
              <li>Адаптивный дизайн</li>
            </ul>
            <h6 >Основные технологии, библиотеки</h6>
            <ul className="border-bottom">
              <li>Nodejs, Express, npm </li>
              <li>React, materializecss, react-chartjs-2</li>
              <li>Nginx, pm2</li>
              <li>ws, reconnecting-websocket</li>
              <li>mocha</li>
              <li>eslint</li>
            </ul>
            <div className="spravca">
              <input type="checkbox" id="hd-3" className="reference" />
              <h6>Дополнительные технологии, библиотеки</h6>
              <label htmlFor="hd-3" ><span>Показать / Скрыть</span></label>
              <span className="story">
                <table className="striped ">
                  <tbody>
                    <tr>
                      <td>config</td>
                      <td>библиотека конфигурационных данных</td>
                    </tr>
                    <tr>
                      <td>csv-parse</td>
                      <td>парсинг .csv файлов</td>
                    </tr>
                    <tr>
                      <td>express-validator</td>
                      <td>валидация форм</td>
                    </tr>
                    <tr>
                      <td>kill-port</td>
                      <td>уничтожение процесса на определенном порту</td>
                    </tr>
                    <tr>
                      <td>node-fetch</td>
                      <td>аналог window.fetchAPI для node.js</td>
                    </tr>
                    <tr>
                      <td>concurrently</td>
                      <td>одновременное выполнение нескольких команд, процессов</td>
                    </tr>
                    <tr>
                      <td>cross-env</td>
                      <td>использование переменных среды на разных платформах</td>
                    </tr>
                    <tr>
                      <td>nodemon</td>
                      <td>автоматического перезапуска проекта при изменении файлов проекта в dev</td>
                    </tr>
                    <tr>
                      <td>chart.js</td>
                      <td>конфигурирование диаграмм и вывод на canvas</td>
                    </tr>

                  </tbody>
                </table>
              </span>
            </div>

            <h6 className="linksName">Ссылки на проект</h6>
            <div className="row">
              <div className="col s12 m2 link">
                <a href="http://criptoarbitr.178.20.42.150.sslip.io/" target="_blanc" data-position="top" data-tooltip="CriptoArbitr" className="tooltipped">
                  <img alt="CriptoArbitr logo" src="images/favicon_criptoarbitr.png" className="responsive-img center-block" width="56" height="56"></img>
                </a>
              </div>
              <div className="col s12 m10 link text">
                <a href="http://criptoarbitr.178.20.42.150.sslip.io/" target="_blanc" >Сайт проекта CriptoArbitr</a>
              </div>
            </div>
            <div className="row">
              <div className="col s12 m2 link">
                <a target="_blank" rel="noreferrer" href="https://github.com/illusionoff/reactcriptoarbitr_test_squeeze" data-position="top" data-tooltip="github" className="btn-floating btn-large waves-effect waves-light brown tooltipped">
                  <i className="fa fa-github-square fa-fw" ></i>
                </a>
              </div>
              <div className="col s12 m10 link text text-newline" >
                <a target="_blank" rel="noreferrer" href="https://github.com/illusionoff/reactcriptoarbitr_test_squeeze" className="hoverline">https://github.com/illusionoff/reactcriptoarbitr_test_squeeze</a>
              </div>
            </div>
          </div>
        </div>


      </div>
    </>
  )
}
