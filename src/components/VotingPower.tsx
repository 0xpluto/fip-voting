import { FunctionComponent } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

type Props = {
  yes: number;
  no: number;
  abstain: number;
};

const VotingPower: FunctionComponent<Props> = ({ yes, no, abstain }) => {
  return (
    <div>
      <div className="text-sm text-neutral-400 mb-3">Voting Power</div>
      <div className="flex flex-row items-center mb-3">
        <div style={{ width: "100px", height: "100px" }}>
          <CircularProgressbar
            className="basis-1/2 mr-3"
            value={yes}
            text={`${yes}%`}
          />
        </div>
        <div className="ml-5">8 TB</div>
      </div>
      <div className="flex flex-row items-center mb-3">
        <div style={{ width: "100px", height: "100px" }}>
          <CircularProgressbar
            className="basis-1/2 mr-3"
            value={no}
            text={`${no}%`}
          />
        </div>
        <div className="ml-5">8 TB</div>
      </div>
      <div className="flex flex-row items-center">
        <div style={{ width: "100px", height: "100px" }}>
          <CircularProgressbar
            className="basis-1/2 mr-3"
            value={abstain}
            text={`${abstain}%`}
          />
        </div>
        <div className="ml-5">8 TB</div>
      </div>
    </div>
  );
};

export default VotingPower;
