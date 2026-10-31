import { useState } from "react";
import { Wallet, Unplug } from "lucide-react";

declare global {
  interface Window {
    ethereum?: {
      request: (args: { method: string }) => Promise<string[]>;
      on?: (event: string, callback: (...args: unknown[]) => void) => void;
      removeListener?: (event: string, callback: (...args: unknown[]) => void) => void;
    };
  }
}

export default function WalletConnect() {
  const [account, setAccount] = useState("");
  const [message, setMessage] = useState("");

  async function connect() {
    if (!window.ethereum) {
      setMessage("No injected wallet found. Install a compatible wallet to try this optional feature.");
      return;
    }
    try {
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      setAccount(accounts?.[0] ?? "");
      setMessage(accounts?.[0] ? "Wallet connected. No transactions are requested by this site." : "No account selected.");
    } catch {
      setMessage("Connection cancelled or unavailable.");
    }
  }

  function disconnect() {
    setAccount("");
    setMessage("Wallet address hidden locally. To revoke site permissions, use your wallet settings.");
  }

  const short = account ? `${account.slice(0, 6)}…${account.slice(-4)}` : "";
  return (
    <div className="wallet-wrap">
      <button className={account ? "wallet-button connected" : "wallet-button"} onClick={account ? disconnect : connect}>
        {account ? <Unplug size={14} /> : <Wallet size={14} />}
        {account ? short : "Connect wallet"}
      </button>
      {message && <div className="wallet-message" role="status">{message}<button onClick={() => setMessage("")} aria-label="Dismiss message">×</button></div>}
    </div>
  );
}
