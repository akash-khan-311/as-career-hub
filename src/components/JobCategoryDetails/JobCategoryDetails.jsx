import React from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";

const JobCategoryDetails = ({ category }) => {
  const { category_name, availability, logo } = category;
  console.log(category);
  return (
    <Card className="my-10 backdrop-blur-sm bg-white/10 text-white hover:bg-white/40 cursor-pointer transition-all hover:translate-y-5">
      <CardBody>
        <img className="my-5" src={logo} alt="" />
        <Typography variant="h5" className="mb-2">
          {category_name}
        </Typography>
        <Typography>{availability}</Typography>
      </CardBody>
    </Card>
  );
};

export default JobCategoryDetails;
