import React from "react";
import profilepic from "../images/ryanpic.jpeg"
import "./style.css";

function Home() {
  return (
    <div className="container"> 
          <div className="row">
            <div className="col-md-12 jumbotron">
                <h1 className="display-4">Ryan Witherspoon</h1>
                  <p className="lead">Welcome to my portfolio</p>
          
            </div>
        </div>

    
        <div className="row">
          <div className="col-md-2">
            <img src={ profilepic } alt="Ryan Witherspoon" className="img-thumbnail"></img>
          </div>
              <div className="col-md-10 bio card-text">
                <p>My name is Ryan Witherspoon and I am a full stack developer.   I just recently completed an intensive 3 month bootcamp at the University of Denver in the fall/winter of 2020.  This pandemic has pushed me into finding a new career path.  I used to work for Marriott HQ doing sales system implementation for newly opening hotels and resorts.  I took full advantage of this time to learn a new skill set that will launch me into a new field.  I think it would be awesome to find a position that combines my 16 years of hospitality experience and coding together! After completing the course I found myself really enjoy front end development as this allows me to explore my creative side.  I have a true passion for art, design, and music.  Please take a look around and explore some of my favorite projects.  You can always contact me at ry.witherspoon@gmail.com.  Thanks</p>
              </div>
        </div>

   

  </div>

  );
}

export default Home;
