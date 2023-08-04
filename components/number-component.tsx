"use client";
import { useState } from "react";
import useSWR, { mutate } from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.text());
function getNumberDetails(n: number) {
  const { data, error } = useSWR("http://numbersapi.com/" + n, fetcher);
  return {
    data: data,
    error: error,
  };
}
export default function NumberComponent() {
  const handleChange = (e) => {
    setN(e.target.value);
  };
  const doRefresh = () => {
    mutate("http://numbersapi.com/" + n);
  };
  const [n, setN] = useState(3);
  const { data, error } = getNumberDetails(n);
  if (error)
    return <div className="p-2 m-2">Failed to load : {error.message}</div>;
  if (!data) return <div className="p-2 m-2">Loading...</div>;
  return (
    <div className="p-2 m-2">
      <div>
        <input value={n} className="p-2 " onChange={(e) => handleChange(e)} />
        <button
          onClick={doRefresh}
          className="p-2 ml-3 border border-blue-500 rounded"
        >
          Refresh
        </button>
      </div>
      <div style={{ width: 200, overflow: "scroll" }} className="pt-2 ">
        <h1>{data}</h1>
      </div>
    </div>
  );
}
