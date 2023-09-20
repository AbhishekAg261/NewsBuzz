import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const HomeItem = (props) => {
  const [articles, setArticles] = useState([]);

  const updateNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${props.page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
  };

  useEffect(() => {
    updateNews();
    // eslint-disable-next-line
  }, []);

  return articles.map((element) => {
    {
      if (props.styling == 1) {
        return (
          <a
            target="_blank"
            href={element.url}
            className="flex h-[10vh] mt-2 mb-2 items-center gap-2 rounded-lg shadow-xl"
            key={element.url}
          >
            <img
              src={
                !element.urlToImage
                  ? "https://newsinterpretation.com/wp-content/uploads/2020/03/news33.jpg"
                  : element.urlToImage
              }
              className="w-[30%] h-full rounded-l-md"
              alt=""
              onError={(e) => {
                e.target.src =
                  "https://newsinterpretation.com/wp-content/uploads/2020/03/news33.jpg";
              }}
            />
            <p className="text-sm font-bold">{element.title.slice(0, 60)}...</p>
          </a>
        );
      } else if (props.styling == 2) {
        return (
          <a
            target="_blank"
            href={element.url}
            key={element.url}
            className="w-[32%] bg-[#fff] rounded-lg shadow-md"
          >
            <div className="h-[70%] overflow-hidden">
              <img
                className="h-full w-full rounded-t-lg hover:scale-110 transition duration-500 cursor-pointer object-cover"
                src={
                  !element.urlToImage ? props.defaultimg : element.urlToImage
                }
                alt="sadsada"
                onError={(e) => {
                  e.target.src =
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIs_lXj2CN6PZHDtDn5DfMn-UwQ43DaAPUdw&usqp=CAU";
                }}
              />
            </div>
            <p className="px-2 py-2 text-sm font-medium hover:underline">
              {element.title.slice(0, 90)}...
            </p>
          </a>
        );
      }
    }
  });
};

export default HomeItem;
