import React from "react";
import hello from "../images/hello.jpg"


function Contact(props) {
  return (
    <div className="container">
    < div className="row">
      {/* <div className="col-6">
        <div>
          <div className="form-group">
            <label for="firstname">First Name</label>
            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="John"></input>
          </div>

          <div className="form-group">
            <label for="lastname">Last Name</label>
            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Doe"></input>
          </div>

          <div className="form-group">
            <label for="phoneNumber">Contact Number</label>
            <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="(555)-555-5555"></input>
          </div>
          
          <div className="form-group">
            <label for="exampleFormControlInput1">Email address</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
          </div>

          <div className="form-group">
            <label for="exampleFormControlTextarea1">Message</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <input className="btn btn-primary" type="submit" value="Submit">
            </input>
        </div>
        </div> */}
          <div className="col-6">
            <h1>Contact Me!</h1>
          <img src={hello} className="img-thumbnail" alt="hello"></img>
          <a href="https://github.com/ryanwit" target="_blank" rel="noreferrer" type="button" className="btn btn-success mr-2" >My GitHub Page</a>
          <a href="https://www.linkedin.com/in/ryanwitherspoon/" target="_blank" rel="noreferrer" type="button" className="btn btn-success mr-2 " >My LinkedIn Page</a>
          <a href="https://drive.google.com/file/d/1R_e3Z3FRO_PTFE2hwBZ52JyFSmzqR3eI/view?usp=sharing" target="_blank" rel="noreferrer" type="button" className="btn btn-success" >My Resume</a>
        </div>
        
        
    </div>
    </div>
  );
}

export default Contact;
