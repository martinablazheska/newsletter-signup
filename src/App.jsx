import SignUp from "./components/SignUp/SignUp";
import Modal from "./components/UI/Modal";
import { useState } from "react";

function App() {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  function subscribeHandler(input) {
    setIsSubscribed(true);
    setEmail(input);
  }

  function dismissHandler() {
    setIsSubscribed(false);
  }

  return (
    <>
      {!isSubscribed && <SignUp subscribeHandler={subscribeHandler} />}
      {isSubscribed && <Modal dismissHandler={dismissHandler} email={email} />}
    </>
  );
}

export default App;
