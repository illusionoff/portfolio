import React, { useEffect } from 'react';
// import { useEffect } from 'react';
// import { NavLink, useHistory } from 'react-router-dom';
// import { Link, Events, animateScroll as scroll } from 'react-scroll';
import { Link } from 'react-scroll';
import M from 'materialize-css/dist/js/materialize.min.js';



export const Navbar = () => {
  // className Navbar extends Component {

  useEffect(() => {
    // M.AutoInit();
    const elems = document.querySelectorAll(".sidenav");
    // eslint-disable-next-line no-unused-vars
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
          <div className="nav-wrapper cyan darken-1">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" className="brand-logo">Siniakou Alex</a>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            {/* <li><a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a></li> */}
          </div>
        </nav>
      </div>

      <ul id="slide-out" className="sidenav">
        <li><Link activeClass="active" className="sidenav-close intro-mobile" to="Intro" spy={true} smooth={true} duration={500} offset={-54}>
          <center >Siniakou Alex</center>
          <span className="brown-text light strong">Junior Node.js Back-end,</span>
          <span className="brown-text light">Full Stack Node.js React Developer</span>

        </Link></li>
        <li><Link activeClass="active" className="sidenav-close " to="Contact" spy={true} smooth={true} duration={500} offset={-54}><i className="fas fa-envelope-open fa-fw fa-2x  brown-text text-darken-1" ></i>Contact</Link></li>
        <li><Link activeClass="active" className="sidenav-close " to="About" spy={true} smooth={true} duration={500} offset={-54}><i className="fas fa-user fa-fw fa-2x green-text text-lighten-1" ></i>About</Link></li>
        <li><Link activeClass="active" className="sidenav-close" to="Projects" spy={true} smooth={true} duration={500} offset={-54}><i className="fas fa-code fa-fw fa-2x  cyan-text text-darken-1" ></i>Projects</Link></li>
        <li><Link activeClass="active" className="sidenav-close" to="Skills" spy={true} smooth={true} duration={500} offset={-54}><i className="fas fa-chart-bar fa-fw fa-2x pink-text text-lighten-1" ></i>Skills</Link></li>
        <li><Link activeClass="active" className="sidenav-close" to="Education" spy={true} smooth={true} duration={500}
          offset={-54}><i className="fas fa-user-graduate fa-fw fa-2x orange-text text-lighten-2" ></i>Education</Link>
        </li>
        <li><Link activeClass="active" className="sidenav-close" to="Background" spy={true} smooth={true} duration={500}
          offset={-54}><i className="fas fa-user-cog fa-fw fa-2x purple-text text-lighten-2" ></i>Background</Link></li>
        <li><Link activeClass="active" className="sidenav-close" to="Resume" spy={true} smooth={true} duration={500} offset={-54}><i className="fa fa-file-pdf fa-fw fa-2x grey-text text-darken-2"></i>Download resume</Link></li>
        <li><Link activeClass="active" className="sidenav-close" to="WriteMe" spy={true} smooth={true} duration={500} offset={-54}><i className="fas fa-comment-dots fa-fw fa-2x red-text text-darken-3"></i>Write to me</Link></li>
      </ul>



      <ul id="slide-out-left-fixed" className="sidenav sidenav-fixed ">
        <li><Link activeClass="active" className="intro" to="Intro" spy={true} smooth={true} duration={500}  >
          <h4>Siniakou Alex</h4>
          <span className="brown-text light strong">Junior Node.js Back-end,</span>
          <span className="brown-text light">Full Stack Node.js React Developer</span>
        </Link></li>
        <li><Link activeClass="active" className="side-bg-color" to="Contact" spy={true} smooth={true} duration={500} >
          <i className="fas fa-envelope-open fa-fw fa-2x  brown-text text-darken-1" ></i>Contact</Link></li>
        <li><Link activeClass="active" className="side-bg-color" to="About" spy={true} smooth={true} duration={500} >
          <i className="fas fa-user fa-fw fa-2x green-text text-lighten-1" ></i>About</Link></li>
        <li><Link activeClass="active" className="side-bg-color " to="Projects" spy={true} smooth={true} duration={500} ><i className="fas fa-code fa-fw fa-2x  cyan-text text-darken-1" ></i> Projects</Link></li>
        <li><Link activeClass="active" className="side-bg-color" to="Skills" spy={true} smooth={true} duration={500} >
          <i className="fas fa-chart-bar fa-fw fa-2x pink-text text-lighten-1" ></i>Skills</Link></li>
        <li><Link activeClass="active" className="side-bg-color" to="Education" spy={true} smooth={true} duration={500} >
          <i className="fas fa-user-graduate fa-fw fa-2x orange-text text-lighten-2" ></i>Education</Link></li>
        <li><Link activeClass="active" className="side-bg-color" to="Background" spy={true} smooth={true} duration={500}>
          <i className="fas fa-user-cog fa-fw fa-2x purple-text text-lighten-2" ></i>Background</Link></li>
        <li><Link activeClass="active" className="side-bg-color" to="Resume" spy={true} smooth={true} duration={500} >
          <i className="fa fa-file-pdf fa-fw fa-2x grey-text text-darken-2"></i>Download resume</Link></li>
        <li><Link activeClass="active" className="side-bg-color  " to="WriteMe" spy={true} smooth={true} duration={500} >
          <i className="fas fa-comment-dots fa-fw fa-2x red-text text-darken-3"></i>Write to me</Link></li>
      </ul >

    </>
  )
  // }
}


// export default Navbar;
