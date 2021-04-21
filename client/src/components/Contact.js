import React, { useEffect } from 'react';
import { Link } from 'react-scroll';
import M from 'materialize-css/dist/js/materialize.min.js';




export const Contact = () => {

    useEffect(() => {
        // M.AutoInit();
        const elems = document.querySelectorAll(".tooltipped");
        // eslint-disable-next-line no-unused-vars
        const instances = M.Tooltip.init(elems);


    }, []);

    return (
        <div>
            {/* <h2>Contact</h2> */}
            <h3 className="page-title white-text teal">Contact</h3>
            <div className="container">
                <p>
                    <a href="mailto:siniakoualex@gmail.ru" data-position="top" data-tooltip="Email" className="btn-floating btn-large waves-effect waves-light brown tooltipped">
                        <i className="fas fa-envelope-open fa-fw" ></i>
                    </a>
                    <a href="mailto:siniakoualex@gmail.ru" className="hoverline">siniakoualex@gmail.ru</a>
                </p>
                <p>
                    <a target="_blank" rel="noreferrer" href="https://github.com/illusionoff" data-position="top" data-tooltip="github" className="btn-floating btn-large waves-effect waves-light brown tooltipped">
                        <i className="fa fa-github-square fa-fw" ></i>
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://github.com/illusionoff" className="hoverline">https://github.com/illusionoff</a>
                </p>
                <p>

                    <Link activeClass="active" className="btn-floating btn-large waves-effect waves-light brown tooltipped " data-position="top" data-tooltip="Напишите мне" to="WriteMe" spy={true} smooth={true} duration={500} >
                        <i className="fas fa-comment-dots fa-fw fa-2x white-text text-darken-3"></i>Напишите мне</Link>

                    <Link activeClass="active" className="hoverline" to="WriteMe" spy={true} smooth={true} duration={500} >
                        Напишите мне</Link>
                </p>

            </div>
        </div>
    )
}
