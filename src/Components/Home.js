import React from "react";
import HomeItem from "./HomeItem";

const Home = (props) => {
  return (
    <main className="bg-[#eaeaea]">
      <section className="flex justify-between container pt-4">
        <div className="w-[30%] rounded-lg bg-[#fff] h-full  px-3">
          <p className="mt-2 text-lg font-bold">Top Stories</p>
          <HomeItem
            category="general"
            apiKey={props.apiKey}
            country="in"
            page="1"
            pageSize="12"
            styling="1"
          />
        </div>
        <div className=" h-full w-[65%] rounded-lg">
          <p className="bg-[#555152] inline-block px-2 py-1 text-white font-bold">
            Sports
          </p>
          <div className=" h-[300px] flex justify-between">
            <HomeItem
              defaultimg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIs_lXj2CN6PZHDtDn5DfMn-UwQ43DaAPUdw&usqp=CAU"
              category="sports"
              apiKey={props.apiKey}
              country="in"
              page="1"
              pageSize="3"
              styling="2"
            />
          </div>
          <p className="bg-[#555152] inline-block px-2 py-1 text-white font-bold  mt-3">
            Entertainment
          </p>
          <div className="h-[300px] flex justify-between">
            <HomeItem
              defaultimg="https://www.pngitem.com/pimgs/m/328-3283165_entertainment-vector-music-dj-hd-png-download.png"
              category="entertainment"
              apiKey={props.apiKey}
              country="in"
              page="1"
              pageSize="3"
              styling="2"
            />
          </div>
          <p className="bg-[#555152] inline-block px-2 py-1 text-white font-bold  mt-3">
            Business
          </p>
          <div className="h-[300px] flex justify-between">
            <HomeItem
              defaultimg="https://img.freepik.com/free-vector/business-people-working-celebrating-success-rising-arrow_1262-19724.jpg?q=10&h=200"
              category="business"
              apiKey={props.apiKey}
              country="in"
              page="1"
              pageSize="3"
              styling="2"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;

{
  /* <section>
{articles1.map((ele, index) => {
  if (index == 0) {
    console.log(articles1);
    return <img src={ele.urlToImage} alt="" />;
  } else {
    return (
      <span className="inline-block w-1/3">
        <img src={ele.urlToImage} alt="" />
      </span>
    );
  }
})}
</section> */
}
