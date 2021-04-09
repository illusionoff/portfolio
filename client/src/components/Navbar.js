import React from 'react';
import { useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { Link, Events, animateScroll as scroll } from 'react-scroll';
import M from 'materialize-css/dist/js/materialize.min.js';



export const Navbar = () => {
    // className Navbar extends Component {

    useEffect(() => {
        // M.AutoInit();
        const elems = document.querySelectorAll(".sidenav");
        const instances = M.Sidenav.init(elems);


    }, []);

    // let linkActive = "test1";
    // function linkFontColor(e) {
    //     // let privioslyLink = document.getElementsByClassName(linkActive)[0];
    //     //             // privioslyLink.style.backgroundColor = "#ffffff";
    //     //             // console.log(privioslyLink);
    //     //             // console.log(e.target.className);
    //     // e.target.style.backgroundColor = "#3366CC";
    //     // linkActive = e.target.className;
    //     //             // console.log(linkActive);
    // };
    // componentDidMount() {
    //     // let sidenav = document.querySelector("#slide-out");
    //     // M.Sidenav.init(sidenav, {});
    //     const elems = document.querySelectorAll(".sidenav");
    //     const instances = M.Sidenav.init(elems);
    // }




    // render() {
    return (
        <>
            <div className="navbar-fixed">
                <nav>
                    <div className="nav-wrapper cyan darken-1" style={{ padding: '0 2rem' }}>
                        <a href="#" className="brand-logo">Siniakou Alex</a>
                        <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        {/* <li><a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a></li> */}
                    </div>
                </nav>
            </div>

            <ul id="slide-out" className="sidenav">
                <li><Link activeClass="active" className="sidenav-close" to="intro" spy={true} smooth={true} duration={500} offset={-56}>Введение</Link></li>
                <li><Link activeClass="active" className="sidenav-close" to="Contact" spy={true} smooth={true} duration={500} offset={-56}>Контакты</Link></li>
                <li><Link activeClass="active" className="sidenav-close" to="About" spy={true} smooth={true} duration={500} offset={-56}>Обо мне</Link></li>
                <li><Link activeClass="active" className="sidenav-close" to="Expirience" spy={true} smooth={true} duration={500} offset={-56}>Опыт</Link></li>
                <li><Link activeClass="active" className="sidenav-close" to="Skills" spy={true} smooth={true} duration={500} offset={-56}>Навыки и умения</Link></li>
                <li><Link activeClass="active" className="sidenav-close" to="Education" spy={true} smooth={true} duration={500} offset={-56}>Образование</Link></li>
                <li><Link activeClass="active" className="sidenav-close" to="Resume" spy={true} smooth={true} duration={500} offset={-56}>Резюме скачать</Link></li>
                <li><Link activeClass="active" className="sidenav-close" to="WriteMe" spy={true} smooth={true} duration={500} offset={-56}>Напишите мне</Link></li>
            </ul>



            <ul id="slide-out-left-fixed" className="sidenav sidenav-fixed">
                <li><Link activeClass="active" className="test1" to="intro" spy={true} smooth={true} duration={500} offset={-64} >
                    <h4>Siniakou Alex</h4>
                    <span className="brown-text light">Full Stack Developer</span> </Link></li>
                <li><Link activeClass="active" className="test2" to="Contact" spy={true} smooth={true} duration={500} >
                    <i className="fas fa-envelope-open fa-fw fa-2x  brown-text text-darken-1" ></i>Контакты</Link></li>
                <li><Link activeClass="active" className="test3" to="About" spy={true} smooth={true} duration={500} >
                    <i className="fas fa-user fa-fw fa-2x green-text text-lighten-1" ></i>Обо мне</Link></li>
                <li><Link activeClass="active" className="test4 " to="Expirience" spy={true} smooth={true} duration={500} >
                    <i className="fas fa-chart-line fa-fw fa-2x  cyan-text text-darken-1" ></i> Опыт</Link></li>
                <li><Link activeClass="active" className="test4 " to="Projects" spy={true} smooth={true} duration={500} >
                    <i className="fas fa-code fa-fw fa-2x  cyan-text text-darken-1 test"  ></i> Мои проекты</Link></li>
                <li><Link activeClass="active" className="test5" to="Skills" spy={true} smooth={true} duration={500} >
                    <i className="fas fa-chart-bar fa-fw fa-2x pink-text text-lighten-1" ></i>Навыки и умения</Link></li>
                <li><Link activeClass="active" className="test6" to="Education" spy={true} smooth={true} duration={500} >
                    <i className="fas fa-user-graduate fa-fw fa-2x orange-text text-lighten-2" ></i>Образование</Link></li>
                <li><Link activeClass="active" className="test7" to="Resume" spy={true} smooth={true} duration={500} >
                    <i className="fa fa-file-text fa-fw fa-2x grey-text text-darken-2"></i>Резюме скачать</Link></li>
                <li><Link activeClass="active" className="test8  " to="WriteMe" spy={true} smooth={true} duration={500} >
                    <i className="fas fa-comment-dots fa-fw fa-2x red-text text-darken-3"></i>Напишите мне</Link></li>
            </ul >


        </>
    )
    // }
}


// export default Navbar;