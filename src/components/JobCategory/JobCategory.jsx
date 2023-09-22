import React, { useEffect, useState } from "react";
import JobCategoryDetails from "../JobCategoryDetails/JobCategoryDetails";

const JobCategory = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("../../../public/data/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <div>
        <h2 className="text-5xl font-semibold text-center">
          Job Category List {categories.length}
        </h2>
        <p className="text-center my-3">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 xl:px-0 gap-5">
        {categories.map((category) => (
          <JobCategoryDetails key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default JobCategory;
