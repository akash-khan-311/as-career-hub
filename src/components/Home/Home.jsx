import React from "react";
import Banner from "../Banner/Banner";
import JobCategory from "../JobCategory/JobCategory";
import FeauredJob from "../FeaturedJob/FeauredJob";

const Home = () => {
  return (
    <div>
      <Banner />
      <JobCategory />

      <FeauredJob />
    </div>
  );
};

export default Home;
