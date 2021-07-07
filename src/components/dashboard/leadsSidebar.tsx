import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import React from "react";
import SearchInput, {createFilter} from 'react-search-input'
import Datepicker from "../Datepicker";
import Paper from "@material-ui/core/Paper";
import "./search_input.css"
import { List, ListItem, ListItemText, Grid, CssBaseline, Drawer } from "@material-ui/core";
import FullWidthTabs from "../FullWidthTabs";
import LeadCard from "./leadCard";

// const KEYS_TO_FILTERS = ['user.name', 'subject', 'dest.name']

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "0 0 10px 0",
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
  search: {
    borderWidth:"0 0 1px 0",
    borderStyle: "solid",
    borderColor: "#8080806b",
    margin: "5px 20px",
  },
  paper: {
    padding: "15px 0",
    // maxHeight: `calc(100% - 240px)`
  },
  list: {
    margin: theme.spacing(1),
    position: 'relative',
    overflow: 'auto',
    height:"500px",
    fontSize:"11px",
  },
}));

export default function LeadSidebar(props) {
  const classes = useStyles();
  // const filteredEmails = emails.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
  return (
    <Paper variant="outlined" elevation={3} className={classes.root} >
      {/* <SearchInput className="search-input" onChange={this.searchUpdated} /> */}
      <SearchInput className={`${classes.search} search-input`}/>
      <Paper variant="outlined" className={classes.datepicker} >
      <input type="week" name="week" id="camp-week"
        />
        
      </Paper>
      <CssBaseline />
      <Paper elevation={3} className={classes.paper}>
        <List className={classes.list}>
        {[0, 1, 2, 3, 4].map((item) => (
          <ListItem key={`item--${item}`}  >
            {/* <ListItemText primary={`Item ${item}`} /> */}
            <LeadCard data={props.data.information} />
          </ListItem>
          ))}
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
    </Paper>
  );
};