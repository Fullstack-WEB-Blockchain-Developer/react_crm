import React from "react";
import Assessment from "@material-ui/icons/Assessment";
import Face from "@material-ui/icons/Face";
import ThumbUp from "@material-ui/icons/ThumbUp";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import { Drawer, CssBaseline, AppBar, Toolbar, List, Typography, Paper } from '@material-ui/core'
import InfoBox from "../components/dashboard/InfoBox";
import NewOrders from "../components/dashboard/NewOrders";
import MonthlySales from "../components/dashboard/MonthlySales";
import BrowserUsage from "../components/dashboard/BrowserUsage";
import LineBarChart from "../components/dashboard/LineBarChart";
import Data from "../data";
import LeadsSidebar from '../components/leadsSidebar'
import SearchAppBar from '../components/searchTask'
import { cyan, pink, purple, orange, grey } from "@material-ui/core/colors";
import { Grid } from "@material-ui/core";

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
    padding: "0.5em",
  },
  content:{
    paddingTop:60,
    padding:20,
  }
};

const DashboardPage = () => {
  return (
    <div style={styles.content}>
      <Grid style={styles.container} spacing={1}>
        <Grid item style={styles.cell} xs={12} md={3} >
          <LeadsSidebar/>
          <Paper/>
          <InfoBox
            Icon={ShoppingCart}
            spanBgColor={pink600}
            title="Total Profit"
            value="1500k"
          />
        </Grid>
        <Grid item style={styles.cell} xs={12} md={9}>
          <Grid xs={12} >
            <SearchAppBar/>
          </Grid>
          <Grid spacing={1}>
            <Grid >
              <Paper></Paper>
            </Grid>
            <Grid>
            <Paper></Paper>
            </Grid>
          </Grid>
          <InfoBox
            Icon={Assessment}
            spanBgColor={purple600}
            title="Sales"
            value="460"
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default DashboardPage;
