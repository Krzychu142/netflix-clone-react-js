import React, { useRef } from "react";
import { auth } from "../firebase";

import "./SingUpScreen.css";

function SingUpScreen() {
  const emailRef = useRef(null); // useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). Change on .current doesn't make rerender.
  const passwordRef = useRef(null);

  const register = (event) => {
    event.preventDefault(); // if the event does not get explicitly handled, its default action should not be taken as it normally would be
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const singIn = (event) => {
    event.preventDefault();

    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="singupScreen">
      <form>
        <h1>Sing In</h1>
        <input ref={emailRef} placeholder="Email" type="email" />
        <input ref={passwordRef} placeholder="Password" type="password" />
        <button type="submit" onClick={singIn}>
          Sing In
        </button>
        <h4>
          <span className="singupScreen__gray">New to Netflix? </span>
          <span className="singupScreen__link" onClick={register}>
            Sing up now.
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SingUpScreen;
