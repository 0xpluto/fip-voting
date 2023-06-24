import { useEffect, useState } from "react";
import ViewVote from "../../components/ViewVote";
import TotalVotes from "../../components/TotalVotes";
import VotingPower from "../../components/VotingPower";
import Vote from "../../components/Vote";
import axios, { AxiosError } from "axios";
import MarkdownIt from "markdown-it";
import { useRouter } from "next/router";
import Countdown from "react-countdown";
import { useAccount, useConnect, useEnsName } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import ContainerDiv from "@/components/ContainerDiv";

export default function Home(props: any) {
  const { address, isConnected } = useAccount();
  const { data: ensName } = useEnsName({ address });
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const [time, setTime] = useState(0);
  const [votes, setVotes] = useState<{
    yay: number;
    nay: number;
    abstain: number;
    yay_storage_size: number;
    nay_storage_size: number;
    abstain_storage_size: number;
  }>({
    yay: 0,
    nay: 0,
    abstain: 0,
    yay_storage_size: 0,
    nay_storage_size: 0,
    abstain_storage_size: 0,
  });
  const router = useRouter();
  const md = new MarkdownIt();
  const children = md.parse(props.data, {})[2].children;
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchVotes();
  }, []);

  const fetchVotes = async () => {
    try {
      const res = await axios.get(
        `http://18.116.124.40/filecoin/vote?fip_number=${parseInt(
          router.query.fip?.slice(-2) as string
        )}&network=calibration`
      );
      console.log(res);
      setVotes(JSON.parse(res.data));
    } catch (error: any) {
      console.log(error.response.status);
      setError(error.response.status);
      setTime(error.response.data);
      console.log(error.response.data);
    }
  };

  console.log("Votes", children![8].content);

  return (
    <>
      {/* <div className="my-4">
        <ContainerDiv>
          <div className="flex flex-row justify-between">
            {error === 403 && <Countdown date={Date.now() + time * 1000} />}
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
          </div>
        </ContainerDiv>
      </div> */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ContainerDiv>
          <ViewVote
            title={props && children![0].content}
            description={props && children![2].content}
            status={props && children![4].content}
            author={props && children![8].content}
            type={props && children![6].content}
          />
        </ContainerDiv>
        <ContainerDiv>
          {!error && votes ? <TotalVotes votes={votes} /> : <Vote />}
        </ContainerDiv>
        <ContainerDiv>
          {!votes ? (
            <VotingPower yes={0} no={0} abstain={0} />
          ) : (
            <VotingPower
              yes={(votes as any).yay_storage_size}
              no={(votes as any).nay_storage_size}
              abstain={(votes as any).abstain_storage_size}
            />
          )}
        </ContainerDiv>
      </div>
    </>
  );
}

export async function getServerSideProps(ctx: any) {
  // Fetch data from external API
  const { fip } = ctx.query;
  const res = await axios.get(
    `https://raw.githubusercontent.com/filecoin-project/FIPs/master/FIPS/${fip}.md`
  );
  const data = res.data;

  // Pass data to the page via props
  return { props: { data } };
}
