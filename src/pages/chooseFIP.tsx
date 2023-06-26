import { PropsWithChildren, useState } from "react";
import Link from "next/link";

const ContainerDiv = ({ children }: PropsWithChildren) => {
  return (
    <div className="text-center bg-white rounded-md shadow-md p-3 md:p-5">
      {children}
    </div>
  );
};

export default function Home() {
  const [fip, setFip] = useState("fip-0001");

  return (
    <div className="max-w-sm mx-auto">
      <ContainerDiv>
        <label className="flex flex-row justify-between">
          Choose FIP:
          <select value={fip} onChange={(e) => setFip(e.target.value)}>
            <option value="fip-0001">FIP-0001</option>
            <option value="fip-0002">FIP-0002</option>
            <option value="fip-0003">FIP-0003</option>
            <option value="fip-0004">FIP-0004</option>
            <option value="fip-0005">FIP-0005</option>
            <option value="fip-0006">FIP-0006</option>
            <option value="fip-0007">FIP-0007</option>
            <option value="fip-0008">FIP-0008</option>
            <option value="fip-0009">FIP-0009</option>
            <option value="fip-0010">FIP-0010</option>
            <option value="fip-0011">FIP-0011</option>
            <option value="fip-0012">FIP-0012</option>
            <option value="fip-0013">FIP-0013</option>
            <option value="fip-0014">FIP-0014</option>
            <option value="fip-0015">FIP-0015</option>
            <option value="fip-0016">FIP-0016</option>
            <option value="fip-0017">FIP-0017</option>
            <option value="fip-0018">FIP-0018</option>
            <option value="fip-0019">FIP-0019</option>
            <option value="fip-0020">FIP-0020</option>
            <option value="fip-0021">FIP-0021</option>
            <option value="fip-0022">FIP-0022</option>
            <option value="fip-0023">FIP-0023</option>
            <option value="fip-0024">FIP-0024</option>
            <option value="fip-0025">FIP-0025</option>
            <option value="fip-0026">FIP-0026</option>
            <option value="fip-0027">FIP-0027</option>
            <option value="fip-0028">FIP-0028</option>
            <option value="fip-0029">FIP-0029</option>
            <option value="fip-0030">FIP-0030</option>
            <option value="fip-0031">FIP-0031</option>
            <option value="fip-0032">FIP-0032</option>
            <option value="fip-0033">FIP-0033</option>
            <option value="fip-0034">FIP-0034</option>
            <option value="fip-0035">FIP-0035</option>
            <option value="fip-0036">FIP-0036</option>
            <option value="fip-0037">FIP-0037</option>
            <option value="fip-0038">FIP-0038</option>
            <option value="fip-0039">FIP-0039</option>
            <option value="fip-0040">FIP-0040</option>
            <option value="fip-0041">FIP-0041</option>
            <option value="fip-0042">FIP-0042</option>
            <option value="fip-0043">FIP-0043</option>
            <option value="fip-0044">FIP-0044</option>
            <option value="fip-0045">FIP-0045</option>
            <option value="fip-0046">FIP-0046</option>
            <option value="fip-0047">FIP-0047</option>
            <option value="fip-0048">FIP-0048</option>
            <option value="fip-0049">FIP-0049</option>
            <option value="fip-0050">FIP-0050</option>
            <option value="fip-0051">FIP-0051</option>
            <option value="fip-0052">FIP-0052</option>
            <option value="fip-0053">FIP-0053</option>
            <option value="fip-0054">FIP-0054</option>
            <option value="fip-0055">FIP-0055</option>
            <option value="fip-0056">FIP-0056</option>
            <option value="fip-0057">FIP-0057</option>
            <option value="fip-0058">FIP-0058</option>
            <option value="fip-0059">FIP-0059</option>
            <option value="fip-0060">FIP-0060</option>
            <option value="fip-0061">FIP-0061</option>
            <option value="fip-0062">FIP-0062</option>
            <option value="fip-0063">FIP-0063</option>
          </select>
        </label>
        <Link
          href={"/vote/" + fip}
          className="mx-auto bg-slate-400 shadow-md px-3 py-1 rounded-sm"
        >
          Submit
        </Link>
      </ContainerDiv>
    </div>
  );
}
