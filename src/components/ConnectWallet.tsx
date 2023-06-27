"use client";

import { useAccount, useConnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";

export default function ConnectWallet() {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  return (
    <div>
      {isConnected ? (
        <div>Connected to {address}</div>
      ) : (
        <button
          className="bg-orange-400 px-3  rounded-md shadow-sm text-white"
          onClick={() => connect()}
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
}
