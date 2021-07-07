import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

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
}));

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

export default function Inbox() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={3} >
          <Grid xs={12}>
              <Grid>
                <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                    <Link color="inherit" href="/" onClick={handleClick}>
                        New Mail
                    </Link>
                    <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
                        Sample Creative
                    </Link>
                    <Typography color="textPrimary">Follow up</Typography>
                </Breadcrumbs> 
              </Grid>
              <Grid>
                  
              </Grid>
          </Grid>
          <Grid xs={12}>

          </Grid>
          <Grid xs={12}>

          </Grid>
      </ Paper>
    </div>
  );
}
