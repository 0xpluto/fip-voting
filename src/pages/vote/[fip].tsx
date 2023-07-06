"use client";

import { useEffect, useState } from "react";
import ViewVote from "../../components/ViewVote";
// import TotalVotes from "../../components/TotalVotes";
// import VotingPower from "../../components/VotingPower";
import Vote from "../../components/Vote";
import axios from "axios";
import MarkdownIt from "markdown-it";
import { useRouter } from "next/router";
import Countdown from "react-countdown";
import ContainerDiv from "@/components/ContainerDiv";
import StartVote from "@/components/startVote";
import RegisterVoteStarter from "@/components/voteStarter";
// import WalletVotingPower from "@/components/WalletVotingPower";
import dynamic from "next/dynamic";
import Token from "markdown-it/lib/token";

const WalletVotingPower = dynamic(
  () => import("@/components/WalletVotingPower")
);
const VotingPower = dynamic(() => import("../../components/VotingPower"), {
  ssr: false,
});
const TotalVotes = dynamic(() => import("../../components/TotalVotes"), {
  ssr: false,
});
const PreviousVotes = dynamic(() => import("../../components/PreviousVotes"));

export default function Home() {
  const [notFound, setNotFound] = useState(false);
  const [children, setChildren] = useState<Token[]>([]);
  const [active, setActive] = useState(false);
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
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchVotes();
  }, [router]);

  useEffect(() => {
    console.log(router.query.fip);
    if (router.query.fip) {
      fetchFipInfo(router.query.fip);
    }
  }, [router]);

  const fetchFipInfo = async (fip: any) => {
    try {
      const res = await axios.get(
        `https://raw.githubusercontent.com/filecoin-project/FIPs/master/FIPS/${fip}.md`
      );
      console.log("INFO", res.data);
      const child = md.parse(res.data, {})[2].children;
      setChildren(child!);
    } catch (error) {
      console.log(error);
      setNotFound(true);
    }
  };

  const fetchVotes = async () => {
    setActive(false);
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API}/filecoin/vote?fip_number=${parseInt(
          router.query.fip?.slice(-2) as string
        )}&network=mainnet`
      );
      console.log(typeof res.data);
      console.log("INSDIE ", res.data);
      console.log(Object.hasOwn(res.data, "yay"));
      if (Object.hasOwn(res.data, "yay")) {
        setVotes(res.data);
      } else {
        setActive(true);
        setTime(res.data);
      }
    } catch (error: any) {
      // console.log(error.response.status);
      // setError(error.response.status);
      console.log(error);
    }
  };

  console.log(children);

  if (notFound) {
    return <ContainerDiv>No such FIP</ContainerDiv>;
  }
  return (
    <>
      <div className="my-4">
        <ContainerDiv>
          <div className="flex flex-row justify-between">
            {active && (
              <Countdown
                date={Date.now() + time * 1000}
                onComplete={() => fetchVotes()}
              />
            )}
            <StartVote />
            <RegisterVoteStarter />
          </div>
        </ContainerDiv>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ContainerDiv>
          {children.length > 0 ? (
            <ViewVote
              title={children![0].content}
              description={children![2].content}
              status={children![4].content}
              author={children![8].content}
              type={children![6].content}
            />
          ) : null}
        </ContainerDiv>
        <ContainerDiv>
          {!active ? <TotalVotes votes={votes} /> : <Vote />}
        </ContainerDiv>
        <ContainerDiv>
          {active ? (
            <WalletVotingPower />
          ) : (
            <VotingPower
              // yes={(votes as any).yay_storage_size}
              // no={(votes as any).nay_storage_size}
              // abstain={(votes as any).abstain_storage_size}
              data={votes}
            />
          )}
        </ContainerDiv>
      </div>
      <div className="mt-4">
        <ContainerDiv>
          <PreviousVotes />
        </ContainerDiv>
      </div>
    </>
  );
}
