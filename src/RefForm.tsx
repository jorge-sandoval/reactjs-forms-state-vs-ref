import { useRef, useState } from 'react';
import './styles.css';
import { checkEmail, checkPassword } from './validators';

export default function RefForm() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const [emailErrors, setEmailErrors] = useState<string[]>([]);
  const [passwordErrors, setPasswordErrors] = useState<string[]>([]);
  const [isAfterFirstSubmit, setIsAfterFirstSubmit] = useState<boolean>(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsAfterFirstSubmit(true);

    const email = emailRef.current?.value || '';
    const password = passwordRef.current?.value || '';

    const emailResults = checkEmail(email);
    const passwordResults = checkPassword(password);

    setEmailErrors(emailResults);
    setPasswordErrors(passwordResults);

    if (emailResults.length === 0 && passwordResults.length === 0) {
      alert('Form is valid');
    }
  }

  function onEmailChange(e: React.ChangeEvent<HTMLInputElement>): void {
    if (isAfterFirstSubmit) {
      setEmailErrors(checkEmail(e.target.value));
    }
  }

  function onPasswordChange(e: React.ChangeEvent<HTMLInputElement>): void {
    if (isAfterFirstSubmit) {
      setPasswordErrors(checkPassword(e.target.value));
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
            ref={emailRef}
            type="email"
            className="input"
            name="email"
            defaultValue=""
            onChange={onEmailChange}
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
            ref={passwordRef}
            type="password"
            className="input"
            name="password"
            defaultValue=""
            onChange={onPasswordChange}
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
