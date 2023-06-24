import React, { FunctionComponent, useState } from "react";
import { useSignMessage } from "wagmi";
import { useRouter } from "next/router";
import axios from "axios";

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
          )}&network=mainnet`,
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
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
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
              ? " border-4 border-neutral-800 rounded-md"
              : "hover:border-4 rounded-md"
          }
          style={{ height: "50px", width: "100%", background: "#ED2939" }}
          onClick={() => setMessage("NAY")}
        ></div>
        <div
          className={
            message === "ABSTAIN"
              ? "border-5 border-neutral-800 rounded-md"
              : "hover:border-5 rounded-md"
          }
          style={{ height: "50px", width: "100%", background: "#FDDA0D" }}
          onClick={() => setMessage("ABSTAIN")}
        ></div>
        <div
          className={
            message === "YAY"
              ? "border-4 border-neutral-800 rounded-md"
              : "hover:border-4 rounded-md"
          }
          style={{ height: "50px", width: "100%", background: "#228B22" }}
          onClick={() => setMessage("YAY")}
        ></div>
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
