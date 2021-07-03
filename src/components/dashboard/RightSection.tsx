import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import React from "react";
import Datepicker from "../Datepicker";
import Paper from "@material-ui/core/Paper";
import { List, ListItem, ListItemText, Grid } from "@material-ui/core";
import FullWidthTabs from "../FullWidthTabs";
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        maxWidth: 752,
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        margin: theme.spacing(4, 0, 2),
    },
    pd: {
        padding: 0,
    },
    bd: {
        border: '1px solid gray',
        margin: '5px'
    }
}));

const theme = createMuiTheme({
    typography: {
      fontSize: 8,
    },
  });
  
export default function RightSection(props){
    const classes = useStyles();
    return (
        <Paper className={classes.root}>
            <Datepicker />
            <Grid spacing={2} className={classes.bd}>
                <Grid item xs={12} md={6}>
                    <List>
                        {props.data.map((item) => (
                            <ThemeProvider theme={theme}>
                                <ListItem className={classes.pd}>
                                    <ListItemText primary={item.name}/>
                                    <ListItemText primary={item.value}/>
                                </ListItem>
                            </ThemeProvider>
                        ))}
                    </List>
                </Grid>
                <Grid item xs={12} md={6}></Grid>
            </Grid> 
            <Grid>
                 <FullWidthTabs/>
            </Grid>           
        </Paper>
        
    );

};