import { useState } from "react";
import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return (
    <div className="w-[100%] h-screen flex flex-col background">
      <h1 className="bg-white text-black w-11/12 mx-auto p-4 rounded-md m-6 text-center font-bold text-3xl mb-0">RANDOM GIFS</h1>
      <div className="flex gap-x-5 flex-col md:flex-row w-screen justify-evenly">
        <Random/>
        <Tag/>
      </div>
    </div>
  );
}
