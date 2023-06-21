import { PropsWithChildren } from "react";
import ViewVote from "../components/ViewVote";
import TotalVotes from "../components/TotalVotes";
import VotingPower from "../components/VotingPower";
import Vote from "../components/Vote";

export const data = {
  labels: ["Yes", "No", "Abstain"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

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
          <Vote />
        </ContainerDiv>
        <ContainerDiv>
          <VotingPower yes={38} no={68} abstain={62} />
        </ContainerDiv>
      </div>
    </>
  );
}
