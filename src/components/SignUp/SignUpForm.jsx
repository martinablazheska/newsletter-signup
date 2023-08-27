import classes from "./SignUpForm.module.scss";
import Button from "../UI/Button";
import { useState } from "react";

function SignUpForm() {
  const [emailInput, setEmailInput] = useState("");
  const [isValid, setIsValid] = useState(true);

  function changeHandler(event) {
    setEmailInput(event.target.value);
  }

  function subscribeHandler(event) {
    event.preventDefault();
    if (
      emailInput.trim().length >= 5 &&
      emailInput.includes("@") &&
      emailInput.includes(".")
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }

  return (
    <form className={classes.form}>
      <label htmlFor="email">Email address</label>
      {!isValid && <p className={classes.error}>Valid email required</p>}
      <input
        type="text"
        id="email"
        placeholder="email@company.com"
        onChange={changeHandler}
        value={emailInput}
        className={isValid === false ? classes.invalid : ""}
      />
      <Button onClick={subscribeHandler}>
        Subscribe to monthly newsletter
      </Button>
    </form>
  );
}

export default SignUpForm;
