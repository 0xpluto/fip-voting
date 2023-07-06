import { useEffect, useState } from "react";
import { useAccount, useConnect, useEnsName } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import axios from "axios";
import ContainerDiv from "@/components/ContainerDiv";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();
  const [starters, setStarters] = useState([]);
  const { address, isConnected } = useAccount();
  const { data: ensName } = useEnsName({ address });
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });

  useEffect(() => {
    if (starters.includes(address?.toLowerCase() as never)) {
      console.log("Here");
      router.push("/startVote");
    }
    if (starters.length == 0) {
      fetchVoteStarters();
    }
  }, [address, starters]);

  const fetchVoteStarters = async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API}/filecoin/voterstarters?network=mainnet`
      );
      console.log(res);
      setStarters(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <ContainerDiv>
        {isConnected ? (
          <div>Connected to {address}</div>
        ) : (
          <button
            className="bg-orange-400 px-3 py-2 rounded-md shadow-sm text-white"
            onClick={() => connect()}
          >
            Connect Wallet
          </button>
        )}
      </ContainerDiv>
    </div>
  );
};

export default Home;
