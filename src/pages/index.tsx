"use client";

import { PropsWithChildren, useEffect } from "react";
// import ViewVote from "../components/ViewVote";
// import TotalVotes from "../components/TotalVotes";
// import VotingPower from "../components/VotingPower";
// import ContainerDiv from "@/components/ContainerDiv";
import axios from "axios";
import { useRouter } from "next/router";
import { BallTriangle } from "react-loader-spinner";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    getActiveFIP();
  });

  const getActiveFIP = async () => {
    try {
      const res = await Promise.all([
        axios.get(
          `${process.env.NEXT_PUBLIC_API}/filecoin/activevotes?network=mainnet`
        ),
        axios.get(
          `${process.env.NEXT_PUBLIC_API}/filecoin/votehistory?network=mainnet
          `
        ),
      ]);
      if (res[0].data.length > 0) {
        redirect(res[0].data[0]);
      } else {
        console.log(res[1].data[res[1].data.length - 1]);
        redirect(res[1].data[res[1].data.length - 1]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const redirect = (fip: number) => {
    const leadingZeroes = fip < 10 ? "000" : "00";
    router.push("/vote/fip-" + leadingZeroes + fip);
  };

  return (
    <div className="flex flex-row justify-center my-32">
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        visible={true}
      />
    </div>
  );
}
