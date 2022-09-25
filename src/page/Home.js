import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import NewsItem from "../Components/NewsItem/NewsItem";
import "./main.css";
import { SpinnerDiamond } from "spinners-react";

const PAGE_NUMBER = 1;

const Home = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(PAGE_NUMBER);
  const [loading, setLoading] = useState(false);


  const Api = `https://newsapi.org/v2/everything?q=all&page=${page}&apiKey=4d2b67e68d3541f89cf4311152a33577&pageSize=12`;

  const fetchData = async () => {
    const res = await fetch(Api);
    const parsedData = await res.json();
    setData((prev) => {
      return [...prev, ...parsedData.articles];
    });
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = async () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setLoading(true);
      setPage((prev) => prev + 1);
    }
  };
  return (
    <>
      <h1 className="text-center"> Hot News </h1>
      <div className="main">
        {data.map((e) => {
          return (
            <NewsItem
            key={Math.random()}
              image={e.urlToImage}
              title={e.title}
              description={
              e.description ? e.description.slice(0, 40) : "No Data Found"
              }
              author={e.author}
              webUrl={e.url}
            />
          );
        })}
      </div>
      <div className="text-center mt-5">
        {loading && <div className="d-flex justify-content-center"><SpinnerDiamond size={50} thickness={138} speed={137} color="rgba(172, 57, 59, 1)" secondaryColor="rgba(172, 166, 57, 1)" /></div>}
      </div>
    </>
  );
};

export default Home;
