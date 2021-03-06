import React from "react";
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { FixedSizeList, ListChildComponentProps } from 'react-window';
import {Card, Grid} from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import SendIcon from '@material-ui/icons/Send';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import Avatar from '@material-ui/core/Avatar'
import CardHeader from '@material-ui/core/CardHeader'
import MoreVertIcon from '@material-ui/icons/MoreVert'



const useStyles = makeStyles((theme) => ({
  root: {
    margin: "15px 0",
    width: "100%",
  },
  title: {
    backgroundColor: "#00acc1",
    height: "24px",
    width:"100px,",
    margin: "0 20px 0 10px",
    padding: "4px",
    borderRadius:"3px",
  },
  iconbutton: {
    border: "1px solid", 
    padding: "3px",
    margin: "3px",
    justifyContent:"space-evenly",
    backgroundColor:"white"
  },
  ContentHead:{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "50px",
    transform:"translate(-0px,-25px)",
    zIndex: 1000,
    position: "absolute"
  },
  card: {
    padding: "25px 8px"
  },
  content:{
    fontSize:"10px",
  }
}));

export default function LeadCard(props) {
  let classes = useStyles();
  return(
    <Card className={classes.root} elevation={3}>
      <div className={classes.ContentHead}>
        <p className={classes.title} >
          <Typography variant="subtitle2">Email Replied</Typography>
        </p>
        <IconButton className={classes.iconbutton} >
          <DirectionsCarIcon/>
        </IconButton>
        <IconButton className={classes.iconbutton} >
          <DeleteForeverIcon/>
        </IconButton>
        <IconButton className={classes.iconbutton} >
          <SendIcon/>
        </IconButton>
        <IconButton color="secondary" className={classes.iconbutton} >
          <AutorenewIcon/>
        </IconButton>
      </div>
      <CardContent className={classes.card}>
        <Grid container xs={12} md={12} >
          {props.data.map((item) => (
            <Grid item xs={6} >
              <Typography className={classes.content} display="inline">{item.name}</Typography>
              <Typography className={classes.content} display="inline">{item.value}</Typography>
            </Grid>
          ))} 
        </Grid>
      </CardContent>
    </Card>
  );
};