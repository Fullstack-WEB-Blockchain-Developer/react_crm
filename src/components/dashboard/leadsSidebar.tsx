import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import React from "react";
import Datepicker from "../Datepicker";
import Paper from "@material-ui/core/Paper";
import { List, ListItem, ListItemText, Grid, CssBaseline, Drawer } from "@material-ui/core";
import FullWidthTabs from "../FullWidthTabs";
import LeadCard from "./leadCard";

const useStyles = makeStyles((theme) => ({
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
  datepicker: {
    margin: "5px",
  },
  card: {
    margin: "5px",
  },
  bd: {
    border: '1px solid gray',
    margin: '5px'
  },
  paper: {
    paddingBottom: 0,
  },
  list: {
    margin: theme.spacing(2),
  },
}));

const theme = createMuiTheme({
  typography: {
    fontSize: 8,
  },
});

export default function RightSection(props) {
  const classes = useStyles();
  return (
    <Paper variant="outlined" elevation={3} >
      <Paper variant="outlined" className={classes.datepicker} >
        <Datepicker />
      </Paper>
      {/* <Grid spacing={2} className={classes.bd}>
              <Grid item xs={12} md={6}> */}

      <CssBaseline />
      <Paper variant="outlined" className={classes.paper}>
        <List className={classes.list}>
          <LeadCard />
          {/* {messages.map(({ id, primary, secondary, person }) => (
            <React.Fragment key={id}>
              {id === 1 && <ListSubheader className={classes.subheader}>Today</ListSubheader>}
              {id === 3 && <ListSubheader className={classes.subheader}>Yesterday</ListSubheader>}
              <ListItem button>
                <ListItemAvatar>
                  <Avatar alt="Profile Picture" src={person} />
                </ListItemAvatar>
                <ListItemText primary={primary} secondary={secondary} />
              </ListItem>
            </React.Fragment>
          ))} */}
        </List>
      </Paper>

      {/* </Grid>
              <Grid item xs={12} md={6}></Grid>
          </Grid>  */}
    </Paper>

  );

};