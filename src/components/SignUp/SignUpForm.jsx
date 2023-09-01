import classes from "./SignUpForm.module.scss";
import Button from "../UI/Button";
import { useState, useContext } from "react";
import { SubscribeContext } from "../../store/subscribe-context";

function SignUpForm() {
  const { email, setEmail, setIsSubscribed, isValid, setIsValid } =
    useContext(SubscribeContext);
  const [isTouched, setIsTouched] = useState(false);

  function changeHandler(event) {
    setEmail(event.target.value);
    setIsTouched(true);
    if (email.length >= 5 && email.includes("@") && email.includes(".")) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }

  function subscribeHandler(event) {
    event.preventDefault();
    setIsTouched(false);
    if (isValid === true) {
      setIsSubscribed(true);
    }
  }

  function blurHandler() {
    setIsTouched(false);
  }

  return (
    <>
      <form className={classes.form}>
        <label htmlFor="email">Email address</label>
        {isValid === false && isTouched === false && (
          <p className={classes.error}>Valid email required</p>
        )}
        <input
          type="email"
          id="email"
          value={email}
          placeholder="email@company.com"
          onChange={changeHandler}
          onBlur={blurHandler}
          className={
            isValid === false && isTouched === false ? classes.invalid : ""
          }
        />
        <Button onClick={subscribeHandler}>
          Subscribe to monthly newsletter
        </Button>
      </form>
    </>
  );
}

export default SignUpForm;
