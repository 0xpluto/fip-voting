import React, { FunctionComponent } from "react";

type Props = {
  title: string;
  description: string;
};

const ViewVote: FunctionComponent<Props> = ({ title, description }) => {
  return (
    <>
      <div className="text-sm text-neutral-400 mb-3">Latest Vote Results </div>
      <div className="font-bold">{title}</div>
      <div>{description}</div>
    </>
  );
};

export default ViewVote;
