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
              <div className="col-md-10 bio">
                <p>My name is Ryan Witherspoon and I am new to coding.  It makes me so excited to hear so many others are new to coding as well.  This pandemic has pushed me into finding a new career path.  I used to work for Marriott HQ doing sales system implementation for newly opening hotels and resorts.  I want to take advantage of this time and learn a new skill set that will launch me into a new field.  I think it would be awesome to find a position that combines my 16 years of hospitality experience and coding together!  I signed up for Codecademy which has been so helpful as it teaches your step by step.  I found it fun to be able to create websites and manipulate the data with code.   Looking forward to the next 12 weeks together and look forward to working with you all.  Cheers</p>
              </div>
        </div>

   

  </div>

  );
}

export default Home;
