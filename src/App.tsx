import Home from "./Home";
import { MetaMaskProvider } from "@metamask/sdk-react";
import "@0xsequence/design-system/styles.css";
import { ThemeProvider } from "@0xsequence/design-system";

const App = () => {
  return (
    <ThemeProvider>
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
    </ThemeProvider>
  );
};

export default App;
