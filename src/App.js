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
    const enteredFirstName = event.target.value;

    setFirstName(enteredFirstName);
  };
  const lastNameChangeHandler = (event) => {
    const enteredLastName = event.target.value;
    setLastName(enteredLastName);
  };
  const emailChangeHandler = (event) => {
    const enteredEmail = event.target.value;
    setEmail(enteredEmail);
  };
  const passwordChangeHandler = (event) => {
    const enteredPassword = event.target.value;
    setPassword(enteredPassword);
  };

  const firstNameBlurHandler = () => {
    if (firstName.trim() === "") {
      setFnError("First Name cannot be empty");
    } else if (firstName.trim().length < 2) {
      setFnError("Please enter a valid first Name");
    } else if (firstName.trim().match(/[\W|\d]/g)) {
      setFnError("Look like is not a valid first name");
    } else {
      setFnError("");
    }
  };

  const lastNameBlurHandler = () => {
    if (lastName.trim() === "") {
      setLnError("Last Name cannot be empty");
    } else if (lastName.trim().length < 2) {
      setLnError("Please enter a valid last Name");
    } else if (lastName.trim().match(/[\W|\d]/g)) {
      setLnError("Look like is not a valid last name");
    } else {
      setLnError("");
    }
  };
  const emailBlurHandler = () => {
    if (email.trim() === "") {
      setEmailError("Email Address cannot be empty");
    } else if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email.trim())) {
      setEmailError("Looks like is not an e-mail");
    } else {
      setEmailError("");
    }
  };
  const passwordBlurHandler = () => {
    if (password.trim() === "") {
      setPwError("Password cannot be empty");
    } else if (
      !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password.trim())
    ) {
      setPwError("Please Enter a valid password");
    } else {
      setPwError("");
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (FnError || LnError || emailError || pwError) {
      return;
    }

    const enteredUserData = {
      firstName,
      lastName,
      email,
      password,
    };

    console.log(enteredUserData);

    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setEmailError("");
    setFnError("");
    setLnError("");
    setPwError("");
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
              <button onClick={submitHandler}>claim your free trail</button>
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
