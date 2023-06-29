import axios from "axios";
import { useRouter } from "next/router";
import { FunctionComponent, useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

type Votes = {
  yay: number;
  nay: number;
  abstain: number;
  yay_storage_size: number;
  nay_storage_size: number;
  abstain_storage_size: number;
};

const VotingPower: FunctionComponent<{ data: Votes }> = ({ data }) => {
  const nan =
    data.abstain_storage_size +
      data.nay_storage_size +
      data.yay_storage_size ===
    0;

  console.log(
    "NAY",
    data,
    data.nay_storage_size + data.nay_storage_size + data.abstain_storage_size,
    (data.nay_storage_size /
      (data.nay_storage_size +
        data.nay_storage_size +
        data.abstain_storage_size)) *
      100
  );

  return (
    <div>
      <div className="text-sm text-neutral-400 mb-3">Voting Power</div>
      <div className="flex flex-row items-center mb-3">
        <div style={{ width: "100px", height: "100px" }}>
          <CircularProgressbar
            className="basis-1/2 mr-3"
            value={
              nan
                ? 0
                : (data.yay_storage_size /
                    (data.yay_storage_size +
                      data.nay_storage_size +
                      data.abstain_storage_size)) *
                  100
            }
            text={`${
              nan
                ? 0
                : (data.yay_storage_size /
                    (data.yay_storage_size +
                      data.nay_storage_size +
                      data.abstain_storage_size)) *
                  100
            }%`}
            styles={buildStyles({
              pathColor: `#228B22`,
              textColor: `#228B22`,
            })}
          />
        </div>
        <div className="ml-5">{data.yay_storage_size} bytes</div>
      </div>
      <div className="flex flex-row items-center mb-3">
        <div style={{ width: "100px", height: "100px" }}>
          <CircularProgressbar
            className="basis-1/2 mr-3"
            value={
              nan
                ? 0
                : (data.nay_storage_size /
                    (data.yay_storage_size +
                      data.nay_storage_size +
                      data.abstain_storage_size)) *
                  100
            }
            text={`${
              nan
                ? 0
                : (data.nay_storage_size /
                    (data.yay_storage_size +
                      data.nay_storage_size +
                      data.abstain_storage_size)) *
                  100
            }%`}
            styles={buildStyles({
              pathColor: `#ED2939`,
              textColor: `#ED2939`,
            })}
          />
        </div>
        <div className="ml-5">{data.nay_storage_size} bytes</div>
      </div>
      <div className="flex flex-row items-center">
        <div style={{ width: "100px", height: "100px" }}>
          <CircularProgressbar
            className="basis-1/2 mr-3"
            value={
              nan
                ? 0
                : (data.abstain_storage_size /
                    (data.yay_storage_size +
                      data.nay_storage_size +
                      data.abstain_storage_size)) *
                  100
            }
            text={`${
              nan
                ? 0
                : (data.abstain_storage_size /
                    (data.yay_storage_size +
                      data.nay_storage_size +
                      data.abstain_storage_size)) *
                  100
            }%`}
            styles={buildStyles({
              pathColor: `#FDDA0D`,
              textColor: `#FDDA0D`,
            })}
          />
        </div>
        <div className="ml-5">{data.abstain_storage_size} bytes</div>
      </div>
    </div>
  );
};

export default VotingPower;
