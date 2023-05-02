import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
function Tag() {
  const [randomGif, setRandomGif] = useState("");
  const [loading, setLoading] = useState(false);
  const [tag, setTag] = useState("car");
  async function fetchData() {
    setLoading(true);
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    const { data } = await axios.get(url);
    const imageSource = data.data.images.downsized_large.url;
    setRandomGif(imageSource);
    setLoading(false);
  }
  useEffect(() => {
    fetchData();
  }, []);
  function clickHandler() {
    fetchData();
  }
  function changeHandler(event) {
    setTag(event.target.value);
  }
  return (
    <div className="bg-blue-500 md:w-[40%] w-full mx-auto h-[100%] mt-4 border border-green-900 rounded-md flex flex-col gap-y-1 text-center justify-between">
      <h1 className="underline mt-2  font-bold text-2xl uppercase">
        RANDOM {tag} GIF
      </h1>
      {loading ? (
        <Spinner />
      ) : (
        <img src={randomGif} width={450} className="mx-auto" />
      )}
      <input
        type="text"
        name=""
        id=""
        value={tag}
        className="md:w-10/11 w-[200px] py-2 text-lg mx-auto rounded-md mb-[3px] text-center"
        onChange={changeHandler}
      />
      <button
        onClick={clickHandler}
        className="mb-2 bg-white bg-opacity-70 max-w-max mx-auto px-[12px] py-[8px] rounded-md"
      >
        Generate
      </button>
    </div>
  );
}

export default Tag;
