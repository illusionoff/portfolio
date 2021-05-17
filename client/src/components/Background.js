import React from 'react';



export const Background = () => {
  return (
    <div>
      <h3 className="page-title white-text">Background</h3>
      <div className="container">



        <div className="row">
          <div className="col s12 m6">
            <div className="card">
              <div className="card-content">
                <p>
                  <span className="card-title">
                    <a target="_blank" rel="noreferrer" href="https://www.vitebsk.energo.by/ru/o-predpriyatii/filials/lukomlskaia-gres/" className="teal-text hoverline">ЛГРЭС Лукомльская электростанция 2011-2021 г.</a>
                  </span>
                </p>
                <p className="grey-text">Беларусь, г.Новолукомль </p>
                <ul>
                  <li>Инженер электроник 1-категории группа информационных подсистем</li>
                  <li>Обслуживание систем автоматического управления генераторных установок </li>
                  <li>Мониторинг параметров </li>
                  <li>Участвовал в вводе, наладке систем автоматического управления  </li>
                  <li>Программирование контроллеров систем автоматического управления и маниторинга</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col s12 m6">

            <div className="card">
              <div className="card-content">
                <p>
                  <span className="card-title">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a target="_blank" rel="noreferrer" href="https://www.unidoors.by/" className="teal-text hoverline">ЮНИДОРС производство межкомнатных дверей, окон и другое 2005-2010 г.</a>
                  </span>
                </p>
                <p className="grey-text">Беларусь, г. Новолукомль </p>
                <ul>
                  <li>Оператор станков  с ЧПУ </li>
                  <li>Различные рабочие специальности</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
