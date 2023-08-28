import React from "react";

const SignUpContext = React.createContext({
  isValid: true,
  isSuccess: false,
  email: "",
});

export default SignUpContext;
