import { makeStyles } from '@material-ui/core/styles';
import React from "react";
import SearchInput from 'react-search-input';
import SimpleDatepicker from "../SimpleDatepicker";
import Paper from "@material-ui/core/Paper";
import "./search_input.css"
import { List, ListItem, CssBaseline } from "@material-ui/core";
import LeadCard from "./leadCard";

// const KEYS_TO_FILTERS = ['user.name', 'subject', 'dest.name']

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
    height: '792px'
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
    padding: 0,
    maxHeight: `calc(100% - 160px)`,
    height: '624px'
  },
  list: {
    margin: theme.spacing(1),
    position: 'relative',
    overflow: 'auto',
    height:"570px",
    fontSize:"11px",
  },
  pad: {
    paddingLeft: 0,
    paddingRight: 0
  }
}));

const selectedDay = (val) =>{
  console.log(val)
};

export default function LeadSidebar(props) {
  const classes = useStyles();
  // const filteredEmails = emails.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
  return (
    <Paper elevation={3} className={classes.root} >
      <SearchInput className={`${classes.search} search-input`}/>
      <Paper variant="outlined" className={classes.datepicker} >        
        <SimpleDatepicker
          beforeDate={3} 
          endDate={6} 
          selectDate={""}
          getSelectedDay={selectedDay} 
          labelFormat={"MMMM yyyy E"} 
          color={"#374e8c"} 
          language={"en"} /> 
      </Paper>
      <CssBaseline />
      <Paper elevation={3} className={classes.paper}>
        <List className={classes.list}>
        {[0, 1, 2, 3, 4].map((item) => (
          <ListItem key={`item--${item}`}  className={classes.pad} >
            <LeadCard data={props.data.information} />
          </ListItem>
          ))}
        </List>
      </Paper>
    </Paper>
  );
};