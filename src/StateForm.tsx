import { useMemo, useState } from 'react';
import './styles.css';
import { checkEmail, checkPassword } from './validators';

export default function StateForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAfterFirstSubmit, setIsAfterFirstSubmit] = useState<boolean>(false);

  const emailErrors = useMemo(() => {
    return isAfterFirstSubmit ? checkEmail(email) : [];
  }, [isAfterFirstSubmit, email]);

  const passwordErrors = useMemo(() => {
    return isAfterFirstSubmit ? checkPassword(password) : [];
  }, [isAfterFirstSubmit, password]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsAfterFirstSubmit(true);

    const emailResults = checkEmail(email);
    const passwordResults = checkPassword(password);

    if (emailResults.length === 0 && passwordResults.length === 0) {
      alert('Form is valid');
    }
  }

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div className={`form-group ${emailErrors.length > 0 && 'error'}`}>
          <label className="label" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="input"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailErrors.length > 0 &&
            emailErrors.map((error, index) => (
              <div key={index} className="msg">
                {error}
              </div>
            ))}
        </div>
        <div className={`form-group ${passwordErrors.length > 0 && 'error'}`}>
          <label className="label" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            className="input"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordErrors.length > 0 &&
            passwordErrors.map((error, index) => (
              <div key={index} className="msg">
                {error}
              </div>
            ))}
        </div>
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}
