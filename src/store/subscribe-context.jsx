import { useState, createContext } from "react";

export const SubscribeContext = createContext({
  email: "",
  isSubscribed: "",
  isValid: "",
  setEmail: () => {},
  setIsSubscribed: () => {},
  setIsValid: () => {},
});

function SubscribeContextProvider(props) {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(null);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const subscribeData = {
    email,
    setEmail,
    isSubscribed,
    setIsSubscribed,
    isValid,
    setIsValid,
  };
  return (
    <SubscribeContext.Provider value={subscribeData}>
      {props.children}
    </SubscribeContext.Provider>
  );
}

export default SubscribeContextProvider;
