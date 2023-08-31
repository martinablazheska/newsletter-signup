import SignUp from "./SignUp/SignUp";
import Modal from "./UI/Modal";
import { useContext } from "react";
import { SubscribeContext } from "../store/subscribe-context";

function Main() {
  const { email, isSubscribed, setIsSubscribed } = useContext(SubscribeContext);

  function dismissHandler() {
    setIsSubscribed(false);
  }

  return (
    <>
      {!isSubscribed && <SignUp />}
      {isSubscribed && <Modal dismissHandler={dismissHandler} email={email} />}
    </>
  );
}

export default Main;
