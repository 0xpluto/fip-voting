import { useEffect, useState } from "react";
import ContainerDiv from "../components/ContainerDiv";
import { useSignMessage } from "wagmi";
import axios from "axios";
import { useAccount } from "wagmi";
import { toast } from "react-toastify";
import { Octokit, App } from "octokit";

const octokit = new Octokit({ auth: process.env.NODE_PUBLIC_OCTO });

export default function StartVote() {
  const [fips, setFips] = useState<string[]>([]);
  const [isStarter, setIsStarter] = useState(false);
  const [starters, setStarters] = useState([]);
  const { address, isConnected } = useAccount();
  const [FIP, setFip] = useState("FIP-1");
  const { data, isError, isLoading, isSuccess, signMessage } = useSignMessage({
    message: FIP,
    onSettled(data, error) {
      console.log("Settled", { data, error });
      axios
        .post(
          `${process.env.NEXT_PUBLIC_API}/filecoin/startvote?network=calibration`,
          {
            signature: data,
            message: FIP,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then(function (response) {
          console.log(response);
          toast.success("Voting Started Successfully", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        })
        .catch(function (error) {
          console.log(error);
          toast.error(error.message, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        });
    },
  });

  useEffect(() => {
    fetchRepo();
    if (starters.includes(address?.toLowerCase() as never)) {
      setIsStarter(true);
    }
    if (starters.length == 0) {
      fetchVoteStarters();
    }
  }, [address, starters]);

  const fetchVoteStarters = async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API}/filecoin/voterstarters?network=calibration`
      );
      console.log(res);
      setStarters(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchRepo = async () => {
    console.log(process.env.NEXT_PUBLIC_OCTO);
    try {
      const buffer: string[] = [];
      const { data } = await axios.get(
        "https://api.github.com/repos/filecoin-project/FIPS/git/trees/cad110e51558a00945e3922895cd89659b673852"
      );
      data.tree.map((d: any) => {
        buffer.push(
          d.path.slice(0, 3).toUpperCase() + "-" + parseInt(d.path.slice(4, 8))
        );
      });
      setFips(buffer);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(fips);

  if (isStarter)
    return (
      <div className="flex flex-row items-center  ">
        <label className="">
          Choose FIP:
          <select
            className="dark:bg-slate-600 mx-3 rounded-md p-2"
            value={FIP}
            onChange={(e) => setFip(e.target.value)}
          >
            {fips.map((f) => (
              <option key={f} value={f}>
                {f}
              </option>
            ))}
          </select>
        </label>
        <button
          onClick={() => signMessage()}
          className="bg-green-500 shadow-md  py-2 px-4 rounded-md"
        >
          Start Votes
        </button>
      </div>
    );
  else return null;
}
