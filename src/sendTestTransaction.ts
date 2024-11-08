import { SDKProvider } from "@metamask/sdk-react";

export function sendTestTransaction(provider: SDKProvider, from: string) {
  provider // Or window.ethereum if you don't support EIP-6963.
    .request({
      method: "eth_sendTransaction",
      params: [
        {
          from,
          to: "0xd46e8dd67c5d32be8058bb8eb970870f07244567",
          gas: "0x76c0", // 30400
          gasPrice: "0x9184e72a000", // 10000000000000
          value: "0x9184e72a", // 2441406250
          data: "0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675",
        },
      ],
    })
    .then((result) => {
      console.log(result);
      // The result varies by RPC method.
      // For example, this method returns a transaction hash hexadecimal string upon success.
    })
    .catch((error) => {
      console.log(error);
      // If the request fails, the Promise rejects with an error.
    });
}
