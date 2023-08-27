import Card from "../UI/Card";
import illustration from "../../assets/images/illustration-sign-up-desktop.svg";
import classes from "./SignUp.module.scss";
import SignUpForm from "./SignUpForm";
import List from "./List";

function SignUp() {
  return (
    <Card className={classes.signup}>
      <div>
        <h1>Stay updated!</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <List />
        <SignUpForm />
      </div>
      <div>
        <img src={illustration} alt="Abstract sign up illustration" />
      </div>
    </Card>
  );
}

export default SignUp;
