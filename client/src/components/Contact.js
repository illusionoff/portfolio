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
      <h3 className="page-title white-text">Contact</h3>
      <div className="container">
        <p>
          <a href="mailto:siniakoualiaksandr@gmail.com" data-position="top" data-tooltip="Email" className="btn-floating btn-large waves-effect waves-light brown tooltipped">
            <i className="fas fa-envelope-open fa-fw" ></i>
          </a>
          <a href="mailto:siniakoualex@gmail.com" className="hoverline">siniakoualex@gmail.com</a>
        </p>
        <p>
          <a target="_blank" rel="noreferrer" href="https://github.com/illusionoff" data-position="top" data-tooltip="github" className="btn-floating btn-large waves-effect waves-light brown tooltipped">
            <i className="fa fa-github-square fa-fw" ></i>
          </a>
          <a target="_blank" rel="noreferrer" href="https://github.com/illusionoff" className="hoverline">https://github.com/illusionoff</a>
        </p>
        <p>
          <a className="btn-floating btn-large waves-effect waves-light brown" href="tel:+78142332211">   <i className="fa fa-phone-alt fa-fw" ></i></a>
          <a href="tel:+375292991308" className="hoverline">МТС: +375(29)-299-13-08</a>
        </p>
        <p className="test-link-mini">

          <Link activeClass="active" className="btn-floating btn-large waves-effect waves-light brown tooltipped offset " data-position="top" data-tooltip="Напишите мне" to="WriteMe" spy={true} smooth={true} duration={500} offset={-56} >
            <i className="fas fa-comment-dots fa-fw fa-2x white-text text-darken-3"></i>Напишите мне на сайте</Link>

          <Link activeClass="active" className="hoverline" to="WriteMe" spy={true} smooth={true} duration={500} offset={-56} >
            Напишите мне на сайте</Link>
        </p>
        <p className="test-link-screen">
          <Link activeClass="active" className="btn-floating btn-large waves-effect waves-light brown tooltipped" data-position="top" data-tooltip="Напишите мне" to="WriteMe" spy={true} smooth={true} duration={500} offset={0} >
            <i className="fas fa-comment-dots fa-fw fa-2x white-text text-darken-3"></i>Напишите мне на сайте</Link>

          <Link activeClass="active" className="hoverline" to="WriteMe" spy={true} smooth={true} duration={500} offset={0} >
            Напишите мне на сайте</Link>
        </p>

      </div>
    </div>
  )
}
