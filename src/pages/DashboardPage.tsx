import React from "react";
import { Grid } from '@material-ui/core';
import Data from "../data";

import LeadsSidebar from '../components/dashboard/leadsSidebar'
import SearchTask from '../components/dashboard/searchTask'
import RightSection from '../components/dashboard/RightSection'
import Inbox from '../components/Inbox';

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
              <Inbox />
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
