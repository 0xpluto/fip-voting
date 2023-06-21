import { FunctionComponent } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

type Props = {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string[];
    borderColor: string[];
    borderWidth: number;
  }[];
};

const TotalVotes: FunctionComponent<Props> = (data) => {
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
