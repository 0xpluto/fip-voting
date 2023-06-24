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
  return (
    <div>
      <div className="text-sm text-neutral-400 mb-3">Voting Power</div>
      <div className="flex flex-row items-center mb-3">
        <div style={{ width: "100px", height: "100px" }}>
          <CircularProgressbar
            className="basis-1/2 mr-3"
            value={yes}
            text={`${yes}%`}
            styles={buildStyles({
              pathColor: `#228B22`,
              textColor: `#228B22`,
            })}
          />
        </div>
        <div className="ml-5">{yes} TB</div>
      </div>
      <div className="flex flex-row items-center mb-3">
        <div style={{ width: "100px", height: "100px" }}>
          <CircularProgressbar
            className="basis-1/2 mr-3"
            value={no}
            text={`${no}%`}
            styles={buildStyles({
              pathColor: `#ED2939`,
              textColor: `#ED2939`,
            })}
          />
        </div>
        <div className="ml-5">{no} TB</div>
      </div>
      <div className="flex flex-row items-center">
        <div style={{ width: "100px", height: "100px" }}>
          <CircularProgressbar
            className="basis-1/2 mr-3"
            value={abstain}
            text={`${abstain}%`}
            styles={buildStyles({
              pathColor: `#FDDA0D`,
              textColor: `#FDDA0D`,
            })}
          />
        </div>
        <div className="ml-5">{abstain} TB</div>
      </div>
    </div>
  );
};

export default VotingPower;
