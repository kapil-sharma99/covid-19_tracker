import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";

function InfoBox({ title, cases, total }) {
  return (
    <Card>
      <CardContent>
        {/* Title i.e. CORONA VIRUS CASES*/}
        {/* Number of cases i.e. +2000*/}
        {/* total i.e. 1.2M*/}
      </CardContent>
    </Card>
  );
}

export default InfoBox;
