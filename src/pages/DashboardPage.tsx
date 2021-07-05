import React from "react";
import Assessment from "@material-ui/icons/Assessment";
import Face from "@material-ui/icons/Face";
import ThumbUp from "@material-ui/icons/ThumbUp";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import InfoBox from "../components/dashboard/InfoBox";
import NewOrders from "../components/dashboard/NewOrders";
import MonthlySales from "../components/dashboard/MonthlySales";
import BrowserUsage from "../components/dashboard/BrowserUsage";
import LineBarChart from "../components/dashboard/LineBarChart";
import Data from "../data";

import { cyan, pink, purple, orange, grey } from "@material-ui/core/colors";
import { Grid } from "@material-ui/core";

import RightSection from "../components/dashboard/RightSection";

const cyan600 = cyan["600"];
const pink600 = pink["600"];
const purple600 = purple["600"];
const orange600 = orange["600"];
const grey600 = grey["600"];

const styles = {
  navigation: {
    fontSize: 15,
    fontWeight: 400, //TypographyStyle.fontWeightLight,
    color: grey600,
    // paddingBottom: 15,
    display: "block",
  },
  container: {
    marginTop: "3em",
  },
  cell: {
    padding: "1em",
  },
  content:{
    paddingTop:60,
    padding:20,
  }
};

const DashboardPage = () => {
  return (
    <div style={styles.content}>
      <Grid container style={styles.container} spacing={3}>
        <Grid item style={styles.cell} xs={12} sm={6} md={9} lg={9}></Grid>
        <Grid item style={styles.cell} xs={12} sm={6} md={3} lg={3}>
          <RightSection 
            data1={Data.dashBoardPage.rightSection.information} 
            data2={Data.dashBoardPage.rightSection.appointment} />
        </Grid>
      </Grid>
    </div>
  );
};

export default DashboardPage;
