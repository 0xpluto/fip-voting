import { useState, FunctionComponent } from "react";
import ContainerDiv from "../components/ContainerDiv";
import { useSignMessage } from "wagmi";
import axios from "axios";

export default function StartVote<FunctionComponent>() {
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
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  });

  console.log(FIP);
  return (
    <ContainerDiv>
      <div className="text-center">
        <label className="flex flex-row justify-center mb-2">
          Choose FIP:
          <select value={FIP} onChange={(e) => setFip(e.target.value)}>
            <option value="FIP-1">FIP-1</option>
            <option value="FIP-2">FIP-2</option>
            <option value="FIP-3">FIP-3</option>
            <option value="FIP-4">FIP-4</option>
            <option value="FIP-5">FIP-5</option>
            <option value="FIP-6">FIP-6</option>
            <option value="FIP-7">FIP-7</option>
            <option value="FIP-8">FIP-8</option>
            <option value="FIP-9">FIP-9</option>
            <option value="FIP-10">FIP-10</option>
            <option value="FIP-11">FIP-11</option>
            <option value="FIP-12">FIP-12</option>
            <option value="FIP-13">FIP-13</option>
            <option value="FIP-14">FIP-14</option>
            <option value="FIP-15">FIP-15</option>
            <option value="FIP-16">FIP-16</option>
            <option value="FIP-17">FIP-17</option>
            <option value="FIP-18">FIP-18</option>
            <option value="FIP-19">FIP-19</option>
            <option value="FIP-20">FIP-20</option>
            <option value="FIP-21">FIP-21</option>
            <option value="FIP-22">FIP-22</option>
            <option value="FIP-23">FIP-23</option>
            <option value="FIP-24">FIP-24</option>
            <option value="FIP-25">FIP-25</option>
            <option value="FIP-26">FIP-26</option>
            <option value="FIP-27">FIP-27</option>
            <option value="FIP-28">FIP-28</option>
            <option value="FIP-29">FIP-29</option>
            <option value="FIP-30">FIP-30</option>
            <option value="FIP-31">FIP-31</option>
            <option value="FIP-32">FIP-32</option>
            <option value="FIP-33">FIP-33</option>
            <option value="FIP-34">FIP-34</option>
            <option value="FIP-35">FIP-35</option>
            <option value="FIP-36">FIP-36</option>
            <option value="FIP-37">FIP-37</option>
            <option value="FIP-38">FIP-38</option>
            <option value="FIP-39">FIP-39</option>
            <option value="FIP-40">FIP-40</option>
            <option value="FIP-41">FIP-41</option>
            <option value="FIP-42">FIP-42</option>
            <option value="FIP-43">FIP-43</option>
            <option value="FIP-44">FIP-44</option>
            <option value="FIP-45">FIP-45</option>
            <option value="FIP-46">FIP-46</option>
            <option value="FIP-47">FIP-47</option>
            <option value="FIP-48">FIP-48</option>
            <option value="FIP-49">FIP-49</option>
            <option value="FIP-50">FIP-50</option>
            <option value="FIP-51">FIP-51</option>
            <option value="FIP-52">FIP-52</option>
            <option value="FIP-53">FIP-53</option>
            <option value="FIP-54">FIP-54</option>
            <option value="FIP-55">FIP-55</option>
            <option value="FIP-56">FIP-56</option>
            <option value="FIP-57">FIP-57</option>
            <option value="FIP-58">FIP-58</option>
            <option value="FIP-59">FIP-59</option>
            <option value="FIP-60">FIP-60</option>
            <option value="FIP-61">FIP-61</option>
            <option value="FIP-62">FIP-62</option>
            <option value="FIP-63">FIP-63</option>
          </select>
        </label>
        <button
          onClick={() => signMessage()}
          className="bg-green-500 shadow-md  py-3 px-4 rounded-md"
        >
          Start Votes
        </button>
      </div>
    </ContainerDiv>
  );
}
