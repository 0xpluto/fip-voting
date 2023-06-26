import React, { FunctionComponent, useState } from "react";
import { useSignMessage } from "wagmi";
import { useRouter } from "next/router";
import axios from "axios";
import { toast } from "react-toastify";

const Vote: FunctionComponent = () => {
  const router = useRouter();
  const [message, setMessage] = useState<string>("");
  const { data, isError, isLoading, isSuccess, signMessage } = useSignMessage({
    message: `${message}: FIP-${parseInt(
      router.query.fip?.slice(-2) as string
    )}`,
    onSettled(data, error) {
      console.log("Settled", { data, error });
      axios
        .post(
          `${process.env.NEXT_PUBLIC_API}/filecoin/vote?fip_number=${parseInt(
            router.query.fip?.slice(-2) as string
          )}&network=calibration`,
          {
            signature: data,
            message: `${message}: FIP-${parseInt(
              router.query.fip?.slice(-2) as string
            )}`,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then(function (response) {
          toast.success("Vote casted successfully", {
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

  console.log(
    `${message}: FIP-${parseInt(router.query.fip?.slice(-2) as string)}`
  );

  return (
    <>
      <div className="text-sm text-neutral-400 mb-3">Choose Vote</div>
      <div className="flex flex-col gap-4">
        <div
          className={
            message === "NAY"
              ? " border-4 border-neutral-800  dark:border-slate-200 rounded-md text-center pt-3 "
              : "hover:border-4 rounded-md text-center pt-3 "
          }
          style={{ height: "50px", width: "100%", background: "#ED2939" }}
          onClick={() => setMessage("NAY")}
        >
          NAY
        </div>
        <div
          className={
            message === "ABSTAIN"
              ? "border-4 border-neutral-800 dark:border-slate-200 rounded-md text-center items-center pt-3"
              : "hover:border-4 rounded-md text-center pt-3"
          }
          style={{ height: "50px", width: "100%", background: "#FDDA0D" }}
          onClick={() => setMessage("ABSTAIN")}
        >
          ABSTAIN
        </div>
        <div
          className={
            message === "YAY"
              ? "border-4 border-neutral-800  dark:border-slate-200 rounded-md text-center pt-3"
              : "hover:border-4 rounded-md text-center pt-3"
          }
          style={{ height: "50px", width: "100%", background: "#228B22" }}
          onClick={() => setMessage("YAY")}
        >
          YAY
        </div>
        <button
          onClick={() => signMessage()}
          className="w-100 bg-slate-400 rounded-sm py-2"
        >
          Vote
        </button>
      </div>
    </>
  );
};

export default Vote;
