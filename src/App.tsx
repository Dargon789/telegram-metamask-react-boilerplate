import Home from "./Home";
import { MetaMaskProvider } from "@metamask/sdk-react";
import "@0xsequence/design-system/styles.css";

const App = () => {
  return (
    <MetaMaskProvider
      debug={false}
      sdkOptions={{
        dappMetadata: {
          name: "Example React Dapp",
          url: window.location.href,
        },
        infuraAPIKey: import.meta.env.VITE_INFURA_API_KEY,
        // Other options.
      }}
    >
      <Home />
    </MetaMaskProvider>
  );
};

export default App;
