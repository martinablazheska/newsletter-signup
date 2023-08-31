import classes from "./Modal.module.scss";
import Button from "./Button";
import Card from "./Card";
import checkmark from "../../assets/images/icon-success.svg";

function Backdrop(props) {
  return <div className={classes.backdrop}></div>;
}

function Modal(props) {
  function dismissHandler() {
    props.dismissHandler();
  }
  return (
    <>
      <Backdrop />
      <Card className={classes.modal}>
        <img src={checkmark} alt="checkmark" />
        <h1>Thanks for subscribing!</h1>
        <p>
          A confirmation email has been sent to{" "}
          <span className={classes.bolded}>{props.email}</span>. Please open it
          and click the button inside it to confirm your subscription.
        </p>
        <Button className={classes["dismiss-button"]} onClick={dismissHandler}>
          Dismiss message
        </Button>
      </Card>
    </>
  );
}

export default Modal;
