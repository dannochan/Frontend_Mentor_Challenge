import { useState } from "react";
import "./App.scss";

function App() {
  const [firstName, setFirstName] = useState("");
  const [FnError, setFnError] = useState("");
  const [lastName, setLastName] = useState("");
  const [LnError, setLnError] = useState();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [pwError, setPwError] = useState("");

  const firstNameChangeHandler = (event) => {
    setFirstName(event.target.value.trim());
  };
  const lastNameChangeHandler = (event) => {
    setLastName(event.target.value.trim());
  };
  const emailChangeHandler = (event) => {
    setEmail(event.target.value.trim());
  };
  const passwordChangeHandler = (event) => {
    setPassword(event.target.value.trim());
  };

  const firstNameBlurHandler = () => {
    if (firstName === "") {
      setFnError("First Name cannot be empty");
    } else if (firstName.length < 2) {
      setFnError("Please enter a valid first Name");
    }
  };

  const lastNameBlurHandler = () => {
    if (lastName === "") {
      setLnError("Last Name cannot be empty");
    } else if (firstName.length < 2) {
      setLnError("Please enter a valid last Name");
    }
  };
  const emailBlurHandler = () => {
    if (email === "") {
      setEmailError("Email Address cannot be empty");
    } else if (!email.includes("@")) {
      setEmailError("Please enter a valid email address");
    }
  };
  const passwordBlurHandler = () => {
    if (password === "") {
      setPwError("Password cannot be empty");
    } else if (password.length <= 4) {
      setPwError("Please Enter a valid password");
    }
  };

  return (
    <>
      <div className="app__signup app__container">
        <div className="app__signup-header app__flex">
          <h3> Learn to code by watching others</h3>
          <p className="p-text">
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </p>
        </div>
        <div className="app__sign-content ">
          <div className="app__signup-link">
            <a>
              <p className="p-text">
                <span className="bold-text">Try it free 7 days </span>then
                $20/mo. thereafter
              </p>
            </a>
          </div>

          <div className="app__signup-form app-flex">
            <div className={FnError ? "invalid" : ""}>
              <input
                name="firstname"
                value={firstName}
                type="text"
                placeholder="First Name"
                onChange={firstNameChangeHandler}
                onBlur={firstNameBlurHandler}
              />
              {FnError && <p>{FnError}</p>}
            </div>
            <div className={LnError ? "invalid" : ""}>
              <input
                name="lastname"
                value={lastName}
                type="text"
                placeholder="Last Name"
                onChange={lastNameChangeHandler}
                onBlur={lastNameBlurHandler}
              />
              {LnError && <p>{LnError}</p>}
            </div>
            <div className={emailError ? "invalid" : ""}>
              <input
                name="email"
                value={email}
                type="email"
                placeholder="Email Address"
                onChange={emailChangeHandler}
                onBlur={emailBlurHandler}
              />
              {emailError && <p>{emailError}</p>}
            </div>
            <div className={pwError ? "invalid" : ""}>
              <input
                name="password"
                value={password}
                type="password"
                placeholder="Password"
                onChange={passwordChangeHandler}
                onBlur={passwordBlurHandler}
              />
              {pwError && <p>{pwError}</p>}
            </div>

            <div className="app__signup-btn">
              <button>claim your free trail</button>
            </div>

            <div className="app__signup-terms">
              <p className="p-text">
                By clicking the button, you are agreeing to our
                <a> Terms and Services</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
