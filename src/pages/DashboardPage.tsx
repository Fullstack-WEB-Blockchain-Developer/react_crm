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
    fontWeight: 400, 
    color: "grey600",
    // paddingBottom: 15,
    display: "block",
  },
  cell: {
    padding: "0.5em",
  }
};

const DashboardPage = () => {
  return (
    <>
      <Grid container >
        <Grid item xs={12} md={3} style={{height: '819px'}}>
          <LeadsSidebar data={Data.dashBoardPage.rightSection} />
        </Grid>
        <Grid item container xs={12} md={9}>
          <Grid item xs={12}  >
            <SearchTask/>
          </Grid>
          <Grid item container style={{height: `calc(100% - 50px * 2)`}} >
            <Grid item style={styles.cell} xs={12} md={8}>
              <Inbox data={Data.dashBoardPage.inbox}/>
            </Grid>
            <Grid item style={styles.cell} xs={12} md={4} >
              <RightSection data={Data.dashBoardPage.rightSection} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}></Grid>
      </Grid>
    </>
  );
};

export default DashboardPage;
