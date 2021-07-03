import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { InputBase, Button } from '@material-ui/core';
import { createStyles, fade, Theme, makeStyles } from '@material-ui/core/styles';
import AppsIcon from '@material-ui/icons/Apps';
import SearchIcon from '@material-ui/icons/Search';
import { cyan, pink, purple, orange, grey } from "@material-ui/core/colors";
const grey600 = grey["300"];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    bar:{
      backgroundColor: grey600,
      margin: "0.5em",
      fontSize: 10,
    },
    button: {
      margin: "3px",
      borderRadius: "0 4px 0 4px",
    },
    title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    link: {
      fontWeight: 300,
      padding: "2px",
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
    apps: {
      color: "black",
      margin: "3px",
      justifyContent: "inherit",
    },
  }),
);

export default function SearchTask() {
  const classes = useStyles();

  return (
    <div className={classes.root} >
      <AppBar position="static" className={classes.bar} >
        <Toolbar  variant="dense">
          <Button variant="contained" size="small" className={classes.button} style={{ backgroundColor: "#20d8ff" }}>
            Pending
          </Button>
          <Button variant="contained" size="small" className={classes.button} style={{ backgroundColor: "#dfd8ff" }}>
            Scheduled
          </Button>
          <Button variant="contained" size="small" className={classes.button} style={{ backgroundColor: "#fff8ff" }}>
            Replied
          </Button>
          <Button variant="contained" size="small" className={classes.button} style={{ backgroundColor: "#80d8ff" }}>
            Accomplished
          </Button >
          {['Email', 'Call', 'SMS', 'Appt', 'Build', 'Note', 'Solid'].map((text, index) => (
            <Button className={classes.link}  key={text}>
              {text}
            </Button>
          ))}
          <Button variant="contained" size="medium" className={classes.button} style={{ borderRadius: "4px" }}>
            Creat leads
          </Button>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search Tasks"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <IconButton
            edge="end"
            className={classes.apps}
          >
            <AppsIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}