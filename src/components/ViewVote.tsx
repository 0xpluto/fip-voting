import React, { FunctionComponent } from "react";

type Props = {
  title: string;
  description: string;
  status: string;
  author: string;
  type: string;
};

const ViewVote: FunctionComponent<Props> = ({
  title,
  description,
  status,
  author,
  type,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-sm text-neutral-400 mb-3">Latest Vote Results </div>
      <div className="font-bold">{title.toUpperCase()}</div>
      <div>{description}</div>
      <div>{status}</div>
      <div>{author}</div>
      <div>{type}</div>
    </div>
  );
};

export default ViewVote;
