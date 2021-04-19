import React from 'react';



export const Education = () => {
    return (
        <div>
            <h3 className="page-title white-text teal">Education</h3>
            <div className="container">



                <div className="row">
                    <div className="col s12 m6">
                        <div className="card">
                            <div className="card-content">
                                <p>
                                    <span className="card-title">
                                        <a href="https://www.psu.by" className="teal-text hoverline">Полоцкий государственный университет</a>
                                    </span>
                                </p>
                                <p className="grey-text">Беларусь, Новополоцк </p>
                                <ul>
                                    <li>Факультет компьютерных наук и электроники</li>
                                    <li>Cпециальность: "Моделирование и компьютерное проектирование радиоэлектронных средств"</li>
                                    <li>Инженер по радиоэлектронике</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col s12 m6">

                        <div className="card">
                            <div className="card-content">
                                <p>
                                    <span className="card-title">
                                        <a href="https://www.vgpt.vitebsk.by" className="teal-text hoverline">Витебский государственный политехнический колледж</a>
                                    </span>
                                </p>
                                <p className="grey-text">Беларусь, Витебск </p>
                                <ul>
                                    <li>Cпециальность: "Проектирование и производство радиоэлектронных средств"</li>
                                    <li>техник-технолог</li>
                                </ul>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </div>
    )
}
