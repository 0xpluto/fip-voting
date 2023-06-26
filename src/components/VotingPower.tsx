import axios from "axios";
import { useRouter } from "next/router";
import { FunctionComponent, useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

type Props = {
  yes: number;
  no: number;
  abstain: number;
};

const VotingPower: FunctionComponent<Props> = ({ yes, no, abstain }) => {
  const totalVotes = yes + no + abstain;
  const yesPercentage = (yes / totalVotes) * 100;
  const noPercentage = (no / totalVotes) * 100;
  const abstainPercentage = (abstain / totalVotes) * 100;

  return (
    <div>
      <div className="text-sm text-neutral-400 mb-3">Voting Power</div>
      <div className="flex flex-row items-center mb-3">
        <div style={{ width: "100px", height: "100px" }}>
          <CircularProgressbar
            className="basis-1/2 mr-3"
            value={yesPercentage}
            text={`${yesPercentage.toFixed(2)}%`}
            styles={buildStyles({
              pathColor: `#228B22`,
              textColor: `#228B22`,
            })}
          />
        </div>
        <div className="ml-5">{`${yesPercentage.toFixed(2)}%`}</div>
      </div>
      <div className="flex flex-row items-center mb-3">
        <div style={{ width: "100px", height: "100px" }}>
          <CircularProgressbar
            className="basis-1/2 mr-3"
            value={noPercentage}
            text={`${noPercentage.toFixed(2)}%`}
            styles={buildStyles({
              pathColor: `#ED2939`,
              textColor: `#ED2939`,
            })}
          />
        </div>
        <div className="ml-5">{`${noPercentage.toFixed(2)}%`}</div>
      </div>
      <div className="flex flex-row items-center">
        <div style={{ width: "100px", height: "100px" }}>
          <CircularProgressbar
            className="basis-1/2 mr-3"
            value={abstainPercentage}
            text={`${abstainPercentage.toFixed(2)}%`}
            styles={buildStyles({
              pathColor: `#FDDA0D`,
              textColor: `#FDDA0D`,
            })}
          />
        </div>
        <div className="ml-5">{`${abstainPercentage.toFixed(2)}%`}</div>
      </div>
    </div>
  );
};

export default VotingPower;
