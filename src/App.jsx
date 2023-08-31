import Main from "./components/Main";
import SubscribeContextProvider from "./store/subscribe-context";

function App() {
  return (
    <SubscribeContextProvider>
      <Main />
    </SubscribeContextProvider>
  );
}

export default App;
