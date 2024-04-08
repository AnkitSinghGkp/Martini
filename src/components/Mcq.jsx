import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function Mcq({ $id, qus, option, ans }) {
  return (
    <div className="w-full bg-gray-100 rounded-xl p-4">
      <p>{$id}</p>
      <h2 className="text-xl font-bold">{qus}</h2>
      <p>{option}</p>
      <p>{ans}</p>
    </div>
  );
}
export default Mcq;
