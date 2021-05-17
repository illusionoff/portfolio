import React from 'react';

export const Skills = () => {
  return (
    <div>
      <h3 className="page-title white-text">Skills</h3>
      <div className="container">
        <div className="card">
          <div className="card-content">
            <h4 className=" grey-text text-darken-2">HTML</h4>
            <div className="row center-align">
              <div className="col s6 m6">
                <img alt="" src="images/html5.png" className="responsive-img"></img>HTML5
              </div>
              <div className="col s6 m6">
                <img alt="" src="images/react.png" className="responsive-img"></img>JSX
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <h4 className=" grey-text text-darken-2">CSS</h4>
            <div className="row center-align">
              <div className="col s6">
                <img alt="" src="images/css3.png" className="responsive-img"></img>CSS3
              </div>
              <div className="col s6">
                <img alt="" src="images/materialize.png" className="responsive-img"></img>Materialize
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <h4 className=" grey-text text-darken-2">Javascript</h4>
            <div className="row center-align">
              <div className="col s6">
                <img alt="" src="images/react.png" className="responsive-img"></img>React
                             </div>
              <div className="col s6">
                <img alt="" src="images/javascript.png" className="responsive-img"></img>Javascript
                            </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <h4 className=" grey-text text-darken-2">Back-End</h4>
            <div className="row center-align">
              <div className="col s6 m4" >
                <img alt="" src="images/postgresql.png" className="responsive-img"></img>PostgreSQL
                             </div>
              <div className="col s6 m4">
                <img alt="" src="images/mongodb.png" className="responsive-img"></img>MongoDB
                            </div>
              <div className="col s6 m4">
                <img alt="" src="images/nodejs.png" className="responsive-img"></img>Nodejs
                            </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <h4 className=" grey-text text-darken-2">Other</h4>
            <div className="row center-align">
              <div className="col s6 m3">
                <img alt="" src="images/github.png" className="responsive-img"></img>Github
                             </div>
              <div className="col s6 m3">
                <img alt="" src="images/linux.png" className="responsive-img"></img>linux
                            </div>
              <div className="col s6 m3">
                <img alt="" src="images/nginx.png" className="responsive-img"></img>Nginx
                            </div>
              <div className="col s6 m3">
                <img alt="" src="images/vscode.png" className="responsive-img"></img>VSCode
                            </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
