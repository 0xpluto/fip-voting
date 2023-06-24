import React, { FunctionComponent } from "react";
import S from "string";

type Props = {
  title: string;
  description: string;
  status: string;
  author: string;
  type: string;
};

const formatString = (str: string) => {
  const arr = str.split(" ");
  let buffer = [];
  for (let i in arr) {
    if (arr[i].length > 3) {
      buffer.push(S(arr[i]).capitalize().s);
    } else {
      buffer.push(arr[i]);
    }
  }
  return buffer.join(" ");
};

const ViewVote: FunctionComponent<Props> = ({
  title,
  description,
  status,
  author,
  type,
}) => {
  return (
    <div className="flex flex-col gap-2 justify-start">
      <div className="text-sm text-neutral-400 mb-3">Latest Vote Results </div>
      <div className="font-bold">{title.toUpperCase()}</div>
      <div>{formatString(description)}</div>
      <div>{formatString(status)}</div>
      <div>{formatString(author)}</div>
      <div>{formatString(type)}</div>
    </div>
  );
};

export default ViewVote;
