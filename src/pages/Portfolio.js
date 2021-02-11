import React from "react";
import pic1 from "../images/pic1.png"
import pic8 from "../images/pic8.png"
import pic3 from "../images/pic3.png"
import pic4 from "../images/pic4.png"
import pic7 from "../images/pic7.png"
import pic6 from "../images/pic6.png"


function Portfolio() {
  return (
    <div className="container">
<div className="row">
        <div className="col-md-3 col-xs-12 card bg-light mb-3 mt-4 mr-4">
            <img className="card-img-top mt-4" src={pic4} alt="project1"></img>
            <div className="card-body">
              <h5 className="card-title">Music Playlist Generator</h5>
              <p className="card-text">Musical playlist generator helps the user search for music, create and organize searched songs into a playlist, that can then be exported. I used JavaScript, jQuery, CSS, HTML, ES6, Rapid API, Deezer, Giphy, GoogleFonts, TypeIT.JS and Bootstrap</p>
            </div>
            <div className="card-body">
              <a href="https://ryanwit.github.io/Music-API-Group-Project/" target="_blank" rel="noreferrer"  className="card-link">Deployed Link</a>
              <a href="https://github.com/ryanwit/Music-API-Group-Project" target="_blank" rel="noreferrer"  className="card-link">GitHub Link</a>
            </div>
          </div>

          <div className="col-1"></div>

          <div className="col-md-3 col-xs-12 card bg-light mb-3 mt-4 mr-4">
            <img className="card-img-top mt-4" src={pic7} alt="project2"></img>
            <div className="card-body">
              <h5 className="card-title">Hotel Motels PMS</h5>
              <p className="card-text">Simple hotel Property Management System that allows users to checkin/out guests and view their reservation information. I used HTML, JavaScript, CSS, Handlebars, Express, MYSQL, Nodemon, Sequelize, Materialize, AJAX, GoogleFonts, Jquery, VintageFont, and VantaJS.  
</p>
            </div>
            <div className="card-body">
              <a href="https://hotelmotel.herokuapp.com/" target="_blank" rel="noreferrer"  className="card-link">Deployed Link</a>
              <a href="https://github.com/ryanwit/hotel_motel" target="_blank" rel="noreferrer"  className="card-link">GitHub Link</a>
            </div>
          </div>
          
          <div className="col-1"></div>

          <div className="col-md-3 col-xs-12 card bg-light mb-3 mt-4 mr-4">
            <img className="card-img-top mt-4" src={pic8} alt="burger"></img>
            <div className="card-body">
              <h5 className="card-title">Holiday Gift Exchange Organizer</h5>
              <p className="card-text">Simple and Fun Holiday Gift Exchange Organizer that can easily be used with friends, family, and co-workers. I used React, HTML, CSS, JavaScript, ParticlesJS, WebVitals, Bootstrap, AXIOS, Mongoose, Express, ParticlesJS, and FontAwesome.  </p>
            </div>
            <div className="card-body">  
              <a href="https://naughty-and-nice.herokuapp.com/" target="_blank" rel="noreferrer" className="card-link">Deployed Link</a>
              <a href="https://github.com/ryanwit/Naughty-n-Nice-Babayy" target="_blank" rel="noreferrer" className="card-link">GitHub Link</a>
            </div>
          </div>
          <div className="col-1"></div>
    </div>


    <div className="row">
        <div className="col-md-3 col-xs-12 card bg-light mb-3 mt-4 mr-4">
            <img className="card-img-top mt-4" src={pic1} alt="password"></img>
            <div className="card-body">
              <h5 className="card-title">Password Generator</h5>
              <p className="card-text">This website was created to randomly generate a password based of users criteria. I used HTML, CSS, JavaScript, and Bootstrap for this application.</p>
            </div>
            <div className="card-body">
              <a href="https://ryanwit.github.io/homework03_password_generator/" target="_blank" rel="noreferrer" className="card-link">Deployed Link</a>
              <a href="https://github.com/ryanwit/homework03_password_generator" target="_blank" rel="noreferrer"className="card-link ">Repo Link</a>
            </div>
          </div>
          <div className="col-1"></div>
          <div className="col-md-3 col-xs-12 card bg-light mb-3 mt-4 mr-4">
            <img className="card-img-top mt-4" src={pic6} alt="burger"></img>
            <div className="card-body">
              <h5 className="card-title">RyRy's Burger BarRyRy's Burger Bar</h5>
              <p className="card-text">This Burger Bar Application allows the users to view, create, and update a burger.  I used MySQL, Node, Express, Handlebars, and a homemade ORM.  This site is deployed on Heroku.</p>
            </div>
            <div className="card-body">
              <a href="https://mighty-brushlands-34914.herokuapp.com/" target="_blank" rel="noreferrer" className="card-link">Heroku Link</a>
              <a href="https://github.com/ryanwit/homework_13_node_express_handlebars_hamburger" target="_blank" rel="noreferrer" className="card-link">Repo Link</a>
            </div>
          </div>
          <div className="col-1"></div>
          <div className="col-md-3 col-xs-12 card bg-light mb-3 mt-4 mr-4">
            <img className="card-img-top mt-4" src={pic3} alt="weather"></img>
            <div className="card-body">
              <h5 className="card-title">Weather Dashboard</h5>
              <p className="card-text">Created Weather Dashboard that shows the current forecast of the selected city location and the next 5 days. I used HTML, JavaScript, CSS, Bootstrap, Jquery, Ajax, and Weather API.
</p>
            </div>
            <div className="card-body">
              <a href="https://ryanwit.github.io/homework_06_weather_dashboard/" target="_blank" rel="noreferrer" className="card-link">Deployed Link</a>
              <a href="https://github.com/ryanwit/homework_06_weather_dashboard" target="_blank" rel="noreferrer" className="card-link">Repo Link</a>
            </div>
          </div>
          <div className="col-1"></div>
    </div>
    

    
    </div>


  )
}


export default Portfolio;