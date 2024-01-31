const SignInForm = () => {
  return (
    <>
      <div className="loginForm">
        <div className="form">
          <h3>Sign in!</h3>
          <label for="txtUsername"></label>
          <input
            type="text"
            id="txtUsername"
            name="username"
            max={30}
            placeholder="Enter your username.."
            autoComplete="on"
            required
          />
          <br />
          <label for="txtPassword"></label>
          <input
            type="password"
            id="txtPassword"
            max={30}
            placeholder="Enter your password"
            autoComplete="on"
            pattern="[0-9a-zA-Z]{4,10}"
            required
          />
          <br />
          <label for="remember">Remember me</label>
          <input type="checkbox" name="remember" id="remember" />
          <br />
          <input
            type="submit"
            //value={}
          />
          <input
            type="reset"
            //value=
          />
          <div className="forgotPsw">
            <a href="#">Forgot password?</a>
          </div>
        </div>
      </div>
    </>
  );
};
