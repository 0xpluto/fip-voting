import axios from "axios";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";

const WalletVotingPower = () => {
  const { address, isConnected } = useAccount();
  const [votingPower, setVotingPower] = useState(0);

  console.log(address, isConnected);

  useEffect(() => {
    if (isConnected) fetchVotingPower();
  }, [address]);

  const fetchVotingPower = async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API}/filecoin/votingpower?network=mainnet&address=${address}`
      );

      console.log("Wallet Voting Power", res);
      setVotingPower(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="text-sm text-neutral-400 mb-3">Wallet Voting Power</div>
      <div>Wallet Voting Power: {votingPower}</div>
    </>
  );
};

export default WalletVotingPower;
