import React, { FunctionComponent, useState } from "react";
import { useSignMessage } from "wagmi";

const Vote: FunctionComponent = () => {
  const [message, setMessage] = useState<string>("");
  const { data, isError, isLoading, isSuccess, signMessage } = useSignMessage({
    message,
    onSettled(data, error) {
      console.log("Settled", { data, error });
    },
  });

  return (
    <>
      <div className="text-sm text-neutral-400 mb-3">Choose Vote</div>
      <div className="flex flex-col gap-4">
        <div
          className="hover:border-4"
          style={{ height: "50px", width: "100%", background: "red" }}
          onClick={() => setMessage("NAY")}
        ></div>
        <div
          className="hover:border-4"
          style={{ height: "50px", width: "100%", background: "yellow" }}
          onClick={() => setMessage("ABSTAIN")}
        ></div>
        <div
          className="hover:border-4"
          style={{ height: "50px", width: "100%", background: "green" }}
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
