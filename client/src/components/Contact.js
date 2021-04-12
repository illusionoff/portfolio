import React, { useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';




export const Contact = () => {

    useEffect(() => {
        // M.AutoInit();
        const elems = document.querySelectorAll(".tooltipped");
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
            Writen me

                </div>
        </div>
    )
}
