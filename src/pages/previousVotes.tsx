import { PropsWithChildren } from "react";
import PreviousVotes from "../components/PreviousVotes";

const ContainerDiv = ({ children }: PropsWithChildren) => {
  return (
    <div className="bg-white rounded-md shadow-md p-3 md:p-5">{children}</div>
  );
};

export default function previousVotes() {
  return (
    <ContainerDiv>
      <PreviousVotes />
    </ContainerDiv>
  );
}
