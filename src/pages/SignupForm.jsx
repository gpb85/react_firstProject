const SignUpForm = () => {
  return (
    <>
      <div className="signUpForm">
        <span>
          <h3>sign Up</h3>
        </span>
        <div className="form">
          <form action="/semdData" method="GET">
            <label for="txtName">Firsname</label>
            <input
              type="text"
              id="txtName"
              name="name"
              minLength={3}
              maxLength={30}
              required
            />
            '(*)'
            <br />
            <label for="txtEmail">Email</label>
            <input type="email" id="txtEmail" name="email" required />
            '(*)'
            <br />
            <label for="txtDate">Birthday</label>
            <input
              type="date"
              id="txtDate"
              name="date"
              min={"2006-01-01"}
              //value=?
              required
            />{" "}
            <br />
            <label for="txtPassword">Password</label>
            <input
              type="password"
              id="txtPassword"
              name="password"
              maxLength={30}
              placeholder="Enter your password"
              //autoComplete="on"
              pattern="[0-9a-zA-z]{4,10}"
              required
            />
            '(*)'
            <br />
            <label for="txtPassword">Repeat password</label>
            <input
              type="repeatPassword"
              id="repeatPassword"
              name="repeatPassword"
              maxLength={30}
              placeholder="Repeat your password"
              //autoComplete="on"
              pattern="[0-9a-zA-z]{4,10}"
              required
            />
          </form>
        </div>
      </div>
    </>
  );
};
