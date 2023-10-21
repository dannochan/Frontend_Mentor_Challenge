import "./App.scss";

function App() {
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
            <div>
              <input name="firstname" type="text" placeholder="First Name" />
            </div>
            <div>
              <input name="lastname" type="text" placeholder="Last Name" />
            </div>
            <div>
              <input name="email" type="email" placeholder="Email Address" />
            </div>
            <div>
              <input name="password" type="password" placeholder="Password" />
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
