import React, { useState, useRef, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import positive from "../../components/images/positive.png";
import "./style.css";
import AuthContext from "../../context/authContext";
import API from "../../utils/API";

function SignUp() {
  const { authenticated, user, token } = useContext(AuthContext);

  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const config = {
    headers: {
      "Content-type": "appication/json",
    },
    body: JSON.stringify({
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    }),
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newUser = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    // Attempt to register
    // API.signUpUser(newUser, config)
    //   .then((res) => {
    //     console.log("dispatched!", res.data);
    //     dispatch({
    //       type: SIGNUP_SUCCESS,
    //       index,
    //       payload: res.data,
    //       user: newUser.name
    //     });
    //     console.log("state", state);
        
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    
    // if (state.isAuthenticated) {
    //   return <Redirect to="/home" />;
    // }
    
    // if (!state.isAuthenticated) {
    //   alert("Didn't work!");
    // }
    
  };
  return (
    <div className="container">
      <a className="navbar-item brand-name nav-link center-it" href="/home">
        <img src={positive} className="brand-image " alt="logo" /> happily Woke
      </a>
      <br></br>
      <div className="box">
        <header className="modal-card-head">
          <h3 className="brand-name">Sign Up</h3>
        </header>
        <form onSubmit={handleSubmit}>
          <div className="field">
            <p className="control has-icons-left has-icons-right">
              <input
                name="name"
                className="input"
                type="text"
                placeholder="Name"
                ref={nameRef}
                // onChange={handleNameChange}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-check"></i>
              </span>
            </p>
          </div>
          <div className="field">
            <div className="field">
              <p className="control has-icons-left has-icons-right">
                <input
                  name="email"
                  className="input"
                  type="email"
                  placeholder="Email"
                  ref={emailRef}
                  // onChange={handleEmailChange}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
                <span className="icon is-small is-right">
                  <i className="fas fa-check"></i>
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control has-icons-left">
                <input
                  name="password"
                  className="input"
                  type="password"
                  placeholder="Password"
                  ref={passwordRef}
                  // onChange={handlePasswordChange}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-lock"></i>
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control">
                <button
                  className="button is-light"
                  type="submit"
                  // onClick={handleSubmit}
                >
                  Sign Up
                </button>
                <Link to="/login" className="switch-page">
                  {" "}
                  Already have an account?
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
