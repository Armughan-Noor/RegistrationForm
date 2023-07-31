import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { TravelData } from "./FormData";

const DisplayFormData = () => {
  if (!TravelData || TravelData.length === 0) {
    return <div>No data available.</div>;
  }
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">Travel Data</Typography>
        {TravelData.map((data, index) => (
          <div key={index}>
            <h2>Place: {data.places}</h2>
            <p>City: {data.cities}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default DisplayFormData;
