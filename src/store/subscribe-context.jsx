import { useState, createContext } from "react";

export const SubscribeContext = createContext({
  email: "",
  isSubscribed: "",
  setEmail: () => {},
  setIsSubscribed: () => {},
});

function SubscribeContextProvider(props) {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const subscribeData = {
    email,
    setEmail,
    isSubscribed,
    setIsSubscribed,
  };
  return (
    <SubscribeContext.Provider value={subscribeData}>
      {props.children}
    </SubscribeContext.Provider>
  );
}

export default SubscribeContextProvider;
