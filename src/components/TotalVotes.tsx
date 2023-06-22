import { FunctionComponent, useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

type Props = {
  votes: {
    yay: number;
    nay: number;
    abstain: number;
    yay_storage_size: number;
    nay_storage_size: number;
    abstain_storage_size: number;
  };
};

const TotalVotes: FunctionComponent<Props> = (props: any) => {
  const data = {
    labels: ["Yes", "No", "Abstain"],
    datasets: [
      {
        label: "# of Votes",
        data: [props.votes.yay, props.votes.nay, props.votes.abstain],
        backgroundColor: [
          "rgba(54, 235, 35, 0.2)",
          "rgba(255, 99, 132, 0.2)",
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
  return (
    <>
      <div className="text-sm text-neutral-400 mb-3">Latest Vote Results </div>
      <div className="mx-auto px-24">
        <Doughnut data={data} />
      </div>
    </>
  );
};

export default TotalVotes;
