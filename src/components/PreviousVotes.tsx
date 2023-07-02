import React, { useEffect, useState, useRef } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import axios from "axios";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  indexAxis: "y" as const,
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "right" as const,
    },
    title: {
      display: true,
      text: "Previous Votes",
    },
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

type Dataset = {
  label: string;
  data: number[];
  // borderColor: "rgb(53, 162, 235)",
  backgroundColor: string;
};

export default function App() {
  const chartRef = useRef(null);

  const [fips, setFips] = useState(null);
  const [labels, setLabels] = useState<String[]>([]);
  const [datasets, setDatasets] = useState<Dataset[]>([]);
  const data = {
    labels,
    datasets,
  };

  const fetchPreviousVotes = async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API}/filecoin/allconcludedvotes?network=calibration`
      );
<<<<<<< HEAD
=======
      console.log(res.data);
>>>>>>> 381ac22ceacb64bcc30ea3bffbfc036be5364fe4
      setFips(res.data);
      createLabels(res.data);
      createDatasets(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPreviousVotes();
  }, [fetchPreviousVotes]);

  useEffect(() => {
    const chart = chartRef.current;

    if (chart) {
      console.log("ChartJS", chart);
    }
  }, []);

  const footer = (tooltip: any) => {
    console.log("TOOL TIP", tooltip);
    const keys = Object.keys(fips!);
    const fip: any = fips![keys[tooltip[0].dataIndex]];
    const sum = fip.yay + fip.nay + fip.abstain;
    console.log("SUM", sum);
    console.log("FIPS", fips![keys[tooltip[0].dataIndex]]);
    return (
      "Vote Power: " + (parseInt(tooltip[0].formattedValue) / sum) * 100 + "%"
    );
  };

  const createLabels = (d: any) => {
    let buffer: string[] = [];
    Object.keys(d).map((l) => buffer.push(`FIP-${l}`));
    setLabels(buffer);
  };

  const createDatasets = (d: any) => {
    let buffer = [];
    let yay: number[] = [];
    let nay: number[] = [];
    let abstain: number[] = [];
    Object.keys(d).map((l) => {
      yay.push(d[l].yay);
      nay.push(d[l].nay);
      abstain.push(d[l].abstain);
    });
    setDatasets([
      {
        label: "Nay Votes",
        data: nay,
        // borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(249,53,53,0.8)",
      },
      {
        label: "Abstain Votes",
        data: abstain,
        // borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(249,171,53,0.8)",
      },
      {
        label: "Yay Votes",
        data: yay,
        // borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53,249,53,0.8)",
      },
    ]);
  };

  return (
    <div className="md:px-56">
      <Bar
        ref={chartRef}
        options={{
          ...options,
          plugins: {
            tooltip: {
              callbacks: {
                footer: footer,
              },
            },
          },
        }}
        data={data}
      />
    </div>
  );
}
