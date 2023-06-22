import { PropsWithChildren } from "react";
import ViewVote from "../components/ViewVote";
import TotalVotes from "../components/TotalVotes";
import VotingPower from "../components/VotingPower";

const ContainerDiv = ({ children }: PropsWithChildren) => {
  return (
    <div className="bg-white rounded-md shadow-md p-3 md:p-5">{children}</div>
  );
};

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ContainerDiv>
          <ViewVote
            title="FIP 312"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis labore dignissimos quae illum dolore. Reiciendis nisi, repellat sequi officia aspernatur hic illum assumenda similique explicabo cum quidem commodi ipsam iusto."
          />
        </ContainerDiv>
        <ContainerDiv>
          <TotalVotes />
        </ContainerDiv>
        <ContainerDiv>
          <VotingPower yes={38} no={68} abstain={62} />
        </ContainerDiv>
      </div>
    </>
  );
}
