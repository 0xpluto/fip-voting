"use client";

import { useAccount, useConnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { useState, useEffect } from "react";

export default function ConnectWallet() {
  const [hasMounted, setHasMounted] = useState(false);
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });

  // Hooks
  useEffect(() => {
    setHasMounted(true);
  }, []);

  // Render
  if (!hasMounted) return null;

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
