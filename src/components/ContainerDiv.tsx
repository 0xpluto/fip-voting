import { PropsWithChildren } from "react";

const ContainerDiv = ({ children }: PropsWithChildren) => {
  return (
    <div className=" bg-white rounded-md shadow-md p-3 md:p-5">{children}</div>
  );
};

export default ContainerDiv;
