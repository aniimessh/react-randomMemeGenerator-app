// import React from 'react'
import axios from "axios";
import { useState, useEffect } from "react";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
// const TagUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
function useGif(tag) {
  const [randomGif, setRandomGif] = useState("");
  const [loading, setLoading] = useState("false");
  async function fetchData() {
    setLoading(true);
    const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);
    const imageSource = data.data.images.downsized_large.url;
    setRandomGif(imageSource);
    setLoading(false);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return { randomGif, loading, fetchData };
}

export default useGif;
