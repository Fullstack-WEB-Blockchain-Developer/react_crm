import { makeStyles } from '@material-ui/core/styles';
import React from "react";
import Datepicker from "../Datepicker";
import Paper from "@material-ui/core/Paper";
import FullWidthTabs from "../FullWidthTabs";
import PaperInfo from '../PaperInfo';

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        maxWidth: 'auto',
        height: '100%',
        marginTop: 8
    }
}));

const selectedDay = (val) =>{
    console.log(val)
  };
  
export default function RightSection(props){
    const classes = useStyles();
    return (
        <Paper className={classes.root}  elevation={3}>
            <Datepicker
                beforeDate={3} 
                endDate={6} 
                selectDate={""}
                getSelectedDay={selectedDay} 
                labelFormat={"MMMM yyyy E"} 
                color={"#374e8c"} 
                language={"en"} />
            <PaperInfo data={props.data.information} />            
            <FullWidthTabs data={props.data.appointment} />
        </Paper>        
    );

};