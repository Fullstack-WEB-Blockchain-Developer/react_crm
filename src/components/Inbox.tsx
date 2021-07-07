import React from 'react';
import { makeStyles, withStyles  } from '@material-ui/core/styles';
import { Grid, Paper, Typography, IconButton, Tooltip  } from '@material-ui/core';
import {Print, Launch, AccountCircle, StarBorder, Reply, MoreVert, DoubleArrow} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(16),
            height: theme.spacing(16),
        },
    },
    paper: {
        width: '100%'
    },
    iconLM: {
        textAlign: 'right'
    },
    breadcrumbsFont: {
        fontSize: '12px',
        alignItems: 'center'
    },
    containerP: {
        padding: '20px 25px 0px 25px'
    }, 
    table: {
      minWidth: 'auto',
    },
    caret: {
        height: 15,
        backgroundImage: 'url(https://www.gstatic.com/images/icons/material/system/1x/arrow_drop_down_black_20dp.png)',
        width: 15,
        cursor: 'pointer',  
    },
    cellflex: {
        display: 'flex',
        fontSize: '12px'
    },
    font: {
        fontSize: '12px',
        lineHeight: 'o.5'
    }
}));

export default function Inbox(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Paper elevation={3} className={classes.paper} style={{minHeight: 670}}>
            <Grid xs={12} container className={classes.containerP}>
                <Grid xs={6} item container className={classes.breadcrumbsFont}>
                    <Grid item xs={'auto'}>{props.data[0].value} - {props.data[1].value}</Grid>
                    <DoubleArrow />
                    <Grid item>Follow up</Grid>
                </Grid>
                <Grid xs={6} item className={classes.iconLM}>
                    <Tooltip title="Print" arrow>
                        <IconButton color="inherit">
                            <Print />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Launch" arrow>
                        <IconButton color="inherit">
                            <Launch />
                        </IconButton>
                    </Tooltip>
                </Grid>
            </Grid>
            <Grid xs={12} container className={classes.containerP} >
                <Grid item container xs={6}>
                    <Grid item xs={2} alignItems='center'>
                        <AccountCircle style={{fontSize: '40px'}}/>
                    </Grid>
                    <Grid item container xs={10}>
                        <Grid item xs={12}>{props.data[2].value}</Grid>
                        <Grid item xs={12} style={{display: 'flex'}}>
                            <Typography className={classes.font}>to me</Typography>
                            <div className={classes.caret}></div>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item container xs={6} alignItems={'center'} direction={'row-reverse'}>
                    <Grid item xs={'auto'}>
                        <Tooltip title="MoreVert" arrow>
                            <IconButton color="inherit">
                                <MoreVert />
                            </IconButton>
                        </Tooltip>
                    </Grid>
                    <Grid item xs={'auto'}>
                        <Tooltip title="Reply" arrow>
                            <IconButton color="inherit">
                                <Reply />
                            </IconButton>
                        </Tooltip>
                    </Grid>
                    <Grid item xs={'auto'}>
                        <Tooltip title="StarBorder" arrow>
                            <IconButton color="inherit">
                                <StarBorder />
                            </IconButton>
                        </Tooltip>
                    </Grid>
                    <Grid item xs={'auto'}>
                        {props.data[3].value} beforeTime
                    </Grid>
                </Grid>
            </Grid>
            <Grid xs={12}>

            </Grid>
        </ Paper>
    </div>
  );
}
