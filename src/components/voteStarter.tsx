import { useEffect, useState } from "react";
import ContainerDiv from "../components/ContainerDiv";
import { useSignMessage } from "wagmi";
import axios from "axios";
import { useAccount } from "wagmi";
import { toast } from "react-toastify";

export default function RegisterVoteStarter() {
  const [isStarter, setIsStarter] = useState(false);
  const [starters, setStarters] = useState([]);
  const { address, isConnected } = useAccount();
  const [FIP, setFip] = useState("FIP-1");
  const [newVoteStarter, setNewVoteStarter] = useState("");
  const { data, isError, isLoading, isSuccess, signMessage } = useSignMessage({
    message: newVoteStarter,
    onSettled(data, error) {
      console.log("Settled", { data, error });
      axios
        .post(
          `${process.env.NEXT_PUBLIC_API}/filecoin/registerstarter?network=calibration`,
          {
            signature: data,
            message: newVoteStarter,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then(function (response) {
          console.log(response);
          toast.success("New Vote Starter Submitted Successfully", {
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

  if (isStarter)
    return (
      <div className="flex flex-row items-center " style={{ padding: '8px'}}>
        <label className="">
          Input new vote starter:
            <input type="text" value={newVoteStarter} onChange={(e) => setNewVoteStarter(e.target.value)} style={{ border: '2px solid gray', borderRadius: '6px'}}/>
        </label>
        <button
          onClick={() => signMessage()}
          className="bg-green-500 shadow-md  py-2 px-4 rounded-md"
        >
          Submit starter
        </button>
      </div>
    );
  else return null;
}
