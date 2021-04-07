import React from 'react';
import { useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import M from 'materialize-css/dist/js/materialize.min.js';



export const Navbar = () => {
    // class Navbar extends Component {

    useEffect(() => {
        // M.AutoInit();
        const elems = document.querySelectorAll(".sidenav");
        const instances = M.Sidenav.init(elems);
    }, [])

    // componentDidMount() {
    //     // let sidenav = document.querySelector("#slide-out");
    //     // M.Sidenav.init(sidenav, {});
    //     const elems = document.querySelectorAll(".sidenav");
    //     const instances = M.Sidenav.init(elems);
    // }




    // render() {
    return (
        <>
            <nav>
                <div className="nav-wrapper blue darken-1" style={{ padding: '0 2rem' }}>


                    <ul id="slide-out" className="sidenav">

                        {/* <li className="active"><a href="/"><span className="fa fa-home"></span><span className="padding-l-10">Главная</span></a></li> */}

                        <li><a href="/"><span className="fa fa-home"></span><span className="padding-l-10"> На верх</span></a></li>

                        <li><a className="sidenav-close" href="#intro">Введение</a></li>
                        <li><a className="sidenav-close" href="#Contact">Контакты</a></li>
                        <li><a className="sidenav-close" href="#About">Обо мне</a></li>
                        <li><a className="sidenav-close" href="#Expirience">Опыт</a></li>
                        <li><a className="sidenav-close" href="#Skills">Навыки и умения</a></li>
                        <li><a className="sidenav-close" href="#Education">Образование</a></li>
                        <li><a className="sidenav-close" href="#Resume">Резюме скачать</a></li>
                        <li><a className="sidenav-close" href="#WriteMe">Напишите мне</a></li>




                    </ul>
                    <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>



                    {/* <span className="brand-logo">Siniakou Alex</span>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="#intro">Введение</a></li> */}
                    {/* <li><NavLink to="/links">Ссылки</NavLink></li> */}
                    {/* <li><a href="/" onClick={logoutHandler}>Выйти</a></li> */}
                    {/* <li><a href="#About">Обо мне</a></li>
                    <li><a href="#Expirience">Опыт</a></li>
                    <li><a href="#Skills">Навыки и умения</a></li>
                    <li><a href="#Education">Образование</a></li>
                    <li><a href="#Resume">Резюме скачать</a></li>
                    <li><a href="#WriteMe">Напишите мне</a></li>
                </ul> */}

                    <ul id="slide-out-left-fixed" className="sidenav sidenav-fixed">
                        {/* <li><a href="#!">First Sidebar Link</a></li>
                    <li><a href="#!">Second Sidebar Link</a></li> */}

                        <li><a href="/"><span className="fa fa-home"></span><span className="padding-l-10"> На верх</span></a></li>

                        <li><a className="sidenav-close" href="#intro">Введение</a></li>
                        <li><a className="sidenav-close" href="#Contact">Контакты</a></li>
                        <li><a className="sidenav-close" href="#About">Обо мне</a></li>
                        <li><a className="sidenav-close" href="#Expirience">Опыт</a></li>
                        <li><a className="sidenav-close" href="#Skills">Навыки и умения</a></li>
                        <li><a className="sidenav-close" href="#Education">Образование</a></li>
                        <li><a className="sidenav-close" href="#Resume">Резюме скачать</a></li>
                        <li><a className="sidenav-close" href="#WriteMe">Напишите мне</a></li>
                    </ul>
                    {/* <a href="#" data-target="slide-out-left-fixed" class="sidenav-trigger"><i class="material-icons">menu</i></a> */}

                </div>
            </nav>
        </>
    )
    // }
}


// export default Navbar;