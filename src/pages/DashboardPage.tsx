import React from "react";
import { Drawer, CssBaseline, AppBar, Toolbar, List, Typography, Paper, Grid } from '@material-ui/core';
import Data from "../data";

import LeadsSidebar from '../components/dashboard/leadsSidebar'
import SearchTask from '../components/dashboard/searchTask'
import RightSection from '../components/dashboard/RightSection'
import { cyan, pink, purple, orange, grey } from "@material-ui/core/colors";
import Inbox from '../components/Inbox';


const cyan600 = cyan["600"];
const pink600 = pink["600"];
const purple600 = purple["600"];
const orange600 = orange["600"];
const grey600 = grey["600"];

const styles = {
  navigation: {
    fontSize: 15,
    fontWeight: 400, //TypographyStyle.fontWeightLight,
    color: "grey600",
    // paddingBottom: 15,
    display: "block",
  },
  cell: {
    padding: "0.5em",
  },
};

const DashboardPage = () => {
  return (
    <>
      <Grid container >
        <Grid style={styles.cell} xs={12} md={3} >
          <LeadsSidebar data={Data.dashBoardPage.rightSection} />
        </Grid>
        <Grid  xs={12} md={9}>
          <Grid  xs={12}  >
            <SearchTask/>
          </Grid>
          <Grid container style={{height: `calc(100% - 50px * 2)`}} >
            <Grid style={styles.cell} xs={12} md={8}>
              {/* <InfoBox
                Icon={Assessment}
                spanBgColor={purple600}
                title="Sales"
                value="460"
              />               */}
              <Inbox/>
            </Grid>
            <Grid xs={12} md={4} style={styles.cell} >
              <RightSection data={Data.dashBoardPage.rightSection} />
              <Paper></Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default DashboardPage;
