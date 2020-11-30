import React from "react";
import pic1 from "../images/pic1.png"
import pic2 from "../images/pic2.png"
import pic3 from "../images/pic3.png"
import pic4 from "../images/pic4.png"
import pic7 from "../images/pic7.png"
import pic6 from "../images/pic6.png"


function Portfolio() {
  return (
    <div className="container">
    <div className="row">
        <div className="col-md-3 col-xs-12 card bg-light mb-3 mt-4 mr-4">
            <img className="card-img-top mt-4" src={pic1} alt="password"></img>
            <div className="card-body">
              <h5 className="card-title">Password Generator</h5>
              <p className="card-text">This website was created to randomly generate a password based of users criteria</p>
            </div>
            <div className="card-body">
              <a href="https://ryanwit.github.io/homework03_password_generator/" target="_blank" rel="noreferrer" className="card-link">Deployed Link</a>
              <a href="https://github.com/ryanwit/homework03_password_generator" target="_blank" rel="noreferrer"className="card-link ">Repo Link</a>
            </div>
          </div>
          <div className="col-1"></div>
          <div className="col-md-3 col-xs-12 card bg-light mb-3 mt-4 mr-4">
            <img className="card-img-top mt-4" src={pic2} alt="quiz"></img>
            <div className="card-body">
              <h5 className="card-title">Code Quiz</h5>
              <p className="card-text">This quiz was created to test the users knowledge of javascript and html
                This quiz will keep track of your score as you move through the quiz</p>
            </div>
            <div className="card-body">
              <a href="https://ryanwit.github.io/homework04_code_quiz/" target="_blank" rel="noreferrer" className="card-link">Deployed Link</a>
              <a href="https://github.com/ryanwit/homework04_code_quiz" target="_blank" rel="noreferrer" className="card-link">Repo Link</a>
            </div>
          </div>
          <div className="col-1"></div>
          <div className="col-md-3 col-xs-12 card bg-light mb-3 mt-4 mr-4">
            <img className="card-img-top mt-4" src={pic3} alt="weather"></img>
            <div className="card-body">
              <h5 className="card-title">Weather Dashboard</h5>
              <p className="card-text">Created Weather Dashboard that shows the current forecast of the selected city location and the next 5 days</p>
            </div>
            <div className="card-body">
              <a href="https://ryanwit.github.io/homework_06_weather_dashboard/" target="_blank" rel="noreferrer" className="card-link">Deployed Link</a>
              <a href="https://github.com/ryanwit/homework_06_weather_dashboard" target="_blank" rel="noreferrer" className="card-link">Repo Link</a>
            </div>
          </div>
          <div className="col-1"></div>
    </div>
    

    <div className="row">
        <div className="col-md-3 col-xs-12 card bg-light mb-3 mt-4 mr-4">
            <img className="card-img-top mt-4" src={pic4} alt="project1"></img>
            <div className="card-body">
              <h5 className="card-title">Project One</h5>
              <p className="card-text">Taco CO's musical playlist generator helps the user search for music, create and organize searched songs into a playlist, that can then be exported. Our application it the first of it's kind to also feature TacoTV, which displays unique GIFs while the user listens to music!</p>
            </div>
            <div className="card-body">
              <a href="https://noracurcio.github.io/Music-API-Group-Project/" target="_blank" rel="noreferrer"  className="card-link">Deployed Link</a>
              <a href="https://github.com/ryanwit/Music-API-Group-Project" target="_blank" rel="noreferrer"  className="card-link">Repo Link</a>
            </div>
          </div>

          <div className="col-1"></div>

          <div className="col-md-3 col-xs-12 card bg-light mb-3 mt-4 mr-4">
            <img className="card-img-top mt-4" src={pic7} alt="project2"></img>
            <div className="card-body">
              <h5 className="card-title">Project Two</h5>
              <p className="card-text">Simple hotel Property Management System that allows users to checkin/out guests and view their reservation information</p>
            </div>
            <div className="card-body">
              <a href="https://hotelmotel.herokuapp.com/" target="_blank" rel="noreferrer"  className="card-link">Deployed Link</a>
              <a href="https://github.com/ryanwit/hotel_motel" target="_blank" rel="noreferrer"  className="card-link">Repo Link</a>
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
    </div>
    </div>


  )
}


export default Portfolio;