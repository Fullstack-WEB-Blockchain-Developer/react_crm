import { makeStyles } from '@material-ui/core/styles';
import React from "react";
import Datepicker from "../Datepicker";
import Paper from "@material-ui/core/Paper";
import FullWidthTabs from "../FullWidthTabs";
import PaperInfo from '../PaperInfo';

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        maxWidth: 752,
    }
}));
  
export default function RightSection(props){
    const classes = useStyles();
    return (
        <Paper className={classes.root}  elevation={3}>
            <Datepicker />
            <PaperInfo data={props.data1} />            
            <FullWidthTabs data={props.data2} />
        </Paper>
        
    );

};