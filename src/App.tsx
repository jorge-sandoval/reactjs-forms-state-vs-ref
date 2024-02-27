import './App.css';

function App() {
  return (
    <>
      <form className="form">
        <div className="form-group error">
          <label className="label" htmlFor="email">
            Name
          </label>
          <input
            id="email"
            type="email"
            className="input"
            name="email"
            value="test@test.com"
          />
          <div className="msg">Must contain an email</div>
        </div>
        <div className="form-group">
          <label className="label" htmlFor="password">
            Name
          </label>
          <input
            id="password"
            type="password"
            className="input"
            name="password"
            value="Password123!"
          />
        </div>
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}

export default App;
